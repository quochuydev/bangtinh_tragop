(this["webpackJsonptragop-ts"]=this["webpackJsonptragop-ts"]||[]).push([[0],{81:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var r=t(4),c=t(0),a=t.n(c),i=t(23),o=t.n(i),h=(t(81),t(11)),s=t(36),l=t(13),u=t(124),b=t(139),j=t(135),d=t(137),p=t(136),g=t(142),x=t(35),O=(Object(x.b)((function(e){return{numberCollection:e.numberCollection}}),(function(e){return{onRequestNewNumber:function(){return e({type:"GET_NUMBER_REQUEST_START",payload:{}})}}}))((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:e.onRequestNewNumber,children:"Request new number"}),Object(r.jsx)("ul",{children:e.numberCollection.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})})),t(126)),m=t(140),f=t(138),v=t(141),y=t(62),T=t(129),C=t(128),k=t(130),w=t(131),P=t(132),E=t(133),B=t(134),_=t(27),N=Object(u.a)((function(e){return Object(b.a)({table:{minWidth:650},formControl:{margin:e.spacing(2),minWidth:120,display:"grid"},sixPercent:{backgroundColor:"#eee"},tenPercent:{},rowTotal:{color:"red !important",fontWeight:"bold !important",backgroundColor:"rgba(206, 17, 38, 0.05)"}})})),S=Object(x.b)((function(e){return{tableCalculate:e.tableCalculate}}),(function(e){return{onRefreshCalculate:function(n){return e(function(e){return{type:"CALCULATE",payload:e}}(n))}}}))((function(e){var n=function(n,t){(t=Number(t))||(t=null),e.onRefreshCalculate(Object(h.a)({},n,t))};c.useEffect((function(){e.onRefreshCalculate({})}),[]);var t=N(),a=e.tableCalculate;return Object(r.jsx)("div",{children:Object(r.jsxs)(O.a,{container:!0,spacing:3,children:[Object(r.jsxs)(O.a,{item:!0,sm:5,children:[Object(r.jsxs)(m.a,{className:t.formControl,children:[Object(r.jsx)("label",{htmlFor:"carPrice",children:"Gi\xe1 xe"}),Object(r.jsx)(_.a,{id:"carPrice",customInput:f.a,onValueChange:function(e){n("carPrice",e.floatValue)},value:a.carPrice,thousandSeparator:!0,suffix:" \u0111"})]}),Object(r.jsxs)(m.a,{className:t.formControl,children:[Object(r.jsx)("label",{htmlFor:"borrowingPrice",children:"S\u1ed1 ti\u1ec1n c\u1ea7n vay (VN\u0110)"}),Object(r.jsx)(_.a,{id:"borrowingPrice",customInput:f.a,onValueChange:function(e){n("borrowingPrice",e.floatValue)},value:a.borrowingPrice,thousandSeparator:!0,suffix:" \u0111"})]}),Object(r.jsxs)(m.a,{className:t.formControl,children:[Object(r.jsx)(v.a,{shrink:!0,htmlFor:"month",children:"Th\u1eddi gian vay (Th\xe1ng)"}),Object(r.jsx)(y.a,{value:a.month,onChange:function(n){!function(n){var t=Number(n.target.value);e.onRefreshCalculate(Object(h.a)({},n.target.name,t))}(n)},inputProps:{name:"month",id:"month"},children:[{value:12,name:"1 n\u0103m (12 th\xe1ng)"},{value:24,name:"2 n\u0103m (24 th\xe1ng)"},{value:36,name:"3 n\u0103m (36 th\xe1ng)"},{value:48,name:"4 n\u0103m (48 th\xe1ng)"},{value:60,name:"5 n\u0103m (60 th\xe1ng)"},{value:72,name:"6 n\u0103m (72 th\xe1ng)"},{value:84,name:"7 n\u0103m (84 th\xe1ng)"}].map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.name},e.value)}))})]}),Object(r.jsxs)(m.a,{className:t.formControl,children:[Object(r.jsx)("label",{htmlFor:"prepayPercent",children:"Tr\u1ea3 tr\u01b0\u1edbc (%)"}),Object(r.jsx)(_.a,{id:"prepayPercent",customInput:f.a,onValueChange:function(e){n("prepayPercent",e.floatValue)},value:a.prepayPercent,thousandSeparator:!0,suffix:" %",disabled:!0})]}),Object(r.jsxs)(m.a,{className:t.formControl,children:[Object(r.jsx)("label",{htmlFor:"precentBankBefore",children:"L\xe3i su\u1ea5t vay n\u0103m (c\u1ed1 \u0111\u1ecbnh 6 th\xe1ng \u0111\u1ea7u)"}),Object(r.jsx)(_.a,{id:"precentBankBefore",customInput:f.a,value:100*a.precentBankBefore,thousandSeparator:!0,suffix:" %",disabled:!0})]}),Object(r.jsxs)(m.a,{className:t.formControl,children:[Object(r.jsx)("label",{htmlFor:"precentBankAfter",children:"L\xe3i su\u1ea5t vay n\u0103m (sau \u0111i\u1ec1u ch\u1ec9nh)"}),Object(r.jsx)(_.a,{id:"precentBankAfter",customInput:f.a,value:100*a.precentBankAfter,thousandSeparator:!0,suffix:" %",disabled:!0})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Th\u1ee7 t\u1ee5c mua xe tr\u1ea3 g\xf3p t\u1ea1i Hino V\u0129nh Th\u1ecbnh:"}),Object(r.jsx)("p",{children:"1. Mua xe t\u1ea1i Hino V\u0129nh Th\u1ecbnh"}),Object(r.jsx)("p",{children:"2. Hino V\u0129nh Th\u1ecbnh chu\u1ea9n b\u1ecb h\u1ed3 s\u01a1 cho kh\xe1ch h\xe0ng."}),Object(r.jsx)("p",{children:"3. Ng\xe2n h\xe0ng th\u1ea9m \u0111\u1ecbnh (g\u1ecdi \u0111i\u1ec7n tho\u1ea1i h\u1ecfi th\u0103m sau \u0111\xf3 s\u1ebd tr\u1ef1c ti\u1ebfp xu\u1ed1ng nh\xe0)."}),Object(r.jsx)("p",{children:"4. Ng\xe2n h\xe0ng g\u1eedi th\xf4ng b\xe1o cho vay \u0111\u1ebfn Hino V\u0129nh Th\u1ecbnh"}),Object(r.jsx)("p",{children:"5. Hino V\u0129nh Th\u1ecbnh s\u1ebd g\u1eedi cho kh\xe1ch h\xe0ng v\xe0 kh\xe1ch h\xe0ng thanh to\xe1n \u0111\u1ee3t 2 \u0111\u1ec3 ti\u1ebfn h\xe0nh \u0111\xf3ng th\xf9ng theo y\xeau c\u1ea7u kh\xe1ch h\xe0ng v\xe0 \u0111i \u0111\u0103ng k\xed xe."}),Object(r.jsx)("p",{children:"6. Kh\xe1ch h\xe0ng ki\u1ec3m tra xe tr\u01b0\u1edbc khi gi\u1ea3i ng\xe2n."}),Object(r.jsx)("p",{children:"7. Ng\xe2n h\xe0ng gi\u1ea3i ng\xe2n."}),Object(r.jsx)("p",{children:"8. Kh\xe1ch h\xe0ng nh\u1eadn to\xe0n b\u1ed9 h\u1ed3 s\u01a1 xe v\xe0 nh\u1eadn xe."}),Object(r.jsx)("p",{children:"9. Ho\xe0n th\xe0nh. Quy tr\xecnh mua xe tr\u1ea3 g\xf3p t\u1ea1i Hino V\u0129nh Th\u1ecbnh s\u1ebd ho\xe0n th\xe0nh t\u1eeb 20-25 t\xf9y v\xe0o d\xf2ng xe c\u0169ng nh\u01b0 th\u1ecfa thu\u1eadn gi\u1eefa kh\xe1ch h\xe0ng v\xe0 Hino V\u0129nh Th\u1ecbnh."}),Object(r.jsx)("h2",{children:"H\u1ed3 s\u01a1 c\u1ea7n chu\u1ea9n b\u1ecb \u0111\u1ed1i v\u1edbi c\xe1 nh\xe2n:"}),Object(r.jsx)("p",{children:"1. Ch\u1ee9ng minh nh\xe2n d\xe2n ho\u1eb7c Th\u1ebb c\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n."}),Object(r.jsx)("p",{children:" 2. S\u1ed5 h\u1ed9 kh\u1ea9u."}),Object(r.jsx)("p",{children:"3. Gi\u1ea5y \u0111\u0103ng k\xed h\u1ebft h\xf4n ho\u1eb7c gi\u1ea5y ch\u1ee9ng nh\u1eadn \u0111\u1ed9c th\xe2n."}),Object(r.jsx)("p",{children:"4. H\u1ee3p \u0111\u1ed3ng mua xe."}),Object(r.jsx)("p",{children:"5. Ch\u1ee9ng minh thu nh\u1eadp (c\xf3 th\u1ec3 c\xf3 ho\u1eb7c kh\xf4ng)."}),Object(r.jsx)("h2",{children:"H\u1ed3 s\u01a1 c\u1ea7n chu\u1ea9n b\u1ecb \u0111\u1ed1i v\u1edbi doanh nghi\u1ec7p:"}),Object(r.jsx)("p",{children:"1. Gi\u1ea5p ph\xe9p \u0111\u0103ng k\xed kinh doanh (C\xf4ng ty ph\u1ea3i ho\u1ea1t \u0111\u1ed9ng tr\xean 6 th\xe1ng)."}),Object(r.jsx)("p",{children:"2. Th\xf4ng tin c\u1ee7a ch\u1ee7 doanh nghi\u1ec7p."}),Object(r.jsx)("p",{children:"3. B\xe1o c\xe1o t\xe0i ch\xednh g\u1ea7n \u0111\xe2y nh\u1ea5t."}),Object(r.jsx)("p",{children:"4. T\u1edd khai quy\u1ebft to\xe1n doanh nghi\u1ec7p g\u1ea7n \u0111\xe2y nh\u1ea5t."}),Object(r.jsx)("p",{children:" 5. \u0110i\u1ec1u l\u1ec7 c\xf4ng ty."}),Object(r.jsx)("p",{children:" 6. H\u1ee3p \u0111\u1ed3ng mua xe."})]})]}),Object(r.jsx)(O.a,{item:!0,sm:7,children:Object(r.jsx)(T.a,{component:C.a,children:Object(r.jsxs)(k.a,{className:t.table,"aria-label":"simple table",children:[Object(r.jsx)(w.a,{children:Object(r.jsxs)(P.a,{children:[Object(r.jsx)(E.a,{align:"right",children:"K\u1ef3"}),Object(r.jsx)(E.a,{align:"right",children:"S\u1ed1 tr\u1ea3 \u0111\u1ecbnh k\u1ef3"}),Object(r.jsx)(E.a,{align:"right",children:"L\xe3i"}),Object(r.jsx)(E.a,{align:"right",children:"G\u1ed1c"}),Object(r.jsx)(E.a,{align:"right",children:"D\u01b0 n\u1ee3"})]})}),Object(r.jsx)(B.a,{children:a.rows.map((function(e,n){return Object(r.jsxs)(P.a,{className:t[n>0&&n<=6?"sixPercent":n+1==a.rows.length?"rowTotal":"tenPercent"],children:[Object(r.jsx)(E.a,{align:"right",children:e.period}),Object(r.jsx)(E.a,{align:"right",children:Object(r.jsx)(_.a,{value:e.recurring_number,displayType:"text",thousandSeparator:!0,suffix:" \u0111"})}),Object(r.jsx)(E.a,{align:"right",children:Object(r.jsx)(_.a,{value:e.interest,displayType:"text",thousandSeparator:!0,suffix:" \u0111"})}),Object(r.jsx)(E.a,{align:"right",children:Object(r.jsx)(_.a,{value:e.origin,displayType:"text",thousandSeparator:!0,suffix:" \u0111"})}),Object(r.jsx)(E.a,{align:"right",children:Object(r.jsx)(_.a,{value:e.debt,displayType:"text",thousandSeparator:!0,suffix:" \u0111"})})]},e.period)}))})]})})})]})})})),A=Object(u.a)((function(e){return Object(b.a)({table:{minWidth:650},formControl:{minWidth:120}})}));function L(){var e=Object(c.useState)({carPrice:0,borrowingPrice:0,prepayPercent:0}),n=Object(l.a)(e,2);n[0],n[1];var t,a,i,o,h;t=1,a=0,i=0,o=0,h=0;A();return Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(d.a,{my:4,children:[Object(r.jsx)(p.a,{variant:"h5",component:"h5",style:{textAlign:"center"},gutterBottom:!0,children:"B\u1ea2NG MINH H\u1eccA S\u1ed0 TI\u1ec0N G\u1ed0C V\xc0 L\xc3I PH\u1ea2I TR\u1ea2 H\xc0NG TH\xc1NG"}),Object(r.jsx)(S,{})]}),Object(r.jsx)(R,{})]})}function R(){return Object(r.jsxs)(p.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(r.jsx)(g.a,{color:"inherit",href:"https://quochuydev.github.io/bangtinh_tragop/",children:"quochuydev"})," ",(new Date).getFullYear(),"."]})}var H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,144)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))},M=t(25),U=t(66),V=t(16),G=t(65);function F(e){return Math.round(1*e)/1}function I(e,n,t,r,c){return{period:e,recurring_number:n,interest:t,origin:r,debt:c}}var D=Object(M.c)({numberCollection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_NUMBER_REQUEST_COMPLETED":return[].concat(Object(V.a)(e),[n.payload])}return e},tableCalculate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{month:24,carPrice:12e8,borrowingPrice:24e7,prepayPercent:0,rows:[],precentBankBefore:.0699,precentBankAfter:.1085,discountMonths:6},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CALCULATE_COMPLETED":var t=Object(s.a)(Object(s.a)({},e),n.payload);t.rows=[],t.carPrice?(console.log(n.payload),(G.isEmpty(n.payload)||n.payload.borrowingPrice||n.payload.carPrice)&&(t.prepayPercent=t.borrowingPrice/t.carPrice*100)):t.prepayPercent=0;var r=t.borrowingPrice/t.month;t.rows=[I("",null,null,null,t.borrowingPrice)];for(var c=0,a=0,i=1;i<=t.month;i++){var o={precentBank:0,debt_last:0,interest:0,recurring_number:0,origin:0,debt:0};i<=t.discountMonths?o.precentBank=t.precentBankBefore:o.precentBank=t.precentBankAfter,o.debt_last=t.rows[i-1].debt,o.interest=o.debt_last*o.precentBank/12,o.origin=r,i==t.month&&(o.origin=o.debt_last),o.recurring_number=o.interest+o.origin,o.debt=o.debt_last-o.origin,o.debt=F(o.debt),c+=o.recurring_number,a+=o.interest,o.origin;var h=I(String(i),F(o.recurring_number),F(o.interest),F(o.origin),o.debt);t.rows.push(h)}return t.rows.push(I("TOTAL",F(c),F(a),F(t.rows[0].debt),null)),t;default:return e}}}),q=t(17),Q=t.n(q),W=t(19),K=0,J=function(){return new Promise((function(e){e(K+=1)}))},Y=Q.a.mark(X),z=Q.a.mark(Z);function X(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.e)("GET_NUMBER_REQUEST_START",Z);case 2:case"end":return e.stop()}}),Y)}function Z(e){var n;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.type,t.next="GET_NUMBER_REQUEST_START"===t.t0?3:9;break;case 3:return t.next=5,Object(W.b)(J);case 5:return n=t.sent,t.next=8,Object(W.d)({type:"GET_NUMBER_REQUEST_COMPLETED",payload:n});case 8:case 9:return t.abrupt("break",10);case 10:case"end":return t.stop()}}),z)}var $=Q.a.mark(ne),ee=Q.a.mark(te);function ne(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.e)("CALCULATE",te);case 2:case"end":return e.stop()}}),$)}function te(e){return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=e.type,n.next="CALCULATE"===n.t0?3:6;break;case 3:return n.next=5,Object(W.d)({type:"CALCULATE_COMPLETED",payload:e.payload});case 5:case 6:return n.abrupt("break",7);case 7:case"end":return n.stop()}}),ee)}var re=Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([Object(W.c)(X)]);case 2:return e.next=4,Object(W.a)([Object(W.c)(ne)]);case 4:case"end":return e.stop()}}),e)})),ce=Object(U.a)(),ae=M.d,ie=Object(M.e)(D,{},ae(Object(M.a)(ce)));ce.run(re),o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x.a,{store:ie,children:Object(r.jsx)(L,{})})}),document.getElementById("root")),H()}},[[91,1,2]]]);
//# sourceMappingURL=main.d59835a8.chunk.js.map