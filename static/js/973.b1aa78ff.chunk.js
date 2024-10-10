"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[973],{5185:(e,t,i)=>{i.r(t),i.d(t,{default:()=>we});var n=i(5043),o=i(1581),r=i(7275);const s=r.Ay.div`
display: flex;
justify-content: space-between;
`,a=r.Ay.div`
position: relative;
width: 80px;
height: 38px;
`,l=r.Ay.button`
display: block;

width: 80px;
height: 38px;
padding: 10px 14px;
gap: 4px;
border-radius: 30px;
background: ${e=>e.theme.colors.yellow};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
color: ${e=>e.theme.colors.white};
text-align: left;

cursor: pointer;
`,d=r.Ay.svg`
position: absolute;
top: 25%;
right:14px;
width: 18px;
height: 18px;
cursor: pointer;
`,c=r.Ay.div`
display: flex;
width: 38px;
height: 38px;
border-radius: 50%;
background: #FFF4DF;

&:hover{
    background: #FBE7C1;
}
`,p=r.Ay.svg`
margin: auto;
width: 18px;
height: 18px;
cursor: pointer;
`;var h=i(2963),x=i.n(h),g=i(9456),m=i(4858),u=i(8403),A=i(899);const f=r.Ay.div`
position: relative;
padding: 20px 0;
width: 293px;

@media (min-width: 768px) {
    padding: 50px 30px;
    width: 380px;
    }
`,y=r.Ay.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
cursor: pointer;
`,j=r.Ay.h5`
margin-bottom: ${e=>e.theme.spacing(4)};
font-family: Manrope;
font-size: 20px;
font-weight: 700;
line-height: 1;
text-align: left;
color: #2B2B2A;
`,b=r.Ay.img`
margin: auto;
margin-bottom: 10px;

width: 80px;
height: 80px;

@media (min-width: 768px) {
    width: 86px;
    height: 86px;
    }
`,w=r.Ay.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`,v=r.Ay.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,F=r.Ay.input`
width: 100%;
  margin-bottom: 5px;
  padding: 9px 20px;
  gap: 10px;
  border-radius: 30px;
  border: 1px solid #26262626;
  outline: none;

  border: 1px solid ${e=>{let{$isError:t,$isSuccess:i}=e;return t?"red":i?"green":"#08AA83"}};
  
  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
  }

  &:hover {
    border: 1px solid ${e=>e.theme.colors.yellow};
  }
`,k=r.Ay.button` 
display: flex;
justify-content: center;
align-items: center;
width: 60%;
height: 42px;
gap: 8px;
border-radius: 30px;
border:none;

background-color: #FFF4DF;
cursor: pointer;

&:hover{
    background-color: #FBE7C1;
}
`,E=r.Ay.span` 
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,33;
letter-spacing: -0.02em;
color: #262626;
`,M=r.Ay.p`
  margin-left: 10px;
  font-family: Manrope;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-align: left;
  color: #08AA83;
`,B=r.Ay.span`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,16;
letter-spacing: -0.03em;

  color: #EF2447;
  margin-bottom: 8px;
`,C=r.Ay.button`
margin-top: 20px;
width: 100%;
height: 42px;

padding: 12px ;
gap: 10px;
border-radius: 30px;
color: #262626;
cursor: pointer;

&:hover {
  background-color: ${e=>e.theme.colors.yellow};
  color: ${e=>e.theme.colors.white};
}

    &::before {
      content: 'Go to profile';
    }

@media (min-width: 769px) {
    margin-top: 50px;
    &::before {
      content: 'Save';
    }
  }
