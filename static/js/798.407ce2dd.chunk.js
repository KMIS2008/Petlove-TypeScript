"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[798],{798:(e,t,i)=>{i.r(t),i.d(t,{default:()=>H});var o=i(5383),n=i(1440),r=i(2079),l=i(7719),s=i(5043),a=i(9456),c=i(6258),p=i(7275),d=i(3892);const h=p.Ay.div`
margin-bottom: ${e=>e.theme.spacing(10)};
padding: ${e=>e.theme.spacing(4)};
border-radius: 30px;
background-color: #FFF4DF;
`,x=p.Ay.div`
@media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; 
    justify-content: start;
    align-items: center;
}

     @media (min-width: 1280px) {
      flex-wrap: nowrap;
    } 
`,g=p.Ay.div`
display: flex;
gap: ${e=>e.theme.spacing(2)};
margin-bottom: ${e=>e.theme.spacing(4)};

flex-basis: 55%; 

@media (min-width: 1280px) {
flex-basis: 50%; 
margin-bottom:0%;
}
`,u=(0,p.Ay)(d.D0)`
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border-radius: 30px;
  border: none;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: #262626;

  &:focus {
    outline: none;
    color: ${e=>e.theme.colors.yellow};
  }

  &:hover {
    color: #26262699;
    border: 1px solid #F6B83D;
  }

  @media (min-width: 768px) {
flex-basis: 50%; 
}
`,m=(0,p.Ay)(d.D0)`
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border-radius: 30px;
  border: none;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: #262626;

  &:focus {
    outline: none;
    color: ${e=>e.theme.colors.yellow};
  }

  &:hover {
    color: #26262699;
    border: 1px solid #F6B83D;
  }

  @media (min-width: 768px) {
flex-basis: 30%; 
}
`,A=p.Ay.option`

  border: none;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: #26262699;

  &:hover {
    color: ${e=>e.theme.colors.yellow};
  }
`,y=p.Ay.div`
position: relative;
align-items: center;
  margin-top: 20px;
@media (min-width: 768px) {
  flex-basis: 30%; 
  height: 48px;
  margin-top: 0;
}
`,f=p.Ay.svg`
position: absolute;
top: 25%;
right: 10px;

width: 18px;
height: 18px;
cursor: pointer;
fill: currentColor;
`,j=p.Ay.svg`
position: absolute;
top: 25%;
right: 40px;

width: 18px;
height: 18px;
cursor: pointer;
fill: currentColor;
`,b=p.Ay.svg`
position: absolute;
top: 25%;
right: 5px;

