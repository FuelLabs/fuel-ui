import{a as c,j as a,b as x}from"./system-5118686d.js";import"./index-acaed7a3.js";import{B as r}from"./Badge-5f5e4689.js";import{T as g}from"./Text-385c8a0a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-74374672.js";import"./index-e0df417c.js";import"./extends-98964cd2.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./defs-32db6e6f.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";import"./import-b8fa3143.js";import"./index-2e110d33.js";const P={component:r,title:"UI/Badge",argTypes:{}},s=e=>c(g,{fontSize:"xs",css:{display:"flex",margin:0,gap:"$2"},children:[a(r,{...e,children:"Label"}),a(r,{...e,variant:"solid",children:"Label"}),a(r,{...e,variant:"outlined",children:"Label"})]}),t=e=>a(g,{fontSize:"xs",css:{display:"flex",margin:0,gap:"$2"},children:x.map(o=>a(r,{...e,intent:o,children:"Label"},o))});var i,n,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`(args: BadgeProps) => <Text fontSize="xs" css={{
  display: 'flex',
  margin: 0,
  gap: '$2'
}}>
    <Badge {...args}>Label</Badge>
    <Badge {...args} variant="solid">
      Label
    </Badge>
    <Badge {...args} variant="outlined">
      Label
    </Badge>
  </Text>`,...(p=(n=s.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(args: BadgeProps) => <Text fontSize="xs" css={{
  display: 'flex',
  margin: 0,
  gap: '$2'
}}>
    {layerIntents.map(intent => <Badge key={intent} {...args} intent={intent}>
        Label
      </Badge>)}
  </Text>`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const k=["Usage","Intents"];export{t as Intents,s as Usage,k as __namedExportsOrder,P as default};
//# sourceMappingURL=Badge.stories-320f0e03.js.map