`;var z=i(226),R=i(8970),I=i(6258),Q=i(2079),S=i(579);const $=g.wA;x().setAppElement("#modal");const O=A.Ik().shape({name:A.Yj().required("Required"),avatar:A.Yj().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Enter a valid Avatar").required("Required"),phone:A.Yj().matches(/^\+38\d{10}$/,"Enter a valid Phone").required("Required"),email:A.Yj().matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Enter a valid email").required("Required")}),D=e=>{let{isModalEditUser:t,setModalEditUser:i}=e;const[r,s]=(0,n.useState)(!1),a=$(),l=(0,g.d4)(I.YY),d={name:l.name||"Name",email:l.email||"name@gmail.com",phone:l.phone||"+380",avatar:l.avatar},{register:c,handleSubmit:p,formState:{errors:h,touchedFields:A},watch:D}=(0,m.mN)({resolver:(0,u.t)(O),mode:"onBlur",defaultValues:d}),U=D("avatar"),q=D("name");(0,n.useEffect)((()=>(t?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"),()=>{document.body.classList.remove("no-scroll")})),[t]);return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(x(),{isOpen:t,onRequestClose:()=>{i(!1)},style:{overlay:{backgroundColor:"rgba(38, 38, 38, 0.3)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"20px",borderRadius:"30px",backgroundColor:"#FFFFFF"}},contentLabel:"More info modal",children:(0,S.jsxs)(f,{children:[(0,S.jsx)(y,{onClick:()=>{i(!1)},children:(0,S.jsx)("svg",{width:"24px",height:"24px",children:(0,S.jsx)("use",{xlinkHref:o.A+"#icon-x"})})}),(0,S.jsx)(j,{children:"Edit information"}),(0,S.jsxs)("form",{onSubmit:p((async e=>{try{let t={};e.name!==l.name&&(t.name=e.name),e.email!==l.email&&(t.email=e.email),e.phone!==l.phone&&(t.phone=e.phone),e.avatar!==l.avatar&&(t.avatar=e.avatar),await a((0,Q.ak)(t)),i(!1)}catch(t){R.hm.error(t.message||"An error occurred","Error",5e3)}})),children:[r?(0,S.jsx)(b,{src:U,alt:q}):(0,S.jsx)(b,{src:z,alt:q}),(0,S.jsxs)(w,{children:[(0,S.jsxs)(v,{children:[(0,S.jsx)(F,{id:"avatar",placeholder:"Enter URL",$isError:!!h.avatar,$isSuccess:!h.avatar&&A.avatar,...c("avatar",{required:"Required",pattern:{value:/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,message:"Enter a valid avatar"}})}),h.avatar&&(0,S.jsx)(B,{children:h.avatar.message}),!h.avatar&&A.avatar&&(0,S.jsx)(M,{children:"Avatar is secure"})]}),(0,S.jsxs)(k,{type:"button",onClick:()=>{s(!0)},children:[(0,S.jsx)(E,{children:" Upload  photo"}),(0,S.jsx)("svg",{width:18,height:18,children:(0,S.jsx)("use",{xlinkHref:o.A+"#icon-upload-cloud"})})]})]}),(0,S.jsx)(F,{id:"name",placeholder:"Name",$isError:!!h.name,$isSuccess:!h.name&&A.name,...c("name",{required:"Required"})}),h.name&&(0,S.jsx)(B,{children:h.name.message}),!h.name&&A.name&&(0,S.jsx)(M,{children:"Name is secure"}),(0,S.jsx)(F,{type:"email",id:"email",placeholder:"Email",...c("email",{required:"Required",pattern:{value:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,message:"Enter a valid Email"}}),$isError:!!h.email,$isSuccess:!h.email&&A.email}),h.email&&(0,S.jsx)(B,{children:h.email.message}),!h.email&&A.email&&(0,S.jsx)(M,{children:"Email is secure"}),(0,S.jsx)(F,{type:"phone",id:"phone",placeholder:"Phone",...c("phone",{required:"Required",pattern:{value:/^\+38\d{10}$/,message:"Enter a valid Phone"}}),$isError:!!h.phone,$isSuccess:!h.phone&&A.phone}),h.phone&&(0,S.jsx)(B,{children:h.phone.message}),!h.phone&&A.phone&&(0,S.jsx)(M,{children:"Phone is secure"}),(0,S.jsx)(C,{type:"submit"})]})]})})})},U=()=>{const[e,t]=(0,n.useState)(!1),i=()=>{t(!0)};return(0,S.jsxs)(s,{children:[(0,S.jsxs)(a,{children:[(0,S.jsx)(l,{type:"button",onClick:i,children:"User"}),(0,S.jsx)(d,{children:(0,S.jsx)("use",{xlinkHref:o.A+"#icon-user2"})})]}),(0,S.jsx)(c,{children:(0,S.jsx)(p,{width:18,height:18,onClick:i,children:(0,S.jsx)("use",{xlinkHref:o.A+"#icon-edit"})})}),(0,S.jsx)(D,{isModalEditUser:e,setModalEditUser:t})]})},q=r.Ay.div`
margin-bottom: 40px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:10px;
    }
