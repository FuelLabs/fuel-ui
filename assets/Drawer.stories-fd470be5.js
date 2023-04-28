import{a as i,j as r}from"./system-5118686d.js";import{r as l}from"./index-8db94870.js";import{S as j}from"./Stack-1df623d4.js";import"./index-2e110d33.js";import"./ContentLoader-feb512f7.js";import{a as e}from"./CardList-26357b7d.js";import{B as n}from"./Button-74374672.js";import{C as k}from"./Card-a1dab4bc.js";import"./_commonjsHelpers-042e6b4d.js";import"./Flex-06f185a8.js";import"./defs-32db6e6f.js";import"./index-a12dea03.js";import"./Box-bc767655.js";import"./Focus-9ae2ff2a.js";import"./import-b8fa3143.js";import"./Accordion-12283487.js";import"./extends-98964cd2.js";import"./index.module-6cd25d47.js";import"./index.module-bf67c865.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./index.module-75a565db.js";import"./index.module-27477d06.js";import"./index.module-8ba5fb57.js";import"./index-e0df417c.js";import"./Alert-10f458b3.js";import"./index-bcf9852a.js";import"./Heading-32df5a48.js";import"./AlertDialog-75b6d64f.js";import"./index.module-77288538.js";import"./styles-95ab2037.js";import"./AspectRatio-681078db.js";import"./Avatar-7df45138.js";import"./Badge-5f5e4689.js";import"./ButtonGroup-eef55aa9.js";import"./ButtonLink-3f7c9137.js";import"./Checkbox-ac493877.js";import"./index.module-35a4da8a.js";import"./index.module-bc1d076c.js";import"./FormControl-53e5444f.js";import"./InputAmount-89369860.js";import"./index-40b48d8a.js";import"./Input-c5c52421.js";import"./index-3ca0c1ce.js";import"./Tooltip-2a7480d3.js";import"./Copyable-0ba91668.js";import"./index-1fd431dc.js";import"./IconButton-15e5222d.js";import"./Menu-563e2cc9.js";import"./import-591e5e0f.js";import"./PasswordStrength-b2b92033.js";import"./InputPassword-118988cf.js";import"./Popover-a4024a9c.js";import"./index-acaed7a3.js";import"./Text-385c8a0a.js";import"./Form-7d561104.js";import"./FuelLogo-8f87df70.js";import"./Toast-1931ee7f.js";import"./Grid-6e47ed83.js";import"./HelperIcon-9266d19d.js";import"./Image-68f33ec0.js";import"./index-25d04fb3.js";import"./Link-8b4f1d81.js";import"./Pagination-8356da80.js";import"./RadioGroup-6d3668ff.js";import"./Switch-858a91a5.js";import"./Tag-4a4d1c1f.js";import"./Spinner-db12658c.js";const Kr={component:e,title:"Overlay/Drawer",parameters:{layout:"fullscreen"}},s=i(e.Content,{children:[r(e.CloseButton,{}),r(e.Body,{css:{padding:"$4"},children:"Hello world"})]}),a=t=>i(e,{...t,isDismissable:!0,children:[r(e.Trigger,{children:r(n,{children:"Open"})}),s]});a.parameters={layout:"centered"};const p=t=>i(j,{direction:"row",children:[i(e,{...t,side:"left",children:[r(e.Trigger,{children:r(n,{children:"Open Left"})}),s]}),i(e,{...t,side:"right",children:[r(e.Trigger,{children:r(n,{children:"Open Right"})}),s]})]});p.parameters={layout:"centered"};const P=["sm","md","lg","325px"],m=t=>r(j,{direction:"row",children:P.map(o=>l.createElement(e,{...t,size:o,key:o},r(e.Trigger,{children:i(n,{children:["Open ",o]})}),s))});m.parameters={layout:"centered"};const c=t=>{const o=l.useRef();return r(k,{ref:o,css:{overflow:"hidden",position:"relative",width:"500px",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"},children:i(e,{...t,side:"right",containerRef:o,size:300,children:[r(e.Trigger,{children:r(n,{children:"Open"})}),s]})})};c.parameters={layout:"centered"};const d=t=>{const o=l.useRef(),[E,u]=l.useState(!1);return i(k,{ref:o,css:{overflow:"hidden",position:"relative",width:"500px",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"},children:[r(n,{onPress:()=>u(!0),children:"Open"}),r(e,{...t,side:"right",containerRef:o,size:300,isOpen:E,isDismissable:!0,onClose:()=>u(!1),children:s})]})};d.parameters={layout:"centered"};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(args: DrawerProps) => {
  return <Drawer {...args} isDismissable={true}>
      <Drawer.Trigger>
        <Button>Open</Button>
      </Drawer.Trigger>
      {content}
    </Drawer>;
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,D,S;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(args: DrawerProps) => {
  return <Stack direction="row">
      <Drawer {...args} side="left">
        <Drawer.Trigger>
          <Button>Open Left</Button>
        </Drawer.Trigger>
        {content}
      </Drawer>
      <Drawer {...args} side="right">
        <Drawer.Trigger>
          <Button>Open Right</Button>
        </Drawer.Trigger>
        {content}
      </Drawer>
    </Stack>;
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var C,O,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`(args: DrawerProps) => {
  return <Stack direction="row">
      {SIZES.map(size => <Drawer {...args} size={size} key={size}>
          <Drawer.Trigger>
            <Button>Open {size}</Button>
          </Drawer.Trigger>
          {content}
        </Drawer>)}
    </Stack>;
}`,...(x=(O=m.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var y,T,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`(args: DrawerProps) => {
  const ref = useRef<HTMLDivElement>();
  return <Card ref={ref} css={{
    overflow: 'hidden',
    position: 'relative',
    width: '500px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <Drawer {...args} side="right" containerRef={ref} size={300}>
        <Drawer.Trigger>
          <Button>Open</Button>
        </Drawer.Trigger>
        {content}
      </Drawer>
    </Card>;
}`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var v,R,z;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`(args: DrawerProps) => {
  const ref = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  return <Card ref={ref} css={{
    overflow: 'hidden',
    position: 'relative',
    width: '500px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Drawer {...args} side="right" containerRef={ref} size={300} isOpen={open} isDismissable={true} onClose={() => setOpen(false)}>
        {content}
      </Drawer>
    </Card>;
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const Nr=["Usage","Sides","CustomSize","CustomContainer","StateControlled"];export{c as CustomContainer,m as CustomSize,p as Sides,d as StateControlled,a as Usage,Nr as __namedExportsOrder,Kr as default};
//# sourceMappingURL=Drawer.stories-fd470be5.js.map
