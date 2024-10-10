"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[694],{8694:(e,i,n)=>{n.r(i),n.d(i,{default:()=>b});var t=n(5043),s=n(9456),r=n(2079),l=n(6258),o=n(5383),d=n(7275);const a=d.Ay.div`
padding: 50px 20px;
`,c=d.Ay.li`
padding: 12px 20px;
margin-bottom: 20px;
border-radius: 15px;
background: ${e=>e.theme.colors.white};

display: flex;
flex-direction: column;
`,p=d.Ay.ul`
display: flex;
margin-left: auto;
justify-content: center;
align-items: center;
 text-align: center; 
list-style: none;

height: 32px;
border-radius: 30px;
background: #FFF4DF;

font-family: Manrope;
font-size: 12px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.02em;
color: ${e=>e.theme.colors.yellow}; 
`,h=d.Ay.li`
padding: 0 8px;
`,x=d.Ay.div`
display: flex;
gap: 20px;
`,m=d.Ay.h4`
margin-bottom: 20px;
font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
letter-spacing: -0.04em;
`,g=d.Ay.p`
margin-bottom: 8px;
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,29;
letter-spacing: -0.02em;
color: #26262680;
`,f=d.Ay.span`
color: #262626;
`;var u=n(579);const y=e=>{let{friend:i}=e;const{workDays:n,imageUrl:t,title:s,email:r,address:l,phone:o}=i,d=(new Date).getDay(),a=n?n[d]:null;return(0,u.jsxs)(c,{children:[(0,u.jsx)(p,{children:a?(0,u.jsx)(h,{children:a.isOpen?`${a.from} - ${a.to}`:"Closed"}):(0,u.jsx)(h,{children:"Day and night"})}),(0,u.jsxs)(x,{children:[(0,u.jsx)("img",{width:80,height:80,src:t,alt:s}),(0,u.jsxs)("div",{children:[(0,u.jsx)(m,{children:s}),r&&(0,u.jsxs)(g,{children:["Email: ",(0,u.jsxs)(f,{children:[" ",r]})," "]}),l&&(0,u.jsxs)(g,{children:["Adress: ",(0,u.jsxs)(f,{children:[" ",l]})," "]}),o&&(0,u.jsxs)(g,{children:["Phone: ",(0,u.jsxs)(f,{children:[" ",o]})," "]})]})]})]})},j=d.Ay.ul`
background: #F9F9F9;
list-style: none;
padding: 40px 0;

@media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
`,w=e=>{let{friends:i}=e;return(0,u.jsx)(j,{children:null===i||void 0===i?void 0:i.map((e=>(0,u.jsx)(y,{friend:e},e._id)))})},A=s.wA;function b(){const e=A(),i=(0,s.d4)(l.P5)||[];return(0,t.useEffect)((()=>{e((0,r.gT)())}),[e]),(0,u.jsxs)(a,{children:[(0,u.jsx)(o.h,{name:"Our friends"}),(0,u.jsx)(w,{friends:i})]})}},5383:(e,i,n)=>{n.d(i,{h:()=>r});const t=n(7275).Ay.h1`
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
`;var s=n(579);const r=e=>{let{name:i}=e;return(0,s.jsx)(t,{children:i})}},6258:(e,i,n)=>{n.d(i,{P5:()=>d,Si:()=>l,WH:()=>s,YY:()=>a,ZG:()=>r,_I:()=>o,vc:()=>t});const t=e=>e.news.news,s=e=>e.news.totalPages,r=e=>e.notices.notices,l=e=>e.notices.noticeId,o=e=>e.notices.isFavorite,d=e=>e.friends.friends,a=e=>e.user.userFull}}]);
//# sourceMappingURL=694.c5d73e25.chunk.js.map