`,H=r.Ay.img`
margin: auto;

width: 94px;
height: 94px;

@media (min-width: 768px) {
    width: 110px;
    height: 110px;
    }
`,L=r.Ay.p`
margin-bottom: 10px;
    font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.03em;

width: 100%;
height: 42px;
padding: 12px;
gap: 10px;
border-radius: 30px;
border: ${e=>e.$isDefault?"1px solid #26262626":"1px solid #F6B83D"};
`,N=r.Ay.p`
margin-bottom: 20px;

font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: center;

color: #262626;
cursor: pointer;

@media (min-width: 768px) {
    font-size: 14px;
    }
`,P=r.Ay.h5`
margin-bottom: 20px;

font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;

color: #2B2B2A;

@media (min-width: 768px) {
    font-size: 18px;
    }
`,J=()=>{const e=(0,g.d4)(I.YY),t=e.avatar||z,i=e.name||"Name",o=e.email||"name@gmail.com",r=e.phone||"+380",s="Name"===i,a="name@gmail.com"===o,l="+380"===r,[d,c]=(0,n.useState)(!1);return(0,S.jsxs)("div",{children:[e.avatar&&d?(0,S.jsx)(H,{width:94,height:94,src:t,alt:"User Avatar"}):(0,S.jsx)(H,{width:94,height:94,src:z,alt:"User Avatar"}),(0,S.jsx)(N,{onClick:()=>{c(!0)},children:"Upload photo"}),(0,S.jsx)(P,{children:"My information"}),(0,S.jsxs)(q,{children:[(0,S.jsx)(L,{$isDefault:s,children:i}),(0,S.jsx)(L,{$isDefault:a,children:o}),(0,S.jsx)(L,{$isDefault:l,children:r})]})]})};var W=i(3216);const Y=r.Ay.div`
display: flex;
justify-content: space-between;
`,V=r.Ay.p`
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
color: #2B2B2A;

@media (min-width: 768px) {
    font-size: 18px;
}
`,T=r.Ay.button`
width: 103px;
height: 38px;
padding: 10px 16px;
gap: 4px;
border-radius: 30px;
background: #F6B83D;

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.03em;
cursor: pointer;

color: #FFFFFF;

&:hover{
    background: #F9B020;
}

@media (min-width: 768px) {
    width: 118px;
    height: 40px;
    font-size: 16px;
}
`,_=()=>{const e=(0,W.Zp)();return(0,S.jsxs)(Y,{children:[(0,S.jsx)(V,{children:"My pets"}),(0,S.jsx)(T,{type:"button",onClick:()=>{e("/add-pet")},children:" Add pet +"})]})},K=r.Ay.button`
display: block;
width: 30px;
height: 30px;
border-radius: 50%;
background: #FFF4DF;

&:hover{
    background: #FBE7C1;
}
`,X=r.Ay.li`
margin-bottom: 20px;
padding: 16px;


display: flex;
gap: 16px;

border-radius: 20px;
border: 1px solid #2626261A;
`,Z=r.Ay.img`

width: 66px;
height:66px;
flex-shrink: 0;
border-radius: 50%;
background: #FBE7C1;
`,G=r.Ay.div`
width: 100%;
`,ee=r.Ay.div`
display: flex;
justify-content: space-between;
align-items: center;
`,te=r.Ay.h5`
font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29;
text-align: left;
color: #2B2B2A;
`,ie=r.Ay.div`
display: flex;
justify-content: space-between;
`,ne=r.Ay.p`
font-family: Manrope;
font-size: 10px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #26262680;
`,oe=r.Ay.p`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,17;
letter-spacing: -0.02em;
color: #262626;
`,re=g.wA,se=e=>{let{pet:t}=e;const{imgURL:i,title:n,name:r,birthday:s,sex:a,species:l,_id:d}=t,c=re();return(0,S.jsxs)(X,{children:[(0,S.jsx)(Z,{src:i,alt:n}),(0,S.jsxs)(G,{children:[(0,S.jsxs)(ee,{children:[(0,S.jsx)(te,{children:n}),(0,S.jsx)(K,{type:"button",onClick:()=>(e=>{c((0,Q.Sb)(e))})(d),children:(0,S.jsx)("svg",{width:16,height:16,children:(0,S.jsx)("use",{xlinkHref:o.A+"#icon-trash-2"})})})]}),(0,S.jsxs)(ie,{children:[(0,S.jsxs)("div",{children:[(0,S.jsx)(ne,{children:"Name"}),(0,S.jsx)(oe,{children:r})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)(ne,{children:"Birthday"}),(0,S.jsx)(oe,{children:s})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)(ne,{children:"Sex"}),(0,S.jsx)(oe,{children:a})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)(ne,{children:"Species"}),(0,S.jsx)(oe,{children:l})]})]})]})]})},ae=r.Ay.ul`
margin-top: 20px;
margin-bottom: 20px;
list-style: none;

