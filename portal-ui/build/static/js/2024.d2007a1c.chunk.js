"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2024],{10694:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var s=t(23430),r=t(18489),a=t(50390),o=t(34424),c=t(86509),i=t(4285),l=t(25594),u=t(30324),d=t(56805),h=t(44149),f=t(98280),p=t(17777),Z=t(25233),m=t(35721),x=t(72462),j=t(76352),g=t(66964),v=t(66946),S=t(81378),y=t(62559),w=(0,o.$j)(null,{setModalErrorSnackMessage:h.zb}),b=(0,i.Z)((function(e){return(0,c.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({buttonContainer:{textAlign:"right"}},x.ID),x.DF),x.bK),(0,x.Bz)(e.spacing(4))))}))(w((function(e){var n=e.classes,t=e.open,r=e.closeModal,o=e.setModalErrorSnackMessage,c=(0,a.useState)(""),i=(0,s.Z)(c,2),d=i[0],h=i[1],p=(0,a.useState)(""),Z=(0,s.Z)(p,2),m=Z[0],x=Z[1],w=(0,a.useState)(""),b=(0,s.Z)(w,2),C=b[0],A=b[1],P=(0,a.useState)(!1),k=(0,s.Z)(P,2),M=k[0],E=k[1];return t?(0,y.jsx)(j.Z,{title:"Change Password",modalOpen:t,onClose:function(){x(""),A(""),h(""),r()},titleIcon:(0,y.jsx)(f.I,{}),children:(0,y.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),m===C){if(m.length<8)o({errorMessage:"Passwords must be at least 8 characters long",detailedError:""});else if(!M){E(!0);var n={current_secret_key:d,new_secret_key:m};u.Z.invoke("POST","/api/v1/account/change-password",n).then((function(){E(!1),x(""),A(""),h(""),r()})).catch((function(e){E(!1),x(""),A(""),h(""),o(e)}))}}else o({errorMessage:"New passwords don't match",detailedError:""})}(e)},children:(0,y.jsxs)(l.ZP,{container:!0,children:[(0,y.jsxs)(l.ZP,{item:!0,xs:12,className:n.modalFormScrollable,children:[(0,y.jsx)(l.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,y.jsx)(g.Z,{id:"current-password",name:"current-password",onChange:function(e){h(e.target.value)},label:"Current Password",type:"password",value:d})}),(0,y.jsx)(l.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,y.jsx)(g.Z,{id:"new-password",name:"new-password",onChange:function(e){x(e.target.value)},label:"New Password",type:"password",value:m})}),(0,y.jsx)(l.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,y.jsx)(g.Z,{id:"re-new-password",name:"re-new-password",onChange:function(e){A(e.target.value)},label:"Type New Password Again",type:"password",value:C})})]}),(0,y.jsx)(l.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:(0,y.jsx)(v.Z,{type:"submit",variant:"contained",color:"primary",disabled:M||!(d.length>0&&m.length>0&&C.length>0),children:"Save"})}),M&&(0,y.jsx)(l.ZP,{item:!0,xs:12,children:(0,y.jsx)(S.Z,{})})]})})}):null}))),C=t(8235),A=t(25534),P=t(23165),k=t(37882),M=t(49495),E=t(92045),N=t(53224),O=t(73726),F=t(31529),R=t(94198),_=(0,k.Z)(a.lazy((function(){return t.e(8394).then(t.bind(t,48394))}))),I=(0,k.Z)(a.lazy((function(){return t.e(4109).then(t.bind(t,47664))}))),D=(0,k.Z)(a.lazy((function(){return t.e(1140).then(t.bind(t,39080))}))),K=(0,o.$j)(null,{displayErrorMessage:h.Ih}),T=(0,i.Z)((function(e){return(0,c.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},x.OR),x.qg),{},{searchField:(0,r.Z)((0,r.Z)({},x.qg.searchField),{},{marginRight:"auto",maxWidth:380})},x.VX),(0,x.Bz)(e.spacing(4))))}))(K((function(e){var n=e.classes,t=e.displayErrorMessage,r=(0,a.useState)([]),o=(0,s.Z)(r,2),c=o[0],i=o[1],x=(0,a.useState)(!1),j=(0,s.Z)(x,2),g=j[0],v=j[1],S=(0,a.useState)(""),w=(0,s.Z)(S,2),k=w[0],K=w[1],T=(0,a.useState)(!1),z=(0,s.Z)(T,2),B=z[0],L=z[1],V=(0,a.useState)(!1),q=(0,s.Z)(V,2),U=q[0],$=q[1],G=(0,a.useState)(null),J=(0,s.Z)(G,2),W=J[0],X=J[1],Y=(0,a.useState)(!1),H=(0,s.Z)(Y,2),Q=H[0],ee=H[1],ne=(0,a.useState)(null),te=(0,s.Z)(ne,2),se=te[0],re=te[1],ae=(0,a.useState)(!1),oe=(0,s.Z)(ae,2),ce=oe[0],ie=oe[1],le=(0,a.useState)([]),ue=(0,s.Z)(le,2),de=ue[0],he=ue[1],fe=(0,a.useState)(!1),pe=(0,s.Z)(fe,2),Ze=pe[0],me=pe[1],xe=(0,a.useState)(!1),je=(0,s.Z)(xe,2),ge=je[0],ve=je[1];(0,a.useEffect)((function(){Se()}),[]),(0,a.useEffect)((function(){g&&u.Z.invoke("GET","/api/v1/service-accounts").then((function(e){var n=e.sort(Z.V2);v(!1),i(n)})).catch((function(e){t(e),v(!1)}))}),[g,v,i,t]);var Se=function(){v(!0)},ye=[{type:"view",onClick:function(e){X(e),ve(!0)}},{type:"delete",onClick:function(e){X(e),$(!0)}}],we=c.filter((function(e){return e.toLowerCase().includes(k.toLowerCase())}));return(0,y.jsxs)(a.Fragment,{children:[B&&(0,y.jsx)(_,{open:B,closeModalAndRefresh:function(e){!function(e){if(L(!1),Se(),null!==e){var n={console:{accessKey:"".concat(e.accessKey),secretKey:"".concat(e.secretKey)}};re(n),ee(!0)}}(e)}}),U&&(0,y.jsx)(I,{deleteOpen:U,selectedServiceAccount:W,closeDeleteModalAndRefresh:function(e){!function(e){$(!1),e&&Se()}(e)}}),Ze&&(0,y.jsx)(F.Z,{deleteOpen:Ze,selectedSAs:de,closeDeleteModalAndRefresh:function(e){me(!1),e&&((0,h.y1)("Service accounts deleted successfully."),he([]),v(!0))}}),Q&&(0,y.jsx)(D,{newServiceAccount:se,open:Q,closeModal:function(){ee(!1),re(null)},entity:"Service Account"}),ge&&(0,y.jsx)(R.Z,{open:ge,selectedAccessKey:W,closeModalAndRefresh:function(){ve(!1),v(!0)}}),(0,y.jsx)(b,{open:ce,closeModal:function(){return ie(!1)}}),(0,y.jsx)(m.Z,{label:"Service Accounts"}),(0,y.jsxs)(A.Z,{children:[(0,y.jsxs)(l.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,y.jsx)(P.Z,{placeholder:"Search Service Accounts",onChange:K,overrideClass:n.searchField,value:k}),(0,y.jsxs)(d.Z,{sx:{display:"flex"},children:[" ",(0,y.jsx)(N.Z,{tooltip:"Delete Selected",onClick:function(){me(!0)},text:"Delete Selected",icon:(0,y.jsx)(f.pJ,{}),color:"secondary",disabled:0===de.length,variant:"outlined"}),(0,y.jsx)(E.s,{scopes:[M.Ft.ADMIN_CREATE_USER],resource:M.C3,matchAll:!0,errorProps:{disabled:!0},children:(0,y.jsx)(N.Z,{onClick:function(){return ie(!0)},text:"Change Password",icon:(0,y.jsx)(f.tv,{}),color:"primary",variant:"outlined"})}),(0,y.jsx)(N.Z,{onClick:function(){L(!0),X(null)},text:"Create service account",icon:(0,y.jsx)(f.dt,{}),color:"primary",variant:"contained"})]})]}),(0,y.jsx)(l.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,y.jsx)(p.Z,{isLoading:g,records:we,entityName:"Service Accounts",idField:"",columns:[{label:"Service Account",elementKey:""}],itemActions:ye,selectedItems:de,onSelect:function(e){return(0,O._0)(e,he,de)},onSelectAll:function(){de.length!==c.length?he(c):he([])}})}),(0,y.jsx)(l.ZP,{item:!0,xs:12,marginTop:"15px",children:(0,y.jsx)(C.Z,{title:"Learn more about SERVICE ACCOUNTS",iconComponent:(0,y.jsx)(f.fr,{}),help:(0,y.jsxs)(a.Fragment,{children:["MinIO service accounts are child identities of an authenticated MinIO user, including externally managed identities. Each service account inherits its privileges based on the policies attached to it\u2019s parent user or those groups in which the parent user has membership. Service accounts also support an optional inline policy which further restricts access to a subset of actions and resources available to the parent user.",(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),"You can learn more at our"," ",(0,y.jsx)("a",{href:"https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html?ref=con#service-accounts",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]})]})})))},18207:function(e,n,t){function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},s.apply(this,arguments)}t.d(n,{Z:function(){return s}})},46633:function(e,n,t){function s(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,{Z:function(){return s}})}}]);
//# sourceMappingURL=2024.d2007a1c.chunk.js.map