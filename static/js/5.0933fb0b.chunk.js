(this["webpackJsonpacshb-react-project-template"]=this["webpackJsonpacshb-react-project-template"]||[]).push([[5],{1441:function(e,a,t){},1444:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(78),c=t(115),s=t(26),o=t(59),i=t(64),m=t(57),d=t(462),u=function(e){var a=e.response,t=e.loading,l=e.getUsers,s=Object(r.useState)({page:1,sizePerPage:10,sortField:"firstname",sortOrder:"asc",search:""}),m=Object(c.a)(s,2),u=m[0],p=m[1],f=[{dataField:"id",text:"Id"},{dataField:"firstname",text:"Ad\u0131",sort:!0},{dataField:"lastname",text:"Soyad\u0131"},{dataField:"city",text:"\u015eehir"},{dataField:"",text:"\u0130\u015flemler",formatter:function(e,a){return n.a.createElement("div",{className:"btn-group"},n.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:function(){return alert(a.id+" numaral\u0131 kullan\u0131c\u0131 silinecek.")}},n.a.createElement("span",{className:"acshb-icon-trash"})),n.a.createElement("button",{className:"btn btn-info",type:"button",onClick:function(){return alert(a.id+" numaral\u0131 kullan\u0131c\u0131 d\xfczenlenecek.")}},n.a.createElement("span",{className:"acshb-icon-edit"})))}}],b={onClick:function(e,a,t){alert(a.firstname)}},E=function(e,a,t){var r=a.page,n=a.sizePerPage,l=a.sortField,c=a.sortOrder;p({page:r,sizePerPage:n,sortField:l,sortOrder:c,search:t})};return Object(r.useEffect)((function(){l(u.page,u.sizePerPage,u.sortField,u.sortOrder,u.search)}),[u.page,u.sizePerPage,u.sortField,u.sortOrder,u.search,l]),n.a.createElement("div",{className:"user-list"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(i.ACSHBFrame,{title:"Kullan\u0131c\u0131 Y\xf6netimi",color:"primary",loading:t},n.a.createElement(o.Link,{to:"/kullanicilar/ekle",title:"Kullan\u0131c\u0131 Ekle"},"Kullan\u0131c\u0131 Ekle"),n.a.createElement(i.ACSHBDatatable,{onTableChange:E,searchCallback:function(e){E(0,{page:u.page,sizePerPage:u.sizePerPage,sortField:u.sortField,sortOrder:u.sortOrder},e)},remote:!0,loading:t,classes:"table-responsive-md",keyField:"id",data:a,columns:f,bootstrap4:!0,rowEvents:b,noDataIndication:function(){return n.a.createElement(d.b,{text:"Veri bulunamad\u0131."})},exportCallback:function(e){alert("".concat(e," export t\u0131kland\u0131"))}})))))};u.defaultProps={loading:!1,response:[],error:null};var p=Object(s.connect)((function(e){return{response:e.user.response,loading:e.user.loading,error:e.user.error}}),(function(e){return{getUsers:function(a,t,r,n,l){return e(Object(m.b)(a,t,r,n,l))}}}))(u),f=t(200),b=function(e){return n.a.createElement("div",{className:"users"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("p",{className:"lead"},"Kullanc\u0131 Ekle"),n.a.createElement(i.ACSHBForm,{name:"userCreateForm",onSubmit:function(a){(0,e.createUser)(a)}},n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-12"},n.a.createElement(i.FormField,{name:"firstname",className:"form-control",type:"text",label:"\u0130sim",placeholder:" ",validate:[f.required,f.maxLength32]})),n.a.createElement("div",{className:"form-group col-md-12"},n.a.createElement(i.FormField,{name:"lastname",className:"form-control",type:"text",label:"Soyisim",placeholder:" ",validate:[f.required,f.maxLength32]})),n.a.createElement("div",{className:"form-group col-md-12"},n.a.createElement(i.FormField,{name:"city",className:"form-control",type:"text",label:"\u015eehir",placeholder:" ",validate:[f.required,f.maxLength32]}))),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-12 justify-content-between d-flex"},n.a.createElement(i.ACSHBButton,{className:"btn btn-secondary",type:"button",onClick:function(){return window.history.back()}},"Geri"),n.a.createElement(i.ACSHBButton,{className:"btn btn-primary",type:"submit"},"Ekle"))))))))};b.defaultProps={loading:!1,response:null,error:null};var E=Object(s.connect)((function(e){return{response:e.user.response,loading:e.user.loading,error:e.user.error}}),(function(e){return{createUser:function(a){return e(Object(m.a)(a))}}}))(b);t(1441),a.default=function(){return n.a.createElement("div",{className:"users"},n.a.createElement(l.g,null,n.a.createElement(l.d,{path:"/kullanicilar/ekle",component:E}),n.a.createElement(l.d,{path:"/kullanicilar",component:p})))}}}]);
//# sourceMappingURL=5.0933fb0b.chunk.js.map