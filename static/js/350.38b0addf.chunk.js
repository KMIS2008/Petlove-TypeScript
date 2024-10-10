"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[350],{6203:(e,A,i)=>{i.r(A),i.d(A,{default:()=>N});var t=i(4858),r=i(8403),a=i(899),s=i(5043),n=i(5200),o=i(9456),c=i(7322),l=i(7275);const x=l.Ay.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,g=l.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
`,d=l.Ay.div.withConfig({shouldForwardProp:e=>!["$isError"].includes(e)})`
  position: relative;
  width: 100%;
  border: ${e=>e.$isError?"1px solid red":"1px solid #26262626"};
`,m=l.Ay.input.attrs((()=>({})))`
  margin: 0 auto;
  text-align: left;
  width: 100%;
  height: 42px;
  padding: 12px;
  border-radius: 30px;
  border: 1px solid ${e=>{let{$isError:A,$isSuccess:i}=e;return A?"red":i?"green":"#08AA83"}};
  outline: none;
  font-size: 14px;
  color: #333;
  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
  }

  &:hover {
    border: 1px solid ${e=>e.theme.colors.yellow};
  }
`,p=l.Ay.button`
  position: absolute;
  top: 30%;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`,j=l.Ay.p`
  font-family: Manrope;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-align: left;
  color: #EF2447;
`,w=l.Ay.button`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 42px;
  padding: 12px 0;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.yellow};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`,u=l.Ay.div`
  position: absolute;
  right: 30px;
  top: 45%;
  transform: translateY(-50%);
`,f=l.Ay.p`
  margin-left: 10px;
  font-family: Manrope;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-align: left;
  color: #08AA83;
`;var b=i(579);const h=o.wA,T=a.Ik().shape({email:a.Yj().email("Email must contain @").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Enter a valid Email").required("Required"),password:a.Yj().min(7,"Password must contain at least 7 symbols").required("Required")}),y=()=>{const{register:e,handleSubmit:A,reset:i,formState:{isSubmitting:a,errors:o,touchedFields:l}}=(0,t.mN)({resolver:(0,r.t)(T)}),y=h(),[k,D]=(0,s.useState)(!1),[O,K]=(0,s.useState)("");return(0,b.jsxs)(x,{onSubmit:A((async(e,A)=>{const{email:t,password:r}=e;A.preventDefault();try{await y((0,c.E8)({email:t,password:r})),i()}catch(O){K("Invalid email or password. Try again")}})),children:[(0,b.jsxs)(d,{children:[(0,b.jsx)(m,{type:"email",id:"email",placeholder:"Email",...e("email",{required:"Required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}}),$isError:!!o.email,$isSuccess:!o.email&&l.email}),o.email&&(0,b.jsx)(u,{children:(0,b.jsx)(n.yGN,{color:"#EF2447"})}),!o.email&&l.email&&(0,b.jsx)(u,{children:(0,b.jsx)(n.YrT,{color:"#08AA83"})}),o.email&&(0,b.jsx)(j,{children:o.email.message}),!o.email&&l.email&&(0,b.jsx)(f,{children:"Email is secure"})]}),(0,b.jsxs)(g,{children:[(0,b.jsxs)(d,{children:[(0,b.jsx)(m,{type:k?"text":"password",id:"password",placeholder:"Password",...e("password"),$isError:!!o.password,$isSuccess:!o.password&&l.password}),o.password&&(0,b.jsx)(u,{children:(0,b.jsx)(n.yGN,{color:"#EF2447"})}),!o.password&&l.password&&(0,b.jsx)(u,{children:(0,b.jsx)(n.YrT,{color:"#08AA83"})}),o.password&&(0,b.jsx)(j,{children:o.password.message}),!o.password&&l.password&&(0,b.jsx)(f,{children:"Password is secure"})]}),(0,b.jsx)(p,{type:"button",onClick:()=>{D((e=>!e))},children:k?(0,b.jsx)(n.Vap,{stroke:"#f6b83d"}):(0,b.jsx)(n._NO,{stroke:"#f6b83d"})})]}),(0,b.jsx)(w,{type:"submit",disabled:a,children:"Log In"}),O&&(0,b.jsx)(j,{children:O})]})};var k=i(5383),D=i(5655),O=i(9656),K=i(5475);const M="data:image/jpeg;base64,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",B=i.p+"static/media/DogMobile2.a9e4c2494c45929488ed.jpg",V=i.p+"static/media/DogMobile3.fdb9315818e69e8364b6.jpg",v=i.p+"static/media/DogTablet1.3e47fb70dbaa23f2f814.jpg",E=i.p+"static/media/DogTablet2.6ff16e95b6d68d92391f.jpg",Y=i.p+"static/media/DogTablet3.6879bdc7cd6d964855f4.jpg",I=i.p+"static/media/DogDesktop1.3a7cd9514633c7074fd5.jpg",q=i.p+"static/media/DogDesktop2.4ae5ab6cc58236a8320e.jpg",F=i.p+"static/media/DogDesktop3.dfc5c7f1f3d6cc883c31.jpg";function N(){return(0,b.jsxs)(O.RE,{children:[(0,b.jsx)(D.b,{imgDesctop1:I,imgDesctop2:q,imgDesctop3:F,imgTablet1:v,imgTablet2:E,imgTablet3:Y,imgMobile1:M,imgMobile2:B,imgMobile3:V}),(0,b.jsxs)(O.mc,{children:[(0,b.jsx)(k.h,{name:"Log in"}),(0,b.jsx)(O.EY,{children:"Welcome! Please enter your credentials to login to the platform:"}),(0,b.jsx)(y,{}),(0,b.jsxs)(O.jk,{children:["Don\u2019t have an account?",(0,b.jsx)(K.N_,{to:"/register",children:(0,b.jsx)(O.L9,{children:" Register "})})]})]})]})}},9656:(e,A,i)=>{i.d(A,{EY:()=>s,L9:()=>o,RE:()=>r,jk:()=>n,mc:()=>a});var t=i(7275);const r=t.Ay.div`

