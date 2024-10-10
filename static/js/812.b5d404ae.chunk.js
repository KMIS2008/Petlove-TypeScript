"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[812],{2812:(e,t,i)=>{i.r(t),i.d(t,{default:()=>$});var n=i(5383),o=i(4813),r=i(7275);const l=r.Ay.div`  
margin-top: 50px;

@media (min-width: 768px) {
   display: flex;
  justify-content: space-between;   
}
`;var s=i(5043),a=i(5475);const c=r.Ay.li`
display: flex;
flex-direction: column;
justify-content: space-between;

width: 335px;
margin: 0 auto;

@media (min-width: 768) {
flex: 0 1 calc(50% - 8px); 
box-sizing: border-box;
width: 340px;

}

@media (min-width: 1280) {
    width: 361px;
    flex:0 1 calc(33.33% - 8px)
}
`,h=r.Ay.img`
display: block;
width: 100%;
margin-bottom: ${e=>e.theme.spacing(4)};
border-radius: 15px;

@media (min-width: 768px) {
    height: 226px;
    
}
@media (min-width: 1280px) {
    width: 361px;
}
`,d=r.Ay.h3`
margin-bottom: ${e=>e.theme.spacing(4)};

font-family: Manrope;
font-size: 16px;
font-weight: 700;
line-height: 1,25;
letter-spacing: -0.03em;
text-align: left;
color: #262626;
`,p=r.Ay.p`
margin-bottom: ${e=>e.theme.spacing(4)};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.02em;
text-align: left;

color: #262626;
`,x=r.Ay.div`
margin-bottom: ${e=>e.theme.spacing(4)};

display: flex;
justify-content: space-between;
`,m=r.Ay.p`
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,25;
letter-spacing: -0.02em;
text-align: left;
color: #26262680;
`,g=(0,r.Ay)(a.k2)`
margin-bottom: ${e=>e.theme.spacing(4)};

font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 1,25px;
letter-spacing: -0.02em;
text-align: left;
color: ${e=>e.theme.colors.yellow};
`;var f=i(579);const u=e=>{let{value:t}=e;const{imgUrl:i,title:n,text:o,date:r,url:l}=t;const s=function(e){const t=new Date(e);return`${String(t.getDate()).padStart(2,"0")}/${String(t.getMonth()+1).padStart(2,"0")}/${t.getFullYear()}`}(r);return(0,f.jsxs)(c,{children:[(0,f.jsx)(h,{src:i,alt:n}),(0,f.jsx)(d,{children:n}),(0,f.jsx)(p,{children:o}),(0,f.jsxs)(x,{children:[(0,f.jsx)(m,{children:s}),(0,f.jsx)(g,{to:l,target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})]})},w=r.Ay.ul`
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
`,y=e=>{let{news:t}=e;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(w,{children:null===t||void 0===t?void 0:t.map((e=>(0,f.jsx)(u,{value:e},e._id)))})})};var b=i(2079),j=i(9456),v=i(6258),A=i(1440);const k=j.wA;function $(){const e=k(),[t,i]=(0,s.useState)(1),r=(0,j.d4)(v.vc);return(0,s.useEffect)((()=>{e((0,b.y0)(t))}),[e,t]),(0,f.jsxs)("div",{children:[(0,f.jsxs)(l,{children:[(0,f.jsx)(n.h,{name:"News"}),(0,f.jsx)(o.L,{fetch:b.EX})]}),(0,f.jsx)(y,{news:r}),(0,f.jsx)(A.d,{handleChangeNewPage:e=>{i(e)},currentPage:t})]})}},1440:(e,t,i)=>{i.d(t,{d:()=>u});var n=i(9456),o=i(9657),r=i(6258),l=i(7275),s=i(423),a=i(7196);const c=l.Ay.div`
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
`,h=l.Ay.button`
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
`,p=(0,l.Ay)(a.CUS)`
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
`,m=(0,l.Ay)(s.OQo)`
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`,g=(0,l.Ay)(a.r$Z)`
  color: #26262680;
  font-size: 20px;

  &:hover {
    color: #262626;
  }
`;var f=i(579);const u=e=>{let{handleChangeNewPage:t,currentPage:i}=e;const l=(0,n.d4)(r.WH),s=(0,o.Ub)({query:"(max-width: 767px)"})?2:3,a=(()=>{let e=Math.max(1,i-Math.floor(s/2)),t=Math.min(l,e+s-1);t-e<s-1&&(e=Math.max(1,t-s+1));const n=[];for(let i=e;i<=t;i++)n.push(i);return n})();return(0,f.jsx)(f.Fragment,{children:l>1&&(0,f.jsxs)(c,{children:[(0,f.jsx)(d,{onClick:()=>t(1),disabled:1===i,type:"button",children:(0,f.jsx)(p,{})}),(0,f.jsx)(d,{onClick:()=>t(i-1),disabled:1===i,type:"button",children:(0,f.jsx)(x,{})}),a[0]>1&&(0,f.jsx)(h,{children:"..."}),a.map((e=>(0,f.jsx)(h,{type:"button",onClick:()=>t(e),children:e},e))),a[a.length-1]<l&&(0,f.jsx)(h,{children:"..."}),(0,f.jsx)(d,{onClick:()=>t(i+1),disabled:i===l,type:"button",children:(0,f.jsx)(m,{})}),(0,f.jsx)(d,{onClick:()=>t(l),disabled:i===l,type:"button",children:(0,f.jsx)(g,{})})]})})}},4813:(e,t,i)=>{i.d(t,{L:()=>p});var n=i(5043),o=i(1581),r=i(7275);const l=r.Ay.div`
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
`;var h=i(9456),d=i(579);const p=e=>{let{fetch:t}=e;const i=(0,h.wA)(),[r,p]=(0,n.useState)(""),x=()=>{p("")};return(0,d.jsxs)(l,{onSubmit:e=>{e.preventDefault(),r.trim()&&i(t({keyword:r,pageNumber:1})),x()},children:[(0,d.jsx)(s,{placeholder:"Search",name:"name",type:"text",value:r,onChange:e=>{p(e.target.value)}}),(0,d.jsx)("button",{type:"submit",children:(0,d.jsx)(a,{children:(0,d.jsx)("use",{xlinkHref:o.A+"#icon-search"})})}),r&&(0,d.jsx)(c,{onClick:x,children:(0,d.jsx)("use",{xlinkHref:o.A+"#icon-x"})})]})}},5383:(e,t,i)=>{i.d(t,{h:()=>r});const n=i(7275).Ay.h1`
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
`;var o=i(579);const r=e=>{let{name:t}=e;return(0,o.jsx)(n,{children:t})}},6258:(e,t,i)=>{i.d(t,{P5:()=>a,Si:()=>l,WH:()=>o,YY:()=>c,ZG:()=>r,_I:()=>s,vc:()=>n});const n=e=>e.news.news,o=e=>e.news.totalPages,r=e=>e.notices.notices,l=e=>e.notices.noticeId,s=e=>e.notices.isFavorite,a=e=>e.friends.friends,c=e=>e.user.userFull}}]);
//# sourceMappingURL=812.b5d404ae.chunk.js.map