@media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
}
`,le=g.wA,de=()=>{const e=(0,g.d4)(I.YY).pets,t=le();return(0,n.useEffect)((()=>{t((0,Q.Vq)())}),[t]),(0,S.jsx)(ae,{children:null===e||void 0===e?void 0:e.map((e=>(0,S.jsx)(se,{pet:e},e._id)))})},ce=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_,{}),(0,S.jsx)(de,{})]});var pe=i(6465);const he=r.Ay.div`
  padding: 0 0 40px 0;
`,xe=()=>(0,S.jsxs)(he,{children:[(0,S.jsx)(U,{}),(0,S.jsx)(J,{}),(0,S.jsx)(ce,{}),(0,S.jsx)(pe.T,{})]}),ge=r.Ay.div`
padding: 0 20px;
`,me=r.Ay.div`
display: flex;
gap: 10px;
align-items: center;
`,ue=r.Ay.button`
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
cursor: pointer;

&:hover{
    background-color: #F6B83D;
    color: #FFFFFF;
}
&:active{
    background-color: #F6B83D;
    color: #FFFFFF;
}
`,Ae=r.Ay.p`
margin-top: ${e=>e.theme.spacing(8)};
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: center;
color: #262626;
`,fe=r.Ay.span`
font-family: Manrope;
font-size: 14px;
font-weight: 700;
line-height: 1,29;
letter-spacing: -0.02em;
text-align: center;
color:${e=>e.theme.colors.yellow}
`;var ye=i(7719);const je=g.wA,be=()=>{const[e,t]=(0,n.useState)(!1),[i,o]=(0,n.useState)(!1),[r,s]=(0,n.useState)(!1),a=je(),l=(0,g.d4)(I.YY),d=l.noticesFavorites,c=l.noticesViewed;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(me,{children:[(0,S.jsx)(ue,{type:"button",onClick:()=>{t(!0),o(!1),a((0,Q.Vq)()),s(d&&d.length>0)},children:"My favorite pets"}),(0,S.jsx)(ue,{type:"button",onClick:()=>{t(!1),o(!0),a((0,Q.Vq)())},children:"Viewed"})]}),e&&!i&&(0,S.jsx)(ye.c,{notices:d,trash:!0}),!e&&i&&(0,S.jsx)(ye.c,{notices:c,trash:!1}),!r&&e&&(0,S.jsxs)(Ae,{children:["Oops,",(0,S.jsx)(fe,{children:"looks like there aren't any furries "}),'on our adorable page yet. Do not worry! View your pets on the "find your favorite pet" page and add them to your favorites.']})]})};function we(){return(0,S.jsxs)(ge,{children:[(0,S.jsx)(xe,{}),(0,S.jsx)(be,{})]})}},7719:(e,t,i)=>{i.d(t,{c:()=>G});var n=i(1581),o=i(7275);const r=o.Ay.li`
padding: 20px;

