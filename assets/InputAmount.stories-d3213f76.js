import{j as u,a as n}from"./system-5118686d.js";import{I as c,i as o}from"./InputAmount-89369860.js";import{a as V}from"./chunk-OPEUWD42-0dc0813d.js";import{r as l}from"./index-8db94870.js";import"./index-a12dea03.js";import{S as O}from"./Stack-1df623d4.js";import"./index-2e110d33.js";import"./index-acaed7a3.js";import{B as b}from"./Box-bc767655.js";import{T as C}from"./Text-385c8a0a.js";import{B as i}from"./Button-74374672.js";import"./_commonjsHelpers-042e6b4d.js";import"./Flex-06f185a8.js";import"./defs-32db6e6f.js";import"./index-40b48d8a.js";import"./Input-c5c52421.js";import"./FormControl-53e5444f.js";import"./import-b8fa3143.js";import"./index-3ca0c1ce.js";import"./Tooltip-2a7480d3.js";import"./extends-98964cd2.js";import"./index.module-75a565db.js";import"./index.module-6cd25d47.js";import"./index.module-3064e7bd.js";import"./index-8ce4a492.js";import"./index.module-77288538.js";import"./index.module-8ba5fb57.js";import"./index.module-bc1d076c.js";import"./index.module-27477d06.js";import"./index-e0df417c.js";import"./ContentLoader-feb512f7.js";import"./Card-a1dab4bc.js";import"./Spinner-db12658c.js";import"./import-591e5e0f.js";const _t={component:c,title:"Form/InputAmount",argTypes:{hiddenBalance:{defaultValue:!1,control:"boolean"},hiddenMaxButton:{defaultValue:!1,control:"boolean"}}},P=o.parseUnits("1.570000044"),p=M=>{const[t,a]=l.useState(o()),A=1000000011,_=1e9;return l.useEffect(()=>{t&&V("onChange")(t.formatUnits())},[t]),n(b,{css:{width:300},children:[u(c,{...M,onChange:a,value:t}),n(O,{gap:"$3",children:[n(C,{fontSize:"lg",css:{marginTop:"$2"},children:["Amount: ",t==null?void 0:t.format({precision:9})]}),n(i,{onPress:()=>a(o(A)),children:["Set (",o(A).format({precision:9}),")"]}),n(i,{onPress:()=>a(o(_)),children:["Set (",o(_).format({precision:3}),")"]}),u(i,{onPress:()=>a(null),children:"Clear"})]})]})},e=p.bind({});e.args={balance:P};const r=p.bind({});r.args={balance:void 0};const s=p.bind({});s.args={hiddenBalance:!0,hiddenMaxButton:!0};const m=()=>u(b,{css:{width:300},children:u(c.Loader,{isFullWidth:!0})});var d,U,f;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [amount, setAmount] = useState<BN | null>(bn());
  const AMOUNT_VALUE_1 = 1_000_000_011;
  const AMOUNT_VALUE_2 = 1_000_000_000;

  // Log onChange amount
  useEffect(() => {
    if (amount) {
      action('onChange')(amount.formatUnits());
    }
  }, [amount]);
  return <Box css={{
    width: 300
  }}>
      <InputAmount {...args} onChange={setAmount} value={amount} />
      <Stack gap="$3">
        <Text fontSize="lg" css={{
        marginTop: '$2'
      }}>
          Amount: {amount?.format({
          precision: 9
        })}
        </Text>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE_1))}>
          Set ({bn(AMOUNT_VALUE_1).format({
          precision: 9
        })})
        </Button>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE_2))}>
          Set ({bn(AMOUNT_VALUE_2).format({
          precision: 3
        })})
        </Button>
        <Button onPress={() => setAmount(null)}>Clear</Button>
      </Stack>
    </Box>;
}`,...(f=(U=e.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var g,B,T;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [amount, setAmount] = useState<BN | null>(bn());
  const AMOUNT_VALUE_1 = 1_000_000_011;
  const AMOUNT_VALUE_2 = 1_000_000_000;

  // Log onChange amount
  useEffect(() => {
    if (amount) {
      action('onChange')(amount.formatUnits());
    }
  }, [amount]);
  return <Box css={{
    width: 300
  }}>
      <InputAmount {...args} onChange={setAmount} value={amount} />
      <Stack gap="$3">
        <Text fontSize="lg" css={{
        marginTop: '$2'
      }}>
          Amount: {amount?.format({
          precision: 9
        })}
        </Text>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE_1))}>
          Set ({bn(AMOUNT_VALUE_1).format({
          precision: 9
        })})
        </Button>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE_2))}>
          Set ({bn(AMOUNT_VALUE_2).format({
          precision: 3
        })})
        </Button>
        <Button onPress={() => setAmount(null)}>Clear</Button>
      </Stack>
    </Box>;
}`,...(T=(B=r.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var h,L,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [amount, setAmount] = useState<BN | null>(bn());
  const AMOUNT_VALUE_1 = 1_000_000_011;
  const AMOUNT_VALUE_2 = 1_000_000_000;

  // Log onChange amount
  useEffect(() => {
    if (amount) {
      action('onChange')(amount.formatUnits());
    }
  }, [amount]);
  return <Box css={{
    width: 300
  }}>
      <InputAmount {...args} onChange={setAmount} value={amount} />
      <Stack gap="$3">
        <Text fontSize="lg" css={{
        marginTop: '$2'
      }}>
          Amount: {amount?.format({
          precision: 9
        })}
        </Text>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE_1))}>
          Set ({bn(AMOUNT_VALUE_1).format({
          precision: 9
        })})
        </Button>
        <Button onPress={() => setAmount(bn(AMOUNT_VALUE_2))}>
          Set ({bn(AMOUNT_VALUE_2).format({
          precision: 3
        })})
        </Button>
        <Button onPress={() => setAmount(null)}>Clear</Button>
      </Stack>
    </Box>;
}`,...(N=(L=s.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var S,E,x;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => <Box css={{
  width: 300
}}>
    <InputAmount.Loader isFullWidth={true} />
  </Box>`,...(x=(E=m.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const lt=["Usage","NoBalance","NoAction","Loader"];export{m as Loader,s as NoAction,r as NoBalance,e as Usage,lt as __namedExportsOrder,_t as default};
//# sourceMappingURL=InputAmount.stories-d3213f76.js.map
