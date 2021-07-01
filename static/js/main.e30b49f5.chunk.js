(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(4),r=c.n(a),s=c(29),n=c.n(s),i=(c(35),c(36),c(21)),d=c(18),o=c(19),l=c(2),j=function(e){var t=Object(a.useState)([{Name:"",Gender:"",Age:"",Symptoms:"",Prescription:""}]),c=Object(o.a)(t,2),r=c[0],s=c[1],n=function(e){var t=e.target,c=t.name,a=t.value;s(Object(d.a)(Object(d.a)({},r),{},Object(i.a)({},c,a)))};return Object(l.jsxs)("form",{autoComplete:"off",onSubmit:function(t){var c=document.getElementById("patientname"),a=document.getElementById("patientage"),s=document.getElementById("patientgender"),n=c.value,i=a.value,d=s.value;t.preventDefault(),""!==n&&""!==i&&""!==d?(e.addOrEdit(r),alert("Record Save Successfully!")):alert("Name, Gender and Age field Cannot be empty!")},id:"patient-form",children:[Object(l.jsxs)("div",{className:"form-group input-group",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("div",{className:"input-group-text",children:Object(l.jsx)("i",{className:"fas fa-user"})})}),Object(l.jsx)("input",{className:"form-control",placeholder:"Patient Name",name:"Name",value:r.Name,onChange:n,id:"patientname"})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("div",{className:"input-group-text",children:Object(l.jsx)("i",{className:"fas fa-user"})})}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Gender",name:"Gender",value:r.Gender,onChange:n,id:"patientgender"})]}),Object(l.jsxs)("div",{className:"form-group input-group col-md-6",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("div",{className:"input-group-text",children:Object(l.jsx)("i",{className:"fas fa-user"})})}),Object(l.jsx)("input",{className:"form-control",placeholder:"Age",name:"Age",value:r.Age,onChange:n,id:"patientage"})]})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Symptoms"}),Object(l.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"Symptoms",value:r.Symptoms,onChange:n})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:"Prescription"}),Object(l.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"Prescription",onChange:n,value:r.Prescription})]}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"submit",value:"save",className:"btn btn-primary btn-block"})})]})},b=c(16),m=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"Patient record"}),Object(l.jsx)(b.b,{to:"/records",children:Object(l.jsx)("button",{type:"button",class:"btn btn-success",children:"View records"})})]})})})},p=c(26);p.a.initializeApp({apiKey:"AIzaSyCgLyd9CeVwgCQdjagMG51tbpLcH5h8DIg",authDomain:"react-crud-1dc79.firebaseapp.com",databaseURL:"https://react-crud-1dc79-default-rtdb.firebaseio.com",projectId:"react-crud-1dc79",storageBucket:"react-crud-1dc79.appspot.com",messagingSenderId:"1030550799308",appId:"1:1030550799308:web:74aa28a9d1b941d9439369"});var u=p.a,x=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{}),Object(l.jsx)("div",{className:"container my-auto",children:Object(l.jsx)("div",{className:"my-5",children:Object(l.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(l.jsx)(j,{addOrEdit:function(e){u.database().ref("Patients").push(e)}})})})})]})},h=c(8),O=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(),n=Object(o.a)(s,2),i=(n[0],n[1]);return Object(a.useEffect)((function(){u.database().ref("Patients").on("value",(function(e){null!=e.val()?r(Object(d.a)({},e.val())):r({})}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(b.b,{to:"/",children:Object(l.jsx)("i",{className:"fas fa-arrow-left"})}),Object(l.jsxs)("table",{className:"table table table-dark my-3",children:[Object(l.jsx)("thead",{className:"thead-dark",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Name"}),Object(l.jsx)("th",{scope:"col",children:"Age"}),Object(l.jsx)("th",{scope:"col",children:"Gender"}),Object(l.jsx)("th",{scope:"col",children:"Symptoms"}),Object(l.jsx)("th",{scope:"col",children:"Prescription"}),Object(l.jsx)("th",{children:"Actions"})]})}),Object(l.jsx)("tbody",{children:Object.keys(c).map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:c[e].Name}),Object(l.jsx)("td",{children:c[e].Age}),Object(l.jsx)("td",{children:c[e].Gender}),Object(l.jsx)("td",{children:c[e].Symptoms}),Object(l.jsx)("td",{children:c[e].Prescription}),Object(l.jsx)("td",{children:Object(l.jsx)("a",{className:"btn text-danger",children:Object(l.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){!function(e){i(e),window.confirm("Are you sure to delete this record ?")&&u.database().ref("Patients/".concat(e)).remove()}(e)}})})})]},e)}))})]})]})};var f=function(){return Object(l.jsx)(b.a,{children:Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{exact:!0,path:"/",component:x}),Object(l.jsx)(h.a,{exact:!0,path:"/records",component:O})]})})};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e30b49f5.chunk.js.map