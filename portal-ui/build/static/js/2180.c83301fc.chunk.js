(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2180],{47494:function(e,t,n){"use strict";n.r(t);var o=n(29439),c=n(1413),r=n(72791),i=n(60364),a=n(11135),s=n(25787),l=n(10703),u=n(42649),d=n(92983),f=n(81207),p=n(47919),m=n(61889),h=n(23814),Z=n(56087),v=n(60680),k=n(38442),x=n(75578),b=n(40603),C=n(80184),g=(0,x.Z)(r.lazy((function(){return n.e(4619).then(n.bind(n,94619))}))),S=(0,x.Z)(r.lazy((function(){return n.e(8990).then(n.bind(n,8990))}))),j=(0,x.Z)(r.lazy((function(){return n.e(8455).then(n.bind(n,58455))}))),_=(0,i.$j)((function(e){return{session:e.console.session,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:u.Ih});t.default=(0,s.Z)((function(e){return(0,a.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({"@global":{".rowLine:hover  .iconFileElm":{backgroundImage:"url(/images/ob_file_filled.svg)"},".rowLine:hover  .iconFolderElm":{backgroundImage:"url(/images/ob_folder_filled.svg)"}},listButton:{marginLeft:"10px",align:"right"}},h.VX),h.OR),h.qg),h.cx),(0,h.Bz)(e.spacing(4))))}))(_((function(e){var t=e.classes,n=e.match,c=e.setErrorSnackMessage,i=e.loadingBucket,a=(e.bucketInfo,(0,r.useState)(!0)),s=(0,o.Z)(a,2),u=s[0],h=s[1],x=(0,r.useState)([]),_=(0,o.Z)(x,2),z=_[0],E=_[1],B=(0,r.useState)(!1),F=(0,o.Z)(B,2),I=F[0],P=F[1],y=(0,r.useState)(!1),w=(0,o.Z)(y,2),T=w[0],L=w[1],O=(0,r.useState)(""),A=(0,o.Z)(O,2),M=A[0],R=A[1],U=(0,r.useState)(!1),V=(0,o.Z)(U,2),H=V[0],K=V[1],D=(0,r.useState)(""),Y=(0,o.Z)(D,2),N=Y[0],G=Y[1],q=(0,r.useState)(""),X=(0,o.Z)(q,2),$=X[0],J=X[1],Q=n.params.bucketName,W=(0,k.F)(Q,[Z.Ft.S3_GET_BUCKET_POLICY]),ee=(0,k.F)(Q,[Z.Ft.S3_DELETE_BUCKET_POLICY]),te=(0,k.F)(Q,[Z.Ft.S3_PUT_BUCKET_POLICY]);(0,r.useEffect)((function(){i&&h(!0)}),[i,h]);var ne=[{type:"delete",disableButtonFunction:function(){return!ee},onClick:function(e){L(!0),R(e.prefix)}},{type:"view",disableButtonFunction:function(){return!te},onClick:function(e){G(e.prefix),J(e.access),K(!0)}}];(0,r.useEffect)((function(){u&&(W?f.Z.invoke("GET","/api/v1/bucket/".concat(Q,"/access-rules")).then((function(e){E(e.accessRules),h(!1)})).catch((function(e){c(e),h(!1)})):h(!1))}),[u,c,W,Q]);return(0,C.jsxs)(r.Fragment,{children:[I&&(0,C.jsx)(g,{modalOpen:I,onClose:function(){P(!1),h(!0)},bucket:Q}),T&&(0,C.jsx)(S,{modalOpen:T,onClose:function(){L(!1),h(!0)},bucket:Q,toDelete:M}),H&&(0,C.jsx)(j,{modalOpen:H,onClose:function(){K(!1),h(!0)},bucket:Q,toEdit:N,initial:$}),(0,C.jsxs)(m.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,C.jsx)(v.Z,{children:"Access Rules"}),(0,C.jsx)(k.s,{scopes:[Z.Ft.S3_GET_BUCKET_POLICY,Z.Ft.S3_PUT_BUCKET_POLICY],resource:Q,matchAll:!0,errorProps:{disabled:!0},children:(0,C.jsx)(b.Z,{tooltip:"Add Access Rule",onClick:function(){P(!0)},text:"Add Access Rule",icon:(0,C.jsx)(p.Z,{}),color:"primary",variant:"contained"})})]}),(0,C.jsx)(l.Z,{className:t.tableBlock,children:(0,C.jsx)(k.s,{scopes:[Z.Ft.S3_GET_BUCKET_POLICY],resource:Q,errorProps:{disabled:!0},children:(0,C.jsx)(d.Z,{noBackground:!0,itemActions:ne,columns:[{label:"Prefix",elementKey:"prefix"},{label:"Access",elementKey:"access"}],isLoading:u,records:z,entityName:"Access Rules",idField:"prefix"})})})]})})))},60680:function(e,t,n){"use strict";n(72791);var o=n(11135),c=n(25787),r=n(80184);t.Z=(0,c.Z)((function(e){return(0,o.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var t=e.classes,n=e.children;return(0,r.jsx)("h1",{className:t.root,children:n})}))},26759:function(e,t,n){"use strict";var o=n(95318);t.Z=void 0;var c=o(n(45649)),r=n(80184),i=(0,c.default)((0,r.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.Z=i},70366:function(e,t,n){"use strict";var o=n(95318);t.Z=void 0;var c=o(n(45649)),r=n(80184),i=(0,c.default)((0,r.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");t.Z=i},97911:function(e,t,n){"use strict";var o=n(95318);t.Z=void 0;var c=o(n(45649)),r=n(80184),i=(0,c.default)((0,r.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");t.Z=i},94454:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var o=n(4942),c=n(63366),r=n(87462),i=n(72791),a=n(90767),s=n(12065),l=n(97278),u=n(76189),d=n(80184),f=(0,u.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=n(14036),Z=n(93736),v=n(47630),k=n(95159);function x(e){return(0,k.Z)("MuiCheckbox",e)}var b=(0,n(30208).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),C=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],g=(0,v.ZP)(l.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,h.Z)(n.color))]]}})((function(e){var t,n=e.theme,c=e.ownerState;return(0,r.Z)({color:n.palette.text.secondary},!c.disableRipple&&{"&:hover":{backgroundColor:(0,s.Fq)("default"===c.color?n.palette.action.active:n.palette[c.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==c.color&&(t={},(0,o.Z)(t,"&.".concat(b.checked,", &.").concat(b.indeterminate),{color:n.palette[c.color].main}),(0,o.Z)(t,"&.".concat(b.disabled),{color:n.palette.action.disabled}),t))})),S=(0,d.jsx)(p,{}),j=(0,d.jsx)(f,{}),_=(0,d.jsx)(m,{}),z=i.forwardRef((function(e,t){var n,o,s=(0,Z.Z)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,u=void 0===l?S:l,f=s.color,p=void 0===f?"primary":f,m=s.icon,v=void 0===m?j:m,k=s.indeterminate,b=void 0!==k&&k,z=s.indeterminateIcon,E=void 0===z?_:z,B=s.inputProps,F=s.size,I=void 0===F?"medium":F,P=(0,c.Z)(s,C),y=b?E:v,w=b?E:u,T=(0,r.Z)({},s,{color:p,indeterminate:b,size:I}),L=function(e){var t=e.classes,n=e.indeterminate,o=e.color,c={root:["root",n&&"indeterminate","color".concat((0,h.Z)(o))]},i=(0,a.Z)(c,x,t);return(0,r.Z)({},t,i)}(T);return(0,d.jsx)(g,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":b},B),icon:i.cloneElement(y,{fontSize:null!=(n=y.props.fontSize)?n:I}),checkedIcon:i.cloneElement(w,{fontSize:null!=(o=w.props.fontSize)?o:I}),ownerState:T,ref:t},P,{classes:L}))}))},26769:function(e,t,n){var o=n(39066),c=n(93629),r=n(43141);e.exports=function(e){return"string"==typeof e||!c(e)&&r(e)&&"[object String]"==o(e)}}}]);
//# sourceMappingURL=2180.c83301fc.chunk.js.map