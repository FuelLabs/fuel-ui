import{a as f,j as t,c as S}from"./system-5118686d.js";import"./index-a12dea03.js";import{S as P}from"./Stack-1df623d4.js";import"./index-2e110d33.js";import{_ as e}from"./Toast-1931ee7f.js";import{G as h}from"./Grid-6e47ed83.js";import{B as r}from"./Button-74374672.js";import{B as w}from"./Box-bc767655.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Flex-06f185a8.js";import"./defs-32db6e6f.js";import"./index-1fd431dc.js";import"./IconButton-15e5222d.js";import"./index-3ca0c1ce.js";import"./Tooltip-2a7480d3.js";import"./extends-98964cd2.js";import"./index.module-75a565db.js";import"./index.module-6cd25d47.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./index.module-77288538.js";import"./index.module-8ba5fb57.js";import"./index.module-bc1d076c.js";import"./index.module-27477d06.js";import"./index-e0df417c.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";import"./import-b8fa3143.js";const Z={title:"Overlay/Toast",parameters:{layout:"fullscreen"}},s=()=>f(P,{gap:"$4",direction:"row",children:[t(r,{onPress:()=>e("Just an information"),intent:"base",children:"Show info"}),t(r,{onPress:()=>e.success("Congrats!"),children:"Show success"}),t(r,{onPress:()=>e.error("Ooops, some error"),intent:"error",children:"Show error"}),t(r,{onPress:()=>e("Just an information",{icon:"⚠️"}),intent:"base",children:"Custom Icon"})]});s.parameters={layout:"centered"};const g=[{value:"top-left",label:"Top left"},{value:"top-center",label:"Top center"},{value:"top-right",label:"Top right"}],O=[{value:"bottom-left",label:"Bottom left"},{value:"bottom-center",label:"Bottom center"},{value:"bottom-right",label:"Bottom right"}],a=()=>f(h,{gap:"$4",templateColumns:"repeat(3, 1fr)",templateRows:"repeat(2, 1fr)",children:[g.map(o=>t(r,{onPress:()=>e("Hello world",{position:o.value}),intent:"base",children:o.label},o.value)),O.map(o=>t(r,{onPress:()=>e("Hello world",{position:o.value}),intent:"base",children:o.label},o.value))]});a.parameters={layout:"centered"};const n=()=>t(P,{gap:"$4",direction:"row",children:t(r,{intent:"base",onPress:()=>e.custom(()=>t(w,{className:y.custom(),children:"Hello world"})),children:"Custom Toast"})});n.parameters={layout:"centered"};const y={custom:S({py:"$2",px:"$6",borderRadius:"$full",backgroundColor:"$intentsPrimary10",color:"white"})};var i,l,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => <Stack gap="$4" direction="row">
    <Button onPress={() => toast('Just an information')} intent="base">
      Show info
    </Button>
    <Button onPress={() => toast.success('Congrats!')}>Show success</Button>
    <Button onPress={() => toast.error('Ooops, some error')} intent="error">
      Show error
    </Button>
    <Button onPress={() => toast('Just an information', {
    icon: '⚠️'
  })} intent="base">
      Custom Icon
    </Button>
  </Stack>`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,c,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Grid gap="$4" templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)">
    {POSITIONS_TOP.map(pos => <Button key={pos.value}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPress={() => toast('Hello world', {
    position: (pos.value as any)
  })} intent="base">
        {pos.label}
      </Button>)}
    {POSITIONS_BOTTOM.map(pos => <Button key={pos.value}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPress={() => toast('Hello world', {
    position: (pos.value as any)
  })} intent="base">
        {pos.label}
      </Button>)}
  </Grid>`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,b,B;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Stack gap="$4" direction="row">
    <Button intent="base" onPress={() => toast.custom(() => <Box className={styles.custom()}>Hello world</Box>)}>
      Custom Toast
    </Button>
  </Stack>`,...(B=(b=n.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const tt=["Usage","Positions","Custom"];export{n as Custom,a as Positions,s as Usage,tt as __namedExportsOrder,Z as default};
//# sourceMappingURL=Toast.stories-ae893f11.js.map
