import{j as o}from"./system-5118686d.js";import{r as e}from"./index-8db94870.js";import{S as l}from"./Stack-1df623d4.js";import{P as n}from"./PasswordStrength-b2b92033.js";import{I as w}from"./InputPassword-118988cf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Flex-06f185a8.js";import"./defs-32db6e6f.js";import"./index-a12dea03.js";import"./Box-bc767655.js";import"./index-bcf9852a.js";import"./Heading-32df5a48.js";import"./index-2e110d33.js";import"./Button-74374672.js";import"./index-e0df417c.js";import"./extends-98964cd2.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";import"./import-b8fa3143.js";import"./Popover-a4024a9c.js";import"./index.module-75a565db.js";import"./index.module-6cd25d47.js";import"./index.module-77288538.js";import"./styles-95ab2037.js";import"./index.module-8ba5fb57.js";import"./Tooltip-2a7480d3.js";import"./index.module-bc1d076c.js";import"./index.module-27477d06.js";import"./index-1fd431dc.js";import"./IconButton-15e5222d.js";import"./index-3ca0c1ce.js";import"./index-acaed7a3.js";import"./Text-385c8a0a.js";import"./Input-c5c52421.js";import"./FormControl-53e5444f.js";const Z={component:n,title:"Overlay/PasswordStrength"},r=i=>{const[s,d]=e.useState(""),[u,t]=e.useState(!0);return o(l,{css:{maxW:"350px"},children:o(n,{...i,onOpenChange:()=>t(!0),password:s,open:u,children:o(w,{onChange:c=>d(c.target.value),onFocus:()=>t(!0),onBlur:()=>t(!1),value:s,placeholder:"Type your password"})})})};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(args: PasswordStrengthProps) => {
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(true);
  return <Stack css={{
    maxW: '350px'
  }}>
      <PasswordStrength {...args} onOpenChange={() => setOpen(true)} password={password} open={open}>
        <InputPassword onChange={e => setPassword(e.target.value)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} value={password} placeholder="Type your password" />
      </PasswordStrength>
    </Stack>;
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const $=["Usage"];export{r as Usage,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=PasswordStrength.stories-3fa726fd.js.map
