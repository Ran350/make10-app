(this["webpackJsonpmake10-app"]=this["webpackJsonpmake10-app"]||[]).push([[0],{98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(28),u=n.n(a),c=n(13),s=n(152),o=n(149),f=n(145),l=n(153),p=n(141),j=n(146),h=n(147),m=n(144),b=n(148),d=n(154),x=n(14),v=n(33),O=function(e){var t,n=" ",r=[function(e,t){return e+n+t+n+"+"},function(e,t){return e+n+t+n+"-"},function(e,t){return t+n+e+n+"-"},function(e,t){return e+n+t+n+"*"},function(e,t){return e+n+t+n+"/"},function(e,t){return t+n+e+n+"/"}],i=[],a=Object(v.a)(function(e){for(var t=[],n=0;n<e-1;n++)for(var r=n+1;r<e;r++){var i=new Array(e).fill(!1);i[n]=i[r]=!0,t.push(i)}return t}(e.length));try{var u=function(){var n,a=t.value,u=Object(v.a)(r);try{for(u.s();!(n=u.n()).done;){var c=n.value,s=e.filter((function(e,t){return a[t]})),o=e.filter((function(e,t){return!a[t]})),f=c(s[0],s[1]);i.push([f].concat(Object(x.a)(o)))}}catch(l){u.e(l)}finally{u.f()}};for(a.s();!(t=a.n()).done;)u()}catch(c){a.e(c)}finally{a.f()}return i},g=function(e,t,n){if("+"===t)return e+n;if("-"===t)return e-n;if("*"===t)return e*n;if("/"===t){if(0===n)return;return e/n}},y=function(e){if(e.length<=1||6<=e.length)throw new Error("The length of the argument array must be '2 <= len <= 5'");return function(e){for(var t=O(e),n=0;n<e.length-2;n++)t=t.map((function(e){return O(e)})).flat();var r=t.flat();return Array.from(new Set(r))}(e).filter((function(e){var t=function(e){var t,n=[],r=["+","-","*","/"],i=Object(v.a)(e.split(" "));try{for(i.s();!(t=i.n()).done;){var a=t.value;if(r.includes(a)){var u=n.pop(),c=n.pop();if(void 0===c||void 0===u)return;var s=g(c,a,u);if(void 0===s)return;n.push(s)}else n.push(Number.parseInt(a))}}catch(o){i.e(o)}finally{i.f()}return n.pop()}(e);if(void 0===t)return!1;var n=Math.pow(10,-6);return Math.abs(t-10)<n})).map((function(e){return function(e){var t,n=[],r=["+","-","*","/"],i=Object(v.a)(e.split(" "));try{for(i.s();!(t=i.n()).done;){var a=t.value;if(r.includes(a)){var u=n.pop(),c=n.pop();n.push("("+c+a+u+")")}else n.push(a)}}catch(o){i.e(o)}finally{i.f()}var s=n.pop();return void 0===s?"":s.slice(1,-1)}(e)}))},w=n(2),S=function(e){var t=e.inputs,n=e.isXS,r=void 0===n||n;if(t.includes(""))return Object(w.jsx)(z,{});var i=y(t);return 0===i.length?Object(w.jsx)(z,{}):Object(w.jsxs)(j.a,{sx:{textAlign:"center",maxHeight:r?"22rem":"28rem",overflow:"auto"},subheader:Object(w.jsx)("li",{}),children:[Object(w.jsxs)(h.a,{children:["found ",i.length," answer(s)"]}),i.map((function(e,t){return Object(w.jsx)(m.a,{children:Object(w.jsx)(b.a,{primary:e,sx:{px:r?"3rem":"8rem"}})},t)}))]})},z=function(){return Object(w.jsx)(d.a,{sx:{margin:"2rem",textAlign:"center",fontFamily:"'Gill Sans', sans-serif"},children:"no answer"})},I=n(78),k=n.n(I),A=n(77),C=n.n(A),X=n(150),M=function(e){var t=e.inputs,n=e.setInputs;e.isXS;return Object(w.jsx)(X.a,{onClick:function(){t.length<=2||n(t.slice(0,t.length-1))},size:"medium",children:Object(w.jsx)(C.a,{fontSize:"inherit",color:t.length>2?"error":"disabled"})})},E=function(e){var t=e.inputs,n=e.setInputs;return Object(w.jsx)(X.a,{onClick:function(){t.length>=5||n([].concat(Object(x.a)(t),[""]))},size:"medium",children:Object(w.jsx)(k.a,{fontSize:"inherit",color:t.length<5?"primary":"disabled"})})},F=n(142),J=function(e){var t=e.inputs,n=e.setInputs,r=e.isXS,i=function(e,r){var i=r.currentTarget.value;if(!(i.length>1)){var a=Object(x.a)(t);a[e]=i,n(a)}};return Object(w.jsx)(d.a,{sx:{width:r?"16rem":"28rem",display:"flex",justifyContent:"space-between",gap:r?"0.2rem":"2rem"},children:t.map((function(e,n){return Object(w.jsx)(F.a,{type:"number",value:t[n],onChange:i.bind(undefined,n),autoFocus:!0,sx:{display:"block"},inputProps:{style:{fontSize:"1.5rem",textAlign:"center"},className:"no-spin"}},n)}))})},N=function(){var e=Object(r.useState)(["1","1","5","8"]),t=Object(c.a)(e,2),n=t[0],i=t[1],a=Object(p.a)("(max-width:600px)");return Object(w.jsxs)(s.a,{sx:{m:a?"2rem auto":"1rem auto",p:0,fontSize:"1rem"},children:[Object(w.jsx)(o.a,{align:"center",color:"#333",sx:{fontSize:a?"1.5rem":"2rem"},children:"Make 10 Puzzle"}),Object(w.jsxs)(f.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:a?{m:"1rem auto"}:{m:"2rem auto",width:"40rem"},children:[Object(w.jsx)(M,{inputs:n,setInputs:i}),Object(w.jsx)(J,{inputs:n,setInputs:i,isXS:a}),Object(w.jsx)(E,{inputs:n,setInputs:i})]}),Object(w.jsx)(l.a,{sx:{m:"0 auto",boxShadow:3,width:a?"16rem":"28rem"},children:Object(w.jsx)(S,{inputs:n,isXS:a})})]})};n(98);u.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(N,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.ec76a599.chunk.js.map