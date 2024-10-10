"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[655],{9656:(e,i,A)=>{A.d(i,{EY:()=>a,L9:()=>o,RE:()=>r,jk:()=>t,mc:()=>n});var s=A(7275);const r=s.Ay.div`

@media (min-width: 1280px) {
display: flex;
gap:116px
}
`,n=s.Ay.div`
padding:0 ${e=>e.theme.spacing(4)};

@media (min-width: 768px) {
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
width: 424px;
}
`,a=s.Ay.p`
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
`,t=s.Ay.p`
font-family: Manrope;
font-size: 12px;
font-weight: 600;
line-height: 1,67;
letter-spacing: -0.03em;
text-align: left;
color: #262626;
text-align: center;
`,o=s.Ay.span`
color: ${e=>e.theme.colors.yellow};
cursor: pointer;
`},8588:(e,i,A)=>{A.r(i),A.d(i,{default:()=>Z});var s=A(4858),r=A(8403),n=A(899),a=A(5043),t=A(5200),o=A(9456),c=A(7322),l=A(7275);const d=l.Ay.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`,m=l.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
`,x=l.Ay.div.withConfig({shouldForwardProp:e=>!["$isError"].includes(e)})`
  position: relative;
  width: 100%;
  border: ${e=>e.$isError?"1px solid red":"1px solid #26262626"};
`,p=l.Ay.input.attrs((()=>({})))`
  margin: 0 auto;
  text-align: left;
  width: 100%;
  height: 42px;
  padding: 12px;
  border-radius: 30px;
  border: 1px solid ${e=>{let{$isError:i,$isSuccess:A}=e;return i?"red":A?"green":"#08AA83"}};
  outline: none;
  font-size: 14px;
  color: #333;
  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
  }
`,j=l.Ay.button`
  position: absolute;
  top: 30%;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`,g=l.Ay.p`
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
`,E=l.Ay.div`
  position: absolute;
  right: 30px;
  top: 45%;
  transform: translateY(-50%);
`,h=l.Ay.p`
  margin-left: 10px;
  font-family: Manrope;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-align: left;
  color: #08AA83;
