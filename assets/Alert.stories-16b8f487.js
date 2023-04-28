import{j as e,a}from"./system-5118686d.js";import{S as f}from"./Stack-1df623d4.js";import{A as t}from"./Alert-10f458b3.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Flex-06f185a8.js";import"./defs-32db6e6f.js";import"./index-a12dea03.js";import"./Box-bc767655.js";import"./index-e0df417c.js";import"./extends-98964cd2.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./index-2e110d33.js";import"./Button-74374672.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";import"./import-b8fa3143.js";import"./index-bcf9852a.js";import"./Heading-32df5a48.js";const q={component:t,title:"UI/Alert",argTypes:{}},W=["info","warning","success","error"],s=r=>e(f,{gap:"$4",css:{maxW:"700px"},children:W.map(n=>e(t,{...r,css:{maxW:"700px"},direction:"row",status:n,children:e(t.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})},n))}),i=r=>a(t,{...r,css:{maxW:"700px"},direction:"row",children:[e(t.Description,{children:"A new software update is available. See what's new in the v0.1"}),e(t.Actions,{children:e(t.Button,{rightIcon:"ArrowRight",children:"Details"})})]}),o=r=>a(t,{...r,css:{maxW:"700px"},status:"warning",children:[e(t.Title,{children:"Action needed"}),e(t.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate rutrum est non sollicitudin. Donec tortor ligula, bibendum ac luctus ac, efficitur a sem."})]}),c=r=>a(t,{...r,css:{maxW:"700px"},status:"success",children:[e(t.Title,{children:"Order Completed"}),e(t.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate rutrum est non sollicitudin. Donec tortor ligula, bibendum ac luctus ac, efficitur a sem."}),a(t.Actions,{children:[e(t.Button,{children:"View status"}),e(t.Button,{children:"Dismiss"})]})]});var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`(args: AlertProps) => <Stack gap="$4" css={{
  maxW: '700px'
}}>
    {STATUSES.map(status => <Alert key={status} {...args} css={{
    maxW: '700px'
  }} direction="row"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status={(status as any)}>
        <Alert.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert.Description>
      </Alert>)}
  </Stack>`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,d,A;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: AlertProps) => <Alert {...args} css={{
  maxW: '700px'
}} direction="row">
    <Alert.Description>
      A new software update is available. See what&apos;s new in the v0.1
    </Alert.Description>
    <Alert.Actions>
      <Alert.Button rightIcon="ArrowRight">Details</Alert.Button>
    </Alert.Actions>
  </Alert>`,...(A=(d=i.parameters)==null?void 0:d.docs)==null?void 0:A.source}}};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(args: AlertProps) => <Alert {...args} css={{
  maxW: '700px'
}} status="warning">
    <Alert.Title>Action needed</Alert.Title>
    <Alert.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
      rutrum est non sollicitudin. Donec tortor ligula, bibendum ac luctus ac,
      efficitur a sem.
    </Alert.Description>
  </Alert>`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var D,w,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`(args: AlertProps) => <Alert {...args} css={{
  maxW: '700px'
}} status="success">
    <Alert.Title>Order Completed</Alert.Title>
    <Alert.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
      rutrum est non sollicitudin. Donec tortor ligula, bibendum ac luctus ac,
      efficitur a sem.
    </Alert.Description>
    <Alert.Actions>
      <Alert.Button>View status</Alert.Button>
      <Alert.Button>Dismiss</Alert.Button>
    </Alert.Actions>
  </Alert>`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const F=["Status","Horizontal","Vertical","WithActions"];export{i as Horizontal,s as Status,o as Vertical,c as WithActions,F as __namedExportsOrder,q as default};
//# sourceMappingURL=Alert.stories-16b8f487.js.map
