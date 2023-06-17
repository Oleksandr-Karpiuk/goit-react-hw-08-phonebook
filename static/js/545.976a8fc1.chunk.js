"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[545],{5700:function(e,n,t){t.d(n,{Z:function(){return s}});var a="Container_container__VVOCq",r=t(184);function s(e){var n=e.children;return(0,r.jsx)("div",{className:a,children:n})}},7545:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var a="Contacts_main__title__mM0Uc",r="Contacts_secondary__title__9lHXl",s="ContactForrm_contact__label__Cvfny",c="ContactForrm_contact__input__deCLS",i="ContactForrm_contact__button__5RUe3",o=t(5705),l=t(8174),u=t(9434),d=t(6916),_=function(e){return e.contacts.contacts},m=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},f=(0,d.P1)([_,function(e){return e.filter.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),p=t(208),x=t(184),b=function(){var e=(0,u.I0)(),n=(0,u.v9)(_);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.J9,{initialValues:{name:"",number:""},onSubmit:function(t,a){!function(t){var a=n.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})),r=n.find((function(e){return e.number.toLowerCase()===t.number.toLowerCase()}));a?l.Am.warning("This name ".concat(a.name," is already in contacts.")):r?l.Am.warning("This number ".concat(r.number," is already in contacts and belongs to ").concat(r.name,".")):e((0,p.uK)(t))}(t),a.resetForm()},children:(0,x.jsxs)(o.l0,{children:[(0,x.jsxs)("label",{className:s,children:["Name",(0,x.jsx)(o.gN,{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:c}),(0,x.jsx)(o.Bc,{name:"name",component:"div"})]}),(0,x.jsxs)("label",{className:s,children:["Number",(0,x.jsx)(o.gN,{type:"tel",name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:c})]}),(0,x.jsx)(o.Bc,{name:"number",component:"div"}),(0,x.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})})})},j=t(2007),C=t.n(j),v="ContactList_contact__list__2jNwc",g="ContactList_contact__item__PFoNH",N="ContactList_contact__list__text__eLHjv",w="ContactList_text__color__9HoZn",y="ContactList_contact__list__button__fNqL-",L=function(){var e=(0,u.I0)(),n=(0,u.v9)(f);return(0,x.jsx)("ul",{className:v,children:n.map((function(n){var t=n.id,a=n.name,r=n.number;return(0,x.jsxs)("li",{className:g,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:N,children:a}),(0,x.jsxs)("p",{className:w,children:["tel: ",r]})]}),(0,x.jsx)("button",{type:"button",className:y,onClick:function(){return e((0,p.GK)(t))},children:"delete"})]},t)}))})},F=L;L.propeTypes={onDeleteContact:C().func,contacts:C().arrayOf(C().exact({id:C().string.isRequired,name:C().string.isRequired,number:C().string.isRequired})).isRequired,filterValue:C().string};var q="Filter_filter__label__ttfPR",A="Filter_filter__input__toa89",k=t(1429),R=t(5095),Z=t.n(R),P=function(){var e=(0,u.I0)(),n=Z()((function(n){var t=n.target.value.toLowerCase();e((0,k.T)(t))}),300);return(0,x.jsxs)("label",{className:q,children:["Find contact by name",(0,x.jsx)("input",{type:"text",name:"filter",placeholder:"Enter name for Search",className:A,onChange:n})]})},T=P;P.propeTypes={value:C().string,delayedOnChange:C().func};var z=t(5700),E=t(2791),H=t(4691),I=(t(5462),t(4270)),S=t(6340),V=function(){var e=(0,u.v9)(_),n=(0,u.v9)(m),t=(0,u.v9)(h),s=(0,u.I0)(),c=(0,S.a)().user;return(0,E.useEffect)((function(){s((0,p.yF)())}),[s]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(I.q,{children:(0,x.jsx)("title",{children:"Your contacts"})}),(0,x.jsxs)(z.Z,{children:[t&&l.Am.error(t),(0,x.jsxs)("h1",{className:a,children:["Phonebook ",c.name]}),(0,x.jsx)(b,{}),e.length?(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{className:r,children:"Contacts"}),(0,x.jsx)(x.Fragment,{children:n?(0,x.jsx)(H.fe,{visible:!0,height:"200",width:"200",ariaLabel:"dna-loading",wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"dna-wrapper"}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(T,{}),(0,x.jsx)(F,{})]})})]}):(0,x.jsx)("h2",{className:r,children:"No any contacts"})]})]})}}}]);
//# sourceMappingURL=545.976a8fc1.chunk.js.map