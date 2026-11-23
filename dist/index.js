"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var g=q(function(C,h){
var y=require('@stdlib/array-base-arraylike2object/dist');function P(a,r,e,t,o,n,v){var s,i,c;for(s=!1,i=o,c=0;c<=a.length-1;c++)!s&&n.call(v,a[c],c,a)&&(r-=1,r<=0&&(s=!0)),e[i]=s,i+=t;return e}function b(a,r,e,t,o,n,v){var s,i,c,d,u,f,l;for(s=a.data,i=e.data,c=a.accessors[0],d=e.accessors[1],f=o,u=!1,l=0;l<=s.length-1;l++)!u&&n.call(v,c(s,l),l,s)&&(r-=1,r<=0&&(u=!0)),d(i,f,u),f+=t;return i}function j(a,r,e,t,o,n,v){var s,i;return s=y(a),i=y(e),s.accessorProtocol||i.accessorProtocol?(b(s,r,i,t,o,n,v),e):(P(a,r,e,t,o,n,v),e)}h.exports=j
});var p=q(function(D,m){
var k=require('@stdlib/array-base-filled/dist'),B=g();function O(a,r,e,t){var o=k(!1,a.length);return B(a,r,o,1,0,e,t)}m.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),w=g();R(x,"assign",w);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
