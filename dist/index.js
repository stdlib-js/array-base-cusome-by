"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var g=q(function(C,h){
var y=require('@stdlib/array-base-arraylike2object/dist');function P(a,r,s,t,o,n,v){var e,i,c;for(e=!1,i=o,c=0;c<=a.length-1;c++)!e&&n.call(v,a[c],c,a)&&(r-=1,r<=0&&(e=!0)),s[i]=e,i+=t;return s}function b(a,r,s,t,o,n,v){var e,i,c,d,u,f,l;for(e=a.data,i=s.data,c=a.accessors[0],d=s.accessors[1],f=o,u=!1,l=0;l<=e.length-1;l++)!u&&n.call(v,c(e,l),l,e)&&(r-=1,r<=0&&(u=!0)),d(i,f,u),f+=t;return i}function j(a,r,s,t,o,n,v){var e,i;return e=y(a),i=y(s),e.accessorProtocol||i.accessorProtocol?(b(e,r,i,t,o,n,v),s):(P(a,r,s,t,o,n,v),s)}h.exports=j
});var p=q(function(D,m){
var k=require('@stdlib/array-base-filled/dist'),B=g();function O(a,r,s,t){var o=k(!1,a.length);return B(a,r,o,1,0,s,t)}m.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),w=g();R(x,"assign",w);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
