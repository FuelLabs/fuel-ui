import{b as $,a as m,j as e}from"./system-5118686d.js";import"./index-a12dea03.js";import{I as L}from"./index-e0df417c.js";import{T as r,a as k}from"./Tag-4a4d1c1f.js";import{B as s}from"./Box-bc767655.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./defs-32db6e6f.js";import"./index-2e110d33.js";import"./Button-74374672.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";import"./import-b8fa3143.js";import"./index-1fd431dc.js";import"./IconButton-15e5222d.js";import"./index-3ca0c1ce.js";import"./Tooltip-2a7480d3.js";import"./index.module-75a565db.js";import"./index.module-6cd25d47.js";import"./index.module-77288538.js";import"./index.module-8ba5fb57.js";import"./index.module-bc1d076c.js";import"./index.module-27477d06.js";import"./Flex-06f185a8.js";import"./Stack-1df623d4.js";const ma={component:r,title:"UI/Tag",argTypes:{size:{defaultValue:"sm",control:"select"},intent:{options:$,defaultValue:"accent",control:"select"},variant:{defaultValue:"solid",control:"select"},leftIcon:{options:L.iconList,control:"select"},rightIcon:{options:L.iconList,control:"select"}}},n=a=>m(s,{css:o.wrapper,children:[e(r,{...a,size:"xs",children:"Label"}),e(r,{...a,size:"sm",children:"Label"}),e(r,{...a,size:"md",children:"Label"})]}),t=a=>m(s,{css:o.wrapper,children:[e(r,{...a,variant:"solid",children:"Label"}),e(r,{...a,variant:"outlined",children:"Label"}),e(r,{...a,variant:"ghost",children:"Label"})]}),i=a=>e(s,{css:o.gridList,children:$.map(g=>e(r,{...a,intent:g,children:"Label"},g))}),l=a=>m(s,{css:o.wrapper,children:[e(r,{...a,size:"xs",leftIcon:"Calendar",leftIconAriaLabel:"calendar",children:"Label"}),e(r,{...a,size:"sm",leftIcon:"Calendar",leftIconAriaLabel:"calendar",children:"Label"}),e(r,{...a,size:"md",leftIcon:"Calendar",leftIconAriaLabel:"calendar",children:"Label"})]}),c=a=>e(s,{css:o.wrapper,children:m(r,{...a,leftIconAriaLabel:"calendar",children:["Label",e(k,{})]})}),p=a=>e(s,{css:o.wrapper,children:e(r,{...a,isLoading:!0,children:"Label"})}),d=a=>e(s,{css:o.wrapper,children:e(r,{...a,isDisabled:!0,children:"Label"})}),o={wrapper:{display:"flex",alignItems:"center",gap:"$4"},gridList:{display:"grid",gap:"$4",gridTemplateColumns:"repeat(6, 1fr)"}};var T,b,u;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`(args: TagProps) => <Box css={styles.wrapper}>
    <Tag {...args} size="xs">
      Label
    </Tag>
    <Tag {...args} size="sm">
      Label
    </Tag>
    <Tag {...args} size="md">
      Label
    </Tag>
  </Box>`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,I,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args: TagProps) => <Box css={styles.wrapper}>
    <Tag {...args} variant="solid">
      Label
    </Tag>
    <Tag {...args} variant="outlined">
      Label
    </Tag>
    <Tag {...args} variant="ghost">
      Label
    </Tag>
  </Box>`,...(f=(I=t.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var x,B,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(args: TagProps) => <Box css={styles.gridList}>
    {layerIntents.map(intent => <Tag key={intent} {...args} intent={intent}>
        Label
      </Tag>)}
  </Box>`,...(z=(B=i.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var y,w,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`(args: TagProps) => <Box css={styles.wrapper}>
    <Tag {...args} size="xs" leftIcon="Calendar" leftIconAriaLabel="calendar">
      Label
    </Tag>
    <Tag {...args} size="sm" leftIcon="Calendar" leftIconAriaLabel="calendar">
      Label
    </Tag>
    <Tag {...args} size="md" leftIcon="Calendar" leftIconAriaLabel="calendar">
      Label
    </Tag>
  </Box>`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,A,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(args: TagProps) => <Box css={styles.wrapper}>
    <Tag {...args} leftIconAriaLabel="calendar">
      Label
      <TagCloseButton />
    </Tag>
  </Box>`,...(v=(A=c.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var P,V,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(args: TagProps) => <Box css={styles.wrapper}>
    <Tag {...args} isLoading>
      Label
    </Tag>
  </Box>`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var W,j,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`(args: TagProps) => <Box css={styles.wrapper}>
    <Tag {...args} isDisabled>
      Label
    </Tag>
  </Box>`,...(_=(j=d.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const ga=["Sizes","Variants","Intents","WithIcon","WithClose","Loading","Disabled"];export{d as Disabled,i as Intents,p as Loading,n as Sizes,t as Variants,c as WithClose,l as WithIcon,ga as __namedExportsOrder,ma as default};
//# sourceMappingURL=Tag.stories-f78ace60.js.map
