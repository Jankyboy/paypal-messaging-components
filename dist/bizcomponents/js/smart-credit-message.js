window.crc=function(e){function t(t){for(var r,u,a=t[0],c=t[1],f=t[2],l=0,d=[];l<a.length;l++)({}).hasOwnProperty.call(o,u=a[l])&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)({}).hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++)0!==o[n[a]]&&(r=!1);r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={1:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return{}.hasOwnProperty.call(e,t)},u.p="";var a=("undefined"!=typeof self?self:this).webpackJsonpcrc=("undefined"!=typeof self?self:this).webpackJsonpcrc||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var s=c;return i.push([112,0]),n()}({112:function(e,t,n){"use strict";n.r(t),n.d(t,"setupMessage",(function(){return l}));var r=n(1),o=n(31),i=n(44),u=n(15),a=n.n(u),c=n(3),f=n(114),s=function(){var e,t,n=Object(o.b)(),u=n.amount,s=n.currency,l=n.style,d=n.offer,p=n.payerId,y=n.clientId,b=n.merchantId,h=n.onClick,g=n.onReady,m=n.onHover,O=n.onMarkup,v=n.resize,j=Object(i.b)(),w=j.markup,S=j.meta,k=j.parentStyles,_=j.warnings,M=j.setServerData,P=Object(c.i)({width:0,height:0}),x=Object(c.i)(),I=function(){"function"==typeof m&&m({meta:S})};return Object(c.f)((function(){"function"==typeof O&&O({meta:S,styles:k,warnings:_})}),[k,_,w]),Object(c.f)((function(){"function"==typeof g&&g({meta:S})}),[S.messageRequestId]),e=function(){var e=x.current.offsetWidth,t=x.current.offsetHeight;P.current.width===e&&P.current.height===t?v({width:e,height:t}):P.current={width:e,height:t}},t=Object(c.i)(!1),Object(c.f)((function(){t.current&&e(),t.current=!0}),void 0),function(e,t){var n=Object(c.i)(!1);Object(c.d)((function(){var e;n.current&&(e=a()({message_request_id:S.messageRequestId,amount:u,currency:s,style:l,credit_type:d,payer_id:p,client_id:y,merchant_id:b}).filter((function(e){return Boolean(e[1])})).reduce((function(e,t){var n=t[1];return e+"&"+t[0]+"="+encodeURIComponent("object"==typeof n?JSON.stringify(n):n)}),"").slice(1),Object(f.b)("GET",window.location.origin+"/credit-presentment/renderMessage?"+e).then((function(e){var t=e.data;M({markup:t.markup||w,meta:t.meta||S,parentStyles:t.parentStyles||k,warnings:t.warnings||_})}))),n.current=!0}),t)}(0,[u,s,JSON.stringify(l),d,p,y,b]),Object(r.h)("button",{type:"button",ref:x,onClick:function(){"function"==typeof h&&h({meta:S})},onMouseOver:I,onFocus:I,"aria-label":"PayPal Credit Message",style:{display:"block",background:"transparent",padding:0,border:"none",outline:"none",textAlign:"left",fontFamily:"inherit",fontSize:"inherit"},innerHTML:w})};function l(e){var t=e.markup,n=e.meta,u=e.parentStyles,a=e.warnings;Object(r.k)(Object(r.h)(o.a,null,Object(r.h)(i.a,{data:{markup:t,meta:n,parentStyles:u,warnings:a}},Object(r.h)(s,null))),document.body)}}});
//# sourceMappingURL=smart-credit-message.js.map