import{c as s}from"./mobile.c47dcebd.js";import{a as e,A as t,B as a,r as l,o,c as d,f as n,z as i,j as c}from"./index.d870aa4d.js";const{createDemo:r}=s("overlay");var u=r({props:{},setup:()=>({state:e({show:!1,show2:!1})})});const p=i();t("data-v-172e7d18");const v={class:"demo"},h=n("h2",null,"基础用法",-1),b=c("显示遮罩层"),f=n("h2",null,"嵌套内容",-1),w=c("嵌套内容"),m=n("div",{class:"wrapper"},[n("div",{class:"content"},"这里是正文")],-1);a();const _=p(((s,e,t,a,i,c)=>{const r=l("nut-button"),u=l("nut-overlay"),_=l("nut-cell");return o(),d("div",v,[h,n(_,null,{default:p((()=>[n(r,{type:"primary",onClick:e[1]||(e[1]=e=>s.state.show=!0)},{default:p((()=>[b])),_:1}),n(u,{visible:s.state.show,"onUpdate:visible":e[2]||(e[2]=e=>s.state.show=e),"z-index":2e3},null,8,["visible"])])),_:1}),f,n(_,null,{default:p((()=>[n(r,{type:"success",onClick:e[3]||(e[3]=e=>s.state.show2=!0)},{default:p((()=>[w])),_:1}),n(u,{visible:s.state.show2,"onUpdate:visible":e[4]||(e[4]=e=>s.state.show2=e),"z-index":2e3},{default:p((()=>[m])),_:1},8,["visible"])])),_:1})])}));u.render=_,u.__scopeId="data-v-172e7d18";export default u;