`;var f=A(3216),u=A(6291),y=A(579);const b=o.wA,D=n.Ik().shape({name:n.Yj().required("Required"),email:n.Yj().email("Email must contain @").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Enter a valid Email").required("Required"),password:n.Yj().min(7,"Password must contain at least 7 symbols").oneOf([n.KR("password"),void 0],"Passwords must match").required("Required"),confirm:n.Yj().oneOf([n.KR("password"),void 0],"Passwords must match").required("Required")}),T=()=>{const{register:e,handleSubmit:i,reset:A,formState:{isSubmitting:n,errors:l,touchedFields:T}}=(0,s.mN)({resolver:(0,r.t)(D)}),C=b(),k=(0,f.Zp)(),M=(0,o.d4)(u.Cd),[N,J]=(0,a.useState)(!1),[X,B]=(0,a.useState)(!1),[O,P]=(0,a.useState)(""),Y=e=>{e.preventDefault(),J((e=>!e))};return(0,a.useEffect)((()=>{M&&k("/profile")}),[M,k]),(0,y.jsxs)(d,{onSubmit:i((async(e,i)=>{const{name:s,email:r,password:n}=e;i.preventDefault();try{await C((0,c.Nd)({name:s,email:r,password:n})),A()}catch(O){P("Invalid email or password. Try again")}})),children:[(0,y.jsxs)(x,{children:[(0,y.jsx)(p,{id:"name",placeholder:"Name",...e("name"),$isError:!!l.name,$isSuccess:!l.name&&T.name}),l.name&&(0,y.jsx)(E,{children:(0,y.jsx)(t.yGN,{color:"#EF2447"})}),!l.name&&T.name&&(0,y.jsx)(E,{children:(0,y.jsx)(t.YrT,{color:"#08AA83"})}),l.name&&(0,y.jsx)(g,{children:l.name.message}),!l.name&&T.name&&(0,y.jsx)(h,{children:"Name is secure"})]}),(0,y.jsxs)(x,{children:[(0,y.jsx)(p,{type:"email",id:"email",placeholder:"Email",...e("email",{required:"Required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}}),$isError:!!l.email,$isSuccess:!l.email&&T.email}),l.email&&(0,y.jsx)(E,{children:(0,y.jsx)(t.yGN,{color:"#EF2447"})}),!l.email&&T.email&&(0,y.jsx)(E,{children:(0,y.jsx)(t.YrT,{color:"#08AA83"})}),l.email&&(0,y.jsx)(g,{children:l.email.message}),!l.email&&T.email&&(0,y.jsx)(h,{children:"Email is secure"})]}),(0,y.jsxs)(m,{children:[(0,y.jsxs)(x,{children:[(0,y.jsx)(p,{type:N?"text":"password",id:"password",placeholder:"Password",...e("password"),$isError:!!l.password,$isSuccess:!l.password&&T.password}),l.password&&(0,y.jsx)(E,{children:(0,y.jsx)(t.yGN,{color:"#EF2447"})}),!l.password&&T.password&&(0,y.jsx)(E,{children:(0,y.jsx)(t.YrT,{color:"#08AA83"})}),l.password&&(0,y.jsx)(g,{children:l.password.message}),!l.password&&T.password&&(0,y.jsx)(h,{children:"Password is secure"})]}),(0,y.jsx)(j,{type:"button",onClick:()=>B(!X),children:X?(0,y.jsx)(t.Vap,{stroke:"#f6b83d",onClick:Y}):(0,y.jsx)(t._NO,{stroke:"#f6b83d",onClick:Y})})]}),(0,y.jsxs)(m,{children:[(0,y.jsxs)(x,{children:[(0,y.jsx)(p,{type:N?"text":"password",id:"confirm",placeholder:"Confirm password",...e("confirm"),$isError:!!l.confirm,$isSuccess:!l.confirm&&T.confirm}),l.confirm&&(0,y.jsx)(E,{children:(0,y.jsx)(t.yGN,{color:"#EF2447"})}),!l.confirm&&T.confirm&&(0,y.jsx)(E,{children:(0,y.jsx)(t.YrT,{color:"#08AA83"})}),l.confirm&&(0,y.jsx)(g,{children:l.confirm.message}),!l.confirm&&T.confirm&&(0,y.jsx)(h,{children:"Confirm password is secure"})]}),(0,y.jsx)(j,{type:"button",onClick:()=>B(!X),children:X?(0,y.jsx)(t.Vap,{stroke:"#f6b83d",onClick:Y}):(0,y.jsx)(t._NO,{stroke:"#f6b83d",onClick:Y})})]}),(0,y.jsx)(w,{type:"submit",disabled:n,children:"Registration"}),O&&(0,y.jsx)(g,{children:O})]})};var C=A(5383),k=A(5655);const M="data:image/jpeg;base64,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",N=A.p+"static/media/CatMobile2.9a2f4f153754793a1e3b.jpg",J=A.p+"static/media/CatMobile3.cc71d45a4fd15f93a249.jpg",X=A.p+"static/media/CatTable1.3a5427497e9da43b8395.jpg",B=A.p+"static/media/CatTable2.d10a4bdf353c04021828.jpg",O=A.p+"static/media/CatTable3.38cdbd806b9d2d268f34.jpg",P=A.p+"static/media/CatDesktop1.72fd622fa4499e16b6ce.png",Y=A.p+"static/media/CatDesktop2.e959315f25d889b75884.png",I=A.p+"static/media/CatDesktop3.e967f12b9bb7e7329cfc.png";var Q=A(5475),q=A(9656);function Z(){return(0,y.jsxs)(q.RE,{children:[(0,y.jsx)(k.b,{imgMobile1:M,imgMobile2:N,imgMobile3:J,imgTablet1:X,imgTablet2:B,imgTablet3:O,imgDesctop1:P,imgDesctop2:Y,imgDesctop3:I}),(0,y.jsxs)(q.mc,{children:[(0,y.jsx)(C.h,{name:"Registration"}),(0,y.jsx)(q.EY,{children:"Thank you for your interest in our platform."}),(0,y.jsx)(T,{}),(0,y.jsxs)(q.jk,{children:["Already have an account?",(0,y.jsx)(Q.N_,{to:"/login",children:(0,y.jsx)(q.L9,{children:" Login "})})]})]})]})}},5655:(e,i,A)=>{A.d(i,{b:()=>n});const s=A(7275).Ay.img` 
margin-bottom : ${e=>e.theme.spacing(14)};
border-radius: 55px;
object-fit: cover;

@media (min-width: 768px) {
    border-radius: 90px;
}
`;var r=A(579);const n=e=>{let{imgDesctop1:i,imgDesctop2:A,imgDesctop3:n,imgTablet1:a,imgTablet2:t,imgTablet3:o,imgMobile1:c,imgMobile2:l,imgMobile3:d}=e;return(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{media:"(min-width: 1280px)",srcSet:`\n                ${i} 1x,\n                ${A} 2x,\n                ${n} 3x\n                `}),(0,r.jsx)("source",{media:"(min-width: 768px)",srcSet:`\n                ${a} 1x,\n                ${t} 2x,\n                ${o} 3x\n                `}),(0,r.jsx)("source",{media:"(min-width: 375px)",srcSet:`\n               ${c} 1x,\n               ${l} 2x,\n               ${d} 3x\n               `}),(0,r.jsx)("source",{media:"(min-width: 320px)",srcSet:`\n               ${c} 1x,\n               ${l} 2x,\n               ${d} 3x\n               `}),(0,r.jsx)(s,{alt:"dog",src:c,srcSet:`\n                ${c} 1x,\n                ${l} 2x,\n                ${d} 3x\n                      `,style:{width:"100%",height:"auto"}})]})}},5383:(e,i,A)=>{A.d(i,{h:()=>n});const s=A(7275).Ay.h1`
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
`;var r=A(579);const n=e=>{let{name:i}=e;return(0,r.jsx)(s,{children:i})}}}]);
//# sourceMappingURL=655.7b0b18ae.chunk.js.map