import { ButtonLink, ButtonLinkProps } from "./ButtonLink";

export default {
  component: ButtonLink,
  title: "UI/ButtonLink",
};

export const Usage = (args: ButtonLinkProps) => (
  <ButtonLink href="#" {...args}>
    Link
  </ButtonLink>
);

export const External = (args: ButtonLinkProps) => (
  <ButtonLink href="https://fuel.sh/" {...args} isExternal variant="link">
    Link
  </ButtonLink>
);