@media (min-width: 768px) {
    width: 100%; 
    margin: 0 auto; 
}
`,s=o.Ay.img`
border-radius: 16px;
margin-bottom: 20px;
`,a=o.Ay.h3`
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
color: #2B2B2A;
`,l=o.Ay.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
`,d=o.Ay.ul`
display: flex;
justify-content: space-between;
list-style: none;
margin-bottom: 14px;
`,c=o.Ay.div`
display: flex;
justify-content: space-between;
margin-bottom: 5px;
`,p=o.Ay.div`
display: flex;
gap:2px;
justify-content: center;
align-items: center;
`,h=o.Ay.p`
font-family: Manrope;
font-size: 10px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #26262680;
`,x=(o.Ay.p`
font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #262626;
`,o.Ay.p`
margin-bottom: 16px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`),g=o.Ay.div`
display: flex;
justify-content: space-between;
`,m=o.Ay.button`
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
`,u=o.Ay.button`
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

`;var A=i(2963),f=i.n(A),y=i(5043);const j=o.Ay.div`
position: relative;
padding-top: 40px;
`,b=o.Ay.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
cursor: pointer;
`,w=o.Ay.div`
display: block;
margin: 0 auto;
margin-bottom: 20px;
padding:18px;
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #FFF4DF;
`,v=o.Ay.img`
display: block;
margin: auto;
`,F=o.Ay.h2`
margin-bottom: 20px;
font-family: Manrope;
font-size: 20px;
font-weight: 700;
line-height: 1;
letter-spacing: -0.03em;
text-align: center;
color: ${e=>e.theme.colors.yellow};
`,k=o.Ay.p`
margin-bottom: 20px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29px;
letter-spacing: -0.02em;
text-align: center;
color: #2B2B2A;
`;var E=i(8444),M=i(579);f().setAppElement("#modal");const B=e=>{let{isOpenModalAttention:t,setIsOpenModalAttention:i}=e;return(0,y.useEffect)((()=>(t?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"),()=>{document.body.classList.remove("no-scroll")})),[t]),(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(f(),{isOpen:t,onRequestClose:()=>{i(!1)},style:{overlay:{backgroundColor:"rgba(38, 38, 38, 0.3)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"20px",maxWidth:"335px",maxHeight:"394px",borderRadius:"30px",backgroundColor:"#FFFFFF"}},contentLabel:"More info modal",children:(0,M.jsxs)(j,{children:[(0,M.jsx)(b,{onClick:()=>{i(!1)},children:(0,M.jsx)("svg",{width:"24px",height:"24px",children:(0,M.jsx)("use",{xlinkHref:n.A+"#icon-x"})})}),(0,M.jsx)(w,{children:(0,M.jsx)(v,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAC0ALAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABgcFAgMEAQEAAwEAAAAAAAAAAAAAAAADAQIEBf/aAAwDAQACEAMQAAAAv/OSm5npB8+QxMJOKOd4a7+XGV2Ka0OEkjLWlJ0mNVTbzqYYM9NWnR19iC4f/8QALRAAAgIBAgMHBAIDAAAAAAAAAQIDBAUAEQYSQRMhIjEyUXEQFCNhIEJikeL/2gAIAQEAAT8A1JLFEAZJETfy5iBoWIFPfKuvuKw5d54wW8vENz9c9mosPUEhAaaTcRJ7/v4GsFFJkp2yWQkM0hPg5vIAaj7ILsANZWlUuQPHJGP0eoOuHuJJsdcOMyMpeDn5EkPmn/J+nE2RmyOYs9nu4V+wgUeynbWGqSUMfElllUog5zv3DUtkQV5pmPhjQsfgDScV5A3OeV1MTHviAHp/Ws3DKttbi7NVsqORx7jodcI5cW8JD27/AJIWMJPU8ujwsMVnhdM6vBLI/ZIR3oW1xzj8ndwqrjBI0q2UZ1j9RTUGKmbhxKMzj7kUUjYnrIqau0cjFmIx+RIwVEi9AUJ33/3qvinl4bjpy+CSeXePm/oWPh1w7w3Hicf9vO4mlaQyOwBA3IA2GsrSF2oyBuR0IeNvZhoXb9JzHaqSgjqqllPwRrjCvazeQrT1bUiBQInQqSF68y/5aqZCE1a6LXeeSKNU7Qxl3PKNtydvPWOpXLFiK5bjMUaHmjjb1MehI6AfwyPDtfIzrZ7d4mKgMFAIO2oIUrQRQR+lECj4H1//xAAhEQACAgIBBAMAAAAAAAAAAAABAgADBBESITFBUTJhkf/aAAgBAgEBPwB8jVwpQcn1s+lEYuFPEAn7lF6XqSOjKdMp7gzDxnrsutt+bsfyZ9lq21hbTWoRm34JHiYtNwyBeBpba9sPTQicSe+tQCf/xAAjEQACAgEDAwUAAAAAAAAAAAABAgMRAAQSURATMiEjMUFh/9oACAEDAQE/AFh9sysaX4HJOKFsWTWSxNEwB9QRYPIzUTIyRxp4qM0iRlHuPeSwWuAfvJ5IzD2rso9KfzAccwCOMoW3ny6f/9k=",alt:"small-dog",width:"44px",height:"44px"})}),(0,M.jsx)(F,{children:"Attention"}),(0,M.jsx)(k,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,M.jsx)(E.Q,{})]})})})},C=o.Ay.div`
position: relative;
padding-top: 40px;
`,z=o.Ay.div`
display: block;
position:absolute;
right: 0; top: 0;
border: none;
margin-left: auto;
`,R=o.Ay.div`
position: relative;
`,I=o.Ay.div`
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
`,Q=o.Ay.img`
display: block;
margin: auto;
margin-bottom: ${e=>e.theme.spacing(4)};
width: 120px;
height: 120px;
border-radius: 50%;
`,S=o.Ay.h2`
margin-bottom: 8px;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;

