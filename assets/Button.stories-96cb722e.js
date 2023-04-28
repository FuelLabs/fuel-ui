import{b as j,a as d,j as n}from"./system-5118686d.js";import"./index-a12dea03.js";import{I as B}from"./index-e0df417c.js";import{B as e}from"./Button-74374672.js";import{B as r}from"./Box-bc767655.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./defs-32db6e6f.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";import"./import-b8fa3143.js";import"./Flex-06f185a8.js";import"./Stack-1df623d4.js";const Q={title:"UI/Button",component:e,argTypes:{onPress:{action:"pressed"},size:{defaultValue:"md",control:"select"},intent:{options:j,defaultValue:"primary",control:"select"},variant:{defaultValue:"solid",control:"select"},leftIcon:{options:B.iconList,control:"select"},rightIcon:{options:B.iconList,control:"select"}}},s=t=>d(r,{css:o.wrapper,children:[n(e,{...t,size:"xs",children:"Button"}),n(e,{...t,size:"sm",children:"Button"}),n(e,{...t,size:"md",children:"Button"}),n(e,{...t,size:"lg",children:"Button"})]}),a=t=>d(r,{css:o.wrapper,children:[n(e,{...t,variant:"solid",children:"Button"}),n(e,{...t,variant:"outlined",children:"Button"}),n(e,{...t,variant:"ghost",children:"Button"}),n(e,{...t,variant:"link",children:"Button"})]}),i=t=>n(r,{css:o.gridList,children:j.map(p=>n(e,{...t,intent:p,children:"Button"},p))}),c=t=>d(r,{css:o.wrapper,children:[n(e,{...t,size:"xs",leftIcon:"Calendar",leftIconAriaLabel:"calendar",children:"Button"}),n(e,{...t,size:"sm",leftIcon:"Calendar",leftIconAriaLabel:"calendar",children:"Button"}),n(e,{...t,size:"md",leftIcon:"Calendar",leftIconAriaLabel:"calendar",children:"Button"}),n(e,{...t,size:"lg",leftIcon:"Calendar",leftIconAriaLabel:"calendar",children:"Button"})]}),l=t=>n(r,{css:o.wrapper,children:n(e,{...t,isLoading:!0,children:"Button"})}),u=t=>n(r,{css:o.wrapper,children:n(e,{...t,isDisabled:!0,children:"Button"})}),o={wrapper:{display:"flex",alignItems:"center",gap:"$4"},gridList:{display:"grid",gap:"$4",gridTemplateColumns:"repeat(6, 1fr)"}};var m,g,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: ButtonProps) => {
  return <Box css={styles.wrapper}>
      <Button {...args} size="xs">
        Button
      </Button>
      <Button {...args} size="sm">
        Button
      </Button>
      <Button {...args} size="md">
        Button
      </Button>
      <Button {...args} size="lg">
        Button
      </Button>
    </Box>;
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,I,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`(args: ButtonProps) => <Box css={styles.wrapper}>
    <Button {...args} variant="solid">
      Button
    </Button>
    <Button {...args} variant="outlined">
      Button
    </Button>
    <Button {...args} variant="ghost">
      Button
    </Button>
    <Button {...args} variant="link">
      Button
    </Button>
  </Box>`,...(x=(I=a.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var z,L,y;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`(args: ButtonProps) => <Box css={styles.gridList}>
    {layerIntents.map(intent => <Button key={intent} {...args} intent={intent}>
        Button
      </Button>)}
  </Box>`,...(y=(L=i.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var b,w,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`(args: ButtonProps) => <Box css={styles.wrapper}>
    <Button {...args} size="xs" leftIcon="Calendar" leftIconAriaLabel="calendar">
      Button
    </Button>
    <Button {...args} size="sm" leftIcon="Calendar" leftIconAriaLabel="calendar">
      Button
    </Button>
    <Button {...args} size="md" leftIcon="Calendar" leftIconAriaLabel="calendar">
      Button
    </Button>
    <Button {...args} size="lg" leftIcon="Calendar" leftIconAriaLabel="calendar">
      Button
    </Button>
  </Box>`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var C,A,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(args: ButtonProps) => <Box css={styles.wrapper}>
    <Button {...args} isLoading>
      Button
    </Button>
  </Box>`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var P,V,D;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`(args: ButtonProps) => <Box css={styles.wrapper}>
    <Button {...args} isDisabled>
      Button
    </Button>
  </Box>`,...(D=(V=u.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const R=["Sizes","Variants","intents","WithIcon","Loading","Disabled"];export{u as Disabled,l as Loading,s as Sizes,a as Variants,c as WithIcon,R as __namedExportsOrder,Q as default,i as intents};
//# sourceMappingURL=Button.stories-96cb722e.js.map
