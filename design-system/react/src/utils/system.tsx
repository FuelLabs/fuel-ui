/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx, styled } from '@fuel-ui/css';
import type { ForwardedRef, ReactElement, ReactNode } from 'react';
import { createElement, useMemo, forwardRef, cloneElement } from 'react';
import type { StoreDefs } from '~/defs';

import { useComponentProps } from '../hooks/useComponentProps';
import { useElementProps } from '../hooks/useElementProps';

import type { BaseProps } from './types';

export function createComponent<
  Props,
  ObjProps = unknown,
  ToOmit = unknown,
  HTMLElement = any,
  FinalProps = ToOmit extends string
    ? Omit<BaseProps<Props>, ToOmit>
    : BaseProps<Props>,
>(
  render: (
    props: FinalProps & { ref: ForwardedRef<HTMLElement> },
  ) => ReactElement | null,
) {
  const Component = forwardRef<HTMLElement, FinalProps>((props, ref) =>
    render({ ref, ...props }),
  );
  return Component as typeof Component & ObjProps;
}

export function useCreateStyledElement(
  type: any,
  style: any,
  styleProps: any,
  props: any,
  children?: ReactNode,
) {
  const Component = useMemo(() => styled(type, style), []);
  return (
    <Component {...styleProps} {...props}>
      {children}
    </Component>
  );
}

export type CreateComponent<
  Item extends {
    type: string;
    component: keyof StoreDefs;
    props: Record<string, any>;
    element: unknown;
    namespace?: Record<string, any> | undefined;
    omit?: string | undefined;
    styles?: string | undefined;
  },
> = {
  type: Item['type'];
  component: Item['component'];
  props: Item['props'];
  element: Item['element'];
  namespace: Item['namespace'] extends Record<string, any>
    ? Item['namespace']
    : null;
  omit: Item['omit'] extends string ? Item['omit'] : null;
  styles: Item['styles'] extends string ? Item['styles'] : null;
};

type GetProps<Def extends CreateComponent<any>> = Def['omit'] extends string
  ? Omit<BaseProps<Def['props']>, Def['omit']>
  : BaseProps<StoreDefs[Def['component']]['props']>;

type RenderFn<Def extends CreateComponent<any>> = (
  props: GetProps<Def> & { ref: ForwardedRef<Def['element']> },
) => ReactElement<GetProps<Def>> | null;

export function _unstable_createComponent<
  Def extends CreateComponent<any>,
  Component extends keyof StoreDefs = Def['component'],
>(component: Component, render: RenderFn<Def>) {
  const Comp = forwardRef<Def['element'], GetProps<Def>>((initProps, ref) => {
    const props = useComponentProps<Component>(
      component,
      initProps as GetProps<Def>,
    ) as GetProps<Def>;
    const el = render({ ref, ...props });
    const className = cx(el?.props?.className, props.className);
    return el
      ? (cloneElement(el as any, {
          ...(el?.props || {}),
          className,
        }) as ReturnType<RenderFn<Def>>)
      : null;
  });
  return Comp as Def['namespace'] extends Record<string, unknown>
    ? typeof Comp & Def['namespace']
    : typeof Comp;
}

export function _unstable_createEl<
  E extends React.ElementType,
  P extends Record<any, any>,
>(el: E, props: P, children?: ReactNode) {
  const elProps = useElementProps(props);
  const child = children ?? elProps?.children;
  return createElement(el, elProps, child);
}

type ExtendedProps<Props = {}, OverrideProps = {}> = OverrideProps &
  Omit<Props, keyof OverrideProps>;

type ElementType =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<
  C,
  React.ComponentPropsWithoutRef<C>
>;

type ComponentProp<C> = {
  as?: C;
};

type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<
  PropsOf<C>,
  Props
>;

export type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>['ref']
  : never;

export type PolymorphicComponentProps<
  C,
  Props = {},
> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { as: React.ElementType };

export function createPolymorphicComponent<Def extends CreateComponent<any>>(
  component: ReturnType<typeof _unstable_createComponent<Def>>,
) {
  type Props = Omit<GetProps<Def>, 'as'>;
  type ComponentProps<C> = PolymorphicComponentProps<C, Props>;

  type _PolymorphicComponent = <C = Def['type']>(
    props: ComponentProps<C>,
  ) => React.ReactElement<Props>;

  type ComponentProperties = Omit<React.FunctionComponent<Props>, never>;
  type PolymorphicComponent = _PolymorphicComponent &
    ComponentProperties &
    typeof component;

  const Comp = component as PolymorphicComponent;
  return Comp as Def['namespace'] extends Record<string, unknown>
    ? typeof Comp & Def['namespace']
    : typeof Comp;
}
