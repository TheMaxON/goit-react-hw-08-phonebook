"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{9133:function(n,e,r){r.d(e,{__:function(){return d},fv:function(){return s},x2:function(){return f},zx:function(){return p}});var t,o,a,c,i=r(168),l=r(9104),u=r(7508),s=l.Z.form(t||(t=(0,i.Z)(["\n  margin: 15px auto;\n"]))),d=l.Z.label(o||(o=(0,i.Z)(["\n  display: block;\n  margin: 0 7px 17px 7px;\n  font-size: 23px;\n  font-weight: 700;\n  color: var(--color-accent);\n"]))),f=l.Z.input(a||(a=(0,i.Z)(["\n  width: 97%;\n  margin: 7px auto;\n  padding: 7px 10px;\n  border-radius: 5px;\n  border: none;\n  border-bottom: 2px solid var(--color-accent);\n  outline: none;\n  display: block;\n  font-size: 18px;\n  color: var(--color-text);\n  background-color: var(--color-additional);\n\n  :hover,\n  :focus,\n  :active {\n    outline: 2px solid var(--color-accent);\n  }\n"]))),p=(0,l.Z)(u.Z)(c||(c=(0,i.Z)(["\n  margin: 10px 10px 0 15px;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n"])))},4814:function(n,e,r){r.d(e,{Z:function(){return i}});var t,o=r(168),a=r(9104).Z.section(t||(t=(0,o.Z)(["\n  width: 600px;\n  margin: 20px auto;\n  background-color: var(--color-secondary);\n  border: 1px solid lightgrey;\n  color: var(--color-text);\n  padding: 15px;\n  border-radius: 10px;\n"]))),c=r(184),i=function(n){var e=n.children;return(0,c.jsx)(a,{children:e})}},4114:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,o,a,c,i,l=r(2791),u=r(9434),s=r(2946),d=r(3634),f=r(9439),p=r(9133),x=r(8820),h=r(184),m=function(){var n=(0,l.useState)(""),e=(0,f.Z)(n,2),r=e[0],t=e[1],o=(0,l.useState)(""),a=(0,f.Z)(o,2),c=a[0],i=a[1],m=(0,u.v9)(s.Af),b=(0,u.I0)(),g=function(n){var e=n.target,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":i(o);break;default:return}},v=function(){t(""),i("")};return(0,h.jsxs)(p.fv,{onSubmit:function(n){n.preventDefault(),m.find((function(n){return n.name.toLowerCase().trim()===r.toLowerCase().trim()}))?alert("".concat(r," is already in contacts")):b((0,d.el)({name:r,number:c})),v()},children:[(0,h.jsxs)(p.__,{htmlFor:"name",children:["Name",(0,h.jsx)(p.x2,{type:"text",name:"name",value:r,placeholder:"Type your name...",onChange:g,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)(p.__,{htmlFor:"number",children:["Phone number",(0,h.jsx)(p.x2,{type:"tel",name:"number",value:c,placeholder:"Type your phone number...",onChange:g,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(p.zx,{type:"submit",appearance:"primary",color:"green",icon:(0,h.jsx)(x.Z,{}),children:"Add contact"})]})},b=r(168),g=r(9104),v=g.Z.li(t||(t=(0,b.Z)(["\n  background-color: var(--color-additional);\n  border-radius: 10px;\n  margin-top: 5px;\n  padding: 10px;\n"]))),y=g.Z.h3(o||(o=(0,b.Z)(["\n  font-size: 23px;\n  margin-bottom: 5px;\n"]))),j=g.Z.p(a||(a=(0,b.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: grey;\n  margin-bottom: 5px;\n"]))),Z=g.Z.button(c||(c=(0,b.Z)(["\n  appearance: none;\n  background-color: #a62f31;\n  border: none;\n  border-radius: 5px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  outline: none;\n  padding: 5px 10px;\n  text-align: center;\n  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  will-change: transform;\n\n  :hover {\n    box-shadow: rgba(243, 70, 72, 0.25) 0 8px 15px;\n    background-color: var(--color-alert);\n    transform: translateY(-2px);\n  }\n\n  :active {\n    box-shadow: none;\n    transform: translateY(0);\n  }\n"]))),w=function(n){var e=n.id,r=n.name,t=n.number,o=(0,u.I0)();return(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:r}),(0,h.jsx)(j,{children:t}),(0,h.jsx)(Z,{type:"button",onClick:function(){return o((0,d.tY)(e))},children:"Remove"})]})},k=g.Z.ul(i||(i=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),_=function(){var n=(0,u.v9)(s.DI),e=(0,u.v9)(s.xU);return(0,h.jsxs)(h.Fragment,{children:[!e&&0===n.length&&(0,h.jsx)("h4",{style:{textAlign:"center",color:"var(--color-accent)",fontWeight:700},children:"No contacts yet..."}),n.length>0&&(0,h.jsx)(k,{children:n.map((function(n){return(0,h.jsx)(w,{id:n.id,name:n.name,number:n.number},n.id)}))})]})},z=r(7840),C=function(){var n=(0,u.I0)();return(0,h.jsxs)(p.__,{htmlFor:"search",children:["Find contacts by name",(0,h.jsx)(p.x2,{type:"text",name:"search",placeholder:"Search",onChange:function(e){return function(e){n((0,z.M)(e.target.value.toLowerCase().trim()))}(e)}})]})},O=r(4814),P=r(1454),M=function(){var n=(0,u.v9)(s.xU),e=(0,u.v9)(s.zh),r=(0,u.I0)();return(0,l.useEffect)((function(){r((0,d.yF)())}),[r]),e?console.log("Error message: ",e):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(O.Z,{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(m,{})]}),(0,h.jsxs)(O.Z,{children:[(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(C,{}),!n&&e&&(0,h.jsx)("p",{children:"An error has occurred. Try reloading the page or read more in console."}),n&&(0,h.jsx)(P.Z,{}),!e&&(0,h.jsx)(_,{})]})]})}},1820:function(n,e,r){function t(n){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(n){if(n&&n.__esModule)return n;if(null===n||"object"!==t(n)&&"function"!==typeof n)return{default:n};var e=a();if(e&&e.has(n))return e.get(n);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in n)if(Object.prototype.hasOwnProperty.call(n,c)){var i=o?Object.getOwnPropertyDescriptor(n,c):null;i&&(i.get||i.set)?Object.defineProperty(r,c,i):r[c]=n[c]}r.default=n,e&&e.set(n,r);return r}(r(2791));function a(){if("function"!==typeof WeakMap)return null;var n=new WeakMap;return a=function(){return n},n}function c(){return c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},c.apply(this,arguments)}function i(n,e){return o.createElement("svg",c({width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:e},n),o.createElement("path",{d:"M8 1a1 1 0 011 1v12a1 1 0 01-2 0V2a1 1 0 011-1z"}),o.createElement("path",{d:"M2 7h12a1 1 0 010 2H2a1 1 0 010-2z"}))}var l=o.forwardRef(i);e.default=l},8820:function(n,e,r){Object.defineProperty(e,"Z",{enumerable:!0,get:function(){return o.default}});var t,o=(t=r(2098))&&t.__esModule?t:{default:t}},2098:function(n,e,r){var t=r(9496);e.__esModule=!0,e.default=void 0;var o=t(r(4222)),a=t(r(1820)),c=(0,o.default)({as:a.default,ariaLabel:"plus",category:"action",displayName:"Plus"});e.default=c,n.exports=e.default}}]);
//# sourceMappingURL=114.fa6dc710.chunk.js.map