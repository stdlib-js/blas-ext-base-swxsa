"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var y=c(function(K,x){
var k=require('@stdlib/blas-base-scopy/dist').ndarray,t=5;function z(i,r,u,s,o,e,q,j){var n,a,f,v;if(i<=0)return e;if(r===0)return k(i,u,s,o,e,q,j);if(n=o,a=j,s===1&&q===1){if(f=i%t,f>0)for(v=0;v<f;v++)e[a]=u[n]-r,n+=s,a+=q;if(i<t)return e;for(v=f;v<i;v+=t)e[a]=u[n]-r,e[a+1]=u[n+1]-r,e[a+2]=u[n+2]-r,e[a+3]=u[n+3]-r,e[a+4]=u[n+4]-r,n+=t,a+=t;return e}for(v=0;v<i;v++)e[a]=u[n]-r,n+=s,a+=q;return e}x.exports=z
});var E=c(function(L,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),A=y();function B(i,r,u,s,o,e){return A(i,r,u,s,R(i,s),o,e,R(i,e))}_.exports=B
});var b=c(function(P,O){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),D=y();C(M,"ndarray",D);O.exports=M
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=b(),m,g=G(F(__dirname,"./native.js"));H(g)?m=I:m=g;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
