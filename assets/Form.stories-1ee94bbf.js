import{j as e,a as t}from"./system-5118686d.js";import{S as u}from"./Stack-1df623d4.js";import{I as h}from"./index-e0df417c.js";import"./index-40b48d8a.js";import{F as r}from"./Form-7d561104.js";import{I as l}from"./Input-c5c52421.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Flex-06f185a8.js";import"./defs-32db6e6f.js";import"./extends-98964cd2.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./FormControl-53e5444f.js";import"./index-acaed7a3.js";import"./Text-385c8a0a.js";import"./index-2e110d33.js";import"./Button-74374672.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";import"./import-b8fa3143.js";const j={component:r.Control,title:"Form/FormControl",argTypes:{}},F=e(h,{icon:"Envelope",label:"Email"}),o=a=>e(u,{css:{maxW:"400px"},children:t(r.Control,{...a,isRequired:!0,children:[e(r.Label,{htmlFor:"email",children:"Email"}),t(l,{isFullWidth:!0,children:[e(l.ElementLeft,{element:F}),e(l.Field,{type:"email",id:"email",name:"email",placeholder:"Type you email"})]}),e(r.HelperText,{children:"We will never share your email"})]})}),m=a=>e(u,{css:{maxW:"400px"},children:t(r.Control,{...a,isRequired:!0,isInvalid:!0,children:[e(r.Label,{htmlFor:"email",children:"Email"}),t(l,{isFullWidth:!0,children:[e(l.ElementLeft,{element:F}),e(l.Field,{type:"email",id:"email",name:"email",placeholder:"Type you email",defaultValue:"test@em"})]}),e(r.HelperText,{children:"We will never share your email"}),e(r.ErrorMessage,{children:"Wrong email format"})]})});var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`(args: FormControlProps) => <Stack css={{
  maxW: '400px'
}}>
    <Form.Control {...args} isRequired>
      <Form.Label htmlFor="email">Email</Form.Label>
      <Input isFullWidth>
        <Input.ElementLeft element={EMAIL_ICON} />
        <Input.Field type="email" id="email" name="email" placeholder="Type you email" />
      </Input>
      <Form.HelperText>We will never share your email</Form.HelperText>
    </Form.Control>
  </Stack>`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var n,d,c;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`(args: FormControlProps) => <Stack css={{
  maxW: '400px'
}}>
    <Form.Control {...args} isRequired isInvalid>
      <Form.Label htmlFor="email">Email</Form.Label>
      <Input isFullWidth>
        <Input.ElementLeft element={EMAIL_ICON} />
        <Input.Field type="email" id="email" name="email" placeholder="Type you email" defaultValue="test@em" />
      </Input>
      <Form.HelperText>We will never share your email</Form.HelperText>
      <Form.ErrorMessage>Wrong email format</Form.ErrorMessage>
    </Form.Control>
  </Stack>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const A=["Usage","Invalid"];export{m as Invalid,o as Usage,A as __namedExportsOrder,j as default};
//# sourceMappingURL=Form.stories-1ee94bbf.js.map
