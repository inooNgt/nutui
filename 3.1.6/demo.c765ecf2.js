var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o;import{c as t,T as u}from"./mobile.fb93db1a.js";import{_ as d}from"./index.ccbbeb9f.js";import{m as n,a as b,A as h,r as f,e as r,j as x,k as m,o as p,g,t as s,l as i,B as k,C as _}from"./vendor.9cc7b6f2.js";const{createDemo:V}=t("checkbox"),y=V({setup(e,t){const d=n(null),f=b({checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!0,checkbox5:!1,checkbox6:!1,checkbox7:!1,checkbox8:!1,checkboxgroup1:["2","3"],checkboxgroup2:["2"],checkboxgroup3:["2"]});return((e,t)=>{for(var u in t||(t={}))a.call(t,u)&&c(e,u,t[u]);if(l)for(var u of l(t))o.call(t,u)&&c(e,u,t[u]);return e})({changeBox1:(e,l)=>{console.log(e,l)},changeBox2:(e,l)=>{console.log(e,l)},changeBox3:(e,l)=>{u.text(`您${e?"选中":"取消"}了${l}`)},changeBox4:e=>{u.text(""+(e.length?"全选":"取消全选"))},toggleAll:e=>{d.value.toggleAll(e)},group:d},h(f))}}),v=e=>(k("data-v-c7aa6f3a"),e=e(),_(),e),C={class:"demo"},U=i("复选框"),B=i("复选框"),j=v((()=>g("div",{class:"demo-check"},"当前选中值",-1))),O=i("未选时禁用状态"),A=i("选中时禁用状态"),w=i("自定义尺寸25"),G=i("自定义尺寸10"),P=i("自定义图标"),z=i("change复选框"),I=i("组合复选框"),$=i("组合复选框"),D=i("组合复选框"),E=i("组合复选框"),S=v((()=>g("div",{class:"demo-check"},"当前选中值",-1))),T=i("组合复选框"),q=i("组合复选框"),F=i("组合复选框"),H=i("组合复选框"),J=i("组合复选框"),K=i("组合复选框"),L=i("全选"),M=i("取消");var N=d(y,[["render",function(e,l,a,o,c,t){const u=f("nut-checkbox"),d=f("nut-cell"),n=f("nut-cell-group"),b=f("nut-checkboxgroup"),h=f("nut-button");return p(),r("div",C,[x(n,{title:"基本用法-左右"},{default:m((()=>[x(d,null,{default:m((()=>[x(u,{modelValue:e.checkbox1,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checkbox1=l),label:"复选框",onChange:e.changeBox1},{default:m((()=>[U])),_:1},8,["modelValue","onChange"])])),_:1}),x(d,null,{default:m((()=>[x(u,{modelValue:e.checkbox1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checkbox1=l),"text-position":"left",onChange:e.changeBox1},{default:m((()=>[B])),_:1},8,["modelValue","onChange"])])),_:1}),x(d,null,{default:m((()=>[j,g("div",null,s(e.checkbox1),1)])),_:1})])),_:1}),x(n,{title:"禁用状态"},{default:m((()=>[x(d,null,{default:m((()=>[x(u,{modelValue:e.checkbox3,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checkbox3=l),disabled:""},{default:m((()=>[O])),_:1},8,["modelValue"])])),_:1}),x(d,null,{default:m((()=>[x(u,{modelValue:e.checkbox4,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkbox4=l),disabled:""},{default:m((()=>[A])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(n,{title:"自定义尺寸"},{default:m((()=>[x(d,null,{default:m((()=>[x(u,{modelValue:e.checkbox5,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkbox5=l),"icon-size":"25"},{default:m((()=>[w])),_:1},8,["modelValue"])])),_:1}),x(d,null,{default:m((()=>[x(u,{modelValue:e.checkbox6,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkbox6=l),"icon-size":"10"},{default:m((()=>[G])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(n,{title:"自定义图标"},{default:m((()=>[x(d,null,{default:m((()=>[x(u,{modelValue:e.checkbox7,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checkbox7=l),"icon-name":"checklist","icon-active-name":"checklist"},{default:m((()=>[P])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(n,{title:"点击触发change事件"},{default:m((()=>[x(d,null,{default:m((()=>[x(u,{modelValue:e.checkbox8,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checkbox8=l),onChange:e.changeBox3},{default:m((()=>[z])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),x(n,{title:"checkboxGroup使用"},{default:m((()=>[x(d,null,{default:m((()=>[x(b,{modelValue:e.checkboxgroup1,"onUpdate:modelValue":l[8]||(l[8]=l=>e.checkboxgroup1=l)},{default:m((()=>[x(u,{label:"1",style:{margin:"2px 20px 0 0"}},{default:m((()=>[I])),_:1}),x(u,{label:"2"},{default:m((()=>[$])),_:1}),x(u,{label:"3",style:{margin:"2px 20px 0 0"}},{default:m((()=>[D])),_:1}),x(u,{label:"4"},{default:m((()=>[E])),_:1})])),_:1},8,["modelValue"])])),_:1}),x(d,null,{default:m((()=>[S,g("div",null,s(e.checkboxgroup1),1)])),_:1})])),_:1}),x(n,{title:"checkboxGroup禁用"},{default:m((()=>[x(d,null,{default:m((()=>[x(b,{modelValue:e.checkboxgroup1,"onUpdate:modelValue":l[9]||(l[9]=l=>e.checkboxgroup1=l),disabled:""},{default:m((()=>[x(u,{label:"1",style:{margin:"2px 20px 0 0"}},{default:m((()=>[T])),_:1}),x(u,{label:"2"},{default:m((()=>[q])),_:1}),x(u,{label:"3",style:{margin:"2px 20px 0 0"}},{default:m((()=>[F])),_:1}),x(u,{label:"4"},{default:m((()=>[H])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),x(n,{title:"checkboxGroup 全选/取消"},{default:m((()=>[x(d,null,{default:m((()=>[x(b,{modelValue:e.checkboxgroup3,"onUpdate:modelValue":l[10]||(l[10]=l=>e.checkboxgroup3=l),ref:"group",onChange:e.changeBox4},{default:m((()=>[x(u,{label:"1",style:{margin:"0 20px 0 0"}},{default:m((()=>[J])),_:1}),x(u,{label:"2"},{default:m((()=>[K])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),x(d,null,{default:m((()=>[x(h,{type:"primary",onClick:l[11]||(l[11]=l=>e.toggleAll(!0)),style:{margin:"0 20px 0 0"}},{default:m((()=>[L])),_:1}),x(h,{type:"info",onClick:l[12]||(l[12]=l=>e.toggleAll(!1))},{default:m((()=>[M])),_:1})])),_:1})])),_:1})])}],["__scopeId","data-v-c7aa6f3a"]]);export{N as default};
