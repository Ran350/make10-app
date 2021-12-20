(this["webpackJsonpmake10-app"]=this["webpackJsonpmake10-app"]||[]).push([[0],{96:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(28),u=t.n(a),c=t(13),o=t(147),s=t(144),f=t(140),l=t(148),p=t(141),j=t(142),h=t(138),b=t(143),v=t(149),d=t(14),m=t(33),x=function(n){var e,t=" ",r=[function(n,e){return n+t+e+t+"+"},function(n,e){return n+t+e+t+"-"},function(n,e){return e+t+n+t+"-"},function(n,e){return n+t+e+t+"*"},function(n,e){return n+t+e+t+"/"},function(n,e){return e+t+n+t+"/"}],i=[],a=Object(m.a)(function(n){for(var e=[],t=0;t<n-1;t++)for(var r=t+1;r<n;r++){var i=new Array(n).fill(!1);i[t]=i[r]=!0,e.push(i)}return e}(n.length));try{var u=function(){var t,a=e.value,u=Object(m.a)(r);try{for(u.s();!(t=u.n()).done;){var c=t.value,o=n.filter((function(n,e){return a[e]})),s=n.filter((function(n,e){return!a[e]})),f=c(o[0],o[1]);i.push([f].concat(Object(d.a)(s)))}}catch(l){u.e(l)}finally{u.f()}};for(a.s();!(e=a.n()).done;)u()}catch(c){a.e(c)}finally{a.f()}return i},O=function(n,e,t){if("+"===e)return n+t;if("-"===e)return n-t;if("*"===e)return n*t;if("/"===e){if(0===t)return;return n/t}},g=function(n){if(n.length<=1||6<=n.length)throw new Error("The length of the argument array must be '2 <= len <= 5'");return function(n){for(var e=x(n),t=0;t<n.length-2;t++)e=e.map((function(n){return x(n)})).flat();var r=e.flat();return Array.from(new Set(r))}(n).filter((function(n){var e=function(n){var e,t=[],r=["+","-","*","/"],i=Object(m.a)(n.split(" "));try{for(i.s();!(e=i.n()).done;){var a=e.value;if(r.includes(a)){var u=t.pop(),c=t.pop();if(void 0===c||void 0===u)return;var o=O(c,a,u);if(void 0===o)return;t.push(o)}else t.push(Number.parseInt(a))}}catch(s){i.e(s)}finally{i.f()}return t.pop()}(n);if(void 0===e)return!1;var t=Math.pow(10,-6);return Math.abs(e-10)<t})).map((function(n){return function(n){var e,t=[],r=["+","-","*","/"],i=Object(m.a)(n.split(" "));try{for(i.s();!(e=i.n()).done;){var a=e.value;if(r.includes(a)){var u=t.pop(),c=t.pop();t.push("("+c+a+u+")")}else t.push(a)}}catch(s){i.e(s)}finally{i.f()}var o=t.pop();return void 0===o?"":o.slice(1,-1)}(n)}))},y=t(2),w=function(n){var e=n.inputs;if(e.includes(""))return Object(y.jsx)(I,{});var t=g(e);return 0===t.length?Object(y.jsx)(I,{}):Object(y.jsxs)(p.a,{sx:{position:"relative",overflow:"auto",maxHeight:"28rem",padding:"0 8rem"},subheader:Object(y.jsx)("li",{}),children:[Object(y.jsxs)(j.a,{children:["found ",t.length," answers"]}),t.map((function(n,e){return Object(y.jsx)(h.a,{children:Object(y.jsx)(b.a,{primary:n})},e)}))]})},I=function(){return Object(y.jsx)(v.a,{sx:{margin:"2rem",textAlign:"center"},children:"no answer"})},z=t(76),S=t.n(z),k=t(75),C=t.n(k),M=t(145),A=function(n){var e=n.inputs,t=n.setInputs;return Object(y.jsx)(M.a,{onClick:function(){e.length<=2||t(e.slice(0,e.length-1))},color:"error",size:"large",children:Object(y.jsx)(C.a,{fontSize:"inherit"})})},E=function(n){var e=n.inputs,t=n.setInputs;return Object(y.jsx)(M.a,{onClick:function(){e.length>=5||t([].concat(Object(d.a)(e),[""]))},color:"primary",size:"large",children:Object(y.jsx)(S.a,{fontSize:"inherit"})})},J=t(136),P=function(n){var e=n.inputs,t=n.setInputs,r=function(n,r){var i=r.currentTarget.value;if(!(i.length>1)){var a=e.map((function(e,t){return t===n?i:e}));t(a)}};return Object(y.jsx)(f.a,{container:!0,justifyContent:"space-between",alignItems:"center",width:"28rem",children:Array.from({length:e.length}).map((function(n,t){return Object(y.jsx)(J.a,{inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:e[t],onChange:r.bind(undefined,t),type:"number",autoFocus:0===t,sx:{width:"calc(90%/".concat(e.length,")"),height:"4rem",fontSize:"2rem"}},t)}))})},T=function(){var n=Object(r.useState)(["1","1","5","8"]),e=Object(c.a)(n,2),t=e[0],i=e[1];return Object(y.jsxs)(o.a,{sx:{width:"42rem",fontSize:"1rem",margin:"2rem auto"},children:[Object(y.jsx)(s.a,{variant:"h4",align:"center",sx:{fontSize:"2rem",color:"#333"},children:"Make10 Puzzle"}),Object(y.jsxs)(f.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{margin:"2rem auto"},children:[Object(y.jsx)(A,{inputs:t,setInputs:i}),Object(y.jsx)(P,{inputs:t,setInputs:i}),Object(y.jsx)(E,{inputs:t,setInputs:i})]}),Object(y.jsx)(l.a,{sx:{boxShadow:3,width:"28rem",margin:"0 auto"},children:Object(y.jsx)(w,{inputs:t})})]})};u.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.afa6ba3e.chunk.js.map