text-align: center;
color: #2B2B2A;
`,$=o.Ay.div`
display: flex;
justify-content: center;
gap: 64px;
margin-bottom: 8px;
`,O=o.Ay.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
`,D=o.Ay.ul`
display: flex;
justify-content: space-between;
list-style: none;
margin-bottom: 14px;
`,U=o.Ay.p`
font-family: Manrope;
font-size: 10px;
font-weight: 500;
line-height: 1,4;
letter-spacing: -0.02em;
color: #26262680;
`,q=o.Ay.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`,H=o.Ay.p`
margin-bottom: 16px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;

color: #2B2B2A;
`,L=o.Ay.div`
display: flex;
gap: 8px;
justify-content: center;
align-items: center;
`,N=o.Ay.button`
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
`,P=o.Ay.a`
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
`;var J=i(2079),W=i(9456);const Y=W.wA;f().setAppElement("#modal");const V=e=>{let{isOpenModalNotice:t,setIsOpenModalNotice:i,notice:o,setFavorite:r,isFavorite:s}=e;const{imgURL:a,title:l,popularity:d,comment:c,name:p,birthday:h,species:x,sex:g,category:m,_id:u,user:A}=o,j=Y();(0,y.useEffect)((()=>(t?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"),()=>{document.body.classList.remove("no-scroll")})),[t]);return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(f(),{isOpen:t,onRequestClose:()=>{i(!1)},style:{overlay:{backgroundColor:"rgba(38, 38, 38, 0.3)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"20px",maxWidth:"335px",maxHeight:"446px",borderRadius:"30px",backgroundColor:"#FFFFFF"}},contentLabel:"More info modal",children:(0,M.jsxs)(C,{children:[(0,M.jsx)(z,{onClick:()=>{i(!1)},children:(0,M.jsx)("svg",{width:"24px",height:"24px",children:(0,M.jsx)("use",{xlinkHref:n.A+"#icon-x"})})}),(0,M.jsxs)(R,{children:[(0,M.jsx)(Q,{src:a,alt:l}),(0,M.jsx)(I,{children:m})]}),(0,M.jsx)(S,{children:l}),(0,M.jsxs)($,{children:[(0,M.jsx)("svg",{width:16,height:16,children:(0,M.jsx)("use",{xlinkHref:n.A+"#icon-star"})}),(0,M.jsx)(O,{children:d})]}),(0,M.jsxs)(D,{children:[(0,M.jsxs)("li",{children:[(0,M.jsx)(U,{children:"Name"}),(0,M.jsx)(q,{children:p})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(U,{children:"Birthday"}),(0,M.jsx)(q,{children:h})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(U,{children:"Sex"}),(0,M.jsx)(q,{children:g})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(U,{children:"Species"}),(0,M.jsx)(q,{children:x})]})]}),(0,M.jsx)(H,{children:c}),(0,M.jsxs)(L,{children:[(0,M.jsxs)(N,{type:"button",onClick:()=>(e=>{s?(j((0,J._X)(e)),r(!1)):(j((0,J.TL)(e)),r(!0))})(u),children:[" Add to",(0,M.jsx)("svg",{width:16,height:16,children:(0,M.jsx)("use",{xlinkHref:n.A+"#icon-heart-3"})})]}),(null===A||void 0===A?void 0:A.phone)&&(0,M.jsx)(P,{as:"a",href:`tel:${A.phone}`,children:"Contact"})]})]})})})};var T=i(6291),_=i(6258);const K=W.wA,X=e=>{let{notice:t,trash:i}=e;const o=K(),A=(0,W.d4)(T.Ep),f=(0,W.d4)(_._I),j=(0,W.d4)(_.Si),{imgURL:b,title:w,popularity:v,comment:F,name:k,birthday:E,species:C,category:z,sex:R,_id:I}=t,[Q,S]=(0,y.useState)(!1),[$,O]=(0,y.useState)(!1),[D,U]=(0,y.useState)(f.includes(I)),q=()=>{S(!0)},H=e=>{A?(O(!0),o((0,J.Bw)(e))):q()},L=e=>{A?(e=>{D?(o((0,J._X)(e)),U(!1),console.log(f)):(o((0,J.TL)(e)),U(!0),console.log(f))})(e):q()};return(0,M.jsxs)(r,{children:[(0,M.jsx)(s,{src:b,alt:w}),(0,M.jsxs)(c,{children:[(0,M.jsx)(a,{children:w}),(0,M.jsxs)(p,{children:[(0,M.jsx)("svg",{width:16,height:16,children:(0,M.jsx)("use",{xlinkHref:n.A+"#icon-star"})}),(0,M.jsx)(l,{children:v})]})]}),(0,M.jsxs)(d,{children:[(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Name"}),(0,M.jsx)("p",{children:k})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Birthday"}),(0,M.jsx)("p",{children:E})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Sex"}),(0,M.jsx)("p",{children:R})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Species"}),(0,M.jsx)("p",{children:C})]}),(0,M.jsxs)("li",{children:[(0,M.jsx)(h,{children:"Category"}),(0,M.jsx)("p",{children:z})]})]}),(0,M.jsx)(x,{children:F}),(0,M.jsxs)(g,{children:[(0,M.jsx)(m,{type:"button",onClick:()=>H(I),children:"Learn more"}),i&&(0,M.jsx)(u,{onClick:()=>(async e=>{try{await o((0,J._X)(e)),U(!1),await o((0,J.Vq)())}catch(t){console.error("Error deleting favorite notice:",t)}})(I),children:(0,M.jsx)("svg",{width:18,height:18,children:(0,M.jsx)("use",{xlinkHref:n.A+"#icon-trash-2"})})}),!i&&(0,M.jsx)(u,{$isDefaultFavorite:D,onClick:()=>L(I),children:(0,M.jsx)("svg",{width:18,height:18,children:(0,M.jsx)("use",{xlinkHref:n.A+"#icon-heart"})})})]}),(0,M.jsx)(B,{isOpenModalAttention:Q,setIsOpenModalAttention:S}),(0,M.jsx)(V,{notice:j,setFavorite:U,isFavorite:D,isOpenModalNotice:$,setIsOpenModalNotice:O})]})},Z=o.Ay.ul`

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
`,G=e=>{let{notices:t,trash:i=!1}=e;return(0,M.jsx)(Z,{children:null===t||void 0===t?void 0:t.map((e=>(0,M.jsx)(X,{notice:e,trash:i},e._id)))})}},6258:(e,t,i)=>{i.d(t,{P5:()=>l,Si:()=>s,WH:()=>o,YY:()=>d,ZG:()=>r,_I:()=>a,vc:()=>n});const n=e=>e.news.news,o=e=>e.news.totalPages,r=e=>e.notices.notices,s=e=>e.notices.noticeId,a=e=>e.notices.isFavorite,l=e=>e.friends.friends,d=e=>e.user.userFull},9417:(e,t,i)=>{function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(t,{A:()=>n})},8168:(e,t,i)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},n.apply(this,arguments)}i.d(t,{A:()=>n})},8587:(e,t,i)=>{function n(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}i.d(t,{A:()=>n})},3662:(e,t,i)=>{function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}i.d(t,{A:()=>n})}}]);
//# sourceMappingURL=973.b1aa78ff.chunk.js.map