@media (min-width: 1280px) {
display: flex;
gap:116px
}
`,a=t.Ay.div`
padding:0 ${e=>e.theme.spacing(4)};

@media (min-width: 768px) {
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
width: 424px;
}
`,s=t.Ay.p`
margin-bottom : ${e=>e.theme.spacing(4)};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: left;

@media (min-width: 768px) {
font-size: 18px;
line-height: 1,22;
}
`,n=t.Ay.p`
font-family: Manrope;
font-size: 12px;
font-weight: 600;
line-height: 1,67;
letter-spacing: -0.03em;
text-align: left;
color: #262626;
text-align: center;
`,o=t.Ay.span`
color: ${e=>e.theme.colors.yellow};
cursor: pointer;
`},5655:(e,A,i)=>{i.d(A,{b:()=>a});const t=i(7275).Ay.img` 
margin-bottom : ${e=>e.theme.spacing(14)};
border-radius: 55px;
object-fit: cover;

@media (min-width: 768px) {
    border-radius: 90px;
}
`;var r=i(579);const a=e=>{let{imgDesctop1:A,imgDesctop2:i,imgDesctop3:a,imgTablet1:s,imgTablet2:n,imgTablet3:o,imgMobile1:c,imgMobile2:l,imgMobile3:x}=e;return(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{media:"(min-width: 1280px)",srcSet:`\n                ${A} 1x,\n                ${i} 2x,\n                ${a} 3x\n                `}),(0,r.jsx)("source",{media:"(min-width: 768px)",srcSet:`\n                ${s} 1x,\n                ${n} 2x,\n                ${o} 3x\n                `}),(0,r.jsx)("source",{media:"(min-width: 375px)",srcSet:`\n               ${c} 1x,\n               ${l} 2x,\n               ${x} 3x\n               `}),(0,r.jsx)("source",{media:"(min-width: 320px)",srcSet:`\n               ${c} 1x,\n               ${l} 2x,\n               ${x} 3x\n               `}),(0,r.jsx)(t,{alt:"dog",src:c,srcSet:`\n                ${c} 1x,\n                ${l} 2x,\n                ${x} 3x\n                      `,style:{width:"100%",height:"auto"}})]})}},5383:(e,A,i)=>{i.d(A,{h:()=>a});const t=i(7275).Ay.h1`
margin-bottom : ${e=>e.theme.spacing(2)};
font-family: Manrope;
font-size: 28px;
font-weight: 700;
line-height: 1;
letter-spacing: -0.04em;
text-align: left;
color: #262626;

@media (min-width: 768px) {
font-size: 54px;
}
`;var r=i(579);const a=e=>{let{name:A}=e;return(0,r.jsx)(t,{children:A})}}}]);
//# sourceMappingURL=350.38b0addf.chunk.js.map