width: 18px;
height: 18px;
cursor: pointer;
fill: currentColor;
`,w=p.Ay.div`
margin-top: ${e=>e.theme.spacing(2)};
margin-bottom: ${e=>e.theme.spacing(4)};
width: 100%;
border: 1px solid #2626261A;
`,v=p.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,F=p.Ay.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  border: none;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.white};
  cursor: pointer;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1,29;
  letter-spacing: -0.03em;
  text-align: left;

  color: #262626;

  &:hover {
    background-color: ${e=>e.theme.colors.yellow};
    color:${e=>e.theme.colors.white};
  }
`,k=(0,p.Ay)(d.D0)`
 
  display: none;

  &:checked + ${F} {
    background-color: ${e=>e.theme.colors.yellow};
    color: ${e=>e.theme.colors.white};
  }
`,C=p.Ay.button`
width: 123px;
height: 42px;
border-radius: 30px;

color: #262626;

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,5;
letter-spacing: -0.03em;
background-color: #FFFFFF;
border: 1px solid #F6B83D;

&:hover{
    background-color: #F6B83D;
    color: #FFFFFF;
}
`;var M=i(4813),B=i(7895),E=i(9452),U=i(6213),S=i(1581),z=i(579);const I=a.wA;U.A.defaults.baseURL="https://petlove.b.goit.study/api";const Q=e=>{let{notices:t}=e;const i=I(),[o,n]=(0,s.useState)([]),[l,a]=(0,s.useState)([]),[c,p]=(0,s.useState)([]),[Q,D]=(0,s.useState)([]),[H,$]=(0,s.useState)(null),[R,O]=(0,s.useState)(null),[L,W]=(0,s.useState)(""),[P,J]=(0,s.useState)(""),[N,T]=(0,s.useState)(""),[V,q]=(0,s.useState)(!1),K=(e,t)=>({category:L,gender:P,species:N,location:null!==H?H:void 0,price:"highprice"!==R&&("lowprice"===R||void 0),popularity:"popularity"!==R&&("unpopularity"===R||void 0),page:e,limit:t,name:""}),X=()=>{O("popularity"),q(!0),i((0,r.UU)({...K(1,6),popularity:!1}))},Z=()=>{O("unpopularity"),q(!0),i((0,r.UU)({...K(1,6),popularity:!0}))},_=()=>{O("highprice"),q(!0),i((0,r.UU)({...K(1,6),price:!1}))},Y=()=>{O("lowprice"),q(!0),i((0,r.UU)({...K(1,6),price:!0}))};(0,s.useEffect)((()=>{(async()=>{const e=await U.A.get("/notices/categories"),t=await U.A.get("/notices/sex"),i=await U.A.get("/notices/species"),o=await U.A.get("/cities");n(e.data),a(t.data),p(i.data),D(o.data)})()}),[]);const G=Q.map((e=>({value:e._id,label:`${e.stateEn}, ${e.cityEn}, ${e.countyEn}`}))),ee={control:(e,t)=>({...e,borderRadius:"30px",border:"none",height:"42px",padding:"0 12px",fontFamily:"Manrope",fontSize:"14px",fontWeight:"500",lineHeight:"1.29",letterSpacing:"-0.03em",color:"#262626",boxShadow:t.isFocused?"0 0 0 1px #F6B83D":e.boxShadow,"&:hover":{border:"1px solid #F6B83D"}}),option:(e,t)=>({...e,borderRadius:"15px",border:"none",padding:"0 12px",fontFamily:"Manrope",fontSize:"14px",fontWeight:"500",lineHeight:"1.29",letterSpacing:"-0.03em",color:t.isSelected?"#fff":"#26262699",backgroundColor:t.isSelected?"#262626":"#fff","&:hover":{color:"#262626"}}),placeholder:e=>({...e,color:"#262626"}),singleValue:e=>({...e,color:"#262626"}),dropdownIndicator:e=>({...e,display:"none"}),indicatorSeparator:e=>({...e,display:"none"})},te=(e,t)=>{let{label:i}=e,{inputValue:o}=t;if(!o)return i;const n=i.substring(0,o.length),r=i.substring(o.length);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{style:{color:"#262626"},children:n}),(0,z.jsx)("span",{style:{color:"#26262666"},children:r})]})},ie=e=>{e(),$(null),O(null),W(""),J(""),T(""),q(!1),i((0,r.UU)({page:1,limit:6,name:"",category:"",gender:"",species:"",location:"",popularity:!1,price:!1}))};return(0,z.jsx)(d.l1,{initialValues:{search:"",category:"",gender:"",petType:"",location:"",sortBy:""},onSubmit:(e,t)=>{i((0,r.UU)({search:e.search,category:e.category,gender:e.gender,petType:e.petType,location:e.location,sortBy:e.sortBy,page:1,limit:6,name:e.search||"",species:e.petType||""}))},children:e=>{let{resetForm:t,setFieldValue:n,values:s}=e;return(0,z.jsxs)(d.lV,{children:[(0,z.jsxs)(h,{children:[(0,z.jsxs)(x,{children:[(0,z.jsx)(M.L,{fetch:r.UU}),(0,z.jsxs)(g,{children:[(0,z.jsxs)(u,{as:"select",id:"category",name:"category",value:L,onChange:e=>((e,t)=>{const o=e.target.value;t("category",o),W(o),q(e.target.value.trim().length>0),i((0,r.UU)({...K(1,6),category:o}))})(e,n),children:[(0,z.jsx)(A,{value:"",children:"Category"}),o.map((e=>(0,z.jsx)(A,{value:e,children:e},(0,E.Ak)())))]}),(0,z.jsxs)(u,{as:"select",name:"gender",value:P,onChange:e=>((e,t)=>{const o=e.target.value;t("gender",o),J(o),q(e.target.value.trim().length>0),i((0,r.UU)({...K(1,6),gender:o}))})(e,n),children:[(0,z.jsx)(A,{value:"",children:"By gender"}),l.map((e=>(0,z.jsx)(A,{value:e,children:e},(0,E.Ak)())))]})]}),(0,z.jsxs)(m,{as:"select",name:"byTypes",value:N,onChange:e=>((e,t)=>{const o=e.target.value;t("byTypes",o),T(o),q(e.target.value.trim().length>0),i((0,r.UU)({...K(1,6),species:o}))})(e,n),children:[(0,z.jsx)(A,{value:"",children:"By type"}),c.map((e=>(0,z.jsx)("option",{value:e,children:e},(0,E.Ak)())))]}),(0,z.jsxs)(y,{children:[(0,z.jsx)(B.Ay,{name:"location",defaultValue:G,value:H,placeholder:"Location",styles:ee,formatOptionLabel:te,options:G,onChange:e=>{e&&(q(!0),$(e),n("location",e.value),i((0,r.UU)({...K(1,6),location:e.value})))}}),(0,z.jsx)("button",{type:"submit",children:(0,z.jsx)(f,{children:(0,z.jsx)("use",{xlinkHref:S.A+"#icon-search"})})}),H&&(0,z.jsx)(j,{onClick:()=>ie(t),children:(0,z.jsx)("use",{xlinkHref:S.A+"#icon-x"})})]})]}),(0,z.jsx)(w,{}),(0,z.jsxs)(v,{role:"group","aria-labelledby":"sort-group",children:[(0,z.jsx)(k,{type:"radio",name:"sort",value:"popularity",id:"popularity",onChange:X,checked:"popularity"===R}),(0,z.jsxs)(F,{htmlFor:"popularity",children:["Popular","popularity"===R&&(0,z.jsx)(b,{onClick:()=>ie(t),children:(0,z.jsx)("use",{xlinkHref:S.A+"#icon-x-1"})})]}),(0,z.jsx)(k,{type:"radio",name:"sort",value:"unpopularity",id:"unpopularity",onChange:Z,checked:"unpopularity"===R}),(0,z.jsxs)(F,{htmlFor:"unpopularity",children:["Unpopular","unpopularity"===R&&(0,z.jsx)(b,{onClick:()=>ie(t),children:(0,z.jsx)("use",{xlinkHref:S.A+"#icon-x-1"})})]}),(0,z.jsx)(k,{type:"radio",name:"sort",value:"lowprice",id:"lowprice",onChange:Y,checked:"lowprice"===R}),(0,z.jsxs)(F,{htmlFor:"lowprice",children:["Cheap","lowprice"===R&&(0,z.jsx)(b,{onClick:()=>ie(t),children:(0,z.jsx)("use",{xlinkHref:S.A+"#icon-x-1"})})]}),(0,z.jsx)(k,{type:"radio",name:"sort",value:"highprice",id:"highprice",onChange:_,checked:"highprice"===R}),(0,z.jsxs)(F,{htmlFor:"highprice",children:["Expensive","highprice"===R&&(0,z.jsx)(b,{onClick:()=>ie(t),children:(0,z.jsx)("use",{xlinkHref:S.A+"#icon-x-1"})})]})]})]}),V?(0,z.jsx)(C,{type:"button",onClick:()=>ie(t),children:"Reset"}):null]})}})},D=a.wA;function H(){const e=D(),[t,i]=(0,s.useState)(1),p=(0,a.d4)(c.ZG)||[];return(0,s.useEffect)((()=>{e((0,r.qu)(t))}),[e,t]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o.h,{name:"Find your favorite pet"}),(0,z.jsx)(Q,{notices:p}),(0,z.jsx)(l.c,{notices:p,trash:!1}),(0,z.jsx)(n.d,{handleChangeNewPage:e=>{i(e)},currentPage:t})]})}},7719:(e,t,i)=>{i.d(t,{c:()=>G});var o=i(1581),n=i(7275);const r=n.Ay.li`
padding: 20px;

@media (min-width: 768px) {
    width: 100%; 
    margin: 0 auto; 
}
`,l=n.Ay.img`
border-radius: 16px;
margin-bottom: 20px;
`,s=n.Ay.h3`
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
color: #2B2B2A;
`,a=n.Ay.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
`,c=n.Ay.ul`
display: flex;
justify-content: space-between;
list-style: none;
margin-bottom: 14px;
`,p=n.Ay.div`
display: flex;
justify-content: space-between;
margin-bottom: 5px;
`,d=n.Ay.div`
display: flex;
gap:2px;
justify-content: center;
align-items: center;
`,h=n.Ay.p`
font-family: Manrope;
font-size: 10px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #26262680;
`,x=(n.Ay.p`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #262626;
`,n.Ay.p`
margin-bottom: 16px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`),g=n.Ay.div`
display: flex;
justify-content: space-between;
`,u=n.Ay.button`
width: 231px;
height: 46px;

border-radius: 30px ;
background: #F6B83D;

background: ${e=>e.theme.colors.yellow};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.03em;
text-align: center;
color: ${e=>e.theme.colors.white};
cursor: pointer;
`,m=n.Ay.button`
width: 46ppx;
height: 46px;
padding: 14px;
gap: 10px;
border-radius: 30px;
background-color: #FFF4DF;

background-color: ${e=>e.$isDefaultFavorite?"#FBE7C1":"#FFF4DF"};
cursor: pointer;

&:hover{
    background-color: #FBE7C1;
}

`;var A=i(2963),y=i.n(A),f=i(5043);const j=n.Ay.div`
position: relative;
padding-top: 40px;
`,b=n.Ay.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
cursor: pointer;
`,w=n.Ay.div`
display: block;
margin: 0 auto;
margin-bottom: 20px;
padding:18px;
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #FFF4DF;
`,v=n.Ay.img`
display: block;
margin: auto;
`,F=n.Ay.h2`
margin-bottom: 20px;
font-family: Manrope;
font-size: 20px;
font-weight: 700;
line-height: 1;
letter-spacing: -0.03em;
text-align: center;
color: ${e=>e.theme.colors.yellow};
`,k=n.Ay.p`
margin-bottom: 20px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.02em;
text-align: center;
color: #2B2B2A;
`;var C=i(8444),M=i(579);y().setAppElement("#modal");const B=e=>{let{isOpenModalAttention:t,setIsOpenModalAttention:i}=e;return(0,f.useEffect)((()=>(t?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"),()=>{document.body.classList.remove("no-scroll")})),[t]),(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(y(),{isOpen:t,onRequestClose:()=>{i(!1)},style:{overlay:{backgroundColor:"rgba(38, 38, 38, 0.3)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"20px",maxWidth:"335px",maxHeight:"394px",borderRadius:"30px",backgroundColor:"#FFFFFF"}},contentLabel:"More info modal",children:(0,M.jsxs)(j,{children:[(0,M.jsx)(b,{onClick:()=>{i(!1)},children:(0,M.jsx)("svg",{width:"24px",height:"24px",children:(0,M.jsx)("use",{xlinkHref:o.A+"#icon-x"})})}),(0,M.jsx)(w,{children:(0,M.jsx)(v,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAC0ALAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABgcFAgMEAQEAAwEAAAAAAAAAAAAAAAADAQIEBf/aAAwDAQACEAMQAAAAv/OSm5npB8+QxMJOKOd4a7+XGV2Ka0OEkjLWlJ0mNVTbzqYYM9NWnR19iC4f/8QALRAAAgIBAgMHBAIDAAAAAAAAAQIDBAUAEQYSQRMhIjEyUXEQFCNhIEJikeL/2gAIAQEAAT8A1JLFEAZJETfy5iBoWIFPfKuvuKw5d54wW8vENz9c9mosPUEhAaaTcRJ7/v4GsFFJkp2yWQkM0hPg5vIAaj7ILsANZWlUuQPHJGP0eoOuHuJJsdcOMyMpeDn5EkPmn/J+nE2RmyOYs9nu4V+wgUeynbWGqSUMfElllUog5zv3DUtkQV5pmPhjQsfgDScV5A3OeV1MTHviAHp/Ws3DKttbi7NVsqORx7jodcI5cW8JD27/AJIWMJPU8ujwsMVnhdM6vBLI/ZIR3oW1xzj8ndwqrjBI0q2UZ1j9RTUGKmbhxKMzj7kUUjYnrIqau0cjFmIx+RIwVEi9AUJ33/3qvinl4bjpy+CSeXePm/oWPh1w7w3Hicf9vO4mlaQyOwBA3IA2GsrSF2oyBuR0IeNvZhoXb9JzHaqSgjqqllPwRrjCvazeQrT1bUiBQInQqSF68y/5aqZCE1a6LXeeSKNU7Qxl3PKNtydvPWOpXLFiK5bjMUaHmjjb1MehI6AfwyPDtfIzrZ7d4mKgMFAIO2oIUrQRQR+lECj4H1//xAAhEQACAgIBBAMAAAAAAAAAAAABAgADBBESITFBUTJhkf/aAAgBAgEBPwB8jVwpQcn1s+lEYuFPEAn7lF6XqSOjKdMp7gzDxnrsutt+bsfyZ9lq21hbTWoRm34JHiYtNwyBeBpba9sPTQicSe+tQCf/xAAjEQACAgEDAwUAAAAAAAAAAAABAgMRAAQSURATMiEjMUFh/9oACAEDAQE/AFh9sysaX4HJOKFsWTWSxNEwB9QRYPIzUTIyRxp4qM0iRlHuPeSwWuAfvJ5IzD2rso9KfzAccwCOMoW3ny6f/9k=",alt:"small-dog",width:"44px",height:"44px"})}),(0,M.jsx)(F,{children:"Attention"}),(0,M.jsx)(k,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,M.jsx)(C.Q,{})]})})})},E=n.Ay.div`
position: relative;
padding-top: 40px;
`,U=n.Ay.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
`,S=n.Ay.div`
position: relative;
`,z=n.Ay.div`
position: absolute;
top: 0;
left: 30%;
display: block;
padding: 8px 14px 8px 14px;
width: 52px;
height: 34px;
border-radius: 30px;
background-color: #FFF4DF;

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.02em;
text-align: center;

color: ${e=>e.theme.colors.yellow};
`,I=n.Ay.img`
display: block;
margin: auto;
margin-bottom: ${e=>e.theme.spacing(4)};
width: 120px;
height: 120px;
border-radius: 50%;
`,Q=n.Ay.h2`
margin-bottom: 8px;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;

text-align: center;
color: #2B2B2A;
`,D=n.Ay.div`
display: flex;
justify-content: center;
gap: 64px;
margin-bottom: 8px;
`,H=n.Ay.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
`,$=n.Ay.ul`
display: flex;
justify-content: space-between;
list-style: none;
margin-bottom: 14px;
`,R=n.Ay.p`
font-family: Manrope;
font-size: 10px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #26262680;
`,O=n.Ay.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`,L=n.Ay.p`
margin-bottom: 16px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`,W=n.Ay.div`
display: flex;
gap: 8px;
justify-content: center;
align-items: center;
`,P=n.Ay.button`
display: flex;
margin: auto;
align-items: center;
justify-content: center;
gap: 4px;
background-color: ${e=>e.theme.colors.yellow};
border-radius: 30px;
width: 135px;
height: 44px;

font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.03em;
text-align: center;
color:${e=>e.theme.colors.white};
cursor: pointer;

&:hover{
    background-color: #F9B020;
}
`,J=n.Ay.a`
display: flex;
margin: auto;
align-items: center;
justify-content: center;
background-color: ${e=>e.theme.colors.rose};
border-radius: 30px;
width: 135px;
height: 44px;

font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.03em;
text-align: center;
color:${e=>e.theme.colors.yellow};

&:hover{
    background-color: #FBE7C1;
}
`;var N=i(2079),T=i(9456);const V=T.wA;y().setAppElement("#modal");const q=e=>{let{isOpenModalNotice:t,setIsOpenModalNotice:i,notice:n,setFavorite:r,isFavorite:l}=e;const{imgURL:s,title:a,popularity:c,comment:p,name:d,birthday:h,species:x,sex:g,category:u,_id:m,user:A}=n,j=V();(0,f.useEffect)((()=>(t?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"),()=>{document.body.classList.remove("no-scroll")})),[t]);return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(y(),{isOpen:t,onRequestClose:()=>{i(!1)},style:{overlay:{backgroundColor:"rgba(38, 38, 38, 0.3)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"20px",maxWidth:"335px",maxHeight:"446px",borderRadius:"30px",backgroundColor:"#FFFFFF"}},contentLabel:"More info modal",children:(0,M.jsxs)(E,{children:[(0,M.jsx)(U,{onClick:()=>{i(!1)},children:(0,M.jsx)("svg",{width:"24px",height:"24px",children:(0,M.jsx)("use",{xlinkHref:o.A+"#icon-x"})})}),(0,M.jsxs)(S,{children:[(0,M.jsx)(I,{src:s,alt:a}),(0,M.jsx)(z,{children:u})]}),(0,M.jsx)(Q,{children:a}),(0,M.jsxs)(D,{children:[(0,M.jsx)("svg",{width:16,height:16,children:(0,M.jsx)("use",{xlinkHref:o.A+"#icon-star"})}),(0,M.jsx)(H,{children:c})]}),(0,M.jsxs)($,{children:[(0,M.jsxs)("li",{children:[(0,M.jsx)(R,{children:"Name"}),(0,M.jsx)(O,{children:d})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(R,{children:"Birthday"}),(0,M.jsx)(O,{children:h})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(R,{children:"Sex"}),(0,M.jsx)(O,{children:g})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(R,{children:"Species"}),(0,M.jsx)(O,{children:x})]})]}),(0,M.jsx)(L,{children:p}),(0,M.jsxs)(W,{children:[(0,M.jsxs)(P,{type:"button",onClick:()=>(e=>{l?(j((0,N._X)(e)),r(!1)):(j((0,N.TL)(e)),r(!0))})(m),children:[" Add to",(0,M.jsx)("svg",{width:16,height:16,children:(0,M.jsx)("use",{xlinkHref:o.A+"#icon-heart-3"})})]}),(null===A||void 0===A?void 0:A.phone)&&(0,M.jsx)(J,{as:"a",href:`tel:${A.phone}`,children:"Contact"})]})]})})})};var K=i(6291),X=i(6258);const Z=T.wA,_=e=>{let{notice:t,trash:i}=e;const n=Z(),A=(0,T.d4)(K.Ep),y=(0,T.d4)(X._I),j=(0,T.d4)(X.Si),{imgURL:b,title:w,popularity:v,comment:F,name:k,birthday:C,species:E,category:U,sex:S,_id:z}=t,[I,Q]=(0,f.useState)(!1),[D,H]=(0,f.useState)(!1),[$,R]=(0,f.useState)(y.includes(z)),O=()=>{Q(!0)},L=e=>{A?(H(!0),n((0,N.Bw)(e))):O()},W=e=>{A?(e=>{$?(n((0,N._X)(e)),R(!1),console.log(y)):(n((0,N.TL)(e)),R(!0),console.log(y))})(e):O()};return(0,M.jsxs)(r,{children:[(0,M.jsx)(l,{src:b,alt:w}),(0,M.jsxs)(p,{children:[(0,M.jsx)(s,{children:w}),(0,M.jsxs)(d,{children:[(0,M.jsx)("svg",{width:16,height:16,children:(0,M.jsx)("use",{xlinkHref:o.A+"#icon-star"})}),(0,M.jsx)(a,{children:v})]})]}),(0,M.jsxs)(c,{children:[(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Name"}),(0,M.jsx)("p",{children:k})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Birthday"}),(0,M.jsx)("p",{children:C})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Sex"}),(0,M.jsx)("p",{children:S})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Species"}),(0,M.jsx)("p",{children:E})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Category"}),(0,M.jsx)("p",{children:U})]})]}),(0,M.jsx)(x,{children:F}),(0,M.jsxs)(g,{children:[(0,M.jsx)(u,{type:"button",onClick:()=>L(z),children:"Learn more"}),i&&(0,M.jsx)(m,{onClick:()=>(async e=>{try{await n((0,N._X)(e)),R(!1),await n((0,N.Vq)())}catch(t){console.error("Error deleting favorite notice:",t)}})(z),children:(0,M.jsx)("svg",{width:18,height:18,children:(0,M.jsx)("use",{xlinkHref:o.A+"#icon-trash-2"})})}),!i&&(0,M.jsx)(m,{$isDefaultFavorite:$,onClick:()=>W(z),children:(0,M.jsx)("svg",{width:18,height:18,children:(0,M.jsx)("use",{xlinkHref:o.A+"#icon-heart"})})})]}),(0,M.jsx)(B,{isOpenModalAttention:I,setIsOpenModalAttention:Q}),(0,M.jsx)(q,{notice:j,setFavorite:R,isFavorite:$,isOpenModalNotice:D,setIsOpenModalNotice:H})]})},Y=n.Ay.ul`

list-style: none;

display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: 768px) and (max-width: 1279px) {
        grid-template-columns: 1fr 1fr; 
    }

    @media (min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr; 
    }
`,G=e=>{let{notices:t,trash:i=!1}=e;return(0,M.jsx)(Y,{children:null===t||void 0===t?void 0:t.map((e=>(0,M.jsx)(_,{notice:e,trash:i},e._id)))})}},1440:(e,t,i)=>{i.d(t,{d:()=>A});var o=i(9456),n=i(9657),r=i(6258),l=i(7275),s=i(423),a=i(7196);const c=l.Ay.div`
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
`,p=l.Ay.button`
display: block;
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
fill: currentColor;
border: 1px solid #2626260D;
text-align: center;

font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29;
color: #262626;

&:hover{
    background-color: ${e=>e.theme.colors.yellow};
    color:   ${e=>e.theme.colors.white};

}
`,d=l.Ay.button`
display: block;
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
border: 1px solid #2626260D;
text-align: center;
font-size: 20px;

&:hover{
    color:  #262626;
    border: 1px solid #26262633;
}
`,h=(0,l.Ay)(a.CUS)`
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`,x=(0,l.Ay)(s.m6W)`
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`,g=(0,l.Ay)(s.OQo)`
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`,u=(0,l.Ay)(a.r$Z)`
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`;var m=i(579);const A=e=>{let{handleChangeNewPage:t,currentPage:i}=e;const l=(0,o.d4)(r.WH),s=(0,n.Ub)({query:"(max-width: 767px)"})?2:3,a=(()=>{let e=Math.max(1,i-Math.floor(s/2)),t=Math.min(l,e+s-1);t-e<s-1&&(e=Math.max(1,t-s+1));const o=[];for(let i=e;i<=t;i++)o.push(i);return o})();return(0,m.jsx)(m.Fragment,{children:l>1&&(0,m.jsxs)(c,{children:[(0,m.jsx)(d,{onClick:()=>t(1),disabled:1===i,type:"button",children:(0,m.jsx)(h,{})}),(0,m.jsx)(d,{onClick:()=>t(i-1),disabled:1===i,type:"button",children:(0,m.jsx)(x,{})}),a[0]>1&&(0,m.jsx)(p,{children:"..."}),a.map((e=>(0,m.jsx)(p,{type:"button",onClick:()=>t(e),children:e},e))),a[a.length-1]<l&&(0,m.jsx)(p,{children:"..."}),(0,m.jsx)(d,{onClick:()=>t(i+1),disabled:i===l,type:"button",children:(0,m.jsx)(g,{})}),(0,m.jsx)(d,{onClick:()=>t(l),disabled:i===l,type:"button",children:(0,m.jsx)(u,{})})]})})}},4813:(e,t,i)=>{i.d(t,{L:()=>h});var o=i(5043),n=i(1581),r=i(7275);const l=r.Ay.div`
position: relative;
@media (min-width: 768px) {
    width: 230px;
  }
`,s=r.Ay.input`
margin-bottom: ${e=>e.theme.spacing(3)};
padding-left : ${e=>e.theme.spacing(3)};
width: 100%;
height: 42px;

font-family: Manrope;
font-size: 16px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.03em;
text-align: left;

border-radius: 30px;
border: 1px solid #26262626;

&::placeholder {
font-size: 14px;
font-weight: 500;
line-height: 1,29;
color: rgba(38, 38, 38, 0.5);
  }

  &:hover {
    border: 1px solid ${e=>e.theme.colors.yellow}
  }

  @media (min-width: 768px) {
    width: 230px;
    height: 48px;
  }

  @media (min-width: 1280px) {
   margin-bottom:0;
  }
`,a=r.Ay.svg`
position: absolute;
top: 25%;
right: 10px;

width: 18px;
height: 18px;
cursor: pointer;
fill: currentColor;
`,c=r.Ay.svg`
position: absolute;
top: 25%;
right: 40px;

width: 18px;
height: 18px;
cursor: pointer;
fill: currentColor;
`;var p=i(9456),d=i(579);const h=e=>{let{fetch:t}=e;const i=(0,p.wA)(),[r,h]=(0,o.useState)(""),x=()=>{h("")};return(0,d.jsxs)(l,{onSubmit:e=>{e.preventDefault(),r.trim()&&i(t({keyword:r,pageNumber:1})),x()},children:[(0,d.jsx)(s,{placeholder:"Search",name:"name",type:"text",value:r,onChange:e=>{h(e.target.value)}}),(0,d.jsx)("button",{type:"submit",children:(0,d.jsx)(a,{children:(0,d.jsx)("use",{xlinkHref:n.A+"#icon-search"})})}),r&&(0,d.jsx)(c,{onClick:x,children:(0,d.jsx)("use",{xlinkHref:n.A+"#icon-x"})})]})}},5383:(e,t,i)=>{i.d(t,{h:()=>r});const o=i(7275).Ay.h1`
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
`;var n=i(579);const r=e=>{let{name:t}=e;return(0,n.jsx)(o,{children:t})}},6258:(e,t,i)=>{i.d(t,{P5:()=>a,Si:()=>l,WH:()=>n,YY:()=>c,ZG:()=>r,_I:()=>s,vc:()=>o});const o=e=>e.news.news,n=e=>e.news.totalPages,r=e=>e.notices.notices,l=e=>e.notices.noticeId,s=e=>e.notices.isFavorite,a=e=>e.friends.friends,c=e=>e.user.userFull}}]);
//# sourceMappingURL=798.407ce2dd.chunk.js.map