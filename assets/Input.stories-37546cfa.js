import{a,j as e}from"./system-5118686d.js";import{r as M}from"./index-8db94870.js";import{S as n}from"./Stack-1df623d4.js";import"./index-2e110d33.js";import{I}from"./index-e0df417c.js";import{I as t}from"./Input-c5c52421.js";import{B as q}from"./Button-74374672.js";import"./_commonjsHelpers-042e6b4d.js";import"./Flex-06f185a8.js";import"./defs-32db6e6f.js";import"./extends-98964cd2.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./FormControl-53e5444f.js";import"./import-b8fa3143.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";const ie={component:t,title:"Form/Input",argTypes:{}},s={name:"email",type:"email",placeholder:"Your email"},p=r=>a(n,{css:{maxW:"350px"},gap:"$3",children:[e(t,{...s,...r,size:"sm",children:e(t.Field,{...s,type:"email"})}),e(t,{...s,...r,size:"md",children:e(t.Field,{...s,type:"email"})}),e(t,{...s,...r,size:"lg",children:e(t.Field,{...s,type:"email"})})]}),o=r=>e(n,{css:{maxW:"350px"},gap:"$3",children:e(t,{children:e(t.Number,{name:"amount",placeholder:"0.0",inputMode:"decimal"})})}),i=r=>e(n,{css:{maxW:"350px"},gap:"$3",children:e(t,{...r,isDisabled:!0,children:e(t.Field,{...s})})}),c=r=>e(n,{css:{maxW:"350px"},gap:"$3",children:e(t,{...r,isReadOnly:!0,children:e(t.Field,{...s})})}),l=r=>a(n,{css:{maxW:"350px"},gap:"$3",children:[a(t,{...r,children:[e(t.AddonLeft,{children:"http://"}),e(t.Field,{type:"text",name:"website",placeholder:"yourwebsite.xyz"})]}),a(t,{...r,children:[e(t.Field,{type:"text",name:"website",placeholder:"yourdomain"}),e(t.AddonRight,{children:".eth"})]})]}),d=r=>a(n,{css:{maxW:"350px"},gap:"$3",children:[a(t,{...r,children:[e(t.ElementLeft,{element:e(I,{icon:"Envelope"})}),e(t.Field,{...s})]}),a(t,{...r,children:[e(t.Field,{...s}),e(t.ElementRight,{element:e(I,{icon:"Envelope"})})]})]}),m=r=>{const[N,j]=M.useState(!1);function T(){j(Y=>!Y)}return e(n,{css:{maxW:"350px"},gap:"$3",children:a(t,{...r,children:[e(t.ElementLeft,{element:e(I,{icon:"Lock"})}),e(t.Field,{type:N?"text":"password",name:"password",placeholder:"Your password..."}),e(t.ElementRight,{children:e(q,{variant:"outlined",onPress:T,css:{mr:"-6px",px:"$2"},children:"Show"})})]})})},u=r=>a(n,{css:{maxW:"350px"},gap:"$3",children:[a(t,{...r,isInvalid:!0,children:[e(t.ElementLeft,{element:e(I,{icon:"Envelope"})}),e(t.Field,{...s})]}),e(t,{...r,isInvalid:!0,children:e(t.Field,{...s})})]});var g,h,x;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`(args: InputProps) => <Stack css={{
  maxW: '350px'
}} gap="$3">
    <Input {...FIELD_ARGS} {...args} size="sm">
      <Input.Field {...FIELD_ARGS} type="email" />
    </Input>
    <Input {...FIELD_ARGS} {...args} size="md">
      <Input.Field {...FIELD_ARGS} type="email" />
    </Input>
    <Input {...FIELD_ARGS} {...args} size="lg">
      <Input.Field {...FIELD_ARGS} type="email" />
    </Input>
  </Stack>`,...(x=(h=p.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,F,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(_args: InputProps) => {
  return <Stack css={{
    maxW: '350px'
  }} gap="$3">
      <Input>
        <Input.Number name="amount" placeholder="0.0" inputMode="decimal" />
      </Input>
    </Stack>;
}`,...(E=(F=o.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var y,R,L;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(args: InputProps) => <Stack css={{
  maxW: '350px'
}} gap="$3">
    <Input {...args} isDisabled>
      <Input.Field {...FIELD_ARGS} />
    </Input>
  </Stack>`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var A,f,w;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`(args: InputProps) => <Stack css={{
  maxW: '350px'
}} gap="$3">
    <Input {...args} isReadOnly>
      <Input.Field {...FIELD_ARGS} />
    </Input>
  </Stack>`,...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var W,k,_;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`(args: InputProps) => <Stack css={{
  maxW: '350px'
}} gap="$3">
    <Input {...args}>
      <Input.AddonLeft>http://</Input.AddonLeft>
      <Input.Field type="text" name="website" placeholder="yourwebsite.xyz" />
    </Input>
    <Input {...args}>
      <Input.Field type="text" name="website" placeholder="yourdomain" />
      <Input.AddonRight>.eth</Input.AddonRight>
    </Input>
  </Stack>`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var $,D,b;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`(args: InputProps) => <Stack css={{
  maxW: '350px'
}} gap="$3">
    <Input {...args}>
      <Input.ElementLeft element={<Icon icon="Envelope" />} />
      <Input.Field {...FIELD_ARGS} />
    </Input>
    <Input {...args}>
      <Input.Field {...FIELD_ARGS} />
      <Input.ElementRight element={<Icon icon="Envelope" />} />
    </Input>
  </Stack>`,...(b=(D=d.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var v,G,z;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`(args: InputProps) => {
  const [showing, setShowing] = useState(false);
  function toggle() {
    setShowing(s => !s);
  }
  return <Stack css={{
    maxW: '350px'
  }} gap="$3">
      <Input {...args}>
        <Input.ElementLeft element={<Icon icon="Lock" />} />
        <Input.Field type={showing ? 'text' : 'password'} name="password" placeholder="Your password..." />
        <Input.ElementRight>
          <Button variant="outlined" onPress={toggle} css={{
          mr: '-6px',
          px: '$2'
        }}>
            Show
          </Button>
        </Input.ElementRight>
      </Input>
    </Stack>;
}`,...(z=(G=m.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var P,B,O;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`(args: InputProps) => <Stack css={{
  maxW: '350px'
}} gap="$3">
    <Input {...args} isInvalid>
      <Input.ElementLeft element={<Icon icon="Envelope" />} />
      <Input.Field {...FIELD_ARGS} />
    </Input>
    <Input {...args} isInvalid>
      <Input.Field {...FIELD_ARGS} />
    </Input>
  </Stack>`,...(O=(B=u.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const ce=["Sizes","TypeNumber","Disabled","ReadOnly","Addon","WithIcon","WithButton","Invalid"];export{l as Addon,i as Disabled,u as Invalid,c as ReadOnly,p as Sizes,o as TypeNumber,m as WithButton,d as WithIcon,ce as __namedExportsOrder,ie as default};
//# sourceMappingURL=Input.stories-37546cfa.js.map
