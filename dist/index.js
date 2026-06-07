"use strict";var c=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var y=c(function(K,x){
var k=require('@stdlib/blas-base-scopy/dist').ndarray,t=5;function z(i,r,a,s,o,e,q,j){var u,n,f,v;if(i<=0)return e;if(r===0)return k(i,a,s,o,e,q,j);if(u=o,n=j,s===1&&q===1){if(f=i%t,f>0)for(v=0;v<f;v++)e[n]=a[u]-r,u+=s,n+=q;if(i<t)return e;for(v=f;v<i;v+=t)e[n]=a[u]-r,e[n+1]=a[u+1]-r,e[n+2]=a[u+2]-r,e[n+3]=a[u+3]-r,e[n+4]=a[u+4]-r,u+=t,n+=t;return e}for(v=0;v<i;v++)e[n]=a[u]-r,u+=s,n+=q;return e}x.exports=z
});var E=c(function(L,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),A=y();function B(i,r,a,s,o,e){return A(i,r,a,s,R(i,s),o,e,R(i,e))}_.exports=B
});var b=c(function(P,O){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),D=y();C(M,"ndarray",D);O.exports=M
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=b(),m,g=G(F(__dirname,"./native.js"));H(g)?m=I:m=g;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
