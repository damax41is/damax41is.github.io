var UT=Object.defineProperty;var bT=(o,t,s)=>t in o?UT(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var FT=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var tt=(o,t,s)=>(bT(o,typeof t!="symbol"?t+"":t,s),s);var SN=FT((kN,Nc)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const A of h.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&a(A)}).observe(document,{childList:!0,subtree:!0});function s(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(u){if(u.ep)return;u.ep=!0;const h=s(u);fetch(u.href,h)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="166",pl={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},PT=0,wh=1,NT=2,Yd=1,LT=2,Hi=3,vr=0,Bn=1,Zi=2,gr=0,Hs=1,Th=2,Rh=3,Ch=4,IT=5,qr=100,DT=101,BT=102,kT=103,VT=104,OT=200,zT=201,GT=202,WT=203,jl=204,$l=205,XT=206,HT=207,ZT=208,YT=209,JT=210,jT=211,$T=212,qT=213,QT=214,KT=0,eR=1,tR=2,i0=3,nR=4,iR=5,rR=6,sR=7,Jd=0,oR=1,aR=2,_r=0,lR=1,cR=2,uR=3,fR=4,hR=5,dR=6,pR=7,jd=300,js=301,$s=302,ql=303,Ql=304,h0=306,Kl=1e3,es=1001,ec=1002,si=1003,mR=1004,Ea=1005,mi=1006,ml=1007,ts=1008,qi=1009,$d=1010,qd=1011,ko=1012,Ic=1013,is=1014,Yi=1015,Go=1016,Dc=1017,Bc=1018,qs=1020,Qd=35902,Kd=1021,ep=1022,Ai=1023,tp=1024,np=1025,Zs=1026,Qs=1027,ip=1028,kc=1029,rp=1030,Vc=1031,Oc=1033,qa=33776,Qa=33777,Ka=33778,e0=33779,tc=35840,nc=35841,ic=35842,rc=35843,sc=36196,oc=37492,ac=37496,lc=37808,cc=37809,uc=37810,fc=37811,hc=37812,dc=37813,pc=37814,mc=37815,Ac=37816,gc=37817,_c=37818,vc=37819,yc=37820,xc=37821,t0=36492,Mc=36494,Sc=36495,sp=36283,Ec=36284,wc=36285,Tc=36286,AR=3200,gR=3201,_R=0,vR=1,Ar="",pi="srgb",Mr="srgb-linear",zc="display-p3",d0="display-p3-linear",r0="linear",Kt="srgb",s0="rec709",o0="p3",Ms=7680,Uh=519,yR=512,xR=513,MR=514,op=515,SR=516,ER=517,wR=518,TR=519,bh=35044,Fh="300 es",Ji=2e3,a0=2001;class ss{addEventListener(t,s){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(s)===-1&&a[t].push(s)}hasEventListener(t,s){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(s)!==-1}removeEventListener(t,s){if(this._listeners===void 0)return;const u=this._listeners[t];if(u!==void 0){const h=u.indexOf(s);h!==-1&&u.splice(h,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const u=a.slice(0);for(let h=0,A=u.length;h<A;h++)u[h].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ph=1234567;const Lo=Math.PI/180,Vo=180/Math.PI;function eo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[s&63|128]+Rn[s>>8&255]+"-"+Rn[s>>16&255]+Rn[s>>24&255]+Rn[a&255]+Rn[a>>8&255]+Rn[a>>16&255]+Rn[a>>24&255]).toLowerCase()}function Pn(o,t,s){return Math.max(t,Math.min(s,o))}function Gc(o,t){return(o%t+t)%t}function RR(o,t,s,a,u){return a+(o-t)*(u-a)/(s-t)}function CR(o,t,s){return o!==t?(s-o)/(t-o):0}function Io(o,t,s){return(1-s)*o+s*t}function UR(o,t,s,a){return Io(o,t,1-Math.exp(-s*a))}function bR(o,t=1){return t-Math.abs(Gc(o,t*2)-t)}function FR(o,t,s){return o<=t?0:o>=s?1:(o=(o-t)/(s-t),o*o*(3-2*o))}function PR(o,t,s){return o<=t?0:o>=s?1:(o=(o-t)/(s-t),o*o*o*(o*(o*6-15)+10))}function NR(o,t){return o+Math.floor(Math.random()*(t-o+1))}function LR(o,t){return o+Math.random()*(t-o)}function IR(o){return o*(.5-Math.random())}function DR(o){o!==void 0&&(Ph=o);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function BR(o){return o*Lo}function kR(o){return o*Vo}function VR(o){return(o&o-1)===0&&o!==0}function OR(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zR(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function GR(o,t,s,a,u){const h=Math.cos,A=Math.sin,g=h(s/2),v=A(s/2),x=h((t+a)/2),M=A((t+a)/2),E=h((t-a)/2),w=A((t-a)/2),C=h((a-t)/2),P=A((a-t)/2);switch(u){case"XYX":o.set(g*M,v*E,v*w,g*x);break;case"YZY":o.set(v*w,g*M,v*E,g*x);break;case"ZXZ":o.set(v*E,v*w,g*M,g*x);break;case"XZX":o.set(g*M,v*P,v*C,g*x);break;case"YXY":o.set(v*C,g*M,v*P,g*x);break;case"ZYZ":o.set(v*P,v*C,g*M,g*x);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function Ws(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function bn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Nh={DEG2RAD:Lo,RAD2DEG:Vo,generateUUID:eo,clamp:Pn,euclideanModulo:Gc,mapLinear:RR,inverseLerp:CR,lerp:Io,damp:UR,pingpong:bR,smoothstep:FR,smootherstep:PR,randInt:NR,randFloat:LR,randFloatSpread:IR,seededRandom:DR,degToRad:BR,radToDeg:kR,isPowerOfTwo:VR,ceilPowerOfTwo:OR,floorPowerOfTwo:zR,setQuaternionFromProperEuler:GR,normalize:bn,denormalize:Ws};class Mt{constructor(t=0,s=0){Mt.prototype.isVector2=!0,this.x=t,this.y=s}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,s){return this.x=t,this.y=s,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,s){switch(t){case 0:this.x=s;break;case 1:this.y=s;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,s){return this.x=t.x+s.x,this.y=t.y+s.y,this}addScaledVector(t,s){return this.x+=t.x*s,this.y+=t.y*s,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,s){return this.x=t.x-s.x,this.y=t.y-s.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const s=this.x,a=this.y,u=t.elements;return this.x=u[0]*s+u[3]*a+u[6],this.y=u[1]*s+u[4]*a+u[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,s){return this.x=Math.max(t.x,Math.min(s.x,this.x)),this.y=Math.max(t.y,Math.min(s.y,this.y)),this}clampScalar(t,s){return this.x=Math.max(t,Math.min(s,this.x)),this.y=Math.max(t,Math.min(s,this.y)),this}clampLength(t,s){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(s,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const s=Math.sqrt(this.lengthSq()*t.lengthSq());if(s===0)return Math.PI/2;const a=this.dot(t)/s;return Math.acos(Pn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const s=this.x-t.x,a=this.y-t.y;return s*s+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,s){return this.x+=(t.x-this.x)*s,this.y+=(t.y-this.y)*s,this}lerpVectors(t,s,a){return this.x=t.x+(s.x-t.x)*a,this.y=t.y+(s.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,s=0){return this.x=t[s],this.y=t[s+1],this}toArray(t=[],s=0){return t[s]=this.x,t[s+1]=this.y,t}fromBufferAttribute(t,s){return this.x=t.getX(s),this.y=t.getY(s),this}rotateAround(t,s){const a=Math.cos(s),u=Math.sin(s),h=this.x-t.x,A=this.y-t.y;return this.x=h*a-A*u+t.x,this.y=h*u+A*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(t,s,a,u,h,A,g,v,x){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,s,a,u,h,A,g,v,x)}set(t,s,a,u,h,A,g,v,x){const M=this.elements;return M[0]=t,M[1]=u,M[2]=g,M[3]=s,M[4]=h,M[5]=v,M[6]=a,M[7]=A,M[8]=x,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const s=this.elements,a=t.elements;return s[0]=a[0],s[1]=a[1],s[2]=a[2],s[3]=a[3],s[4]=a[4],s[5]=a[5],s[6]=a[6],s[7]=a[7],s[8]=a[8],this}extractBasis(t,s,a){return t.setFromMatrix3Column(this,0),s.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const s=t.elements;return this.set(s[0],s[4],s[8],s[1],s[5],s[9],s[2],s[6],s[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,s){const a=t.elements,u=s.elements,h=this.elements,A=a[0],g=a[3],v=a[6],x=a[1],M=a[4],E=a[7],w=a[2],C=a[5],P=a[8],I=u[0],R=u[3],T=u[6],W=u[1],V=u[4],H=u[7],se=u[2],J=u[5],Y=u[8];return h[0]=A*I+g*W+v*se,h[3]=A*R+g*V+v*J,h[6]=A*T+g*H+v*Y,h[1]=x*I+M*W+E*se,h[4]=x*R+M*V+E*J,h[7]=x*T+M*H+E*Y,h[2]=w*I+C*W+P*se,h[5]=w*R+C*V+P*J,h[8]=w*T+C*H+P*Y,this}multiplyScalar(t){const s=this.elements;return s[0]*=t,s[3]*=t,s[6]*=t,s[1]*=t,s[4]*=t,s[7]*=t,s[2]*=t,s[5]*=t,s[8]*=t,this}determinant(){const t=this.elements,s=t[0],a=t[1],u=t[2],h=t[3],A=t[4],g=t[5],v=t[6],x=t[7],M=t[8];return s*A*M-s*g*x-a*h*M+a*g*v+u*h*x-u*A*v}invert(){const t=this.elements,s=t[0],a=t[1],u=t[2],h=t[3],A=t[4],g=t[5],v=t[6],x=t[7],M=t[8],E=M*A-g*x,w=g*v-M*h,C=x*h-A*v,P=s*E+a*w+u*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=E*I,t[1]=(u*x-M*a)*I,t[2]=(g*a-u*A)*I,t[3]=w*I,t[4]=(M*s-u*v)*I,t[5]=(u*h-g*s)*I,t[6]=C*I,t[7]=(a*v-x*s)*I,t[8]=(A*s-a*h)*I,this}transpose(){let t;const s=this.elements;return t=s[1],s[1]=s[3],s[3]=t,t=s[2],s[2]=s[6],s[6]=t,t=s[5],s[5]=s[7],s[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const s=this.elements;return t[0]=s[0],t[1]=s[3],t[2]=s[6],t[3]=s[1],t[4]=s[4],t[5]=s[7],t[6]=s[2],t[7]=s[5],t[8]=s[8],this}setUvTransform(t,s,a,u,h,A,g){const v=Math.cos(h),x=Math.sin(h);return this.set(a*v,a*x,-a*(v*A+x*g)+A+t,-u*x,u*v,-u*(-x*A+v*g)+g+s,0,0,1),this}scale(t,s){return this.premultiply(Al.makeScale(t,s)),this}rotate(t){return this.premultiply(Al.makeRotation(-t)),this}translate(t,s){return this.premultiply(Al.makeTranslation(t,s)),this}makeTranslation(t,s){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,s,0,0,1),this}makeRotation(t){const s=Math.cos(t),a=Math.sin(t);return this.set(s,-a,0,a,s,0,0,0,1),this}makeScale(t,s){return this.set(t,0,0,0,s,0,0,0,1),this}equals(t){const s=this.elements,a=t.elements;for(let u=0;u<9;u++)if(s[u]!==a[u])return!1;return!0}fromArray(t,s=0){for(let a=0;a<9;a++)this.elements[a]=t[a+s];return this}toArray(t=[],s=0){const a=this.elements;return t[s]=a[0],t[s+1]=a[1],t[s+2]=a[2],t[s+3]=a[3],t[s+4]=a[4],t[s+5]=a[5],t[s+6]=a[6],t[s+7]=a[7],t[s+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new xt;function ap(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Oo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function WR(){const o=Oo("canvas");return o.style.display="block",o}const Lh={};function lp(o){o in Lh||(Lh[o]=!0,console.warn(o))}function XR(o,t,s){return new Promise(function(a,u){function h(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(h,s);break;default:a()}}setTimeout(h,s)})}const Ih=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dh=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wa={[Mr]:{transfer:r0,primaries:s0,toReference:o=>o,fromReference:o=>o},[pi]:{transfer:Kt,primaries:s0,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[d0]:{transfer:r0,primaries:o0,toReference:o=>o.applyMatrix3(Dh),fromReference:o=>o.applyMatrix3(Ih)},[zc]:{transfer:Kt,primaries:o0,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Dh),fromReference:o=>o.applyMatrix3(Ih).convertLinearToSRGB()}},HR=new Set([Mr,d0]),Wt={enabled:!0,_workingColorSpace:Mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!HR.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,s){if(this.enabled===!1||t===s||!t||!s)return o;const a=wa[t].toReference,u=wa[s].fromReference;return u(a(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return wa[o].primaries},getTransfer:function(o){return o===Ar?r0:wa[o].transfer}};function Ys(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ss;class ZR{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ss===void 0&&(Ss=Oo("canvas")),Ss.width=t.width,Ss.height=t.height;const a=Ss.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),s=Ss}return s.width>2048||s.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),s.toDataURL("image/jpeg",.6)):s.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const s=Oo("canvas");s.width=t.width,s.height=t.height;const a=s.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const u=a.getImageData(0,0,t.width,t.height),h=u.data;for(let A=0;A<h.length;A++)h[A]=Ys(h[A]/255)*255;return a.putImageData(u,0,0),s}else if(t.data){const s=t.data.slice(0);for(let a=0;a<s.length;a++)s instanceof Uint8Array||s instanceof Uint8ClampedArray?s[a]=Math.floor(Ys(s[a]/255)*255):s[a]=Ys(s[a]);return{data:s,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let YR=0;class cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YR++}),this.uuid=eo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const s=t===void 0||typeof t=="string";if(!s&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},u=this.data;if(u!==null){let h;if(Array.isArray(u)){h=[];for(let A=0,g=u.length;A<g;A++)u[A].isDataTexture?h.push(_l(u[A].image)):h.push(_l(u[A]))}else h=_l(u);a.url=h}return s||(t.images[this.uuid]=a),a}}function _l(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ZR.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JR=0;class Nn extends ss{constructor(t=Nn.DEFAULT_IMAGE,s=Nn.DEFAULT_MAPPING,a=es,u=es,h=mi,A=ts,g=Ai,v=qi,x=Nn.DEFAULT_ANISOTROPY,M=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=eo(),this.name="",this.source=new cp(t),this.mipmaps=[],this.mapping=s,this.channel=0,this.wrapS=a,this.wrapT=u,this.magFilter=h,this.minFilter=A,this.anisotropy=x,this.format=g,this.internalFormat=null,this.type=v,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=M,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const s=t===void 0||typeof t=="string";if(!s&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),s||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kl:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kl:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=jd;Nn.DEFAULT_ANISOTROPY=1;class Mn{constructor(t=0,s=0,a=0,u=1){Mn.prototype.isVector4=!0,this.x=t,this.y=s,this.z=a,this.w=u}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,s,a,u){return this.x=t,this.y=s,this.z=a,this.w=u,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,s){switch(t){case 0:this.x=s;break;case 1:this.y=s;break;case 2:this.z=s;break;case 3:this.w=s;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,s){return this.x=t.x+s.x,this.y=t.y+s.y,this.z=t.z+s.z,this.w=t.w+s.w,this}addScaledVector(t,s){return this.x+=t.x*s,this.y+=t.y*s,this.z+=t.z*s,this.w+=t.w*s,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,s){return this.x=t.x-s.x,this.y=t.y-s.y,this.z=t.z-s.z,this.w=t.w-s.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const s=this.x,a=this.y,u=this.z,h=this.w,A=t.elements;return this.x=A[0]*s+A[4]*a+A[8]*u+A[12]*h,this.y=A[1]*s+A[5]*a+A[9]*u+A[13]*h,this.z=A[2]*s+A[6]*a+A[10]*u+A[14]*h,this.w=A[3]*s+A[7]*a+A[11]*u+A[15]*h,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const s=Math.sqrt(1-t.w*t.w);return s<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/s,this.y=t.y/s,this.z=t.z/s),this}setAxisAngleFromRotationMatrix(t){let s,a,u,h;const v=t.elements,x=v[0],M=v[4],E=v[8],w=v[1],C=v[5],P=v[9],I=v[2],R=v[6],T=v[10];if(Math.abs(M-w)<.01&&Math.abs(E-I)<.01&&Math.abs(P-R)<.01){if(Math.abs(M+w)<.1&&Math.abs(E+I)<.1&&Math.abs(P+R)<.1&&Math.abs(x+C+T-3)<.1)return this.set(1,0,0,0),this;s=Math.PI;const V=(x+1)/2,H=(C+1)/2,se=(T+1)/2,J=(M+w)/4,Y=(E+I)/4,ae=(P+R)/4;return V>H&&V>se?V<.01?(a=0,u=.707106781,h=.707106781):(a=Math.sqrt(V),u=J/a,h=Y/a):H>se?H<.01?(a=.707106781,u=0,h=.707106781):(u=Math.sqrt(H),a=J/u,h=ae/u):se<.01?(a=.707106781,u=.707106781,h=0):(h=Math.sqrt(se),a=Y/h,u=ae/h),this.set(a,u,h,s),this}let W=Math.sqrt((R-P)*(R-P)+(E-I)*(E-I)+(w-M)*(w-M));return Math.abs(W)<.001&&(W=1),this.x=(R-P)/W,this.y=(E-I)/W,this.z=(w-M)/W,this.w=Math.acos((x+C+T-1)/2),this}setFromMatrixPosition(t){const s=t.elements;return this.x=s[12],this.y=s[13],this.z=s[14],this.w=s[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,s){return this.x=Math.max(t.x,Math.min(s.x,this.x)),this.y=Math.max(t.y,Math.min(s.y,this.y)),this.z=Math.max(t.z,Math.min(s.z,this.z)),this.w=Math.max(t.w,Math.min(s.w,this.w)),this}clampScalar(t,s){return this.x=Math.max(t,Math.min(s,this.x)),this.y=Math.max(t,Math.min(s,this.y)),this.z=Math.max(t,Math.min(s,this.z)),this.w=Math.max(t,Math.min(s,this.w)),this}clampLength(t,s){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(s,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,s){return this.x+=(t.x-this.x)*s,this.y+=(t.y-this.y)*s,this.z+=(t.z-this.z)*s,this.w+=(t.w-this.w)*s,this}lerpVectors(t,s,a){return this.x=t.x+(s.x-t.x)*a,this.y=t.y+(s.y-t.y)*a,this.z=t.z+(s.z-t.z)*a,this.w=t.w+(s.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,s=0){return this.x=t[s],this.y=t[s+1],this.z=t[s+2],this.w=t[s+3],this}toArray(t=[],s=0){return t[s]=this.x,t[s+1]=this.y,t[s+2]=this.z,t[s+3]=this.w,t}fromBufferAttribute(t,s){return this.x=t.getX(s),this.y=t.getY(s),this.z=t.getZ(s),this.w=t.getW(s),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jR extends ss{constructor(t=1,s=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=s,this.depth=1,this.scissor=new Mn(0,0,t,s),this.scissorTest=!1,this.viewport=new Mn(0,0,t,s);const u={width:t,height:s,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const h=new Nn(u,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);h.flipY=!1,h.generateMipmaps=a.generateMipmaps,h.internalFormat=a.internalFormat,this.textures=[];const A=a.count;for(let g=0;g<A;g++)this.textures[g]=h.clone(),this.textures[g].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,s,a=1){if(this.width!==t||this.height!==s||this.depth!==a){this.width=t,this.height=s,this.depth=a;for(let u=0,h=this.textures.length;u<h;u++)this.textures[u].image.width=t,this.textures[u].image.height=s,this.textures[u].image.depth=a;this.dispose()}this.viewport.set(0,0,t,s),this.scissor.set(0,0,t,s)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let a=0,u=t.textures.length;a<u;a++)this.textures[a]=t.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const s=Object.assign({},t.texture.image);return this.texture.source=new cp(s),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends jR{constructor(t=1,s=1,a={}){super(t,s,a),this.isWebGLRenderTarget=!0}}class up extends Nn{constructor(t=null,s=1,a=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:s,height:a,depth:u},this.magFilter=si,this.minFilter=si,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $R extends Nn{constructor(t=null,s=1,a=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:s,height:a,depth:u},this.magFilter=si,this.minFilter=si,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(t=0,s=0,a=0,u=1){this.isQuaternion=!0,this._x=t,this._y=s,this._z=a,this._w=u}static slerpFlat(t,s,a,u,h,A,g){let v=a[u+0],x=a[u+1],M=a[u+2],E=a[u+3];const w=h[A+0],C=h[A+1],P=h[A+2],I=h[A+3];if(g===0){t[s+0]=v,t[s+1]=x,t[s+2]=M,t[s+3]=E;return}if(g===1){t[s+0]=w,t[s+1]=C,t[s+2]=P,t[s+3]=I;return}if(E!==I||v!==w||x!==C||M!==P){let R=1-g;const T=v*w+x*C+M*P+E*I,W=T>=0?1:-1,V=1-T*T;if(V>Number.EPSILON){const se=Math.sqrt(V),J=Math.atan2(se,T*W);R=Math.sin(R*J)/se,g=Math.sin(g*J)/se}const H=g*W;if(v=v*R+w*H,x=x*R+C*H,M=M*R+P*H,E=E*R+I*H,R===1-g){const se=1/Math.sqrt(v*v+x*x+M*M+E*E);v*=se,x*=se,M*=se,E*=se}}t[s]=v,t[s+1]=x,t[s+2]=M,t[s+3]=E}static multiplyQuaternionsFlat(t,s,a,u,h,A){const g=a[u],v=a[u+1],x=a[u+2],M=a[u+3],E=h[A],w=h[A+1],C=h[A+2],P=h[A+3];return t[s]=g*P+M*E+v*C-x*w,t[s+1]=v*P+M*w+x*E-g*C,t[s+2]=x*P+M*C+g*w-v*E,t[s+3]=M*P-g*E-v*w-x*C,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,s,a,u){return this._x=t,this._y=s,this._z=a,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,s=!0){const a=t._x,u=t._y,h=t._z,A=t._order,g=Math.cos,v=Math.sin,x=g(a/2),M=g(u/2),E=g(h/2),w=v(a/2),C=v(u/2),P=v(h/2);switch(A){case"XYZ":this._x=w*M*E+x*C*P,this._y=x*C*E-w*M*P,this._z=x*M*P+w*C*E,this._w=x*M*E-w*C*P;break;case"YXZ":this._x=w*M*E+x*C*P,this._y=x*C*E-w*M*P,this._z=x*M*P-w*C*E,this._w=x*M*E+w*C*P;break;case"ZXY":this._x=w*M*E-x*C*P,this._y=x*C*E+w*M*P,this._z=x*M*P+w*C*E,this._w=x*M*E-w*C*P;break;case"ZYX":this._x=w*M*E-x*C*P,this._y=x*C*E+w*M*P,this._z=x*M*P-w*C*E,this._w=x*M*E+w*C*P;break;case"YZX":this._x=w*M*E+x*C*P,this._y=x*C*E+w*M*P,this._z=x*M*P-w*C*E,this._w=x*M*E-w*C*P;break;case"XZY":this._x=w*M*E-x*C*P,this._y=x*C*E-w*M*P,this._z=x*M*P+w*C*E,this._w=x*M*E+w*C*P;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+A)}return s===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,s){const a=s/2,u=Math.sin(a);return this._x=t.x*u,this._y=t.y*u,this._z=t.z*u,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const s=t.elements,a=s[0],u=s[4],h=s[8],A=s[1],g=s[5],v=s[9],x=s[2],M=s[6],E=s[10],w=a+g+E;if(w>0){const C=.5/Math.sqrt(w+1);this._w=.25/C,this._x=(M-v)*C,this._y=(h-x)*C,this._z=(A-u)*C}else if(a>g&&a>E){const C=2*Math.sqrt(1+a-g-E);this._w=(M-v)/C,this._x=.25*C,this._y=(u+A)/C,this._z=(h+x)/C}else if(g>E){const C=2*Math.sqrt(1+g-a-E);this._w=(h-x)/C,this._x=(u+A)/C,this._y=.25*C,this._z=(v+M)/C}else{const C=2*Math.sqrt(1+E-a-g);this._w=(A-u)/C,this._x=(h+x)/C,this._y=(v+M)/C,this._z=.25*C}return this._onChangeCallback(),this}setFromUnitVectors(t,s){let a=t.dot(s)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*s.z-t.z*s.y,this._y=t.z*s.x-t.x*s.z,this._z=t.x*s.y-t.y*s.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,s){const a=this.angleTo(t);if(a===0)return this;const u=Math.min(1,s/a);return this.slerp(t,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,s){const a=t._x,u=t._y,h=t._z,A=t._w,g=s._x,v=s._y,x=s._z,M=s._w;return this._x=a*M+A*g+u*x-h*v,this._y=u*M+A*v+h*g-a*x,this._z=h*M+A*x+a*v-u*g,this._w=A*M-a*g-u*v-h*x,this._onChangeCallback(),this}slerp(t,s){if(s===0)return this;if(s===1)return this.copy(t);const a=this._x,u=this._y,h=this._z,A=this._w;let g=A*t._w+a*t._x+u*t._y+h*t._z;if(g<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,g=-g):this.copy(t),g>=1)return this._w=A,this._x=a,this._y=u,this._z=h,this;const v=1-g*g;if(v<=Number.EPSILON){const C=1-s;return this._w=C*A+s*this._w,this._x=C*a+s*this._x,this._y=C*u+s*this._y,this._z=C*h+s*this._z,this.normalize(),this}const x=Math.sqrt(v),M=Math.atan2(x,g),E=Math.sin((1-s)*M)/x,w=Math.sin(s*M)/x;return this._w=A*E+this._w*w,this._x=a*E+this._x*w,this._y=u*E+this._y*w,this._z=h*E+this._z*w,this._onChangeCallback(),this}slerpQuaternions(t,s,a){return this.copy(t).slerp(s,a)}random(){const t=2*Math.PI*Math.random(),s=2*Math.PI*Math.random(),a=Math.random(),u=Math.sqrt(1-a),h=Math.sqrt(a);return this.set(u*Math.sin(t),u*Math.cos(t),h*Math.sin(s),h*Math.cos(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,s=0){return this._x=t[s],this._y=t[s+1],this._z=t[s+2],this._w=t[s+3],this._onChangeCallback(),this}toArray(t=[],s=0){return t[s]=this._x,t[s+1]=this._y,t[s+2]=this._z,t[s+3]=this._w,t}fromBufferAttribute(t,s){return this._x=t.getX(s),this._y=t.getY(s),this._z=t.getZ(s),this._w=t.getW(s),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(t=0,s=0,a=0){le.prototype.isVector3=!0,this.x=t,this.y=s,this.z=a}set(t,s,a){return a===void 0&&(a=this.z),this.x=t,this.y=s,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,s){switch(t){case 0:this.x=s;break;case 1:this.y=s;break;case 2:this.z=s;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,s){return this.x=t.x+s.x,this.y=t.y+s.y,this.z=t.z+s.z,this}addScaledVector(t,s){return this.x+=t.x*s,this.y+=t.y*s,this.z+=t.z*s,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,s){return this.x=t.x-s.x,this.y=t.y-s.y,this.z=t.z-s.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,s){return this.x=t.x*s.x,this.y=t.y*s.y,this.z=t.z*s.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,s){return this.applyQuaternion(Bh.setFromAxisAngle(t,s))}applyMatrix3(t){const s=this.x,a=this.y,u=this.z,h=t.elements;return this.x=h[0]*s+h[3]*a+h[6]*u,this.y=h[1]*s+h[4]*a+h[7]*u,this.z=h[2]*s+h[5]*a+h[8]*u,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const s=this.x,a=this.y,u=this.z,h=t.elements,A=1/(h[3]*s+h[7]*a+h[11]*u+h[15]);return this.x=(h[0]*s+h[4]*a+h[8]*u+h[12])*A,this.y=(h[1]*s+h[5]*a+h[9]*u+h[13])*A,this.z=(h[2]*s+h[6]*a+h[10]*u+h[14])*A,this}applyQuaternion(t){const s=this.x,a=this.y,u=this.z,h=t.x,A=t.y,g=t.z,v=t.w,x=2*(A*u-g*a),M=2*(g*s-h*u),E=2*(h*a-A*s);return this.x=s+v*x+A*E-g*M,this.y=a+v*M+g*x-h*E,this.z=u+v*E+h*M-A*x,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const s=this.x,a=this.y,u=this.z,h=t.elements;return this.x=h[0]*s+h[4]*a+h[8]*u,this.y=h[1]*s+h[5]*a+h[9]*u,this.z=h[2]*s+h[6]*a+h[10]*u,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,s){return this.x=Math.max(t.x,Math.min(s.x,this.x)),this.y=Math.max(t.y,Math.min(s.y,this.y)),this.z=Math.max(t.z,Math.min(s.z,this.z)),this}clampScalar(t,s){return this.x=Math.max(t,Math.min(s,this.x)),this.y=Math.max(t,Math.min(s,this.y)),this.z=Math.max(t,Math.min(s,this.z)),this}clampLength(t,s){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(s,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,s){return this.x+=(t.x-this.x)*s,this.y+=(t.y-this.y)*s,this.z+=(t.z-this.z)*s,this}lerpVectors(t,s,a){return this.x=t.x+(s.x-t.x)*a,this.y=t.y+(s.y-t.y)*a,this.z=t.z+(s.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,s){const a=t.x,u=t.y,h=t.z,A=s.x,g=s.y,v=s.z;return this.x=u*v-h*g,this.y=h*A-a*v,this.z=a*g-u*A,this}projectOnVector(t){const s=t.lengthSq();if(s===0)return this.set(0,0,0);const a=t.dot(this)/s;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const s=Math.sqrt(this.lengthSq()*t.lengthSq());if(s===0)return Math.PI/2;const a=this.dot(t)/s;return Math.acos(Pn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const s=this.x-t.x,a=this.y-t.y,u=this.z-t.z;return s*s+a*a+u*u}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,s,a){const u=Math.sin(s)*t;return this.x=u*Math.sin(a),this.y=Math.cos(s)*t,this.z=u*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,s,a){return this.x=t*Math.sin(s),this.y=a,this.z=t*Math.cos(s),this}setFromMatrixPosition(t){const s=t.elements;return this.x=s[12],this.y=s[13],this.z=s[14],this}setFromMatrixScale(t){const s=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),u=this.setFromMatrixColumn(t,2).length();return this.x=s,this.y=a,this.z=u,this}setFromMatrixColumn(t,s){return this.fromArray(t.elements,s*4)}setFromMatrix3Column(t,s){return this.fromArray(t.elements,s*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,s=0){return this.x=t[s],this.y=t[s+1],this.z=t[s+2],this}toArray(t=[],s=0){return t[s]=this.x,t[s+1]=this.y,t[s+2]=this.z,t}fromBufferAttribute(t,s){return this.x=t.getX(s),this.y=t.getY(s),this.z=t.getZ(s),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,s=Math.random()*2-1,a=Math.sqrt(1-s*s);return this.x=a*Math.cos(t),this.y=s,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new le,Bh=new to;class Wo{constructor(t=new le(1/0,1/0,1/0),s=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=s}set(t,s){return this.min.copy(t),this.max.copy(s),this}setFromArray(t){this.makeEmpty();for(let s=0,a=t.length;s<a;s+=3)this.expandByPoint(fi.fromArray(t,s));return this}setFromBufferAttribute(t){this.makeEmpty();for(let s=0,a=t.count;s<a;s++)this.expandByPoint(fi.fromBufferAttribute(t,s));return this}setFromPoints(t){this.makeEmpty();for(let s=0,a=t.length;s<a;s++)this.expandByPoint(t[s]);return this}setFromCenterAndSize(t,s){const a=fi.copy(s).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,s=!1){return this.makeEmpty(),this.expandByObject(t,s)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,s=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const h=a.getAttribute("position");if(s===!0&&h!==void 0&&t.isInstancedMesh!==!0)for(let A=0,g=h.count;A<g;A++)t.isMesh===!0?t.getVertexPosition(A,fi):fi.fromBufferAttribute(h,A),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ta.copy(a.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}const u=t.children;for(let h=0,A=u.length;h<A;h++)this.expandByObject(u[h],s);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,s){return s.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let s,a;return t.normal.x>0?(s=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(s=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(s+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(s+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(s+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(s+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),s<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uo),Ra.subVectors(this.max,Uo),Es.subVectors(t.a,Uo),ws.subVectors(t.b,Uo),Ts.subVectors(t.c,Uo),ar.subVectors(ws,Es),lr.subVectors(Ts,ws),Wr.subVectors(Es,Ts);let s=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Wr.z,Wr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Wr.z,0,-Wr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Wr.y,Wr.x,0];return!yl(s,Es,ws,Ts,Ra)||(s=[1,0,0,0,1,0,0,0,1],!yl(s,Es,ws,Ts,Ra))?!1:(Ca.crossVectors(ar,lr),s=[Ca.x,Ca.y,Ca.z],yl(s,Es,ws,Ts,Ra))}clampPoint(t,s){return s.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vi=[new le,new le,new le,new le,new le,new le,new le,new le],fi=new le,Ta=new Wo,Es=new le,ws=new le,Ts=new le,ar=new le,lr=new le,Wr=new le,Uo=new le,Ra=new le,Ca=new le,Xr=new le;function yl(o,t,s,a,u){for(let h=0,A=o.length-3;h<=A;h+=3){Xr.fromArray(o,h);const g=u.x*Math.abs(Xr.x)+u.y*Math.abs(Xr.y)+u.z*Math.abs(Xr.z),v=t.dot(Xr),x=s.dot(Xr),M=a.dot(Xr);if(Math.max(-Math.max(v,x,M),Math.min(v,x,M))>g)return!1}return!0}const qR=new Wo,bo=new le,xl=new le;class p0{constructor(t=new le,s=-1){this.isSphere=!0,this.center=t,this.radius=s}set(t,s){return this.center.copy(t),this.radius=s,this}setFromPoints(t,s){const a=this.center;s!==void 0?a.copy(s):qR.setFromPoints(t).getCenter(a);let u=0;for(let h=0,A=t.length;h<A;h++)u=Math.max(u,a.distanceToSquared(t[h]));return this.radius=Math.sqrt(u),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const s=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=s*s}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,s){const a=this.center.distanceToSquared(t);return s.copy(t),a>this.radius*this.radius&&(s.sub(this.center).normalize(),s.multiplyScalar(this.radius).add(this.center)),s}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);const s=bo.lengthSq();if(s>this.radius*this.radius){const a=Math.sqrt(s),u=(a-this.radius)*.5;this.center.addScaledVector(bo,u/a),this.radius+=u}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(xl)),this.expandByPoint(bo.copy(t.center).sub(xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new le,Ml=new le,Ua=new le,cr=new le,Sl=new le,ba=new le,El=new le;class fp{constructor(t=new le,s=new le(0,0,-1)){this.origin=t,this.direction=s}set(t,s){return this.origin.copy(t),this.direction.copy(s),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,s){return s.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,s){s.subVectors(t,this.origin);const a=s.dot(this.direction);return a<0?s.copy(this.origin):s.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const s=Oi.subVectors(t,this.origin).dot(this.direction);return s<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,s),Oi.distanceToSquared(t))}distanceSqToSegment(t,s,a,u){Ml.copy(t).add(s).multiplyScalar(.5),Ua.copy(s).sub(t).normalize(),cr.copy(this.origin).sub(Ml);const h=t.distanceTo(s)*.5,A=-this.direction.dot(Ua),g=cr.dot(this.direction),v=-cr.dot(Ua),x=cr.lengthSq(),M=Math.abs(1-A*A);let E,w,C,P;if(M>0)if(E=A*v-g,w=A*g-v,P=h*M,E>=0)if(w>=-P)if(w<=P){const I=1/M;E*=I,w*=I,C=E*(E+A*w+2*g)+w*(A*E+w+2*v)+x}else w=h,E=Math.max(0,-(A*w+g)),C=-E*E+w*(w+2*v)+x;else w=-h,E=Math.max(0,-(A*w+g)),C=-E*E+w*(w+2*v)+x;else w<=-P?(E=Math.max(0,-(-A*h+g)),w=E>0?-h:Math.min(Math.max(-h,-v),h),C=-E*E+w*(w+2*v)+x):w<=P?(E=0,w=Math.min(Math.max(-h,-v),h),C=w*(w+2*v)+x):(E=Math.max(0,-(A*h+g)),w=E>0?h:Math.min(Math.max(-h,-v),h),C=-E*E+w*(w+2*v)+x);else w=A>0?-h:h,E=Math.max(0,-(A*w+g)),C=-E*E+w*(w+2*v)+x;return a&&a.copy(this.origin).addScaledVector(this.direction,E),u&&u.copy(Ml).addScaledVector(Ua,w),C}intersectSphere(t,s){Oi.subVectors(t.center,this.origin);const a=Oi.dot(this.direction),u=Oi.dot(Oi)-a*a,h=t.radius*t.radius;if(u>h)return null;const A=Math.sqrt(h-u),g=a-A,v=a+A;return v<0?null:g<0?this.at(v,s):this.at(g,s)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const s=t.normal.dot(this.direction);if(s===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/s;return a>=0?a:null}intersectPlane(t,s){const a=this.distanceToPlane(t);return a===null?null:this.at(a,s)}intersectsPlane(t){const s=t.distanceToPoint(this.origin);return s===0||t.normal.dot(this.direction)*s<0}intersectBox(t,s){let a,u,h,A,g,v;const x=1/this.direction.x,M=1/this.direction.y,E=1/this.direction.z,w=this.origin;return x>=0?(a=(t.min.x-w.x)*x,u=(t.max.x-w.x)*x):(a=(t.max.x-w.x)*x,u=(t.min.x-w.x)*x),M>=0?(h=(t.min.y-w.y)*M,A=(t.max.y-w.y)*M):(h=(t.max.y-w.y)*M,A=(t.min.y-w.y)*M),a>A||h>u||((h>a||isNaN(a))&&(a=h),(A<u||isNaN(u))&&(u=A),E>=0?(g=(t.min.z-w.z)*E,v=(t.max.z-w.z)*E):(g=(t.max.z-w.z)*E,v=(t.min.z-w.z)*E),a>v||g>u)||((g>a||a!==a)&&(a=g),(v<u||u!==u)&&(u=v),u<0)?null:this.at(a>=0?a:u,s)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,s,a,u,h){Sl.subVectors(s,t),ba.subVectors(a,t),El.crossVectors(Sl,ba);let A=this.direction.dot(El),g;if(A>0){if(u)return null;g=1}else if(A<0)g=-1,A=-A;else return null;cr.subVectors(this.origin,t);const v=g*this.direction.dot(ba.crossVectors(cr,ba));if(v<0)return null;const x=g*this.direction.dot(Sl.cross(cr));if(x<0||v+x>A)return null;const M=-g*cr.dot(El);return M<0?null:this.at(M/A,h)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,s,a,u,h,A,g,v,x,M,E,w,C,P,I,R){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,s,a,u,h,A,g,v,x,M,E,w,C,P,I,R)}set(t,s,a,u,h,A,g,v,x,M,E,w,C,P,I,R){const T=this.elements;return T[0]=t,T[4]=s,T[8]=a,T[12]=u,T[1]=h,T[5]=A,T[9]=g,T[13]=v,T[2]=x,T[6]=M,T[10]=E,T[14]=w,T[3]=C,T[7]=P,T[11]=I,T[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const s=this.elements,a=t.elements;return s[0]=a[0],s[1]=a[1],s[2]=a[2],s[3]=a[3],s[4]=a[4],s[5]=a[5],s[6]=a[6],s[7]=a[7],s[8]=a[8],s[9]=a[9],s[10]=a[10],s[11]=a[11],s[12]=a[12],s[13]=a[13],s[14]=a[14],s[15]=a[15],this}copyPosition(t){const s=this.elements,a=t.elements;return s[12]=a[12],s[13]=a[13],s[14]=a[14],this}setFromMatrix3(t){const s=t.elements;return this.set(s[0],s[3],s[6],0,s[1],s[4],s[7],0,s[2],s[5],s[8],0,0,0,0,1),this}extractBasis(t,s,a){return t.setFromMatrixColumn(this,0),s.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,s,a){return this.set(t.x,s.x,a.x,0,t.y,s.y,a.y,0,t.z,s.z,a.z,0,0,0,0,1),this}extractRotation(t){const s=this.elements,a=t.elements,u=1/Rs.setFromMatrixColumn(t,0).length(),h=1/Rs.setFromMatrixColumn(t,1).length(),A=1/Rs.setFromMatrixColumn(t,2).length();return s[0]=a[0]*u,s[1]=a[1]*u,s[2]=a[2]*u,s[3]=0,s[4]=a[4]*h,s[5]=a[5]*h,s[6]=a[6]*h,s[7]=0,s[8]=a[8]*A,s[9]=a[9]*A,s[10]=a[10]*A,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}makeRotationFromEuler(t){const s=this.elements,a=t.x,u=t.y,h=t.z,A=Math.cos(a),g=Math.sin(a),v=Math.cos(u),x=Math.sin(u),M=Math.cos(h),E=Math.sin(h);if(t.order==="XYZ"){const w=A*M,C=A*E,P=g*M,I=g*E;s[0]=v*M,s[4]=-v*E,s[8]=x,s[1]=C+P*x,s[5]=w-I*x,s[9]=-g*v,s[2]=I-w*x,s[6]=P+C*x,s[10]=A*v}else if(t.order==="YXZ"){const w=v*M,C=v*E,P=x*M,I=x*E;s[0]=w+I*g,s[4]=P*g-C,s[8]=A*x,s[1]=A*E,s[5]=A*M,s[9]=-g,s[2]=C*g-P,s[6]=I+w*g,s[10]=A*v}else if(t.order==="ZXY"){const w=v*M,C=v*E,P=x*M,I=x*E;s[0]=w-I*g,s[4]=-A*E,s[8]=P+C*g,s[1]=C+P*g,s[5]=A*M,s[9]=I-w*g,s[2]=-A*x,s[6]=g,s[10]=A*v}else if(t.order==="ZYX"){const w=A*M,C=A*E,P=g*M,I=g*E;s[0]=v*M,s[4]=P*x-C,s[8]=w*x+I,s[1]=v*E,s[5]=I*x+w,s[9]=C*x-P,s[2]=-x,s[6]=g*v,s[10]=A*v}else if(t.order==="YZX"){const w=A*v,C=A*x,P=g*v,I=g*x;s[0]=v*M,s[4]=I-w*E,s[8]=P*E+C,s[1]=E,s[5]=A*M,s[9]=-g*M,s[2]=-x*M,s[6]=C*E+P,s[10]=w-I*E}else if(t.order==="XZY"){const w=A*v,C=A*x,P=g*v,I=g*x;s[0]=v*M,s[4]=-E,s[8]=x*M,s[1]=w*E+I,s[5]=A*M,s[9]=C*E-P,s[2]=P*E-C,s[6]=g*M,s[10]=I*E+w}return s[3]=0,s[7]=0,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,this}makeRotationFromQuaternion(t){return this.compose(QR,t,KR)}lookAt(t,s,a){const u=this.elements;return Zn.subVectors(t,s),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),ur.crossVectors(a,Zn),ur.lengthSq()===0&&(Math.abs(a.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),ur.crossVectors(a,Zn)),ur.normalize(),Fa.crossVectors(Zn,ur),u[0]=ur.x,u[4]=Fa.x,u[8]=Zn.x,u[1]=ur.y,u[5]=Fa.y,u[9]=Zn.y,u[2]=ur.z,u[6]=Fa.z,u[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,s){const a=t.elements,u=s.elements,h=this.elements,A=a[0],g=a[4],v=a[8],x=a[12],M=a[1],E=a[5],w=a[9],C=a[13],P=a[2],I=a[6],R=a[10],T=a[14],W=a[3],V=a[7],H=a[11],se=a[15],J=u[0],Y=u[4],ae=u[8],O=u[12],k=u[1],j=u[5],me=u[9],he=u[13],Me=u[2],Se=u[6],ve=u[10],Ee=u[14],de=u[3],We=u[7],$e=u[11],Ve=u[15];return h[0]=A*J+g*k+v*Me+x*de,h[4]=A*Y+g*j+v*Se+x*We,h[8]=A*ae+g*me+v*ve+x*$e,h[12]=A*O+g*he+v*Ee+x*Ve,h[1]=M*J+E*k+w*Me+C*de,h[5]=M*Y+E*j+w*Se+C*We,h[9]=M*ae+E*me+w*ve+C*$e,h[13]=M*O+E*he+w*Ee+C*Ve,h[2]=P*J+I*k+R*Me+T*de,h[6]=P*Y+I*j+R*Se+T*We,h[10]=P*ae+I*me+R*ve+T*$e,h[14]=P*O+I*he+R*Ee+T*Ve,h[3]=W*J+V*k+H*Me+se*de,h[7]=W*Y+V*j+H*Se+se*We,h[11]=W*ae+V*me+H*ve+se*$e,h[15]=W*O+V*he+H*Ee+se*Ve,this}multiplyScalar(t){const s=this.elements;return s[0]*=t,s[4]*=t,s[8]*=t,s[12]*=t,s[1]*=t,s[5]*=t,s[9]*=t,s[13]*=t,s[2]*=t,s[6]*=t,s[10]*=t,s[14]*=t,s[3]*=t,s[7]*=t,s[11]*=t,s[15]*=t,this}determinant(){const t=this.elements,s=t[0],a=t[4],u=t[8],h=t[12],A=t[1],g=t[5],v=t[9],x=t[13],M=t[2],E=t[6],w=t[10],C=t[14],P=t[3],I=t[7],R=t[11],T=t[15];return P*(+h*v*E-u*x*E-h*g*w+a*x*w+u*g*C-a*v*C)+I*(+s*v*C-s*x*w+h*A*w-u*A*C+u*x*M-h*v*M)+R*(+s*x*E-s*g*C-h*A*E+a*A*C+h*g*M-a*x*M)+T*(-u*g*M-s*v*E+s*g*w+u*A*E-a*A*w+a*v*M)}transpose(){const t=this.elements;let s;return s=t[1],t[1]=t[4],t[4]=s,s=t[2],t[2]=t[8],t[8]=s,s=t[6],t[6]=t[9],t[9]=s,s=t[3],t[3]=t[12],t[12]=s,s=t[7],t[7]=t[13],t[13]=s,s=t[11],t[11]=t[14],t[14]=s,this}setPosition(t,s,a){const u=this.elements;return t.isVector3?(u[12]=t.x,u[13]=t.y,u[14]=t.z):(u[12]=t,u[13]=s,u[14]=a),this}invert(){const t=this.elements,s=t[0],a=t[1],u=t[2],h=t[3],A=t[4],g=t[5],v=t[6],x=t[7],M=t[8],E=t[9],w=t[10],C=t[11],P=t[12],I=t[13],R=t[14],T=t[15],W=E*R*x-I*w*x+I*v*C-g*R*C-E*v*T+g*w*T,V=P*w*x-M*R*x-P*v*C+A*R*C+M*v*T-A*w*T,H=M*I*x-P*E*x+P*g*C-A*I*C-M*g*T+A*E*T,se=P*E*v-M*I*v-P*g*w+A*I*w+M*g*R-A*E*R,J=s*W+a*V+u*H+h*se;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/J;return t[0]=W*Y,t[1]=(I*w*h-E*R*h-I*u*C+a*R*C+E*u*T-a*w*T)*Y,t[2]=(g*R*h-I*v*h+I*u*x-a*R*x-g*u*T+a*v*T)*Y,t[3]=(E*v*h-g*w*h-E*u*x+a*w*x+g*u*C-a*v*C)*Y,t[4]=V*Y,t[5]=(M*R*h-P*w*h+P*u*C-s*R*C-M*u*T+s*w*T)*Y,t[6]=(P*v*h-A*R*h-P*u*x+s*R*x+A*u*T-s*v*T)*Y,t[7]=(A*w*h-M*v*h+M*u*x-s*w*x-A*u*C+s*v*C)*Y,t[8]=H*Y,t[9]=(P*E*h-M*I*h-P*a*C+s*I*C+M*a*T-s*E*T)*Y,t[10]=(A*I*h-P*g*h+P*a*x-s*I*x-A*a*T+s*g*T)*Y,t[11]=(M*g*h-A*E*h-M*a*x+s*E*x+A*a*C-s*g*C)*Y,t[12]=se*Y,t[13]=(M*I*u-P*E*u+P*a*w-s*I*w-M*a*R+s*E*R)*Y,t[14]=(P*g*u-A*I*u-P*a*v+s*I*v+A*a*R-s*g*R)*Y,t[15]=(A*E*u-M*g*u+M*a*v-s*E*v-A*a*w+s*g*w)*Y,this}scale(t){const s=this.elements,a=t.x,u=t.y,h=t.z;return s[0]*=a,s[4]*=u,s[8]*=h,s[1]*=a,s[5]*=u,s[9]*=h,s[2]*=a,s[6]*=u,s[10]*=h,s[3]*=a,s[7]*=u,s[11]*=h,this}getMaxScaleOnAxis(){const t=this.elements,s=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],u=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(s,a,u))}makeTranslation(t,s,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,s,0,0,1,a,0,0,0,1),this}makeRotationX(t){const s=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,s,-a,0,0,a,s,0,0,0,0,1),this}makeRotationY(t){const s=Math.cos(t),a=Math.sin(t);return this.set(s,0,a,0,0,1,0,0,-a,0,s,0,0,0,0,1),this}makeRotationZ(t){const s=Math.cos(t),a=Math.sin(t);return this.set(s,-a,0,0,a,s,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,s){const a=Math.cos(s),u=Math.sin(s),h=1-a,A=t.x,g=t.y,v=t.z,x=h*A,M=h*g;return this.set(x*A+a,x*g-u*v,x*v+u*g,0,x*g+u*v,M*g+a,M*v-u*A,0,x*v-u*g,M*v+u*A,h*v*v+a,0,0,0,0,1),this}makeScale(t,s,a){return this.set(t,0,0,0,0,s,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,s,a,u,h,A){return this.set(1,a,h,0,t,1,A,0,s,u,1,0,0,0,0,1),this}compose(t,s,a){const u=this.elements,h=s._x,A=s._y,g=s._z,v=s._w,x=h+h,M=A+A,E=g+g,w=h*x,C=h*M,P=h*E,I=A*M,R=A*E,T=g*E,W=v*x,V=v*M,H=v*E,se=a.x,J=a.y,Y=a.z;return u[0]=(1-(I+T))*se,u[1]=(C+H)*se,u[2]=(P-V)*se,u[3]=0,u[4]=(C-H)*J,u[5]=(1-(w+T))*J,u[6]=(R+W)*J,u[7]=0,u[8]=(P+V)*Y,u[9]=(R-W)*Y,u[10]=(1-(w+I))*Y,u[11]=0,u[12]=t.x,u[13]=t.y,u[14]=t.z,u[15]=1,this}decompose(t,s,a){const u=this.elements;let h=Rs.set(u[0],u[1],u[2]).length();const A=Rs.set(u[4],u[5],u[6]).length(),g=Rs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(h=-h),t.x=u[12],t.y=u[13],t.z=u[14],hi.copy(this);const x=1/h,M=1/A,E=1/g;return hi.elements[0]*=x,hi.elements[1]*=x,hi.elements[2]*=x,hi.elements[4]*=M,hi.elements[5]*=M,hi.elements[6]*=M,hi.elements[8]*=E,hi.elements[9]*=E,hi.elements[10]*=E,s.setFromRotationMatrix(hi),a.x=h,a.y=A,a.z=g,this}makePerspective(t,s,a,u,h,A,g=Ji){const v=this.elements,x=2*h/(s-t),M=2*h/(a-u),E=(s+t)/(s-t),w=(a+u)/(a-u);let C,P;if(g===Ji)C=-(A+h)/(A-h),P=-2*A*h/(A-h);else if(g===a0)C=-A/(A-h),P=-A*h/(A-h);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+g);return v[0]=x,v[4]=0,v[8]=E,v[12]=0,v[1]=0,v[5]=M,v[9]=w,v[13]=0,v[2]=0,v[6]=0,v[10]=C,v[14]=P,v[3]=0,v[7]=0,v[11]=-1,v[15]=0,this}makeOrthographic(t,s,a,u,h,A,g=Ji){const v=this.elements,x=1/(s-t),M=1/(a-u),E=1/(A-h),w=(s+t)*x,C=(a+u)*M;let P,I;if(g===Ji)P=(A+h)*E,I=-2*E;else if(g===a0)P=h*E,I=-1*E;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+g);return v[0]=2*x,v[4]=0,v[8]=0,v[12]=-w,v[1]=0,v[5]=2*M,v[9]=0,v[13]=-C,v[2]=0,v[6]=0,v[10]=I,v[14]=-P,v[3]=0,v[7]=0,v[11]=0,v[15]=1,this}equals(t){const s=this.elements,a=t.elements;for(let u=0;u<16;u++)if(s[u]!==a[u])return!1;return!0}fromArray(t,s=0){for(let a=0;a<16;a++)this.elements[a]=t[a+s];return this}toArray(t=[],s=0){const a=this.elements;return t[s]=a[0],t[s+1]=a[1],t[s+2]=a[2],t[s+3]=a[3],t[s+4]=a[4],t[s+5]=a[5],t[s+6]=a[6],t[s+7]=a[7],t[s+8]=a[8],t[s+9]=a[9],t[s+10]=a[10],t[s+11]=a[11],t[s+12]=a[12],t[s+13]=a[13],t[s+14]=a[14],t[s+15]=a[15],t}}const Rs=new le,hi=new dn,QR=new le(0,0,0),KR=new le(1,1,1),ur=new le,Fa=new le,Zn=new le,kh=new dn,Vh=new to;class Qi{constructor(t=0,s=0,a=0,u=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=s,this._z=a,this._order=u}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,s,a,u=this._order){return this._x=t,this._y=s,this._z=a,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,s=this._order,a=!0){const u=t.elements,h=u[0],A=u[4],g=u[8],v=u[1],x=u[5],M=u[9],E=u[2],w=u[6],C=u[10];switch(s){case"XYZ":this._y=Math.asin(Pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-M,C),this._z=Math.atan2(-A,h)):(this._x=Math.atan2(w,x),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(g,C),this._z=Math.atan2(v,x)):(this._y=Math.atan2(-E,h),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(w,-1,1)),Math.abs(w)<.9999999?(this._y=Math.atan2(-E,C),this._z=Math.atan2(-A,x)):(this._y=0,this._z=Math.atan2(v,h));break;case"ZYX":this._y=Math.asin(-Pn(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(w,C),this._z=Math.atan2(v,h)):(this._x=0,this._z=Math.atan2(-A,x));break;case"YZX":this._z=Math.asin(Pn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-M,x),this._y=Math.atan2(-E,h)):(this._x=0,this._y=Math.atan2(g,C));break;case"XZY":this._z=Math.asin(-Pn(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(w,x),this._y=Math.atan2(g,h)):(this._x=Math.atan2(-M,C),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+s)}return this._order=s,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,s,a){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,s,a)}setFromVector3(t,s=this._order){return this.set(t.x,t.y,t.z,s)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],s=0){return t[s]=this._x,t[s+1]=this._y,t[s+2]=this._z,t[s+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let e4=0;const Oh=new le,Cs=new to,zi=new dn,Pa=new le,Fo=new le,t4=new le,n4=new to,zh=new le(1,0,0),Gh=new le(0,1,0),Wh=new le(0,0,1),Xh={type:"added"},i4={type:"removed"},Us={type:"childadded",child:null},wl={type:"childremoved",child:null};class kn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e4++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new le,s=new Qi,a=new to,u=new le(1,1,1);function h(){a.setFromEuler(s,!1)}function A(){s.setFromQuaternion(a,void 0,!1)}s._onChange(h),a._onChange(A),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:s},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new dn},normalMatrix:{value:new xt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,s){this.quaternion.setFromAxisAngle(t,s)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,s){return Cs.setFromAxisAngle(t,s),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,s){return Cs.setFromAxisAngle(t,s),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Wh,t)}translateOnAxis(t,s){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(s)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,s,a){t.isVector3?Pa.copy(t):Pa.set(t,s,a);const u=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Fo,Pa,this.up):zi.lookAt(Pa,Fo,this.up),this.quaternion.setFromRotationMatrix(zi),u&&(zi.extractRotation(u.matrixWorld),Cs.setFromRotationMatrix(zi),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.add(arguments[s]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xh),Us.child=t,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const s=this.children.indexOf(t);return s!==-1&&(t.parent=null,this.children.splice(s,1),t.dispatchEvent(i4),wl.child=t,this.dispatchEvent(wl),wl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xh),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,s){if(this[t]===s)return this;for(let a=0,u=this.children.length;a<u;a++){const A=this.children[a].getObjectByProperty(t,s);if(A!==void 0)return A}}getObjectsByProperty(t,s,a=[]){this[t]===s&&a.push(this);const u=this.children;for(let h=0,A=u.length;h<A;h++)u[h].getObjectsByProperty(t,s,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,t4),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,n4,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const s=this.matrixWorld.elements;return t.set(s[8],s[9],s[10]).normalize()}raycast(){}traverse(t){t(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].traverseVisible(t)}traverseAncestors(t){const s=this.parent;s!==null&&(t(s),s.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateMatrixWorld(t)}updateWorldMatrix(t,s){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),s===!0){const u=this.children;for(let h=0,A=u.length;h<A;h++)u[h].updateWorldMatrix(!1,!0)}}toJSON(t){const s=t===void 0||typeof t=="string",a={};s&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.visibility=this._visibility,u.active=this._active,u.bounds=this._bounds.map(g=>({boxInitialized:g.boxInitialized,boxMin:g.box.min.toArray(),boxMax:g.box.max.toArray(),sphereInitialized:g.sphereInitialized,sphereRadius:g.sphere.radius,sphereCenter:g.sphere.center.toArray()})),u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.geometryCount=this._geometryCount,u.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(u.boundingSphere={center:u.boundingSphere.center.toArray(),radius:u.boundingSphere.radius}),this.boundingBox!==null&&(u.boundingBox={min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}));function h(g,v){return g[v.uuid]===void 0&&(g[v.uuid]=v.toJSON(t)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=h(t.geometries,this.geometry);const g=this.geometry.parameters;if(g!==void 0&&g.shapes!==void 0){const v=g.shapes;if(Array.isArray(v))for(let x=0,M=v.length;x<M;x++){const E=v[x];h(t.shapes,E)}else h(t.shapes,v)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(h(t.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const g=[];for(let v=0,x=this.material.length;v<x;v++)g.push(h(t.materials,this.material[v]));u.material=g}else u.material=h(t.materials,this.material);if(this.children.length>0){u.children=[];for(let g=0;g<this.children.length;g++)u.children.push(this.children[g].toJSON(t).object)}if(this.animations.length>0){u.animations=[];for(let g=0;g<this.animations.length;g++){const v=this.animations[g];u.animations.push(h(t.animations,v))}}if(s){const g=A(t.geometries),v=A(t.materials),x=A(t.textures),M=A(t.images),E=A(t.shapes),w=A(t.skeletons),C=A(t.animations),P=A(t.nodes);g.length>0&&(a.geometries=g),v.length>0&&(a.materials=v),x.length>0&&(a.textures=x),M.length>0&&(a.images=M),E.length>0&&(a.shapes=E),w.length>0&&(a.skeletons=w),C.length>0&&(a.animations=C),P.length>0&&(a.nodes=P)}return a.object=u,a;function A(g){const v=[];for(const x in g){const M=g[x];delete M.metadata,v.push(M)}return v}}clone(t){return new this.constructor().copy(this,t)}copy(t,s=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),s===!0)for(let a=0;a<t.children.length;a++){const u=t.children[a];this.add(u.clone())}return this}}kn.DEFAULT_UP=new le(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new le,Gi=new le,Tl=new le,Wi=new le,bs=new le,Fs=new le,Hh=new le,Rl=new le,Cl=new le,Ul=new le;class bi{constructor(t=new le,s=new le,a=new le){this.a=t,this.b=s,this.c=a}static getNormal(t,s,a,u){u.subVectors(a,s),di.subVectors(t,s),u.cross(di);const h=u.lengthSq();return h>0?u.multiplyScalar(1/Math.sqrt(h)):u.set(0,0,0)}static getBarycoord(t,s,a,u,h){di.subVectors(u,s),Gi.subVectors(a,s),Tl.subVectors(t,s);const A=di.dot(di),g=di.dot(Gi),v=di.dot(Tl),x=Gi.dot(Gi),M=Gi.dot(Tl),E=A*x-g*g;if(E===0)return h.set(0,0,0),null;const w=1/E,C=(x*v-g*M)*w,P=(A*M-g*v)*w;return h.set(1-C-P,P,C)}static containsPoint(t,s,a,u){return this.getBarycoord(t,s,a,u,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,s,a,u,h,A,g,v){return this.getBarycoord(t,s,a,u,Wi)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(h,Wi.x),v.addScaledVector(A,Wi.y),v.addScaledVector(g,Wi.z),v)}static isFrontFacing(t,s,a,u){return di.subVectors(a,s),Gi.subVectors(t,s),di.cross(Gi).dot(u)<0}set(t,s,a){return this.a.copy(t),this.b.copy(s),this.c.copy(a),this}setFromPointsAndIndices(t,s,a,u){return this.a.copy(t[s]),this.b.copy(t[a]),this.c.copy(t[u]),this}setFromAttributeAndIndices(t,s,a,u){return this.a.fromBufferAttribute(t,s),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,u),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),di.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,s){return bi.getBarycoord(t,this.a,this.b,this.c,s)}getInterpolation(t,s,a,u,h){return bi.getInterpolation(t,this.a,this.b,this.c,s,a,u,h)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,s){const a=this.a,u=this.b,h=this.c;let A,g;bs.subVectors(u,a),Fs.subVectors(h,a),Rl.subVectors(t,a);const v=bs.dot(Rl),x=Fs.dot(Rl);if(v<=0&&x<=0)return s.copy(a);Cl.subVectors(t,u);const M=bs.dot(Cl),E=Fs.dot(Cl);if(M>=0&&E<=M)return s.copy(u);const w=v*E-M*x;if(w<=0&&v>=0&&M<=0)return A=v/(v-M),s.copy(a).addScaledVector(bs,A);Ul.subVectors(t,h);const C=bs.dot(Ul),P=Fs.dot(Ul);if(P>=0&&C<=P)return s.copy(h);const I=C*x-v*P;if(I<=0&&x>=0&&P<=0)return g=x/(x-P),s.copy(a).addScaledVector(Fs,g);const R=M*P-C*E;if(R<=0&&E-M>=0&&C-P>=0)return Hh.subVectors(h,u),g=(E-M)/(E-M+(C-P)),s.copy(u).addScaledVector(Hh,g);const T=1/(R+I+w);return A=I*T,g=w*T,s.copy(a).addScaledVector(bs,A).addScaledVector(Fs,g)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Na={h:0,s:0,l:0};function bl(o,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?o+(t-o)*6*s:s<1/2?t:s<2/3?o+(t-o)*6*(2/3-s):o}class zt{constructor(t,s,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,s,a)}set(t,s,a){if(s===void 0&&a===void 0){const u=t;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(t,s,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,s=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,s),this}setRGB(t,s,a,u=Wt.workingColorSpace){return this.r=t,this.g=s,this.b=a,Wt.toWorkingColorSpace(this,u),this}setHSL(t,s,a,u=Wt.workingColorSpace){if(t=Gc(t,1),s=Pn(s,0,1),a=Pn(a,0,1),s===0)this.r=this.g=this.b=a;else{const h=a<=.5?a*(1+s):a+s-a*s,A=2*a-h;this.r=bl(A,h,t+1/3),this.g=bl(A,h,t),this.b=bl(A,h,t-1/3)}return Wt.toWorkingColorSpace(this,u),this}setStyle(t,s=pi){function a(h){h!==void 0&&parseFloat(h)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(t)){let h;const A=u[1],g=u[2];switch(A){case"rgb":case"rgba":if(h=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return a(h[4]),this.setRGB(Math.min(255,parseInt(h[1],10))/255,Math.min(255,parseInt(h[2],10))/255,Math.min(255,parseInt(h[3],10))/255,s);if(h=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return a(h[4]),this.setRGB(Math.min(100,parseInt(h[1],10))/100,Math.min(100,parseInt(h[2],10))/100,Math.min(100,parseInt(h[3],10))/100,s);break;case"hsl":case"hsla":if(h=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return a(h[4]),this.setHSL(parseFloat(h[1])/360,parseFloat(h[2])/100,parseFloat(h[3])/100,s);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(t)){const h=u[1],A=h.length;if(A===3)return this.setRGB(parseInt(h.charAt(0),16)/15,parseInt(h.charAt(1),16)/15,parseInt(h.charAt(2),16)/15,s);if(A===6)return this.setHex(parseInt(h,16),s);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,s);return this}setColorName(t,s=pi){const a=dp[t.toLowerCase()];return a!==void 0?this.setHex(a,s):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}copyLinearToSRGB(t){return this.r=gl(t.r),this.g=gl(t.g),this.b=gl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Wt.fromWorkingColorSpace(Cn.copy(this),t),Math.round(Pn(Cn.r*255,0,255))*65536+Math.round(Pn(Cn.g*255,0,255))*256+Math.round(Pn(Cn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,s=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Cn.copy(this),s);const a=Cn.r,u=Cn.g,h=Cn.b,A=Math.max(a,u,h),g=Math.min(a,u,h);let v,x;const M=(g+A)/2;if(g===A)v=0,x=0;else{const E=A-g;switch(x=M<=.5?E/(A+g):E/(2-A-g),A){case a:v=(u-h)/E+(u<h?6:0);break;case u:v=(h-a)/E+2;break;case h:v=(a-u)/E+4;break}v/=6}return t.h=v,t.s=x,t.l=M,t}getRGB(t,s=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Cn.copy(this),s),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=pi){Wt.fromWorkingColorSpace(Cn.copy(this),t);const s=Cn.r,a=Cn.g,u=Cn.b;return t!==pi?`color(${t} ${s.toFixed(3)} ${a.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(s*255)},${Math.round(a*255)},${Math.round(u*255)})`}offsetHSL(t,s,a){return this.getHSL(fr),this.setHSL(fr.h+t,fr.s+s,fr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,s){return this.r=t.r+s.r,this.g=t.g+s.g,this.b=t.b+s.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,s){return this.r+=(t.r-this.r)*s,this.g+=(t.g-this.g)*s,this.b+=(t.b-this.b)*s,this}lerpColors(t,s,a){return this.r=t.r+(s.r-t.r)*a,this.g=t.g+(s.g-t.g)*a,this.b=t.b+(s.b-t.b)*a,this}lerpHSL(t,s){this.getHSL(fr),t.getHSL(Na);const a=Io(fr.h,Na.h,s),u=Io(fr.s,Na.s,s),h=Io(fr.l,Na.l,s);return this.setHSL(a,u,h),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const s=this.r,a=this.g,u=this.b,h=t.elements;return this.r=h[0]*s+h[3]*a+h[6]*u,this.g=h[1]*s+h[4]*a+h[7]*u,this.b=h[2]*s+h[5]*a+h[8]*u,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,s=0){return this.r=t[s],this.g=t[s+1],this.b=t[s+2],this}toArray(t=[],s=0){return t[s]=this.r,t[s+1]=this.g,t[s+2]=this.b,t}fromBufferAttribute(t,s){return this.r=t.getX(s),this.g=t.getY(s),this.b=t.getZ(s),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new zt;zt.NAMES=dp;let r4=0;class Xo extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r4++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Hs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=$l,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=i0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const s in t){const a=t[s];if(a===void 0){console.warn(`THREE.Material: parameter '${s}' has value of undefined.`);continue}const u=this[s];if(u===void 0){console.warn(`THREE.Material: '${s}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(a):u&&u.isVector3&&a&&a.isVector3?u.copy(a):this[s]=a}}toJSON(t){const s=t===void 0||typeof t=="string";s&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(a.blending=this.blending),this.side!==vr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==jl&&(a.blendSrc=this.blendSrc),this.blendDst!==$l&&(a.blendDst=this.blendDst),this.blendEquation!==qr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==i0&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function u(h){const A=[];for(const g in h){const v=h[g];delete v.metadata,A.push(v)}return A}if(s){const h=u(t.textures),A=u(t.images);h.length>0&&(a.textures=h),A.length>0&&(a.images=A)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const s=t.clippingPlanes;let a=null;if(s!==null){const u=s.length;a=new Array(u);for(let h=0;h!==u;++h)a[h]=s[h].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class pp extends Xo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new le,La=new Mt;class Fi{constructor(t,s,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=s,this.count=t!==void 0?t.length/s:0,this.normalized=a,this.usage=bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return lp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,s){this.updateRanges.push({start:t,count:s})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,s,a){t*=this.itemSize,a*=s.itemSize;for(let u=0,h=this.itemSize;u<h;u++)this.array[t+u]=s.array[a+u];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let s=0,a=this.count;s<a;s++)La.fromBufferAttribute(this,s),La.applyMatrix3(t),this.setXY(s,La.x,La.y);else if(this.itemSize===3)for(let s=0,a=this.count;s<a;s++)hn.fromBufferAttribute(this,s),hn.applyMatrix3(t),this.setXYZ(s,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let s=0,a=this.count;s<a;s++)hn.fromBufferAttribute(this,s),hn.applyMatrix4(t),this.setXYZ(s,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let s=0,a=this.count;s<a;s++)hn.fromBufferAttribute(this,s),hn.applyNormalMatrix(t),this.setXYZ(s,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let s=0,a=this.count;s<a;s++)hn.fromBufferAttribute(this,s),hn.transformDirection(t),this.setXYZ(s,hn.x,hn.y,hn.z);return this}set(t,s=0){return this.array.set(t,s),this}getComponent(t,s){let a=this.array[t*this.itemSize+s];return this.normalized&&(a=Ws(a,this.array)),a}setComponent(t,s,a){return this.normalized&&(a=bn(a,this.array)),this.array[t*this.itemSize+s]=a,this}getX(t){let s=this.array[t*this.itemSize];return this.normalized&&(s=Ws(s,this.array)),s}setX(t,s){return this.normalized&&(s=bn(s,this.array)),this.array[t*this.itemSize]=s,this}getY(t){let s=this.array[t*this.itemSize+1];return this.normalized&&(s=Ws(s,this.array)),s}setY(t,s){return this.normalized&&(s=bn(s,this.array)),this.array[t*this.itemSize+1]=s,this}getZ(t){let s=this.array[t*this.itemSize+2];return this.normalized&&(s=Ws(s,this.array)),s}setZ(t,s){return this.normalized&&(s=bn(s,this.array)),this.array[t*this.itemSize+2]=s,this}getW(t){let s=this.array[t*this.itemSize+3];return this.normalized&&(s=Ws(s,this.array)),s}setW(t,s){return this.normalized&&(s=bn(s,this.array)),this.array[t*this.itemSize+3]=s,this}setXY(t,s,a){return t*=this.itemSize,this.normalized&&(s=bn(s,this.array),a=bn(a,this.array)),this.array[t+0]=s,this.array[t+1]=a,this}setXYZ(t,s,a,u){return t*=this.itemSize,this.normalized&&(s=bn(s,this.array),a=bn(a,this.array),u=bn(u,this.array)),this.array[t+0]=s,this.array[t+1]=a,this.array[t+2]=u,this}setXYZW(t,s,a,u,h){return t*=this.itemSize,this.normalized&&(s=bn(s,this.array),a=bn(a,this.array),u=bn(u,this.array),h=bn(h,this.array)),this.array[t+0]=s,this.array[t+1]=a,this.array[t+2]=u,this.array[t+3]=h,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bh&&(t.usage=this.usage),t}}class mp extends Fi{constructor(t,s,a){super(new Uint16Array(t),s,a)}}class Ap extends Fi{constructor(t,s,a){super(new Uint32Array(t),s,a)}}class $i extends Fi{constructor(t,s,a){super(new Float32Array(t),s,a)}}let s4=0;const ii=new dn,Fl=new kn,Ps=new le,Yn=new Wo,Po=new Wo,xn=new le;class Ki extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s4++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ap(t)?Ap:mp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,s){return this.attributes[t]=s,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,s,a=0){this.groups.push({start:t,count:s,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,s){this.drawRange.start=t,this.drawRange.count=s}applyMatrix4(t){const s=this.attributes.position;s!==void 0&&(s.applyMatrix4(t),s.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const h=new xt().getNormalMatrix(t);a.applyNormalMatrix(h),a.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(t),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,s,a){return ii.makeTranslation(t,s,a),this.applyMatrix4(ii),this}scale(t,s,a){return ii.makeScale(t,s,a),this.applyMatrix4(ii),this}lookAt(t){return Fl.lookAt(t),Fl.updateMatrix(),this.applyMatrix4(Fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const s=[];for(let a=0,u=t.length;a<u;a++){const h=t[a];s.push(h.x,h.y,h.z||0)}return this.setAttribute("position",new $i(s,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,s=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),s)for(let a=0,u=s.length;a<u;a++){const h=s[a];Yn.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new p0);const t=this.attributes.position,s=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(t){const a=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),s)for(let h=0,A=s.length;h<A;h++){const g=s[h];Po.setFromBufferAttribute(g),this.morphTargetsRelative?(xn.addVectors(Yn.min,Po.min),Yn.expandByPoint(xn),xn.addVectors(Yn.max,Po.max),Yn.expandByPoint(xn)):(Yn.expandByPoint(Po.min),Yn.expandByPoint(Po.max))}Yn.getCenter(a);let u=0;for(let h=0,A=t.count;h<A;h++)xn.fromBufferAttribute(t,h),u=Math.max(u,a.distanceToSquared(xn));if(s)for(let h=0,A=s.length;h<A;h++){const g=s[h],v=this.morphTargetsRelative;for(let x=0,M=g.count;x<M;x++)xn.fromBufferAttribute(g,x),v&&(Ps.fromBufferAttribute(t,x),xn.add(Ps)),u=Math.max(u,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,s=this.attributes;if(t===null||s.position===void 0||s.normal===void 0||s.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=s.position,u=s.normal,h=s.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*a.count),4));const A=this.getAttribute("tangent"),g=[],v=[];for(let ae=0;ae<a.count;ae++)g[ae]=new le,v[ae]=new le;const x=new le,M=new le,E=new le,w=new Mt,C=new Mt,P=new Mt,I=new le,R=new le;function T(ae,O,k){x.fromBufferAttribute(a,ae),M.fromBufferAttribute(a,O),E.fromBufferAttribute(a,k),w.fromBufferAttribute(h,ae),C.fromBufferAttribute(h,O),P.fromBufferAttribute(h,k),M.sub(x),E.sub(x),C.sub(w),P.sub(w);const j=1/(C.x*P.y-P.x*C.y);isFinite(j)&&(I.copy(M).multiplyScalar(P.y).addScaledVector(E,-C.y).multiplyScalar(j),R.copy(E).multiplyScalar(C.x).addScaledVector(M,-P.x).multiplyScalar(j),g[ae].add(I),g[O].add(I),g[k].add(I),v[ae].add(R),v[O].add(R),v[k].add(R))}let W=this.groups;W.length===0&&(W=[{start:0,count:t.count}]);for(let ae=0,O=W.length;ae<O;++ae){const k=W[ae],j=k.start,me=k.count;for(let he=j,Me=j+me;he<Me;he+=3)T(t.getX(he+0),t.getX(he+1),t.getX(he+2))}const V=new le,H=new le,se=new le,J=new le;function Y(ae){se.fromBufferAttribute(u,ae),J.copy(se);const O=g[ae];V.copy(O),V.sub(se.multiplyScalar(se.dot(O))).normalize(),H.crossVectors(J,O);const j=H.dot(v[ae])<0?-1:1;A.setXYZW(ae,V.x,V.y,V.z,j)}for(let ae=0,O=W.length;ae<O;++ae){const k=W[ae],j=k.start,me=k.count;for(let he=j,Me=j+me;he<Me;he+=3)Y(t.getX(he+0)),Y(t.getX(he+1)),Y(t.getX(he+2))}}computeVertexNormals(){const t=this.index,s=this.getAttribute("position");if(s!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Fi(new Float32Array(s.count*3),3),this.setAttribute("normal",a);else for(let w=0,C=a.count;w<C;w++)a.setXYZ(w,0,0,0);const u=new le,h=new le,A=new le,g=new le,v=new le,x=new le,M=new le,E=new le;if(t)for(let w=0,C=t.count;w<C;w+=3){const P=t.getX(w+0),I=t.getX(w+1),R=t.getX(w+2);u.fromBufferAttribute(s,P),h.fromBufferAttribute(s,I),A.fromBufferAttribute(s,R),M.subVectors(A,h),E.subVectors(u,h),M.cross(E),g.fromBufferAttribute(a,P),v.fromBufferAttribute(a,I),x.fromBufferAttribute(a,R),g.add(M),v.add(M),x.add(M),a.setXYZ(P,g.x,g.y,g.z),a.setXYZ(I,v.x,v.y,v.z),a.setXYZ(R,x.x,x.y,x.z)}else for(let w=0,C=s.count;w<C;w+=3)u.fromBufferAttribute(s,w+0),h.fromBufferAttribute(s,w+1),A.fromBufferAttribute(s,w+2),M.subVectors(A,h),E.subVectors(u,h),M.cross(E),a.setXYZ(w+0,M.x,M.y,M.z),a.setXYZ(w+1,M.x,M.y,M.z),a.setXYZ(w+2,M.x,M.y,M.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let s=0,a=t.count;s<a;s++)xn.fromBufferAttribute(t,s),xn.normalize(),t.setXYZ(s,xn.x,xn.y,xn.z)}toNonIndexed(){function t(g,v){const x=g.array,M=g.itemSize,E=g.normalized,w=new x.constructor(v.length*M);let C=0,P=0;for(let I=0,R=v.length;I<R;I++){g.isInterleavedBufferAttribute?C=v[I]*g.data.stride+g.offset:C=v[I]*M;for(let T=0;T<M;T++)w[P++]=x[C++]}return new Fi(w,M,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const s=new Ki,a=this.index.array,u=this.attributes;for(const g in u){const v=u[g],x=t(v,a);s.setAttribute(g,x)}const h=this.morphAttributes;for(const g in h){const v=[],x=h[g];for(let M=0,E=x.length;M<E;M++){const w=x[M],C=t(w,a);v.push(C)}s.morphAttributes[g]=v}s.morphTargetsRelative=this.morphTargetsRelative;const A=this.groups;for(let g=0,v=A.length;g<v;g++){const x=A[g];s.addGroup(x.start,x.count,x.materialIndex)}return s}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const x in v)v[x]!==void 0&&(t[x]=v[x]);return t}t.data={attributes:{}};const s=this.index;s!==null&&(t.data.index={type:s.array.constructor.name,array:Array.prototype.slice.call(s.array)});const a=this.attributes;for(const v in a){const x=a[v];t.data.attributes[v]=x.toJSON(t.data)}const u={};let h=!1;for(const v in this.morphAttributes){const x=this.morphAttributes[v],M=[];for(let E=0,w=x.length;E<w;E++){const C=x[E];M.push(C.toJSON(t.data))}M.length>0&&(u[v]=M,h=!0)}h&&(t.data.morphAttributes=u,t.data.morphTargetsRelative=this.morphTargetsRelative);const A=this.groups;A.length>0&&(t.data.groups=JSON.parse(JSON.stringify(A)));const g=this.boundingSphere;return g!==null&&(t.data.boundingSphere={center:g.center.toArray(),radius:g.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const s={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(s));const u=t.attributes;for(const x in u){const M=u[x];this.setAttribute(x,M.clone(s))}const h=t.morphAttributes;for(const x in h){const M=[],E=h[x];for(let w=0,C=E.length;w<C;w++)M.push(E[w].clone(s));this.morphAttributes[x]=M}this.morphTargetsRelative=t.morphTargetsRelative;const A=t.groups;for(let x=0,M=A.length;x<M;x++){const E=A[x];this.addGroup(E.start,E.count,E.materialIndex)}const g=t.boundingBox;g!==null&&(this.boundingBox=g.clone());const v=t.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new dn,Hr=new fp,Ia=new p0,Yh=new le,Ns=new le,Ls=new le,Is=new le,Pl=new le,Da=new le,Ba=new Mt,ka=new Mt,Va=new Mt,Jh=new le,jh=new le,$h=new le,Oa=new le,za=new le;class ji extends kn{constructor(t=new Ki,s=new pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=s,this.updateMorphTargets()}copy(t,s){return super.copy(t,s),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const s=this.geometry.morphAttributes,a=Object.keys(s);if(a.length>0){const u=s[a[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let h=0,A=u.length;h<A;h++){const g=u[h].name||String(h);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=h}}}}getVertexPosition(t,s){const a=this.geometry,u=a.attributes.position,h=a.morphAttributes.position,A=a.morphTargetsRelative;s.fromBufferAttribute(u,t);const g=this.morphTargetInfluences;if(h&&g){Da.set(0,0,0);for(let v=0,x=h.length;v<x;v++){const M=g[v],E=h[v];M!==0&&(Pl.fromBufferAttribute(E,t),A?Da.addScaledVector(Pl,M):Da.addScaledVector(Pl.sub(s),M))}s.add(Da)}return s}raycast(t,s){const a=this.geometry,u=this.material,h=this.matrixWorld;u!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ia.copy(a.boundingSphere),Ia.applyMatrix4(h),Hr.copy(t.ray).recast(t.near),!(Ia.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ia,Yh)===null||Hr.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(Zh.copy(h).invert(),Hr.copy(t.ray).applyMatrix4(Zh),!(a.boundingBox!==null&&Hr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,s,Hr)))}_computeIntersections(t,s,a){let u;const h=this.geometry,A=this.material,g=h.index,v=h.attributes.position,x=h.attributes.uv,M=h.attributes.uv1,E=h.attributes.normal,w=h.groups,C=h.drawRange;if(g!==null)if(Array.isArray(A))for(let P=0,I=w.length;P<I;P++){const R=w[P],T=A[R.materialIndex],W=Math.max(R.start,C.start),V=Math.min(g.count,Math.min(R.start+R.count,C.start+C.count));for(let H=W,se=V;H<se;H+=3){const J=g.getX(H),Y=g.getX(H+1),ae=g.getX(H+2);u=Ga(this,T,t,a,x,M,E,J,Y,ae),u&&(u.faceIndex=Math.floor(H/3),u.face.materialIndex=R.materialIndex,s.push(u))}}else{const P=Math.max(0,C.start),I=Math.min(g.count,C.start+C.count);for(let R=P,T=I;R<T;R+=3){const W=g.getX(R),V=g.getX(R+1),H=g.getX(R+2);u=Ga(this,A,t,a,x,M,E,W,V,H),u&&(u.faceIndex=Math.floor(R/3),s.push(u))}}else if(v!==void 0)if(Array.isArray(A))for(let P=0,I=w.length;P<I;P++){const R=w[P],T=A[R.materialIndex],W=Math.max(R.start,C.start),V=Math.min(v.count,Math.min(R.start+R.count,C.start+C.count));for(let H=W,se=V;H<se;H+=3){const J=H,Y=H+1,ae=H+2;u=Ga(this,T,t,a,x,M,E,J,Y,ae),u&&(u.faceIndex=Math.floor(H/3),u.face.materialIndex=R.materialIndex,s.push(u))}}else{const P=Math.max(0,C.start),I=Math.min(v.count,C.start+C.count);for(let R=P,T=I;R<T;R+=3){const W=R,V=R+1,H=R+2;u=Ga(this,A,t,a,x,M,E,W,V,H),u&&(u.faceIndex=Math.floor(R/3),s.push(u))}}}}function o4(o,t,s,a,u,h,A,g){let v;if(t.side===Bn?v=a.intersectTriangle(A,h,u,!0,g):v=a.intersectTriangle(u,h,A,t.side===vr,g),v===null)return null;za.copy(g),za.applyMatrix4(o.matrixWorld);const x=s.ray.origin.distanceTo(za);return x<s.near||x>s.far?null:{distance:x,point:za.clone(),object:o}}function Ga(o,t,s,a,u,h,A,g,v,x){o.getVertexPosition(g,Ns),o.getVertexPosition(v,Ls),o.getVertexPosition(x,Is);const M=o4(o,t,s,a,Ns,Ls,Is,Oa);if(M){u&&(Ba.fromBufferAttribute(u,g),ka.fromBufferAttribute(u,v),Va.fromBufferAttribute(u,x),M.uv=bi.getInterpolation(Oa,Ns,Ls,Is,Ba,ka,Va,new Mt)),h&&(Ba.fromBufferAttribute(h,g),ka.fromBufferAttribute(h,v),Va.fromBufferAttribute(h,x),M.uv1=bi.getInterpolation(Oa,Ns,Ls,Is,Ba,ka,Va,new Mt)),A&&(Jh.fromBufferAttribute(A,g),jh.fromBufferAttribute(A,v),$h.fromBufferAttribute(A,x),M.normal=bi.getInterpolation(Oa,Ns,Ls,Is,Jh,jh,$h,new le),M.normal.dot(a.direction)>0&&M.normal.multiplyScalar(-1));const E={a:g,b:v,c:x,normal:new le,materialIndex:0};bi.getNormal(Ns,Ls,Is,E.normal),M.face=E}return M}class Ho extends Ki{constructor(t=1,s=1,a=1,u=1,h=1,A=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:s,depth:a,widthSegments:u,heightSegments:h,depthSegments:A};const g=this;u=Math.floor(u),h=Math.floor(h),A=Math.floor(A);const v=[],x=[],M=[],E=[];let w=0,C=0;P("z","y","x",-1,-1,a,s,t,A,h,0),P("z","y","x",1,-1,a,s,-t,A,h,1),P("x","z","y",1,1,t,a,s,u,A,2),P("x","z","y",1,-1,t,a,-s,u,A,3),P("x","y","z",1,-1,t,s,a,u,h,4),P("x","y","z",-1,-1,t,s,-a,u,h,5),this.setIndex(v),this.setAttribute("position",new $i(x,3)),this.setAttribute("normal",new $i(M,3)),this.setAttribute("uv",new $i(E,2));function P(I,R,T,W,V,H,se,J,Y,ae,O){const k=H/Y,j=se/ae,me=H/2,he=se/2,Me=J/2,Se=Y+1,ve=ae+1;let Ee=0,de=0;const We=new le;for(let $e=0;$e<ve;$e++){const Ve=$e*j-he;for(let mt=0;mt<Se;mt++){const Ct=mt*k-me;We[I]=Ct*W,We[R]=Ve*V,We[T]=Me,x.push(We.x,We.y,We.z),We[I]=0,We[R]=0,We[T]=J>0?1:-1,M.push(We.x,We.y,We.z),E.push(mt/Y),E.push(1-$e/ae),Ee+=1}}for(let $e=0;$e<ae;$e++)for(let Ve=0;Ve<Y;Ve++){const mt=w+Ve+Se*$e,Ct=w+Ve+Se*($e+1),pe=w+(Ve+1)+Se*($e+1),Re=w+(Ve+1)+Se*$e;v.push(mt,Ct,Re),v.push(Ct,pe,Re),de+=6}g.addGroup(C,de,O),C+=de,w+=Ee}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(o){const t={};for(const s in o){t[s]={};for(const a in o[s]){const u=o[s][a];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[s][a]=null):t[s][a]=u.clone():Array.isArray(u)?t[s][a]=u.slice():t[s][a]=u}}return t}function Fn(o){const t={};for(let s=0;s<o.length;s++){const a=Ks(o[s]);for(const u in a)t[u]=a[u]}return t}function a4(o){const t=[];for(let s=0;s<o.length;s++)t.push(o[s].clone());return t}function gp(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const l4={clone:Ks,merge:Fn};var c4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Xo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c4,this.fragmentShader=u4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=a4(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const s=super.toJSON(t);s.glslVersion=this.glslVersion,s.uniforms={};for(const u in this.uniforms){const A=this.uniforms[u].value;A&&A.isTexture?s.uniforms[u]={type:"t",value:A.toJSON(t).uuid}:A&&A.isColor?s.uniforms[u]={type:"c",value:A.getHex()}:A&&A.isVector2?s.uniforms[u]={type:"v2",value:A.toArray()}:A&&A.isVector3?s.uniforms[u]={type:"v3",value:A.toArray()}:A&&A.isVector4?s.uniforms[u]={type:"v4",value:A.toArray()}:A&&A.isMatrix3?s.uniforms[u]={type:"m3",value:A.toArray()}:A&&A.isMatrix4?s.uniforms[u]={type:"m4",value:A.toArray()}:s.uniforms[u]={value:A}}Object.keys(this.defines).length>0&&(s.defines=this.defines),s.vertexShader=this.vertexShader,s.fragmentShader=this.fragmentShader,s.lights=this.lights,s.clipping=this.clipping;const a={};for(const u in this.extensions)this.extensions[u]===!0&&(a[u]=!0);return Object.keys(a).length>0&&(s.extensions=a),s}}class _p extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ji}copy(t,s){return super.copy(t,s),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,s){super.updateWorldMatrix(t,s),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new le,qh=new Mt,Qh=new Mt;class ri extends _p{constructor(t=50,s=1,a=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=u,this.focus=10,this.aspect=s,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,s){return super.copy(t,s),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const s=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(s),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,s,a){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,s){return this.getViewBounds(t,qh,Qh),s.subVectors(Qh,qh)}setViewOffset(t,s,a,u,h,A){this.aspect=t/s,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=s,this.view.offsetX=a,this.view.offsetY=u,this.view.width=h,this.view.height=A,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let s=t*Math.tan(Lo*.5*this.fov)/this.zoom,a=2*s,u=this.aspect*a,h=-.5*u;const A=this.view;if(this.view!==null&&this.view.enabled){const v=A.fullWidth,x=A.fullHeight;h+=A.offsetX*u/v,s-=A.offsetY*a/x,u*=A.width/v,a*=A.height/x}const g=this.filmOffset;g!==0&&(h+=t*g/this.getFilmWidth()),this.projectionMatrix.makePerspective(h,h+u,s,s-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const s=super.toJSON(t);return s.object.fov=this.fov,s.object.zoom=this.zoom,s.object.near=this.near,s.object.far=this.far,s.object.focus=this.focus,s.object.aspect=this.aspect,this.view!==null&&(s.object.view=Object.assign({},this.view)),s.object.filmGauge=this.filmGauge,s.object.filmOffset=this.filmOffset,s}}const Ds=-90,Bs=1;class f4 extends kn{constructor(t,s,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new ri(Ds,Bs,t,s);u.layers=this.layers,this.add(u);const h=new ri(Ds,Bs,t,s);h.layers=this.layers,this.add(h);const A=new ri(Ds,Bs,t,s);A.layers=this.layers,this.add(A);const g=new ri(Ds,Bs,t,s);g.layers=this.layers,this.add(g);const v=new ri(Ds,Bs,t,s);v.layers=this.layers,this.add(v);const x=new ri(Ds,Bs,t,s);x.layers=this.layers,this.add(x)}updateCoordinateSystem(){const t=this.coordinateSystem,s=this.children.concat(),[a,u,h,A,g,v]=s;for(const x of s)this.remove(x);if(t===Ji)a.up.set(0,1,0),a.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),h.up.set(0,0,-1),h.lookAt(0,1,0),A.up.set(0,0,1),A.lookAt(0,-1,0),g.up.set(0,1,0),g.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(t===a0)a.up.set(0,-1,0),a.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),h.up.set(0,0,1),h.lookAt(0,1,0),A.up.set(0,0,-1),A.lookAt(0,-1,0),g.up.set(0,-1,0),g.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const x of s)this.add(x),x.updateMatrixWorld()}update(t,s){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:u}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[h,A,g,v,x,M]=this.children,E=t.getRenderTarget(),w=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),P=t.xr.enabled;t.xr.enabled=!1;const I=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,u),t.render(s,h),t.setRenderTarget(a,1,u),t.render(s,A),t.setRenderTarget(a,2,u),t.render(s,g),t.setRenderTarget(a,3,u),t.render(s,v),t.setRenderTarget(a,4,u),t.render(s,x),a.texture.generateMipmaps=I,t.setRenderTarget(a,5,u),t.render(s,M),t.setRenderTarget(E,w,C),t.xr.enabled=P,a.texture.needsPMREMUpdate=!0}}class vp extends Nn{constructor(t,s,a,u,h,A,g,v,x,M){t=t!==void 0?t:[],s=s!==void 0?s:js,super(t,s,a,u,h,A,g,v,x,M),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class h4 extends rs{constructor(t=1,s={}){super(t,t,s),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},u=[a,a,a,a,a,a];this.texture=new vp(u,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:mi}fromEquirectangularTexture(t,s){this.texture.type=s.type,this.texture.colorSpace=s.colorSpace,this.texture.generateMipmaps=s.generateMipmaps,this.texture.minFilter=s.minFilter,this.texture.magFilter=s.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new Ho(5,5,5),h=new yr({name:"CubemapFromEquirect",uniforms:Ks(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Bn,blending:gr});h.uniforms.tEquirect.value=s;const A=new ji(u,h),g=s.minFilter;return s.minFilter===ts&&(s.minFilter=mi),new f4(1,10,this).update(t,A),s.minFilter=g,A.geometry.dispose(),A.material.dispose(),this}clear(t,s,a,u){const h=t.getRenderTarget();for(let A=0;A<6;A++)t.setRenderTarget(this,A),t.clear(s,a,u);t.setRenderTarget(h)}}const Nl=new le,d4=new le,p4=new xt;class jr{constructor(t=new le(1,0,0),s=0){this.isPlane=!0,this.normal=t,this.constant=s}set(t,s){return this.normal.copy(t),this.constant=s,this}setComponents(t,s,a,u){return this.normal.set(t,s,a),this.constant=u,this}setFromNormalAndCoplanarPoint(t,s){return this.normal.copy(t),this.constant=-s.dot(this.normal),this}setFromCoplanarPoints(t,s,a){const u=Nl.subVectors(a,s).cross(d4.subVectors(t,s)).normalize();return this.setFromNormalAndCoplanarPoint(u,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,s){return s.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,s){const a=t.delta(Nl),u=this.normal.dot(a);if(u===0)return this.distanceToPoint(t.start)===0?s.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/u;return h<0||h>1?null:s.copy(t.start).addScaledVector(a,h)}intersectsLine(t){const s=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return s<0&&a>0||a<0&&s>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,s){const a=s||p4.getNormalMatrix(t),u=this.coplanarPoint(Nl).applyMatrix4(t),h=this.normal.applyMatrix3(a).normalize();return this.constant=-u.dot(h),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new p0,Wa=new le;class yp{constructor(t=new jr,s=new jr,a=new jr,u=new jr,h=new jr,A=new jr){this.planes=[t,s,a,u,h,A]}set(t,s,a,u,h,A){const g=this.planes;return g[0].copy(t),g[1].copy(s),g[2].copy(a),g[3].copy(u),g[4].copy(h),g[5].copy(A),this}copy(t){const s=this.planes;for(let a=0;a<6;a++)s[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,s=Ji){const a=this.planes,u=t.elements,h=u[0],A=u[1],g=u[2],v=u[3],x=u[4],M=u[5],E=u[6],w=u[7],C=u[8],P=u[9],I=u[10],R=u[11],T=u[12],W=u[13],V=u[14],H=u[15];if(a[0].setComponents(v-h,w-x,R-C,H-T).normalize(),a[1].setComponents(v+h,w+x,R+C,H+T).normalize(),a[2].setComponents(v+A,w+M,R+P,H+W).normalize(),a[3].setComponents(v-A,w-M,R-P,H-W).normalize(),a[4].setComponents(v-g,w-E,R-I,H-V).normalize(),s===Ji)a[5].setComponents(v+g,w+E,R+I,H+V).normalize();else if(s===a0)a[5].setComponents(g,E,I,V).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+s);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const s=t.geometry;s.boundingSphere===null&&s.computeBoundingSphere(),Zr.copy(s.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(t){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(t){const s=this.planes,a=t.center,u=-t.radius;for(let h=0;h<6;h++)if(s[h].distanceToPoint(a)<u)return!1;return!0}intersectsBox(t){const s=this.planes;for(let a=0;a<6;a++){const u=s[a];if(Wa.x=u.normal.x>0?t.max.x:t.min.x,Wa.y=u.normal.y>0?t.max.y:t.min.y,Wa.z=u.normal.z>0?t.max.z:t.min.z,u.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){const s=this.planes;for(let a=0;a<6;a++)if(s[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xp(){let o=null,t=!1,s=null,a=null;function u(h,A){s(h,A),a=o.requestAnimationFrame(u)}return{start:function(){t!==!0&&s!==null&&(a=o.requestAnimationFrame(u),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(h){s=h},setContext:function(h){o=h}}}function m4(o){const t=new WeakMap;function s(g,v){const x=g.array,M=g.usage,E=x.byteLength,w=o.createBuffer();o.bindBuffer(v,w),o.bufferData(v,x,M),g.onUploadCallback();let C;if(x instanceof Float32Array)C=o.FLOAT;else if(x instanceof Uint16Array)g.isFloat16BufferAttribute?C=o.HALF_FLOAT:C=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)C=o.SHORT;else if(x instanceof Uint32Array)C=o.UNSIGNED_INT;else if(x instanceof Int32Array)C=o.INT;else if(x instanceof Int8Array)C=o.BYTE;else if(x instanceof Uint8Array)C=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)C=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:w,type:C,bytesPerElement:x.BYTES_PER_ELEMENT,version:g.version,size:E}}function a(g,v,x){const M=v.array,E=v._updateRange,w=v.updateRanges;if(o.bindBuffer(x,g),E.count===-1&&w.length===0&&o.bufferSubData(x,0,M),w.length!==0){for(let C=0,P=w.length;C<P;C++){const I=w[C];o.bufferSubData(x,I.start*M.BYTES_PER_ELEMENT,M,I.start,I.count)}v.clearUpdateRanges()}E.count!==-1&&(o.bufferSubData(x,E.offset*M.BYTES_PER_ELEMENT,M,E.offset,E.count),E.count=-1),v.onUploadCallback()}function u(g){return g.isInterleavedBufferAttribute&&(g=g.data),t.get(g)}function h(g){g.isInterleavedBufferAttribute&&(g=g.data);const v=t.get(g);v&&(o.deleteBuffer(v.buffer),t.delete(g))}function A(g,v){if(g.isGLBufferAttribute){const M=t.get(g);(!M||M.version<g.version)&&t.set(g,{buffer:g.buffer,type:g.type,bytesPerElement:g.elementSize,version:g.version});return}g.isInterleavedBufferAttribute&&(g=g.data);const x=t.get(g);if(x===void 0)t.set(g,s(g,v));else if(x.version<g.version){if(x.size!==g.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(x.buffer,g,v),x.version=g.version}}return{get:u,remove:h,update:A}}class m0 extends Ki{constructor(t=1,s=1,a=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:s,widthSegments:a,heightSegments:u};const h=t/2,A=s/2,g=Math.floor(a),v=Math.floor(u),x=g+1,M=v+1,E=t/g,w=s/v,C=[],P=[],I=[],R=[];for(let T=0;T<M;T++){const W=T*w-A;for(let V=0;V<x;V++){const H=V*E-h;P.push(H,-W,0),I.push(0,0,1),R.push(V/g),R.push(1-T/v)}}for(let T=0;T<v;T++)for(let W=0;W<g;W++){const V=W+x*T,H=W+x*(T+1),se=W+1+x*(T+1),J=W+1+x*T;C.push(V,H,J),C.push(H,se,J)}this.setIndex(C),this.setAttribute("position",new $i(P,3)),this.setAttribute("normal",new $i(I,3)),this.setAttribute("uv",new $i(R,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new m0(t.width,t.height,t.widthSegments,t.heightSegments)}}var A4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E4=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C4=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U4=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b4=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F4=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V4=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O4=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z4=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z4="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y4=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,J4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,j4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$4=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_3=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v3=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y3=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x3=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Q3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,SC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,EC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,YC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:A4,alphahash_pars_fragment:g4,alphamap_fragment:_4,alphamap_pars_fragment:v4,alphatest_fragment:y4,alphatest_pars_fragment:x4,aomap_fragment:M4,aomap_pars_fragment:S4,batching_pars_vertex:E4,batching_vertex:w4,begin_vertex:T4,beginnormal_vertex:R4,bsdfs:C4,iridescence_fragment:U4,bumpmap_pars_fragment:b4,clipping_planes_fragment:F4,clipping_planes_pars_fragment:P4,clipping_planes_pars_vertex:N4,clipping_planes_vertex:L4,color_fragment:I4,color_pars_fragment:D4,color_pars_vertex:B4,color_vertex:k4,common:V4,cube_uv_reflection_fragment:O4,defaultnormal_vertex:z4,displacementmap_pars_vertex:G4,displacementmap_vertex:W4,emissivemap_fragment:X4,emissivemap_pars_fragment:H4,colorspace_fragment:Z4,colorspace_pars_fragment:Y4,envmap_fragment:J4,envmap_common_pars_fragment:j4,envmap_pars_fragment:$4,envmap_pars_vertex:q4,envmap_physical_pars_fragment:l3,envmap_vertex:Q4,fog_vertex:K4,fog_pars_vertex:e3,fog_fragment:t3,fog_pars_fragment:n3,gradientmap_pars_fragment:i3,lightmap_pars_fragment:r3,lights_lambert_fragment:s3,lights_lambert_pars_fragment:o3,lights_pars_begin:a3,lights_toon_fragment:c3,lights_toon_pars_fragment:u3,lights_phong_fragment:f3,lights_phong_pars_fragment:h3,lights_physical_fragment:d3,lights_physical_pars_fragment:p3,lights_fragment_begin:m3,lights_fragment_maps:A3,lights_fragment_end:g3,logdepthbuf_fragment:_3,logdepthbuf_pars_fragment:v3,logdepthbuf_pars_vertex:y3,logdepthbuf_vertex:x3,map_fragment:M3,map_pars_fragment:S3,map_particle_fragment:E3,map_particle_pars_fragment:w3,metalnessmap_fragment:T3,metalnessmap_pars_fragment:R3,morphinstance_vertex:C3,morphcolor_vertex:U3,morphnormal_vertex:b3,morphtarget_pars_vertex:F3,morphtarget_vertex:P3,normal_fragment_begin:N3,normal_fragment_maps:L3,normal_pars_fragment:I3,normal_pars_vertex:D3,normal_vertex:B3,normalmap_pars_fragment:k3,clearcoat_normal_fragment_begin:V3,clearcoat_normal_fragment_maps:O3,clearcoat_pars_fragment:z3,iridescence_pars_fragment:G3,opaque_fragment:W3,packing:X3,premultiplied_alpha_fragment:H3,project_vertex:Z3,dithering_fragment:Y3,dithering_pars_fragment:J3,roughnessmap_fragment:j3,roughnessmap_pars_fragment:$3,shadowmap_pars_fragment:q3,shadowmap_pars_vertex:Q3,shadowmap_vertex:K3,shadowmask_pars_fragment:eC,skinbase_vertex:tC,skinning_pars_vertex:nC,skinning_vertex:iC,skinnormal_vertex:rC,specularmap_fragment:sC,specularmap_pars_fragment:oC,tonemapping_fragment:aC,tonemapping_pars_fragment:lC,transmission_fragment:cC,transmission_pars_fragment:uC,uv_pars_fragment:fC,uv_pars_vertex:hC,uv_vertex:dC,worldpos_vertex:pC,background_vert:mC,background_frag:AC,backgroundCube_vert:gC,backgroundCube_frag:_C,cube_vert:vC,cube_frag:yC,depth_vert:xC,depth_frag:MC,distanceRGBA_vert:SC,distanceRGBA_frag:EC,equirect_vert:wC,equirect_frag:TC,linedashed_vert:RC,linedashed_frag:CC,meshbasic_vert:UC,meshbasic_frag:bC,meshlambert_vert:FC,meshlambert_frag:PC,meshmatcap_vert:NC,meshmatcap_frag:LC,meshnormal_vert:IC,meshnormal_frag:DC,meshphong_vert:BC,meshphong_frag:kC,meshphysical_vert:VC,meshphysical_frag:OC,meshtoon_vert:zC,meshtoon_frag:GC,points_vert:WC,points_frag:XC,shadow_vert:HC,shadow_frag:ZC,sprite_vert:YC,sprite_frag:JC},Ge={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ui={basic:{uniforms:Fn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Fn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new zt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Fn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Fn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Fn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new zt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Fn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Fn([Ge.points,Ge.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Fn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Fn([Ge.common,Ge.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Fn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Fn([Ge.sprite,Ge.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:Fn([Ge.common,Ge.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:Fn([Ge.lights,Ge.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ui.physical={uniforms:Fn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Xa={r:0,b:0,g:0},Yr=new Qi,jC=new dn;function $C(o,t,s,a,u,h,A){const g=new zt(0);let v=h===!0?0:1,x,M,E=null,w=0,C=null;function P(W){let V=W.isScene===!0?W.background:null;return V&&V.isTexture&&(V=(W.backgroundBlurriness>0?s:t).get(V)),V}function I(W){let V=!1;const H=P(W);H===null?T(g,v):H&&H.isColor&&(T(H,1),V=!0);const se=o.xr.getEnvironmentBlendMode();se==="additive"?a.buffers.color.setClear(0,0,0,1,A):se==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,A),(o.autoClear||V)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function R(W,V){const H=P(V);H&&(H.isCubeTexture||H.mapping===h0)?(M===void 0&&(M=new ji(new Ho(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:Ks(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),M.geometry.deleteAttribute("normal"),M.geometry.deleteAttribute("uv"),M.onBeforeRender=function(se,J,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(M.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(M)),Yr.copy(V.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),M.material.uniforms.envMap.value=H,M.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,M.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,M.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,M.material.uniforms.backgroundRotation.value.setFromMatrix4(jC.makeRotationFromEuler(Yr)),M.material.toneMapped=Wt.getTransfer(H.colorSpace)!==Kt,(E!==H||w!==H.version||C!==o.toneMapping)&&(M.material.needsUpdate=!0,E=H,w=H.version,C=o.toneMapping),M.layers.enableAll(),W.unshift(M,M.geometry,M.material,0,0,null)):H&&H.isTexture&&(x===void 0&&(x=new ji(new m0(2,2),new yr({name:"BackgroundMaterial",uniforms:Ks(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(x)),x.material.uniforms.t2D.value=H,x.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,x.material.toneMapped=Wt.getTransfer(H.colorSpace)!==Kt,H.matrixAutoUpdate===!0&&H.updateMatrix(),x.material.uniforms.uvTransform.value.copy(H.matrix),(E!==H||w!==H.version||C!==o.toneMapping)&&(x.material.needsUpdate=!0,E=H,w=H.version,C=o.toneMapping),x.layers.enableAll(),W.unshift(x,x.geometry,x.material,0,0,null))}function T(W,V){W.getRGB(Xa,gp(o)),a.buffers.color.setClear(Xa.r,Xa.g,Xa.b,V,A)}return{getClearColor:function(){return g},setClearColor:function(W,V=1){g.set(W),v=V,T(g,v)},getClearAlpha:function(){return v},setClearAlpha:function(W){v=W,T(g,v)},render:I,addToRenderList:R}}function qC(o,t){const s=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},u=w(null);let h=u,A=!1;function g(k,j,me,he,Me){let Se=!1;const ve=E(he,me,j);h!==ve&&(h=ve,x(h.object)),Se=C(k,he,me,Me),Se&&P(k,he,me,Me),Me!==null&&t.update(Me,o.ELEMENT_ARRAY_BUFFER),(Se||A)&&(A=!1,H(k,j,me,he),Me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Me).buffer))}function v(){return o.createVertexArray()}function x(k){return o.bindVertexArray(k)}function M(k){return o.deleteVertexArray(k)}function E(k,j,me){const he=me.wireframe===!0;let Me=a[k.id];Me===void 0&&(Me={},a[k.id]=Me);let Se=Me[j.id];Se===void 0&&(Se={},Me[j.id]=Se);let ve=Se[he];return ve===void 0&&(ve=w(v()),Se[he]=ve),ve}function w(k){const j=[],me=[],he=[];for(let Me=0;Me<s;Me++)j[Me]=0,me[Me]=0,he[Me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:me,attributeDivisors:he,object:k,attributes:{},index:null}}function C(k,j,me,he){const Me=h.attributes,Se=j.attributes;let ve=0;const Ee=me.getAttributes();for(const de in Ee)if(Ee[de].location>=0){const $e=Me[de];let Ve=Se[de];if(Ve===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(Ve=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(Ve=k.instanceColor)),$e===void 0||$e.attribute!==Ve||Ve&&$e.data!==Ve.data)return!0;ve++}return h.attributesNum!==ve||h.index!==he}function P(k,j,me,he){const Me={},Se=j.attributes;let ve=0;const Ee=me.getAttributes();for(const de in Ee)if(Ee[de].location>=0){let $e=Se[de];$e===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&($e=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&($e=k.instanceColor));const Ve={};Ve.attribute=$e,$e&&$e.data&&(Ve.data=$e.data),Me[de]=Ve,ve++}h.attributes=Me,h.attributesNum=ve,h.index=he}function I(){const k=h.newAttributes;for(let j=0,me=k.length;j<me;j++)k[j]=0}function R(k){T(k,0)}function T(k,j){const me=h.newAttributes,he=h.enabledAttributes,Me=h.attributeDivisors;me[k]=1,he[k]===0&&(o.enableVertexAttribArray(k),he[k]=1),Me[k]!==j&&(o.vertexAttribDivisor(k,j),Me[k]=j)}function W(){const k=h.newAttributes,j=h.enabledAttributes;for(let me=0,he=j.length;me<he;me++)j[me]!==k[me]&&(o.disableVertexAttribArray(me),j[me]=0)}function V(k,j,me,he,Me,Se,ve){ve===!0?o.vertexAttribIPointer(k,j,me,Me,Se):o.vertexAttribPointer(k,j,me,he,Me,Se)}function H(k,j,me,he){I();const Me=he.attributes,Se=me.getAttributes(),ve=j.defaultAttributeValues;for(const Ee in Se){const de=Se[Ee];if(de.location>=0){let We=Me[Ee];if(We===void 0&&(Ee==="instanceMatrix"&&k.instanceMatrix&&(We=k.instanceMatrix),Ee==="instanceColor"&&k.instanceColor&&(We=k.instanceColor)),We!==void 0){const $e=We.normalized,Ve=We.itemSize,mt=t.get(We);if(mt===void 0)continue;const Ct=mt.buffer,pe=mt.type,Re=mt.bytesPerElement,Je=pe===o.INT||pe===o.UNSIGNED_INT||We.gpuType===Ic;if(We.isInterleavedBufferAttribute){const ne=We.data,Fe=ne.stride,Qe=We.offset;if(ne.isInstancedInterleavedBuffer){for(let nt=0;nt<de.locationSize;nt++)T(de.location+nt,ne.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let nt=0;nt<de.locationSize;nt++)R(de.location+nt);o.bindBuffer(o.ARRAY_BUFFER,Ct);for(let nt=0;nt<de.locationSize;nt++)V(de.location+nt,Ve/de.locationSize,pe,$e,Fe*Re,(Qe+Ve/de.locationSize*nt)*Re,Je)}else{if(We.isInstancedBufferAttribute){for(let ne=0;ne<de.locationSize;ne++)T(de.location+ne,We.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ne=0;ne<de.locationSize;ne++)R(de.location+ne);o.bindBuffer(o.ARRAY_BUFFER,Ct);for(let ne=0;ne<de.locationSize;ne++)V(de.location+ne,Ve/de.locationSize,pe,$e,Ve*Re,Ve/de.locationSize*ne*Re,Je)}}else if(ve!==void 0){const $e=ve[Ee];if($e!==void 0)switch($e.length){case 2:o.vertexAttrib2fv(de.location,$e);break;case 3:o.vertexAttrib3fv(de.location,$e);break;case 4:o.vertexAttrib4fv(de.location,$e);break;default:o.vertexAttrib1fv(de.location,$e)}}}}W()}function se(){ae();for(const k in a){const j=a[k];for(const me in j){const he=j[me];for(const Me in he)M(he[Me].object),delete he[Me];delete j[me]}delete a[k]}}function J(k){if(a[k.id]===void 0)return;const j=a[k.id];for(const me in j){const he=j[me];for(const Me in he)M(he[Me].object),delete he[Me];delete j[me]}delete a[k.id]}function Y(k){for(const j in a){const me=a[j];if(me[k.id]===void 0)continue;const he=me[k.id];for(const Me in he)M(he[Me].object),delete he[Me];delete me[k.id]}}function ae(){O(),A=!0,h!==u&&(h=u,x(h.object))}function O(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:g,reset:ae,resetDefaultState:O,dispose:se,releaseStatesOfGeometry:J,releaseStatesOfProgram:Y,initAttributes:I,enableAttribute:R,disableUnusedAttributes:W}}function QC(o,t,s){let a;function u(x){a=x}function h(x,M){o.drawArrays(a,x,M),s.update(M,a,1)}function A(x,M,E){E!==0&&(o.drawArraysInstanced(a,x,M,E),s.update(M,a,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,x,0,M,0,E);let C=0;for(let P=0;P<E;P++)C+=M[P];s.update(C,a,1)}function v(x,M,E,w){if(E===0)return;const C=t.get("WEBGL_multi_draw");if(C===null)for(let P=0;P<x.length;P++)A(x[P],M[P],w[P]);else{C.multiDrawArraysInstancedWEBGL(a,x,0,M,0,w,0,E);let P=0;for(let I=0;I<E;I++)P+=M[I];for(let I=0;I<w.length;I++)s.update(P,a,w[I])}}this.setMode=u,this.render=h,this.renderInstances=A,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function KC(o,t,s,a){let u;function h(){if(u!==void 0)return u;if(t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");u=o.getParameter(J.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function A(J){return!(J!==Ai&&a.convert(J)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function g(J){const Y=J===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(J!==qi&&a.convert(J)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&J!==Yi&&!Y)}function v(J){if(J==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";J="mediump"}return J==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let x=s.precision!==void 0?s.precision:"highp";const M=v(x);M!==x&&(console.warn("THREE.WebGLRenderer:",x,"not supported, using",M,"instead."),x=M);const E=s.logarithmicDepthBuffer===!0,w=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=o.getParameter(o.MAX_TEXTURE_SIZE),I=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),R=o.getParameter(o.MAX_VERTEX_ATTRIBS),T=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),W=o.getParameter(o.MAX_VARYING_VECTORS),V=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=C>0,se=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:h,getMaxPrecision:v,textureFormatReadable:A,textureTypeReadable:g,precision:x,logarithmicDepthBuffer:E,maxTextures:w,maxVertexTextures:C,maxTextureSize:P,maxCubemapSize:I,maxAttributes:R,maxVertexUniforms:T,maxVaryings:W,maxFragmentUniforms:V,vertexTextures:H,maxSamples:se}}function eU(o){const t=this;let s=null,a=0,u=!1,h=!1;const A=new jr,g=new xt,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(E,w){const C=E.length!==0||w||a!==0||u;return u=w,a=E.length,C},this.beginShadows=function(){h=!0,M(null)},this.endShadows=function(){h=!1},this.setGlobalState=function(E,w){s=M(E,w,0)},this.setState=function(E,w,C){const P=E.clippingPlanes,I=E.clipIntersection,R=E.clipShadows,T=o.get(E);if(!u||P===null||P.length===0||h&&!R)h?M(null):x();else{const W=h?0:a,V=W*4;let H=T.clippingState||null;v.value=H,H=M(P,w,V,C);for(let se=0;se!==V;++se)H[se]=s[se];T.clippingState=H,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=W}};function x(){v.value!==s&&(v.value=s,v.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function M(E,w,C,P){const I=E!==null?E.length:0;let R=null;if(I!==0){if(R=v.value,P!==!0||R===null){const T=C+I*4,W=w.matrixWorldInverse;g.getNormalMatrix(W),(R===null||R.length<T)&&(R=new Float32Array(T));for(let V=0,H=C;V!==I;++V,H+=4)A.copy(E[V]).applyMatrix4(W,g),A.normal.toArray(R,H),R[H+3]=A.constant}v.value=R,v.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,R}}function tU(o){let t=new WeakMap;function s(A,g){return g===ql?A.mapping=js:g===Ql&&(A.mapping=$s),A}function a(A){if(A&&A.isTexture){const g=A.mapping;if(g===ql||g===Ql)if(t.has(A)){const v=t.get(A).texture;return s(v,A.mapping)}else{const v=A.image;if(v&&v.height>0){const x=new h4(v.height);return x.fromEquirectangularTexture(o,A),t.set(A,x),A.addEventListener("dispose",u),s(x.texture,A.mapping)}else return null}}return A}function u(A){const g=A.target;g.removeEventListener("dispose",u);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function h(){t=new WeakMap}return{get:a,dispose:h}}class nU extends _p{constructor(t=-1,s=1,a=1,u=-1,h=.1,A=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=s,this.top=a,this.bottom=u,this.near=h,this.far=A,this.updateProjectionMatrix()}copy(t,s){return super.copy(t,s),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,s,a,u,h,A){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=s,this.view.offsetX=a,this.view.offsetY=u,this.view.width=h,this.view.height=A,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let h=a-t,A=a+t,g=u+s,v=u-s;if(this.view!==null&&this.view.enabled){const x=(this.right-this.left)/this.view.fullWidth/this.zoom,M=(this.top-this.bottom)/this.view.fullHeight/this.zoom;h+=x*this.view.offsetX,A=h+x*this.view.width,g-=M*this.view.offsetY,v=g-M*this.view.height}this.projectionMatrix.makeOrthographic(h,A,g,v,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const s=super.toJSON(t);return s.object.zoom=this.zoom,s.object.left=this.left,s.object.right=this.right,s.object.top=this.top,s.object.bottom=this.bottom,s.object.near=this.near,s.object.far=this.far,this.view!==null&&(s.object.view=Object.assign({},this.view)),s}}const Xs=4,Kh=[.125,.215,.35,.446,.526,.582],Qr=20,Ll=new nU,ed=new zt;let Il=null,Dl=0,Bl=0,kl=!1;const $r=(1+Math.sqrt(5))/2,ks=1/$r,td=[new le(-$r,ks,0),new le($r,ks,0),new le(-ks,0,$r),new le(ks,0,$r),new le(0,$r,-ks),new le(0,$r,ks),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class nd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,s=0,a=.1,u=100){Il=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,a,u,h),s>0&&this._blur(h,0,0,s),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,s=null){return this._fromTexture(t,s)}fromCubemap(t,s=null){return this._fromTexture(t,s)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Dl,Bl),this._renderer.xr.enabled=kl,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,s){t.mapping===js||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=s||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),s=4*this._cubeSize,a={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Go,format:Ai,colorSpace:Mr,depthBuffer:!1},u=id(t,s,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==s){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(t,s,a);const{_lodMax:h}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iU(h)),this._blurMaterial=rU(h,t,s)}return u}_compileMaterial(t){const s=new ji(this._lodPlanes[0],t);this._renderer.compile(s,Ll)}_sceneToCubeUV(t,s,a,u){const g=new ri(90,1,s,a),v=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],M=this._renderer,E=M.autoClear,w=M.toneMapping;M.getClearColor(ed),M.toneMapping=_r,M.autoClear=!1;const C=new pp({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),P=new ji(new Ho,C);let I=!1;const R=t.background;R?R.isColor&&(C.color.copy(R),t.background=null,I=!0):(C.color.copy(ed),I=!0);for(let T=0;T<6;T++){const W=T%3;W===0?(g.up.set(0,v[T],0),g.lookAt(x[T],0,0)):W===1?(g.up.set(0,0,v[T]),g.lookAt(0,x[T],0)):(g.up.set(0,v[T],0),g.lookAt(0,0,x[T]));const V=this._cubeSize;Ha(u,W*V,T>2?V:0,V,V),M.setRenderTarget(u),I&&M.render(P,g),M.render(t,g)}P.geometry.dispose(),P.material.dispose(),M.toneMapping=w,M.autoClear=E,t.background=R}_textureToCubeUV(t,s){const a=this._renderer,u=t.mapping===js||t.mapping===$s;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const h=u?this._cubemapMaterial:this._equirectMaterial,A=new ji(this._lodPlanes[0],h),g=h.uniforms;g.envMap.value=t;const v=this._cubeSize;Ha(s,0,0,3*v,2*v),a.setRenderTarget(s),a.render(A,Ll)}_applyPMREM(t){const s=this._renderer,a=s.autoClear;s.autoClear=!1;const u=this._lodPlanes.length;for(let h=1;h<u;h++){const A=Math.sqrt(this._sigmas[h]*this._sigmas[h]-this._sigmas[h-1]*this._sigmas[h-1]),g=td[(u-h-1)%td.length];this._blur(t,h-1,h,A,g)}s.autoClear=a}_blur(t,s,a,u,h){const A=this._pingPongRenderTarget;this._halfBlur(t,A,s,a,u,"latitudinal",h),this._halfBlur(A,t,a,a,u,"longitudinal",h)}_halfBlur(t,s,a,u,h,A,g){const v=this._renderer,x=this._blurMaterial;A!=="latitudinal"&&A!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const M=3,E=new ji(this._lodPlanes[u],x),w=x.uniforms,C=this._sizeLods[a]-1,P=isFinite(h)?Math.PI/(2*C):2*Math.PI/(2*Qr-1),I=h/P,R=isFinite(h)?1+Math.floor(M*I):Qr;R>Qr&&console.warn(`sigmaRadians, ${h}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${Qr}`);const T=[];let W=0;for(let Y=0;Y<Qr;++Y){const ae=Y/I,O=Math.exp(-ae*ae/2);T.push(O),Y===0?W+=O:Y<R&&(W+=2*O)}for(let Y=0;Y<T.length;Y++)T[Y]=T[Y]/W;w.envMap.value=t.texture,w.samples.value=R,w.weights.value=T,w.latitudinal.value=A==="latitudinal",g&&(w.poleAxis.value=g);const{_lodMax:V}=this;w.dTheta.value=P,w.mipInt.value=V-a;const H=this._sizeLods[u],se=3*H*(u>V-Xs?u-V+Xs:0),J=4*(this._cubeSize-H);Ha(s,se,J,3*H,2*H),v.setRenderTarget(s),v.render(E,Ll)}}function iU(o){const t=[],s=[],a=[];let u=o;const h=o-Xs+1+Kh.length;for(let A=0;A<h;A++){const g=Math.pow(2,u);s.push(g);let v=1/g;A>o-Xs?v=Kh[A-o+Xs-1]:A===0&&(v=0),a.push(v);const x=1/(g-2),M=-x,E=1+x,w=[M,M,E,M,E,E,M,M,E,E,M,E],C=6,P=6,I=3,R=2,T=1,W=new Float32Array(I*P*C),V=new Float32Array(R*P*C),H=new Float32Array(T*P*C);for(let J=0;J<C;J++){const Y=J%3*2/3-1,ae=J>2?0:-1,O=[Y,ae,0,Y+2/3,ae,0,Y+2/3,ae+1,0,Y,ae,0,Y+2/3,ae+1,0,Y,ae+1,0];W.set(O,I*P*J),V.set(w,R*P*J);const k=[J,J,J,J,J,J];H.set(k,T*P*J)}const se=new Ki;se.setAttribute("position",new Fi(W,I)),se.setAttribute("uv",new Fi(V,R)),se.setAttribute("faceIndex",new Fi(H,T)),t.push(se),u>Xs&&u--}return{lodPlanes:t,sizeLods:s,sigmas:a}}function id(o,t,s){const a=new rs(o,t,s);return a.texture.mapping=h0,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ha(o,t,s,a,u){o.viewport.set(t,s,a,u),o.scissor.set(t,s,a,u)}function rU(o,t,s){const a=new Float32Array(Qr),u=new le(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/s,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function rd(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function sd(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sU(o){let t=new WeakMap,s=null;function a(g){if(g&&g.isTexture){const v=g.mapping,x=v===ql||v===Ql,M=v===js||v===$s;if(x||M){let E=t.get(g);const w=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==w)return s===null&&(s=new nd(o)),E=x?s.fromEquirectangular(g,E):s.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,t.set(g,E),E.texture;if(E!==void 0)return E.texture;{const C=g.image;return x&&C&&C.height>0||M&&C&&u(C)?(s===null&&(s=new nd(o)),E=x?s.fromEquirectangular(g):s.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,t.set(g,E),g.addEventListener("dispose",h),E.texture):null}}}return g}function u(g){let v=0;const x=6;for(let M=0;M<x;M++)g[M]!==void 0&&v++;return v===x}function h(g){const v=g.target;v.removeEventListener("dispose",h);const x=t.get(v);x!==void 0&&(t.delete(v),x.dispose())}function A(){t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:A}}function oU(o){const t={};function s(a){if(t[a]!==void 0)return t[a];let u;switch(a){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(a)}return t[a]=u,u}return{has:function(a){return s(a)!==null},init:function(){s("EXT_color_buffer_float"),s("WEBGL_clip_cull_distance"),s("OES_texture_float_linear"),s("EXT_color_buffer_half_float"),s("WEBGL_multisampled_render_to_texture"),s("WEBGL_render_shared_exponent")},get:function(a){const u=s(a);return u===null&&lp("THREE.WebGLRenderer: "+a+" extension not supported."),u}}}function aU(o,t,s,a){const u={},h=new WeakMap;function A(E){const w=E.target;w.index!==null&&t.remove(w.index);for(const P in w.attributes)t.remove(w.attributes[P]);for(const P in w.morphAttributes){const I=w.morphAttributes[P];for(let R=0,T=I.length;R<T;R++)t.remove(I[R])}w.removeEventListener("dispose",A),delete u[w.id];const C=h.get(w);C&&(t.remove(C),h.delete(w)),a.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,s.memory.geometries--}function g(E,w){return u[w.id]===!0||(w.addEventListener("dispose",A),u[w.id]=!0,s.memory.geometries++),w}function v(E){const w=E.attributes;for(const P in w)t.update(w[P],o.ARRAY_BUFFER);const C=E.morphAttributes;for(const P in C){const I=C[P];for(let R=0,T=I.length;R<T;R++)t.update(I[R],o.ARRAY_BUFFER)}}function x(E){const w=[],C=E.index,P=E.attributes.position;let I=0;if(C!==null){const W=C.array;I=C.version;for(let V=0,H=W.length;V<H;V+=3){const se=W[V+0],J=W[V+1],Y=W[V+2];w.push(se,J,J,Y,Y,se)}}else if(P!==void 0){const W=P.array;I=P.version;for(let V=0,H=W.length/3-1;V<H;V+=3){const se=V+0,J=V+1,Y=V+2;w.push(se,J,J,Y,Y,se)}}else return;const R=new(ap(w)?Ap:mp)(w,1);R.version=I;const T=h.get(E);T&&t.remove(T),h.set(E,R)}function M(E){const w=h.get(E);if(w){const C=E.index;C!==null&&w.version<C.version&&x(E)}else x(E);return h.get(E)}return{get:g,update:v,getWireframeAttribute:M}}function lU(o,t,s){let a;function u(w){a=w}let h,A;function g(w){h=w.type,A=w.bytesPerElement}function v(w,C){o.drawElements(a,C,h,w*A),s.update(C,a,1)}function x(w,C,P){P!==0&&(o.drawElementsInstanced(a,C,h,w*A,P),s.update(C,a,P))}function M(w,C,P){if(P===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,C,0,h,w,0,P);let R=0;for(let T=0;T<P;T++)R+=C[T];s.update(R,a,1)}function E(w,C,P,I){if(P===0)return;const R=t.get("WEBGL_multi_draw");if(R===null)for(let T=0;T<w.length;T++)x(w[T]/A,C[T],I[T]);else{R.multiDrawElementsInstancedWEBGL(a,C,0,h,w,0,I,0,P);let T=0;for(let W=0;W<P;W++)T+=C[W];for(let W=0;W<I.length;W++)s.update(T,a,I[W])}}this.setMode=u,this.setIndex=g,this.render=v,this.renderInstances=x,this.renderMultiDraw=M,this.renderMultiDrawInstances=E}function cU(o){const t={geometries:0,textures:0},s={frame:0,calls:0,triangles:0,points:0,lines:0};function a(h,A,g){switch(s.calls++,A){case o.TRIANGLES:s.triangles+=g*(h/3);break;case o.LINES:s.lines+=g*(h/2);break;case o.LINE_STRIP:s.lines+=g*(h-1);break;case o.LINE_LOOP:s.lines+=g*h;break;case o.POINTS:s.points+=g*h;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",A);break}}function u(){s.calls=0,s.triangles=0,s.points=0,s.lines=0}return{memory:t,render:s,programs:null,autoReset:!0,reset:u,update:a}}function uU(o,t,s){const a=new WeakMap,u=new Mn;function h(A,g,v){const x=A.morphTargetInfluences,M=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,E=M!==void 0?M.length:0;let w=a.get(g);if(w===void 0||w.count!==E){let k=function(){ae.dispose(),a.delete(g),g.removeEventListener("dispose",k)};var C=k;w!==void 0&&w.texture.dispose();const P=g.morphAttributes.position!==void 0,I=g.morphAttributes.normal!==void 0,R=g.morphAttributes.color!==void 0,T=g.morphAttributes.position||[],W=g.morphAttributes.normal||[],V=g.morphAttributes.color||[];let H=0;P===!0&&(H=1),I===!0&&(H=2),R===!0&&(H=3);let se=g.attributes.position.count*H,J=1;se>t.maxTextureSize&&(J=Math.ceil(se/t.maxTextureSize),se=t.maxTextureSize);const Y=new Float32Array(se*J*4*E),ae=new up(Y,se,J,E);ae.type=Yi,ae.needsUpdate=!0;const O=H*4;for(let j=0;j<E;j++){const me=T[j],he=W[j],Me=V[j],Se=se*J*4*j;for(let ve=0;ve<me.count;ve++){const Ee=ve*O;P===!0&&(u.fromBufferAttribute(me,ve),Y[Se+Ee+0]=u.x,Y[Se+Ee+1]=u.y,Y[Se+Ee+2]=u.z,Y[Se+Ee+3]=0),I===!0&&(u.fromBufferAttribute(he,ve),Y[Se+Ee+4]=u.x,Y[Se+Ee+5]=u.y,Y[Se+Ee+6]=u.z,Y[Se+Ee+7]=0),R===!0&&(u.fromBufferAttribute(Me,ve),Y[Se+Ee+8]=u.x,Y[Se+Ee+9]=u.y,Y[Se+Ee+10]=u.z,Y[Se+Ee+11]=Me.itemSize===4?u.w:1)}}w={count:E,texture:ae,size:new Mt(se,J)},a.set(g,w),g.addEventListener("dispose",k)}if(A.isInstancedMesh===!0&&A.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",A.morphTexture,s);else{let P=0;for(let R=0;R<x.length;R++)P+=x[R];const I=g.morphTargetsRelative?1:1-P;v.getUniforms().setValue(o,"morphTargetBaseInfluence",I),v.getUniforms().setValue(o,"morphTargetInfluences",x)}v.getUniforms().setValue(o,"morphTargetsTexture",w.texture,s),v.getUniforms().setValue(o,"morphTargetsTextureSize",w.size)}return{update:h}}function fU(o,t,s,a){let u=new WeakMap;function h(v){const x=a.render.frame,M=v.geometry,E=t.get(v,M);if(u.get(E)!==x&&(t.update(E),u.set(E,x)),v.isInstancedMesh&&(v.hasEventListener("dispose",g)===!1&&v.addEventListener("dispose",g),u.get(v)!==x&&(s.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&s.update(v.instanceColor,o.ARRAY_BUFFER),u.set(v,x))),v.isSkinnedMesh){const w=v.skeleton;u.get(w)!==x&&(w.update(),u.set(w,x))}return E}function A(){u=new WeakMap}function g(v){const x=v.target;x.removeEventListener("dispose",g),s.remove(x.instanceMatrix),x.instanceColor!==null&&s.remove(x.instanceColor)}return{update:h,dispose:A}}class Mp extends Nn{constructor(t,s,a,u,h,A,g,v,x,M=Zs){if(M!==Zs&&M!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&M===Zs&&(a=is),a===void 0&&M===Qs&&(a=qs),super(null,u,h,A,g,v,M,a,x),this.isDepthTexture=!0,this.image={width:t,height:s},this.magFilter=g!==void 0?g:si,this.minFilter=v!==void 0?v:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const s=super.toJSON(t);return this.compareFunction!==null&&(s.compareFunction=this.compareFunction),s}}const Sp=new Nn,od=new Mp(1,1),Ep=new up,wp=new $R,Tp=new vp,ad=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),fd=new Float32Array(4);function no(o,t,s){const a=o[0];if(a<=0||a>0)return o;const u=t*s;let h=ad[u];if(h===void 0&&(h=new Float32Array(u),ad[u]=h),t!==0){a.toArray(h,0);for(let A=1,g=0;A!==t;++A)g+=s,o[A].toArray(h,g)}return h}function mn(o,t){if(o.length!==t.length)return!1;for(let s=0,a=o.length;s<a;s++)if(o[s]!==t[s])return!1;return!0}function An(o,t){for(let s=0,a=t.length;s<a;s++)o[s]=t[s]}function A0(o,t){let s=ld[t];s===void 0&&(s=new Int32Array(t),ld[t]=s);for(let a=0;a!==t;++a)s[a]=o.allocateTextureUnit();return s}function hU(o,t){const s=this.cache;s[0]!==t&&(o.uniform1f(this.addr,t),s[0]=t)}function dU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),s[0]=t.x,s[1]=t.y);else{if(mn(s,t))return;o.uniform2fv(this.addr,t),An(s,t)}}function pU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y||s[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),s[0]=t.x,s[1]=t.y,s[2]=t.z);else if(t.r!==void 0)(s[0]!==t.r||s[1]!==t.g||s[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),s[0]=t.r,s[1]=t.g,s[2]=t.b);else{if(mn(s,t))return;o.uniform3fv(this.addr,t),An(s,t)}}function mU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y||s[2]!==t.z||s[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=t.w);else{if(mn(s,t))return;o.uniform4fv(this.addr,t),An(s,t)}}function AU(o,t){const s=this.cache,a=t.elements;if(a===void 0){if(mn(s,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(s,t)}else{if(mn(s,a))return;fd.set(a),o.uniformMatrix2fv(this.addr,!1,fd),An(s,a)}}function gU(o,t){const s=this.cache,a=t.elements;if(a===void 0){if(mn(s,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(s,t)}else{if(mn(s,a))return;ud.set(a),o.uniformMatrix3fv(this.addr,!1,ud),An(s,a)}}function _U(o,t){const s=this.cache,a=t.elements;if(a===void 0){if(mn(s,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(s,t)}else{if(mn(s,a))return;cd.set(a),o.uniformMatrix4fv(this.addr,!1,cd),An(s,a)}}function vU(o,t){const s=this.cache;s[0]!==t&&(o.uniform1i(this.addr,t),s[0]=t)}function yU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),s[0]=t.x,s[1]=t.y);else{if(mn(s,t))return;o.uniform2iv(this.addr,t),An(s,t)}}function xU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y||s[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),s[0]=t.x,s[1]=t.y,s[2]=t.z);else{if(mn(s,t))return;o.uniform3iv(this.addr,t),An(s,t)}}function MU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y||s[2]!==t.z||s[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=t.w);else{if(mn(s,t))return;o.uniform4iv(this.addr,t),An(s,t)}}function SU(o,t){const s=this.cache;s[0]!==t&&(o.uniform1ui(this.addr,t),s[0]=t)}function EU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),s[0]=t.x,s[1]=t.y);else{if(mn(s,t))return;o.uniform2uiv(this.addr,t),An(s,t)}}function wU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y||s[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),s[0]=t.x,s[1]=t.y,s[2]=t.z);else{if(mn(s,t))return;o.uniform3uiv(this.addr,t),An(s,t)}}function TU(o,t){const s=this.cache;if(t.x!==void 0)(s[0]!==t.x||s[1]!==t.y||s[2]!==t.z||s[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=t.w);else{if(mn(s,t))return;o.uniform4uiv(this.addr,t),An(s,t)}}function RU(o,t,s){const a=this.cache,u=s.allocateTextureUnit();a[0]!==u&&(o.uniform1i(this.addr,u),a[0]=u);let h;this.type===o.SAMPLER_2D_SHADOW?(od.compareFunction=op,h=od):h=Sp,s.setTexture2D(t||h,u)}function CU(o,t,s){const a=this.cache,u=s.allocateTextureUnit();a[0]!==u&&(o.uniform1i(this.addr,u),a[0]=u),s.setTexture3D(t||wp,u)}function UU(o,t,s){const a=this.cache,u=s.allocateTextureUnit();a[0]!==u&&(o.uniform1i(this.addr,u),a[0]=u),s.setTextureCube(t||Tp,u)}function bU(o,t,s){const a=this.cache,u=s.allocateTextureUnit();a[0]!==u&&(o.uniform1i(this.addr,u),a[0]=u),s.setTexture2DArray(t||Ep,u)}function FU(o){switch(o){case 5126:return hU;case 35664:return dU;case 35665:return pU;case 35666:return mU;case 35674:return AU;case 35675:return gU;case 35676:return _U;case 5124:case 35670:return vU;case 35667:case 35671:return yU;case 35668:case 35672:return xU;case 35669:case 35673:return MU;case 5125:return SU;case 36294:return EU;case 36295:return wU;case 36296:return TU;case 35678:case 36198:case 36298:case 36306:case 35682:return RU;case 35679:case 36299:case 36307:return CU;case 35680:case 36300:case 36308:case 36293:return UU;case 36289:case 36303:case 36311:case 36292:return bU}}function PU(o,t){o.uniform1fv(this.addr,t)}function NU(o,t){const s=no(t,this.size,2);o.uniform2fv(this.addr,s)}function LU(o,t){const s=no(t,this.size,3);o.uniform3fv(this.addr,s)}function IU(o,t){const s=no(t,this.size,4);o.uniform4fv(this.addr,s)}function DU(o,t){const s=no(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,s)}function BU(o,t){const s=no(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,s)}function kU(o,t){const s=no(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,s)}function VU(o,t){o.uniform1iv(this.addr,t)}function OU(o,t){o.uniform2iv(this.addr,t)}function zU(o,t){o.uniform3iv(this.addr,t)}function GU(o,t){o.uniform4iv(this.addr,t)}function WU(o,t){o.uniform1uiv(this.addr,t)}function XU(o,t){o.uniform2uiv(this.addr,t)}function HU(o,t){o.uniform3uiv(this.addr,t)}function ZU(o,t){o.uniform4uiv(this.addr,t)}function YU(o,t,s){const a=this.cache,u=t.length,h=A0(s,u);mn(a,h)||(o.uniform1iv(this.addr,h),An(a,h));for(let A=0;A!==u;++A)s.setTexture2D(t[A]||Sp,h[A])}function JU(o,t,s){const a=this.cache,u=t.length,h=A0(s,u);mn(a,h)||(o.uniform1iv(this.addr,h),An(a,h));for(let A=0;A!==u;++A)s.setTexture3D(t[A]||wp,h[A])}function jU(o,t,s){const a=this.cache,u=t.length,h=A0(s,u);mn(a,h)||(o.uniform1iv(this.addr,h),An(a,h));for(let A=0;A!==u;++A)s.setTextureCube(t[A]||Tp,h[A])}function $U(o,t,s){const a=this.cache,u=t.length,h=A0(s,u);mn(a,h)||(o.uniform1iv(this.addr,h),An(a,h));for(let A=0;A!==u;++A)s.setTexture2DArray(t[A]||Ep,h[A])}function qU(o){switch(o){case 5126:return PU;case 35664:return NU;case 35665:return LU;case 35666:return IU;case 35674:return DU;case 35675:return BU;case 35676:return kU;case 5124:case 35670:return VU;case 35667:case 35671:return OU;case 35668:case 35672:return zU;case 35669:case 35673:return GU;case 5125:return WU;case 36294:return XU;case 36295:return HU;case 36296:return ZU;case 35678:case 36198:case 36298:case 36306:case 35682:return YU;case 35679:case 36299:case 36307:return JU;case 35680:case 36300:case 36308:case 36293:return jU;case 36289:case 36303:case 36311:case 36292:return $U}}class QU{constructor(t,s,a){this.id=t,this.addr=a,this.cache=[],this.type=s.type,this.setValue=FU(s.type)}}class KU{constructor(t,s,a){this.id=t,this.addr=a,this.cache=[],this.type=s.type,this.size=s.size,this.setValue=qU(s.type)}}class eb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,s,a){const u=this.seq;for(let h=0,A=u.length;h!==A;++h){const g=u[h];g.setValue(t,s[g.id],a)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function hd(o,t){o.seq.push(t),o.map[t.id]=t}function tb(o,t,s){const a=o.name,u=a.length;for(Vl.lastIndex=0;;){const h=Vl.exec(a),A=Vl.lastIndex;let g=h[1];const v=h[2]==="]",x=h[3];if(v&&(g=g|0),x===void 0||x==="["&&A+2===u){hd(s,x===void 0?new QU(g,o,t):new KU(g,o,t));break}else{let E=s.map[g];E===void 0&&(E=new eb(g),hd(s,E)),s=E}}}class n0{constructor(t,s){this.seq=[],this.map={};const a=t.getProgramParameter(s,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=t.getActiveUniform(s,u),A=t.getUniformLocation(s,h.name);tb(h,A,this)}}setValue(t,s,a,u){const h=this.map[s];h!==void 0&&h.setValue(t,a,u)}setOptional(t,s,a){const u=s[a];u!==void 0&&this.setValue(t,a,u)}static upload(t,s,a,u){for(let h=0,A=s.length;h!==A;++h){const g=s[h],v=a[g.id];v.needsUpdate!==!1&&g.setValue(t,v.value,u)}}static seqWithValue(t,s){const a=[];for(let u=0,h=t.length;u!==h;++u){const A=t[u];A.id in s&&a.push(A)}return a}}function dd(o,t,s){const a=o.createShader(t);return o.shaderSource(a,s),o.compileShader(a),a}const nb=37297;let ib=0;function rb(o,t){const s=o.split(`
`),a=[],u=Math.max(t-6,0),h=Math.min(t+6,s.length);for(let A=u;A<h;A++){const g=A+1;a.push(`${g===t?">":" "} ${g}: ${s[A]}`)}return a.join(`
`)}function sb(o){const t=Wt.getPrimaries(Wt.workingColorSpace),s=Wt.getPrimaries(o);let a;switch(t===s?a="":t===o0&&s===s0?a="LinearDisplayP3ToLinearSRGB":t===s0&&s===o0&&(a="LinearSRGBToLinearDisplayP3"),o){case Mr:case d0:return[a,"LinearTransferOETF"];case pi:case zc:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[a,"LinearTransferOETF"]}}function pd(o,t,s){const a=o.getShaderParameter(t,o.COMPILE_STATUS),u=o.getShaderInfoLog(t).trim();if(a&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const A=parseInt(h[1]);return s.toUpperCase()+`

`+u+`

`+rb(o.getShaderSource(t),A)}else return u}function ob(o,t){const s=sb(t);return`vec4 ${o}( vec4 value ) { return ${s[0]}( ${s[1]}( value ) ); }`}function ab(o,t){let s;switch(t){case lR:s="Linear";break;case cR:s="Reinhard";break;case uR:s="OptimizedCineon";break;case fR:s="ACESFilmic";break;case dR:s="AgX";break;case pR:s="Neutral";break;case hR:s="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),s="Linear"}return"vec3 "+o+"( vec3 color ) { return "+s+"ToneMapping( color ); }"}function lb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function cb(o){const t=[];for(const s in o){const a=o[s];a!==!1&&t.push("#define "+s+" "+a)}return t.join(`
`)}function ub(o,t){const s={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let u=0;u<a;u++){const h=o.getActiveAttrib(t,u),A=h.name;let g=1;h.type===o.FLOAT_MAT2&&(g=2),h.type===o.FLOAT_MAT3&&(g=3),h.type===o.FLOAT_MAT4&&(g=4),s[A]={type:h.type,location:o.getAttribLocation(t,A),locationSize:g}}return s}function No(o){return o!==""}function md(o,t){const s=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,s).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ad(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(o){return o.replace(fb,db)}const hb=new Map;function db(o,t){let s=yt[t];if(s===void 0){const a=hb.get(t);if(a!==void 0)s=yt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Rc(s)}const pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(o){return o.replace(pb,mb)}function mb(o,t,s,a){let u="";for(let h=parseInt(t);h<parseInt(s);h++)u+=a.replace(/\[\s*i\s*\]/g,"[ "+h+" ]").replace(/UNROLLED_LOOP_INDEX/g,h);return u}function _d(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ab(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Yd?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===LT?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function gb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case js:case $s:t="ENVMAP_TYPE_CUBE";break;case h0:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _b(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function vb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Jd:t="ENVMAP_BLENDING_MULTIPLY";break;case oR:t="ENVMAP_BLENDING_MIX";break;case aR:t="ENVMAP_BLENDING_ADD";break}return t}function yb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const s=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,s),7*16)),texelHeight:a,maxMip:s}}function xb(o,t,s,a){const u=o.getContext(),h=s.defines;let A=s.vertexShader,g=s.fragmentShader;const v=Ab(s),x=gb(s),M=_b(s),E=vb(s),w=yb(s),C=lb(s),P=cb(h),I=u.createProgram();let R,T,W=s.glslVersion?"#version "+s.glslVersion+`
`:"";s.isRawShaderMaterial?(R=["#define SHADER_TYPE "+s.shaderType,"#define SHADER_NAME "+s.shaderName,P].filter(No).join(`
`),R.length>0&&(R+=`
`),T=["#define SHADER_TYPE "+s.shaderType,"#define SHADER_NAME "+s.shaderName,P].filter(No).join(`
`),T.length>0&&(T+=`
`)):(R=[_d(s),"#define SHADER_TYPE "+s.shaderType,"#define SHADER_NAME "+s.shaderName,P,s.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",s.batching?"#define USE_BATCHING":"",s.batchingColor?"#define USE_BATCHING_COLOR":"",s.instancing?"#define USE_INSTANCING":"",s.instancingColor?"#define USE_INSTANCING_COLOR":"",s.instancingMorph?"#define USE_INSTANCING_MORPH":"",s.useFog&&s.fog?"#define USE_FOG":"",s.useFog&&s.fogExp2?"#define FOG_EXP2":"",s.map?"#define USE_MAP":"",s.envMap?"#define USE_ENVMAP":"",s.envMap?"#define "+M:"",s.lightMap?"#define USE_LIGHTMAP":"",s.aoMap?"#define USE_AOMAP":"",s.bumpMap?"#define USE_BUMPMAP":"",s.normalMap?"#define USE_NORMALMAP":"",s.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",s.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",s.displacementMap?"#define USE_DISPLACEMENTMAP":"",s.emissiveMap?"#define USE_EMISSIVEMAP":"",s.anisotropy?"#define USE_ANISOTROPY":"",s.anisotropyMap?"#define USE_ANISOTROPYMAP":"",s.clearcoatMap?"#define USE_CLEARCOATMAP":"",s.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",s.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",s.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",s.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",s.specularMap?"#define USE_SPECULARMAP":"",s.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",s.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",s.roughnessMap?"#define USE_ROUGHNESSMAP":"",s.metalnessMap?"#define USE_METALNESSMAP":"",s.alphaMap?"#define USE_ALPHAMAP":"",s.alphaHash?"#define USE_ALPHAHASH":"",s.transmission?"#define USE_TRANSMISSION":"",s.transmissionMap?"#define USE_TRANSMISSIONMAP":"",s.thicknessMap?"#define USE_THICKNESSMAP":"",s.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",s.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",s.mapUv?"#define MAP_UV "+s.mapUv:"",s.alphaMapUv?"#define ALPHAMAP_UV "+s.alphaMapUv:"",s.lightMapUv?"#define LIGHTMAP_UV "+s.lightMapUv:"",s.aoMapUv?"#define AOMAP_UV "+s.aoMapUv:"",s.emissiveMapUv?"#define EMISSIVEMAP_UV "+s.emissiveMapUv:"",s.bumpMapUv?"#define BUMPMAP_UV "+s.bumpMapUv:"",s.normalMapUv?"#define NORMALMAP_UV "+s.normalMapUv:"",s.displacementMapUv?"#define DISPLACEMENTMAP_UV "+s.displacementMapUv:"",s.metalnessMapUv?"#define METALNESSMAP_UV "+s.metalnessMapUv:"",s.roughnessMapUv?"#define ROUGHNESSMAP_UV "+s.roughnessMapUv:"",s.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+s.anisotropyMapUv:"",s.clearcoatMapUv?"#define CLEARCOATMAP_UV "+s.clearcoatMapUv:"",s.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+s.clearcoatNormalMapUv:"",s.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+s.clearcoatRoughnessMapUv:"",s.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+s.iridescenceMapUv:"",s.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+s.iridescenceThicknessMapUv:"",s.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+s.sheenColorMapUv:"",s.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+s.sheenRoughnessMapUv:"",s.specularMapUv?"#define SPECULARMAP_UV "+s.specularMapUv:"",s.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+s.specularColorMapUv:"",s.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+s.specularIntensityMapUv:"",s.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+s.transmissionMapUv:"",s.thicknessMapUv?"#define THICKNESSMAP_UV "+s.thicknessMapUv:"",s.vertexTangents&&s.flatShading===!1?"#define USE_TANGENT":"",s.vertexColors?"#define USE_COLOR":"",s.vertexAlphas?"#define USE_COLOR_ALPHA":"",s.vertexUv1s?"#define USE_UV1":"",s.vertexUv2s?"#define USE_UV2":"",s.vertexUv3s?"#define USE_UV3":"",s.pointsUvs?"#define USE_POINTS_UV":"",s.flatShading?"#define FLAT_SHADED":"",s.skinning?"#define USE_SKINNING":"",s.morphTargets?"#define USE_MORPHTARGETS":"",s.morphNormals&&s.flatShading===!1?"#define USE_MORPHNORMALS":"",s.morphColors?"#define USE_MORPHCOLORS":"",s.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+s.morphTextureStride:"",s.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+s.morphTargetsCount:"",s.doubleSided?"#define DOUBLE_SIDED":"",s.flipSided?"#define FLIP_SIDED":"",s.shadowMapEnabled?"#define USE_SHADOWMAP":"",s.shadowMapEnabled?"#define "+v:"",s.sizeAttenuation?"#define USE_SIZEATTENUATION":"",s.numLightProbes>0?"#define USE_LIGHT_PROBES":"",s.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),T=[_d(s),"#define SHADER_TYPE "+s.shaderType,"#define SHADER_NAME "+s.shaderName,P,s.useFog&&s.fog?"#define USE_FOG":"",s.useFog&&s.fogExp2?"#define FOG_EXP2":"",s.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",s.map?"#define USE_MAP":"",s.matcap?"#define USE_MATCAP":"",s.envMap?"#define USE_ENVMAP":"",s.envMap?"#define "+x:"",s.envMap?"#define "+M:"",s.envMap?"#define "+E:"",w?"#define CUBEUV_TEXEL_WIDTH "+w.texelWidth:"",w?"#define CUBEUV_TEXEL_HEIGHT "+w.texelHeight:"",w?"#define CUBEUV_MAX_MIP "+w.maxMip+".0":"",s.lightMap?"#define USE_LIGHTMAP":"",s.aoMap?"#define USE_AOMAP":"",s.bumpMap?"#define USE_BUMPMAP":"",s.normalMap?"#define USE_NORMALMAP":"",s.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",s.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",s.emissiveMap?"#define USE_EMISSIVEMAP":"",s.anisotropy?"#define USE_ANISOTROPY":"",s.anisotropyMap?"#define USE_ANISOTROPYMAP":"",s.clearcoat?"#define USE_CLEARCOAT":"",s.clearcoatMap?"#define USE_CLEARCOATMAP":"",s.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",s.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",s.dispersion?"#define USE_DISPERSION":"",s.iridescence?"#define USE_IRIDESCENCE":"",s.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",s.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",s.specularMap?"#define USE_SPECULARMAP":"",s.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",s.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",s.roughnessMap?"#define USE_ROUGHNESSMAP":"",s.metalnessMap?"#define USE_METALNESSMAP":"",s.alphaMap?"#define USE_ALPHAMAP":"",s.alphaTest?"#define USE_ALPHATEST":"",s.alphaHash?"#define USE_ALPHAHASH":"",s.sheen?"#define USE_SHEEN":"",s.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",s.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",s.transmission?"#define USE_TRANSMISSION":"",s.transmissionMap?"#define USE_TRANSMISSIONMAP":"",s.thicknessMap?"#define USE_THICKNESSMAP":"",s.vertexTangents&&s.flatShading===!1?"#define USE_TANGENT":"",s.vertexColors||s.instancingColor||s.batchingColor?"#define USE_COLOR":"",s.vertexAlphas?"#define USE_COLOR_ALPHA":"",s.vertexUv1s?"#define USE_UV1":"",s.vertexUv2s?"#define USE_UV2":"",s.vertexUv3s?"#define USE_UV3":"",s.pointsUvs?"#define USE_POINTS_UV":"",s.gradientMap?"#define USE_GRADIENTMAP":"",s.flatShading?"#define FLAT_SHADED":"",s.doubleSided?"#define DOUBLE_SIDED":"",s.flipSided?"#define FLIP_SIDED":"",s.shadowMapEnabled?"#define USE_SHADOWMAP":"",s.shadowMapEnabled?"#define "+v:"",s.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",s.numLightProbes>0?"#define USE_LIGHT_PROBES":"",s.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",s.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",s.toneMapping!==_r?"#define TONE_MAPPING":"",s.toneMapping!==_r?yt.tonemapping_pars_fragment:"",s.toneMapping!==_r?ab("toneMapping",s.toneMapping):"",s.dithering?"#define DITHERING":"",s.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,ob("linearToOutputTexel",s.outputColorSpace),s.useDepthPacking?"#define DEPTH_PACKING "+s.depthPacking:"",`
`].filter(No).join(`
`)),A=Rc(A),A=md(A,s),A=Ad(A,s),g=Rc(g),g=md(g,s),g=Ad(g,s),A=gd(A),g=gd(g),s.isRawShaderMaterial!==!0&&(W=`#version 300 es
`,R=[C,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,T=["#define varying in",s.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",s.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const V=W+R+A,H=W+T+g,se=dd(u,u.VERTEX_SHADER,V),J=dd(u,u.FRAGMENT_SHADER,H);u.attachShader(I,se),u.attachShader(I,J),s.index0AttributeName!==void 0?u.bindAttribLocation(I,0,s.index0AttributeName):s.morphTargets===!0&&u.bindAttribLocation(I,0,"position"),u.linkProgram(I);function Y(j){if(o.debug.checkShaderErrors){const me=u.getProgramInfoLog(I).trim(),he=u.getShaderInfoLog(se).trim(),Me=u.getShaderInfoLog(J).trim();let Se=!0,ve=!0;if(u.getProgramParameter(I,u.LINK_STATUS)===!1)if(Se=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,I,se,J);else{const Ee=pd(u,se,"vertex"),de=pd(u,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(I,u.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+me+`
`+Ee+`
`+de)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(he===""||Me==="")&&(ve=!1);ve&&(j.diagnostics={runnable:Se,programLog:me,vertexShader:{log:he,prefix:R},fragmentShader:{log:Me,prefix:T}})}u.deleteShader(se),u.deleteShader(J),ae=new n0(u,I),O=ub(u,I)}let ae;this.getUniforms=function(){return ae===void 0&&Y(this),ae};let O;this.getAttributes=function(){return O===void 0&&Y(this),O};let k=s.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=u.getProgramParameter(I,nb)),k},this.destroy=function(){a.releaseStatesOfProgram(this),u.deleteProgram(I),this.program=void 0},this.type=s.shaderType,this.name=s.shaderName,this.id=ib++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=se,this.fragmentShader=J,this}let Mb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const s=t.vertexShader,a=t.fragmentShader,u=this._getShaderStage(s),h=this._getShaderStage(a),A=this._getShaderCacheForMaterial(t);return A.has(u)===!1&&(A.add(u),u.usedTimes++),A.has(h)===!1&&(A.add(h),h.usedTimes++),this}remove(t){const s=this.materialCache.get(t);for(const a of s)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const s=this.materialCache;let a=s.get(t);return a===void 0&&(a=new Set,s.set(t,a)),a}_getShaderStage(t){const s=this.shaderCache;let a=s.get(t);return a===void 0&&(a=new Eb(t),s.set(t,a)),a}}class Eb{constructor(t){this.id=Mb++,this.code=t,this.usedTimes=0}}function wb(o,t,s,a,u,h,A){const g=new hp,v=new Sb,x=new Set,M=[],E=u.logarithmicDepthBuffer,w=u.vertexTextures;let C=u.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function I(O){return x.add(O),O===0?"uv":`uv${O}`}function R(O,k,j,me,he){const Me=me.fog,Se=he.geometry,ve=O.isMeshStandardMaterial?me.environment:null,Ee=(O.isMeshStandardMaterial?s:t).get(O.envMap||ve),de=Ee&&Ee.mapping===h0?Ee.image.height:null,We=P[O.type];O.precision!==null&&(C=u.getMaxPrecision(O.precision),C!==O.precision&&console.warn("THREE.WebGLProgram.getParameters:",O.precision,"not supported, using",C,"instead."));const $e=Se.morphAttributes.position||Se.morphAttributes.normal||Se.morphAttributes.color,Ve=$e!==void 0?$e.length:0;let mt=0;Se.morphAttributes.position!==void 0&&(mt=1),Se.morphAttributes.normal!==void 0&&(mt=2),Se.morphAttributes.color!==void 0&&(mt=3);let Ct,pe,Re,Je;if(We){const bt=Ui[We];Ct=bt.vertexShader,pe=bt.fragmentShader}else Ct=O.vertexShader,pe=O.fragmentShader,v.update(O),Re=v.getVertexShaderID(O),Je=v.getFragmentShaderID(O);const ne=o.getRenderTarget(),Fe=he.isInstancedMesh===!0,Qe=he.isBatchedMesh===!0,nt=!!O.map,Ut=!!O.matcap,Z=!!Ee,en=!!O.aoMap,Et=!!O.lightMap,Ot=!!O.bumpMap,et=!!O.normalMap,an=!!O.displacementMap,pt=!!O.emissiveMap,At=!!O.metalnessMap,X=!!O.roughnessMap,L=O.anisotropy>0,fe=O.clearcoat>0,we=O.dispersion>0,Ue=O.iridescence>0,Te=O.sheen>0,st=O.transmission>0,ke=L&&!!O.anisotropyMap,Oe=fe&&!!O.clearcoatMap,gt=fe&&!!O.clearcoatNormalMap,Ne=fe&&!!O.clearcoatRoughnessMap,Ye=Ue&&!!O.iridescenceMap,Tt=Ue&&!!O.iridescenceThicknessMap,ut=Te&&!!O.sheenColorMap,Ze=Te&&!!O.sheenRoughnessMap,ht=!!O.specularMap,vt=!!O.specularColorMap,$t=!!O.specularIntensityMap,Q=st&&!!O.transmissionMap,Le=st&&!!O.thicknessMap,ye=!!O.gradientMap,xe=!!O.alphaMap,Be=O.alphaTest>0,at=!!O.alphaHash,dt=!!O.extensions;let Xt=_r;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Xt=o.toneMapping);const tn={shaderID:We,shaderType:O.type,shaderName:O.name,vertexShader:Ct,fragmentShader:pe,defines:O.defines,customVertexShaderID:Re,customFragmentShaderID:Je,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:C,batching:Qe,batchingColor:Qe&&he._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&he.instanceColor!==null,instancingMorph:Fe&&he.morphTexture!==null,supportsVertexTextures:w,outputColorSpace:ne===null?o.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Mr,alphaToCoverage:!!O.alphaToCoverage,map:nt,matcap:Ut,envMap:Z,envMapMode:Z&&Ee.mapping,envMapCubeUVHeight:de,aoMap:en,lightMap:Et,bumpMap:Ot,normalMap:et,displacementMap:w&&an,emissiveMap:pt,normalMapObjectSpace:et&&O.normalMapType===vR,normalMapTangentSpace:et&&O.normalMapType===_R,metalnessMap:At,roughnessMap:X,anisotropy:L,anisotropyMap:ke,clearcoat:fe,clearcoatMap:Oe,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ne,dispersion:we,iridescence:Ue,iridescenceMap:Ye,iridescenceThicknessMap:Tt,sheen:Te,sheenColorMap:ut,sheenRoughnessMap:Ze,specularMap:ht,specularColorMap:vt,specularIntensityMap:$t,transmission:st,transmissionMap:Q,thicknessMap:Le,gradientMap:ye,opaque:O.transparent===!1&&O.blending===Hs&&O.alphaToCoverage===!1,alphaMap:xe,alphaTest:Be,alphaHash:at,combine:O.combine,mapUv:nt&&I(O.map.channel),aoMapUv:en&&I(O.aoMap.channel),lightMapUv:Et&&I(O.lightMap.channel),bumpMapUv:Ot&&I(O.bumpMap.channel),normalMapUv:et&&I(O.normalMap.channel),displacementMapUv:an&&I(O.displacementMap.channel),emissiveMapUv:pt&&I(O.emissiveMap.channel),metalnessMapUv:At&&I(O.metalnessMap.channel),roughnessMapUv:X&&I(O.roughnessMap.channel),anisotropyMapUv:ke&&I(O.anisotropyMap.channel),clearcoatMapUv:Oe&&I(O.clearcoatMap.channel),clearcoatNormalMapUv:gt&&I(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&I(O.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&I(O.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&I(O.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&I(O.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&I(O.sheenRoughnessMap.channel),specularMapUv:ht&&I(O.specularMap.channel),specularColorMapUv:vt&&I(O.specularColorMap.channel),specularIntensityMapUv:$t&&I(O.specularIntensityMap.channel),transmissionMapUv:Q&&I(O.transmissionMap.channel),thicknessMapUv:Le&&I(O.thicknessMap.channel),alphaMapUv:xe&&I(O.alphaMap.channel),vertexTangents:!!Se.attributes.tangent&&(et||L),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!Se.attributes.color&&Se.attributes.color.itemSize===4,pointsUvs:he.isPoints===!0&&!!Se.attributes.uv&&(nt||xe),fog:!!Me,useFog:O.fog===!0,fogExp2:!!Me&&Me.isFogExp2,flatShading:O.flatShading===!0,sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:E,skinning:he.isSkinnedMesh===!0,morphTargets:Se.morphAttributes.position!==void 0,morphNormals:Se.morphAttributes.normal!==void 0,morphColors:Se.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:mt,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numClippingPlanes:A.numPlanes,numClipIntersection:A.numIntersection,dithering:O.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:Xt,decodeVideoTexture:nt&&O.map.isVideoTexture===!0&&Wt.getTransfer(O.map.colorSpace)===Kt,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===Zi,flipSided:O.side===Bn,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:dt&&O.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&O.extensions.multiDraw===!0||Qe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return tn.vertexUv1s=x.has(1),tn.vertexUv2s=x.has(2),tn.vertexUv3s=x.has(3),x.clear(),tn}function T(O){const k=[];if(O.shaderID?k.push(O.shaderID):(k.push(O.customVertexShaderID),k.push(O.customFragmentShaderID)),O.defines!==void 0)for(const j in O.defines)k.push(j),k.push(O.defines[j]);return O.isRawShaderMaterial===!1&&(W(k,O),V(k,O),k.push(o.outputColorSpace)),k.push(O.customProgramCacheKey),k.join()}function W(O,k){O.push(k.precision),O.push(k.outputColorSpace),O.push(k.envMapMode),O.push(k.envMapCubeUVHeight),O.push(k.mapUv),O.push(k.alphaMapUv),O.push(k.lightMapUv),O.push(k.aoMapUv),O.push(k.bumpMapUv),O.push(k.normalMapUv),O.push(k.displacementMapUv),O.push(k.emissiveMapUv),O.push(k.metalnessMapUv),O.push(k.roughnessMapUv),O.push(k.anisotropyMapUv),O.push(k.clearcoatMapUv),O.push(k.clearcoatNormalMapUv),O.push(k.clearcoatRoughnessMapUv),O.push(k.iridescenceMapUv),O.push(k.iridescenceThicknessMapUv),O.push(k.sheenColorMapUv),O.push(k.sheenRoughnessMapUv),O.push(k.specularMapUv),O.push(k.specularColorMapUv),O.push(k.specularIntensityMapUv),O.push(k.transmissionMapUv),O.push(k.thicknessMapUv),O.push(k.combine),O.push(k.fogExp2),O.push(k.sizeAttenuation),O.push(k.morphTargetsCount),O.push(k.morphAttributeCount),O.push(k.numDirLights),O.push(k.numPointLights),O.push(k.numSpotLights),O.push(k.numSpotLightMaps),O.push(k.numHemiLights),O.push(k.numRectAreaLights),O.push(k.numDirLightShadows),O.push(k.numPointLightShadows),O.push(k.numSpotLightShadows),O.push(k.numSpotLightShadowsWithMaps),O.push(k.numLightProbes),O.push(k.shadowMapType),O.push(k.toneMapping),O.push(k.numClippingPlanes),O.push(k.numClipIntersection),O.push(k.depthPacking)}function V(O,k){g.disableAll(),k.supportsVertexTextures&&g.enable(0),k.instancing&&g.enable(1),k.instancingColor&&g.enable(2),k.instancingMorph&&g.enable(3),k.matcap&&g.enable(4),k.envMap&&g.enable(5),k.normalMapObjectSpace&&g.enable(6),k.normalMapTangentSpace&&g.enable(7),k.clearcoat&&g.enable(8),k.iridescence&&g.enable(9),k.alphaTest&&g.enable(10),k.vertexColors&&g.enable(11),k.vertexAlphas&&g.enable(12),k.vertexUv1s&&g.enable(13),k.vertexUv2s&&g.enable(14),k.vertexUv3s&&g.enable(15),k.vertexTangents&&g.enable(16),k.anisotropy&&g.enable(17),k.alphaHash&&g.enable(18),k.batching&&g.enable(19),k.dispersion&&g.enable(20),k.batchingColor&&g.enable(21),O.push(g.mask),g.disableAll(),k.fog&&g.enable(0),k.useFog&&g.enable(1),k.flatShading&&g.enable(2),k.logarithmicDepthBuffer&&g.enable(3),k.skinning&&g.enable(4),k.morphTargets&&g.enable(5),k.morphNormals&&g.enable(6),k.morphColors&&g.enable(7),k.premultipliedAlpha&&g.enable(8),k.shadowMapEnabled&&g.enable(9),k.doubleSided&&g.enable(10),k.flipSided&&g.enable(11),k.useDepthPacking&&g.enable(12),k.dithering&&g.enable(13),k.transmission&&g.enable(14),k.sheen&&g.enable(15),k.opaque&&g.enable(16),k.pointsUvs&&g.enable(17),k.decodeVideoTexture&&g.enable(18),k.alphaToCoverage&&g.enable(19),O.push(g.mask)}function H(O){const k=P[O.type];let j;if(k){const me=Ui[k];j=l4.clone(me.uniforms)}else j=O.uniforms;return j}function se(O,k){let j;for(let me=0,he=M.length;me<he;me++){const Me=M[me];if(Me.cacheKey===k){j=Me,++j.usedTimes;break}}return j===void 0&&(j=new xb(o,k,O,h),M.push(j)),j}function J(O){if(--O.usedTimes===0){const k=M.indexOf(O);M[k]=M[M.length-1],M.pop(),O.destroy()}}function Y(O){v.remove(O)}function ae(){v.dispose()}return{getParameters:R,getProgramCacheKey:T,getUniforms:H,acquireProgram:se,releaseProgram:J,releaseShaderCache:Y,programs:M,dispose:ae}}function Tb(){let o=new WeakMap;function t(h){let A=o.get(h);return A===void 0&&(A={},o.set(h,A)),A}function s(h){o.delete(h)}function a(h,A,g){o.get(h)[A]=g}function u(){o=new WeakMap}return{get:t,remove:s,update:a,dispose:u}}function Rb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function vd(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function yd(){const o=[];let t=0;const s=[],a=[],u=[];function h(){t=0,s.length=0,a.length=0,u.length=0}function A(E,w,C,P,I,R){let T=o[t];return T===void 0?(T={id:E.id,object:E,geometry:w,material:C,groupOrder:P,renderOrder:E.renderOrder,z:I,group:R},o[t]=T):(T.id=E.id,T.object=E,T.geometry=w,T.material=C,T.groupOrder=P,T.renderOrder=E.renderOrder,T.z=I,T.group=R),t++,T}function g(E,w,C,P,I,R){const T=A(E,w,C,P,I,R);C.transmission>0?a.push(T):C.transparent===!0?u.push(T):s.push(T)}function v(E,w,C,P,I,R){const T=A(E,w,C,P,I,R);C.transmission>0?a.unshift(T):C.transparent===!0?u.unshift(T):s.unshift(T)}function x(E,w){s.length>1&&s.sort(E||Rb),a.length>1&&a.sort(w||vd),u.length>1&&u.sort(w||vd)}function M(){for(let E=t,w=o.length;E<w;E++){const C=o[E];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:s,transmissive:a,transparent:u,init:h,push:g,unshift:v,finish:M,sort:x}}function Cb(){let o=new WeakMap;function t(a,u){const h=o.get(a);let A;return h===void 0?(A=new yd,o.set(a,[A])):u>=h.length?(A=new yd,h.push(A)):A=h[u],A}function s(){o=new WeakMap}return{get:t,dispose:s}}function Ub(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let s;switch(t.type){case"DirectionalLight":s={direction:new le,color:new zt};break;case"SpotLight":s={position:new le,direction:new le,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":s={position:new le,color:new zt,distance:0,decay:0};break;case"HemisphereLight":s={direction:new le,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":s={color:new zt,position:new le,halfWidth:new le,halfHeight:new le};break}return o[t.id]=s,s}}}function bb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let s;switch(t.type){case"DirectionalLight":s={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":s={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":s={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=s,s}}}let Fb=0;function Pb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Nb(o){const t=new Ub,s=bb(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)a.probe.push(new le);const u=new le,h=new dn,A=new dn;function g(x){let M=0,E=0,w=0;for(let O=0;O<9;O++)a.probe[O].set(0,0,0);let C=0,P=0,I=0,R=0,T=0,W=0,V=0,H=0,se=0,J=0,Y=0;x.sort(Pb);for(let O=0,k=x.length;O<k;O++){const j=x[O],me=j.color,he=j.intensity,Me=j.distance,Se=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)M+=me.r*he,E+=me.g*he,w+=me.b*he;else if(j.isLightProbe){for(let ve=0;ve<9;ve++)a.probe[ve].addScaledVector(j.sh.coefficients[ve],he);Y++}else if(j.isDirectionalLight){const ve=t.get(j);if(ve.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Ee=j.shadow,de=s.get(j);de.shadowIntensity=Ee.intensity,de.shadowBias=Ee.bias,de.shadowNormalBias=Ee.normalBias,de.shadowRadius=Ee.radius,de.shadowMapSize=Ee.mapSize,a.directionalShadow[C]=de,a.directionalShadowMap[C]=Se,a.directionalShadowMatrix[C]=j.shadow.matrix,W++}a.directional[C]=ve,C++}else if(j.isSpotLight){const ve=t.get(j);ve.position.setFromMatrixPosition(j.matrixWorld),ve.color.copy(me).multiplyScalar(he),ve.distance=Me,ve.coneCos=Math.cos(j.angle),ve.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ve.decay=j.decay,a.spot[I]=ve;const Ee=j.shadow;if(j.map&&(a.spotLightMap[se]=j.map,se++,Ee.updateMatrices(j),j.castShadow&&J++),a.spotLightMatrix[I]=Ee.matrix,j.castShadow){const de=s.get(j);de.shadowIntensity=Ee.intensity,de.shadowBias=Ee.bias,de.shadowNormalBias=Ee.normalBias,de.shadowRadius=Ee.radius,de.shadowMapSize=Ee.mapSize,a.spotShadow[I]=de,a.spotShadowMap[I]=Se,H++}I++}else if(j.isRectAreaLight){const ve=t.get(j);ve.color.copy(me).multiplyScalar(he),ve.halfWidth.set(j.width*.5,0,0),ve.halfHeight.set(0,j.height*.5,0),a.rectArea[R]=ve,R++}else if(j.isPointLight){const ve=t.get(j);if(ve.color.copy(j.color).multiplyScalar(j.intensity),ve.distance=j.distance,ve.decay=j.decay,j.castShadow){const Ee=j.shadow,de=s.get(j);de.shadowIntensity=Ee.intensity,de.shadowBias=Ee.bias,de.shadowNormalBias=Ee.normalBias,de.shadowRadius=Ee.radius,de.shadowMapSize=Ee.mapSize,de.shadowCameraNear=Ee.camera.near,de.shadowCameraFar=Ee.camera.far,a.pointShadow[P]=de,a.pointShadowMap[P]=Se,a.pointShadowMatrix[P]=j.shadow.matrix,V++}a.point[P]=ve,P++}else if(j.isHemisphereLight){const ve=t.get(j);ve.skyColor.copy(j.color).multiplyScalar(he),ve.groundColor.copy(j.groundColor).multiplyScalar(he),a.hemi[T]=ve,T++}}R>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ge.LTC_FLOAT_1,a.rectAreaLTC2=Ge.LTC_FLOAT_2):(a.rectAreaLTC1=Ge.LTC_HALF_1,a.rectAreaLTC2=Ge.LTC_HALF_2)),a.ambient[0]=M,a.ambient[1]=E,a.ambient[2]=w;const ae=a.hash;(ae.directionalLength!==C||ae.pointLength!==P||ae.spotLength!==I||ae.rectAreaLength!==R||ae.hemiLength!==T||ae.numDirectionalShadows!==W||ae.numPointShadows!==V||ae.numSpotShadows!==H||ae.numSpotMaps!==se||ae.numLightProbes!==Y)&&(a.directional.length=C,a.spot.length=I,a.rectArea.length=R,a.point.length=P,a.hemi.length=T,a.directionalShadow.length=W,a.directionalShadowMap.length=W,a.pointShadow.length=V,a.pointShadowMap.length=V,a.spotShadow.length=H,a.spotShadowMap.length=H,a.directionalShadowMatrix.length=W,a.pointShadowMatrix.length=V,a.spotLightMatrix.length=H+se-J,a.spotLightMap.length=se,a.numSpotLightShadowsWithMaps=J,a.numLightProbes=Y,ae.directionalLength=C,ae.pointLength=P,ae.spotLength=I,ae.rectAreaLength=R,ae.hemiLength=T,ae.numDirectionalShadows=W,ae.numPointShadows=V,ae.numSpotShadows=H,ae.numSpotMaps=se,ae.numLightProbes=Y,a.version=Fb++)}function v(x,M){let E=0,w=0,C=0,P=0,I=0;const R=M.matrixWorldInverse;for(let T=0,W=x.length;T<W;T++){const V=x[T];if(V.isDirectionalLight){const H=a.directional[E];H.direction.setFromMatrixPosition(V.matrixWorld),u.setFromMatrixPosition(V.target.matrixWorld),H.direction.sub(u),H.direction.transformDirection(R),E++}else if(V.isSpotLight){const H=a.spot[C];H.position.setFromMatrixPosition(V.matrixWorld),H.position.applyMatrix4(R),H.direction.setFromMatrixPosition(V.matrixWorld),u.setFromMatrixPosition(V.target.matrixWorld),H.direction.sub(u),H.direction.transformDirection(R),C++}else if(V.isRectAreaLight){const H=a.rectArea[P];H.position.setFromMatrixPosition(V.matrixWorld),H.position.applyMatrix4(R),A.identity(),h.copy(V.matrixWorld),h.premultiply(R),A.extractRotation(h),H.halfWidth.set(V.width*.5,0,0),H.halfHeight.set(0,V.height*.5,0),H.halfWidth.applyMatrix4(A),H.halfHeight.applyMatrix4(A),P++}else if(V.isPointLight){const H=a.point[w];H.position.setFromMatrixPosition(V.matrixWorld),H.position.applyMatrix4(R),w++}else if(V.isHemisphereLight){const H=a.hemi[I];H.direction.setFromMatrixPosition(V.matrixWorld),H.direction.transformDirection(R),I++}}}return{setup:g,setupView:v,state:a}}function xd(o){const t=new Nb(o),s=[],a=[];function u(M){x.camera=M,s.length=0,a.length=0}function h(M){s.push(M)}function A(M){a.push(M)}function g(){t.setup(s)}function v(M){t.setupView(s,M)}const x={lightsArray:s,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:u,state:x,setupLights:g,setupLightsView:v,pushLight:h,pushShadow:A}}function Lb(o){let t=new WeakMap;function s(u,h=0){const A=t.get(u);let g;return A===void 0?(g=new xd(o),t.set(u,[g])):h>=A.length?(g=new xd(o),A.push(g)):g=A[h],g}function a(){t=new WeakMap}return{get:s,dispose:a}}class Ib extends Xo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Db extends Xo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vb(o,t,s){let a=new yp;const u=new Mt,h=new Mt,A=new Mn,g=new Ib({depthPacking:gR}),v=new Db,x={},M=s.maxTextureSize,E={[vr]:Bn,[Bn]:vr,[Zi]:Zi},w=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Bb,fragmentShader:kb}),C=w.clone();C.defines.HORIZONTAL_PASS=1;const P=new Ki;P.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new ji(P,w),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yd;let T=this.type;this.render=function(J,Y,ae){if(R.enabled===!1||R.autoUpdate===!1&&R.needsUpdate===!1||J.length===0)return;const O=o.getRenderTarget(),k=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),me=o.state;me.setBlending(gr),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const he=T!==Hi&&this.type===Hi,Me=T===Hi&&this.type!==Hi;for(let Se=0,ve=J.length;Se<ve;Se++){const Ee=J[Se],de=Ee.shadow;if(de===void 0){console.warn("THREE.WebGLShadowMap:",Ee,"has no shadow.");continue}if(de.autoUpdate===!1&&de.needsUpdate===!1)continue;u.copy(de.mapSize);const We=de.getFrameExtents();if(u.multiply(We),h.copy(de.mapSize),(u.x>M||u.y>M)&&(u.x>M&&(h.x=Math.floor(M/We.x),u.x=h.x*We.x,de.mapSize.x=h.x),u.y>M&&(h.y=Math.floor(M/We.y),u.y=h.y*We.y,de.mapSize.y=h.y)),de.map===null||he===!0||Me===!0){const Ve=this.type!==Hi?{minFilter:si,magFilter:si}:{};de.map!==null&&de.map.dispose(),de.map=new rs(u.x,u.y,Ve),de.map.texture.name=Ee.name+".shadowMap",de.camera.updateProjectionMatrix()}o.setRenderTarget(de.map),o.clear();const $e=de.getViewportCount();for(let Ve=0;Ve<$e;Ve++){const mt=de.getViewport(Ve);A.set(h.x*mt.x,h.y*mt.y,h.x*mt.z,h.y*mt.w),me.viewport(A),de.updateMatrices(Ee,Ve),a=de.getFrustum(),H(Y,ae,de.camera,Ee,this.type)}de.isPointLightShadow!==!0&&this.type===Hi&&W(de,ae),de.needsUpdate=!1}T=this.type,R.needsUpdate=!1,o.setRenderTarget(O,k,j)};function W(J,Y){const ae=t.update(I);w.defines.VSM_SAMPLES!==J.blurSamples&&(w.defines.VSM_SAMPLES=J.blurSamples,C.defines.VSM_SAMPLES=J.blurSamples,w.needsUpdate=!0,C.needsUpdate=!0),J.mapPass===null&&(J.mapPass=new rs(u.x,u.y)),w.uniforms.shadow_pass.value=J.map.texture,w.uniforms.resolution.value=J.mapSize,w.uniforms.radius.value=J.radius,o.setRenderTarget(J.mapPass),o.clear(),o.renderBufferDirect(Y,null,ae,w,I,null),C.uniforms.shadow_pass.value=J.mapPass.texture,C.uniforms.resolution.value=J.mapSize,C.uniforms.radius.value=J.radius,o.setRenderTarget(J.map),o.clear(),o.renderBufferDirect(Y,null,ae,C,I,null)}function V(J,Y,ae,O){let k=null;const j=ae.isPointLight===!0?J.customDistanceMaterial:J.customDepthMaterial;if(j!==void 0)k=j;else if(k=ae.isPointLight===!0?v:g,o.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0){const me=k.uuid,he=Y.uuid;let Me=x[me];Me===void 0&&(Me={},x[me]=Me);let Se=Me[he];Se===void 0&&(Se=k.clone(),Me[he]=Se,Y.addEventListener("dispose",se)),k=Se}if(k.visible=Y.visible,k.wireframe=Y.wireframe,O===Hi?k.side=Y.shadowSide!==null?Y.shadowSide:Y.side:k.side=Y.shadowSide!==null?Y.shadowSide:E[Y.side],k.alphaMap=Y.alphaMap,k.alphaTest=Y.alphaTest,k.map=Y.map,k.clipShadows=Y.clipShadows,k.clippingPlanes=Y.clippingPlanes,k.clipIntersection=Y.clipIntersection,k.displacementMap=Y.displacementMap,k.displacementScale=Y.displacementScale,k.displacementBias=Y.displacementBias,k.wireframeLinewidth=Y.wireframeLinewidth,k.linewidth=Y.linewidth,ae.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const me=o.properties.get(k);me.light=ae}return k}function H(J,Y,ae,O,k){if(J.visible===!1)return;if(J.layers.test(Y.layers)&&(J.isMesh||J.isLine||J.isPoints)&&(J.castShadow||J.receiveShadow&&k===Hi)&&(!J.frustumCulled||a.intersectsObject(J))){J.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,J.matrixWorld);const he=t.update(J),Me=J.material;if(Array.isArray(Me)){const Se=he.groups;for(let ve=0,Ee=Se.length;ve<Ee;ve++){const de=Se[ve],We=Me[de.materialIndex];if(We&&We.visible){const $e=V(J,We,O,k);J.onBeforeShadow(o,J,Y,ae,he,$e,de),o.renderBufferDirect(ae,null,he,$e,J,de),J.onAfterShadow(o,J,Y,ae,he,$e,de)}}}else if(Me.visible){const Se=V(J,Me,O,k);J.onBeforeShadow(o,J,Y,ae,he,Se,null),o.renderBufferDirect(ae,null,he,Se,J,null),J.onAfterShadow(o,J,Y,ae,he,Se,null)}}const me=J.children;for(let he=0,Me=me.length;he<Me;he++)H(me[he],Y,ae,O,k)}function se(J){J.target.removeEventListener("dispose",se);for(const ae in x){const O=x[ae],k=J.target.uuid;k in O&&(O[k].dispose(),delete O[k])}}}function Ob(o){function t(){let Q=!1;const Le=new Mn;let ye=null;const xe=new Mn(0,0,0,0);return{setMask:function(Be){ye!==Be&&!Q&&(o.colorMask(Be,Be,Be,Be),ye=Be)},setLocked:function(Be){Q=Be},setClear:function(Be,at,dt,Xt,tn){tn===!0&&(Be*=Xt,at*=Xt,dt*=Xt),Le.set(Be,at,dt,Xt),xe.equals(Le)===!1&&(o.clearColor(Be,at,dt,Xt),xe.copy(Le))},reset:function(){Q=!1,ye=null,xe.set(-1,0,0,0)}}}function s(){let Q=!1,Le=null,ye=null,xe=null;return{setTest:function(Be){Be?Je(o.DEPTH_TEST):ne(o.DEPTH_TEST)},setMask:function(Be){Le!==Be&&!Q&&(o.depthMask(Be),Le=Be)},setFunc:function(Be){if(ye!==Be){switch(Be){case KT:o.depthFunc(o.NEVER);break;case eR:o.depthFunc(o.ALWAYS);break;case tR:o.depthFunc(o.LESS);break;case i0:o.depthFunc(o.LEQUAL);break;case nR:o.depthFunc(o.EQUAL);break;case iR:o.depthFunc(o.GEQUAL);break;case rR:o.depthFunc(o.GREATER);break;case sR:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ye=Be}},setLocked:function(Be){Q=Be},setClear:function(Be){xe!==Be&&(o.clearDepth(Be),xe=Be)},reset:function(){Q=!1,Le=null,ye=null,xe=null}}}function a(){let Q=!1,Le=null,ye=null,xe=null,Be=null,at=null,dt=null,Xt=null,tn=null;return{setTest:function(bt){Q||(bt?Je(o.STENCIL_TEST):ne(o.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!Q&&(o.stencilMask(bt),Le=bt)},setFunc:function(bt,oi,Jn){(ye!==bt||xe!==oi||Be!==Jn)&&(o.stencilFunc(bt,oi,Jn),ye=bt,xe=oi,Be=Jn)},setOp:function(bt,oi,Jn){(at!==bt||dt!==oi||Xt!==Jn)&&(o.stencilOp(bt,oi,Jn),at=bt,dt=oi,Xt=Jn)},setLocked:function(bt){Q=bt},setClear:function(bt){tn!==bt&&(o.clearStencil(bt),tn=bt)},reset:function(){Q=!1,Le=null,ye=null,xe=null,Be=null,at=null,dt=null,Xt=null,tn=null}}}const u=new t,h=new s,A=new a,g=new WeakMap,v=new WeakMap;let x={},M={},E=new WeakMap,w=[],C=null,P=!1,I=null,R=null,T=null,W=null,V=null,H=null,se=null,J=new zt(0,0,0),Y=0,ae=!1,O=null,k=null,j=null,me=null,he=null;const Me=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Se=!1,ve=0;const Ee=o.getParameter(o.VERSION);Ee.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(Ee)[1]),Se=ve>=1):Ee.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(Ee)[1]),Se=ve>=2);let de=null,We={};const $e=o.getParameter(o.SCISSOR_BOX),Ve=o.getParameter(o.VIEWPORT),mt=new Mn().fromArray($e),Ct=new Mn().fromArray(Ve);function pe(Q,Le,ye,xe){const Be=new Uint8Array(4),at=o.createTexture();o.bindTexture(Q,at),o.texParameteri(Q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let dt=0;dt<ye;dt++)Q===o.TEXTURE_3D||Q===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,xe,0,o.RGBA,o.UNSIGNED_BYTE,Be):o.texImage2D(Le+dt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Be);return at}const Re={};Re[o.TEXTURE_2D]=pe(o.TEXTURE_2D,o.TEXTURE_2D,1),Re[o.TEXTURE_CUBE_MAP]=pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[o.TEXTURE_2D_ARRAY]=pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Re[o.TEXTURE_3D]=pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),A.setClear(0),Je(o.DEPTH_TEST),h.setFunc(i0),Ot(!1),et(wh),Je(o.CULL_FACE),en(gr);function Je(Q){x[Q]!==!0&&(o.enable(Q),x[Q]=!0)}function ne(Q){x[Q]!==!1&&(o.disable(Q),x[Q]=!1)}function Fe(Q,Le){return M[Q]!==Le?(o.bindFramebuffer(Q,Le),M[Q]=Le,Q===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Le),Q===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Qe(Q,Le){let ye=w,xe=!1;if(Q){ye=E.get(Le),ye===void 0&&(ye=[],E.set(Le,ye));const Be=Q.textures;if(ye.length!==Be.length||ye[0]!==o.COLOR_ATTACHMENT0){for(let at=0,dt=Be.length;at<dt;at++)ye[at]=o.COLOR_ATTACHMENT0+at;ye.length=Be.length,xe=!0}}else ye[0]!==o.BACK&&(ye[0]=o.BACK,xe=!0);xe&&o.drawBuffers(ye)}function nt(Q){return C!==Q?(o.useProgram(Q),C=Q,!0):!1}const Ut={[qr]:o.FUNC_ADD,[DT]:o.FUNC_SUBTRACT,[BT]:o.FUNC_REVERSE_SUBTRACT};Ut[kT]=o.MIN,Ut[VT]=o.MAX;const Z={[OT]:o.ZERO,[zT]:o.ONE,[GT]:o.SRC_COLOR,[jl]:o.SRC_ALPHA,[JT]:o.SRC_ALPHA_SATURATE,[ZT]:o.DST_COLOR,[XT]:o.DST_ALPHA,[WT]:o.ONE_MINUS_SRC_COLOR,[$l]:o.ONE_MINUS_SRC_ALPHA,[YT]:o.ONE_MINUS_DST_COLOR,[HT]:o.ONE_MINUS_DST_ALPHA,[jT]:o.CONSTANT_COLOR,[$T]:o.ONE_MINUS_CONSTANT_COLOR,[qT]:o.CONSTANT_ALPHA,[QT]:o.ONE_MINUS_CONSTANT_ALPHA};function en(Q,Le,ye,xe,Be,at,dt,Xt,tn,bt){if(Q===gr){P===!0&&(ne(o.BLEND),P=!1);return}if(P===!1&&(Je(o.BLEND),P=!0),Q!==IT){if(Q!==I||bt!==ae){if((R!==qr||V!==qr)&&(o.blendEquation(o.FUNC_ADD),R=qr,V=qr),bt)switch(Q){case Hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Th:o.blendFunc(o.ONE,o.ONE);break;case Rh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ch:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Th:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Rh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ch:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}T=null,W=null,H=null,se=null,J.set(0,0,0),Y=0,I=Q,ae=bt}return}Be=Be||Le,at=at||ye,dt=dt||xe,(Le!==R||Be!==V)&&(o.blendEquationSeparate(Ut[Le],Ut[Be]),R=Le,V=Be),(ye!==T||xe!==W||at!==H||dt!==se)&&(o.blendFuncSeparate(Z[ye],Z[xe],Z[at],Z[dt]),T=ye,W=xe,H=at,se=dt),(Xt.equals(J)===!1||tn!==Y)&&(o.blendColor(Xt.r,Xt.g,Xt.b,tn),J.copy(Xt),Y=tn),I=Q,ae=!1}function Et(Q,Le){Q.side===Zi?ne(o.CULL_FACE):Je(o.CULL_FACE);let ye=Q.side===Bn;Le&&(ye=!ye),Ot(ye),Q.blending===Hs&&Q.transparent===!1?en(gr):en(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),h.setFunc(Q.depthFunc),h.setTest(Q.depthTest),h.setMask(Q.depthWrite),u.setMask(Q.colorWrite);const xe=Q.stencilWrite;A.setTest(xe),xe&&(A.setMask(Q.stencilWriteMask),A.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),A.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),pt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Je(o.SAMPLE_ALPHA_TO_COVERAGE):ne(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(Q){O!==Q&&(Q?o.frontFace(o.CW):o.frontFace(o.CCW),O=Q)}function et(Q){Q!==PT?(Je(o.CULL_FACE),Q!==k&&(Q===wh?o.cullFace(o.BACK):Q===NT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ne(o.CULL_FACE),k=Q}function an(Q){Q!==j&&(Se&&o.lineWidth(Q),j=Q)}function pt(Q,Le,ye){Q?(Je(o.POLYGON_OFFSET_FILL),(me!==Le||he!==ye)&&(o.polygonOffset(Le,ye),me=Le,he=ye)):ne(o.POLYGON_OFFSET_FILL)}function At(Q){Q?Je(o.SCISSOR_TEST):ne(o.SCISSOR_TEST)}function X(Q){Q===void 0&&(Q=o.TEXTURE0+Me-1),de!==Q&&(o.activeTexture(Q),de=Q)}function L(Q,Le,ye){ye===void 0&&(de===null?ye=o.TEXTURE0+Me-1:ye=de);let xe=We[ye];xe===void 0&&(xe={type:void 0,texture:void 0},We[ye]=xe),(xe.type!==Q||xe.texture!==Le)&&(de!==ye&&(o.activeTexture(ye),de=ye),o.bindTexture(Q,Le||Re[Q]),xe.type=Q,xe.texture=Le)}function fe(){const Q=We[de];Q!==void 0&&Q.type!==void 0&&(o.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function we(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ue(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Te(){try{o.texSubImage2D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function st(){try{o.texSubImage3D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ke(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Oe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function gt(){try{o.texStorage2D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ne(){try{o.texStorage3D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ye(){try{o.texImage2D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Tt(){try{o.texImage3D.apply(o,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ut(Q){mt.equals(Q)===!1&&(o.scissor(Q.x,Q.y,Q.z,Q.w),mt.copy(Q))}function Ze(Q){Ct.equals(Q)===!1&&(o.viewport(Q.x,Q.y,Q.z,Q.w),Ct.copy(Q))}function ht(Q,Le){let ye=v.get(Le);ye===void 0&&(ye=new WeakMap,v.set(Le,ye));let xe=ye.get(Q);xe===void 0&&(xe=o.getUniformBlockIndex(Le,Q.name),ye.set(Q,xe))}function vt(Q,Le){const xe=v.get(Le).get(Q);g.get(Le)!==xe&&(o.uniformBlockBinding(Le,xe,Q.__bindingPointIndex),g.set(Le,xe))}function $t(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},de=null,We={},M={},E=new WeakMap,w=[],C=null,P=!1,I=null,R=null,T=null,W=null,V=null,H=null,se=null,J=new zt(0,0,0),Y=0,ae=!1,O=null,k=null,j=null,me=null,he=null,mt.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),A.reset()}return{buffers:{color:u,depth:h,stencil:A},enable:Je,disable:ne,bindFramebuffer:Fe,drawBuffers:Qe,useProgram:nt,setBlending:en,setMaterial:Et,setFlipSided:Ot,setCullFace:et,setLineWidth:an,setPolygonOffset:pt,setScissorTest:At,activeTexture:X,bindTexture:L,unbindTexture:fe,compressedTexImage2D:we,compressedTexImage3D:Ue,texImage2D:Ye,texImage3D:Tt,updateUBOMapping:ht,uniformBlockBinding:vt,texStorage2D:gt,texStorage3D:Ne,texSubImage2D:Te,texSubImage3D:st,compressedTexSubImage2D:ke,compressedTexSubImage3D:Oe,scissor:ut,viewport:Ze,reset:$t}}function Md(o,t,s,a){const u=zb(a);switch(s){case Kd:return o*t;case tp:return o*t;case np:return o*t*2;case ip:return o*t/u.components*u.byteLength;case kc:return o*t/u.components*u.byteLength;case rp:return o*t*2/u.components*u.byteLength;case Vc:return o*t*2/u.components*u.byteLength;case ep:return o*t*3/u.components*u.byteLength;case Ai:return o*t*4/u.components*u.byteLength;case Oc:return o*t*4/u.components*u.byteLength;case qa:case Qa:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ka:case e0:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nc:case rc:return Math.max(o,16)*Math.max(t,8)/4;case tc:case ic:return Math.max(o,8)*Math.max(t,8)/2;case sc:case oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ac:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case dc:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case t0:case Mc:case Sc:return Math.ceil(o/4)*Math.ceil(t/4)*16;case sp:case Ec:return Math.ceil(o/4)*Math.ceil(t/4)*8;case wc:case Tc:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${s} format.`)}function zb(o){switch(o){case qi:case $d:return{byteLength:1,components:1};case ko:case qd:case Go:return{byteLength:2,components:1};case Dc:case Bc:return{byteLength:2,components:4};case is:case Ic:case Yi:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Gb(o,t,s,a,u,h,A){const g=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new Mt,M=new WeakMap;let E;const w=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(X,L){return C?new OffscreenCanvas(X,L):Oo("canvas")}function I(X,L,fe){let we=1;const Ue=At(X);if((Ue.width>fe||Ue.height>fe)&&(we=fe/Math.max(Ue.width,Ue.height)),we<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){const Te=Math.floor(we*Ue.width),st=Math.floor(we*Ue.height);E===void 0&&(E=P(Te,st));const ke=L?P(Te,st):E;return ke.width=Te,ke.height=st,ke.getContext("2d").drawImage(X,0,0,Te,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ue.width+"x"+Ue.height+") to ("+Te+"x"+st+")."),ke}else return"data"in X&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ue.width+"x"+Ue.height+")."),X;return X}function R(X){return X.generateMipmaps&&X.minFilter!==si&&X.minFilter!==mi}function T(X){o.generateMipmap(X)}function W(X,L,fe,we,Ue=!1){if(X!==null){if(o[X]!==void 0)return o[X];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let Te=L;if(L===o.RED&&(fe===o.FLOAT&&(Te=o.R32F),fe===o.HALF_FLOAT&&(Te=o.R16F),fe===o.UNSIGNED_BYTE&&(Te=o.R8)),L===o.RED_INTEGER&&(fe===o.UNSIGNED_BYTE&&(Te=o.R8UI),fe===o.UNSIGNED_SHORT&&(Te=o.R16UI),fe===o.UNSIGNED_INT&&(Te=o.R32UI),fe===o.BYTE&&(Te=o.R8I),fe===o.SHORT&&(Te=o.R16I),fe===o.INT&&(Te=o.R32I)),L===o.RG&&(fe===o.FLOAT&&(Te=o.RG32F),fe===o.HALF_FLOAT&&(Te=o.RG16F),fe===o.UNSIGNED_BYTE&&(Te=o.RG8)),L===o.RG_INTEGER&&(fe===o.UNSIGNED_BYTE&&(Te=o.RG8UI),fe===o.UNSIGNED_SHORT&&(Te=o.RG16UI),fe===o.UNSIGNED_INT&&(Te=o.RG32UI),fe===o.BYTE&&(Te=o.RG8I),fe===o.SHORT&&(Te=o.RG16I),fe===o.INT&&(Te=o.RG32I)),L===o.RGB&&fe===o.UNSIGNED_INT_5_9_9_9_REV&&(Te=o.RGB9_E5),L===o.RGBA){const st=Ue?r0:Wt.getTransfer(we);fe===o.FLOAT&&(Te=o.RGBA32F),fe===o.HALF_FLOAT&&(Te=o.RGBA16F),fe===o.UNSIGNED_BYTE&&(Te=st===Kt?o.SRGB8_ALPHA8:o.RGBA8),fe===o.UNSIGNED_SHORT_4_4_4_4&&(Te=o.RGBA4),fe===o.UNSIGNED_SHORT_5_5_5_1&&(Te=o.RGB5_A1)}return(Te===o.R16F||Te===o.R32F||Te===o.RG16F||Te===o.RG32F||Te===o.RGBA16F||Te===o.RGBA32F)&&t.get("EXT_color_buffer_float"),Te}function V(X,L){let fe;return X?L===null||L===is||L===qs?fe=o.DEPTH24_STENCIL8:L===Yi?fe=o.DEPTH32F_STENCIL8:L===ko&&(fe=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===is||L===qs?fe=o.DEPTH_COMPONENT24:L===Yi?fe=o.DEPTH_COMPONENT32F:L===ko&&(fe=o.DEPTH_COMPONENT16),fe}function H(X,L){return R(X)===!0||X.isFramebufferTexture&&X.minFilter!==si&&X.minFilter!==mi?Math.log2(Math.max(L.width,L.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?L.mipmaps.length:1}function se(X){const L=X.target;L.removeEventListener("dispose",se),Y(L),L.isVideoTexture&&M.delete(L)}function J(X){const L=X.target;L.removeEventListener("dispose",J),O(L)}function Y(X){const L=a.get(X);if(L.__webglInit===void 0)return;const fe=X.source,we=w.get(fe);if(we){const Ue=we[L.__cacheKey];Ue.usedTimes--,Ue.usedTimes===0&&ae(X),Object.keys(we).length===0&&w.delete(fe)}a.remove(X)}function ae(X){const L=a.get(X);o.deleteTexture(L.__webglTexture);const fe=X.source,we=w.get(fe);delete we[L.__cacheKey],A.memory.textures--}function O(X){const L=a.get(X);if(X.depthTexture&&X.depthTexture.dispose(),X.isWebGLCubeRenderTarget)for(let we=0;we<6;we++){if(Array.isArray(L.__webglFramebuffer[we]))for(let Ue=0;Ue<L.__webglFramebuffer[we].length;Ue++)o.deleteFramebuffer(L.__webglFramebuffer[we][Ue]);else o.deleteFramebuffer(L.__webglFramebuffer[we]);L.__webglDepthbuffer&&o.deleteRenderbuffer(L.__webglDepthbuffer[we])}else{if(Array.isArray(L.__webglFramebuffer))for(let we=0;we<L.__webglFramebuffer.length;we++)o.deleteFramebuffer(L.__webglFramebuffer[we]);else o.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&o.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&o.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let we=0;we<L.__webglColorRenderbuffer.length;we++)L.__webglColorRenderbuffer[we]&&o.deleteRenderbuffer(L.__webglColorRenderbuffer[we]);L.__webglDepthRenderbuffer&&o.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const fe=X.textures;for(let we=0,Ue=fe.length;we<Ue;we++){const Te=a.get(fe[we]);Te.__webglTexture&&(o.deleteTexture(Te.__webglTexture),A.memory.textures--),a.remove(fe[we])}a.remove(X)}let k=0;function j(){k=0}function me(){const X=k;return X>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+X+" texture units while this GPU supports only "+u.maxTextures),k+=1,X}function he(X){const L=[];return L.push(X.wrapS),L.push(X.wrapT),L.push(X.wrapR||0),L.push(X.magFilter),L.push(X.minFilter),L.push(X.anisotropy),L.push(X.internalFormat),L.push(X.format),L.push(X.type),L.push(X.generateMipmaps),L.push(X.premultiplyAlpha),L.push(X.flipY),L.push(X.unpackAlignment),L.push(X.colorSpace),L.join()}function Me(X,L){const fe=a.get(X);if(X.isVideoTexture&&an(X),X.isRenderTargetTexture===!1&&X.version>0&&fe.__version!==X.version){const we=X.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(fe,X,L);return}}s.bindTexture(o.TEXTURE_2D,fe.__webglTexture,o.TEXTURE0+L)}function Se(X,L){const fe=a.get(X);if(X.version>0&&fe.__version!==X.version){Ct(fe,X,L);return}s.bindTexture(o.TEXTURE_2D_ARRAY,fe.__webglTexture,o.TEXTURE0+L)}function ve(X,L){const fe=a.get(X);if(X.version>0&&fe.__version!==X.version){Ct(fe,X,L);return}s.bindTexture(o.TEXTURE_3D,fe.__webglTexture,o.TEXTURE0+L)}function Ee(X,L){const fe=a.get(X);if(X.version>0&&fe.__version!==X.version){pe(fe,X,L);return}s.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture,o.TEXTURE0+L)}const de={[Kl]:o.REPEAT,[es]:o.CLAMP_TO_EDGE,[ec]:o.MIRRORED_REPEAT},We={[si]:o.NEAREST,[mR]:o.NEAREST_MIPMAP_NEAREST,[Ea]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[ml]:o.LINEAR_MIPMAP_NEAREST,[ts]:o.LINEAR_MIPMAP_LINEAR},$e={[yR]:o.NEVER,[TR]:o.ALWAYS,[xR]:o.LESS,[op]:o.LEQUAL,[MR]:o.EQUAL,[wR]:o.GEQUAL,[SR]:o.GREATER,[ER]:o.NOTEQUAL};function Ve(X,L){if(L.type===Yi&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===mi||L.magFilter===ml||L.magFilter===Ea||L.magFilter===ts||L.minFilter===mi||L.minFilter===ml||L.minFilter===Ea||L.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(X,o.TEXTURE_WRAP_S,de[L.wrapS]),o.texParameteri(X,o.TEXTURE_WRAP_T,de[L.wrapT]),(X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY)&&o.texParameteri(X,o.TEXTURE_WRAP_R,de[L.wrapR]),o.texParameteri(X,o.TEXTURE_MAG_FILTER,We[L.magFilter]),o.texParameteri(X,o.TEXTURE_MIN_FILTER,We[L.minFilter]),L.compareFunction&&(o.texParameteri(X,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(X,o.TEXTURE_COMPARE_FUNC,$e[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===si||L.minFilter!==Ea&&L.minFilter!==ts||L.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||a.get(L).__currentAnisotropy){const fe=t.get("EXT_texture_filter_anisotropic");o.texParameterf(X,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,u.getMaxAnisotropy())),a.get(L).__currentAnisotropy=L.anisotropy}}}function mt(X,L){let fe=!1;X.__webglInit===void 0&&(X.__webglInit=!0,L.addEventListener("dispose",se));const we=L.source;let Ue=w.get(we);Ue===void 0&&(Ue={},w.set(we,Ue));const Te=he(L);if(Te!==X.__cacheKey){Ue[Te]===void 0&&(Ue[Te]={texture:o.createTexture(),usedTimes:0},A.memory.textures++,fe=!0),Ue[Te].usedTimes++;const st=Ue[X.__cacheKey];st!==void 0&&(Ue[X.__cacheKey].usedTimes--,st.usedTimes===0&&ae(L)),X.__cacheKey=Te,X.__webglTexture=Ue[Te].texture}return fe}function Ct(X,L,fe){let we=o.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(we=o.TEXTURE_2D_ARRAY),L.isData3DTexture&&(we=o.TEXTURE_3D);const Ue=mt(X,L),Te=L.source;s.bindTexture(we,X.__webglTexture,o.TEXTURE0+fe);const st=a.get(Te);if(Te.version!==st.__version||Ue===!0){s.activeTexture(o.TEXTURE0+fe);const ke=Wt.getPrimaries(Wt.workingColorSpace),Oe=L.colorSpace===Ar?null:Wt.getPrimaries(L.colorSpace),gt=L.colorSpace===Ar||ke===Oe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,L.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,L.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ne=I(L.image,!1,u.maxTextureSize);Ne=pt(L,Ne);const Ye=h.convert(L.format,L.colorSpace),Tt=h.convert(L.type);let ut=W(L.internalFormat,Ye,Tt,L.colorSpace,L.isVideoTexture);Ve(we,L);let Ze;const ht=L.mipmaps,vt=L.isVideoTexture!==!0,$t=st.__version===void 0||Ue===!0,Q=Te.dataReady,Le=H(L,Ne);if(L.isDepthTexture)ut=V(L.format===Qs,L.type),$t&&(vt?s.texStorage2D(o.TEXTURE_2D,1,ut,Ne.width,Ne.height):s.texImage2D(o.TEXTURE_2D,0,ut,Ne.width,Ne.height,0,Ye,Tt,null));else if(L.isDataTexture)if(ht.length>0){vt&&$t&&s.texStorage2D(o.TEXTURE_2D,Le,ut,ht[0].width,ht[0].height);for(let ye=0,xe=ht.length;ye<xe;ye++)Ze=ht[ye],vt?Q&&s.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ze.width,Ze.height,Ye,Tt,Ze.data):s.texImage2D(o.TEXTURE_2D,ye,ut,Ze.width,Ze.height,0,Ye,Tt,Ze.data);L.generateMipmaps=!1}else vt?($t&&s.texStorage2D(o.TEXTURE_2D,Le,ut,Ne.width,Ne.height),Q&&s.texSubImage2D(o.TEXTURE_2D,0,0,0,Ne.width,Ne.height,Ye,Tt,Ne.data)):s.texImage2D(o.TEXTURE_2D,0,ut,Ne.width,Ne.height,0,Ye,Tt,Ne.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){vt&&$t&&s.texStorage3D(o.TEXTURE_2D_ARRAY,Le,ut,ht[0].width,ht[0].height,Ne.depth);for(let ye=0,xe=ht.length;ye<xe;ye++)if(Ze=ht[ye],L.format!==Ai)if(Ye!==null)if(vt){if(Q)if(L.layerUpdates.size>0){const Be=Md(Ze.width,Ze.height,L.format,L.type);for(const at of L.layerUpdates){const dt=Ze.data.subarray(at*Be/Ze.data.BYTES_PER_ELEMENT,(at+1)*Be/Ze.data.BYTES_PER_ELEMENT);s.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,at,Ze.width,Ze.height,1,Ye,dt,0,0)}L.clearLayerUpdates()}else s.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ze.width,Ze.height,Ne.depth,Ye,Ze.data,0,0)}else s.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,ut,Ze.width,Ze.height,Ne.depth,0,Ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?Q&&s.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ze.width,Ze.height,Ne.depth,Ye,Tt,Ze.data):s.texImage3D(o.TEXTURE_2D_ARRAY,ye,ut,Ze.width,Ze.height,Ne.depth,0,Ye,Tt,Ze.data)}else{vt&&$t&&s.texStorage2D(o.TEXTURE_2D,Le,ut,ht[0].width,ht[0].height);for(let ye=0,xe=ht.length;ye<xe;ye++)Ze=ht[ye],L.format!==Ai?Ye!==null?vt?Q&&s.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,Ze.width,Ze.height,Ye,Ze.data):s.compressedTexImage2D(o.TEXTURE_2D,ye,ut,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?Q&&s.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ze.width,Ze.height,Ye,Tt,Ze.data):s.texImage2D(o.TEXTURE_2D,ye,ut,Ze.width,Ze.height,0,Ye,Tt,Ze.data)}else if(L.isDataArrayTexture)if(vt){if($t&&s.texStorage3D(o.TEXTURE_2D_ARRAY,Le,ut,Ne.width,Ne.height,Ne.depth),Q)if(L.layerUpdates.size>0){const ye=Md(Ne.width,Ne.height,L.format,L.type);for(const xe of L.layerUpdates){const Be=Ne.data.subarray(xe*ye/Ne.data.BYTES_PER_ELEMENT,(xe+1)*ye/Ne.data.BYTES_PER_ELEMENT);s.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,Ne.width,Ne.height,1,Ye,Tt,Be)}L.clearLayerUpdates()}else s.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,Ye,Tt,Ne.data)}else s.texImage3D(o.TEXTURE_2D_ARRAY,0,ut,Ne.width,Ne.height,Ne.depth,0,Ye,Tt,Ne.data);else if(L.isData3DTexture)vt?($t&&s.texStorage3D(o.TEXTURE_3D,Le,ut,Ne.width,Ne.height,Ne.depth),Q&&s.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,Ye,Tt,Ne.data)):s.texImage3D(o.TEXTURE_3D,0,ut,Ne.width,Ne.height,Ne.depth,0,Ye,Tt,Ne.data);else if(L.isFramebufferTexture){if($t)if(vt)s.texStorage2D(o.TEXTURE_2D,Le,ut,Ne.width,Ne.height);else{let ye=Ne.width,xe=Ne.height;for(let Be=0;Be<Le;Be++)s.texImage2D(o.TEXTURE_2D,Be,ut,ye,xe,0,Ye,Tt,null),ye>>=1,xe>>=1}}else if(ht.length>0){if(vt&&$t){const ye=At(ht[0]);s.texStorage2D(o.TEXTURE_2D,Le,ut,ye.width,ye.height)}for(let ye=0,xe=ht.length;ye<xe;ye++)Ze=ht[ye],vt?Q&&s.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ye,Tt,Ze):s.texImage2D(o.TEXTURE_2D,ye,ut,Ye,Tt,Ze);L.generateMipmaps=!1}else if(vt){if($t){const ye=At(Ne);s.texStorage2D(o.TEXTURE_2D,Le,ut,ye.width,ye.height)}Q&&s.texSubImage2D(o.TEXTURE_2D,0,0,0,Ye,Tt,Ne)}else s.texImage2D(o.TEXTURE_2D,0,ut,Ye,Tt,Ne);R(L)&&T(we),st.__version=Te.version,L.onUpdate&&L.onUpdate(L)}X.__version=L.version}function pe(X,L,fe){if(L.image.length!==6)return;const we=mt(X,L),Ue=L.source;s.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+fe);const Te=a.get(Ue);if(Ue.version!==Te.__version||we===!0){s.activeTexture(o.TEXTURE0+fe);const st=Wt.getPrimaries(Wt.workingColorSpace),ke=L.colorSpace===Ar?null:Wt.getPrimaries(L.colorSpace),Oe=L.colorSpace===Ar||st===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,L.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,L.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const gt=L.isCompressedTexture||L.image[0].isCompressedTexture,Ne=L.image[0]&&L.image[0].isDataTexture,Ye=[];for(let xe=0;xe<6;xe++)!gt&&!Ne?Ye[xe]=I(L.image[xe],!0,u.maxCubemapSize):Ye[xe]=Ne?L.image[xe].image:L.image[xe],Ye[xe]=pt(L,Ye[xe]);const Tt=Ye[0],ut=h.convert(L.format,L.colorSpace),Ze=h.convert(L.type),ht=W(L.internalFormat,ut,Ze,L.colorSpace),vt=L.isVideoTexture!==!0,$t=Te.__version===void 0||we===!0,Q=Ue.dataReady;let Le=H(L,Tt);Ve(o.TEXTURE_CUBE_MAP,L);let ye;if(gt){vt&&$t&&s.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ht,Tt.width,Tt.height);for(let xe=0;xe<6;xe++){ye=Ye[xe].mipmaps;for(let Be=0;Be<ye.length;Be++){const at=ye[Be];L.format!==Ai?ut!==null?vt?Q&&s.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,at.width,at.height,ut,at.data):s.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,ht,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?Q&&s.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,at.width,at.height,ut,Ze,at.data):s.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,ht,at.width,at.height,0,ut,Ze,at.data)}}}else{if(ye=L.mipmaps,vt&&$t){ye.length>0&&Le++;const xe=At(Ye[0]);s.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ht,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ne){vt?Q&&s.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ye[xe].width,Ye[xe].height,ut,Ze,Ye[xe].data):s.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ht,Ye[xe].width,Ye[xe].height,0,ut,Ze,Ye[xe].data);for(let Be=0;Be<ye.length;Be++){const dt=ye[Be].image[xe].image;vt?Q&&s.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,dt.width,dt.height,ut,Ze,dt.data):s.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,ht,dt.width,dt.height,0,ut,Ze,dt.data)}}else{vt?Q&&s.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ut,Ze,Ye[xe]):s.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ht,ut,Ze,Ye[xe]);for(let Be=0;Be<ye.length;Be++){const at=ye[Be];vt?Q&&s.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,ut,Ze,at.image[xe]):s.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,ht,ut,Ze,at.image[xe])}}}R(L)&&T(o.TEXTURE_CUBE_MAP),Te.__version=Ue.version,L.onUpdate&&L.onUpdate(L)}X.__version=L.version}function Re(X,L,fe,we,Ue,Te){const st=h.convert(fe.format,fe.colorSpace),ke=h.convert(fe.type),Oe=W(fe.internalFormat,st,ke,fe.colorSpace);if(!a.get(L).__hasExternalTextures){const Ne=Math.max(1,L.width>>Te),Ye=Math.max(1,L.height>>Te);Ue===o.TEXTURE_3D||Ue===o.TEXTURE_2D_ARRAY?s.texImage3D(Ue,Te,Oe,Ne,Ye,L.depth,0,st,ke,null):s.texImage2D(Ue,Te,Oe,Ne,Ye,0,st,ke,null)}s.bindFramebuffer(o.FRAMEBUFFER,X),et(L)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,we,Ue,a.get(fe).__webglTexture,0,Ot(L)):(Ue===o.TEXTURE_2D||Ue>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ue<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,we,Ue,a.get(fe).__webglTexture,Te),s.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(X,L,fe){if(o.bindRenderbuffer(o.RENDERBUFFER,X),L.depthBuffer){const we=L.depthTexture,Ue=we&&we.isDepthTexture?we.type:null,Te=V(L.stencilBuffer,Ue),st=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ke=Ot(L);et(L)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ke,Te,L.width,L.height):fe?o.renderbufferStorageMultisample(o.RENDERBUFFER,ke,Te,L.width,L.height):o.renderbufferStorage(o.RENDERBUFFER,Te,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,st,o.RENDERBUFFER,X)}else{const we=L.textures;for(let Ue=0;Ue<we.length;Ue++){const Te=we[Ue],st=h.convert(Te.format,Te.colorSpace),ke=h.convert(Te.type),Oe=W(Te.internalFormat,st,ke,Te.colorSpace),gt=Ot(L);fe&&et(L)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,Oe,L.width,L.height):et(L)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,Oe,L.width,L.height):o.renderbufferStorage(o.RENDERBUFFER,Oe,L.width,L.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ne(X,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(s.bindFramebuffer(o.FRAMEBUFFER,X),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),Me(L.depthTexture,0);const we=a.get(L.depthTexture).__webglTexture,Ue=Ot(L);if(L.depthTexture.format===Zs)et(L)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,we,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,we,0);else if(L.depthTexture.format===Qs)et(L)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,we,0,Ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function Fe(X){const L=a.get(X),fe=X.isWebGLCubeRenderTarget===!0;if(X.depthTexture&&!L.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");ne(L.__webglFramebuffer,X)}else if(fe){L.__webglDepthbuffer=[];for(let we=0;we<6;we++)s.bindFramebuffer(o.FRAMEBUFFER,L.__webglFramebuffer[we]),L.__webglDepthbuffer[we]=o.createRenderbuffer(),Je(L.__webglDepthbuffer[we],X,!1)}else s.bindFramebuffer(o.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=o.createRenderbuffer(),Je(L.__webglDepthbuffer,X,!1);s.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(X,L,fe){const we=a.get(X);L!==void 0&&Re(we.__webglFramebuffer,X,X.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),fe!==void 0&&Fe(X)}function nt(X){const L=X.texture,fe=a.get(X),we=a.get(L);X.addEventListener("dispose",J);const Ue=X.textures,Te=X.isWebGLCubeRenderTarget===!0,st=Ue.length>1;if(st||(we.__webglTexture===void 0&&(we.__webglTexture=o.createTexture()),we.__version=L.version,A.memory.textures++),Te){fe.__webglFramebuffer=[];for(let ke=0;ke<6;ke++)if(L.mipmaps&&L.mipmaps.length>0){fe.__webglFramebuffer[ke]=[];for(let Oe=0;Oe<L.mipmaps.length;Oe++)fe.__webglFramebuffer[ke][Oe]=o.createFramebuffer()}else fe.__webglFramebuffer[ke]=o.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){fe.__webglFramebuffer=[];for(let ke=0;ke<L.mipmaps.length;ke++)fe.__webglFramebuffer[ke]=o.createFramebuffer()}else fe.__webglFramebuffer=o.createFramebuffer();if(st)for(let ke=0,Oe=Ue.length;ke<Oe;ke++){const gt=a.get(Ue[ke]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),A.memory.textures++)}if(X.samples>0&&et(X)===!1){fe.__webglMultisampledFramebuffer=o.createFramebuffer(),fe.__webglColorRenderbuffer=[],s.bindFramebuffer(o.FRAMEBUFFER,fe.__webglMultisampledFramebuffer);for(let ke=0;ke<Ue.length;ke++){const Oe=Ue[ke];fe.__webglColorRenderbuffer[ke]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,fe.__webglColorRenderbuffer[ke]);const gt=h.convert(Oe.format,Oe.colorSpace),Ne=h.convert(Oe.type),Ye=W(Oe.internalFormat,gt,Ne,Oe.colorSpace,X.isXRRenderTarget===!0),Tt=Ot(X);o.renderbufferStorageMultisample(o.RENDERBUFFER,Tt,Ye,X.width,X.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,fe.__webglColorRenderbuffer[ke])}o.bindRenderbuffer(o.RENDERBUFFER,null),X.depthBuffer&&(fe.__webglDepthRenderbuffer=o.createRenderbuffer(),Je(fe.__webglDepthRenderbuffer,X,!0)),s.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Te){s.bindTexture(o.TEXTURE_CUBE_MAP,we.__webglTexture),Ve(o.TEXTURE_CUBE_MAP,L);for(let ke=0;ke<6;ke++)if(L.mipmaps&&L.mipmaps.length>0)for(let Oe=0;Oe<L.mipmaps.length;Oe++)Re(fe.__webglFramebuffer[ke][Oe],X,L,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ke,Oe);else Re(fe.__webglFramebuffer[ke],X,L,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0);R(L)&&T(o.TEXTURE_CUBE_MAP),s.unbindTexture()}else if(st){for(let ke=0,Oe=Ue.length;ke<Oe;ke++){const gt=Ue[ke],Ne=a.get(gt);s.bindTexture(o.TEXTURE_2D,Ne.__webglTexture),Ve(o.TEXTURE_2D,gt),Re(fe.__webglFramebuffer,X,gt,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,0),R(gt)&&T(o.TEXTURE_2D)}s.unbindTexture()}else{let ke=o.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(ke=X.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),s.bindTexture(ke,we.__webglTexture),Ve(ke,L),L.mipmaps&&L.mipmaps.length>0)for(let Oe=0;Oe<L.mipmaps.length;Oe++)Re(fe.__webglFramebuffer[Oe],X,L,o.COLOR_ATTACHMENT0,ke,Oe);else Re(fe.__webglFramebuffer,X,L,o.COLOR_ATTACHMENT0,ke,0);R(L)&&T(ke),s.unbindTexture()}X.depthBuffer&&Fe(X)}function Ut(X){const L=X.textures;for(let fe=0,we=L.length;fe<we;fe++){const Ue=L[fe];if(R(Ue)){const Te=X.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,st=a.get(Ue).__webglTexture;s.bindTexture(Te,st),T(Te),s.unbindTexture()}}}const Z=[],en=[];function Et(X){if(X.samples>0){if(et(X)===!1){const L=X.textures,fe=X.width,we=X.height;let Ue=o.COLOR_BUFFER_BIT;const Te=X.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=a.get(X),ke=L.length>1;if(ke)for(let Oe=0;Oe<L.length;Oe++)s.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),s.bindFramebuffer(o.FRAMEBUFFER,st.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);s.bindFramebuffer(o.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.bindFramebuffer(o.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let Oe=0;Oe<L.length;Oe++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(Ue|=o.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(Ue|=o.STENCIL_BUFFER_BIT)),ke){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,st.__webglColorRenderbuffer[Oe]);const gt=a.get(L[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,gt,0)}o.blitFramebuffer(0,0,fe,we,0,0,fe,we,Ue,o.NEAREST),v===!0&&(Z.length=0,en.length=0,Z.push(o.COLOR_ATTACHMENT0+Oe),X.depthBuffer&&X.resolveDepthBuffer===!1&&(Z.push(Te),en.push(Te),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,en)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Z))}if(s.bindFramebuffer(o.READ_FRAMEBUFFER,null),s.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ke)for(let Oe=0;Oe<L.length;Oe++){s.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,st.__webglColorRenderbuffer[Oe]);const gt=a.get(L[Oe]).__webglTexture;s.bindFramebuffer(o.FRAMEBUFFER,st.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,gt,0)}s.bindFramebuffer(o.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.resolveDepthBuffer===!1&&v){const L=X.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[L])}}}function Ot(X){return Math.min(u.maxSamples,X.samples)}function et(X){const L=a.get(X);return X.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function an(X){const L=A.render.frame;M.get(X)!==L&&(M.set(X,L),X.update())}function pt(X,L){const fe=X.colorSpace,we=X.format,Ue=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||fe!==Mr&&fe!==Ar&&(Wt.getTransfer(fe)===Kt?(we!==Ai||Ue!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",fe)),L}function At(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(x.width=X.naturalWidth||X.width,x.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(x.width=X.displayWidth,x.height=X.displayHeight):(x.width=X.width,x.height=X.height),x}this.allocateTextureUnit=me,this.resetTextureUnits=j,this.setTexture2D=Me,this.setTexture2DArray=Se,this.setTexture3D=ve,this.setTextureCube=Ee,this.rebindTextures=Qe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=et}function Wb(o,t){function s(a,u=Ar){let h;const A=Wt.getTransfer(u);if(a===qi)return o.UNSIGNED_BYTE;if(a===Dc)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Bc)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Qd)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===$d)return o.BYTE;if(a===qd)return o.SHORT;if(a===ko)return o.UNSIGNED_SHORT;if(a===Ic)return o.INT;if(a===is)return o.UNSIGNED_INT;if(a===Yi)return o.FLOAT;if(a===Go)return o.HALF_FLOAT;if(a===Kd)return o.ALPHA;if(a===ep)return o.RGB;if(a===Ai)return o.RGBA;if(a===tp)return o.LUMINANCE;if(a===np)return o.LUMINANCE_ALPHA;if(a===Zs)return o.DEPTH_COMPONENT;if(a===Qs)return o.DEPTH_STENCIL;if(a===ip)return o.RED;if(a===kc)return o.RED_INTEGER;if(a===rp)return o.RG;if(a===Vc)return o.RG_INTEGER;if(a===Oc)return o.RGBA_INTEGER;if(a===qa||a===Qa||a===Ka||a===e0)if(A===Kt)if(h=t.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(a===qa)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Qa)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ka)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===e0)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=t.get("WEBGL_compressed_texture_s3tc"),h!==null){if(a===qa)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Qa)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ka)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===e0)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===tc||a===nc||a===ic||a===rc)if(h=t.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(a===tc)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===nc)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ic)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===rc)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===sc||a===oc||a===ac)if(h=t.get("WEBGL_compressed_texture_etc"),h!==null){if(a===sc||a===oc)return A===Kt?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(a===ac)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===lc||a===cc||a===uc||a===fc||a===hc||a===dc||a===pc||a===mc||a===Ac||a===gc||a===_c||a===vc||a===yc||a===xc)if(h=t.get("WEBGL_compressed_texture_astc"),h!==null){if(a===lc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===cc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===uc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===fc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===hc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===dc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===pc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===mc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ac)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_c)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===yc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===xc)return A===Kt?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===t0||a===Mc||a===Sc)if(h=t.get("EXT_texture_compression_bptc"),h!==null){if(a===t0)return A===Kt?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Mc)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Sc)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===sp||a===Ec||a===wc||a===Tc)if(h=t.get("EXT_texture_compression_rgtc"),h!==null){if(a===t0)return h.COMPRESSED_RED_RGTC1_EXT;if(a===Ec)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===wc)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Tc)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===qs?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:s}}class Xb extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Za extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hb={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const s=this._hand;if(s)for(const a of t.hand.values())this._getHandJoint(s,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,s,a){let u=null,h=null,A=null;const g=this._targetRay,v=this._grip,x=this._hand;if(t&&s.session.visibilityState!=="visible-blurred"){if(x&&t.hand){A=!0;for(const I of t.hand.values()){const R=s.getJointPose(I,a),T=this._getHandJoint(x,I);R!==null&&(T.matrix.fromArray(R.transform.matrix),T.matrix.decompose(T.position,T.rotation,T.scale),T.matrixWorldNeedsUpdate=!0,T.jointRadius=R.radius),T.visible=R!==null}const M=x.joints["index-finger-tip"],E=x.joints["thumb-tip"],w=M.position.distanceTo(E.position),C=.02,P=.005;x.inputState.pinching&&w>C+P?(x.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!x.inputState.pinching&&w<=C-P&&(x.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else v!==null&&t.gripSpace&&(h=s.getPose(t.gripSpace,a),h!==null&&(v.matrix.fromArray(h.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,h.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(h.linearVelocity)):v.hasLinearVelocity=!1,h.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(h.angularVelocity)):v.hasAngularVelocity=!1));g!==null&&(u=s.getPose(t.targetRaySpace,a),u===null&&h!==null&&(u=h),u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,u.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(u.linearVelocity)):g.hasLinearVelocity=!1,u.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(u.angularVelocity)):g.hasAngularVelocity=!1,this.dispatchEvent(Hb)))}return g!==null&&(g.visible=u!==null),v!==null&&(v.visible=h!==null),x!==null&&(x.visible=A!==null),this}_getHandJoint(t,s){if(t.joints[s.jointName]===void 0){const a=new Za;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[s.jointName]=a,t.add(a)}return t.joints[s.jointName]}}const Zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,s,a){if(this.texture===null){const u=new Nn,h=t.properties.get(u);h.__webglTexture=s.texture,(s.depthNear!=a.depthNear||s.depthFar!=a.depthFar)&&(this.depthNear=s.depthNear,this.depthFar=s.depthFar),this.texture=u}}getMesh(t){if(this.texture!==null&&this.mesh===null){const s=t.cameras[0].viewport,a=new yr({vertexShader:Zb,fragmentShader:Yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new ji(new m0(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jb extends ss{constructor(t,s){super();const a=this;let u=null,h=1,A=null,g="local-floor",v=1,x=null,M=null,E=null,w=null,C=null,P=null;const I=new Jb,R=s.getContextAttributes();let T=null,W=null;const V=[],H=[],se=new Mt;let J=null;const Y=new ri;Y.layers.enable(1),Y.viewport=new Mn;const ae=new ri;ae.layers.enable(2),ae.viewport=new Mn;const O=[Y,ae],k=new Xb;k.layers.enable(1),k.layers.enable(2);let j=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let Re=V[pe];return Re===void 0&&(Re=new Ol,V[pe]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(pe){let Re=V[pe];return Re===void 0&&(Re=new Ol,V[pe]=Re),Re.getGripSpace()},this.getHand=function(pe){let Re=V[pe];return Re===void 0&&(Re=new Ol,V[pe]=Re),Re.getHandSpace()};function he(pe){const Re=H.indexOf(pe.inputSource);if(Re===-1)return;const Je=V[Re];Je!==void 0&&(Je.update(pe.inputSource,pe.frame,x||A),Je.dispatchEvent({type:pe.type,data:pe.inputSource}))}function Me(){u.removeEventListener("select",he),u.removeEventListener("selectstart",he),u.removeEventListener("selectend",he),u.removeEventListener("squeeze",he),u.removeEventListener("squeezestart",he),u.removeEventListener("squeezeend",he),u.removeEventListener("end",Me),u.removeEventListener("inputsourceschange",Se);for(let pe=0;pe<V.length;pe++){const Re=H[pe];Re!==null&&(H[pe]=null,V[pe].disconnect(Re))}j=null,me=null,I.reset(),t.setRenderTarget(T),C=null,w=null,E=null,u=null,W=null,Ct.stop(),a.isPresenting=!1,t.setPixelRatio(J),t.setSize(se.width,se.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){h=pe,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){g=pe,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||A},this.setReferenceSpace=function(pe){x=pe},this.getBaseLayer=function(){return w!==null?w:C},this.getBinding=function(){return E},this.getFrame=function(){return P},this.getSession=function(){return u},this.setSession=async function(pe){if(u=pe,u!==null){if(T=t.getRenderTarget(),u.addEventListener("select",he),u.addEventListener("selectstart",he),u.addEventListener("selectend",he),u.addEventListener("squeeze",he),u.addEventListener("squeezestart",he),u.addEventListener("squeezeend",he),u.addEventListener("end",Me),u.addEventListener("inputsourceschange",Se),R.xrCompatible!==!0&&await s.makeXRCompatible(),J=t.getPixelRatio(),t.getSize(se),u.renderState.layers===void 0){const Re={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:h};C=new XRWebGLLayer(u,s,Re),u.updateRenderState({baseLayer:C}),t.setPixelRatio(1),t.setSize(C.framebufferWidth,C.framebufferHeight,!1),W=new rs(C.framebufferWidth,C.framebufferHeight,{format:Ai,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil})}else{let Re=null,Je=null,ne=null;R.depth&&(ne=R.stencil?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT24,Re=R.stencil?Qs:Zs,Je=R.stencil?qs:is);const Fe={colorFormat:s.RGBA8,depthFormat:ne,scaleFactor:h};E=new XRWebGLBinding(u,s),w=E.createProjectionLayer(Fe),u.updateRenderState({layers:[w]}),t.setPixelRatio(1),t.setSize(w.textureWidth,w.textureHeight,!1),W=new rs(w.textureWidth,w.textureHeight,{format:Ai,type:qi,depthTexture:new Mp(w.textureWidth,w.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:w.ignoreDepthValues===!1})}W.isXRRenderTarget=!0,this.setFoveation(v),x=null,A=await u.requestReferenceSpace(g),Ct.setContext(u),Ct.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function Se(pe){for(let Re=0;Re<pe.removed.length;Re++){const Je=pe.removed[Re],ne=H.indexOf(Je);ne>=0&&(H[ne]=null,V[ne].disconnect(Je))}for(let Re=0;Re<pe.added.length;Re++){const Je=pe.added[Re];let ne=H.indexOf(Je);if(ne===-1){for(let Qe=0;Qe<V.length;Qe++)if(Qe>=H.length){H.push(Je),ne=Qe;break}else if(H[Qe]===null){H[Qe]=Je,ne=Qe;break}if(ne===-1)break}const Fe=V[ne];Fe&&Fe.connect(Je)}}const ve=new le,Ee=new le;function de(pe,Re,Je){ve.setFromMatrixPosition(Re.matrixWorld),Ee.setFromMatrixPosition(Je.matrixWorld);const ne=ve.distanceTo(Ee),Fe=Re.projectionMatrix.elements,Qe=Je.projectionMatrix.elements,nt=Fe[14]/(Fe[10]-1),Ut=Fe[14]/(Fe[10]+1),Z=(Fe[9]+1)/Fe[5],en=(Fe[9]-1)/Fe[5],Et=(Fe[8]-1)/Fe[0],Ot=(Qe[8]+1)/Qe[0],et=nt*Et,an=nt*Ot,pt=ne/(-Et+Ot),At=pt*-Et;Re.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(At),pe.translateZ(pt),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert();const X=nt+pt,L=Ut+pt,fe=et-At,we=an+(ne-At),Ue=Z*Ut/L*X,Te=en*Ut/L*X;pe.projectionMatrix.makePerspective(fe,we,Ue,Te,X,L),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}function We(pe,Re){Re===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(Re.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(u===null)return;I.texture!==null&&(pe.near=I.depthNear,pe.far=I.depthFar),k.near=ae.near=Y.near=pe.near,k.far=ae.far=Y.far=pe.far,(j!==k.near||me!==k.far)&&(u.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,me=k.far,Y.near=j,Y.far=me,ae.near=j,ae.far=me,Y.updateProjectionMatrix(),ae.updateProjectionMatrix(),pe.updateProjectionMatrix());const Re=pe.parent,Je=k.cameras;We(k,Re);for(let ne=0;ne<Je.length;ne++)We(Je[ne],Re);Je.length===2?de(k,Y,ae):k.projectionMatrix.copy(Y.projectionMatrix),$e(pe,k,Re)};function $e(pe,Re,Je){Je===null?pe.matrix.copy(Re.matrixWorld):(pe.matrix.copy(Je.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(Re.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(Re.projectionMatrix),pe.projectionMatrixInverse.copy(Re.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=Vo*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(w===null&&C===null))return v},this.setFoveation=function(pe){v=pe,w!==null&&(w.fixedFoveation=pe),C!==null&&C.fixedFoveation!==void 0&&(C.fixedFoveation=pe)},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(k)};let Ve=null;function mt(pe,Re){if(M=Re.getViewerPose(x||A),P=Re,M!==null){const Je=M.views;C!==null&&(t.setRenderTargetFramebuffer(W,C.framebuffer),t.setRenderTarget(W));let ne=!1;Je.length!==k.cameras.length&&(k.cameras.length=0,ne=!0);for(let Qe=0;Qe<Je.length;Qe++){const nt=Je[Qe];let Ut=null;if(C!==null)Ut=C.getViewport(nt);else{const en=E.getViewSubImage(w,nt);Ut=en.viewport,Qe===0&&(t.setRenderTargetTextures(W,en.colorTexture,w.ignoreDepthValues?void 0:en.depthStencilTexture),t.setRenderTarget(W))}let Z=O[Qe];Z===void 0&&(Z=new ri,Z.layers.enable(Qe),Z.viewport=new Mn,O[Qe]=Z),Z.matrix.fromArray(nt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(nt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Qe===0&&(k.matrix.copy(Z.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ne===!0&&k.cameras.push(Z)}const Fe=u.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Qe=E.getDepthInformation(Je[0]);Qe&&Qe.isValid&&Qe.texture&&I.init(t,Qe,u.renderState)}}for(let Je=0;Je<V.length;Je++){const ne=H[Je],Fe=V[Je];ne!==null&&Fe!==void 0&&Fe.update(ne,Re,x||A)}Ve&&Ve(pe,Re),Re.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Re}),P=null}const Ct=new xp;Ct.setAnimationLoop(mt),this.setAnimationLoop=function(pe){Ve=pe},this.dispose=function(){}}}const Jr=new Qi,$b=new dn;function qb(o,t){function s(R,T){R.matrixAutoUpdate===!0&&R.updateMatrix(),T.value.copy(R.matrix)}function a(R,T){T.color.getRGB(R.fogColor.value,gp(o)),T.isFog?(R.fogNear.value=T.near,R.fogFar.value=T.far):T.isFogExp2&&(R.fogDensity.value=T.density)}function u(R,T,W,V,H){T.isMeshBasicMaterial||T.isMeshLambertMaterial?h(R,T):T.isMeshToonMaterial?(h(R,T),E(R,T)):T.isMeshPhongMaterial?(h(R,T),M(R,T)):T.isMeshStandardMaterial?(h(R,T),w(R,T),T.isMeshPhysicalMaterial&&C(R,T,H)):T.isMeshMatcapMaterial?(h(R,T),P(R,T)):T.isMeshDepthMaterial?h(R,T):T.isMeshDistanceMaterial?(h(R,T),I(R,T)):T.isMeshNormalMaterial?h(R,T):T.isLineBasicMaterial?(A(R,T),T.isLineDashedMaterial&&g(R,T)):T.isPointsMaterial?v(R,T,W,V):T.isSpriteMaterial?x(R,T):T.isShadowMaterial?(R.color.value.copy(T.color),R.opacity.value=T.opacity):T.isShaderMaterial&&(T.uniformsNeedUpdate=!1)}function h(R,T){R.opacity.value=T.opacity,T.color&&R.diffuse.value.copy(T.color),T.emissive&&R.emissive.value.copy(T.emissive).multiplyScalar(T.emissiveIntensity),T.map&&(R.map.value=T.map,s(T.map,R.mapTransform)),T.alphaMap&&(R.alphaMap.value=T.alphaMap,s(T.alphaMap,R.alphaMapTransform)),T.bumpMap&&(R.bumpMap.value=T.bumpMap,s(T.bumpMap,R.bumpMapTransform),R.bumpScale.value=T.bumpScale,T.side===Bn&&(R.bumpScale.value*=-1)),T.normalMap&&(R.normalMap.value=T.normalMap,s(T.normalMap,R.normalMapTransform),R.normalScale.value.copy(T.normalScale),T.side===Bn&&R.normalScale.value.negate()),T.displacementMap&&(R.displacementMap.value=T.displacementMap,s(T.displacementMap,R.displacementMapTransform),R.displacementScale.value=T.displacementScale,R.displacementBias.value=T.displacementBias),T.emissiveMap&&(R.emissiveMap.value=T.emissiveMap,s(T.emissiveMap,R.emissiveMapTransform)),T.specularMap&&(R.specularMap.value=T.specularMap,s(T.specularMap,R.specularMapTransform)),T.alphaTest>0&&(R.alphaTest.value=T.alphaTest);const W=t.get(T),V=W.envMap,H=W.envMapRotation;V&&(R.envMap.value=V,Jr.copy(H),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),R.envMapRotation.value.setFromMatrix4($b.makeRotationFromEuler(Jr)),R.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,R.reflectivity.value=T.reflectivity,R.ior.value=T.ior,R.refractionRatio.value=T.refractionRatio),T.lightMap&&(R.lightMap.value=T.lightMap,R.lightMapIntensity.value=T.lightMapIntensity,s(T.lightMap,R.lightMapTransform)),T.aoMap&&(R.aoMap.value=T.aoMap,R.aoMapIntensity.value=T.aoMapIntensity,s(T.aoMap,R.aoMapTransform))}function A(R,T){R.diffuse.value.copy(T.color),R.opacity.value=T.opacity,T.map&&(R.map.value=T.map,s(T.map,R.mapTransform))}function g(R,T){R.dashSize.value=T.dashSize,R.totalSize.value=T.dashSize+T.gapSize,R.scale.value=T.scale}function v(R,T,W,V){R.diffuse.value.copy(T.color),R.opacity.value=T.opacity,R.size.value=T.size*W,R.scale.value=V*.5,T.map&&(R.map.value=T.map,s(T.map,R.uvTransform)),T.alphaMap&&(R.alphaMap.value=T.alphaMap,s(T.alphaMap,R.alphaMapTransform)),T.alphaTest>0&&(R.alphaTest.value=T.alphaTest)}function x(R,T){R.diffuse.value.copy(T.color),R.opacity.value=T.opacity,R.rotation.value=T.rotation,T.map&&(R.map.value=T.map,s(T.map,R.mapTransform)),T.alphaMap&&(R.alphaMap.value=T.alphaMap,s(T.alphaMap,R.alphaMapTransform)),T.alphaTest>0&&(R.alphaTest.value=T.alphaTest)}function M(R,T){R.specular.value.copy(T.specular),R.shininess.value=Math.max(T.shininess,1e-4)}function E(R,T){T.gradientMap&&(R.gradientMap.value=T.gradientMap)}function w(R,T){R.metalness.value=T.metalness,T.metalnessMap&&(R.metalnessMap.value=T.metalnessMap,s(T.metalnessMap,R.metalnessMapTransform)),R.roughness.value=T.roughness,T.roughnessMap&&(R.roughnessMap.value=T.roughnessMap,s(T.roughnessMap,R.roughnessMapTransform)),T.envMap&&(R.envMapIntensity.value=T.envMapIntensity)}function C(R,T,W){R.ior.value=T.ior,T.sheen>0&&(R.sheenColor.value.copy(T.sheenColor).multiplyScalar(T.sheen),R.sheenRoughness.value=T.sheenRoughness,T.sheenColorMap&&(R.sheenColorMap.value=T.sheenColorMap,s(T.sheenColorMap,R.sheenColorMapTransform)),T.sheenRoughnessMap&&(R.sheenRoughnessMap.value=T.sheenRoughnessMap,s(T.sheenRoughnessMap,R.sheenRoughnessMapTransform))),T.clearcoat>0&&(R.clearcoat.value=T.clearcoat,R.clearcoatRoughness.value=T.clearcoatRoughness,T.clearcoatMap&&(R.clearcoatMap.value=T.clearcoatMap,s(T.clearcoatMap,R.clearcoatMapTransform)),T.clearcoatRoughnessMap&&(R.clearcoatRoughnessMap.value=T.clearcoatRoughnessMap,s(T.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform)),T.clearcoatNormalMap&&(R.clearcoatNormalMap.value=T.clearcoatNormalMap,s(T.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(T.clearcoatNormalScale),T.side===Bn&&R.clearcoatNormalScale.value.negate())),T.dispersion>0&&(R.dispersion.value=T.dispersion),T.iridescence>0&&(R.iridescence.value=T.iridescence,R.iridescenceIOR.value=T.iridescenceIOR,R.iridescenceThicknessMinimum.value=T.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=T.iridescenceThicknessRange[1],T.iridescenceMap&&(R.iridescenceMap.value=T.iridescenceMap,s(T.iridescenceMap,R.iridescenceMapTransform)),T.iridescenceThicknessMap&&(R.iridescenceThicknessMap.value=T.iridescenceThicknessMap,s(T.iridescenceThicknessMap,R.iridescenceThicknessMapTransform))),T.transmission>0&&(R.transmission.value=T.transmission,R.transmissionSamplerMap.value=W.texture,R.transmissionSamplerSize.value.set(W.width,W.height),T.transmissionMap&&(R.transmissionMap.value=T.transmissionMap,s(T.transmissionMap,R.transmissionMapTransform)),R.thickness.value=T.thickness,T.thicknessMap&&(R.thicknessMap.value=T.thicknessMap,s(T.thicknessMap,R.thicknessMapTransform)),R.attenuationDistance.value=T.attenuationDistance,R.attenuationColor.value.copy(T.attenuationColor)),T.anisotropy>0&&(R.anisotropyVector.value.set(T.anisotropy*Math.cos(T.anisotropyRotation),T.anisotropy*Math.sin(T.anisotropyRotation)),T.anisotropyMap&&(R.anisotropyMap.value=T.anisotropyMap,s(T.anisotropyMap,R.anisotropyMapTransform))),R.specularIntensity.value=T.specularIntensity,R.specularColor.value.copy(T.specularColor),T.specularColorMap&&(R.specularColorMap.value=T.specularColorMap,s(T.specularColorMap,R.specularColorMapTransform)),T.specularIntensityMap&&(R.specularIntensityMap.value=T.specularIntensityMap,s(T.specularIntensityMap,R.specularIntensityMapTransform))}function P(R,T){T.matcap&&(R.matcap.value=T.matcap)}function I(R,T){const W=t.get(T).light;R.referencePosition.value.setFromMatrixPosition(W.matrixWorld),R.nearDistance.value=W.shadow.camera.near,R.farDistance.value=W.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:u}}function Qb(o,t,s,a){let u={},h={},A=[];const g=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(W,V){const H=V.program;a.uniformBlockBinding(W,H)}function x(W,V){let H=u[W.id];H===void 0&&(P(W),H=M(W),u[W.id]=H,W.addEventListener("dispose",R));const se=V.program;a.updateUBOMapping(W,se);const J=t.render.frame;h[W.id]!==J&&(w(W),h[W.id]=J)}function M(W){const V=E();W.__bindingPointIndex=V;const H=o.createBuffer(),se=W.__size,J=W.usage;return o.bindBuffer(o.UNIFORM_BUFFER,H),o.bufferData(o.UNIFORM_BUFFER,se,J),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,V,H),H}function E(){for(let W=0;W<g;W++)if(A.indexOf(W)===-1)return A.push(W),W;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function w(W){const V=u[W.id],H=W.uniforms,se=W.__cache;o.bindBuffer(o.UNIFORM_BUFFER,V);for(let J=0,Y=H.length;J<Y;J++){const ae=Array.isArray(H[J])?H[J]:[H[J]];for(let O=0,k=ae.length;O<k;O++){const j=ae[O];if(C(j,J,O,se)===!0){const me=j.__offset,he=Array.isArray(j.value)?j.value:[j.value];let Me=0;for(let Se=0;Se<he.length;Se++){const ve=he[Se],Ee=I(ve);typeof ve=="number"||typeof ve=="boolean"?(j.__data[0]=ve,o.bufferSubData(o.UNIFORM_BUFFER,me+Me,j.__data)):ve.isMatrix3?(j.__data[0]=ve.elements[0],j.__data[1]=ve.elements[1],j.__data[2]=ve.elements[2],j.__data[3]=0,j.__data[4]=ve.elements[3],j.__data[5]=ve.elements[4],j.__data[6]=ve.elements[5],j.__data[7]=0,j.__data[8]=ve.elements[6],j.__data[9]=ve.elements[7],j.__data[10]=ve.elements[8],j.__data[11]=0):(ve.toArray(j.__data,Me),Me+=Ee.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,me,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function C(W,V,H,se){const J=W.value,Y=V+"_"+H;if(se[Y]===void 0)return typeof J=="number"||typeof J=="boolean"?se[Y]=J:se[Y]=J.clone(),!0;{const ae=se[Y];if(typeof J=="number"||typeof J=="boolean"){if(ae!==J)return se[Y]=J,!0}else if(ae.equals(J)===!1)return ae.copy(J),!0}return!1}function P(W){const V=W.uniforms;let H=0;const se=16;for(let Y=0,ae=V.length;Y<ae;Y++){const O=Array.isArray(V[Y])?V[Y]:[V[Y]];for(let k=0,j=O.length;k<j;k++){const me=O[k],he=Array.isArray(me.value)?me.value:[me.value];for(let Me=0,Se=he.length;Me<Se;Me++){const ve=he[Me],Ee=I(ve),de=H%se;de!==0&&se-de<Ee.boundary&&(H+=se-de),me.__data=new Float32Array(Ee.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=H,H+=Ee.storage}}}const J=H%se;return J>0&&(H+=se-J),W.__size=H,W.__cache={},this}function I(W){const V={boundary:0,storage:0};return typeof W=="number"||typeof W=="boolean"?(V.boundary=4,V.storage=4):W.isVector2?(V.boundary=8,V.storage=8):W.isVector3||W.isColor?(V.boundary=16,V.storage=12):W.isVector4?(V.boundary=16,V.storage=16):W.isMatrix3?(V.boundary=48,V.storage=48):W.isMatrix4?(V.boundary=64,V.storage=64):W.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",W),V}function R(W){const V=W.target;V.removeEventListener("dispose",R);const H=A.indexOf(V.__bindingPointIndex);A.splice(H,1),o.deleteBuffer(u[V.id]),delete u[V.id],delete h[V.id]}function T(){for(const W in u)o.deleteBuffer(u[W]);A=[],u={},h={}}return{bind:v,update:x,dispose:T}}class Kb{constructor(t={}){const{canvas:s=WR(),context:a=null,depth:u=!0,stencil:h=!1,alpha:A=!1,antialias:g=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:x=!1,powerPreference:M="default",failIfMajorPerformanceCaveat:E=!1}=t;this.isWebGLRenderer=!0;let w;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=a.getContextAttributes().alpha}else w=A;const C=new Uint32Array(4),P=new Int32Array(4);let I=null,R=null;const T=[],W=[];this.domElement=s,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=_r,this.toneMappingExposure=1;const V=this;let H=!1,se=0,J=0,Y=null,ae=-1,O=null;const k=new Mn,j=new Mn;let me=null;const he=new zt(0);let Me=0,Se=s.width,ve=s.height,Ee=1,de=null,We=null;const $e=new Mn(0,0,Se,ve),Ve=new Mn(0,0,Se,ve);let mt=!1;const Ct=new yp;let pe=!1,Re=!1;const Je=new dn,ne=new le,Fe=new Mn,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Ut(){return Y===null?Ee:1}let Z=a;function en(B,K){return s.getContext(B,K)}try{const B={alpha:!0,depth:u,stencil:h,antialias:g,premultipliedAlpha:v,preserveDrawingBuffer:x,powerPreference:M,failIfMajorPerformanceCaveat:E};if("setAttribute"in s&&s.setAttribute("data-engine",`three.js r${Lc}`),s.addEventListener("webglcontextlost",ye,!1),s.addEventListener("webglcontextrestored",xe,!1),s.addEventListener("webglcontextcreationerror",Be,!1),Z===null){const K="webgl2";if(Z=en(K,B),Z===null)throw en(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let Et,Ot,et,an,pt,At,X,L,fe,we,Ue,Te,st,ke,Oe,gt,Ne,Ye,Tt,ut,Ze,ht,vt,$t;function Q(){Et=new oU(Z),Et.init(),ht=new Wb(Z,Et),Ot=new KC(Z,Et,t,ht),et=new Ob(Z),an=new cU(Z),pt=new Tb,At=new Gb(Z,Et,et,pt,Ot,ht,an),X=new tU(V),L=new sU(V),fe=new m4(Z),vt=new qC(Z,fe),we=new aU(Z,fe,an,vt),Ue=new fU(Z,we,fe,an),Tt=new uU(Z,Ot,At),gt=new eU(pt),Te=new wb(V,X,L,Et,Ot,vt,gt),st=new qb(V,pt),ke=new Cb,Oe=new Lb(Et),Ye=new $C(V,X,L,et,Ue,w,v),Ne=new Vb(V,Ue,Ot),$t=new Qb(Z,an,Ot,et),ut=new QC(Z,Et,an),Ze=new lU(Z,Et,an),an.programs=Te.programs,V.capabilities=Ot,V.extensions=Et,V.properties=pt,V.renderLists=ke,V.shadowMap=Ne,V.state=et,V.info=an}Q();const Le=new jb(V,Z);this.xr=Le,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const B=Et.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=Et.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(B){B!==void 0&&(Ee=B,this.setSize(Se,ve,!1))},this.getSize=function(B){return B.set(Se,ve)},this.setSize=function(B,K,ce=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Se=B,ve=K,s.width=Math.floor(B*Ee),s.height=Math.floor(K*Ee),ce===!0&&(s.style.width=B+"px",s.style.height=K+"px"),this.setViewport(0,0,B,K)},this.getDrawingBufferSize=function(B){return B.set(Se*Ee,ve*Ee).floor()},this.setDrawingBufferSize=function(B,K,ce){Se=B,ve=K,Ee=ce,s.width=Math.floor(B*ce),s.height=Math.floor(K*ce),this.setViewport(0,0,B,K)},this.getCurrentViewport=function(B){return B.copy(k)},this.getViewport=function(B){return B.copy($e)},this.setViewport=function(B,K,ce,ue){B.isVector4?$e.set(B.x,B.y,B.z,B.w):$e.set(B,K,ce,ue),et.viewport(k.copy($e).multiplyScalar(Ee).round())},this.getScissor=function(B){return B.copy(Ve)},this.setScissor=function(B,K,ce,ue){B.isVector4?Ve.set(B.x,B.y,B.z,B.w):Ve.set(B,K,ce,ue),et.scissor(j.copy(Ve).multiplyScalar(Ee).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(B){et.setScissorTest(mt=B)},this.setOpaqueSort=function(B){de=B},this.setTransparentSort=function(B){We=B},this.getClearColor=function(B){return B.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(B=!0,K=!0,ce=!0){let ue=0;if(B){let te=!1;if(Y!==null){const Ie=Y.texture.format;te=Ie===Oc||Ie===Vc||Ie===kc}if(te){const Ie=Y.texture.type,He=Ie===qi||Ie===is||Ie===ko||Ie===qs||Ie===Dc||Ie===Bc,qe=Ye.getClearColor(),je=Ye.getClearAlpha(),it=qe.r,lt=qe.g,ot=qe.b;He?(C[0]=it,C[1]=lt,C[2]=ot,C[3]=je,Z.clearBufferuiv(Z.COLOR,0,C)):(P[0]=it,P[1]=lt,P[2]=ot,P[3]=je,Z.clearBufferiv(Z.COLOR,0,P))}else ue|=Z.COLOR_BUFFER_BIT}K&&(ue|=Z.DEPTH_BUFFER_BIT),ce&&(ue|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){s.removeEventListener("webglcontextlost",ye,!1),s.removeEventListener("webglcontextrestored",xe,!1),s.removeEventListener("webglcontextcreationerror",Be,!1),ke.dispose(),Oe.dispose(),pt.dispose(),X.dispose(),L.dispose(),Ue.dispose(),vt.dispose(),$t.dispose(),Te.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Jn),Le.removeEventListener("sessionend",ls),ai.stop()};function ye(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const B=an.autoReset,K=Ne.enabled,ce=Ne.autoUpdate,ue=Ne.needsUpdate,te=Ne.type;Q(),an.autoReset=B,Ne.enabled=K,Ne.autoUpdate=ce,Ne.needsUpdate=ue,Ne.type=te}function Be(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function at(B){const K=B.target;K.removeEventListener("dispose",at),dt(K)}function dt(B){Xt(B),pt.remove(B)}function Xt(B){const K=pt.get(B).programs;K!==void 0&&(K.forEach(function(ce){Te.releaseProgram(ce)}),B.isShaderMaterial&&Te.releaseShaderCache(B))}this.renderBufferDirect=function(B,K,ce,ue,te,Ie){K===null&&(K=Qe);const He=te.isMesh&&te.matrixWorld.determinant()<0,qe=_0(B,K,ce,ue,te);et.setMaterial(ue,He);let je=ce.index,it=1;if(ue.wireframe===!0){if(je=we.getWireframeAttribute(ce),je===void 0)return;it=2}const lt=ce.drawRange,ot=ce.attributes.position;let It=lt.start*it,Vt=(lt.start+lt.count)*it;Ie!==null&&(It=Math.max(It,Ie.start*it),Vt=Math.min(Vt,(Ie.start+Ie.count)*it)),je!==null?(It=Math.max(It,0),Vt=Math.min(Vt,je.count)):ot!=null&&(It=Math.max(It,0),Vt=Math.min(Vt,ot.count));const qt=Vt-It;if(qt<0||qt===1/0)return;vt.setup(te,ue,qe,ce,je);let En,Dt=ut;if(je!==null&&(En=fe.get(je),Dt=Ze,Dt.setIndex(En)),te.isMesh)ue.wireframe===!0?(et.setLineWidth(ue.wireframeLinewidth*Ut()),Dt.setMode(Z.LINES)):Dt.setMode(Z.TRIANGLES);else if(te.isLine){let Ke=ue.linewidth;Ke===void 0&&(Ke=1),et.setLineWidth(Ke*Ut()),te.isLineSegments?Dt.setMode(Z.LINES):te.isLineLoop?Dt.setMode(Z.LINE_LOOP):Dt.setMode(Z.LINE_STRIP)}else te.isPoints?Dt.setMode(Z.POINTS):te.isSprite&&Dt.setMode(Z.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Dt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Dt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Ke=te._multiDrawStarts,fn=te._multiDrawCounts,Bt=te._multiDrawCount,Vn=je?fe.get(je).bytesPerElement:1,er=pt.get(ue).currentProgram.getUniforms();for(let gn=0;gn<Bt;gn++)er.setValue(Z,"_gl_DrawID",gn),Dt.render(Ke[gn]/Vn,fn[gn])}else if(te.isInstancedMesh)Dt.renderInstances(It,qt,te.count);else if(ce.isInstancedBufferGeometry){const Ke=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,fn=Math.min(ce.instanceCount,Ke);Dt.renderInstances(It,qt,fn)}else Dt.render(It,qt)};function tn(B,K,ce){B.transparent===!0&&B.side===Zi&&B.forceSinglePass===!1?(B.side=Bn,B.needsUpdate=!0,gi(B,K,ce),B.side=vr,B.needsUpdate=!0,gi(B,K,ce),B.side=Zi):gi(B,K,ce)}this.compile=function(B,K,ce=null){ce===null&&(ce=B),R=Oe.get(ce),R.init(K),W.push(R),ce.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),B!==ce&&B.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),R.setupLights();const ue=new Set;return B.traverse(function(te){const Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){const qe=Ie[He];tn(qe,ce,te),ue.add(qe)}else tn(Ie,ce,te),ue.add(Ie)}),W.pop(),R=null,ue},this.compileAsync=function(B,K,ce=null){const ue=this.compile(B,K,ce);return new Promise(te=>{function Ie(){if(ue.forEach(function(He){pt.get(He).currentProgram.isReady()&&ue.delete(He)}),ue.size===0){te(B);return}setTimeout(Ie,10)}Et.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let bt=null;function oi(B){bt&&bt(B)}function Jn(){ai.stop()}function ls(){ai.start()}const ai=new xp;ai.setAnimationLoop(oi),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(B){bt=B,Le.setAnimationLoop(B),B===null?ai.stop():ai.start()},Le.addEventListener("sessionstart",Jn),Le.addEventListener("sessionend",ls),this.render=function(B,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(K),K=Le.getCamera()),B.isScene===!0&&B.onBeforeRender(V,B,K,Y),R=Oe.get(B,W.length),R.init(K),W.push(R),Je.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ct.setFromProjectionMatrix(Je),Re=this.localClippingEnabled,pe=gt.init(this.clippingPlanes,Re),I=ke.get(B,T.length),I.init(),T.push(I),Le.enabled===!0&&Le.isPresenting===!0){const Ie=V.xr.getDepthSensingMesh();Ie!==null&&Sr(Ie,K,-1/0,V.sortObjects)}Sr(B,K,0,V.sortObjects),I.finish(),V.sortObjects===!0&&I.sort(de,We),nt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,nt&&Ye.addToRenderList(I,B),this.info.render.frame++,pe===!0&&gt.beginShadows();const ce=R.state.shadowsArray;Ne.render(ce,B,K),pe===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=I.opaque,te=I.transmissive;if(R.setupLights(),K.isArrayCamera){const Ie=K.cameras;if(te.length>0)for(let He=0,qe=Ie.length;He<qe;He++){const je=Ie[He];Ft(ue,te,B,je)}nt&&Ye.render(B);for(let He=0,qe=Ie.length;He<qe;He++){const je=Ie[He];Ni(I,B,je,je.viewport)}}else te.length>0&&Ft(ue,te,B,K),nt&&Ye.render(B),Ni(I,B,K);Y!==null&&(At.updateMultisampleRenderTarget(Y),At.updateRenderTargetMipmap(Y)),B.isScene===!0&&B.onAfterRender(V,B,K),vt.resetDefaultState(),ae=-1,O=null,W.pop(),W.length>0?(R=W[W.length-1],pe===!0&&gt.setGlobalState(V.clippingPlanes,R.state.camera)):R=null,T.pop(),T.length>0?I=T[T.length-1]:I=null};function Sr(B,K,ce,ue){if(B.visible===!1)return;if(B.layers.test(K.layers)){if(B.isGroup)ce=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(K);else if(B.isLight)R.pushLight(B),B.castShadow&&R.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||Ct.intersectsSprite(B)){ue&&Fe.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Je);const He=Ue.update(B),qe=B.material;qe.visible&&I.push(B,He,qe,ce,Fe.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||Ct.intersectsObject(B))){const He=Ue.update(B),qe=B.material;if(ue&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),Fe.copy(B.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Fe.copy(He.boundingSphere.center)),Fe.applyMatrix4(B.matrixWorld).applyMatrix4(Je)),Array.isArray(qe)){const je=He.groups;for(let it=0,lt=je.length;it<lt;it++){const ot=je[it],It=qe[ot.materialIndex];It&&It.visible&&I.push(B,He,It,ce,Fe.z,ot)}}else qe.visible&&I.push(B,He,qe,ce,Fe.z,null)}}const Ie=B.children;for(let He=0,qe=Ie.length;He<qe;He++)Sr(Ie[He],K,ce,ue)}function Ni(B,K,ce,ue){const te=B.opaque,Ie=B.transmissive,He=B.transparent;R.setupLightsView(ce),pe===!0&&gt.setGlobalState(V.clippingPlanes,ce),ue&&et.viewport(k.copy(ue)),te.length>0&&Er(te,K,ce),Ie.length>0&&Er(Ie,K,ce),He.length>0&&Er(He,K,ce),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Ft(B,K,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;R.state.transmissionRenderTarget[ue.id]===void 0&&(R.state.transmissionRenderTarget[ue.id]=new rs(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Go:qi,minFilter:ts,samples:4,stencilBuffer:h,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const Ie=R.state.transmissionRenderTarget[ue.id],He=ue.viewport||k;Ie.setSize(He.z,He.w);const qe=V.getRenderTarget();V.setRenderTarget(Ie),V.getClearColor(he),Me=V.getClearAlpha(),Me<1&&V.setClearColor(16777215,.5),nt?Ye.render(ce):V.clear();const je=V.toneMapping;V.toneMapping=_r;const it=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),R.setupLightsView(ue),pe===!0&&gt.setGlobalState(V.clippingPlanes,ue),Er(B,ce,ue),At.updateMultisampleRenderTarget(Ie),At.updateRenderTargetMipmap(Ie),Et.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let ot=0,It=K.length;ot<It;ot++){const Vt=K[ot],qt=Vt.object,En=Vt.geometry,Dt=Vt.material,Ke=Vt.group;if(Dt.side===Zi&&qt.layers.test(ue.layers)){const fn=Dt.side;Dt.side=Bn,Dt.needsUpdate=!0,wr(qt,ce,ue,En,Dt,Ke),Dt.side=fn,Dt.needsUpdate=!0,lt=!0}}lt===!0&&(At.updateMultisampleRenderTarget(Ie),At.updateRenderTargetMipmap(Ie))}V.setRenderTarget(qe),V.setClearColor(he,Me),it!==void 0&&(ue.viewport=it),V.toneMapping=je}function Er(B,K,ce){const ue=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Ie=B.length;te<Ie;te++){const He=B[te],qe=He.object,je=He.geometry,it=ue===null?He.material:ue,lt=He.group;qe.layers.test(ce.layers)&&wr(qe,K,ce,je,it,lt)}}function wr(B,K,ce,ue,te,Ie){B.onBeforeRender(V,K,ce,ue,te,Ie),B.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),te.transparent===!0&&te.side===Zi&&te.forceSinglePass===!1?(te.side=Bn,te.needsUpdate=!0,V.renderBufferDirect(ce,K,ue,te,B,Ie),te.side=vr,te.needsUpdate=!0,V.renderBufferDirect(ce,K,ue,te,B,Ie),te.side=Zi):V.renderBufferDirect(ce,K,ue,te,B,Ie),B.onAfterRender(V,K,ce,ue,te,Ie)}function gi(B,K,ce){K.isScene!==!0&&(K=Qe);const ue=pt.get(B),te=R.state.lights,Ie=R.state.shadowsArray,He=te.state.version,qe=Te.getParameters(B,te.state,Ie,K,ce),je=Te.getProgramCacheKey(qe);let it=ue.programs;ue.environment=B.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(B.isMeshStandardMaterial?L:X).get(B.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&B.envMap===null?K.environmentRotation:B.envMapRotation,it===void 0&&(B.addEventListener("dispose",at),it=new Map,ue.programs=it);let lt=it.get(je);if(lt!==void 0){if(ue.currentProgram===lt&&ue.lightsStateVersion===He)return Yo(B,qe),lt}else qe.uniforms=Te.getUniforms(B),B.onBeforeCompile(qe,V),lt=Te.acquireProgram(qe,je),it.set(je,lt),ue.uniforms=qe.uniforms;const ot=ue.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(ot.clippingPlanes=gt.uniform),Yo(B,qe),ue.needsLights=io(B),ue.lightsStateVersion=He,ue.needsLights&&(ot.ambientLightColor.value=te.state.ambient,ot.lightProbe.value=te.state.probe,ot.directionalLights.value=te.state.directional,ot.directionalLightShadows.value=te.state.directionalShadow,ot.spotLights.value=te.state.spot,ot.spotLightShadows.value=te.state.spotShadow,ot.rectAreaLights.value=te.state.rectArea,ot.ltc_1.value=te.state.rectAreaLTC1,ot.ltc_2.value=te.state.rectAreaLTC2,ot.pointLights.value=te.state.point,ot.pointLightShadows.value=te.state.pointShadow,ot.hemisphereLights.value=te.state.hemi,ot.directionalShadowMap.value=te.state.directionalShadowMap,ot.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ot.spotShadowMap.value=te.state.spotShadowMap,ot.spotLightMatrix.value=te.state.spotLightMatrix,ot.spotLightMap.value=te.state.spotLightMap,ot.pointShadowMap.value=te.state.pointShadowMap,ot.pointShadowMatrix.value=te.state.pointShadowMatrix),ue.currentProgram=lt,ue.uniformsList=null,lt}function jn(B){if(B.uniformsList===null){const K=B.currentProgram.getUniforms();B.uniformsList=n0.seqWithValue(K.seq,B.uniforms)}return B.uniformsList}function Yo(B,K){const ce=pt.get(B);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function _0(B,K,ce,ue,te){K.isScene!==!0&&(K=Qe),At.resetTextureUnits();const Ie=K.fog,He=ue.isMeshStandardMaterial?K.environment:null,qe=Y===null?V.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Mr,je=(ue.isMeshStandardMaterial?L:X).get(ue.envMap||He),it=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,lt=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),ot=!!ce.morphAttributes.position,It=!!ce.morphAttributes.normal,Vt=!!ce.morphAttributes.color;let qt=_r;ue.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(qt=V.toneMapping);const En=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Dt=En!==void 0?En.length:0,Ke=pt.get(ue),fn=R.state.lights;if(pe===!0&&(Re===!0||B!==O)){const Ln=B===O&&ue.id===ae;gt.setState(ue,B,Ln)}let Bt=!1;ue.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==fn.state.version||Ke.outputColorSpace!==qe||te.isBatchedMesh&&Ke.batching===!1||!te.isBatchedMesh&&Ke.batching===!0||te.isBatchedMesh&&Ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ke.instancing===!1||!te.isInstancedMesh&&Ke.instancing===!0||te.isSkinnedMesh&&Ke.skinning===!1||!te.isSkinnedMesh&&Ke.skinning===!0||te.isInstancedMesh&&Ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ke.instancingMorph===!1&&te.morphTexture!==null||Ke.envMap!==je||ue.fog===!0&&Ke.fog!==Ie||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==gt.numPlanes||Ke.numIntersection!==gt.numIntersection)||Ke.vertexAlphas!==it||Ke.vertexTangents!==lt||Ke.morphTargets!==ot||Ke.morphNormals!==It||Ke.morphColors!==Vt||Ke.toneMapping!==qt||Ke.morphTargetsCount!==Dt)&&(Bt=!0):(Bt=!0,Ke.__version=ue.version);let Vn=Ke.currentProgram;Bt===!0&&(Vn=gi(ue,K,te));let er=!1,gn=!1,ro=!1;const ln=Vn.getUniforms(),_i=Ke.uniforms;if(et.useProgram(Vn.program)&&(er=!0,gn=!0,ro=!0),ue.id!==ae&&(ae=ue.id,gn=!0),er||O!==B){ln.setValue(Z,"projectionMatrix",B.projectionMatrix),ln.setValue(Z,"viewMatrix",B.matrixWorldInverse);const Ln=ln.map.cameraPosition;Ln!==void 0&&Ln.setValue(Z,ne.setFromMatrixPosition(B.matrixWorld)),Ot.logarithmicDepthBuffer&&ln.setValue(Z,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&ln.setValue(Z,"isOrthographic",B.isOrthographicCamera===!0),O!==B&&(O=B,gn=!0,ro=!0)}if(te.isSkinnedMesh){ln.setOptional(Z,te,"bindMatrix"),ln.setOptional(Z,te,"bindMatrixInverse");const Ln=te.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),ln.setValue(Z,"boneTexture",Ln.boneTexture,At))}te.isBatchedMesh&&(ln.setOptional(Z,te,"batchingTexture"),ln.setValue(Z,"batchingTexture",te._matricesTexture,At),ln.setOptional(Z,te,"batchingIdTexture"),ln.setValue(Z,"batchingIdTexture",te._indirectTexture,At),ln.setOptional(Z,te,"batchingColorTexture"),te._colorsTexture!==null&&ln.setValue(Z,"batchingColorTexture",te._colorsTexture,At));const cs=ce.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&Tt.update(te,ce,Vn),(gn||Ke.receiveShadow!==te.receiveShadow)&&(Ke.receiveShadow=te.receiveShadow,ln.setValue(Z,"receiveShadow",te.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(_i.envMap.value=je,_i.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(_i.envMapIntensity.value=K.environmentIntensity),gn&&(ln.setValue(Z,"toneMappingExposure",V.toneMappingExposure),Ke.needsLights&&v0(_i,ro),Ie&&ue.fog===!0&&st.refreshFogUniforms(_i,Ie),st.refreshMaterialUniforms(_i,ue,Ee,ve,R.state.transmissionRenderTarget[B.id]),n0.upload(Z,jn(Ke),_i,At)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(n0.upload(Z,jn(Ke),_i,At),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&ln.setValue(Z,"center",te.center),ln.setValue(Z,"modelViewMatrix",te.modelViewMatrix),ln.setValue(Z,"normalMatrix",te.normalMatrix),ln.setValue(Z,"modelMatrix",te.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Ln=ue.uniformsGroups;for(let so=0,y0=Ln.length;so<y0;so++){const Jo=Ln[so];$t.update(Jo,Vn),$t.bind(Jo,Vn)}}return Vn}function v0(B,K){B.ambientLightColor.needsUpdate=K,B.lightProbe.needsUpdate=K,B.directionalLights.needsUpdate=K,B.directionalLightShadows.needsUpdate=K,B.pointLights.needsUpdate=K,B.pointLightShadows.needsUpdate=K,B.spotLights.needsUpdate=K,B.spotLightShadows.needsUpdate=K,B.rectAreaLights.needsUpdate=K,B.hemisphereLights.needsUpdate=K}function io(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(B,K,ce){pt.get(B.texture).__webglTexture=K,pt.get(B.depthTexture).__webglTexture=ce;const ue=pt.get(B);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(B,K){const ce=pt.get(B);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(B,K=0,ce=0){Y=B,se=K,J=ce;let ue=!0,te=null,Ie=!1,He=!1;if(B){const je=pt.get(B);je.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(Z.FRAMEBUFFER,null),ue=!1):je.__webglFramebuffer===void 0?At.setupRenderTarget(B):je.__hasExternalTextures&&At.rebindTextures(B,pt.get(B.texture).__webglTexture,pt.get(B.depthTexture).__webglTexture);const it=B.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(He=!0);const lt=pt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(lt[K])?te=lt[K][ce]:te=lt[K],Ie=!0):B.samples>0&&At.useMultisampledRTT(B)===!1?te=pt.get(B).__webglMultisampledFramebuffer:Array.isArray(lt)?te=lt[ce]:te=lt,k.copy(B.viewport),j.copy(B.scissor),me=B.scissorTest}else k.copy($e).multiplyScalar(Ee).floor(),j.copy(Ve).multiplyScalar(Ee).floor(),me=mt;if(et.bindFramebuffer(Z.FRAMEBUFFER,te)&&ue&&et.drawBuffers(B,te),et.viewport(k),et.scissor(j),et.setScissorTest(me),Ie){const je=pt.get(B.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,je.__webglTexture,ce)}else if(He){const je=pt.get(B.texture),it=K||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,je.__webglTexture,ce||0,it)}ae=-1},this.readRenderTargetPixels=function(B,K,ce,ue,te,Ie,He){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=pt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){et.bindFramebuffer(Z.FRAMEBUFFER,qe);try{const je=B.texture,it=je.format,lt=je.type;if(!Ot.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=B.width-ue&&ce>=0&&ce<=B.height-te&&Z.readPixels(K,ce,ue,te,ht.convert(it),ht.convert(lt),Ie)}finally{const je=Y!==null?pt.get(Y).__webglFramebuffer:null;et.bindFramebuffer(Z.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(B,K,ce,ue,te,Ie,He){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=pt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){et.bindFramebuffer(Z.FRAMEBUFFER,qe);try{const je=B.texture,it=je.format,lt=je.type;if(!Ot.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=B.width-ue&&ce>=0&&ce<=B.height-te){const ot=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ot),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ie.byteLength,Z.STREAM_READ),Z.readPixels(K,ce,ue,te,ht.convert(it),ht.convert(lt),0),Z.flush();const It=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);await XR(Z,It,4);try{Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ot),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ie)}finally{Z.deleteBuffer(ot),Z.deleteSync(It)}return Ie}}finally{const je=Y!==null?pt.get(Y).__webglFramebuffer:null;et.bindFramebuffer(Z.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(B,K=null,ce=0){B.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,B=arguments[1]);const ue=Math.pow(2,-ce),te=Math.floor(B.image.width*ue),Ie=Math.floor(B.image.height*ue),He=K!==null?K.x:0,qe=K!==null?K.y:0;At.setTexture2D(B,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ce,0,0,He,qe,te,Ie),et.unbindTexture()},this.copyTextureToTexture=function(B,K,ce=null,ue=null,te=0){B.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,B=arguments[1],K=arguments[2],te=arguments[3]||0,ce=null);let Ie,He,qe,je,it,lt;ce!==null?(Ie=ce.max.x-ce.min.x,He=ce.max.y-ce.min.y,qe=ce.min.x,je=ce.min.y):(Ie=B.image.width,He=B.image.height,qe=0,je=0),ue!==null?(it=ue.x,lt=ue.y):(it=0,lt=0);const ot=ht.convert(K.format),It=ht.convert(K.type);At.setTexture2D(K,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);const Vt=Z.getParameter(Z.UNPACK_ROW_LENGTH),qt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),En=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Dt=Z.getParameter(Z.UNPACK_SKIP_ROWS),Ke=Z.getParameter(Z.UNPACK_SKIP_IMAGES),fn=B.isCompressedTexture?B.mipmaps[te]:B.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,fn.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,fn.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,qe),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,je),B.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,te,it,lt,Ie,He,ot,It,fn.data):B.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,te,it,lt,fn.width,fn.height,ot,fn.data):Z.texSubImage2D(Z.TEXTURE_2D,te,it,lt,Ie,He,ot,It,fn),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Vt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,qt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,En),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Dt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ke),te===0&&K.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(B,K,ce=null,ue=null,te=0){B.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,B=arguments[2],K=arguments[3],te=arguments[4]||0);let Ie,He,qe,je,it,lt,ot,It,Vt;const qt=B.isCompressedTexture?B.mipmaps[te]:B.image;ce!==null?(Ie=ce.max.x-ce.min.x,He=ce.max.y-ce.min.y,qe=ce.max.z-ce.min.z,je=ce.min.x,it=ce.min.y,lt=ce.min.z):(Ie=qt.width,He=qt.height,qe=qt.depth,je=0,it=0,lt=0),ue!==null?(ot=ue.x,It=ue.y,Vt=ue.z):(ot=0,It=0,Vt=0);const En=ht.convert(K.format),Dt=ht.convert(K.type);let Ke;if(K.isData3DTexture)At.setTexture3D(K,0),Ke=Z.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)At.setTexture2DArray(K,0),Ke=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);const fn=Z.getParameter(Z.UNPACK_ROW_LENGTH),Bt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Vn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),er=Z.getParameter(Z.UNPACK_SKIP_ROWS),gn=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,qt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,qt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,je),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,it),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,lt),B.isDataTexture||B.isData3DTexture?Z.texSubImage3D(Ke,te,ot,It,Vt,Ie,He,qe,En,Dt,qt.data):K.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ke,te,ot,It,Vt,Ie,He,qe,En,qt.data):Z.texSubImage3D(Ke,te,ot,It,Vt,Ie,He,qe,En,Dt,qt),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,fn),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Bt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Vn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,er),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,gn),te===0&&K.generateMipmaps&&Z.generateMipmap(Ke),et.unbindTexture()},this.initRenderTarget=function(B){pt.get(B).__webglFramebuffer===void 0&&At.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?At.setTextureCube(B,0):B.isData3DTexture?At.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?At.setTexture2DArray(B,0):At.setTexture2D(B,0),et.unbindTexture()},this.resetState=function(){se=0,J=0,Y=null,et.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const s=this.getContext();s.drawingBufferColorSpace=t===zc?"display-p3":"srgb",s.unpackColorSpace=Wt.workingColorSpace===d0?"display-p3":"srgb"}}class Xc{constructor(t,s=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=s}clone(){return new Xc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class eF extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,s){return super.copy(t,s),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const s=super.toJSON(t);return this.fog!==null&&(s.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(s.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(s.object.backgroundIntensity=this.backgroundIntensity),s.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(s.object.environmentIntensity=this.environmentIntensity),s.object.environmentRotation=this.environmentRotation.toArray(),s}}class Rp extends Xo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sd=new dn,Cc=new fp,Ya=new p0,Ja=new le;class tF extends kn{constructor(t=new Ki,s=new Rp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=s,this.updateMorphTargets()}copy(t,s){return super.copy(t,s),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,s){const a=this.geometry,u=this.matrixWorld,h=t.params.Points.threshold,A=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ya.copy(a.boundingSphere),Ya.applyMatrix4(u),Ya.radius+=h,t.ray.intersectsSphere(Ya)===!1)return;Sd.copy(u).invert(),Cc.copy(t.ray).applyMatrix4(Sd);const g=h/((this.scale.x+this.scale.y+this.scale.z)/3),v=g*g,x=a.index,E=a.attributes.position;if(x!==null){const w=Math.max(0,A.start),C=Math.min(x.count,A.start+A.count);for(let P=w,I=C;P<I;P++){const R=x.getX(P);Ja.fromBufferAttribute(E,R),Ed(Ja,R,v,u,t,s,this)}}else{const w=Math.max(0,A.start),C=Math.min(E.count,A.start+A.count);for(let P=w,I=C;P<I;P++)Ja.fromBufferAttribute(E,P),Ed(Ja,P,v,u,t,s,this)}}updateMorphTargets(){const s=this.geometry.morphAttributes,a=Object.keys(s);if(a.length>0){const u=s[a[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let h=0,A=u.length;h<A;h++){const g=u[h].name||String(h);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=h}}}}}function Ed(o,t,s,a,u,h,A){const g=Cc.distanceSqToPoint(o);if(g<s){const v=new le;Cc.closestPointToPoint(o,v),v.applyMatrix4(a);const x=u.ray.origin.distanceTo(v);if(x<u.near||x>u.far)return;h.push({distance:x,distanceToRay:Math.sqrt(g),point:v,index:t,face:null,object:A})}}const wd={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class nF{constructor(t,s,a){const u=this;let h=!1,A=0,g=0,v;const x=[];this.onStart=void 0,this.onLoad=t,this.onProgress=s,this.onError=a,this.itemStart=function(M){g++,h===!1&&u.onStart!==void 0&&u.onStart(M,A,g),h=!0},this.itemEnd=function(M){A++,u.onProgress!==void 0&&u.onProgress(M,A,g),A===g&&(h=!1,u.onLoad!==void 0&&u.onLoad())},this.itemError=function(M){u.onError!==void 0&&u.onError(M)},this.resolveURL=function(M){return v?v(M):M},this.setURLModifier=function(M){return v=M,this},this.addHandler=function(M,E){return x.push(M,E),this},this.removeHandler=function(M){const E=x.indexOf(M);return E!==-1&&x.splice(E,2),this},this.getHandler=function(M){for(let E=0,w=x.length;E<w;E+=2){const C=x[E],P=x[E+1];if(C.global&&(C.lastIndex=0),C.test(M))return P}return null}}}const iF=new nF;class Hc{constructor(t){this.manager=t!==void 0?t:iF,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,s){const a=this;return new Promise(function(u,h){a.load(t,u,s,h)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hc.DEFAULT_MATERIAL_NAME="__DEFAULT";class rF extends Hc{constructor(t){super(t)}load(t,s,a,u){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const h=this,A=wd.get(t);if(A!==void 0)return h.manager.itemStart(t),setTimeout(function(){s&&s(A),h.manager.itemEnd(t)},0),A;const g=Oo("img");function v(){M(),wd.add(t,this),s&&s(this),h.manager.itemEnd(t)}function x(E){M(),u&&u(E),h.manager.itemError(t),h.manager.itemEnd(t)}function M(){g.removeEventListener("load",v,!1),g.removeEventListener("error",x,!1)}return g.addEventListener("load",v,!1),g.addEventListener("error",x,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(g.crossOrigin=this.crossOrigin),h.manager.itemStart(t),g.src=t,g}}class sF extends Hc{constructor(t){super(t)}load(t,s,a,u){const h=new Nn,A=new rF(this.manager);return A.setCrossOrigin(this.crossOrigin),A.setPath(this.path),A.load(t,function(g){h.image=g,h.needsUpdate=!0,s!==void 0&&s(h)},a,u),h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);var Do=function(){var o=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(M){M.preventDefault(),a(++o%t.children.length)},!1);function s(M){return t.appendChild(M.dom),M}function a(M){for(var E=0;E<t.children.length;E++)t.children[E].style.display=E===M?"block":"none";o=M}var u=(performance||Date).now(),h=u,A=0,g=s(new Do.Panel("FPS","#0ff","#002")),v=s(new Do.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var x=s(new Do.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:t,addPanel:s,showPanel:a,begin:function(){u=(performance||Date).now()},end:function(){A++;var M=(performance||Date).now();if(v.update(M-u,200),M>=h+1e3&&(g.update(A*1e3/(M-h),100),h=M,A=0,x)){var E=performance.memory;x.update(E.usedJSHeapSize/1048576,E.jsHeapSizeLimit/1048576)}return M},update:function(){u=this.end()},domElement:t,setMode:a}};Do.Panel=function(o,t,s){var a=1/0,u=0,h=Math.round,A=h(window.devicePixelRatio||1),g=80*A,v=48*A,x=3*A,M=2*A,E=3*A,w=15*A,C=74*A,P=30*A,I=document.createElement("canvas");I.width=g,I.height=v,I.style.cssText="width:80px;height:48px";var R=I.getContext("2d");return R.font="bold "+9*A+"px Helvetica,Arial,sans-serif",R.textBaseline="top",R.fillStyle=s,R.fillRect(0,0,g,v),R.fillStyle=t,R.fillText(o,x,M),R.fillRect(E,w,C,P),R.fillStyle=s,R.globalAlpha=.9,R.fillRect(E,w,C,P),{dom:I,update:function(T,W){a=Math.min(a,T),u=Math.max(u,T),R.fillStyle=s,R.globalAlpha=1,R.fillRect(0,0,g,w),R.fillStyle=t,R.fillText(h(T)+" "+o+" ("+h(a)+"-"+h(u)+")",x,M),R.drawImage(I,E+A,w,C-A,P,E,w,C-A,P),R.fillRect(E+C-A,w,A,P),R.fillStyle=s,R.globalAlpha=.9,R.fillRect(E+C-A,w,A,h((1-T/W)*P))}}};const zl={type:"change"},Gl={type:"start"},Wl={type:"end"};class oF extends ss{constructor(t,s){super();const a=this,u={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=t,this.domElement=s,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:pl.ROTATE,MIDDLE:pl.DOLLY,RIGHT:pl.PAN},this.target=new le;const h=1e-6,A=new le;let g=1,v=u.NONE,x=u.NONE,M=0,E=0,w=0;const C=new le,P=new Mt,I=new Mt,R=new le,T=new Mt,W=new Mt,V=new Mt,H=new Mt,se=[],J={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const ne=a.domElement.getBoundingClientRect(),Fe=a.domElement.ownerDocument.documentElement;a.screen.left=ne.left+window.pageXOffset-Fe.clientLeft,a.screen.top=ne.top+window.pageYOffset-Fe.clientTop,a.screen.width=ne.width,a.screen.height=ne.height};const Y=function(){const ne=new Mt;return function(Qe,nt){return ne.set((Qe-a.screen.left)/a.screen.width,(nt-a.screen.top)/a.screen.height),ne}}(),ae=function(){const ne=new Mt;return function(Qe,nt){return ne.set((Qe-a.screen.width*.5-a.screen.left)/(a.screen.width*.5),(a.screen.height+2*(a.screen.top-nt))/a.screen.width),ne}}();this.rotateCamera=function(){const ne=new le,Fe=new to,Qe=new le,nt=new le,Ut=new le,Z=new le;return function(){Z.set(I.x-P.x,I.y-P.y,0);let Et=Z.length();Et?(C.copy(a.object.position).sub(a.target),Qe.copy(C).normalize(),nt.copy(a.object.up).normalize(),Ut.crossVectors(nt,Qe).normalize(),nt.setLength(I.y-P.y),Ut.setLength(I.x-P.x),Z.copy(nt.add(Ut)),ne.crossVectors(Z,C).normalize(),Et*=a.rotateSpeed,Fe.setFromAxisAngle(ne,Et),C.applyQuaternion(Fe),a.object.up.applyQuaternion(Fe),R.copy(ne),w=Et):!a.staticMoving&&w&&(w*=Math.sqrt(1-a.dynamicDampingFactor),C.copy(a.object.position).sub(a.target),Fe.setFromAxisAngle(R,w),C.applyQuaternion(Fe),a.object.up.applyQuaternion(Fe)),P.copy(I)}}(),this.zoomCamera=function(){let ne;v===u.TOUCH_ZOOM_PAN?(ne=M/E,M=E,a.object.isPerspectiveCamera?C.multiplyScalar(ne):a.object.isOrthographicCamera?(a.object.zoom=Nh.clamp(a.object.zoom/ne,a.minZoom,a.maxZoom),g!==a.object.zoom&&a.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(ne=1+(W.y-T.y)*a.zoomSpeed,ne!==1&&ne>0&&(a.object.isPerspectiveCamera?C.multiplyScalar(ne):a.object.isOrthographicCamera?(a.object.zoom=Nh.clamp(a.object.zoom/ne,a.minZoom,a.maxZoom),g!==a.object.zoom&&a.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),a.staticMoving?T.copy(W):T.y+=(W.y-T.y)*this.dynamicDampingFactor)},this.panCamera=function(){const ne=new Mt,Fe=new le,Qe=new le;return function(){if(ne.copy(H).sub(V),ne.lengthSq()){if(a.object.isOrthographicCamera){const Ut=(a.object.right-a.object.left)/a.object.zoom/a.domElement.clientWidth,Z=(a.object.top-a.object.bottom)/a.object.zoom/a.domElement.clientWidth;ne.x*=Ut,ne.y*=Z}ne.multiplyScalar(C.length()*a.panSpeed),Qe.copy(C).cross(a.object.up).setLength(ne.x),Qe.add(Fe.copy(a.object.up).setLength(ne.y)),a.object.position.add(Qe),a.target.add(Qe),a.staticMoving?V.copy(H):V.add(ne.subVectors(H,V).multiplyScalar(a.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!a.noZoom||!a.noPan)&&(C.lengthSq()>a.maxDistance*a.maxDistance&&(a.object.position.addVectors(a.target,C.setLength(a.maxDistance)),T.copy(W)),C.lengthSq()<a.minDistance*a.minDistance&&(a.object.position.addVectors(a.target,C.setLength(a.minDistance)),T.copy(W)))},this.update=function(){C.subVectors(a.object.position,a.target),a.noRotate||a.rotateCamera(),a.noZoom||a.zoomCamera(),a.noPan||a.panCamera(),a.object.position.addVectors(a.target,C),a.object.isPerspectiveCamera?(a.checkDistances(),a.object.lookAt(a.target),A.distanceToSquared(a.object.position)>h&&(a.dispatchEvent(zl),A.copy(a.object.position))):a.object.isOrthographicCamera?(a.object.lookAt(a.target),(A.distanceToSquared(a.object.position)>h||g!==a.object.zoom)&&(a.dispatchEvent(zl),A.copy(a.object.position),g=a.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){v=u.NONE,x=u.NONE,a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.up.copy(a.up0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),C.subVectors(a.object.position,a.target),a.object.lookAt(a.target),a.dispatchEvent(zl),A.copy(a.object.position),g=a.object.zoom};function O(ne){a.enabled!==!1&&(se.length===0&&(a.domElement.setPointerCapture(ne.pointerId),a.domElement.addEventListener("pointermove",k),a.domElement.addEventListener("pointerup",j)),Ct(ne),ne.pointerType==="touch"?We(ne):Se(ne))}function k(ne){a.enabled!==!1&&(ne.pointerType==="touch"?$e(ne):ve(ne))}function j(ne){a.enabled!==!1&&(ne.pointerType==="touch"?Ve(ne):Ee(),pe(ne),se.length===0&&(a.domElement.releasePointerCapture(ne.pointerId),a.domElement.removeEventListener("pointermove",k),a.domElement.removeEventListener("pointerup",j)))}function me(ne){pe(ne)}function he(ne){a.enabled!==!1&&(window.removeEventListener("keydown",he),x===u.NONE&&(ne.code===a.keys[u.ROTATE]&&!a.noRotate?x=u.ROTATE:ne.code===a.keys[u.ZOOM]&&!a.noZoom?x=u.ZOOM:ne.code===a.keys[u.PAN]&&!a.noPan&&(x=u.PAN)))}function Me(){a.enabled!==!1&&(x=u.NONE,window.addEventListener("keydown",he))}function Se(ne){if(v===u.NONE)switch(ne.button){case a.mouseButtons.LEFT:v=u.ROTATE;break;case a.mouseButtons.MIDDLE:v=u.ZOOM;break;case a.mouseButtons.RIGHT:v=u.PAN;break}const Fe=x!==u.NONE?x:v;Fe===u.ROTATE&&!a.noRotate?(I.copy(ae(ne.pageX,ne.pageY)),P.copy(I)):Fe===u.ZOOM&&!a.noZoom?(T.copy(Y(ne.pageX,ne.pageY)),W.copy(T)):Fe===u.PAN&&!a.noPan&&(V.copy(Y(ne.pageX,ne.pageY)),H.copy(V)),a.dispatchEvent(Gl)}function ve(ne){const Fe=x!==u.NONE?x:v;Fe===u.ROTATE&&!a.noRotate?(P.copy(I),I.copy(ae(ne.pageX,ne.pageY))):Fe===u.ZOOM&&!a.noZoom?W.copy(Y(ne.pageX,ne.pageY)):Fe===u.PAN&&!a.noPan&&H.copy(Y(ne.pageX,ne.pageY))}function Ee(){v=u.NONE,a.dispatchEvent(Wl)}function de(ne){if(a.enabled!==!1&&a.noZoom!==!0){switch(ne.preventDefault(),ne.deltaMode){case 2:T.y-=ne.deltaY*.025;break;case 1:T.y-=ne.deltaY*.01;break;default:T.y-=ne.deltaY*25e-5;break}a.dispatchEvent(Gl),a.dispatchEvent(Wl)}}function We(ne){switch(Re(ne),se.length){case 1:v=u.TOUCH_ROTATE,I.copy(ae(se[0].pageX,se[0].pageY)),P.copy(I);break;default:v=u.TOUCH_ZOOM_PAN;const Fe=se[0].pageX-se[1].pageX,Qe=se[0].pageY-se[1].pageY;E=M=Math.sqrt(Fe*Fe+Qe*Qe);const nt=(se[0].pageX+se[1].pageX)/2,Ut=(se[0].pageY+se[1].pageY)/2;V.copy(Y(nt,Ut)),H.copy(V);break}a.dispatchEvent(Gl)}function $e(ne){switch(Re(ne),se.length){case 1:P.copy(I),I.copy(ae(ne.pageX,ne.pageY));break;default:const Fe=Je(ne),Qe=ne.pageX-Fe.x,nt=ne.pageY-Fe.y;E=Math.sqrt(Qe*Qe+nt*nt);const Ut=(ne.pageX+Fe.x)/2,Z=(ne.pageY+Fe.y)/2;H.copy(Y(Ut,Z));break}}function Ve(ne){switch(se.length){case 0:v=u.NONE;break;case 1:v=u.TOUCH_ROTATE,I.copy(ae(ne.pageX,ne.pageY)),P.copy(I);break;case 2:v=u.TOUCH_ZOOM_PAN;for(let Fe=0;Fe<se.length;Fe++)if(se[Fe].pointerId!==ne.pointerId){const Qe=J[se[Fe].pointerId];I.copy(ae(Qe.x,Qe.y)),P.copy(I);break}break}a.dispatchEvent(Wl)}function mt(ne){a.enabled!==!1&&ne.preventDefault()}function Ct(ne){se.push(ne)}function pe(ne){delete J[ne.pointerId];for(let Fe=0;Fe<se.length;Fe++)if(se[Fe].pointerId==ne.pointerId){se.splice(Fe,1);return}}function Re(ne){let Fe=J[ne.pointerId];Fe===void 0&&(Fe=new Mt,J[ne.pointerId]=Fe),Fe.set(ne.pageX,ne.pageY)}function Je(ne){const Fe=ne.pointerId===se[0].pointerId?se[1]:se[0];return J[Fe.pointerId]}this.dispose=function(){a.domElement.removeEventListener("contextmenu",mt),a.domElement.removeEventListener("pointerdown",O),a.domElement.removeEventListener("pointercancel",me),a.domElement.removeEventListener("wheel",de),a.domElement.removeEventListener("pointermove",k),a.domElement.removeEventListener("pointerup",j),window.removeEventListener("keydown",he),window.removeEventListener("keyup",Me)},this.domElement.addEventListener("contextmenu",mt),this.domElement.addEventListener("pointerdown",O),this.domElement.addEventListener("pointercancel",me),this.domElement.addEventListener("wheel",de,{passive:!1}),window.addEventListener("keydown",he),window.addEventListener("keyup",Me),this.handleResize(),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Pi{constructor(t,s,a,u,h="div"){this.parent=t,this.object=s,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(u),this.$name=document.createElement("div"),this.$name.classList.add("name"),Pi.nextNameID=Pi.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Pi.nextNameID,this.$widget=document.createElement(h),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const s=this.parent.add(this.object,this.property,t);return s.name(this._name),this.destroy(),s}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class aF extends Pi{constructor(t,s,a){super(t,s,a,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Uc(o){let t,s;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?s=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?s=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(s=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!s&&"#"+s}const lF={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Uc,toHexString:Uc},zo={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},cF={isPrimitive:!1,match:Array.isArray,fromHexString(o,t,s=1){const a=zo.fromHexString(o);t[0]=(a>>16&255)/255*s,t[1]=(a>>8&255)/255*s,t[2]=(255&a)/255*s},toHexString:([o,t,s],a=1)=>zo.toHexString(o*(a=255/a)<<16^t*a<<8^s*a<<0)},uF={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,s=1){const a=zo.fromHexString(o);t.r=(a>>16&255)/255*s,t.g=(a>>8&255)/255*s,t.b=(255&a)/255*s},toHexString:({r:o,g:t,b:s},a=1)=>zo.toHexString(o*(a=255/a)<<16^t*a<<8^s*a<<0)},fF=[lF,zo,cF,uF];class hF extends Pi{constructor(t,s,a,u){var h;super(t,s,a,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(h=this.initialValue,fF.find(A=>A.match(h))),this._rgbScale=u,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const A=Uc(this.$text.value);A&&this._setValueFromHexString(A)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const s=this._format.fromHexString(t);this.setValue(s)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Xl extends Pi{constructor(t,s,a){super(t,s,a,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",u=>{u.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class dF extends Pi{constructor(t,s,a,u,h,A){super(t,s,a,"number"),this._initInput(),this.min(u),this.max(h);const g=A!==void 0;this.step(g?A:this._getImplicitStep(),g),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,s=!0){return this._step=t,this._stepExplicit=s,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let s=(t-this._min)/(this._max-this._min);s=Math.max(0,Math.min(s,1)),this.$fill.style.width=100*s+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=M=>{const E=parseFloat(this.$input.value);isNaN(E)||(this._snapClampSetValue(E+M),this.$input.value=this.getValue())};let s,a,u,h,A,g=!1;const v=M=>{if(g){const E=M.clientX-s,w=M.clientY-a;Math.abs(w)>5?(M.preventDefault(),this.$input.blur(),g=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(E)>5&&x()}if(!g){const E=M.clientY-u;A-=E*this._step*this._arrowKeyMultiplier(M),h+A>this._max?A=this._max-h:h+A<this._min&&(A=this._min-h),this._snapClampSetValue(h+A)}u=M.clientY},x=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",x)};this.$input.addEventListener("input",()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))}),this.$input.addEventListener("keydown",M=>{M.code==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),t(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),t(this._step*this._arrowKeyMultiplier(M)*-1))}),this.$input.addEventListener("wheel",M=>{this._inputFocused&&(M.preventDefault(),t(this._step*this._normalizeMouseWheel(M)))},{passive:!1}),this.$input.addEventListener("mousedown",M=>{s=M.clientX,a=u=M.clientY,g=!0,h=this.getValue(),A=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",x)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=w=>{const C=this.$slider.getBoundingClientRect();let P=(I=w,R=C.left,T=C.right,W=this._min,V=this._max,(I-R)/(T-R)*(V-W)+W);var I,R,T,W,V;this._snapClampSetValue(P)},s=w=>{t(w.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",a)};let u,h,A=!1;const g=w=>{w.preventDefault(),this._setDraggingStyle(!0),t(w.touches[0].clientX),A=!1},v=w=>{if(A){const C=w.touches[0].clientX-u,P=w.touches[0].clientY-h;Math.abs(C)>Math.abs(P)?g(w):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x))}else w.preventDefault(),t(w.touches[0].clientX)},x=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)},M=this._callOnFinishChange.bind(this);let E;this.$slider.addEventListener("mousedown",w=>{this._setDraggingStyle(!0),t(w.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",a)}),this.$slider.addEventListener("touchstart",w=>{w.touches.length>1||(this._hasScrollBar?(u=w.touches[0].clientX,h=w.touches[0].clientY,A=!0):g(w),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",x))},{passive:!1}),this.$slider.addEventListener("wheel",w=>{if(Math.abs(w.deltaX)<Math.abs(w.deltaY)&&this._hasScrollBar)return;w.preventDefault();const C=this._normalizeMouseWheel(w)*this._step;this._snapClampSetValue(this.getValue()+C),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(M,400)},{passive:!1})}_setDraggingStyle(t,s="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+s,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:s,deltaY:a}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(s=0,a=-t.wheelDelta/120,a*=this._stepExplicit?1:10),s+-a}_arrowKeyMultiplier(t){let s=this._stepExplicit?1:10;return t.shiftKey?s*=10:t.altKey&&(s/=10),s}_snap(t){const s=Math.round(t/this._step)*this._step;return parseFloat(s.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class pF extends Pi{constructor(t,s,a,u){super(t,s,a,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(u)?u:Object.values(u),this._names=Array.isArray(u)?u:Object.keys(u),this._names.forEach(h=>{const A=document.createElement("option");A.innerHTML=h,this.$select.appendChild(A)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),s=this._values.indexOf(t);return this.$select.selectedIndex=s,this.$display.innerHTML=s===-1?t:this._names[s],this}}class mF extends Pi{constructor(t,s,a){super(t,s,a,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Td=!1;class Zc{constructor({parent:t,autoPlace:s=t===void 0,container:a,width:u,title:h="Controls",injectStyles:A=!0,touchStyles:g=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",v=>{v.code!=="Enter"&&v.code!=="Space"||(v.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(h),g&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Td&&A&&(function(v){const x=document.createElement("style");x.innerHTML=v;const M=document.querySelector("head link[rel=stylesheet], head style");M?document.head.insertBefore(x,M):document.head.appendChild(x)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Td=!0),a?a.appendChild(this.domElement):s&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),u&&this.domElement.style.setProperty("--width",u+"px"),this.domElement.addEventListener("keydown",v=>v.stopPropagation()),this.domElement.addEventListener("keyup",v=>v.stopPropagation())}add(t,s,a,u,h){if(Object(a)===a)return new pF(this,t,s,a);const A=t[s];switch(typeof A){case"number":return new dF(this,t,s,a,u,h);case"boolean":return new aF(this,t,s);case"string":return new mF(this,t,s);case"function":return new Xl(this,t,s)}console.error(`gui.add failed
	property:`,s,`
	object:`,t,`
	value:`,A)}addColor(t,s,a=1){return new hF(this,t,s,a)}addFolder(t){return new Zc({parent:this,title:t})}load(t,s=!0){return t.controllers&&this.controllers.forEach(a=>{a instanceof Xl||a._name in t.controllers&&a.load(t.controllers[a._name])}),s&&t.folders&&this.folders.forEach(a=>{a._title in t.folders&&a.load(t.folders[a._title])}),this}save(t=!0){const s={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof Xl)){if(a._name in s.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);s.controllers[a._name]=a.save()}}),t&&this.folders.forEach(a=>{if(a._title in s.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);s.folders[a._title]=a.save()}),s}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const s=this.$children.clientHeight;this.$children.style.height=s+"px",this.domElement.classList.add("transition");const a=h=>{h.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const u=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=u+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(s=>{t=t.concat(s.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(s=>{t=t.concat(s.foldersRecursive())}),t}}function Rd(o,t){if(!o)throw new Error(t||"loader assertion failed.")}const Cp=!!(typeof process!="object"||String(process)!=="[object process]"||process.browser),Cd=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Cd&&parseFloat(Cd[1]);const ja=globalThis,Vs=globalThis.process||{};function AF(o){var a,u;if(typeof window<"u"&&((a=window.process)==null?void 0:a.type)==="renderer"||typeof process<"u"&&((u=process.versions)!=null&&u.electron))return!0;const t=typeof navigator<"u"&&navigator.userAgent,s=o||t;return!!(s&&s.indexOf("Electron")>=0)}function Yc(){return!(typeof process=="object"&&String(process)==="[object process]"&&!(process!=null&&process.browser))||AF()}const Up="4.0.7";function gF(o){try{const t=window[o],s="__storage_test__";return t.setItem(s,s),t.removeItem(s),t}catch{return null}}class _F{constructor(t,s,a="sessionStorage"){this.storage=gF(a),this.id=t,this.config=s,this._loadConfiguration()}getConfiguration(){return this.config}setConfiguration(t){if(Object.assign(this.config,t),this.storage){const s=JSON.stringify(this.config);this.storage.setItem(this.id,s)}}_loadConfiguration(){let t={};if(this.storage){const s=this.storage.getItem(this.id);t=s?JSON.parse(s):{}}return Object.assign(this.config,t),this}}function vF(o){let t;return o<10?t=`${o.toFixed(2)}ms`:o<100?t=`${o.toFixed(1)}ms`:o<1e3?t=`${o.toFixed(0)}ms`:t=`${(o/1e3).toFixed(2)}s`,t}function yF(o,t=8){const s=Math.max(t-o.length,0);return`${" ".repeat(s)}${o}`}var l0;(function(o){o[o.BLACK=30]="BLACK",o[o.RED=31]="RED",o[o.GREEN=32]="GREEN",o[o.YELLOW=33]="YELLOW",o[o.BLUE=34]="BLUE",o[o.MAGENTA=35]="MAGENTA",o[o.CYAN=36]="CYAN",o[o.WHITE=37]="WHITE",o[o.BRIGHT_BLACK=90]="BRIGHT_BLACK",o[o.BRIGHT_RED=91]="BRIGHT_RED",o[o.BRIGHT_GREEN=92]="BRIGHT_GREEN",o[o.BRIGHT_YELLOW=93]="BRIGHT_YELLOW",o[o.BRIGHT_BLUE=94]="BRIGHT_BLUE",o[o.BRIGHT_MAGENTA=95]="BRIGHT_MAGENTA",o[o.BRIGHT_CYAN=96]="BRIGHT_CYAN",o[o.BRIGHT_WHITE=97]="BRIGHT_WHITE"})(l0||(l0={}));const xF=10;function Ud(o){return typeof o!="string"?o:(o=o.toUpperCase(),l0[o]||l0.WHITE)}function MF(o,t,s){return!Yc&&typeof o=="string"&&(t&&(o=`\x1B[${Ud(t)}m${o}\x1B[39m`),s&&(o=`\x1B[${Ud(s)+xF}m${o}\x1B[49m`)),o}function SF(o,t=["constructor"]){const s=Object.getPrototypeOf(o),a=Object.getOwnPropertyNames(s),u=o;for(const h of a){const A=u[h];typeof A=="function"&&(t.find(g=>h===g)||(u[h]=A.bind(o)))}}function Jc(o,t){if(!o)throw new Error(t||"Assertion failed")}function Os(){var t,s,a;let o;if(Yc()&&ja.performance)o=(s=(t=ja==null?void 0:ja.performance)==null?void 0:t.now)==null?void 0:s.call(t);else if("hrtime"in Vs){const u=(a=Vs==null?void 0:Vs.hrtime)==null?void 0:a.call(Vs);o=u[0]*1e3+u[1]/1e6}else o=Date.now();return o}const zs={debug:Yc()&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},EF={enabled:!0,level:0};function Gs(){}const bd={},Fd={once:!0};class jc{constructor({id:t}={id:""}){this.VERSION=Up,this._startTs=Os(),this._deltaTs=Os(),this.userData={},this.LOG_THROTTLE_TIMEOUT=0,this.id=t,this.userData={},this._storage=new _F(`__probe-${this.id}__`,EF),this.timeStamp(`${this.id} started`),SF(this),Object.seal(this)}set level(t){this.setLevel(t)}get level(){return this.getLevel()}isEnabled(){return this._storage.config.enabled}getLevel(){return this._storage.config.level}getTotal(){return Number((Os()-this._startTs).toPrecision(10))}getDelta(){return Number((Os()-this._deltaTs).toPrecision(10))}set priority(t){this.level=t}get priority(){return this.level}getPriority(){return this.level}enable(t=!0){return this._storage.setConfiguration({enabled:t}),this}setLevel(t){return this._storage.setConfiguration({level:t}),this}get(t){return this._storage.config[t]}set(t,s){this._storage.setConfiguration({[t]:s})}settings(){console.table?console.table(this._storage.config):console.log(this._storage.config)}assert(t,s){if(!t)throw new Error(s||"Assertion failed")}warn(t){return this._getLogFunction(0,t,zs.warn,arguments,Fd)}error(t){return this._getLogFunction(0,t,zs.error,arguments)}deprecated(t,s){return this.warn(`\`${t}\` is deprecated and will be removed in a later version. Use \`${s}\` instead`)}removed(t,s){return this.error(`\`${t}\` has been removed. Use \`${s}\` instead`)}probe(t,s){return this._getLogFunction(t,s,zs.log,arguments,{time:!0,once:!0})}log(t,s){return this._getLogFunction(t,s,zs.debug,arguments)}info(t,s){return this._getLogFunction(t,s,console.info,arguments)}once(t,s){return this._getLogFunction(t,s,zs.debug||zs.info,arguments,Fd)}table(t,s,a){return s?this._getLogFunction(t,s,console.table||Gs,a&&[a],{tag:TF(s)}):Gs}time(t,s){return this._getLogFunction(t,s,console.time?console.time:console.info)}timeEnd(t,s){return this._getLogFunction(t,s,console.timeEnd?console.timeEnd:console.info)}timeStamp(t,s){return this._getLogFunction(t,s,console.timeStamp||Gs)}group(t,s,a={collapsed:!1}){const u=Pd({logLevel:t,message:s,opts:a}),{collapsed:h}=a;return u.method=(h?console.groupCollapsed:console.group)||console.info,this._getLogFunction(u)}groupCollapsed(t,s,a={}){return this.group(t,s,Object.assign({},a,{collapsed:!0}))}groupEnd(t){return this._getLogFunction(t,"",console.groupEnd||Gs)}withGroup(t,s,a){this.group(t,s)();try{a()}finally{this.groupEnd(t)()}}trace(){console.trace&&console.trace()}_shouldLog(t){return this.isEnabled()&&this.getLevel()>=bp(t)}_getLogFunction(t,s,a,u,h){if(this._shouldLog(t)){h=Pd({logLevel:t,message:s,args:u,opts:h}),a=a||h.method,Jc(a),h.total=this.getTotal(),h.delta=this.getDelta(),this._deltaTs=Os();const A=h.tag||h.message;if(h.once&&A)if(!bd[A])bd[A]=Os();else return Gs;return s=wF(this.id,h.message,h),a.bind(console,s,...h.args)}return Gs}}jc.VERSION=Up;function bp(o){if(!o)return 0;let t;switch(typeof o){case"number":t=o;break;case"object":t=o.logLevel||o.priority||0;break;default:return 0}return Jc(Number.isFinite(t)&&t>=0),t}function Pd(o){const{logLevel:t,message:s}=o;o.logLevel=bp(t);const a=o.args?Array.from(o.args):[];for(;a.length&&a.shift()!==s;);switch(typeof t){case"string":case"function":s!==void 0&&a.unshift(s),o.message=t;break;case"object":Object.assign(o,t);break}typeof o.message=="function"&&(o.message=o.message());const u=typeof o.message;return Jc(u==="string"||u==="object"),Object.assign(o,{args:a},o.opts)}function wF(o,t,s){if(typeof t=="string"){const a=s.time?yF(vF(s.total)):"";t=s.time?`${o}: ${a}  ${t}`:`${o}: ${t}`,t=MF(t,s.color,s.background)}return t}function TF(o){for(const t in o)for(const s in o[t])return s||"untitled";return"empty"}function RF(o,t){return Fp(o||{},t)}function Fp(o,t,s=0){if(s>3)return t;const a={...o};for(const[u,h]of Object.entries(t))h&&typeof h=="object"&&!Array.isArray(h)?a[u]=Fp(a[u]||{},t[u],s+1):a[u]=t[u];return a}const CF="latest";function UF(){var o;return(o=globalThis._loadersgl_)!=null&&o.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version="4.2.1"),globalThis._loadersgl_.version}const bF=UF();function xr(o,t){if(!o)throw new Error(t||"loaders.gl assertion failed.")}const ns=typeof process!="object"||String(process)!=="[object process]"||process.browser,FF=typeof window<"u"&&typeof window.orientation<"u",Nd=typeof process<"u"&&process.version&&/v([0-9]*)/.exec(process.version);Nd&&parseFloat(Nd[1]);class PF{constructor(t,s){tt(this,"name");tt(this,"workerThread");tt(this,"isRunning",!0);tt(this,"result");tt(this,"_resolve",()=>{});tt(this,"_reject",()=>{});this.name=t,this.workerThread=s,this.result=new Promise((a,u)=>{this._resolve=a,this._reject=u})}postMessage(t,s){this.workerThread.postMessage({source:"loaders.gl",type:t,payload:s})}done(t){xr(this.isRunning),this.isRunning=!1,this._resolve(t)}error(t){xr(this.isRunning),this.isRunning=!1,this._reject(t)}}class Hl{terminate(){}}const Zl=new Map;function NF(o){xr(o.source&&!o.url||!o.source&&o.url);let t=Zl.get(o.source||o.url);return t||(o.url&&(t=LF(o.url),Zl.set(o.url,t)),o.source&&(t=Pp(o.source),Zl.set(o.source,t))),xr(t),t}function LF(o){if(!o.startsWith("http"))return o;const t=IF(o);return Pp(t)}function Pp(o){const t=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(t)}function IF(o){return`try {
  importScripts('${o}');
} catch (error) {
  console.error(error);
  throw error;
}`}function Np(o,t=!0,s){const a=s||new Set;if(o){if(Ld(o))a.add(o);else if(Ld(o.buffer))a.add(o.buffer);else if(!ArrayBuffer.isView(o)){if(t&&typeof o=="object")for(const u in o)Np(o[u],t,a)}}return s===void 0?Array.from(a):[]}function Ld(o){return o?o instanceof ArrayBuffer||typeof MessagePort<"u"&&o instanceof MessagePort||typeof ImageBitmap<"u"&&o instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas:!1}const Yl=()=>{};class bc{constructor(t){tt(this,"name");tt(this,"source");tt(this,"url");tt(this,"terminated",!1);tt(this,"worker");tt(this,"onMessage");tt(this,"onError");tt(this,"_loadableURL","");const{name:s,source:a,url:u}=t;xr(a||u),this.name=s,this.source=a,this.url=u,this.onMessage=Yl,this.onError=h=>console.log(h),this.worker=ns?this._createBrowserWorker():this._createNodeWorker()}static isSupported(){return typeof Worker<"u"&&ns||typeof Hl<"u"&&!ns}destroy(){this.onMessage=Yl,this.onError=Yl,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(t,s){s=s||Np(t),this.worker.postMessage(t,s)}_getErrorFromErrorEvent(t){let s="Failed to load ";return s+=`worker ${this.name} from ${this.url}. `,t.message&&(s+=`${t.message} in `),t.lineno&&(s+=`:${t.lineno}:${t.colno}`),new Error(s)}_createBrowserWorker(){this._loadableURL=NF({source:this.source,url:this.url});const t=new Worker(this._loadableURL,{name:this.name});return t.onmessage=s=>{s.data?this.onMessage(s.data):this.onError(new Error("No data received"))},t.onerror=s=>{this.onError(this._getErrorFromErrorEvent(s)),this.terminated=!0},t.onmessageerror=s=>console.error(s),t}_createNodeWorker(){let t;if(this.url){const a=this.url.includes(":/")||this.url.startsWith("/")?this.url:`./${this.url}`;t=new Hl(a,{eval:!1})}else if(this.source)t=new Hl(this.source,{eval:!0});else throw new Error("no worker");return t.on("message",s=>{this.onMessage(s)}),t.on("error",s=>{this.onError(s)}),t.on("exit",s=>{}),t}}class DF{constructor(t){tt(this,"name","unnamed");tt(this,"source");tt(this,"url");tt(this,"maxConcurrency",1);tt(this,"maxMobileConcurrency",1);tt(this,"onDebug",()=>{});tt(this,"reuseWorkers",!0);tt(this,"props",{});tt(this,"jobQueue",[]);tt(this,"idleQueue",[]);tt(this,"count",0);tt(this,"isDestroyed",!1);this.source=t.source,this.url=t.url,this.setProps(t)}static isSupported(){return bc.isSupported()}destroy(){this.idleQueue.forEach(t=>t.destroy()),this.isDestroyed=!0}setProps(t){this.props={...this.props,...t},t.name!==void 0&&(this.name=t.name),t.maxConcurrency!==void 0&&(this.maxConcurrency=t.maxConcurrency),t.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=t.maxMobileConcurrency),t.reuseWorkers!==void 0&&(this.reuseWorkers=t.reuseWorkers),t.onDebug!==void 0&&(this.onDebug=t.onDebug)}async startJob(t,s=(u,h,A)=>u.done(A),a=(u,h)=>u.error(h)){const u=new Promise(h=>(this.jobQueue.push({name:t,onMessage:s,onError:a,onStart:h}),this));return this._startQueuedJob(),await u}async _startQueuedJob(){if(!this.jobQueue.length)return;const t=this._getAvailableWorker();if(!t)return;const s=this.jobQueue.shift();if(s){this.onDebug({message:"Starting job",name:s.name,workerThread:t,backlog:this.jobQueue.length});const a=new PF(s.name,t);t.onMessage=u=>s.onMessage(a,u.type,u.payload),t.onError=u=>s.onError(a,u),s.onStart(a);try{await a.result}catch(u){console.error(`Worker exception: ${u}`)}finally{this.returnWorkerToQueue(t)}}}returnWorkerToQueue(t){!ns||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(t.destroy(),this.count--):this.idleQueue.push(t),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){if(this.idleQueue.length>0)return this.idleQueue.shift()||null;if(this.count<this._getMaxConcurrency()){this.count++;const t=`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`;return new bc({name:t,source:this.source,url:this.url})}return null}_getMaxConcurrency(){return FF?this.maxMobileConcurrency:this.maxConcurrency}}const BF={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}},mr=class mr{constructor(t){tt(this,"props");tt(this,"workerPools",new Map);this.props={...BF},this.setProps(t),this.workerPools=new Map}static isSupported(){return bc.isSupported()}static getWorkerFarm(t={}){return mr._workerFarm=mr._workerFarm||new mr({}),mr._workerFarm.setProps(t),mr._workerFarm}destroy(){for(const t of this.workerPools.values())t.destroy();this.workerPools=new Map}setProps(t){this.props={...this.props,...t};for(const s of this.workerPools.values())s.setProps(this._getWorkerPoolProps())}getWorkerPool(t){const{name:s,source:a,url:u}=t;let h=this.workerPools.get(s);return h||(h=new DF({name:s,source:a,url:u}),h.setProps(this._getWorkerPoolProps()),this.workerPools.set(s,h)),h}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}};tt(mr,"_workerFarm");let c0=mr;function kF(o,t={}){const s=t[o.id]||{},a=ns?`${o.id}-worker.js`:`${o.id}-worker-node.js`;let u=s.workerUrl;if(!u&&o.id==="compression"&&(u=t.workerUrl),t._workerType==="test"&&(ns?u=`modules/${o.module}/dist/${a}`:u=`modules/${o.module}/src/workers/${o.id}-worker-node.ts`),!u){let h=o.version;h==="latest"&&(h=CF);const A=h?`@${h}`:"";u=`https://unpkg.com/@loaders.gl/${o.module}${A}/dist/${a}`}return xr(u),u}function VF(o,t=bF){xr(o,"no worker provided");const s=o.version;return!(!t||!s)}function OF(o,t){return!c0.isSupported()||!ns&&!(t!=null&&t._nodeWorkers)?!1:o.worker&&(t==null?void 0:t.worker)}async function zF(o,t,s,a,u){const h=o.id,A=kF(o,s),v=c0.getWorkerFarm(s).getWorkerPool({name:h,url:A});s=JSON.parse(JSON.stringify(s)),a=JSON.parse(JSON.stringify(a||{}));const x=await v.startJob("process-on-worker",GF.bind(null,u));return x.postMessage("process",{input:t,options:s,context:a}),await(await x.result).result}async function GF(o,t,s,a){switch(s){case"done":t.done(a);break;case"error":t.error(new Error(a.error));break;case"process":const{id:u,input:h,options:A}=a;try{const g=await o(h,A);t.postMessage("done",{id:u,result:g})}catch(g){const v=g instanceof Error?g.message:"unknown error";t.postMessage("error",{id:u,error:v})}break;default:console.warn(`parse-with-worker unknown message ${s}`)}}function WF(o,t,s){if(s=s||o.byteLength,o.byteLength<s||t.byteLength<s)return!1;const a=new Uint8Array(o),u=new Uint8Array(t);for(let h=0;h<a.length;++h)if(a[h]!==u[h])return!1;return!0}function XF(...o){return HF(o)}function HF(o){const t=o.map(h=>h instanceof ArrayBuffer?new Uint8Array(h):h),s=t.reduce((h,A)=>h+A.byteLength,0),a=new Uint8Array(s);let u=0;for(const h of t)a.set(h,u),u+=h.byteLength;return a.buffer}async function ZF(o){const t=[];for await(const s of o)t.push(s);return XF(...t)}let YF="";const Id={};function JF(o){for(const t in Id)if(o.startsWith(t)){const s=Id[t];o=o.replace(t,s)}return!o.startsWith("http://")&&!o.startsWith("https://")&&(o=`${YF}${o}`),o}function jF(o){return o&&typeof o=="object"&&o.isBuffer}function Lp(o){if(jF(o))return o;if(o instanceof ArrayBuffer)return o;if(ArrayBuffer.isView(o))return o.byteOffset===0&&o.byteLength===o.buffer.byteLength?o.buffer:o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength);if(typeof o=="string"){const t=o;return new TextEncoder().encode(t).buffer}if(o&&typeof o=="object"&&o._toArrayBuffer)return o._toArrayBuffer();throw new Error("toArrayBuffer")}function Ip(o){const t=o?o.lastIndexOf("/"):-1;return t>=0?o.substr(t+1):""}function $F(o){const t=o?o.lastIndexOf("/"):-1;return t>=0?o.substr(0,t):""}const qF=o=>typeof o=="boolean",Bo=o=>typeof o=="function",Zo=o=>o!==null&&typeof o=="object",Dd=o=>Zo(o)&&o.constructor==={}.constructor,QF=o=>!!o&&typeof o[Symbol.iterator]=="function",KF=o=>o&&typeof o[Symbol.asyncIterator]=="function",os=o=>typeof Response<"u"&&o instanceof Response||o&&o.arrayBuffer&&o.text&&o.json,as=o=>typeof Blob<"u"&&o instanceof Blob,eP=o=>o&&typeof o=="object"&&o.isBuffer,tP=o=>typeof ReadableStream<"u"&&o instanceof ReadableStream||Zo(o)&&Bo(o.tee)&&Bo(o.cancel)&&Bo(o.getReader),nP=o=>Zo(o)&&Bo(o.read)&&Bo(o.pipe)&&qF(o.readable),Dp=o=>tP(o)||nP(o);class iP extends Error{constructor(s,a){super(s);tt(this,"reason");tt(this,"url");tt(this,"response");this.reason=a.reason,this.url=a.url,this.response=a.response}}const rP=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,sP=/^([-\w.]+\/[-\w.+]+)/;function Bd(o,t){return o.toLowerCase()===t.toLowerCase()}function oP(o){const t=sP.exec(o);return t?t[1]:o}function kd(o){const t=rP.exec(o);return t?t[1]:""}const Bp=/\?.*/;function aP(o){const t=o.match(Bp);return t&&t[0]}function $c(o){return o.replace(Bp,"")}function lP(o){if(o.length<50)return o;const t=o.slice(o.length-15);return`${o.substr(0,32)}...${t}`}function g0(o){return os(o)?o.url:as(o)?o.name||"":typeof o=="string"?o:""}function qc(o){if(os(o)){const t=o,s=t.headers.get("content-type")||"",a=$c(t.url);return oP(s)||kd(a)}return as(o)?o.type||"":typeof o=="string"?kd(o):""}function cP(o){return os(o)?o.headers["content-length"]||-1:as(o)?o.size:typeof o=="string"?o.length:o instanceof ArrayBuffer||ArrayBuffer.isView(o)?o.byteLength:-1}async function kp(o){if(os(o))return o;const t={},s=cP(o);s>=0&&(t["content-length"]=String(s));const a=g0(o),u=qc(o);u&&(t["content-type"]=u);const h=await hP(o);h&&(t["x-first-bytes"]=h),typeof o=="string"&&(o=new TextEncoder().encode(o));const A=new Response(o,{headers:t});return Object.defineProperty(A,"url",{value:a}),A}async function uP(o){if(!o.ok)throw await fP(o)}async function fP(o){const t=lP(o.url);let s=`Failed to fetch resource (${o.status}) ${o.statusText}: ${t}`;s=s.length>100?`${s.slice(0,100)}...`:s;const a={reason:o.statusText,url:o.url,response:o};try{const u=o.headers.get("Content-Type");a.reason=u!=null&&u.includes("application/json")?await o.json():o.text()}catch{}return new iP(s,a)}async function hP(o){if(typeof o=="string")return`data:,${o.slice(0,5)}`;if(o instanceof Blob){const s=o.slice(0,5);return await new Promise(a=>{const u=new FileReader;u.onload=h=>{var A;return a((A=h==null?void 0:h.target)==null?void 0:A.result)},u.readAsDataURL(s)})}if(o instanceof ArrayBuffer){const s=o.slice(0,5);return`data:base64,${dP(s)}`}return null}function dP(o){let t="";const s=new Uint8Array(o);for(let a=0;a<s.byteLength;a++)t+=String.fromCharCode(s[a]);return btoa(t)}function pP(o){return!mP(o)&&!AP(o)}function mP(o){return o.startsWith("http:")||o.startsWith("https:")}function AP(o){return o.startsWith("data:")}async function Vd(o,t){var s,a;if(typeof o=="string"){const u=JF(o);return pP(u)&&(s=globalThis.loaders)!=null&&s.fetchNode?(a=globalThis.loaders)==null?void 0:a.fetchNode(u,t):await fetch(u,t)}return await kp(o)}const Od=new jc({id:"loaders.gl"});class gP{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}}class _P{constructor(){tt(this,"console");this.console=console}log(...t){return this.console.log.bind(this.console,...t)}info(...t){return this.console.info.bind(this.console,...t)}warn(...t){return this.console.warn.bind(this.console,...t)}error(...t){return this.console.error.bind(this.console,...t)}}const Vp={fetch:null,mimeType:void 0,nothrow:!1,log:new _P,useLocalLibraries:!1,CDN:"https://unpkg.com/@loaders.gl",worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:Cp,_nodeWorkers:!1,_workerType:"",limit:0,_limitMB:0,batchSize:"auto",batchDebounceMs:0,metadata:!1,transforms:[]},vP={throws:"nothrow",dataType:"(no longer used)",uri:"baseUri",method:"fetch.method",headers:"fetch.headers",body:"fetch.body",mode:"fetch.mode",credentials:"fetch.credentials",cache:"fetch.cache",redirect:"fetch.redirect",referrer:"fetch.referrer",referrerPolicy:"fetch.referrerPolicy",integrity:"fetch.integrity",keepalive:"fetch.keepalive",signal:"fetch.signal"};function Op(){globalThis.loaders=globalThis.loaders||{};const{loaders:o}=globalThis;return o._state||(o._state={}),o._state}function zp(){const o=Op();return o.globalOptions=o.globalOptions||{...Vp},o.globalOptions}function yP(o,t,s,a){return s=s||[],s=Array.isArray(s)?s:[s],xP(o,s),SP(t,o,a)}function xP(o,t){zd(o,null,Vp,vP,t);for(const s of t){const a=o&&o[s.id]||{},u=s.options&&s.options[s.id]||{},h=s.deprecatedOptions&&s.deprecatedOptions[s.id]||{};zd(a,s.id,u,h,t)}}function zd(o,t,s,a,u){const h=t||"Top level",A=t?`${t}.`:"";for(const g in o){const v=!t&&Zo(o[g]),x=g==="baseUri"&&!t,M=g==="workerUrl"&&t;if(!(g in s)&&!x&&!M){if(g in a)Od.warn(`${h} loader option '${A}${g}' no longer supported, use '${a[g]}'`)();else if(!v){const E=MP(g,u);Od.warn(`${h} loader option '${A}${g}' not recognized. ${E}`)()}}}}function MP(o,t){const s=o.toLowerCase();let a="";for(const u of t)for(const h in u.options){if(o===h)return`Did you mean '${u.id}.${h}'?`;const A=h.toLowerCase();(s.startsWith(A)||A.startsWith(s))&&(a=a||`Did you mean '${u.id}.${h}'?`)}return a}function SP(o,t,s){const u={...o.options||{}};return EP(u,s),u.log===null&&(u.log=new gP),Gd(u,zp()),Gd(u,t),u}function Gd(o,t){for(const s in t)if(s in t){const a=t[s];Dd(a)&&Dd(o[s])?o[s]={...o[s],...t[s]}:o[s]=t[s]}}function EP(o,t){t&&!("baseUri"in o)&&(o.baseUri=t)}function Qc(o){return o?(Array.isArray(o)&&(o=o[0]),Array.isArray(o==null?void 0:o.extensions)):!1}function Gp(o){Rd(o,"null loader"),Rd(Qc(o),"invalid loader");let t;return Array.isArray(o)&&(t=o[1],o=o[0],o={...o,options:{...o.options,...t}}),(o!=null&&o.parseTextSync||o!=null&&o.parseText)&&(o.text=!0),o.text||(o.binary=!0),o}const wP=()=>{const o=Op();return o.loaderRegistry=o.loaderRegistry||[],o.loaderRegistry};function TP(){return wP()}const RP=new jc({id:"loaders.gl"}),CP=/\.([^.]+)$/;async function UP(o,t=[],s,a){if(!Wp(o))return null;let u=Wd(o,t,{...s,nothrow:!0},a);if(u)return u;if(as(o)&&(o=await o.slice(0,10).arrayBuffer(),u=Wd(o,t,s,a)),!u&&!(s!=null&&s.nothrow))throw new Error(Xp(o));return u}function Wd(o,t=[],s,a){if(!Wp(o))return null;if(t&&!Array.isArray(t))return Gp(t);let u=[];t&&(u=u.concat(t)),s!=null&&s.ignoreRegisteredLoaders||u.push(...TP()),FP(u);const h=bP(o,u,s,a);if(!h&&!(s!=null&&s.nothrow))throw new Error(Xp(o));return h}function bP(o,t,s,a){const u=g0(o),h=qc(o),A=$c(u)||(a==null?void 0:a.url);let g=null,v="";return s!=null&&s.mimeType&&(g=Jl(t,s==null?void 0:s.mimeType),v=`match forced by supplied MIME type ${s==null?void 0:s.mimeType}`),g=g||PP(t,A),v=v||(g?`matched url ${A}`:""),g=g||Jl(t,h),v=v||(g?`matched MIME type ${h}`:""),g=g||LP(t,o),v=v||(g?`matched initial data ${Hp(o)}`:""),s!=null&&s.fallbackMimeType&&(g=g||Jl(t,s==null?void 0:s.fallbackMimeType),v=v||(g?`matched fallback MIME type ${h}`:"")),v&&RP.log(1,`selectLoader selected ${g==null?void 0:g.name}: ${v}.`),g}function Wp(o){return!(o instanceof Response&&o.status===204)}function Xp(o){const t=g0(o),s=qc(o);let a="No valid loader found (";a+=t?`${Ip(t)}, `:"no url provided, ",a+=`MIME type: ${s?`"${s}"`:"not provided"}, `;const u=o?Hp(o):"";return a+=u?` first bytes: "${u}"`:"first bytes: not available",a+=")",a}function FP(o){for(const t of o)Gp(t)}function PP(o,t){const s=t&&CP.exec(t),a=s&&s[1];return a?NP(o,a):null}function NP(o,t){t=t.toLowerCase();for(const s of o)for(const a of s.extensions)if(a.toLowerCase()===t)return s;return null}function Jl(o,t){var s;for(const a of o)if((s=a.mimeTypes)!=null&&s.some(u=>Bd(t,u))||Bd(t,`application/x.${a.id}`))return a;return null}function LP(o,t){if(!t)return null;for(const s of o)if(typeof t=="string"){if(IP(t,s))return s}else if(ArrayBuffer.isView(t)){if(Xd(t.buffer,t.byteOffset,s))return s}else if(t instanceof ArrayBuffer&&Xd(t,0,s))return s;return null}function IP(o,t){return t.testText?t.testText(o):(Array.isArray(t.tests)?t.tests:[t.tests]).some(a=>o.startsWith(a))}function Xd(o,t,s){return(Array.isArray(s.tests)?s.tests:[s.tests]).some(u=>DP(o,t,s,u))}function DP(o,t,s,a){if(a instanceof ArrayBuffer)return WF(a,o,a.byteLength);switch(typeof a){case"function":return a(o);case"string":const u=Fc(o,t,a.length);return a===u;default:return!1}}function Hp(o,t=5){return typeof o=="string"?o.slice(0,t):ArrayBuffer.isView(o)?Fc(o.buffer,o.byteOffset,t):o instanceof ArrayBuffer?Fc(o,0,t):""}function Fc(o,t,s){if(o.byteLength<t+s)return"";const a=new DataView(o);let u="";for(let h=0;h<s;h++)u+=String.fromCharCode(a.getUint8(t+h));return u}const BP=256*1024;function*kP(o,t){const s=(t==null?void 0:t.chunkSize)||BP;let a=0;const u=new TextEncoder;for(;a<o.length;){const h=Math.min(o.length-a,s),A=o.slice(a,a+h);a+=h,yield u.encode(A)}}const VP=256*1024;function*OP(o,t={}){const{chunkSize:s=VP}=t;let a=0;for(;a<o.byteLength;){const u=Math.min(o.byteLength-a,s),h=new ArrayBuffer(u),A=new Uint8Array(o,a,u);new Uint8Array(h).set(A),a+=u,yield h}}const zP=1024*1024;async function*GP(o,t){const s=(t==null?void 0:t.chunkSize)||zP;let a=0;for(;a<o.size;){const u=a+s,h=await o.slice(a,u).arrayBuffer();a=u,yield h}}function Hd(o,t){return Cp?WP(o,t):XP(o)}async function*WP(o,t){const s=o.getReader();let a;try{for(;;){const u=a||s.read();t!=null&&t._streamReadAhead&&(a=s.read());const{done:h,value:A}=await u;if(h)return;yield Lp(A)}}catch{s.releaseLock()}}async function*XP(o,t){for await(const s of o)yield Lp(s)}function HP(o,t){if(typeof o=="string")return kP(o,t);if(o instanceof ArrayBuffer)return OP(o,t);if(as(o))return GP(o,t);if(Dp(o))return Hd(o,t);if(os(o))return Hd(o.body,t);throw new Error("makeIterator")}const Zp="Cannot convert supplied data type";function ZP(o,t,s){if(t.text&&typeof o=="string")return o;if(eP(o)&&(o=o.buffer),o instanceof ArrayBuffer){const a=o;return t.text&&!t.binary?new TextDecoder("utf8").decode(a):a}if(ArrayBuffer.isView(o)){if(t.text&&!t.binary)return new TextDecoder("utf8").decode(o);let a=o.buffer;const u=o.byteLength||o.length;return(o.byteOffset!==0||u!==a.byteLength)&&(a=a.slice(o.byteOffset,o.byteOffset+u)),a}throw new Error(Zp)}async function YP(o,t,s){const a=o instanceof ArrayBuffer||ArrayBuffer.isView(o);if(typeof o=="string"||a)return ZP(o,t);if(as(o)&&(o=await kp(o)),os(o)){const u=o;return await uP(u),t.binary?await u.arrayBuffer():await u.text()}if(Dp(o)&&(o=HP(o,s)),QF(o)||KF(o))return ZF(o);throw new Error(Zp)}function Yp(o,t){const s=zp(),a=o||s;return typeof a.fetch=="function"?a.fetch:Zo(a.fetch)?u=>Vd(u,a.fetch):t!=null&&t.fetch?t==null?void 0:t.fetch:Vd}function JP(o,t,s){if(s)return s;const a={fetch:Yp(t,o),...o};if(a.url){const u=$c(a.url);a.baseUrl=u,a.queryString=aP(a.url),a.filename=Ip(u),a.baseUrl=$F(u)}return Array.isArray(a.loaders)||(a.loaders=null),a}function jP(o,t){if(o&&!Array.isArray(o))return o;let s;if(o&&(s=Array.isArray(o)?o:[o]),t&&t.loaders){const a=Array.isArray(t.loaders)?t.loaders:[t.loaders];s=s?[...s,...a]:a}return s&&s.length?s:void 0}async function u0(o,t,s,a){t&&!Array.isArray(t)&&!Qc(t)&&(a=void 0,s=t,t=void 0),o=await o,s=s||{};const u=g0(o),A=jP(t,a),g=await UP(o,A,s);return g?(s=yP(s,g,A,u),a=JP({url:u,_parse:u0,loaders:A},s,a||null),await $P(g,o,s,a)):null}async function $P(o,t,s,a){if(VF(o),s=RF(o.options,s),os(t)){const h=t,{ok:A,redirected:g,status:v,statusText:x,type:M,url:E}=h,w=Object.fromEntries(h.headers.entries());a.response={headers:w,ok:A,redirected:g,status:v,statusText:x,type:M,url:E}}t=await YP(t,o,s);const u=o;if(u.parseTextSync&&typeof t=="string")return u.parseTextSync(t,s,a);if(OF(o,s))return await zF(o,t,s,a,u0);if(u.parseText&&typeof t=="string")return await u.parseText(t,s,a);if(u.parse)return await u.parse(t,s,a);throw xr(!u.parseSync),new Error(`${o.id} loader - no parser found and worker is disabled`)}function qP(o){switch(o.constructor){case Int8Array:return"int8";case Uint8Array:case Uint8ClampedArray:return"uint8";case Int16Array:return"int16";case Uint16Array:return"uint16";case Int32Array:return"int32";case Uint32Array:return"uint32";case Float32Array:return"float32";case Float64Array:return"float64";default:return"null"}}function QP(o){let t=1/0,s=1/0,a=1/0,u=-1/0,h=-1/0,A=-1/0;const g=o.POSITION?o.POSITION.value:[],v=g&&g.length;for(let x=0;x<v;x+=3){const M=g[x],E=g[x+1],w=g[x+2];t=M<t?M:t,s=E<s?E:s,a=w<a?w:a,u=M>u?M:u,h=E>h?E:h,A=w>A?w:A}return[[t,s,a],[u,h,A]]}function KP(o,t={}){return{fields:tN(o),metadata:t}}function eN(o,t,s){const a=qP(t.value),u=s||nN(t);return{name:o,type:{type:"fixed-size-list",listSize:t.size,children:[{name:"value",type:a}]},nullable:!1,metadata:u}}function tN(o){const t=[];for(const s in o){const a=o[s];t.push(eN(s,a))}return t}function nN(o){const t={};return"byteOffset"in o&&(t.byteOffset=o.byteOffset.toString(10)),"byteStride"in o&&(t.byteStride=o.byteStride.toString(10)),"normalized"in o&&(t.normalized=o.normalized.toString()),t}async function iN(o,t,s,a){let u,h;!Array.isArray(t)&&!Qc(t)?(u=[],h=t):(u=t,h=s);const A=Yp(h);let g=o;return typeof o=="string"&&(g=await A(o)),as(o)&&(g=await A(o)),Array.isArray(u)?await u0(g,u,h):await u0(g,u,h)}const rN="4.2.1",sN={dataType:null,batchType:null,name:"LAS",id:"las",module:"las",version:rN,worker:!0,extensions:["las","laz"],mimeTypes:["application/octet-stream"],text:!0,binary:!0,tests:["LAS"],options:{las:{shape:"mesh",fp64:!1,skip:1,colorDepth:8}}};function oN(){var o=typeof o<"u"?o:{},t={},s;for(s in o)o.hasOwnProperty(s)&&(t[s]=o[s]);var a=!1,u=!1,h=!1,A=!1;a=typeof window=="object",u=typeof importScripts=="function",h=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",A=!a&&!h&&!u;var g="";function v(b){return o.locateFile?o.locateFile(b,g):g+b}var x,M,E,w,C;h?(u?g=require("path").dirname(g)+"/":g=(typeof __dirname<"u"?__dirname:"")+"/",x=function(U,G){var m=tr(U);return m?G?m:m.toString():(w||(w=require("fs")),C||(C=require("path")),U=C.normalize(U),w.readFileSync(U,G?null:"utf8"))},E=function(U){var G=x(U,!0);return G.buffer||(G=new Uint8Array(G)),se(G.buffer),G},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),typeof Nc<"u"&&(Nc.exports=o),process.on("uncaughtException",function(b){if(!(b instanceof P2))throw b}),process.on("unhandledRejection",ke),o.inspect=function(){return"[Emscripten Module object]"}):A?(typeof read<"u"&&(x=function(U){var G=tr(U);return G?iu(G):read(U)}),E=function(U){var G;return G=tr(U),G||(typeof readbuffer=="function"?new Uint8Array(readbuffer(U)):(G=read(U,"binary"),se(typeof G=="object"),G))},typeof scriptArgs<"u"&&scriptArgs,typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)):(a||u)&&(u?g=self.location.href:document.currentScript&&(g=document.currentScript.src),g.indexOf("blob:")!==0?g=g.substr(0,g.lastIndexOf("/")+1):g="",x=function(U){try{var G=new XMLHttpRequest;return G.open("GET",U,!1),G.send(null),G.responseText}catch(re){var m=tr(U);if(m)return iu(m);throw re}},u&&(E=function(U){try{var G=new XMLHttpRequest;return G.open("GET",U,!1),G.responseType="arraybuffer",G.send(null),new Uint8Array(G.response)}catch(re){var m=tr(U);if(m)return m;throw re}}),M=function(U,G,m){var re=new XMLHttpRequest;re.open("GET",U,!0),re.responseType="arraybuffer",re.onload=function(){if(re.status==200||re.status==0&&re.response){G(re.response);return}var D=tr(U);if(D){G(D.buffer);return}m()},re.onerror=m,re.send(null)});var P=o.print||console.log.bind(console),I=o.printErr||console.warn.bind(console);for(s in t)t.hasOwnProperty(s)&&(o[s]=t[s]);t=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&o.quit,new Array(0);var R=0,T=function(b){R=b},W=function(){return R},V=8;o.wasmBinary&&o.wasmBinary,o.noExitRuntime&&o.noExitRuntime;var H=!1;function se(b,U){b||ke("Assertion failed: "+U)}var J=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Y(b,U,G){for(var m=U+G,re=U;b[re]&&!(re>=m);)++re;if(re-U>16&&b.subarray&&J)return J.decode(b.subarray(U,re));for(var n="";U<re;){var D=b[U++];if(!(D&128)){n+=String.fromCharCode(D);continue}var Ae=b[U++]&63;if((D&224)==192){n+=String.fromCharCode((D&31)<<6|Ae);continue}var Pe=b[U++]&63;if((D&240)==224?D=(D&15)<<12|Ae<<6|Pe:D=(D&7)<<18|Ae<<12|Pe<<6|b[U++]&63,D<65536)n+=String.fromCharCode(D);else{var be=D-65536;n+=String.fromCharCode(55296|be>>10,56320|be&1023)}}return n}function ae(b,U){return b?Y(Ve,b,U):""}function O(b,U,G,m){if(!(m>0))return 0;for(var re=G,n=G+m-1,D=0;D<b.length;++D){var Ae=b.charCodeAt(D);if(Ae>=55296&&Ae<=57343){var Pe=b.charCodeAt(++D);Ae=65536+((Ae&1023)<<10)|Pe&1023}if(Ae<=127){if(G>=n)break;U[G++]=Ae}else if(Ae<=2047){if(G+1>=n)break;U[G++]=192|Ae>>6,U[G++]=128|Ae&63}else if(Ae<=65535){if(G+2>=n)break;U[G++]=224|Ae>>12,U[G++]=128|Ae>>6&63,U[G++]=128|Ae&63}else{if(G+3>=n)break;U[G++]=240|Ae>>18,U[G++]=128|Ae>>12&63,U[G++]=128|Ae>>6&63,U[G++]=128|Ae&63}}return U[G]=0,G-re}function k(b,U,G){return O(b,Ve,U,G)}function j(b){for(var U=0,G=0;G<b.length;++G){var m=b.charCodeAt(G);m>=55296&&m<=57343&&(m=65536+((m&1023)<<10)|b.charCodeAt(++G)&1023),m<=127?++U:m<=2047?U+=2:m<=65535?U+=3:U+=4}return U}var me=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function he(b,U){for(var G=b,m=G>>1,re=m+U/2;!(m>=re)&&Ct[m];)++m;if(G=m<<1,G-b>32&&me)return me.decode(Ve.subarray(b,G));for(var n=0,D="";;){var Ae=mt[b+n*2>>1];if(Ae==0||n==U/2)return D;++n,D+=String.fromCharCode(Ae)}}function Me(b,U,G){if(G===void 0&&(G=2147483647),G<2)return 0;G-=2;for(var m=U,re=G<b.length*2?G/2:b.length,n=0;n<re;++n){var D=b.charCodeAt(n);mt[U>>1]=D,U+=2}return mt[U>>1]=0,U-m}function Se(b){return b.length*2}function ve(b,U){for(var G=0,m="";!(G>=U/4);){var re=pe[b+G*4>>2];if(re==0)break;if(++G,re>=65536){var n=re-65536;m+=String.fromCharCode(55296|n>>10,56320|n&1023)}else m+=String.fromCharCode(re)}return m}function Ee(b,U,G){if(G===void 0&&(G=2147483647),G<4)return 0;for(var m=U,re=m+G-4,n=0;n<b.length;++n){var D=b.charCodeAt(n);if(D>=55296&&D<=57343){var Ae=b.charCodeAt(++n);D=65536+((D&1023)<<10)|Ae&1023}if(pe[U>>2]=D,U+=4,U+4>re)break}return pe[U>>2]=0,U-m}function de(b){for(var U=0,G=0;G<b.length;++G){var m=b.charCodeAt(G);m>=55296&&m<=57343&&++G,U+=4}return U}var We,$e,Ve,mt,Ct,pe,Re,Je,ne;function Fe(b){We=b,o.HEAP8=$e=new Int8Array(b),o.HEAP16=mt=new Int16Array(b),o.HEAP32=pe=new Int32Array(b),o.HEAPU8=Ve=new Uint8Array(b),o.HEAPU16=Ct=new Uint16Array(b),o.HEAPU32=Re=new Uint32Array(b),o.HEAPF32=Je=new Float32Array(b),o.HEAPF64=ne=new Float64Array(b)}var Qe=5265264,nt=22176,Ut=o.INITIAL_MEMORY||167772160;o.buffer?We=o.buffer:We=new ArrayBuffer(Ut),Ut=We.byteLength,Fe(We),pe[nt>>2]=Qe;function Z(b){for(;b.length>0;){var U=b.shift();if(typeof U=="function"){U(o);continue}var G=U.func;typeof G=="number"?U.arg===void 0?o.dynCall_v(G):o.dynCall_vi(G,U.arg):G(U.arg===void 0?null:U.arg)}}var en=[],Et=[],Ot=[],et=[];function an(){if(o.preRun)for(typeof o.preRun=="function"&&(o.preRun=[o.preRun]);o.preRun.length;)L(o.preRun.shift());Z(en)}function pt(){Z(Et)}function At(){Z(Ot)}function X(){if(o.postRun)for(typeof o.postRun=="function"&&(o.postRun=[o.postRun]);o.postRun.length;)fe(o.postRun.shift());Z(et)}function L(b){en.unshift(b)}function fe(b){et.unshift(b)}var we=0,Ue=null;function Te(b){we++,o.monitorRunDependencies&&o.monitorRunDependencies(we)}function st(b){if(we--,o.monitorRunDependencies&&o.monitorRunDependencies(we),we==0&&Ue){var U=Ue;Ue=null,U()}}o.preloadedImages={},o.preloadedAudios={};function ke(b){throw o.onAbort&&o.onAbort(b),b+="",P(b),I(b),H=!0,b="abort("+b+"). Build with -s ASSERTIONS=1 for more info.",b}var Oe=null;function gt(b,U){return String.prototype.startsWith?b.startsWith(U):b.indexOf(U)===0}var Ne="data:application/octet-stream;base64,";function Ye(b){return gt(b,Ne)}Et.push({func:function(){b2()}}),Oe="data:application/octet-stream;base64,AAAAAAAAAAAPDg0MCwoJCA4AAQMGCgoJDQECBAcLCwoMAwQFCAwMCwsGBwgJDQ0MCgoLDA0ODg0JCgsMDQ4PDggJCgsMDQ4PAAECAwQFBgcBAAECAwQFBgIBAAECAwQFAwIBAAECAwQEAwIBAAECAwUEAwIBAAECBgUEAwIBAAEHBgUEAwIBAMgPAAAoDQAAEBAAACAQAADIDwAAUA0AABAQAAAgEAAAEQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAAREREAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAADAAAAAAJDAAAAAAADAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAANAAAABA0AAAAACQ4AAAAAAA4AAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAADwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhISAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAAASEhIAAAAAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAKAAAAAAoAAAAACQsAAAAAAAsAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGGRJEOwI/LEcUPTMwChsGRktFNw9JDo4XA0AdPGkrNh9KLRwBICUpIQgMFRYiLhA4Pgs0MRhkdHV2L0EJfzkRI0MyQomKiwUEJignDSoeNYwHGkiTE5SVAAAAAAAAAAAASWxsZWdhbCBieXRlIHNlcXVlbmNlAERvbWFpbiBlcnJvcgBSZXN1bHQgbm90IHJlcHJlc2VudGFibGUATm90IGEgdHR5AFBlcm1pc3Npb24gZGVuaWVkAE9wZXJhdGlvbiBub3QgcGVybWl0dGVkAE5vIHN1Y2ggZmlsZSBvciBkaXJlY3RvcnkATm8gc3VjaCBwcm9jZXNzAEZpbGUgZXhpc3RzAFZhbHVlIHRvbyBsYXJnZSBmb3IgZGF0YSB0eXBlAE5vIHNwYWNlIGxlZnQgb24gZGV2aWNlAE91dCBvZiBtZW1vcnkAUmVzb3VyY2UgYnVzeQBJbnRlcnJ1cHRlZCBzeXN0ZW0gY2FsbABSZXNvdXJjZSB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZQBJbnZhbGlkIHNlZWsAQ3Jvc3MtZGV2aWNlIGxpbmsAUmVhZC1vbmx5IGZpbGUgc3lzdGVtAERpcmVjdG9yeSBub3QgZW1wdHkAQ29ubmVjdGlvbiByZXNldCBieSBwZWVyAE9wZXJhdGlvbiB0aW1lZCBvdXQAQ29ubmVjdGlvbiByZWZ1c2VkAEhvc3QgaXMgZG93bgBIb3N0IGlzIHVucmVhY2hhYmxlAEFkZHJlc3MgaW4gdXNlAEJyb2tlbiBwaXBlAEkvTyBlcnJvcgBObyBzdWNoIGRldmljZSBvciBhZGRyZXNzAEJsb2NrIGRldmljZSByZXF1aXJlZABObyBzdWNoIGRldmljZQBOb3QgYSBkaXJlY3RvcnkASXMgYSBkaXJlY3RvcnkAVGV4dCBmaWxlIGJ1c3kARXhlYyBmb3JtYXQgZXJyb3IASW52YWxpZCBhcmd1bWVudABBcmd1bWVudCBsaXN0IHRvbyBsb25nAFN5bWJvbGljIGxpbmsgbG9vcABGaWxlbmFtZSB0b28gbG9uZwBUb28gbWFueSBvcGVuIGZpbGVzIGluIHN5c3RlbQBObyBmaWxlIGRlc2NyaXB0b3JzIGF2YWlsYWJsZQBCYWQgZmlsZSBkZXNjcmlwdG9yAE5vIGNoaWxkIHByb2Nlc3MAQmFkIGFkZHJlc3MARmlsZSB0b28gbGFyZ2UAVG9vIG1hbnkgbGlua3MATm8gbG9ja3MgYXZhaWxhYmxlAFJlc291cmNlIGRlYWRsb2NrIHdvdWxkIG9jY3VyAFN0YXRlIG5vdCByZWNvdmVyYWJsZQBQcmV2aW91cyBvd25lciBkaWVkAE9wZXJhdGlvbiBjYW5jZWxlZABGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQATm8gbWVzc2FnZSBvZiBkZXNpcmVkIHR5cGUASWRlbnRpZmllciByZW1vdmVkAERldmljZSBub3QgYSBzdHJlYW0ATm8gZGF0YSBhdmFpbGFibGUARGV2aWNlIHRpbWVvdXQAT3V0IG9mIHN0cmVhbXMgcmVzb3VyY2VzAExpbmsgaGFzIGJlZW4gc2V2ZXJlZABQcm90b2NvbCBlcnJvcgBCYWQgbWVzc2FnZQBGaWxlIGRlc2NyaXB0b3IgaW4gYmFkIHN0YXRlAE5vdCBhIHNvY2tldABEZXN0aW5hdGlvbiBhZGRyZXNzIHJlcXVpcmVkAE1lc3NhZ2UgdG9vIGxhcmdlAFByb3RvY29sIHdyb25nIHR5cGUgZm9yIHNvY2tldABQcm90b2NvbCBub3QgYXZhaWxhYmxlAFByb3RvY29sIG5vdCBzdXBwb3J0ZWQAU29ja2V0IHR5cGUgbm90IHN1cHBvcnRlZABOb3Qgc3VwcG9ydGVkAFByb3RvY29sIGZhbWlseSBub3Qgc3VwcG9ydGVkAEFkZHJlc3MgZmFtaWx5IG5vdCBzdXBwb3J0ZWQgYnkgcHJvdG9jb2wAQWRkcmVzcyBub3QgYXZhaWxhYmxlAE5ldHdvcmsgaXMgZG93bgBOZXR3b3JrIHVucmVhY2hhYmxlAENvbm5lY3Rpb24gcmVzZXQgYnkgbmV0d29yawBDb25uZWN0aW9uIGFib3J0ZWQATm8gYnVmZmVyIHNwYWNlIGF2YWlsYWJsZQBTb2NrZXQgaXMgY29ubmVjdGVkAFNvY2tldCBub3QgY29ubmVjdGVkAENhbm5vdCBzZW5kIGFmdGVyIHNvY2tldCBzaHV0ZG93bgBPcGVyYXRpb24gYWxyZWFkeSBpbiBwcm9ncmVzcwBPcGVyYXRpb24gaW4gcHJvZ3Jlc3MAU3RhbGUgZmlsZSBoYW5kbGUAUmVtb3RlIEkvTyBlcnJvcgBRdW90YSBleGNlZWRlZABObyBtZWRpdW0gZm91bmQAV3JvbmcgbWVkaXVtIHR5cGUATm8gZXJyb3IgaW5mb3JtYXRpb24AAAAAAADgFgAAmRgAAGAQAAAAAAAA4BYAAEIZAABgEAAAAAAAAOAWAAAqGgAASA8AAAAAAAC4FgAANBsAAOAWAACfGgAAMAoAAAAAAADgFgAAaRsAAEgPAAAAAAAA4BYAAIobAABIDwAAAAAAALgWAAAPHAAA4BYAAHwcAABIDwAAAAAAAOAWAACVHAAASA8AAAAAAADgFgAAHh0AAEgPAAAAAAAA4BYAAHcdAABIDwAAAAAAAOAWAACQHQAASA8AAAAAAADgFgAAQh4AAEgPAAAAAAAA4BYAAIceAABgEAAAAAAAAOAWAACkHwAASA8AAAAAAAC4FgAAZyAAAOAWAADkHwAA8AoAAAAAAADgFgAAjyAAAGAQAAAAAAAAuBYAAMMiAADgFgAAAiIAABgLAAAAAAAA4BYAAOEiAABgEAAAAAAAAOAWAADQJAAAGAsAAAAAAADgFgAAkSUAAGAQAAAAAAAA4BYAAIAnAAAYCwAAAAAAAOAWAAA9KAAAYBAAAAAAAADgFgAAJCoAABgLAAAAAAAA4BYAAOkqAABgEAAAAAAAAOAWAADgLAAA8AoAAAAAAADgFgAAui0AAGAQAAAAAAAA4BYAANsvAADwCgAAAAAAAOAWAADTMAAAYBAAAAAAAADgFgAAMDMAAPAKAAAAAAAA4BYAACQ0AABgEAAAAAAAAOAWAAB5NgAA8AoAAAAAAADgFgAAizcAAGAQAAAAAAAA4BYAABw6AABgEAAAAAAAAOAWAACdOgAAYBAAAAAAAADgFgAAXjsAAPAKAAAAAAAA4BYAALU7AABgEAAAAAAAAOAWAADMPAAAGAsAAAAAAADgFgAATz0AAGAQAAAAAAAA4BYAAL4+AAAYCwAAAAAAAOAWAABBPwAAYBAAAAAAAADgFgAAsEAAABgLAAAAAAAA4BYAADNBAABgEAAAAAAAAOAWAACiQgAAGAsAAAAAAADgFgAAJUMAAGAQAAAAAAAA4BYAAJREAAAYCwAAAAAAAOAWAAAXRQAAYBAAAAAAAADgFgAAhkYAABgLAAAAAAAA4BYAAAlHAABgEAAAAAAAALgWAAB4SAAAiBcAAIBIAAAAAAAAIA0AAIgXAACJSAAAAQAAACANAAC4FgAAqkgAAIgXAAC6SAAAAAAAAEgNAACIFwAAy0gAAAEAAABIDQAAuBYAABhMAAC4FgAAN0wAALgWAABWTAAAuBYAAHVMAAC4FgAAlEwAALgWAACzTAAAuBYAANJMAAC4FgAA8UwAALgWAAAQTQAAuBYAAC9NAAC4FgAATk0AALgWAABtTQAAuBYAAIxNAACkFwAAn00AAAAAAAABAAAA8A0AAAAAAAC4FgAA4U0AAKQXAAAHTgAAAAAAAAEAAADwDQAAAAAAAKQXAABJTgAAAAAAAAEAAADwDQAAAAAAAKQXAACITgAAAAAAAAEAAADwDQAAAAAAAKQXAADHTgAAAAAAAAEAAADwDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgWAADNTwAA4BYAAC1QAAAADwAAAAAAAOAWAADaTwAAEA8AAAAAAAC4FgAA+08AAOAWAAAIUAAA8A4AAAAAAADgFgAAhlAAAOgOAAAAAAAA4BYAAJNQAADoDgAAAAAAAOAWAACjUAAA6A4AAAAAAADgFgAAtVAAADgPAAAAAAAA4BYAAMZQAAA4DwAAAAAAAOAWAADXUAAAAA8AAAAAAADgFgAA+VAAAHgPAAAAAAAA4BYAAB1RAAAADwAAAAAAAOAWAABCUQAAeA8AAAAAAADgFgAAjlEAAAAPAAAAAAAAbBcAALZRAABsFwAAuFEAAGwXAAC7UQAAbBcAAL1RAABsFwAAv1EAAGwXAADBUQAAbBcAAMNRAABsFwAAxVEAAGwXAADHUQAAbBcAAMlRAABsFwAAy1EAAGwXAADNUQAAbBcAAM9RAABsFwAA0VEAAOAWAADTUQAA8A4AAAAAAADgFgAARlIAAOgOAAAAAAAAuBYAAGJSAACkFwAAe1IAAAAAAAABAAAAWBAAAAAAAADgFgAA9FIAAIgQAAAAAAAA4BYAABdTAACYEAAAAAAAALgWAAAuUwAA4BYAAHBTAACIEAAAAAAAAOAWAACSUwAASA8AAAAAAAAAAAAAAAoAAAEAAAACAAAAAwAAAAEAAAAEAAAAAAAAABAKAAABAAAABQAAAAYAAAACAAAABwAAAAAAAAAgCgAACAAAAAkAAAABAAAAAAAAADgKAAAKAAAACwAAAAIAAAABAAAADAAAAA0AAAACAAAAAwAAAAMAAAAAAAAASAoAAAgAAAAOAAAAAQAAAAAAAABYCgAACAAAAA8AAAABAAAAAAAAAIAKAAAIAAAAEAAAAAEAAAAAAAAAcAoAAAgAAAARAAAAAQAAAAAAAACQCgAACAAAABIAAAABAAAAAAAAAKAKAAAIAAAAEwAAAAEAAAAAAAAAsAoAAAgAAAAUAAAAAQAAAAAAAADACgAACAAAABUAAAABAAAAAAAAANAKAAABAAAAFgAAABcAAAAEAAAAGAAAAAAAAADgCgAACAAAABkAAAABAAAAAAAAAPgKAAAFAAAAGgAAABsAAAAAAAAA8AoAAAEAAAAcAAAAHQAAAAAAAAAICwAAAQAAAB4AAAAfAAAABgAAACAAAAAAAAAAIAsAACEAAAAiAAAABwAAAAgAAAAAAAAAGAsAACMAAAAkAAAABwAAAAkAAAAAAAAAMAsAAAEAAAAlAAAAJgAAAAoAAAAnAAAAAAAAAEALAAAoAAAAKQAAAAcAAAALAAAAAAAAAFALAAABAAAAKgAAACsAAAAMAAAALAAAAAAAAABgCwAALQAAAC4AAAAHAAAADQAAAAAAAABwCwAAAQAAAC8AAAAwAAAADgAAADEAAAAAAAAAgAsAADIAAAAzAAAABwAAAA8AAAAAAAAAkAsAAAEAAAA0AAAANQAAABAAAAA2AAAAAAAAAKALAAARAAAANwAAADgAAAAAAAAAsAsAAAEAAAA5AAAAOgAAABIAAAA7AAAAAAAAAMALAAATAAAAPAAAAD0AAAAAAAAA0AsAAAEAAAA+AAAAPwAAABQAAABAAAAAAAAAAOALAAAVAAAAQQAAAEIAAAAAAAAA8AsAAAEAAABDAAAARAAAABYAAABFAAAAAAAAAAAMAAAXAAAARgAAAEcAAAAAAAAAEAwAAAEAAABIAAAASQAAABgAAABKAAAAAAAAACAMAAABAAAASwAAAEwAAAAZAAAATQAAAAAAAAAwDAAAAQAAAE4AAABPAAAAGgAAAFAAAAAAAAAAQAwAABsAAABRAAAAUgAAAAAAAABQDAAAAQAAAFMAAABUAAAAHAAAAFUAAAAAAAAAYAwAAFYAAABXAAAABwAAAB0AAAAAAAAAcAwAAAEAAABYAAAAWQAAAB4AAABaAAAAAAAAAIAMAABbAAAAXAAAAAcAAAAfAAAAAAAAAJAMAAABAAAAXQAAAF4AAAAgAAAAXwAAAAAAAACgDAAAYAAAAGEAAAAHAAAAIQAAAAAAAACwDAAAAQAAAGIAAABjAAAAIgAAAGQAAAAAAAAAwAwAAGUAAABmAAAABwAAACMAAAAAAAAA0AwAAAEAAABnAAAAaAAAACQAAABpAAAAAAAAAOAMAABqAAAAawAAAAcAAAAlAAAAAAAAAPAMAAABAAAAbAAAAG0AAAAmAAAAbgAAAAAAAAAADQAAbwAAAHAAAAAHAAAAJwAAAAAAAAAQDQAAAQAAAHEAAAByAAAAKAAAAHMAAAAoDQAAyA8AACgNAAAIEAAAEBAAACgNAABQDQAAyA8AAFANAAAgEAAAyA8AAFANAAAIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDgAAdAAAAHUAAAB2AAAAdwAAAAIAAAABAAAAAQAAAAEAAAAAAAAAGA8AAHQAAAB4AAAAdgAAAHcAAAACAAAAAgAAAAIAAAACAAAAAAAAACgPAAB5AAAAegAAAAQAAAAAAAAAOA8AAHsAAAB8AAAABQAAAAAAAABIDwAACAAAAH0AAAABAAAAAAAAAFgPAAB7AAAAfgAAAAUAAAAAAAAAaA8AAHsAAAB/AAAABQAAAAAAAAC4DwAAdAAAAIAAAAB2AAAAdwAAAAMAAAAAAAAAiA8AAHQAAACBAAAAdgAAAHcAAAAEAAAAAAAAADgQAAB0AAAAggAAAHYAAAB3AAAAAgAAAAMAAAADAAAAAwAAAAAAAABIEAAAgwAAAIQAAAAGAAAAAAAAAHgQAACFAAAAhgAAAAcAAAABAAAABQAAAAYAAAACAAAAAAAAAKAQAACFAAAAhwAAAAgAAAADAAAABQAAAAYAAAAEAAAA4BcAAAQYAAAAAAAAsBAAAIgAAACJAAAAAQAAAExBU1ppcABvcGVuAGdldFBvaW50AGdldENvdW50AER5bmFtaWNMQVNaaXAAYWRkRmllbGRGbG9hdGluZwBhZGRGaWVsZFNpZ25lZABhZGRGaWVsZFVuc2lnbmVkAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9wb2ludGVySVBONmxhc3ppcDdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRU5TXzE0ZGVmYXVsdF9kZWxldGVJUzNfRUVOU185YWxsb2NhdG9ySVMzX0VFRUUATlN0M19fMjE0ZGVmYXVsdF9kZWxldGVJTjZsYXN6aXA3c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRQBOU3QzX18yMjBfX3NoYXJlZF9wdHJfcG9pbnRlcklQTjZsYXN6aXAyaW82cmVhZGVyMTBiYXNpY19maWxlSU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRU5TXzE0ZGVmYXVsdF9kZWxldGVJUzdfRUVOU185YWxsb2NhdG9ySVM3X0VFRUUATlN0M19fMjE0ZGVmYXVsdF9kZWxldGVJTjZsYXN6aXAyaW82cmVhZGVyMTBiYXNpY19maWxlSU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFAExBU0YATjZsYXN6aXAxM2ludmFsaWRfbWFnaWNFAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUARmlsZSBtYWdpYyBpcyBub3QgdmFsaWQATlN0M19fMjEwX19mdW5jdGlvbjZfX2Z1bmNJWk42bGFzemlwMmlvNnJlYWRlcjEwYmFzaWNfZmlsZUlOUzJfN3N0cmVhbXMxM21lbW9yeV9zdHJlYW1FRTExX3ZhbGlkYXRvcnNFdkVVbFJOUzNfNmhlYWRlckVFX05TXzlhbGxvY2F0b3JJU0JfRUVGdlNBX0VFRQBOU3QzX18yMTBfX2Z1bmN0aW9uNl9fYmFzZUlGdlJONmxhc3ppcDJpbzZoZWFkZXJFRUVFAE42bGFzemlwMjFvbGRfc3R5bGVfY29tcHJlc3Npb25FAE42bGFzemlwMTRub3RfY29tcHJlc3NlZEUAVGhlIGZpbGUgc2VlbXMgdG8gaGF2ZSBvbGQgc3R5bGUgY29tcHJlc3Npb24gd2hpY2ggaXMgbm90IHN1cHBvcnRlZABUaGUgZmlsZSBkb2Vzbid0IHNlZW0gdG8gYmUgY29tcHJlc3NlZABaTjZsYXN6aXAyaW82cmVhZGVyMTBiYXNpY19maWxlSU5TXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUUxMV92YWxpZGF0b3JzRXZFVWxSTlMwXzZoZWFkZXJFRV8AbGFzemlwIGVuY29kZWQATjZsYXN6aXAxM25vX2xhc3ppcF92bHJFAE42bGFzemlwMjVsYXN6aXBfZm9ybWF0X3Vuc3VwcG9ydGVkRQBPbmx5IExBU3ppcCBQT0lOVFdJU0UgQ0hVTktFRCBkZWNvbXByZXNzb3IgaXMgc3VwcG9ydGVkAE5vIExBU3ppcCBWTFIgd2FzIGZvdW5kIGluIHRoZSBWTFJzIHNlY3Rpb24ATjZsYXN6aXAyMmNodW5rX3RhYmxlX3JlYWRfZXJyb3JFAENodW5rIHRhYmxlIG9mZnNldCA9PSAtMSBpcyBub3Qgc3VwcG9ydGVkIGF0IHRoaXMgdGltZQBONmxhc3ppcDEzbm90X3N1cHBvcnRlZEUATjZsYXN6aXAyNnVua25vd25fY2h1bmtfdGFibGVfZm9ybWF0RQBjaHVua19zaXplID09IHVpbnQubWF4IGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhpcyB0aW1lLgBUaGVyZSB3YXMgYSBwcm9ibGVtIHJlYWRpbmcgdGhlIGNodW5rIHRhYmxlAFRoZSBjaHVuayB0YWJsZSB2ZXJzaW9uIG51bWJlciBpcyB1bmtub3duAE42bGFzemlwMTFlbmRfb2ZfZmlsZUUAUmVhY2hlZCBFbmQgb2YgZmlsZQBJbnZhbGlkIG51bWJlciBvZiBzeW1ib2xzAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9wb2ludGVySVBONmxhc3ppcDhkZWNvZGVyczEwYXJpdGhtZXRpY0lOUzFfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlMxXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOU18xNGRlZmF1bHRfZGVsZXRlSVM5X0VFTlNfOWFsbG9jYXRvcklTOV9FRUVFAE5TdDNfXzIxNGRlZmF1bHRfZGVsZXRlSU42bGFzemlwOGRlY29kZXJzMTBhcml0aG1ldGljSU5TMV8yaW8xOF9faWZzdHJlYW1fd3JhcHBlcklOUzFfN3N0cmVhbXMxM21lbW9yeV9zdHJlYW1FRUVFRUVFAE42bGFzemlwMTl1bmtub3duX3NjaGVtYV90eXBlRQBUaGUgTEFaIHNjaGVtYSBpcyBub3QgcmVjb2duaXplZABONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2ZpZWxkX2RlY29tcHJlc3NvcklOU184ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlNfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlNfN3N0cmVhbXMxM21lbW9yeV9zdHJlYW1FRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyMGR5bmFtaWNfZGVjb21wcmVzc29yRQBOU3QzX18yMjBfX3NoYXJlZF9wdHJfcG9pbnRlcklQTjZsYXN6aXA3Zm9ybWF0czI2ZHluYW1pY19maWVsZF9kZWNvbXByZXNzb3JJTlMxXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOUzFfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlMxXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVFRU5TXzE0ZGVmYXVsdF9kZWxldGVJU0NfRUVOU185YWxsb2NhdG9ySVNDX0VFRUUATlN0M19fMjE0ZGVmYXVsdF9kZWxldGVJTjZsYXN6aXA3Zm9ybWF0czI2ZHluYW1pY19maWVsZF9kZWNvbXByZXNzb3JJTlMxXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOUzFfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlMxXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOU18yaW8xOF9faWZzdHJlYW1fd3JhcHBlcklOU183c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMwXzVmaWVsZElOUzBfM2xhczdwb2ludDEwRU5TMF8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSVNDX0VFRUVFRQBONmxhc3ppcDdmb3JtYXRzMTBiYXNlX2ZpZWxkRQBOU3QzX18yMjBfX3NoYXJlZF9wdHJfcG9pbnRlcklQTjZsYXN6aXA3Zm9ybWF0czI2ZHluYW1pY19kZWNvbXByZXNzb3JfZmllbGRJTlMxXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOUzFfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlMxXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOUzJfNWZpZWxkSU5TMl8zbGFzN3BvaW50MTBFTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJU0VfRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTSV9FRU5TXzlhbGxvY2F0b3JJU0lfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSU5TMV8yaW8xOF9faWZzdHJlYW1fd3JhcHBlcklOUzFfN3N0cmVhbXMxM21lbW9yeV9zdHJlYW1FRUVFRU5TMl81ZmllbGRJTlMyXzNsYXM3cG9pbnQxMEVOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElTRV9FRUVFRUVFRQBONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOU184ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlNfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlNfN3N0cmVhbXMxM21lbW9yeV9zdHJlYW1FRUVFRU5TMF81ZmllbGRJTlMwXzNsYXM3Z3BzdGltZUVOUzBfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElTQ19FRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlMxXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMyXzVmaWVsZElOUzJfM2xhczdncHN0aW1lRU5TMl8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSVNFX0VFRUVFRU5TXzE0ZGVmYXVsdF9kZWxldGVJU0lfRUVOU185YWxsb2NhdG9ySVNJX0VFRUUATlN0M19fMjE0ZGVmYXVsdF9kZWxldGVJTjZsYXN6aXA3Zm9ybWF0czI2ZHluYW1pY19kZWNvbXByZXNzb3JfZmllbGRJTlMxXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOUzFfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlMxXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOUzJfNWZpZWxkSU5TMl8zbGFzN2dwc3RpbWVFTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJU0VfRUVFRUVFRUUATjZsYXN6aXA3Zm9ybWF0czI2ZHluYW1pY19kZWNvbXByZXNzb3JfZmllbGRJTlNfOGRlY29kZXJzMTBhcml0aG1ldGljSU5TXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOUzBfNWZpZWxkSU5TMF8zbGFzM3JnYkVOUzBfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElTQ19FRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlMxXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMyXzVmaWVsZElOUzJfM2xhczNyZ2JFTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJU0VfRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTSV9FRU5TXzlhbGxvY2F0b3JJU0lfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSU5TMV8yaW8xOF9faWZzdHJlYW1fd3JhcHBlcklOUzFfN3N0cmVhbXMxM21lbW9yeV9zdHJlYW1FRUVFRU5TMl81ZmllbGRJTlMyXzNsYXMzcmdiRU5TMl8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSVNFX0VFRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOU18yaW8xOF9faWZzdHJlYW1fd3JhcHBlcklOU183c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMwXzVmaWVsZElOUzBfM2xhczEwZXh0cmFieXRlc0VOUzBfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElTQ19FRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlMxXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMyXzVmaWVsZElOUzJfM2xhczEwZXh0cmFieXRlc0VOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElTRV9FRUVFRUVOU18xNGRlZmF1bHRfZGVsZXRlSVNJX0VFTlNfOWFsbG9jYXRvcklTSV9FRUVFAE5TdDNfXzIxNGRlZmF1bHRfZGVsZXRlSU42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlMxXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMyXzVmaWVsZElOUzJfM2xhczEwZXh0cmFieXRlc0VOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElTRV9FRUVFRUVFRQBONmxhc3ppcDdmb3JtYXRzMjFkeW5hbWljX2RlY29tcHJlc3NvcjFJTlNfOGRlY29kZXJzMTBhcml0aG1ldGljSU5TXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOUzBfMTlyZWNvcmRfZGVjb21wcmVzc29ySUpOUzBfNWZpZWxkSU5TMF8zbGFzN3BvaW50MTBFTlMwXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJU0RfRUVFRUVFRUVFAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9wb2ludGVySVBONmxhc3ppcDdmb3JtYXRzMjFkeW5hbWljX2RlY29tcHJlc3NvcjFJTlMxXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOUzFfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlMxXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOUzJfMTlyZWNvcmRfZGVjb21wcmVzc29ySUpOUzJfNWZpZWxkSU5TMl8zbGFzN3BvaW50MTBFTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJU0ZfRUVFRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTS19FRU5TXzlhbGxvY2F0b3JJU0tfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjFkeW5hbWljX2RlY29tcHJlc3NvcjFJTlMxXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOUzFfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlMxXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOUzJfMTlyZWNvcmRfZGVjb21wcmVzc29ySUpOUzJfNWZpZWxkSU5TMl8zbGFzN3BvaW50MTBFTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJU0ZfRUVFRUVFRUVFRUUATjZsYXN6aXA3Zm9ybWF0czIxZHluYW1pY19kZWNvbXByZXNzb3IxSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOU18yaW8xOF9faWZzdHJlYW1fd3JhcHBlcklOU183c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMwXzE5cmVjb3JkX2RlY29tcHJlc3NvcklKTlMwXzVmaWVsZElOUzBfM2xhczdwb2ludDEwRU5TMF8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSVNEX0VFRUVOU0JfSU5TQ183Z3BzdGltZUVOU0VfSVNIX0VFRUVFRUVFRQBOU3QzX18yMjBfX3NoYXJlZF9wdHJfcG9pbnRlcklQTjZsYXN6aXA3Zm9ybWF0czIxZHluYW1pY19kZWNvbXByZXNzb3IxSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlMxXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMyXzE5cmVjb3JkX2RlY29tcHJlc3NvcklKTlMyXzVmaWVsZElOUzJfM2xhczdwb2ludDEwRU5TMl8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSVNGX0VFRUVOU0RfSU5TRV83Z3BzdGltZUVOU0dfSVNKX0VFRUVFRUVFRU5TXzE0ZGVmYXVsdF9kZWxldGVJU05fRUVOU185YWxsb2NhdG9ySVNOX0VFRUUATlN0M19fMjE0ZGVmYXVsdF9kZWxldGVJTjZsYXN6aXA3Zm9ybWF0czIxZHluYW1pY19kZWNvbXByZXNzb3IxSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlMxXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMyXzE5cmVjb3JkX2RlY29tcHJlc3NvcklKTlMyXzVmaWVsZElOUzJfM2xhczdwb2ludDEwRU5TMl8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSVNGX0VFRUVOU0RfSU5TRV83Z3BzdGltZUVOU0dfSVNKX0VFRUVFRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyMWR5bmFtaWNfZGVjb21wcmVzc29yMUlOU184ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlNfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlNfN3N0cmVhbXMxM21lbW9yeV9zdHJlYW1FRUVFRU5TMF8xOXJlY29yZF9kZWNvbXByZXNzb3JJSk5TMF81ZmllbGRJTlMwXzNsYXM3cG9pbnQxMEVOUzBfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElTRF9FRUVFTlNCX0lOU0NfM3JnYkVOU0VfSVNIX0VFRUVFRUVFRQBOU3QzX18yMjBfX3NoYXJlZF9wdHJfcG9pbnRlcklQTjZsYXN6aXA3Zm9ybWF0czIxZHluYW1pY19kZWNvbXByZXNzb3IxSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlMxXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMyXzE5cmVjb3JkX2RlY29tcHJlc3NvcklKTlMyXzVmaWVsZElOUzJfM2xhczdwb2ludDEwRU5TMl8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSVNGX0VFRUVOU0RfSU5TRV8zcmdiRU5TR19JU0pfRUVFRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTTl9FRU5TXzlhbGxvY2F0b3JJU05fRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjFkeW5hbWljX2RlY29tcHJlc3NvcjFJTlMxXzhkZWNvZGVyczEwYXJpdGhtZXRpY0lOUzFfMmlvMThfX2lmc3RyZWFtX3dyYXBwZXJJTlMxXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOUzJfMTlyZWNvcmRfZGVjb21wcmVzc29ySUpOUzJfNWZpZWxkSU5TMl8zbGFzN3BvaW50MTBFTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJU0ZfRUVFRU5TRF9JTlNFXzNyZ2JFTlNHX0lTSl9FRUVFRUVFRUVFRQBONmxhc3ppcDdmb3JtYXRzMjFkeW5hbWljX2RlY29tcHJlc3NvcjFJTlNfOGRlY29kZXJzMTBhcml0aG1ldGljSU5TXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TXzdzdHJlYW1zMTNtZW1vcnlfc3RyZWFtRUVFRUVOUzBfMTlyZWNvcmRfZGVjb21wcmVzc29ySUpOUzBfNWZpZWxkSU5TMF8zbGFzN3BvaW50MTBFTlMwXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJU0RfRUVFRU5TQl9JTlNDXzdncHN0aW1lRU5TRV9JU0hfRUVFRU5TQl9JTlNDXzNyZ2JFTlNFX0lTS19FRUVFRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyMWR5bmFtaWNfZGVjb21wcmVzc29yMUlOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSU5TMV8yaW8xOF9faWZzdHJlYW1fd3JhcHBlcklOUzFfN3N0cmVhbXMxM21lbW9yeV9zdHJlYW1FRUVFRU5TMl8xOXJlY29yZF9kZWNvbXByZXNzb3JJSk5TMl81ZmllbGRJTlMyXzNsYXM3cG9pbnQxMEVOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElTRl9FRUVFTlNEX0lOU0VfN2dwc3RpbWVFTlNHX0lTSl9FRUVFTlNEX0lOU0VfM3JnYkVOU0dfSVNNX0VFRUVFRUVFRU5TXzE0ZGVmYXVsdF9kZWxldGVJU1FfRUVOU185YWxsb2NhdG9ySVNRX0VFRUUATlN0M19fMjE0ZGVmYXVsdF9kZWxldGVJTjZsYXN6aXA3Zm9ybWF0czIxZHluYW1pY19kZWNvbXByZXNzb3IxSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJTlMxXzJpbzE4X19pZnN0cmVhbV93cmFwcGVySU5TMV83c3RyZWFtczEzbWVtb3J5X3N0cmVhbUVFRUVFTlMyXzE5cmVjb3JkX2RlY29tcHJlc3NvcklKTlMyXzVmaWVsZElOUzJfM2xhczdwb2ludDEwRU5TMl8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSVNGX0VFRUVOU0RfSU5TRV83Z3BzdGltZUVOU0dfSVNKX0VFRUVOU0RfSU5TRV8zcmdiRU5TR19JU01fRUVFRUVFRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUDEwYnVmX3N0cmVhbU5TXzE0ZGVmYXVsdF9kZWxldGVJUzFfRUVOU185YWxsb2NhdG9ySVMxX0VFRUUATlN0M19fMjE0ZGVmYXVsdF9kZWxldGVJMTBidWZfc3RyZWFtRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwOGRlY29kZXJzMTBhcml0aG1ldGljSTEwYnVmX3N0cmVhbUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTNV9FRU5TXzlhbGxvY2F0b3JJUzVfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDhkZWNvZGVyczEwYXJpdGhtZXRpY0kxMGJ1Zl9zdHJlYW1FRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZmllbGRfZGVjb21wcmVzc29ySU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0kxMGJ1Zl9zdHJlYW1FRUVFAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9wb2ludGVySVBONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2ZpZWxkX2RlY29tcHJlc3NvcklOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSTEwYnVmX3N0cmVhbUVFRUVOU18xNGRlZmF1bHRfZGVsZXRlSVM4X0VFTlNfOWFsbG9jYXRvcklTOF9FRUVFAE5TdDNfXzIxNGRlZmF1bHRfZGVsZXRlSU42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZmllbGRfZGVjb21wcmVzc29ySU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJMTBidWZfc3RyZWFtRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0kxMGJ1Zl9zdHJlYW1FRU5TMF81ZmllbGRJaU5TMF8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSWlFRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJMTBidWZfc3RyZWFtRUVOUzJfNWZpZWxkSWlOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElpRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTQ19FRU5TXzlhbGxvY2F0b3JJU0NfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSTEwYnVmX3N0cmVhbUVFTlMyXzVmaWVsZElpTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJaUVFRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0kxMGJ1Zl9zdHJlYW1FRU5TMF81ZmllbGRJak5TMF8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSWpFRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJMTBidWZfc3RyZWFtRUVOUzJfNWZpZWxkSWpOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElqRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTQ19FRU5TXzlhbGxvY2F0b3JJU0NfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSTEwYnVmX3N0cmVhbUVFTlMyXzVmaWVsZElqTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJakVFRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0kxMGJ1Zl9zdHJlYW1FRU5TMF81ZmllbGRJYU5TMF8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSWFFRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJMTBidWZfc3RyZWFtRUVOUzJfNWZpZWxkSWFOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElhRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTQ19FRU5TXzlhbGxvY2F0b3JJU0NfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSTEwYnVmX3N0cmVhbUVFTlMyXzVmaWVsZElhTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJYUVFRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0kxMGJ1Zl9zdHJlYW1FRU5TMF81ZmllbGRJc05TMF8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSXNFRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJMTBidWZfc3RyZWFtRUVOUzJfNWZpZWxkSXNOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZElzRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTQ19FRU5TXzlhbGxvY2F0b3JJU0NfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSTEwYnVmX3N0cmVhbUVFTlMyXzVmaWVsZElzTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJc0VFRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0kxMGJ1Zl9zdHJlYW1FRU5TMF81ZmllbGRJaE5TMF8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSWhFRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJMTBidWZfc3RyZWFtRUVOUzJfNWZpZWxkSWhOUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZEloRUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTQ19FRU5TXzlhbGxvY2F0b3JJU0NfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSTEwYnVmX3N0cmVhbUVFTlMyXzVmaWVsZEloTlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJaEVFRUVFRUVFAE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TXzhkZWNvZGVyczEwYXJpdGhtZXRpY0kxMGJ1Zl9zdHJlYW1FRU5TMF81ZmllbGRJdE5TMF8yMHN0YW5kYXJkX2RpZmZfbWV0aG9kSXRFRUVFRUUATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUE42bGFzemlwN2Zvcm1hdHMyNmR5bmFtaWNfZGVjb21wcmVzc29yX2ZpZWxkSU5TMV84ZGVjb2RlcnMxMGFyaXRobWV0aWNJMTBidWZfc3RyZWFtRUVOUzJfNWZpZWxkSXROUzJfMjBzdGFuZGFyZF9kaWZmX21ldGhvZEl0RUVFRUVFTlNfMTRkZWZhdWx0X2RlbGV0ZUlTQ19FRU5TXzlhbGxvY2F0b3JJU0NfRUVFRQBOU3QzX18yMTRkZWZhdWx0X2RlbGV0ZUlONmxhc3ppcDdmb3JtYXRzMjZkeW5hbWljX2RlY29tcHJlc3Nvcl9maWVsZElOUzFfOGRlY29kZXJzMTBhcml0aG1ldGljSTEwYnVmX3N0cmVhbUVFTlMyXzVmaWVsZEl0TlMyXzIwc3RhbmRhcmRfZGlmZl9tZXRob2RJdEVFRUVFRUVFADZMQVNaaXAAUDZMQVNaaXAAUEs2TEFTWmlwAGlpAHYAdmkAdmlpaWkAdmlpaQBpaWkAMTNEeW5hbWljTEFTWmlwAFAxM0R5bmFtaWNMQVNaaXAAUEsxM0R5bmFtaWNMQVNaaXAAdm9pZABib29sAGNoYXIAc2lnbmVkIGNoYXIAdW5zaWduZWQgY2hhcgBzaG9ydAB1bnNpZ25lZCBzaG9ydABpbnQAdW5zaWduZWQgaW50AGxvbmcAdW5zaWduZWQgbG9uZwBmbG9hdABkb3VibGUAc3RkOjpzdHJpbmcAc3RkOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhcj4Ac3RkOjp3c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAGVtc2NyaXB0ZW46OnZhbABlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmcgZG91YmxlPgBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0llRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWZFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ltRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbEVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lpRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJdEVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0loRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJYUVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQBOMTBlbXNjcmlwdGVuM3ZhbEUATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUATlN0M19fMjIxX19iYXNpY19zdHJpbmdfY29tbW9uSUxiMUVFRQBOU3QzX18yMTJiYXNpY19zdHJpbmdJRHNOU18xMWNoYXJfdHJhaXRzSURzRUVOU185YWxsb2NhdG9ySURzRUVFRQBOU3QzX18yMTJiYXNpY19zdHJpbmdJd05TXzExY2hhcl90cmFpdHNJd0VFTlNfOWFsbG9jYXRvckl3RUVFRQBOU3QzX18yMTJiYXNpY19zdHJpbmdJaE5TXzExY2hhcl90cmFpdHNJaEVFTlNfOWFsbG9jYXRvckloRUVFRQBOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQAtKyAgIDBYMHgAKG51bGwpAC0wWCswWCAwWC0weCsweCAweABpbmYASU5GAG5hbgBOQU4ALgB0ZXJtaW5hdGluZyB3aXRoICVzIGV4Y2VwdGlvbiBvZiB0eXBlICVzOiAlcwB0ZXJtaW5hdGluZyB3aXRoICVzIGV4Y2VwdGlvbiBvZiB0eXBlICVzAHRlcm1pbmF0aW5nIHdpdGggJXMgZm9yZWlnbiBleGNlcHRpb24AdGVybWluYXRpbmcAdW5jYXVnaHQAU3Q5ZXhjZXB0aW9uAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAFN0OXR5cGVfaW5mbwBOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAHRlcm1pbmF0ZV9oYW5kbGVyIHVuZXhwZWN0ZWRseSByZXR1cm5lZABzdGQ6OmJhZF9hbGxvYwBTdDliYWRfYWxsb2MAU3QxMWxvZ2ljX2Vycm9yAFN0MTNydW50aW1lX2Vycm9yAFN0MTJsZW5ndGhfZXJyb3IAU3QxMm91dF9vZl9yYW5nZQBOMTBfX2N4eGFiaXYxMTdfX3BiYXNlX3R5cGVfaW5mb0UATjEwX19jeHhhYml2MTE5X19wb2ludGVyX3R5cGVfaW5mb0UATjEwX19jeHhhYml2MTIwX19mdW5jdGlvbl90eXBlX2luZm9FAE4xMF9fY3h4YWJpdjEyOV9fcG9pbnRlcl90b19tZW1iZXJfdHlwZV9pbmZvRQBQdXJlIHZpcnR1YWwgZnVuY3Rpb24gY2FsbGVkIQBOMTBfX2N4eGFiaXYxMjNfX2Z1bmRhbWVudGFsX3R5cGVfaW5mb0UAdgBEbgBiAGMAaABhAHMAdABpAGoAbABtAGYAZABOMTBfX2N4eGFiaXYxMjFfX3ZtaV9jbGFzc190eXBlX2luZm9FAF9fY3hhX2d1YXJkX2FjcXVpcmUgZGV0ZWN0ZWQgcmVjdXJzaXZlIGluaXRpYWxpemF0aW9uAHN0ZDo6YmFkX2Z1bmN0aW9uX2NhbGwATlN0M19fMjE3YmFkX2Z1bmN0aW9uX2NhbGxFAE5TdDNfXzIxNF9fc2hhcmVkX2NvdW50RQBOU3QzX18yMTlfX3NoYXJlZF93ZWFrX2NvdW50RQBtdXRleCBsb2NrIGZhaWxlZABiYXNpY19zdHJpbmcAdW5zcGVjaWZpZWQgZ2VuZXJpY19jYXRlZ29yeSBlcnJvcgBVbmtub3duIGVycm9yICVkAGdlbmVyaWMATlN0M19fMjI0X19nZW5lcmljX2Vycm9yX2NhdGVnb3J5RQBOU3QzX18yMTJfX2RvX21lc3NhZ2VFAE5TdDNfXzIxNGVycm9yX2NhdGVnb3J5RQB1bnNwZWNpZmllZCBzeXN0ZW1fY2F0ZWdvcnkgZXJyb3IAc3lzdGVtAE5TdDNfXzIyM19fc3lzdGVtX2Vycm9yX2NhdGVnb3J5RQBOU3QzX18yMTJzeXN0ZW1fZXJyb3JFADogAHZlY3Rvcg==";var Tt=22368;function ut(b){return E0(b)}var Ze={};function ht(b){if(b){var U=Ze[b];U.refcount++}}function vt(b){if(!b||Ze[b])return b;for(var U in Ze)for(var G=+U,m=Ze[G].adjusted,re=m.length,n=0;n<re;n++)if(m[n]===b)return G;return b}function $t(b){var U=Ze[b];return U&&!U.caught&&(U.caught=!0,ao.uncaught_exceptions--),U&&(U.rethrown=!1),ht(vt(b)),b}function Q(b,U,G){throw Ze[b]={ptr:b,adjusted:[b],type:U,destructor:G,refcount:0,caught:!1,rethrown:!1},"uncaught_exception"in ao?ao.uncaught_exceptions++:ao.uncaught_exceptions=1,b}function Le(){return ao.uncaught_exceptions}function ye(){}function xe(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+b)}}function Be(){for(var b=new Array(256),U=0;U<256;++U)b[U]=String.fromCharCode(U);at=b}var at=void 0;function dt(b){for(var U="",G=b;Ve[G];)U+=at[Ve[G++]];return U}var Xt={},tn={},bt={},oi=48,Jn=57;function ls(b){if(b===void 0)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var U=b.charCodeAt(0);return U>=oi&&U<=Jn?"_"+b:b}function ai(b,U){return b=ls(b),new Function("body","return function "+b+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(U)}function Sr(b,U){var G=ai(U,function(m){this.name=U,this.message=m;var re=new Error(m).stack;re!==void 0&&(this.stack=this.toString()+`
`+re.replace(/^Error(:[^\n]*)?\n/,""))});return G.prototype=Object.create(b.prototype),G.prototype.constructor=G,G.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},G}var Ni=void 0;function Ft(b){throw new Ni(b)}var Er=void 0;function wr(b){throw new Er(b)}function gi(b,U,G){b.forEach(function(Ae){bt[Ae]=U});function m(Ae){var Pe=G(Ae);Pe.length!==b.length&&wr("Mismatched type converter count");for(var be=0;be<b.length;++be)jn(b[be],Pe[be])}var re=new Array(U.length),n=[],D=0;U.forEach(function(Ae,Pe){tn.hasOwnProperty(Ae)?re[Pe]=tn[Ae]:(n.push(Ae),Xt.hasOwnProperty(Ae)||(Xt[Ae]=[]),Xt[Ae].push(function(){re[Pe]=tn[Ae],++D,D===n.length&&m(re)}))}),n.length===0&&m(re)}function jn(b,U,G){if(G=G||{},!("argPackAdvance"in U))throw new TypeError("registerType registeredInstance requires argPackAdvance");var m=U.name;if(b||Ft('type "'+m+'" must have a positive integer typeid pointer'),tn.hasOwnProperty(b)){if(G.ignoreDuplicateRegistrations)return;Ft("Cannot register type '"+m+"' twice")}if(tn[b]=U,delete bt[b],Xt.hasOwnProperty(b)){var re=Xt[b];delete Xt[b],re.forEach(function(n){n()})}}function Yo(b,U,G,m,re){var n=xe(G);U=dt(U),jn(b,{name:U,fromWireType:function(D){return!!D},toWireType:function(D,Ae){return Ae?m:re},argPackAdvance:8,readValueFromPointer:function(D){var Ae;if(G===1)Ae=$e;else if(G===2)Ae=mt;else if(G===4)Ae=pe;else throw new TypeError("Unknown boolean type size: "+U);return this.fromWireType(Ae[D>>n])},destructorFunction:null})}function _0(b){if(!(this instanceof Vt)||!(b instanceof Vt))return!1;for(var U=this.$$.ptrType.registeredClass,G=this.$$.ptr,m=b.$$.ptrType.registeredClass,re=b.$$.ptr;U.baseClass;)G=U.upcast(G),U=U.baseClass;for(;m.baseClass;)re=m.upcast(re),m=m.baseClass;return U===m&&G===re}function v0(b){return{count:b.count,deleteScheduled:b.deleteScheduled,preservePointerOnDelete:b.preservePointerOnDelete,ptr:b.ptr,ptrType:b.ptrType,smartPtr:b.smartPtr,smartPtrType:b.smartPtrType}}function io(b){function U(G){return G.$$.ptrType.registeredClass.name}Ft(U(b)+" instance already deleted")}var B=!1;function K(b){}function ce(b){b.smartPtr?b.smartPtrType.rawDestructor(b.smartPtr):b.ptrType.registeredClass.rawDestructor(b.ptr)}function ue(b){b.count.value-=1;var U=b.count.value===0;U&&ce(b)}function te(b){return typeof FinalizationGroup>"u"?(te=function(U){return U},b):(B=new FinalizationGroup(function(U){for(var G=U.next();!G.done;G=U.next()){var m=G.value;m.ptr?ue(m):console.warn("object already deleted: "+m.ptr)}}),te=function(U){return B.register(U,U.$$,U.$$),U},K=function(U){B.unregister(U.$$)},te(b))}function Ie(){if(this.$$.ptr||io(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var b=te(Object.create(Object.getPrototypeOf(this),{$$:{value:v0(this.$$)}}));return b.$$.count.value+=1,b.$$.deleteScheduled=!1,b}function He(){this.$$.ptr||io(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Ft("Object already scheduled for deletion"),K(this),ue(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function qe(){return!this.$$.ptr}var je=void 0,it=[];function lt(){for(;it.length;){var b=it.pop();b.$$.deleteScheduled=!1,b.delete()}}function ot(){return this.$$.ptr||io(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Ft("Object already scheduled for deletion"),it.push(this),it.length===1&&je&&je(lt),this.$$.deleteScheduled=!0,this}function It(){Vt.prototype.isAliasOf=_0,Vt.prototype.clone=Ie,Vt.prototype.delete=He,Vt.prototype.isDeleted=qe,Vt.prototype.deleteLater=ot}function Vt(){}var qt={};function En(b,U,G){if(b[U].overloadTable===void 0){var m=b[U];b[U]=function(){return b[U].overloadTable.hasOwnProperty(arguments.length)||Ft("Function '"+G+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+b[U].overloadTable+")!"),b[U].overloadTable[arguments.length].apply(this,arguments)},b[U].overloadTable=[],b[U].overloadTable[m.argCount]=m}}function Dt(b,U,G){o.hasOwnProperty(b)?((G===void 0||o[b].overloadTable!==void 0&&o[b].overloadTable[G]!==void 0)&&Ft("Cannot register public name '"+b+"' twice"),En(o,b,b),o.hasOwnProperty(G)&&Ft("Cannot register multiple overloads of a function with the same number of arguments ("+G+")!"),o[b].overloadTable[G]=U):(o[b]=U,G!==void 0&&(o[b].numArguments=G))}function Ke(b,U,G,m,re,n,D,Ae){this.name=b,this.constructor=U,this.instancePrototype=G,this.rawDestructor=m,this.baseClass=re,this.getActualType=n,this.upcast=D,this.downcast=Ae,this.pureVirtualFunctions=[]}function fn(b,U,G){for(;U!==G;)U.upcast||Ft("Expected null or instance of "+G.name+", got an instance of "+U.name),b=U.upcast(b),U=U.baseClass;return b}function Bt(b,U){if(U===null)return this.isReference&&Ft("null is not a valid "+this.name),0;U.$$||Ft('Cannot pass "'+Tr(U)+'" as a '+this.name),U.$$.ptr||Ft("Cannot pass deleted object as a pointer of type "+this.name);var G=U.$$.ptrType.registeredClass,m=fn(U.$$.ptr,G,this.registeredClass);return m}function Vn(b,U){var G;if(U===null)return this.isReference&&Ft("null is not a valid "+this.name),this.isSmartPointer?(G=this.rawConstructor(),b!==null&&b.push(this.rawDestructor,G),G):0;U.$$||Ft('Cannot pass "'+Tr(U)+'" as a '+this.name),U.$$.ptr||Ft("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&U.$$.ptrType.isConst&&Ft("Cannot convert argument of type "+(U.$$.smartPtrType?U.$$.smartPtrType.name:U.$$.ptrType.name)+" to parameter type "+this.name);var m=U.$$.ptrType.registeredClass;if(G=fn(U.$$.ptr,m,this.registeredClass),this.isSmartPointer)switch(U.$$.smartPtr===void 0&&Ft("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:U.$$.smartPtrType===this?G=U.$$.smartPtr:Ft("Cannot convert argument of type "+(U.$$.smartPtrType?U.$$.smartPtrType.name:U.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:G=U.$$.smartPtr;break;case 2:if(U.$$.smartPtrType===this)G=U.$$.smartPtr;else{var re=U.clone();G=this.rawShare(G,S0(function(){re.delete()})),b!==null&&b.push(this.rawDestructor,G)}break;default:Ft("Unsupporting sharing policy")}return G}function er(b,U){if(U===null)return this.isReference&&Ft("null is not a valid "+this.name),0;U.$$||Ft('Cannot pass "'+Tr(U)+'" as a '+this.name),U.$$.ptr||Ft("Cannot pass deleted object as a pointer of type "+this.name),U.$$.ptrType.isConst&&Ft("Cannot convert argument of type "+U.$$.ptrType.name+" to parameter type "+this.name);var G=U.$$.ptrType.registeredClass,m=fn(U.$$.ptr,G,this.registeredClass);return m}function gn(b){return this.fromWireType(Re[b>>2])}function ro(b){return this.rawGetPointee&&(b=this.rawGetPointee(b)),b}function ln(b){this.rawDestructor&&this.rawDestructor(b)}function _i(b){b!==null&&b.delete()}function cs(b,U,G){if(U===G)return b;if(G.baseClass===void 0)return null;var m=cs(b,U,G.baseClass);return m===null?null:G.downcast(m)}function Ln(){return Object.keys(oo).length}function so(){var b=[];for(var U in oo)oo.hasOwnProperty(U)&&b.push(oo[U]);return b}function y0(b){je=b,it.length&&je&&je(lt)}function Jo(){o.getInheritedInstanceCount=Ln,o.getLiveInheritedInstances=so,o.flushPendingDeletes=lt,o.setDelayFunction=y0}var oo={};function $p(b,U){for(U===void 0&&Ft("ptr should not be undefined");b.baseClass;)U=b.upcast(U),b=b.baseClass;return U}function qp(b,U){return U=$p(b,U),oo[U]}function jo(b,U){(!U.ptrType||!U.ptr)&&wr("makeClassHandle requires ptr and ptrType");var G=!!U.smartPtrType,m=!!U.smartPtr;return G!==m&&wr("Both smartPtrType and smartPtr must be specified"),U.count={value:1},te(Object.create(b,{$$:{value:U}}))}function Qp(b){var U=this.getPointee(b);if(!U)return this.destructor(b),null;var G=qp(this.registeredClass,U);if(G!==void 0){if(G.$$.count.value===0)return G.$$.ptr=U,G.$$.smartPtr=b,G.clone();var m=G.clone();return this.destructor(b),m}function re(){return this.isSmartPointer?jo(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:U,smartPtrType:this,smartPtr:b}):jo(this.registeredClass.instancePrototype,{ptrType:this,ptr:b})}var n=this.registeredClass.getActualType(U),D=qt[n];if(!D)return re.call(this);var Ae;this.isConst?Ae=D.constPointerType:Ae=D.pointerType;var Pe=cs(U,this.registeredClass,Ae.registeredClass);return Pe===null?re.call(this):this.isSmartPointer?jo(Ae.registeredClass.instancePrototype,{ptrType:Ae,ptr:Pe,smartPtrType:this,smartPtr:b}):jo(Ae.registeredClass.instancePrototype,{ptrType:Ae,ptr:Pe})}function Kp(){Li.prototype.getPointee=ro,Li.prototype.destructor=ln,Li.prototype.argPackAdvance=8,Li.prototype.readValueFromPointer=gn,Li.prototype.deleteObject=_i,Li.prototype.fromWireType=Qp}function Li(b,U,G,m,re,n,D,Ae,Pe,be,ie){this.name=b,this.registeredClass=U,this.isReference=G,this.isConst=m,this.isSmartPointer=re,this.pointeeType=n,this.sharingPolicy=D,this.rawGetPointee=Ae,this.rawConstructor=Pe,this.rawShare=be,this.rawDestructor=ie,!re&&U.baseClass===void 0?m?(this.toWireType=Bt,this.destructorFunction=null):(this.toWireType=er,this.destructorFunction=null):this.toWireType=Vn}function e2(b,U,G){o.hasOwnProperty(b)||wr("Replacing nonexistant public symbol"),o[b].overloadTable!==void 0&&G!==void 0?o[b].overloadTable[G]=U:(o[b]=U,o[b].argCount=G)}function us(b,U){b=dt(b);function G(n){for(var D=[],Ae=1;Ae<b.length;++Ae)D.push("a"+Ae);var Pe="dynCall_"+b+"_"+U,be="return function "+Pe+"("+D.join(", ")+`) {
`;return be+="    return dynCall(rawFunction"+(D.length?", ":"")+D.join(", ")+`);
`,be+=`};
`,new Function("dynCall","rawFunction",be)(n,U)}var m=o["dynCall_"+b],re=G(m);return typeof re!="function"&&Ft("unknown function pointer with signature "+b+": "+U),re}var Kc=void 0;function t2(b){var U=U2(b),G=dt(U);return nr(U),G}function x0(b,U){var G=[],m={};function re(n){if(!m[n]&&!tn[n]){if(bt[n]){bt[n].forEach(re);return}G.push(n),m[n]=!0}}throw U.forEach(re),new Kc(b+": "+G.map(t2).join([", "]))}function n2(b,U,G,m,re,n,D,Ae,Pe,be,ie,kt,Ht){ie=dt(ie),n=us(re,n),Ae&&(Ae=us(D,Ae)),be&&(be=us(Pe,be)),Ht=us(kt,Ht);var rn=ls(ie);Dt(rn,function(){x0("Cannot construct "+ie+" due to unbound types",[m])}),gi([b,U,G],m?[m]:[],function(Sn){Sn=Sn[0];var In,li;m?(In=Sn.registeredClass,li=In.instancePrototype):li=Vt.prototype;var Rr=ai(rn,function(){if(Object.getPrototypeOf(this)!==qo)throw new Ni("Use 'new' to construct "+ie);if(wt.constructor_body===void 0)throw new Ni(ie+" has no accessible constructor");var Pt=wt.constructor_body[arguments.length];if(Pt===void 0)throw new Ni("Tried to invoke ctor of "+ie+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(wt.constructor_body).toString()+") parameters instead!");return Pt.apply(this,arguments)}),qo=Object.create(li,{constructor:{value:Rr}});Rr.prototype=qo;var wt=new Ke(ie,Rr,qo,Ht,In,n,Ae,be),Ii=new Li(ie,wt,!0,!1,!1),Un=new Li(ie+"*",wt,!1,!1,!1),Zt=new Li(ie+" const*",wt,!1,!0,!1);return qt[b]={pointerType:Un,constPointerType:Zt},e2(rn,Rr),[Ii,Un,Zt]})}function eu(b,U){for(var G=[],m=0;m<b;m++)G.push(pe[(U>>2)+m]);return G}function tu(b){for(;b.length;){var U=b.pop(),G=b.pop();G(U)}}function i2(b,U,G,m,re,n){se(U>0);var D=eu(U,G);re=us(m,re);var Ae=[n],Pe=[];gi([],[b],function(be){be=be[0];var ie="constructor "+be.name;if(be.registeredClass.constructor_body===void 0&&(be.registeredClass.constructor_body=[]),be.registeredClass.constructor_body[U-1]!==void 0)throw new Ni("Cannot register multiple constructors with identical number of parameters ("+(U-1)+") for class '"+be.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return be.registeredClass.constructor_body[U-1]=function(){x0("Cannot construct "+be.name+" due to unbound types",D)},gi([],D,function(kt){return be.registeredClass.constructor_body[U-1]=function(){arguments.length!==U-1&&Ft(ie+" called with "+arguments.length+" arguments, expected "+(U-1)),Pe.length=0,Ae.length=U;for(var rn=1;rn<U;++rn)Ae[rn]=kt[rn].toWireType(Pe,arguments[rn-1]);var Sn=re.apply(null,Ae);return tu(Pe),kt[0].fromWireType(Sn)},[]}),[]})}function r2(b,U){if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var G=ai(b.name||"unknownFunctionName",function(){});G.prototype=b.prototype;var m=new G,re=b.apply(m,U);return re instanceof Object?re:m}function s2(b,U,G,m,re){var n=U.length;n<2&&Ft("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var D=U[1]!==null&&G!==null,Ae=!1,Pe=1;Pe<U.length;++Pe)if(U[Pe]!==null&&U[Pe].destructorFunction===void 0){Ae=!0;break}for(var be=U[0].name!=="void",ie="",kt="",Pe=0;Pe<n-2;++Pe)ie+=(Pe!==0?", ":"")+"arg"+Pe,kt+=(Pe!==0?", ":"")+"arg"+Pe+"Wired";var Ht="return function "+ls(b)+"("+ie+`) {
if (arguments.length !== `+(n-2)+`) {
throwBindingError('function `+b+" called with ' + arguments.length + ' arguments, expected "+(n-2)+` args!');
}
`;Ae&&(Ht+=`var destructors = [];
`);var rn=Ae?"destructors":"null",Sn=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],In=[Ft,m,re,tu,U[0],U[1]];D&&(Ht+="var thisWired = classParam.toWireType("+rn+`, this);
`);for(var Pe=0;Pe<n-2;++Pe)Ht+="var arg"+Pe+"Wired = argType"+Pe+".toWireType("+rn+", arg"+Pe+"); // "+U[Pe+2].name+`
`,Sn.push("argType"+Pe),In.push(U[Pe+2]);if(D&&(kt="thisWired"+(kt.length>0?", ":"")+kt),Ht+=(be?"var rv = ":"")+"invoker(fn"+(kt.length>0?", ":"")+kt+`);
`,Ae)Ht+=`runDestructors(destructors);
`;else for(var Pe=D?1:2;Pe<U.length;++Pe){var li=Pe===1?"thisWired":"arg"+(Pe-2)+"Wired";U[Pe].destructorFunction!==null&&(Ht+=li+"_dtor("+li+"); // "+U[Pe].name+`
`,Sn.push(li+"_dtor"),In.push(U[Pe].destructorFunction))}be&&(Ht+=`var ret = retType.fromWireType(rv);
return ret;
`),Ht+=`}
`,Sn.push(Ht);var Rr=r2(Function,Sn).apply(null,In);return Rr}function o2(b,U,G,m,re,n,D,Ae){var Pe=eu(G,m);U=dt(U),n=us(re,n),gi([],[b],function(be){be=be[0];var ie=be.name+"."+U;Ae&&be.registeredClass.pureVirtualFunctions.push(U);function kt(){x0("Cannot call "+ie+" due to unbound types",Pe)}var Ht=be.registeredClass.instancePrototype,rn=Ht[U];return rn===void 0||rn.overloadTable===void 0&&rn.className!==be.name&&rn.argCount===G-2?(kt.argCount=G-2,kt.className=be.name,Ht[U]=kt):(En(Ht,U,ie),Ht[U].overloadTable[G-2]=kt),gi([],Pe,function(Sn){var In=s2(ie,Sn,be,n,D);return Ht[U].overloadTable===void 0?(In.argCount=G-2,Ht[U]=In):Ht[U].overloadTable[G-2]=In,[]}),[]})}var M0=[],vi=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function nu(b){b>4&&--vi[b].refcount===0&&(vi[b]=void 0,M0.push(b))}function a2(){for(var b=0,U=5;U<vi.length;++U)vi[U]!==void 0&&++b;return b}function l2(){for(var b=5;b<vi.length;++b)if(vi[b]!==void 0)return vi[b];return null}function c2(){o.count_emval_handles=a2,o.get_first_emval=l2}function S0(b){switch(b){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var U=M0.length?M0.pop():vi.length;return vi[U]={refcount:1,value:b},U}}}function u2(b,U){U=dt(U),jn(b,{name:U,fromWireType:function(G){var m=vi[G].value;return nu(G),m},toWireType:function(G,m){return S0(m)},argPackAdvance:8,readValueFromPointer:gn,destructorFunction:null})}function Tr(b){if(b===null)return"null";var U=typeof b;return U==="object"||U==="array"||U==="function"?b.toString():""+b}function f2(b,U){switch(U){case 2:return function(G){return this.fromWireType(Je[G>>2])};case 3:return function(G){return this.fromWireType(ne[G>>3])};default:throw new TypeError("Unknown float type: "+b)}}function h2(b,U,G){var m=xe(G);U=dt(U),jn(b,{name:U,fromWireType:function(re){return re},toWireType:function(re,n){if(typeof n!="number"&&typeof n!="boolean")throw new TypeError('Cannot convert "'+Tr(n)+'" to '+this.name);return n},argPackAdvance:8,readValueFromPointer:f2(U,m),destructorFunction:null})}function d2(b,U,G){switch(U){case 0:return G?function(re){return $e[re]}:function(re){return Ve[re]};case 1:return G?function(re){return mt[re>>1]}:function(re){return Ct[re>>1]};case 2:return G?function(re){return pe[re>>2]}:function(re){return Re[re>>2]};default:throw new TypeError("Unknown integer type: "+b)}}function p2(b,U,G,m,re){U=dt(U),re===-1&&(re=4294967295);var n=xe(G),D=function(be){return be};if(m===0){var Ae=32-8*G;D=function(be){return be<<Ae>>>Ae}}var Pe=U.indexOf("unsigned")!=-1;jn(b,{name:U,fromWireType:D,toWireType:function(be,ie){if(typeof ie!="number"&&typeof ie!="boolean")throw new TypeError('Cannot convert "'+Tr(ie)+'" to '+this.name);if(ie<m||ie>re)throw new TypeError('Passing a number "'+Tr(ie)+'" from JS side to C/C++ side to an argument of type "'+U+'", which is outside the valid range ['+m+", "+re+"]!");return Pe?ie>>>0:ie|0},argPackAdvance:8,readValueFromPointer:d2(U,n,m!==0),destructorFunction:null})}function m2(b,U,G){var m=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],re=m[U];function n(D){D=D>>2;var Ae=Re,Pe=Ae[D],be=Ae[D+1];return new re(We,be,Pe)}G=dt(G),jn(b,{name:G,fromWireType:n,argPackAdvance:8,readValueFromPointer:n},{ignoreDuplicateRegistrations:!0})}function A2(b,U){U=dt(U);var G=U==="std::string";jn(b,{name:U,fromWireType:function(m){var re=Re[m>>2],n;if(G)for(var D=m+4,Ae=0;Ae<=re;++Ae){var Pe=m+4+Ae;if(Ve[Pe]==0||Ae==re){var be=Pe-D,ie=ae(D,be);n===void 0?n=ie:(n+="\0",n+=ie),D=Pe+1}}else{for(var kt=new Array(re),Ae=0;Ae<re;++Ae)kt[Ae]=String.fromCharCode(Ve[m+4+Ae]);n=kt.join("")}return nr(m),n},toWireType:function(m,re){re instanceof ArrayBuffer&&(re=new Uint8Array(re));var n,D=typeof re=="string";D||re instanceof Uint8Array||re instanceof Uint8ClampedArray||re instanceof Int8Array||Ft("Cannot pass non-string to std::string"),G&&D?n=function(){return j(re)}:n=function(){return re.length};var Ae=n(),Pe=E0(4+Ae+1);if(Re[Pe>>2]=Ae,G&&D)k(re,Pe+4,Ae+1);else if(D)for(var be=0;be<Ae;++be){var ie=re.charCodeAt(be);ie>255&&(nr(Pe),Ft("String has UTF-16 code units that do not fit in 8 bits")),Ve[Pe+4+be]=ie}else for(var be=0;be<Ae;++be)Ve[Pe+4+be]=re[be];return m!==null&&m.push(nr,Pe),Pe},argPackAdvance:8,readValueFromPointer:gn,destructorFunction:function(m){nr(m)}})}function g2(b,U,G){G=dt(G);var m,re,n,D,Ae;U===2?(m=he,re=Me,D=Se,n=function(){return Ct},Ae=1):U===4&&(m=ve,re=Ee,D=de,n=function(){return Re},Ae=2),jn(b,{name:G,fromWireType:function(Pe){for(var be=Re[Pe>>2],ie=n(),kt,Ht=Pe+4,rn=0;rn<=be;++rn){var Sn=Pe+4+rn*U;if(ie[Sn>>Ae]==0||rn==be){var In=Sn-Ht,li=m(Ht,In);kt===void 0?kt=li:(kt+="\0",kt+=li),Ht=Sn+U}}return nr(Pe),kt},toWireType:function(Pe,be){typeof be!="string"&&Ft("Cannot pass non-string to C++ string type "+G);var ie=D(be),kt=E0(4+ie+U);return Re[kt>>2]=ie>>Ae,re(be,kt+4,ie+U),Pe!==null&&Pe.push(nr,kt),kt},argPackAdvance:8,readValueFromPointer:gn,destructorFunction:function(Pe){nr(Pe)}})}function _2(b,U){U=dt(U),jn(b,{isVoid:!0,name:U,argPackAdvance:0,fromWireType:function(){},toWireType:function(G,m){}})}function v2(){ke()}function y2(){return Ve.length}function x2(b){ke("OOM")}function M2(b){x2()}function S2(){ke("trap!")}function E2(b,U,G){Ve.copyWithin(b,U,U+G)}Be(),Ni=o.BindingError=Sr(Error,"BindingError"),Er=o.InternalError=Sr(Error,"InternalError"),It(),Kp(),Jo(),Kc=o.UnboundTypeError=Sr(Error,"UnboundTypeError"),c2();function iu(b){for(var U=[],G=0;G<b.length;G++){var m=b[G];m>255&&(m&=255),U.push(String.fromCharCode(m))}return U.join("")}var w2=typeof atob=="function"?atob:function(b){var U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",G="",m,re,n,D,Ae,Pe,be,ie=0;b=b.replace(/[^A-Za-z0-9\+\/\=]/g,"");do D=U.indexOf(b.charAt(ie++)),Ae=U.indexOf(b.charAt(ie++)),Pe=U.indexOf(b.charAt(ie++)),be=U.indexOf(b.charAt(ie++)),m=D<<2|Ae>>4,re=(Ae&15)<<4|Pe>>2,n=(Pe&3)<<6|be,G=G+String.fromCharCode(m),Pe!==64&&(G=G+String.fromCharCode(re)),be!==64&&(G=G+String.fromCharCode(n));while(ie<b.length);return G};function T2(b){if(typeof h=="boolean"&&h){var U;try{U=Buffer.from(b,"base64")}catch{U=new Buffer(b,"base64")}return new Uint8Array(U.buffer,U.byteOffset,U.byteLength)}try{for(var G=w2(b),m=new Uint8Array(G.length),re=0;re<G.length;++re)m[re]=G.charCodeAt(re);return m}catch{throw new Error("Converting base64 string to bytes failed.")}}function tr(b){if(Ye(b))return T2(b.slice(Ne.length))}var R2={Math,Int8Array,Int16Array,Int32Array,Uint8Array,Uint16Array,Float32Array,Float64Array},C2={A:E2,B:M2,C:S2,D:Tt,a:ke,b:T,c:W,d:ut,e:$t,f:Q,g:Le,h:ht,i:vt,j:ye,k:Yo,l:n2,m:i2,n:o2,o:u2,p:h2,q:p2,r:m2,s:A2,t:g2,u:_2,v:nu,w:S0,x:v2,y:Tr,z:y2},Rt=function(b,U,G){var m=new b.Int8Array(G),re=new b.Int16Array(G),n=new b.Int32Array(G),D=new b.Uint8Array(G),Ae=new b.Uint16Array(G),Pe=new b.Float32Array(G),be=new b.Float64Array(G),ie=U.D|0,kt=0,Ht=0,rn=0,Sn=0,In=0,li=0,Rr=0,qo=0,wt=b.Math.imul,Ii=b.Math.clz32,Un=U.a,Zt=U.b,Pt=U.c,Yt=U.d,N2=U.e,Jt=U.f,L2=U.g,EN=U.h,wN=U.i,TN=U.j,I2=U.k,au=U.l,lu=U.m,fs=U.n,D2=U.o,cu=U.p,Di=U.q,$n=U.r,uu=U.s,R0=U.t,B2=U.u,RN=U.v,CN=U.w,k2=U.x,UN=U.y,V2=U.z,O2=U.A,z2=U.B,fu=U.C,y=22384,bN=5265264,FN=0;function G2(){EM(),wM()}function W2(){X2(0)}function X2(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0;e=y,y=y+16|0,i=e+8|0,r=e,N=rx()|0,f=sx()|0,c=yo()|0,d=ax()|0,p=lx()|0,_=Lf()|0,S=pa()|0,F=ma()|0,l=ma()|0,au(c|0,d|0,p|0,_|0,S|0,9,F|0,N|0,l|0,f|0,6204,If()|0,138),mx(1),n[r>>2]=5,n[r+4>>2]=0,n[i>>2]=n[r>>2],n[i+4>>2]=n[r+4>>2],Mx(6211,i),n[r>>2]=3,n[r+4>>2]=0,n[i>>2]=n[r>>2],n[i+4>>2]=n[r+4>>2],Cx(6216,i),n[r>>2]=10,n[r+4>>2]=0,n[i>>2]=n[r>>2],n[i+4>>2]=n[r+4>>2],Lx(6225,i),f=Wx()|0,l=Xx()|0,N=xo()|0,F=Zx()|0,S=Yx()|0,_=Lf()|0,p=pa()|0,d=ma()|0,c=ma()|0,au(N|0,F|0,S|0,_|0,p|0,11,d|0,f|0,c|0,l|0,6234,If()|0,139),eM(2),n[r>>2]=6,n[r+4>>2]=0,n[i>>2]=n[r>>2],n[i+4>>2]=n[r+4>>2],aM(6211,i),n[r>>2]=4,n[r+4>>2]=0,n[i>>2]=n[r>>2],n[i+4>>2]=n[r+4>>2],K0(6248,i),n[r>>2]=5,n[r+4>>2]=0,n[i>>2]=n[r>>2],n[i+4>>2]=n[r+4>>2],K0(6265,i),n[r>>2]=6,n[r+4>>2]=0,n[i>>2]=n[r>>2],n[i+4>>2]=n[r+4>>2],K0(6280,i),n[r>>2]=7,n[r+4>>2]=0,n[i>>2]=n[r>>2],n[i+4>>2]=n[r+4>>2],_M(6216,i),y=e}function H2(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0;l=y,y=y+32|0,d=l+16|0,c=l+8|0,p=l,f=ze(20)|0,K2(f,i,r),n[p>>2]=0,n[d>>2]=n[p>>2],tm(c,f,d),i=n[c>>2]|0,n[c>>2]=n[e>>2],n[e>>2]=i,i=c+4|0,r=e+4|0,f=n[i>>2]|0,n[i>>2]=n[r>>2],n[r>>2]=f,C0(c),r=ze(352)|0,em(r,n[e>>2]|0),f=e+8|0,n[p>>2]=0,n[d>>2]=n[p>>2],lm(c,r,d),r=n[c>>2]|0,n[c>>2]=n[f>>2],n[f>>2]=r,f=c+4|0,r=e+12|0,i=n[f>>2]|0,n[f>>2]=n[r>>2],n[r>>2]=i,U0(c),y=l}function Z2(e,i){e=e|0,i=i|0,VA(n[e+8>>2]|0,i)}function Y2(e){return e=e|0,e=(W1(n[e+8>>2]|0)|0)+107|0,D[e>>0]|D[e+1>>0]<<8|D[e+2>>0]<<16|D[e+3>>0]<<24|0}function J2(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0;l=y,y=y+32|0,f=l+16|0,c=l+8|0,d=l,p=ze(12)|0,X1(p,i,r),n[d>>2]=0,n[f>>2]=n[d>>2],Y1(c,p,f),p=n[c>>2]|0,n[c>>2]=n[e>>2],n[e>>2]=p,p=c+4|0,r=e+4|0,i=n[p>>2]|0,n[p>>2]=n[r>>2],n[r>>2]=i,Z0(c),r=e+8|0,i=ze(12)|0,H1(i,n[e>>2]|0),n[d>>2]=0,n[f>>2]=n[d>>2],K1(c,i,f),i=n[c>>2]|0,n[c>>2]=n[r>>2],n[r>>2]=i,i=c+4|0,d=e+12|0,p=n[i>>2]|0,n[i>>2]=n[d>>2],n[d>>2]=p,wf(c),Z1(c,n[r>>2]|0),r=e+16|0,d=n[c>>2]|0,p=c+4|0,i=n[p>>2]|0,n[c>>2]=0,n[p>>2]=0,n[f>>2]=n[r>>2],n[r>>2]=d,r=e+20|0,n[f+4>>2]=n[r>>2],n[r>>2]=i,vo(f),vo(c),y=l}function j2(e,i){e=e|0,i=i|0;var r=0;e=e+16|0,r=n[e>>2]|0;e:do if(r|0)switch(i|0){case 4:{Y0(r);break e}case 8:{ha(r),ha(n[e>>2]|0);break e}default:break e}while(!1)}function $2(e,i){e=e|0,i=i|0;var r=0;r=e+16|0,e=n[r>>2]|0;e:do if(e|0){switch(i|0){case 1:{Yv(e);break e}case 2:{Jv(e);break e}case 8:{Y0(e),e=n[r>>2]|0;break}case 4:break;default:break e}Y0(e)}while(!1)}function q2(e,i){e=e|0,i=i|0;var r=0;r=e+16|0,e=n[r>>2]|0;e:do if(e|0){switch(i|0){case 1:{Ry(e);break e}case 2:{Cy(e);break e}case 8:{ha(e),e=n[r>>2]|0;break}case 4:break;default:break e}ha(e)}while(!1)}function Q2(e,i){e=e|0,i=i|0,e=n[e+16>>2]|0,e|0&&wo[n[n[e>>2]>>2]&63](e,i)|0}function K2(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,n[e+4>>2]=r,n[e+8>>2]=0,m[e+12>>0]=0,m[e+13>>0]=0,n[e+16>>2]=0}function em(e,i){e=e|0,i=i|0,n[e>>2]=i,pu(e+4|0,i),_m(e+247|0),n[e+288>>2]=0,n[e+292>>2]=0,n[e+296>>2]=0,mu(e+300|0),i=e+312|0,n[i>>2]=0,n[i+4>>2]=0,n[i+8>>2]=0,n[i+12>>2]=0,vm(e+328|0),ym(e)}function tm(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4296,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,nm(e,l),y=r}function C0(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function nm(e,i){e=e|0,i=i|0}function PN(e){e=e|0,N2(e|0)|0,jE()}function im(e){e=e|0,un(e),De(e)}function rm(e){e=e|0,e=n[e+12>>2]|0,e|0&&De(e)}function sm(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==6407?e+12|0:0)|0}function om(e){e=e|0,St(e,16)}function St(e,i){e=e|0,i=i|0,am(e)}function am(e){e=e|0,De(e)}function lm(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4324,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,cm(e,l),y=r}function U0(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function cm(e,i){e=e|0,i=i|0}function um(e){e=e|0,un(e),De(e)}function fm(e){e=e|0,e=n[e+12>>2]|0,e|0&&(pm(e),De(e))}function hm(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==6605?e+12|0:0)|0}function dm(e){e=e|0,St(e,16)}function pm(e){e=e|0,Qo(e+320|0),b0(e+312|0),hu(e+300|0),gm(e+288|0),mm(e+247|0),du(e+4|0)}function Qo(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function b0(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function hu(e){e=e|0,Am(e)}function mm(e){e=e|0,e=e+34|0,e=D[e>>0]|D[e+1>>0]<<8|D[e+2>>0]<<16|D[e+3>>0]<<24,e|0&&fh(e)}function du(e){e=e|0,Ko(n[e+12>>2]|0)}function Am(e){e=e|0;var i=0,r=0;i=n[e>>2]|0,r=i,i|0&&(n[e+4>>2]=r,St(i,(n[e+8>>2]|0)-r|0))}function gm(e){e=e|0;var i=0,r=0;i=n[e>>2]|0,r=i,i|0&&(n[e+4>>2]=r,St(i,(n[e+8>>2]|0)-r|0))}function Ko(e){e=e|0,al(n[e+-4>>2]|0)}function pu(e,i){e=e|0,i=i|0,n[e>>2]=i,n[e+4>>2]=0,n[e+8>>2]=0,n[e+12>>2]=Cr(1048576)|0}function _m(e){e=e|0;var i=0;i=e+32|0,m[i>>0]=0,m[i+1>>0]=0,e=e+34|0,m[e>>0]=0,m[e+1>>0]=0,m[e+2>>0]=0,m[e+3>>0]=0}function mu(e){e=e|0,n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0}function vm(e){e=e|0,n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0,n[e+12>>2]=0,e=e+16|0,n[e>>2]=-1,n[e+4>>2]=-1}function ym(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0;if(d=y,y=y+64|0,c=d+32|0,r=d+56|0,i=d+16|0,f=d,Ur(n[e>>2]|0,r,4),bm(c,r,r+4|0),r=hs(6693)|0,l=m[c+11>>0]|0,(r|0)==((l<<24>>24<0?n[c+4>>2]|0:l&255)|0)){if(l=(Ww(c,0,-1,6693,r)|0)==0,Eo(c),l){if(r=n[e>>2]|0,n[i>>2]=0,n[i+4>>2]=0,n[i+8>>2]=0,n[i+12>>2]=0,n[c>>2]=n[i>>2],n[c+4>>2]=n[i+4>>2],n[c+8>>2]=n[i+8>>2],n[c+12>>2]=n[i+12>>2],lo(r,c),r=e+20|0,Ur(n[e>>2]|0,r,227),Mm(e,r),l=Sm()|0,i=n[l>>2]|0,l=n[l+4>>2]|0,(i|0)!=(l|0))do Em(c,i),wm(c,r),F0(c),i=i+24|0;while((i|0)!=(l|0));Tm(e),Rm(e),Cm(n[e>>2]|0),l=n[e>>2]|0,i=(n[e+116>>2]|0)+8|0,r=f,n[r>>2]=0,n[r+4>>2]=0,r=f+8|0,n[r>>2]=i,n[r+4>>2]=0,n[c>>2]=n[f>>2],n[c+4>>2]=n[f+4>>2],n[c+8>>2]=n[f+8>>2],n[c+12>>2]=n[f+12>>2],lo(l,c),Um(e+4|0),y=d;return}}else Eo(c);d=Yt(8)|0,xm(d),Jt(d|0,2592,8)}function Cr(e){e=e|0;var i=0;return i=ya(e+68|0)|0,e=i+68&-64,n[e+-4>>2]=i,e|0}function Ur(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0;d=e+13|0,m[d>>0]|0?m[e+12>>0]=1:(f=e+4|0,l=n[f>>2]|0,p=e+8|0,c=n[p>>2]|0,_=l-c|0,r=(_|0)<(r|0)?_:r,r&&(ti(i|0,(n[e>>2]|0)+c|0,r|0)|0,c=n[p>>2]|0,l=n[f>>2]|0),_=c+r|0,n[p>>2]=_,n[e+16>>2]=r,(_|0)>=(l|0)&&(m[d>>0]=1))}function xm(e){e=e|0,ci(e,6791),n[e>>2]=4352}function lo(e,i){e=e|0,i=i|0;var r=0,l=0,c=0;c=i+8|0,i=n[c>>2]|0,c=n[c+4>>2]|0,r=n[e+4>>2]|0,l=((r|0)<0)<<31>>31,(c|0)<(l|0)|(c|0)==(l|0)&i>>>0<r>>>0?n[e+8>>2]=i:m[e+12>>0]=1}function Mm(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0;F=i+179|0,m[ie>>0]=m[F>>0],m[ie+1>>0]=m[F+1>>0],m[ie+2>>0]=m[F+2>>0],m[ie+3>>0]=m[F+3>>0],m[ie+4>>0]=m[F+4>>0],m[ie+5>>0]=m[F+5>>0],m[ie+6>>0]=m[F+6>>0],m[ie+7>>0]=m[F+7>>0],S=+be[ie>>3],d=i+187|0,m[ie>>0]=m[d>>0],m[ie+1>>0]=m[d+1>>0],m[ie+2>>0]=m[d+2>>0],m[ie+3>>0]=m[d+3>>0],m[ie+4>>0]=m[d+4>>0],m[ie+5>>0]=m[d+5>>0],m[ie+6>>0]=m[d+6>>0],m[ie+7>>0]=m[d+7>>0],N=+be[ie>>3],e=i+195|0,m[ie>>0]=m[e>>0],m[ie+1>>0]=m[e+1>>0],m[ie+2>>0]=m[e+2>>0],m[ie+3>>0]=m[e+3>>0],m[ie+4>>0]=m[e+4>>0],m[ie+5>>0]=m[e+5>>0],m[ie+6>>0]=m[e+6>>0],m[ie+7>>0]=m[e+7>>0],f=+be[ie>>3],_=i+203|0,m[ie>>0]=m[_>>0],m[ie+1>>0]=m[_+1>>0],m[ie+2>>0]=m[_+2>>0],m[ie+3>>0]=m[_+3>>0],m[ie+4>>0]=m[_+4>>0],m[ie+5>>0]=m[_+5>>0],m[ie+6>>0]=m[_+6>>0],m[ie+7>>0]=m[_+7>>0],p=+be[ie>>3],c=i+211|0,m[ie>>0]=m[c>>0],m[ie+1>>0]=m[c+1>>0],m[ie+2>>0]=m[c+2>>0],m[ie+3>>0]=m[c+3>>0],m[ie+4>>0]=m[c+4>>0],m[ie+5>>0]=m[c+5>>0],m[ie+6>>0]=m[c+6>>0],m[ie+7>>0]=m[c+7>>0],r=+be[ie>>3],i=i+219|0,m[ie>>0]=m[i>>0],m[ie+1>>0]=m[i+1>>0],m[ie+2>>0]=m[i+2>>0],m[ie+3>>0]=m[i+3>>0],m[ie+4>>0]=m[i+4>>0],m[ie+5>>0]=m[i+5>>0],m[ie+6>>0]=m[i+6>>0],m[ie+7>>0]=m[i+7>>0],l=+be[ie>>3],be[ie>>3]=N,m[F>>0]=m[ie>>0],m[F+1>>0]=m[ie+1>>0],m[F+2>>0]=m[ie+2>>0],m[F+3>>0]=m[ie+3>>0],m[F+4>>0]=m[ie+4>>0],m[F+5>>0]=m[ie+5>>0],m[F+6>>0]=m[ie+6>>0],m[F+7>>0]=m[ie+7>>0],be[ie>>3]=S,m[_>>0]=m[ie>>0],m[_+1>>0]=m[ie+1>>0],m[_+2>>0]=m[ie+2>>0],m[_+3>>0]=m[ie+3>>0],m[_+4>>0]=m[ie+4>>0],m[_+5>>0]=m[ie+5>>0],m[_+6>>0]=m[ie+6>>0],m[_+7>>0]=m[ie+7>>0],be[ie>>3]=p,m[d>>0]=m[ie>>0],m[d+1>>0]=m[ie+1>>0],m[d+2>>0]=m[ie+2>>0],m[d+3>>0]=m[ie+3>>0],m[d+4>>0]=m[ie+4>>0],m[d+5>>0]=m[ie+5>>0],m[d+6>>0]=m[ie+6>>0],m[d+7>>0]=m[ie+7>>0],be[ie>>3]=f,m[c>>0]=m[ie>>0],m[c+1>>0]=m[ie+1>>0],m[c+2>>0]=m[ie+2>>0],m[c+3>>0]=m[ie+3>>0],m[c+4>>0]=m[ie+4>>0],m[c+5>>0]=m[ie+5>>0],m[c+6>>0]=m[ie+6>>0],m[c+7>>0]=m[ie+7>>0],be[ie>>3]=l,m[e>>0]=m[ie>>0],m[e+1>>0]=m[ie+1>>0],m[e+2>>0]=m[ie+2>>0],m[e+3>>0]=m[ie+3>>0],m[e+4>>0]=m[ie+4>>0],m[e+5>>0]=m[ie+5>>0],m[e+6>>0]=m[ie+6>>0],m[e+7>>0]=m[ie+7>>0],be[ie>>3]=r,m[i>>0]=m[ie>>0],m[i+1>>0]=m[ie+1>>0],m[i+2>>0]=m[ie+2>>0],m[i+3>>0]=m[ie+3>>0],m[i+4>>0]=m[ie+4>>0],m[i+5>>0]=m[ie+5>>0],m[i+6>>0]=m[ie+6>>0],m[i+7>>0]=m[ie+7>>0]}function Sm(){var e=0,i=0,r=0,l=0,c=0,f=0,d=0,p=0;if(c=y,y=y+48|0,r=c+24|0,l=c,e=c+44|0,!(m[21440]|0)&&Br(21440)|0&&(n[5374]=0,n[5375]=0,n[5376]=0,kr(21440)),!(m[21448]|0)&&Br(21448)|0&&kr(21448),(n[5374]|0)==(n[5375]|0)){if(Iw(21508),(n[5374]|0)==(n[5375]|0)){m[r>>0]=m[e>>0]|0,Pm(l,r),e=n[5375]|0;do if(e>>>0>=(n[5376]|0)>>>0)if(e=((e-(n[5374]|0)|0)/24|0)+1|0,i=km(21496)|0,i>>>0<e>>>0)Tn(21496);else{f=n[5374]|0,p=((n[5376]|0)-f|0)/24|0,d=p<<1,Im(r,p>>>0<i>>>1>>>0?d>>>0<e>>>0?e:d:i,((n[5375]|0)-f|0)/24|0,21504),i=r+8|0,P0(n[i>>2]|0,l),n[i>>2]=(n[i>>2]|0)+24,Dm(21496,r),Bm(r);break}else Nm(r,21496,1),p=r+4|0,P0(n[p>>2]|0,l),n[p>>2]=(n[p>>2]|0)+24,Lm(r);while(!1);F0(l)}Dw(21508)}return y=c,21496}function Em(e,i){e=e|0,i=i|0;var r=0,l=0;r=i+16|0,l=n[r>>2]|0;do if(l)if((i|0)==(l|0)){l=Au(e)|0,n[e+16>>2]=l,r=n[r>>2]|0,or[n[(n[r>>2]|0)+12>>2]&15](r,l);break}else{n[e+16>>2]=Ma[n[(n[l>>2]|0)+8>>2]&15](l)|0;break}else n[e+16>>2]=0;while(!1)}function wm(e,i){if(e=e|0,i=i|0,e=n[e+16>>2]|0,!e)i=Yt(4)|0,n[i>>2]=0,eA(i),Jt(i|0,4168,131);else{or[n[(n[e>>2]|0)+24>>2]&15](e,i);return}}function F0(e){e=e|0;var i=0;i=n[e+16>>2]|0,(e|0)!=(i|0)?i|0&&Gt[n[(n[i>>2]|0)+20>>2]&255](i):Gt[n[(n[i>>2]|0)+16>>2]&255](i)}function Tm(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0;z=y,y=y+96|0,c=z+16|0,F=z,p=z+72|0,f=n[e>>2]|0,_=Ae[e+114>>1]|0,S=F,n[S>>2]=0,n[S+4>>2]=0,S=F+8|0,n[S>>2]=_,n[S+4>>2]=0,n[c>>2]=n[F>>2],n[c+4>>2]=n[F+4>>2],n[c+8>>2]=n[F+8>>2],n[c+12>>2]=n[F+12>>2],lo(f,c),f=e+120|0;e:do if(n[f>>2]|0){for(d=c+2|0,_=c+16|0,S=c+20|0,F=c+18|0,r=0;;){if(!(ea(n[e>>2]|0)|0)||tA(n[e>>2]|0)|0)break e;for(Ur(n[e>>2]|0,c,54),i=7277,l=d;(m[l>>0]|0)==(m[i>>0]|0);)if(l=l+1|0,(l|0)==(_|0)){N=8;break}else i=i+1|0;if((N|0)==8&&(N=0,(D[F>>0]|D[F+1>>0]<<8)<<16>>16==22204))break;if(iA(n[e>>2]|0,(D[S>>0]|D[S+1>>0]<<8)&65535,0,1),r=r+1|0,r>>>0>=(n[f>>2]|0)>>>0)break e}F=(D[S>>0]|D[S+1>>0]<<8)&65535,N=uh(F)|0,Ur(n[e>>2]|0,N,F),nA(e,N),De(N),N=e+125|0,sA(p,e+247|0,(D[N>>0]|D[N+1>>0]<<8)&65535),oA(e+300|0,p)|0,hu(p),y=z;return}while(!1);z=Yt(8)|0,rA(z),Jt(z|0,2672,8)}function Rm(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0;if(N=y,y=y+176|0,c=N+40|0,f=N+24|0,i=N+16|0,l=N,_=N+152|0,S=N+136|0,F=N+56|0,p=n[e>>2]|0,d=e+116|0,z=n[d>>2]|0,r=f,n[r>>2]=0,n[r+4>>2]=0,r=f+8|0,n[r>>2]=z,n[r+4>>2]=0,n[c>>2]=n[f>>2],n[c+4>>2]=n[f+4>>2],n[c+8>>2]=n[f+8>>2],n[c+12>>2]=n[f+12>>2],lo(p,c),p=i,n[p>>2]=0,n[p+4>>2]=0,Ur(n[e>>2]|0,i,8),ea(n[e>>2]|0)|0||(z=Yt(8)|0,N0(z),Jt(z|0,2704,8)),r=i,i=n[r>>2]|0,r=n[r+4>>2]|0,(i|0)==-1&(r|0)==-1&&(z=Yt(8)|0,vu(z,7488),Jt(z|0,2720,8)),z=n[e>>2]|0,p=l,n[p>>2]=0,n[p+4>>2]=0,p=l+8|0,n[p>>2]=i,n[p+4>>2]=r,n[c>>2]=n[l>>2],n[c+4>>2]=n[l+4>>2],n[c+8>>2]=n[l+8>>2],n[c+12>>2]=n[l+12>>2],lo(z,c),ea(n[e>>2]|0)|0||(z=Yt(8)|0,N0(z),Jt(z|0,2704,8)),Ur(n[e>>2]|0,c,8),ea(n[e>>2]|0)|0||(z=Yt(8)|0,N0(z),Jt(z|0,2704,8)),n[c>>2]|0&&(z=Yt(8)|0,_A(z),Jt(z|0,2736,8)),f=e+288|0,p=e+292|0,n[p>>2]=n[f>>2],z=e+259|0,(D[z>>0]|D[z+1>>0]<<8|D[z+2>>0]<<16|D[z+3>>0]<<24|0)==-1&&(z=Yt(8)|0,vu(z,7606),Jt(z|0,2720,8)),l=c+4|0,vA(f,(n[l>>2]|0)+1|0),z=n[f>>2]|0,n[z>>2]=(n[d>>2]|0)+8,n[z+4>>2]=0,(n[l>>2]|0)>>>0>1){if(pu(_,n[e>>2]|0),yu(S,_),On(F,32,2,8,0),L0(S),zn(F),!(n[l>>2]|0))f=n[f>>2]|0,r=f;else{r=1;do r>>>0>1?i=n[(n[f>>2]|0)+(r+-1<<3)>>2]|0:i=0,d=wn(F,S,i,1)|0,i=n[f>>2]|0,z=i+(r<<3)|0,n[z>>2]=d,n[z+4>>2]=((d|0)<0)<<31>>31,r=r+1|0;while(r>>>0<=(n[l>>2]|0)>>>0);r=i,f=i}if(i=n[p>>2]|0,i-r>>3>>>0>1){c=i-f>>3,l=f,i=1,r=n[l>>2]|0,l=n[l+4>>2]|0;do z=f+(i<<3)|0,p=z,r=ei(n[p>>2]|0,n[p+4>>2]|0,r|0,l|0)|0,l=Pt()|0,n[z>>2]=r,n[z+4>>2]=l,i=i+1|0;while(i>>>0<c>>>0)}Gn(F),xu(S),du(_)}y=N}function Cm(e){e=e|0,m[e+12>>0]=0,m[e+13>>0]=0}function Um(e){e=e|0,n[e+8>>2]=0,n[e+4>>2]=0}function hs(e){return e=e|0,Aa(e)|0}function bm(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0;if(d=y,y=y+16|0,c=i,f=d,l=r-c|0,l>>>0>4294967279&&ol(e),l>>>0<11?m[e+11>>0]=l:(_=l+16&-16,p=ze(_)|0,n[e>>2]=p,n[e+8>>2]=_|-2147483648,n[e+4>>2]=l,e=p),(i|0)!=(r|0)){for(c=r-c|0,l=e;co(l,i),i=i+1|0,(i|0)!=(r|0);)l=l+1|0;e=e+c|0}m[f>>0]=0,co(e,f),y=d}function co(e,i){e=e|0,i=i|0,m[e>>0]=m[i>>0]|0}function Fm(e){e=e|0,Xn(e),De(e)}function Pm(e,i){e=e|0,i=i|0,n[e>>2]=4372,n[e+16>>2]=e}function Nm(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,i=n[i+4>>2]|0,n[e+4>>2]=i,n[e+8>>2]=i+(r*24|0)}function Lm(e){e=e|0,n[(n[e>>2]|0)+4>>2]=n[e+4>>2]}function P0(e,i){e=e|0,i=i|0;var r=0,l=0;r=i+16|0,l=n[r>>2]|0;do if(l)if((i|0)==(l|0)){l=Au(e)|0,n[e+16>>2]=l,r=n[r>>2]|0,or[n[(n[r>>2]|0)+12>>2]&15](r,l);break}else{n[e+16>>2]=l,n[r>>2]=0;break}else n[e+16>>2]=0;while(!1)}function Au(e){return e=e|0,e|0}function Im(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0;c=e+12|0,n[c>>2]=0,n[e+16>>2]=l;do if(i)if(i>>>0>178956970)c=Yt(8)|0,ki(c,6723),n[c>>2]=5956,Jt(c|0,3928,123);else{l=ze(i*24|0)|0;break}else l=0;while(!1);n[e>>2]=l,r=l+(r*24|0)|0,n[e+8>>2]=r,n[e+4>>2]=r,n[c>>2]=l+(i*24|0)}function Dm(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0;if(p=n[e>>2]|0,_=e+4|0,r=n[_>>2]|0,d=i+4|0,(r|0)==(p|0))c=d,f=e,l=n[d>>2]|0,r=p;else{l=n[d>>2]|0;do r=r+-24|0,P0(l+-24|0,r),l=(n[d>>2]|0)+-24|0,n[d>>2]=l;while((r|0)!=(p|0));c=d,f=e,r=n[e>>2]|0}n[f>>2]=l,n[c>>2]=r,p=i+8|0,d=n[_>>2]|0,n[_>>2]=n[p>>2],n[p>>2]=d,p=e+8|0,_=i+12|0,e=n[p>>2]|0,n[p>>2]=n[_>>2],n[_>>2]=e,n[i>>2]=n[c>>2]}function Bm(e){e=e|0;var i=0,r=0,l=0,c=0;if(r=n[e+4>>2]|0,l=e+8|0,i=n[l>>2]|0,(i|0)!=(r|0))do c=i+-24|0,n[l>>2]=c,F0(c),i=n[l>>2]|0;while((i|0)!=(r|0));i=n[e>>2]|0,i|0&&St(i,(n[e+12>>2]|0)-i|0)}function km(e){return e=e|0,178956970}function Vm(e){e=e|0,De(e)}function Om(e){return e=e|0,e=ze(8)|0,n[e>>2]=4372,e|0}function zm(e,i){e=e|0,i=i|0,n[i>>2]=4372}function Gm(e){e=e|0}function Wm(e){e=e|0,St(e,8)}function Xm(e,i){e=e|0,i=i|0,Jm(e+4|0,i)}function Hm(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==7183?e+4|0:0)|0}function Zm(e){return e=e|0,2664}function Ym(e){e=e|0}function Jm(e,i){e=e|0,i=i|0,jm(e,i)}function jm(e,i){e=e|0,i=i|0;var r=0,l=0;if(e=i+104|0,i=D[e>>0]|0,r=i>>>7,l=i>>>6&1,(r|0)==1&(l|0)!=0&&(l=Yt(8)|0,$m(l),Jt(l|0,2632,8)),(r|0)==(l|0))l=Yt(8)|0,qm(l),Jt(l|0,2648,8);else{m[e>>0]=i&63;return}}function $m(e){e=e|0,ci(e,7076),n[e>>2]=4416}function qm(e){e=e|0,ci(e,7144),n[e>>2]=4436}function Qm(e){e=e|0,Xn(e),De(e)}function Km(e){e=e|0,Xn(e),De(e)}function eA(e){e=e|0,n[e>>2]=6092}function ea(e){e=e|0;var i=0;return i=e+12|0,e=(m[i>>0]|0)==0,m[i>>0]=0,e|0}function tA(e){return e=e|0,(m[e+13>>0]|0)!=0|0}function nA(e,i){e=e|0,i=i|0,e=e+247|0,aA(e,i),(D[e>>0]|D[e+1>>0]<<8)<<16>>16!=2&&(i=Yt(8)|0,gu(i),Jt(i|0,2688,8))}function iA(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;switch(l|0){case 0:break;case 2:{l=n[e+4>>2]|0,i=ei(ei(i|0,r|0,-1,-1)|0,Pt()|0,l|0,((l|0)<0)<<31>>31|0)|0,r=Pt()|0;break}case 1:{l=n[e+8>>2]|0,i=ei(l|0,((l|0)<0)<<31>>31|0,i|0,r|0)|0,r=Pt()|0;break}default:r=0,i=0}c=n[e+4>>2]|0,f=((c|0)<0)<<31>>31,l=e+12|0,(r|0)<0|((r|0)>(f|0)|(r|0)==(f|0)&i>>>0>=c>>>0)?m[l>>0]=1:(m[l>>0]=0,n[e+8>>2]=i)}function rA(e){e=e|0,ci(e,7410),n[e>>2]=4476}function sA(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0,S=0;if(d=y,y=y+16|0,f=d,mu(e),c=i+32|0,(D[c>>0]|D[c+1>>0]<<8)<<16>>16){l=i+34|0,i=0;do _=D[l>>0]|D[l+1>>0]<<8|D[l+2>>0]<<16|D[l+3>>0]<<24,S=_+(i*6|0)|0,p=_+(i*6|0)+2|0,_=_+(i*6|0)+4|0,uo(f,(D[S>>0]|D[S+1>>0]<<8)&65535,(D[p>>0]|D[p+1>>0]<<8)&65535,(D[_>>0]|D[_+1>>0]<<8)&65535),_u(e,f),r=r-((D[p>>0]|D[p+1>>0]<<8)&65535)|0,i=i+1|0;while(i>>>0<((D[c>>0]|D[c+1>>0]<<8)&65535)>>>0)}(r|0)<0&&(S=Yt(8)|0,gu(S),Jt(S|0,2688,8)),r|0&&(uo(f,0,r,2),_u(e,f)),y=d}function oA(e,i){e=e|0,i=i|0;var r=0,l=0;return r=y,y=y+16|0,l=r+1|0,m[l>>0]=m[r>>0]|0,AA(e,i,l),y=r,e|0}function aA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0;if(l=i+2|0,f=D[i>>0]|D[i+1>>0]<<8,m[e>>0]=f,m[e+1>>0]=f>>8,f=e+2|0,l=D[l>>0]|D[l+1>>0]<<8,m[f>>0]=l,m[f+1>>0]=l>>8,m[e+4>>0]=m[i+4>>0]|0,f=i+6|0,m[e+5>>0]=m[i+5>>0]|0,l=i+8|0,r=e+6|0,f=D[f>>0]|D[f+1>>0]<<8,m[r>>0]=f,m[r+1>>0]=f>>8,r=i+12|0,f=e+8|0,l=D[l>>0]|D[l+1>>0]<<8|D[l+2>>0]<<16|D[l+3>>0]<<24,m[f>>0]=l,m[f+1>>0]=l>>8,m[f+2>>0]=l>>16,m[f+3>>0]=l>>24,f=e+12|0,r=D[r>>0]|D[r+1>>0]<<8|D[r+2>>0]<<16|D[r+3>>0]<<24,m[f>>0]=r,m[f+1>>0]=r>>8,m[f+2>>0]=r>>16,m[f+3>>0]=r>>24,f=i+16|0,r=f,r=D[r>>0]|D[r+1>>0]<<8|D[r+2>>0]<<16|D[r+3>>0]<<24,f=f+4|0,f=D[f>>0]|D[f+1>>0]<<8|D[f+2>>0]<<16|D[f+3>>0]<<24,l=e+16|0,d=l,m[d>>0]=r,m[d+1>>0]=r>>8,m[d+2>>0]=r>>16,m[d+3>>0]=r>>24,l=l+4|0,m[l>>0]=f,m[l+1>>0]=f>>8,m[l+2>>0]=f>>16,m[l+3>>0]=f>>24,l=i+32|0,f=i+24|0,d=f,d=D[d>>0]|D[d+1>>0]<<8|D[d+2>>0]<<16|D[d+3>>0]<<24,f=f+4|0,f=D[f>>0]|D[f+1>>0]<<8|D[f+2>>0]<<16|D[f+3>>0]<<24,r=e+24|0,c=r,m[c>>0]=d,m[c+1>>0]=d>>8,m[c+2>>0]=d>>16,m[c+3>>0]=d>>24,r=r+4|0,m[r>>0]=f,m[r+1>>0]=f>>8,m[r+2>>0]=f>>16,m[r+3>>0]=f>>24,r=i+34|0,f=e+32|0,l=D[l>>0]|D[l+1>>0]<<8,m[f>>0]=l,m[f+1>>0]=l>>8,c=e+34|0,e=D[c>>0]|D[c+1>>0]<<8|D[c+2>>0]<<16|D[c+3>>0]<<24,e?(fh(e),e=D[f>>0]|D[f+1>>0]<<8):e=l,l=uh((e&65535)*6|0)|0,m[c>>0]=l,m[c+1>>0]=l>>8,m[c+2>>0]=l>>16,m[c+3>>0]=l>>24,e<<16>>16&&(e=i+36|0,d=D[r>>0]|D[r+1>>0]<<8,m[l>>0]=d,m[l+1>>0]=d>>8,i=i+38|0,d=l+2|0,e=D[e>>0]|D[e+1>>0]<<8,m[d>>0]=e,m[d+1>>0]=e>>8,d=l+4|0,i=D[i>>0]|D[i+1>>0]<<8,m[d>>0]=i,m[d+1>>0]=i>>8,((D[f>>0]|D[f+1>>0]<<8)&65535)>1)){e=1;do i=r,r=r+6|0,d=D[c>>0]|D[c+1>>0]<<8|D[c+2>>0]<<16|D[c+3>>0]<<24,p=i+8|0,l=d+(e*6|0)|0,_=D[r>>0]|D[r+1>>0]<<8,m[l>>0]=_,m[l+1>>0]=_>>8,i=i+10|0,l=d+(e*6|0)+2|0,p=D[p>>0]|D[p+1>>0]<<8,m[l>>0]=p,m[l+1>>0]=p>>8,d=d+(e*6|0)+4|0,i=D[i>>0]|D[i+1>>0]<<8,m[d>>0]=i,m[d+1>>0]=i>>8,e=e+1|0;while(e>>>0<((D[f>>0]|D[f+1>>0]<<8)&65535)>>>0)}}function gu(e){e=e|0,ci(e,7354),n[e>>2]=4456}function lA(e){e=e|0,Xn(e),De(e)}function cA(e){e=e|0,Xn(e),De(e)}function _u(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0;p=y,y=y+32|0,c=p,f=e+4|0,r=n[f>>2]|0,d=e+8|0;do if((r|0)==(n[d>>2]|0))if(r=((r-(n[e>>2]|0)|0)/12|0)+1|0,l=mA(e)|0,l>>>0<r>>>0)Tn(e);else{_=n[e>>2]|0,S=((n[d>>2]|0)-_|0)/12|0,d=S<<1,hA(c,S>>>0<l>>>1>>>0?d>>>0<r>>>0?r:d:l,((n[f>>2]|0)-_|0)/12|0,e+8|0),d=c+8|0,f=n[d>>2]|0,n[f>>2]=n[i>>2],n[f+4>>2]=n[i+4>>2],n[f+8>>2]=n[i+8>>2],n[d>>2]=(n[d>>2]|0)+12,dA(e,c),pA(c);break}else uA(c,e,1),S=c+4|0,_=n[S>>2]|0,n[_>>2]=n[i>>2],n[_+4>>2]=n[i+4>>2],n[_+8>>2]=n[i+8>>2],n[S>>2]=(n[S>>2]|0)+12,fA(c);while(!1);y=p}function uo(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0,n[e>>2]=i,n[e+4>>2]=r,n[e+8>>2]=l}function uA(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,i=n[i+4>>2]|0,n[e+4>>2]=i,n[e+8>>2]=i+(r*12|0)}function fA(e){e=e|0,n[(n[e>>2]|0)+4>>2]=n[e+4>>2]}function hA(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0;c=e+12|0,n[c>>2]=0,n[e+16>>2]=l;do if(i)if(i>>>0>357913941)c=Yt(8)|0,ki(c,6723),n[c>>2]=5956,Jt(c|0,3928,123);else{l=ze(i*12|0)|0;break}else l=0;while(!1);n[e>>2]=l,r=l+(r*12|0)|0,n[e+8>>2]=r,n[e+4>>2]=r,n[c>>2]=l+(i*12|0)}function dA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;l=n[e>>2]|0,d=e+4|0,f=i+4|0,c=(n[d>>2]|0)-l|0,r=(n[f>>2]|0)+(((c|0)/-12|0)*12|0)|0,n[f>>2]=r,(c|0)>0?(Hn(r|0,l|0,c|0)|0,l=f,r=n[f>>2]|0):l=f,f=n[e>>2]|0,n[e>>2]=r,n[l>>2]=f,f=i+8|0,c=n[d>>2]|0,n[d>>2]=n[f>>2],n[f>>2]=c,f=e+8|0,d=i+12|0,e=n[f>>2]|0,n[f>>2]=n[d>>2],n[d>>2]=e,n[i>>2]=n[l>>2]}function pA(e){e=e|0;var i=0,r=0,l=0;i=n[e+4>>2]|0,r=e+8|0,l=n[r>>2]|0,(l|0)!=(i|0)&&(n[r>>2]=l+(~(((l+-12-i|0)>>>0)/12|0)*12|0)),i=n[e>>2]|0,i|0&&St(i,(n[e+12>>2]|0)-i|0)}function mA(e){return e=e|0,357913941}function AA(e,i,r){e=e|0,i=i|0,r=r|0;var l=0;gA(e),n[e>>2]=n[i>>2],r=i+4|0,n[e+4>>2]=n[r>>2],l=i+8|0,n[e+8>>2]=n[l>>2],n[l>>2]=0,n[r>>2]=0,n[i>>2]=0}function gA(e){e=e|0;var i=0,r=0,l=0,c=0;i=n[e>>2]|0,r=i,i|0&&(l=e+4|0,n[l>>2]=r,c=e+8|0,St(i,(n[c>>2]|0)-r|0),n[c>>2]=0,n[l>>2]=0,n[e>>2]=0)}function N0(e){e=e|0,ci(e,7660),n[e>>2]=4496}function vu(e,i){e=e|0,i=i|0,ci(e,i),n[e>>2]=4516}function _A(e){e=e|0,ci(e,7704),n[e>>2]=4536}function vA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0;r=e+4|0,c=n[e>>2]|0,l=(n[r>>2]|0)-c>>3,l>>>0>=i>>>0?l>>>0>i>>>0&&(n[r>>2]=c+(i<<3)):SA(e,i-l|0)}function yu(e,i){e=e|0,i=i|0,n[e>>2]=i,n[e+4>>2]=0,n[e+8>>2]=-1}function On(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0;n[e+4>>2]=i,n[e+8>>2]=r,n[e+12>>2]=l,n[e+16>>2]=c,n[e+36>>2]=0,n[e+40>>2]=0,n[e+44>>2]=0,Mu(e+48|0),n[e+68>>2]=0,n[e+72>>2]=0,n[e+76>>2]=0;do if(c){for(l=e+20|0,n[l>>2]=0,n[e+24>>2]=c,r=c,f=0;r=r>>>1,i=f+1|0,r;)f=i;n[l>>2]=(1<<f|0)==(c|0)?f:i,r=c>>>1,n[e+28>>2]=0-r,r=c+-1-r|0}else if(r=e+20|0,(i+-1|0)>>>0<31){n[r>>2]=i,c=1<<i,n[e+24>>2]=c,r=c>>>1,n[e+28>>2]=0-r,r=c+-1-r|0;break}else{n[r>>2]=32,n[e+24>>2]=0,n[e+28>>2]=-2147483648,r=2147483647;break}while(!1);n[e+32>>2]=r,n[e>>2]=0}function L0(e){e=e|0;var i=0;i=((fo(n[e>>2]|0)|0)&255)<<24,i=((fo(n[e>>2]|0)|0)&255)<<16|i,i=i|((fo(n[e>>2]|0)|0)&255)<<8,n[e+4>>2]=i|(fo(n[e>>2]|0)|0)&255}function zn(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0,rt=0,Ce=0,_e=0;$=y,y=y+64|0,q=$+44|0,ee=$,S=e+36|0,F=e+40|0;e:do if((n[S>>2]|0)==(n[F>>2]|0)){N=e+8|0;t:do if(!(n[N>>2]|0))z=e+20|0;else{for(c=e+20|0,f=e+44|0,d=q+4|0,p=e+44|0,_=q+8|0,l=0;;){if(_n(ee,(n[c>>2]|0)+1|0,0,0),i=n[F>>2]|0,i>>>0<(n[f>>2]|0)>>>0)Eu(q,S,1),na(n[d>>2]|0,ee),n[d>>2]=(n[d>>2]|0)+44,wu(q);else{if(i=((i-(n[S>>2]|0)|0)/44|0)+1|0,r=Uu(S)|0,r>>>0<i>>>0)break;rt=n[S>>2]|0,_e=((n[f>>2]|0)-rt|0)/44|0,Ce=_e<<1,Tu(q,_e>>>0<r>>>1>>>0?Ce>>>0<i>>>0?i:Ce:r,((n[F>>2]|0)-rt|0)/44|0,p),na(n[_>>2]|0,ee),n[_>>2]=(n[_>>2]|0)+44,Ru(S,q),Cu(q)}if(sn(ee),l=l+1|0,l>>>0>=(n[N>>2]|0)>>>0){z=c;break t}}Tn(S)}while(!1);if(n[z>>2]|0){for(d=e+12|0,p=e+68|0,_=e+72|0,S=e+76|0,F=q+4|0,c=e+76|0,f=q+8|0,l=1;;){if(i=n[d>>2]|0,_n(ee,1<<(l>>>0>i>>>0?i:l),0,0),i=n[_>>2]|0,i>>>0<(n[S>>2]|0)>>>0)Eu(q,p,1),na(n[F>>2]|0,ee),n[F>>2]=(n[F>>2]|0)+44,wu(q);else{if(i=((i-(n[p>>2]|0)|0)/44|0)+1|0,r=Uu(p)|0,r>>>0<i>>>0)break;_e=n[p>>2]|0,rt=((n[S>>2]|0)-_e|0)/44|0,Ce=rt<<1,Tu(q,rt>>>0<r>>>1>>>0?Ce>>>0<i>>>0?i:Ce:r,((n[_>>2]|0)-_e|0)/44|0,c),na(n[f>>2]|0,ee),n[f>>2]=(n[f>>2]|0)+44,Ru(p,q),Cu(q)}if(sn(ee),l=l+1|0,l>>>0>(n[z>>2]|0)>>>0)break e}Tn(p)}}while(!1);y=$}function wn(e,i,r,l){return e=e|0,i=i|0,r=r|0,l=l|0,r=(BA(e,i,(n[e+36>>2]|0)+(l*44|0)|0)|0)+r|0,i=n[e+24>>2]|0,(r|0)<0?r+i|0:r-(r>>>0<i>>>0?0:i)|0}function Gn(e){e=e|0,ta(e+68|0),ta(e+36|0)}function xu(e){e=e|0}function yA(e){e=e|0,Xn(e),De(e)}function xA(e){e=e|0,Xn(e),De(e)}function MA(e){e=e|0,Xn(e),De(e)}function SA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0;p=y,y=y+32|0,c=p,f=e+8|0,d=e+4|0,r=n[d>>2]|0;do if((n[f>>2]|0)-r>>3>>>0<i>>>0)if(r=(r-(n[e>>2]|0)>>3)+i|0,l=FA(e)|0,l>>>0<r>>>0)Tn(e);else{_=n[e>>2]|0,S=(n[f>>2]|0)-_|0,f=S>>2,wA(c,S>>3>>>0<l>>>1>>>0?f>>>0<r>>>0?r:f:l,(n[d>>2]|0)-_>>3,e+8|0),TA(c,i),RA(e,c),CA(c);break}else EA(e,i);while(!1);y=p}function EA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0;c=y,y=y+16|0,l=c,UA(l,e,i),e=l+4|0,i=n[e>>2]|0,r=n[l+8>>2]|0,(i|0)!=(r|0)&&(r=r+-8-i|0,Or(i|0,0,r+8&-8|0)|0,n[e>>2]=i+((r>>>3)+1<<3)),bA(l),y=c}function wA(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0;c=e+12|0,n[c>>2]=0,n[e+16>>2]=l;do if(i)if(i>>>0>536870911)c=Yt(8)|0,ki(c,6723),n[c>>2]=5956,Jt(c|0,3928,123);else{l=ze(i<<3)|0;break}else l=0;while(!1);n[e>>2]=l,r=l+(r<<3)|0,n[e+8>>2]=r,n[e+4>>2]=r,n[c>>2]=l+(i<<3)}function TA(e,i){e=e|0,i=i|0;var r=0,l=0;l=y,y=y+16|0,r=l,PA(r,e+8|0,i),e=n[r>>2]|0,i=n[r+4>>2]|0,(e|0)!=(i|0)&&(i=i+-8-e|0,Or(e|0,0,i+8&-8|0)|0,n[r>>2]=e+((i>>>3)+1<<3)),NA(r),y=l}function RA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;l=n[e>>2]|0,d=e+4|0,f=i+4|0,c=(n[d>>2]|0)-l|0,r=(n[f>>2]|0)+(0-(c>>3)<<3)|0,n[f>>2]=r,(c|0)>0?(Hn(r|0,l|0,c|0)|0,l=f,r=n[f>>2]|0):l=f,f=n[e>>2]|0,n[e>>2]=r,n[l>>2]=f,f=i+8|0,c=n[d>>2]|0,n[d>>2]=n[f>>2],n[f>>2]=c,f=e+8|0,d=i+12|0,e=n[f>>2]|0,n[f>>2]=n[d>>2],n[d>>2]=e,n[i>>2]=n[l>>2]}function CA(e){e=e|0;var i=0,r=0,l=0;i=n[e+4>>2]|0,r=e+8|0,l=n[r>>2]|0,(l|0)!=(i|0)&&(n[r>>2]=l+(~((l+-8-i|0)>>>3)<<3)),i=n[e>>2]|0,i|0&&St(i,(n[e+12>>2]|0)-i|0)}function UA(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,i=n[i+4>>2]|0,n[e+4>>2]=i,n[e+8>>2]=i+(r<<3)}function bA(e){e=e|0,n[(n[e>>2]|0)+4>>2]=n[e+4>>2]}function FA(e){return e=e|0,536870911}function PA(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=n[i>>2],n[e+4>>2]=(n[i>>2]|0)+(r<<3),n[e+8>>2]=i}function NA(e){e=e|0,n[n[e+8>>2]>>2]=n[e>>2]}function Mu(e){e=e|0,n[e+12>>2]=1,n[e+16>>2]=2,n[e+8>>2]=4096,n[e+4>>2]=4,n[e>>2]=4}function ta(e){e=e|0;var i=0,r=0,l=0;if(r=n[e>>2]|0,r|0){if(l=e+4|0,i=n[l>>2]|0,(i|0)==(r|0))i=r;else{do i=i+-44|0,sn(i);while((i|0)!=(r|0));i=n[e>>2]|0}n[l>>2]=r,St(i,(n[e+8>>2]|0)-i|0)}}function sn(e){e=e|0;var i=0;i=n[e+8>>2]|0,i|0&&Ko(i),i=n[e+12>>2]|0,i|0&&Ko(i),i=n[e+16>>2]|0,i|0&&Ko(i)}function fo(e){e=e|0;var i=0,r=0;return r=e+4|0,i=n[r>>2]|0,(i|0)>=(n[e+8>>2]|0)&&(Su(e),i=n[r>>2]|0),e=n[e+12>>2]|0,n[r>>2]=i+1,m[e+i>>0]|0}function Su(e){e=e|0;var i=0;if(n[e+4>>2]=0,Ur(n[e>>2]|0,n[e+12>>2]|0,1048576),i=LA(n[e>>2]|0)|0,n[e+8>>2]=i,!i)i=Yt(8)|0,IA(i),Jt(i|0,2752,8);else return}function LA(e){return e=e|0,n[e+16>>2]|0}function IA(e){e=e|0,ci(e,7769),n[e>>2]=4556}function DA(e){e=e|0,Xn(e),De(e)}function _n(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0,d=0;if(n[e>>2]=i,m[e+4>>0]=r&1,f=e+8|0,n[f>>2]=0,d=e+12|0,n[d>>2]=0,c=e+16|0,n[c>>2]=0,(i+-2|0)>>>0>2046&&(e=Yt(8)|0,ci(e,7789),Jt(e|0,3912,8)),n[e+32>>2]=i+-1,i>>>0>16&(r^1)){for(r=3;1<<r+2>>>0<i>>>0;)r=r+1|0;i=1<<r,n[e+36>>2]=i,n[e+40>>2]=15-r,n[c>>2]=Cr((i<<2)+8|0)|0,i=n[e>>2]|0}else n[c>>2]=0,n[e+40>>2]=0,n[e+36>>2]=0;if(n[f>>2]=Cr(i<<2)|0,c=Cr(n[e>>2]<<2)|0,n[d>>2]=c,n[e+20>>2]=0,i=n[e>>2]|0,r=e+24|0,n[r>>2]=i,i=(i|0)!=0,l){if(i){i=0;do n[c+(i<<2)>>2]=n[l+(i<<2)>>2],i=i+1|0;while(i>>>0<(n[e>>2]|0)>>>0)}}else if(i){i=0;do n[c+(i<<2)>>2]=1,i=i+1|0;while(i>>>0<(n[e>>2]|0)>>>0)}D0(e),l=((n[e>>2]|0)+6|0)>>>1,n[r>>2]=l,n[e+28>>2]=l}function Eu(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,i=n[i+4>>2]|0,n[e+4>>2]=i,n[e+8>>2]=i+(r*44|0)}function wu(e){e=e|0,n[(n[e>>2]|0)+4>>2]=n[e+4>>2]}function na(e,i){e=e|0,i=i|0;var r=0;n[e>>2]=n[i>>2],m[e+4>>0]=m[i+4>>0]|0,r=i+8|0,n[e+8>>2]=n[r>>2],n[e+12>>2]=n[i+12>>2],n[e+16>>2]=n[i+16>>2],n[e+20>>2]=n[i+20>>2],n[e+24>>2]=n[i+24>>2],n[e+28>>2]=n[i+28>>2],n[e+32>>2]=n[i+32>>2],n[e+36>>2]=n[i+36>>2],n[e+40>>2]=n[i+40>>2],n[r>>2]=0,n[r+4>>2]=0,n[r+8>>2]=0}function Tu(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0;c=e+12|0,n[c>>2]=0,n[e+16>>2]=l;do if(i)if(i>>>0>97612893)c=Yt(8)|0,ki(c,6723),n[c>>2]=5956,Jt(c|0,3928,123);else{l=ze(i*44|0)|0;break}else l=0;while(!1);n[e>>2]=l,r=l+(r*44|0)|0,n[e+8>>2]=r,n[e+4>>2]=r,n[c>>2]=l+(i*44|0)}function Ru(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0;if(p=n[e>>2]|0,_=e+4|0,r=n[_>>2]|0,d=i+4|0,(r|0)==(p|0))c=d,f=e,l=n[d>>2]|0,r=p;else{l=n[d>>2]|0;do r=r+-44|0,I0(l+-44|0,r),l=(n[d>>2]|0)+-44|0,n[d>>2]=l;while((r|0)!=(p|0));c=d,f=e,r=n[e>>2]|0}n[f>>2]=l,n[c>>2]=r,p=i+8|0,d=n[_>>2]|0,n[_>>2]=n[p>>2],n[p>>2]=d,p=e+8|0,_=i+12|0,e=n[p>>2]|0,n[p>>2]=n[_>>2],n[_>>2]=e,n[i>>2]=n[c>>2]}function Cu(e){e=e|0;var i=0,r=0,l=0,c=0;if(r=n[e+4>>2]|0,l=e+8|0,i=n[l>>2]|0,(i|0)!=(r|0))do c=i+-44|0,n[l>>2]=c,sn(c),i=n[l>>2]|0;while((i|0)!=(r|0));i=n[e>>2]|0,i|0&&St(i,(n[e+12>>2]|0)-i|0)}function Uu(e){return e=e|0,97612893}function I0(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;r=n[i>>2]|0,n[e>>2]=r,m[e+4>>0]=m[i+4>>0]|0,n[e+20>>2]=n[i+20>>2],n[e+24>>2]=n[i+24>>2],n[e+28>>2]=n[i+28>>2],n[e+32>>2]=n[i+32>>2],f=e+36|0,n[f>>2]=n[i+36>>2],n[e+40>>2]=n[i+40>>2],r=r<<2,l=Cr(r)|0,n[e+8>>2]=l,c=n[e>>2]|0,c|0&&ti(l|0,n[i+8>>2]|0,c<<2|0)|0,r=Cr(r)|0,n[e+12>>2]=r,l=n[e>>2]|0,l|0&&ti(r|0,n[i+12>>2]|0,l<<2|0)|0,r=n[f>>2]|0,r?(l=Cr((r<<2)+8|0)|0,n[e+16>>2]=l,r=(n[f>>2]<<2)+8|0,r|0&&ti(l|0,n[i+16>>2]|0,r|0)|0):n[e+16>>2]=0}function D0(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0;if(ee=e+24|0,c=e+20|0,i=(n[c>>2]|0)+(n[ee>>2]|0)|0,n[c>>2]=i,i>>>0>32768)if(n[c>>2]=0,!(n[e>>2]|0))i=0;else{l=n[e+12>>2]|0,r=0;do N=l+(r<<2)|0,i=((n[N>>2]|0)+1|0)>>>1,n[N>>2]=i,i=(n[c>>2]|0)+i|0,n[c>>2]=i,r=r+1|0;while(r>>>0<(n[e>>2]|0)>>>0)}N=2147483648/(i>>>0)|0;do if(!(m[e+4>>0]|0)&&(z=e+36|0,(n[z>>2]|0)!=0)){if(n[e>>2]|0){p=n[e+8>>2]|0,_=n[e+12>>2]|0,S=e+40|0,F=e+16|0,i=0,f=0,d=0;do{if(r=(wt(f,N)|0)>>>16,n[p+(d<<2)>>2]=r,f=(n[_+(d<<2)>>2]|0)+f|0,r=r>>>(n[S>>2]|0),i>>>0<r>>>0){l=d+-1|0,c=n[F>>2]|0;do i=i+1|0,n[c+(i<<2)>>2]=l;while((i|0)!=(r|0));i=r}d=d+1|0}while(d>>>0<(n[e>>2]|0)>>>0);if(r=n[F>>2]|0,n[r>>2]=0,i>>>0>(n[z>>2]|0)>>>0){i=e;break}}else r=n[e+16>>2]|0,n[r>>2]=0,i=0;do i=i+1|0,n[r+(i<<2)>>2]=(n[e>>2]|0)+-1;while(i>>>0<=(n[z>>2]|0)>>>0);i=e}else q=7;while(!1);if((q|0)==7)if(!(n[e>>2]|0))i=e;else{l=n[e+8>>2]|0,c=n[e+12>>2]|0,i=0,r=0;do n[l+(i<<2)>>2]=(wt(r,N)|0)>>>16,r=(n[c+(i<<2)>>2]|0)+r|0,i=i+1|0;while(i>>>0<(n[e>>2]|0)>>>0);i=e}q=((n[ee>>2]|0)*5|0)>>>2,z=(n[i>>2]<<3)+48|0,q=q>>>0>z>>>0?z:q,n[ee>>2]=q,n[e+28>>2]=q}function BA(e,i,r){e=e|0,i=i|0,r=r|0;var l=0;r=vn(i,r)|0,n[e>>2]=r;do if(r){if(r>>>0>=32){r=n[e+28>>2]|0;break}if(l=n[e+12>>2]|0,r>>>0>l>>>0?(l=r-l|0,r=vn(i,(n[e+68>>2]|0)+((r+-1|0)*44|0)|0)|0,l=r<<l|(bu(i,l)|0)):l=vn(i,(n[e+68>>2]|0)+((r+-1|0)*44|0)|0)|0,r=n[e>>2]|0,(l|0)<(1<<r+-1|0)){r=l+1+(-1<<r)|0;break}else{r=l+1|0;break}}else r=kA(i,e+48|0)|0;while(!1);return r|0}function vn(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0;if(z=e+8|0,N=n[z>>2]|0,c=n[i+16>>2]|0,c){if(l=e+4|0,r=n[l>>2]|0,F=N>>>15,n[z>>2]=F,_=(r>>>0)/(F>>>0)|0,p=_>>>(n[i+40>>2]|0),f=n[c+(p<<2)>>2]|0,p=(n[c+(p+1<<2)>>2]|0)+1|0,d=f+1|0,S=n[i+8>>2]|0,p>>>0>d>>>0){c=f,f=p;do d=(f+c|0)>>>1,p=(n[S+(d<<2)>>2]|0)>>>0>_>>>0,c=p?c:d,f=p?d:f,d=c+1|0;while(f>>>0>d>>>0);f=c}c=wt(n[S+(f<<2)>>2]|0,F)|0,(f|0)==(n[i+32>>2]|0)?d=N:d=wt(n[S+(d<<2)>>2]|0,F)|0}else{S=N>>>15,n[z>>2]=S,p=n[i>>2]|0,F=n[i+8>>2]|0,l=e+4|0,r=n[l>>2]|0,_=p>>>1,c=0,d=N,f=0;do q=wt(n[F+(_<<2)>>2]|0,S)|0,N=q>>>0>r>>>0,d=N?q:d,c=N?c:q,f=N?f:_,p=N?_:p,_=(f+p|0)>>>1;while((_|0)!=(f|0))}return n[l>>2]=r-c,q=d-c|0,n[z>>2]=q,q>>>0<16777216&&ia(e),z=(n[i+12>>2]|0)+(f<<2)|0,n[z>>2]=(n[z>>2]|0)+1,z=i+28|0,q=(n[z>>2]|0)+-1|0,n[z>>2]=q,q||D0(i),f|0}function bu(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;return i>>>0>19?(r=(B0(e)|0)&65535,(bu(e,i+-16|0)|0)<<16|r|0):(l=e+4|0,c=n[l>>2]|0,f=e+8|0,r=(n[f>>2]|0)>>>i,n[f>>2]=r,i=(c>>>0)/(r>>>0)|0,n[l>>2]=c-(wt(i,r)|0),r>>>0<16777216&&ia(e),i|0)}function kA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0;return l=e+8|0,c=n[l>>2]|0,r=wt(c>>>13,n[i+8>>2]|0)|0,f=e+4|0,d=n[f>>2]|0,p=d>>>0>=r>>>0,p?(n[f>>2]=d-r,r=c-r|0,n[l>>2]=r):(n[l>>2]=r,d=i+12|0,n[d>>2]=(n[d>>2]|0)+1),r>>>0<16777216&&ia(e),d=i+4|0,e=(n[d>>2]|0)+-1|0,n[d>>2]=e,e||Fu(i),p&1|0}function ia(e){e=e|0;var i=0,r=0,l=0,c=0;i=e+4|0,r=e+8|0,l=n[i>>2]|0;do l=l<<8|(fo(n[e>>2]|0)|0)&255,n[i>>2]=l,c=n[r>>2]<<8,n[r>>2]=c;while(c>>>0<16777216)}function B0(e){e=e|0;var i=0,r=0,l=0,c=0;return r=e+4|0,c=n[r>>2]|0,i=e+8|0,l=(n[i>>2]|0)>>>16,n[i>>2]=l,i=(c>>>0)/(l>>>0)|0,n[r>>2]=c-(wt(i,l)|0),ia(e),i&65535|0}function Fu(e){e=e|0;var i=0,r=0,l=0,c=0,f=0;c=n[e>>2]|0,r=e+16|0,i=(n[r>>2]|0)+c|0,n[r>>2]=i,i>>>0>8192?(l=(i+1|0)>>>1,n[r>>2]=l,f=e+12|0,i=((n[f>>2]|0)+1|0)>>>1,n[f>>2]=i,(i|0)==(l|0)?(i=l+1|0,n[r>>2]=i,r=i,i=l):r=l):(r=i,i=n[e+12>>2]|0),n[e+8>>2]=(wt(i,2147483648/(r>>>0)|0)|0)>>>18,f=c*5|0,f=f>>>0>259?64:f>>>2,n[e>>2]=f,n[e+4>>2]=f}function VA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0;F=y,y=y+32|0,f=F+16|0,d=F+8|0,p=F,_=e+336|0,l=_,c=e+259|0,!(n[l+4>>2]|0)&&(n[l>>2]|0)==(D[c>>0]|D[c+1>>0]<<8|D[c+2>>0]<<16|D[c+3>>0]<<24|0)?(l=e+320|0,r=n[e+320>>2]|0,S=5):(l=e+320|0,r=n[l>>2]|0,c=r,r|0&&n[e+312>>2]|0||(r=c,S=5)),(S|0)==5&&(S=e+320|0,n[f>>2]=r,n[S>>2]=0,r=e+324|0,n[f+4>>2]=n[r>>2],n[r>>2]=0,Qo(f),c=e+312|0,n[f>>2]=n[c>>2],n[c>>2]=0,N=e+316|0,n[f+4>>2]=n[N>>2],n[N>>2]=0,b0(f),z=ze(12)|0,yu(z,e+4|0),n[p>>2]=0,n[f>>2]=n[p>>2],zA(d,z,f),z=n[d>>2]|0,n[d>>2]=n[c>>2],n[c>>2]=z,z=d+4|0,p=n[z>>2]|0,n[z>>2]=n[N>>2],n[N>>2]=p,b0(d),OA(d,n[c>>2]|0,e+300|0),c=n[d>>2]|0,N=d+4|0,p=n[N>>2]|0,n[d>>2]=0,n[N>>2]=0,n[f>>2]=n[S>>2],n[S>>2]=c,n[f+4>>2]=n[r>>2],n[r>>2]=p,Qo(f),Qo(d),r=e+328|0,p=r,p=ei(n[p>>2]|0,n[p+4>>2]|0,1,0)|0,S=Pt()|0,n[r>>2]=p,n[r+4>>2]=S,r=_,n[r>>2]=0,n[r+4>>2]=0,r=n[l>>2]|0),wo[n[n[r>>2]>>2]&63](r,i)|0,S=_,S=ei(n[S>>2]|0,n[S+4>>2]|0,1,0)|0,N=Pt()|0,z=_,n[z>>2]=S,n[z+4>>2]=N,y=F}function OA(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0;d=y,y=y+64|0,l=d+56|0,c=d,f=YA(r)|0,(f|0)==-1&&(d=Yt(8)|0,JA(d),Jt(d|0,2784,8)),r=Pu(r)|0;e:do if(r)jA(l,i),$A(n[l>>2]|0),(f|2|0)==3&&qA(n[l>>2]|0),(f|1|0)==3&&QA(n[l>>2]|0),f=n[l>>2]|0,eg(c,r),KA(f,c),Nu(c),n[e>>2]=n[l>>2],f=l+4|0,n[e+4>>2]=n[f>>2],n[l>>2]=0,n[f>>2]=0,tg(l);else switch(f|0){case 0:{f=ze(4788)|0,ig(f),ng(e,i,f);break e}case 1:{f=ze(5116)|0,sg(f),rg(e,i,f);break e}case 2:{f=ze(5104)|0,ag(f),og(e,i,f);break e}case 3:{f=ze(5432)|0,cg(f),lg(e,i,f);break e}default:{n[e>>2]=0,n[e+4>>2]=0;break e}}while(!1);y=d}function zA(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4576,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,GA(e,l),y=r}function GA(e,i){e=e|0,i=i|0}function WA(e){e=e|0,un(e),De(e)}function XA(e){e=e|0,e=n[e+12>>2]|0,e|0&&(xu(e),De(e))}function HA(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==7983?e+12|0:0)|0}function ZA(e){e=e|0,St(e,16)}function YA(e){e=e|0;var i=0,r=0;i=(n[e+4>>2]|0)-(n[e>>2]|0)|0;e:do if(i|0&&(r=((i|0)/12|0)+(((Pu(e)|0)!=0)<<31>>31)|0,(r|0)!=0)&&(i=n[e>>2]|0,!(ug(i,fg()|0)|0))){switch(r|0){case 1:{e=0;break e}case 2:{if(ho((n[e>>2]|0)+12|0,Lu()|0)|0){e=1;break e}if(ho((n[e>>2]|0)+12|0,Iu()|0)|0){e=2;break e}break}case 3:{if(ho((n[e>>2]|0)+12|0,Lu()|0)|0&&(r=(n[e>>2]|0)+24|0,ho(r,Iu()|0)|0)){e=3;break e}break}default:}e=-1}else e=-1;while(!1);return e|0}function JA(e){e=e|0,ci(e,8131),n[e>>2]=4604}function Pu(e){e=e|0;var i=0,r=0;return i=n[e+4>>2]|0,(i|0)!=(n[e>>2]|0)&&(r=i,(n[r+-12>>2]|0)==0)&&(n[r+-4>>2]|0)==2?e=n[r+-8>>2]|0:e=0,e|0}function jA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;r=y,y=y+16|0,l=r+4|0,f=r,c=ze(24)|0,dg(c,i),n[f>>2]=0,n[l>>2]=n[f>>2],pg(e,c,l),y=r}function $A(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(4792)|0,Sg(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],Eg(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function qA(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(336)|0,Hg(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],Zg(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function QA(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(324)|0,u_(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],f_(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function KA(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,d=_+12|0,p=_,l=_+8|0,f=ze(64)|0,x_(f,n[e+4>>2]|0,i),c=e+8|0,n[l>>2]=0,n[d>>2]=n[l>>2],M_(p,f,d),f=e+12|0,i=n[f>>2]|0,l=e+16|0;do if(i>>>0>=(n[l>>2]|0)>>>0)if(i=(i-(n[c>>2]|0)>>3)+1|0,r=wi(c)|0,r>>>0<i>>>0)Tn(c);else{S=n[c>>2]|0,F=(n[l>>2]|0)-S|0,l=F>>2,Mi(d,F>>3>>>0<r>>>1>>>0?l>>>0<i>>>0?i:l:r,(n[f>>2]|0)-S>>3,e+16|0),e=d+8|0,f=n[e>>2]|0,n[f>>2]=n[p>>2],l=p+4|0,n[f+4>>2]=n[l>>2],n[p>>2]=0,n[l>>2]=0,n[e>>2]=f+8,Si(c,d),Ei(d);break}else yi(d,c,1),F=d+4|0,S=n[F>>2]|0,n[S>>2]=n[p>>2],e=p+4|0,n[S+4>>2]=n[e>>2],n[p>>2]=0,n[e>>2]=0,n[F>>2]=S+8,xi(d);while(!1);Dn(p),y=_}function eg(e,i){e=e|0,i=i|0;var r=0,l=0;r=y,y=y+48|0,l=r,n[e>>2]=i,m[e+4>>0]=0,gf(e+8|0,i),gf(e+20|0,i),_n(l,256,0,0),Y_(e+32|0,i,l),sn(l),y=r}function Nu(e){e=e|0,$_(e+32|0),sf(e+20|0),sf(e+8|0)}function tg(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function ng(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0;l=y,y=y+16|0,c=l+4|0,d=l,f=ze(12)|0,q_(f,i,r),n[d>>2]=0,n[c>>2]=n[d>>2],Q_(e,f,c),y=l}function ig(e){e=e|0,po(e),H0(e+4784|0)}function rg(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0;l=y,y=y+16|0,c=l+4|0,d=l,f=ze(12)|0,a1(f,i,r),n[d>>2]=0,n[c>>2]=n[d>>2],l1(e,f,c),y=l}function sg(e){e=e|0,po(e),v1(e+4784|0)}function og(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0;l=y,y=y+16|0,c=l+4|0,d=l,f=ze(12)|0,y1(f,i,r),n[d>>2]=0,n[c>>2]=n[d>>2],x1(e,f,c),y=l}function ag(e){e=e|0,po(e),Sf(e+4784|0)}function lg(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0;l=y,y=y+16|0,c=l+4|0,d=l,f=ze(12)|0,b1(f,i,r),n[d>>2]=0,n[c>>2]=n[d>>2],F1(e,f,c),y=l}function cg(e){e=e|0,po(e),G1(e+4784|0)}function ug(e,i){return e=e|0,i=i|0,(ho(e,i)|0)^1|0}function fg(){return!(m[21456]|0)&&Br(21456)|0&&(uo(21536,6,20,2),kr(21456)),21536}function ho(e,i){return e=e|0,i=i|0,(n[e>>2]|0)==(n[i>>2]|0)&&(n[e+8>>2]|0)==(n[i+8>>2]|0)?e=(n[e+4>>2]|0)==(n[i+4>>2]|0):e=0,e|0}function Lu(){return!(m[21464]|0)&&Br(21464)|0&&(uo(21548,7,8,2),kr(21464)),21548}function Iu(){return!(m[21472]|0)&&Br(21472)|0&&(uo(21560,8,6,2),kr(21472)),21560}function hg(e){e=e|0,Xn(e),De(e)}function dg(e,i){e=e|0,i=i|0,ds(e),n[e>>2]=4624,n[e+4>>2]=i,n[e+8>>2]=0,n[e+12>>2]=0,n[e+16>>2]=0,m[e+20>>0]=1}function pg(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4664,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,_g(e,l),y=r}function ds(e){e=e|0,n[e>>2]=4644}function mg(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0;if(_=y,y=y+16|0,f=_,r=n[e+8>>2]|0,d=n[e+12>>2]|0,(r|0)!=(d|0)){p=f+4|0;do l=n[r>>2]|0,n[f>>2]=l,c=n[r+4>>2]|0,n[p>>2]=c,c|0&&(c=c+4|0,n[c>>2]=(n[c>>2]|0)+1),i=wo[n[(n[l>>2]|0)+12>>2]&63](l,i)|0,Dn(f),r=r+8|0;while((r|0)!=(d|0))}return r=e+20|0,m[r>>0]|0&&(m[r>>0]=0,L0(n[e+4>>2]|0)),y=_,i|0}function Du(e){e=e|0,n[e>>2]=4624,Bu(e+8|0),br(e)}function Ag(e){e=e|0,Du(e),De(e)}function br(e){e=e|0}function gg(e){e=e|0,fu()}function Dn(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function Bu(e){e=e|0;var i=0,r=0,l=0;if(r=n[e>>2]|0,r|0){if(l=e+4|0,i=n[l>>2]|0,(i|0)==(r|0))i=r;else{do i=i+-8|0,Dn(i);while((i|0)!=(r|0));i=n[e>>2]|0}n[l>>2]=r,St(i,(n[e+8>>2]|0)-i|0)}}function _g(e,i){e=e|0,i=i|0}function vg(e){e=e|0,un(e),De(e)}function yg(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+8>>2]&255](e)}function xg(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==8546?e+12|0:0)|0}function Mg(e){e=e|0,St(e,16)}function Sg(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=4692,n[e+4>>2]=i,po(e+8|0)}function Eg(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4740,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function yi(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,i=n[i+4>>2]|0,n[e+4>>2]=i,n[e+8>>2]=i+(r<<3)}function xi(e){e=e|0,n[(n[e>>2]|0)+4>>2]=n[e+4>>2]}function Mi(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0;c=e+12|0,n[c>>2]=0,n[e+16>>2]=l;do if(i)if(i>>>0>536870911)c=Yt(8)|0,ki(c,6723),n[c>>2]=5956,Jt(c|0,3928,123);else{l=ze(i<<3)|0;break}else l=0;while(!1);n[e>>2]=l,r=l+(r<<3)|0,n[e+8>>2]=r,n[e+4>>2]=r,n[c>>2]=l+(i<<3)}function Si(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0;if(p=n[e>>2]|0,_=e+4|0,r=n[_>>2]|0,d=i+4|0,(r|0)==(p|0))c=d,f=e,l=n[d>>2]|0,r=p;else{l=n[d>>2]|0;do f=r,r=r+-8|0,n[l+-8>>2]=n[r>>2],f=f+-4|0,n[l+-4>>2]=n[f>>2],n[r>>2]=0,n[f>>2]=0,l=(n[d>>2]|0)+-8|0,n[d>>2]=l;while((r|0)!=(p|0));c=d,f=e,r=n[e>>2]|0}n[f>>2]=l,n[c>>2]=r,p=i+8|0,d=n[_>>2]|0,n[_>>2]=n[p>>2],n[p>>2]=d,p=e+8|0,_=i+12|0,e=n[p>>2]|0,n[p>>2]=n[_>>2],n[_>>2]=e,n[i>>2]=n[c>>2]}function Ei(e){e=e|0;var i=0,r=0,l=0,c=0;if(r=n[e+4>>2]|0,l=e+8|0,i=n[l>>2]|0,(i|0)!=(r|0))do c=i+-8|0,n[l>>2]=c,Dn(c),i=n[l>>2]|0;while((i|0)!=(r|0));i=n[e>>2]|0,i|0&&St(i,(n[e+12>>2]|0)-i|0)}function wi(e){return e=e|0,536870911}function Ti(e){e=e|0,n[e>>2]=4716}function po(e){e=e|0,bg(e),Fg(e+3980|0),Pg(e+4380|0),m[e+4780>>0]=0,m[e+4781>>0]=0}function ku(e){e=e|0,n[e>>2]=4692,mo(e+8|0),qn(e)}function wg(e){e=e|0,ku(e),De(e)}function Tg(e,i){return e=e|0,i=i|0,i|0}function Rg(e,i){return e=e|0,i=i|0,Ao(e+8|0,n[e+4>>2]|0,i)|0}function qn(e){e=e|0}function Cg(e){e=e|0,qn(e),De(e)}function Ug(e,i){return e=e|0,i=i|0,i|0}function bg(e){e=e|0;var i=0,r=0;Vu(e),Ou(e+52|0),Ou(e+436|0),_n(e+852|0,64,0,0),m[e+3976>>0]=0,i=e+20|0,r=i+32|0;do re[i>>1]=0,i=i+2|0;while((i|0)<(r|0));i=ze(44)|0,_n(i,256,0,0),n[e+896>>2]=i,i=ze(44)|0,_n(i,256,0,0),n[e+900>>2]=i,i=e+820|0,n[i>>2]=0,n[i+4>>2]=0,n[i+8>>2]=0,n[i+12>>2]=0,n[i+16>>2]=0,n[i+20>>2]=0,n[i+24>>2]=0,n[i+28>>2]=0,i=0;do r=ze(44)|0,_n(r,256,0,0),n[e+904+(i<<2)>>2]=r,r=ze(44)|0,_n(r,256,0,0),n[e+1928+(i<<2)>>2]=r,r=ze(44)|0,_n(r,256,0,0),n[e+2952+(i<<2)>>2]=r,i=i+1|0;while(i>>>0<256)}function Fg(e){e=e|0,Qn(e,16,4,8,0),Qn(e+80|0,16,1,8,0),Qn(e+160|0,32,2,8,0),Qn(e+240|0,32,22,8,0),Qn(e+320|0,32,20,8,0)}function Pg(e){e=e|0,On(e,16,4,8,0),On(e+80|0,16,1,8,0),On(e+160|0,32,2,8,0),On(e+240|0,32,22,8,0),On(e+320|0,32,20,8,0)}function Ng(e){e=e|0,Kn(e+320|0),Kn(e+240|0),Kn(e+160|0),Kn(e+80|0),Kn(e)}function Lg(e){e=e|0;var i=0,r=0;i=n[e+896>>2]|0,i|0&&(sn(i),De(i)),i=n[e+900>>2]|0,i|0&&(sn(i),De(i)),r=0;do i=n[e+904+(r<<2)>>2]|0,i|0&&(sn(i),De(i)),i=n[e+1928+(r<<2)>>2]|0,i|0&&(sn(i),De(i)),i=n[e+2952+(r<<2)>>2]|0,i|0&&(sn(i),De(i)),r=r+1|0;while((r|0)!=256);sn(e+852|0)}function Vu(e){e=e|0;var i=0;m[e>>0]=0,m[e+1>>0]=0,m[e+2>>0]=0,m[e+3>>0]=0,i=e+4|0,m[i>>0]=0,m[i+1>>0]=0,m[i+2>>0]=0,m[i+3>>0]=0,e=e+12|0,i=e,m[i>>0]=0,m[i+1>>0]=0,m[i+2>>0]=0,m[i+3>>0]=0,e=e+4|0,m[e>>0]=0,m[e+1>>0]=0,m[e+2>>0]=0,m[e+3>>0]=0}function Ou(e){e=e|0;var i=0;i=e+384|0;do Ig(e),e=e+24|0;while((e|0)!=(i|0))}function Ig(e){e=e|0,Dg(e)}function Dg(e){e=e|0,n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0,n[e+12>>2]=0,n[e+16>>2]=0,m[e+20>>0]=1}function Qn(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0;n[e+4>>2]=i,n[e+8>>2]=r,n[e+12>>2]=l,n[e+16>>2]=c,n[e+36>>2]=0,n[e+40>>2]=0,n[e+44>>2]=0,Mu(e+48|0),n[e+68>>2]=0,n[e+72>>2]=0,n[e+76>>2]=0;do if(c){for(l=e+20|0,n[l>>2]=0,n[e+24>>2]=c,r=c,f=0;r=r>>>1,i=f+1|0,r;)f=i;n[l>>2]=(1<<f|0)==(c|0)?f:i,r=c>>>1,n[e+28>>2]=0-r,r=c+-1-r|0}else if(r=e+20|0,(i+-1|0)>>>0<31){n[r>>2]=i,c=1<<i,n[e+24>>2]=c,r=c>>>1,n[e+28>>2]=0-r,r=c+-1-r|0;break}else{n[r>>2]=32,n[e+24>>2]=0,n[e+28>>2]=-2147483648,r=2147483647;break}while(!1);n[e+32>>2]=r,n[e>>2]=0}function Kn(e){e=e|0;var i=0,r=0,l=0,c=0,f=0;if(f=e+36|0,r=n[f>>2]|0,l=e+40|0,i=n[l>>2]|0,(i|0)!=(r|0))do i=i+-44|0,sn(i);while((i|0)!=(r|0));if(n[l>>2]=r,l=e+68|0,c=n[l>>2]|0,r=e+72|0,i=n[r>>2]|0,(i|0)!=(c|0))do i=i+-44|0,sn(i);while((i|0)!=(c|0));n[r>>2]=c,ta(l),ta(f)}function mo(e){e=e|0,Bg(e+4380|0),Ng(e+3980|0),Lg(e)}function Bg(e){e=e|0,Gn(e+320|0),Gn(e+240|0),Gn(e+160|0),Gn(e+80|0),Gn(e)}function Ao(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0;if(F=y,y=y+32|0,S=F,l=e+4781|0,m[l>>0]|0||(kg(e+4380|0),m[l>>0]=1),l=e+3976|0,m[l>>0]|0)p=vn(i,e+852|0)|0,p?(p&32|0&&Gu((vn(i,n[e+904+(((zu(e)|0)&255)<<2)>>2]|0)|0)&255,e),_=e+14|0,f=m[_>>0]|0,l=f&7,f=(f&255)>>>3&7,c=D[16+(f<<3)+l>>0]|0,l=D[80+(f<<3)+l>>0]|0,p&16?(N=e+20+(c<<1)|0,d=(wn(e+4380|0,i,Ae[N>>1]|0,c>>>0<3?c:3)|0)&65535,re[N>>1]=d):d=re[e+20+(c<<1)>>1]|0,re[e+12>>1]=d,p&8|0&&(N=e+15|0,m[N>>0]=vn(i,n[e+1928+(D[N>>0]<<2)>>2]|0)|0),p&4|0&&(_=vn(i,n[e+896+(((D[_>>0]|0)>>>6&1)<<2)>>2]|0)|0,N=e+16|0,m[N>>0]=Fr(_+(m[N>>0]|0)|0)|0),p&2|0&&(N=e+17|0,m[N>>0]=vn(i,n[e+2952+(D[N>>0]<<2)>>2]|0)|0),p&1&&(N=e+18|0,re[N>>1]=wn(e+4460|0,i,Ae[N>>1]|0,0)|0)):(N=m[e+14>>0]|0,l=N&7,N=(N&255)>>>3&7,f=N,c=D[16+(N<<3)+l>>0]|0,l=D[80+(N<<3)+l>>0]|0),d=e+52+(c*24|0)|0,p=e+4540|0,_=(f|0)==1&1,f=wn(p,i,Wu(d)|0,_)|0,n[S>>2]=f,n[e>>2]=(n[e>>2]|0)+f,Xu(d,S),d=e+436+(c*24|0)|0,f=Wu(d)|0,c=k0(p)|0,N=e+4620|0,c=wn(N,i,f,(c>>>0<20?c&-2:20)|_)|0,n[S>>2]=c,f=e+4|0,n[f>>2]=(n[f>>2]|0)+c,Xu(d,S),S=k0(p)|0,S=(k0(N)|0)+S|0,N=e+820+(l<<2)|0,S=wn(e+4700|0,i,n[N>>2]|0,(S>>>0<36?S>>>1&2147483646:18)|_)|0,n[e+8>>2]=S,n[N>>2]=S,Og(e,r);else{m[l>>0]=1,sa(ra(i)|0,r,20),Vg(S,r),f=e,l=S,c=f+20|0;do m[f>>0]=m[l>>0]|0,f=f+1|0,l=l+1|0;while((f|0)<(c|0));re[e+12>>1]=0}return y=F,r+20|0}function kg(e){e=e|0,zn(e),zn(e+80|0),zn(e+160|0),zn(e+240|0),zn(e+320|0)}function ra(e){return e=e|0,n[e>>2]|0}function sa(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0;if(_=e+4|0,l=n[_>>2]|0,p=(n[e+8>>2]|0)-l|0,p=p>>>0>r>>>0?r:p,d=e+12|0,c=(n[d>>2]|0)+l|0,f=c+p|0,p){for(l=c,c=i;m[c>>0]=m[l>>0]|0,l=l+1|0,(l|0)!=(f|0);)c=c+1|0;l=n[_>>2]|0}if(n[_>>2]=l+p,r=r-p|0,r|0){for(Su(e),c=(n[d>>2]|0)+(n[_>>2]|0)|0,f=c+r|0,l=i+p|0;m[l>>0]=m[c>>0]|0,c=c+1|0,(c|0)!=(f|0);)l=l+1|0;n[_>>2]=(n[_>>2]|0)+r}}function Vg(e,i){e=e|0,i=i|0,Vu(e),n[e>>2]=oa(i)|0,n[e+4>>2]=oa(i+4|0)|0,n[e+8>>2]=oa(i+8|0)|0,re[e+12>>1]=Pr(i+12|0)|0,Gu(V0(i+14|0)|0,e),m[e+15>>0]=V0(i+15|0)|0,m[e+16>>0]=Hu(i+16|0)|0,m[e+17>>0]=Hu(i+17|0)|0,re[e+18>>1]=Pr(i+18|0)|0}function zu(e){return e=e|0,m[e+14>>0]|0}function Gu(e,i){e=e|0,i=i|0,m[i+14>>0]=e}function Fr(e){return e=e|0,e&255|0}function Wu(e){return e=e|0,n[e+8>>2]|0}function Xu(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0;_=e+20|0;do if(m[_>>0]|0){if(c=n[i>>2]|0,d=e+8|0,r=n[d>>2]|0,f=e+12|0,l=n[f>>2]|0,(c|0)>=(r|0)){r=e+16|0,(c|0)<(l|0)?(n[r>>2]=l,n[f>>2]=n[i>>2]):n[r>>2]=c,m[_>>0]=0;break}if(n[e+16>>2]=l,n[f>>2]=r,r=n[i>>2]|0,l=n[e>>2]|0,c=e+4|0,f=n[c>>2]|0,(r|0)<(l|0)){n[d>>2]=f,n[c>>2]=l,n[e>>2]=n[i>>2];break}if((r|0)<(f|0)){n[d>>2]=f,n[c>>2]=n[i>>2];break}else{n[d>>2]=r;break}}else{if(p=e+8|0,r=n[p>>2]|0,l=n[i>>2]|0,c=e+4|0,f=n[c>>2]|0,(r|0)>=(l|0)){(f|0)<(l|0)?(n[e>>2]=f,n[c>>2]=n[i>>2]):n[e>>2]=l,m[_>>0]=1;break}if(n[e>>2]=f,n[c>>2]=r,c=e+16|0,f=n[c>>2]|0,d=n[i>>2]|0,r=e+12|0,l=n[r>>2]|0,(f|0)<(d|0)){n[p>>2]=l,n[r>>2]=f,n[c>>2]=n[i>>2];break}if((l|0)<(d|0)){n[p>>2]=l,n[r>>2]=n[i>>2];break}else{n[p>>2]=d;break}}while(!1)}function k0(e){return e=e|0,n[e>>2]|0}function Og(e,i){e=e|0,i=i|0;var r=0;la(D[e>>0]|D[e+1>>0]<<8|D[e+2>>0]<<16|D[e+3>>0]<<24,i),r=e+4|0,la(D[r>>0]|D[r+1>>0]<<8|D[r+2>>0]<<16|D[r+3>>0]<<24,i+4|0),r=e+8|0,la(D[r>>0]|D[r+1>>0]<<8|D[r+2>>0]<<16|D[r+3>>0]<<24,i+8|0),r=e+12|0,Nr(D[r>>0]|D[r+1>>0]<<8,i+12|0),O0(zu(e)|0,i+14|0),O0(m[e+15>>0]|0,i+15|0),Zu(m[e+16>>0]|0,i+16|0),Zu(m[e+17>>0]|0,i+17|0),e=e+18|0,Nr(D[e>>0]|D[e+1>>0]<<8,i+18|0)}function oa(e){return e=e|0,aa(e)|0}function Pr(e){return e=e|0,(m[e+1>>0]<<8|D[e>>0])&65535|0}function V0(e){return e=e|0,m[e>>0]|0}function Hu(e){return e=e|0,m[e>>0]|0}function aa(e){return e=e|0,(D[e+1>>0]|0)<<8|(D[e>>0]|0)|(D[e+2>>0]|0)<<16|(D[e+3>>0]|0)<<24|0}function la(e,i){e=e|0,i=i|0,ca(e,i)}function Nr(e,i){e=e|0,i=i|0,m[i+1>>0]=(e&65535)>>>8,m[i>>0]=e}function O0(e,i){e=e|0,i=i|0,m[i>>0]=e}function Zu(e,i){e=e|0,i=i|0,m[i>>0]=e}function ca(e,i){e=e|0,i=i|0,m[i+3>>0]=e>>>24,m[i+2>>0]=e>>>16,m[i+1>>0]=e>>>8,m[i>>0]=e}function Ri(e,i){e=e|0,i=i|0}function zg(e){e=e|0,un(e),De(e)}function Gg(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function Wg(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==9202?e+12|0:0)|0}function Xg(e){e=e|0,St(e,16)}function Hg(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=4768,n[e+4>>2]=i,z0(e+8|0)}function Zg(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4792,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function z0(e){e=e|0,jg(e),$g(e+164|0),qg(e+244|0),m[e+324>>0]=0,m[e+325>>0]=0}function Yu(e){e=e|0,n[e>>2]=4768,G0(e+8|0),qn(e)}function Yg(e){e=e|0,Yu(e),De(e)}function Jg(e,i){return e=e|0,i=i|0,go(e+8|0,n[e+4>>2]|0,i)|0}function jg(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0;for(f=y,y=y+16|0,l=f,m[e>>0]=0,_n(e+4|0,516,0,0),_n(e+48|0,6,0,0),n[e+92>>2]=0,n[e+96>>2]=0,r=e+100|0,e_(r),Ju(l),c=n[l>>2]|0,l=n[l+4>>2]|0,i=4;d=r,p=d,m[p>>0]=c,m[p+1>>0]=c>>8,m[p+2>>0]=c>>16,m[p+3>>0]=c>>24,d=d+4|0,m[d>>0]=l,m[d+1>>0]=l>>8,m[d+2>>0]=l>>16,m[d+3>>0]=l>>24,i=i+-1|0,i;)r=r+8|0;p=e+132|0,n[p>>2]=0,n[p+4>>2]=0,n[p+8>>2]=0,n[p+12>>2]=0,n[p+16>>2]=0,n[p+20>>2]=0,n[p+24>>2]=0,n[p+28>>2]=0,y=f}function $g(e){e=e|0,Qn(e,32,9,8,0)}function qg(e){e=e|0,On(e,32,9,8,0)}function Qg(e){e=e|0,Kn(e)}function Kg(e){e=e|0,sn(e+48|0),sn(e+4|0)}function e_(e){e=e|0;var i=0;i=e+32|0;do Ju(e),e=e+8|0;while((e|0)!=(i|0))}function Ju(e){e=e|0;var i=0;i=e,m[i>>0]=0,m[i+1>>0]=0,m[i+2>>0]=0,m[i+3>>0]=0,e=e+4|0,m[e>>0]=0,m[e+1>>0]=0,m[e+2>>0]=0,m[e+3>>0]=0}function G0(e){e=e|0,t_(e+244|0),Qg(e+164|0),Kg(e)}function t_(e){e=e|0,Gn(e)}function go(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0;if(l=e+325|0,m[l>>0]|0||(n_(e+244|0),m[l>>0]=1),!(m[e>>0]|0))m[e>>0]=1,sa(ra(i)|0,r,8),f=i_(r)|0,d=Pt()|0,e=e+100|0,i=e,m[i>>0]=f,m[i+1>>0]=f>>8,m[i+2>>0]=f>>16,m[i+3>>0]=f>>24,e=e+4|0,m[e>>0]=d,m[e+1>>0]=d>>8,m[e+2>>0]=d>>16,m[e+3>>0]=d>>24;else{d=e+92|0;e:do if(n[e+132+(n[d>>2]<<2)>>2]|0){if(f=vn(i,e+4|0)|0,(f|0)==1){l=wn(e+244|0,i,n[e+132+(n[d>>2]<<2)>>2]|0,1)|0,p=n[d>>2]|0,i=e+100+(p<<3)|0,f=i,c=f,f=f+4|0,l=ei(D[c>>0]|D[c+1>>0]<<8|D[c+2>>0]<<16|D[c+3>>0]<<24|0,D[f>>0]|D[f+1>>0]<<8|D[f+2>>0]<<16|D[f+3>>0]<<24|0,l|0,((l|0)<0)<<31>>31|0)|0,f=Pt()|0,c=i,m[c>>0]=l,m[c+1>>0]=l>>8,m[c+2>>0]=l>>16,m[c+3>>0]=l>>24,i=i+4|0,m[i>>0]=f,m[i+1>>0]=f>>8,m[i+2>>0]=f>>16,m[i+3>>0]=f>>24,n[e+148+(p<<2)>>2]=0;break}if((f|0)>=511){if((f|0)==512){p=e+96|0,n[p>>2]=(n[p>>2]|0)+1&3,f=e+100+(n[d>>2]<<3)+4|0,f=wn(e+244|0,i,D[f>>0]|D[f+1>>0]<<8|D[f+2>>0]<<16|D[f+3>>0]<<24,8)|0,l=e+100+(n[p>>2]<<3)|0,c=l,m[c>>0]=0,m[c+1>>0]=0,m[c+2>>0]=0,m[c+3>>0]=0,l=l+4|0,m[l>>0]=f,m[l+1>>0]=f>>8,m[l+2>>0]=f>>16,m[l+3>>0]=f>>24,l=ju(i)|0,p=n[p>>2]|0,i=e+100+(p<<3)|0,f=i,c=f,f=f+4|0,f=D[f>>0]|D[f+1>>0]<<8|D[f+2>>0]<<16|D[f+3>>0]<<24,l=D[c>>0]|D[c+1>>0]<<8|D[c+2>>0]<<16|D[c+3>>0]<<24|l,c=i,m[c>>0]=l,m[c+1>>0]=l>>8,m[c+2>>0]=l>>16,m[c+3>>0]=l>>24,i=i+4|0,m[i>>0]=f,m[i+1>>0]=f>>8,m[i+2>>0]=f>>16,m[i+3>>0]=f>>24,n[d>>2]=p,n[e+132+(p<<2)>>2]=0,n[e+148+(n[d>>2]<<2)>>2]=0;break}if((f|0)<=511)break;n[d>>2]=(n[d>>2]|0)+f&3,go(e,i,r)|0;break}do if(!f)l=wn(e+244|0,i,0,7)|0,c=e+148+(n[d>>2]<<2)|0,n[c>>2]=(n[c>>2]|0)+1,c=n[d>>2]|0,(n[e+148+(c<<2)>>2]|0)>3&&(n[e+132+(c<<2)>>2]=l,n[e+148+(n[d>>2]<<2)>>2]=0);else{if((f|0)<500)if(l=e+244|0,c=wt(n[e+132+(n[d>>2]<<2)>>2]|0,f)|0,(f|0)<10){l=wn(l,i,c,2)|0;break}else{l=wn(l,i,c,3)|0;break}if((f|0)==500){if(l=wn(e+244|0,i,(n[e+132+(n[d>>2]<<2)>>2]|0)*500|0,4)|0,c=e+148+(n[d>>2]<<2)|0,n[c>>2]=(n[c>>2]|0)+1,c=n[d>>2]|0,(n[e+148+(c<<2)>>2]|0)<=3)break;n[e+132+(c<<2)>>2]=l,n[e+148+(n[d>>2]<<2)>>2]=0;break}if(l=500-f|0,c=e+244|0,f=n[e+132+(n[d>>2]<<2)>>2]|0,(l|0)>-10){l=wn(c,i,wt(f,l)|0,5)|0;break}l=wn(c,i,wt(f,-10)|0,6)|0,c=e+148+(n[d>>2]<<2)|0,n[c>>2]=(n[c>>2]|0)+1,c=n[d>>2]|0,(n[e+148+(c<<2)>>2]|0)>3&&(n[e+132+(c<<2)>>2]=l,n[e+148+(n[d>>2]<<2)>>2]=0)}while(!1);p=e+100+(n[d>>2]<<3)|0,c=p,i=c,c=c+4|0,c=ei(D[i>>0]|D[i+1>>0]<<8|D[i+2>>0]<<16|D[i+3>>0]<<24|0,D[c>>0]|D[c+1>>0]<<8|D[c+2>>0]<<16|D[c+3>>0]<<24|0,l|0,((l|0)<0)<<31>>31|0)|0,i=Pt()|0,f=p,m[f>>0]=c,m[f+1>>0]=c>>8,m[f+2>>0]=c>>16,m[f+3>>0]=c>>24,p=p+4|0,m[p>>0]=i,m[p+1>>0]=i>>8,m[p+2>>0]=i>>16,m[p+3>>0]=i>>24}else switch(l=vn(i,e+48|0)|0,l|0){case 1:{i=wn(e+244|0,i,0,0)|0,n[e+132+(n[d>>2]<<2)>>2]=i,i=n[d>>2]|0,p=n[e+132+(i<<2)>>2]|0,f=e+100+(i<<3)|0,c=f,l=c,c=c+4|0,p=ei(D[l>>0]|D[l+1>>0]<<8|D[l+2>>0]<<16|D[l+3>>0]<<24|0,D[c>>0]|D[c+1>>0]<<8|D[c+2>>0]<<16|D[c+3>>0]<<24|0,p|0,((p|0)<0)<<31>>31|0)|0,c=Pt()|0,l=f,m[l>>0]=p,m[l+1>>0]=p>>8,m[l+2>>0]=p>>16,m[l+3>>0]=p>>24,f=f+4|0,m[f>>0]=c,m[f+1>>0]=c>>8,m[f+2>>0]=c>>16,m[f+3>>0]=c>>24,n[e+148+(i<<2)>>2]=0;break e}case 2:{p=e+96|0,n[p>>2]=(n[p>>2]|0)+1&3,f=e+100+(n[d>>2]<<3)+4|0,f=wn(e+244|0,i,D[f>>0]|D[f+1>>0]<<8|D[f+2>>0]<<16|D[f+3>>0]<<24,8)|0,l=e+100+(n[p>>2]<<3)|0,c=l,m[c>>0]=0,m[c+1>>0]=0,m[c+2>>0]=0,m[c+3>>0]=0,l=l+4|0,m[l>>0]=f,m[l+1>>0]=f>>8,m[l+2>>0]=f>>16,m[l+3>>0]=f>>24,l=ju(i)|0,p=n[p>>2]|0,i=e+100+(p<<3)|0,f=i,c=f,f=f+4|0,f=D[f>>0]|D[f+1>>0]<<8|D[f+2>>0]<<16|D[f+3>>0]<<24,l=D[c>>0]|D[c+1>>0]<<8|D[c+2>>0]<<16|D[c+3>>0]<<24|l,c=i,m[c>>0]=l,m[c+1>>0]=l>>8,m[c+2>>0]=l>>16,m[c+3>>0]=l>>24,i=i+4|0,m[i>>0]=f,m[i+1>>0]=f>>8,m[i+2>>0]=f>>16,m[i+3>>0]=f>>24,n[d>>2]=p,n[e+132+(p<<2)>>2]=0,n[e+148+(n[d>>2]<<2)>>2]=0;break e}default:{if((l|0)<=2)break e;n[d>>2]=l+2+(n[d>>2]|0)&3,go(e,i,r)|0;break e}}while(!1);r_(e+100+(n[d>>2]<<3)|0,r)}return r+8|0}function n_(e){e=e|0,zn(e)}function i_(e){e=e|0;var i=0,r=0,l=0;return i=y,y=y+16|0,r=i,l=aa(e)|0,s_(r,l,aa(e+4|0)|0),e=n[r>>2]|0,Zt(n[r+4>>2]|0),y=i,e|0}function ju(e){e=e|0;var i=0;return i=(B0(e)|0)&65535,((B0(e)|0)&65535)<<16|i|0}function r_(e,i){e=e|0,i=i|0;var r=0;r=e,ca(D[r>>0]|D[r+1>>0]<<8|D[r+2>>0]<<16|D[r+3>>0]<<24,i),e=e+4|0,ca(D[e>>0]|D[e+1>>0]<<8|D[e+2>>0]<<16|D[e+3>>0]<<24,i+4|0)}function s_(e,i,r){e=e|0,i=i|0,r=r|0;var l=0;l=e,m[l>>0]=i,m[l+1>>0]=i>>8,m[l+2>>0]=i>>16,m[l+3>>0]=i>>24,i=e+4|0,m[i>>0]=r,m[i+1>>0]=r>>8,m[i+2>>0]=r>>16,m[i+3>>0]=r>>24}function o_(e){e=e|0,un(e),De(e)}function a_(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function l_(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==9890?e+12|0:0)|0}function c_(e){e=e|0,St(e,16)}function u_(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=4820,n[e+4>>2]=i,$u(e+8|0)}function f_(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4844,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function $u(e){e=e|0,m[e>>0]=0,Qu(e+1|0),_n(e+8|0,128,0,0),_n(e+52|0,256,0,0),_n(e+96|0,256,0,0),_n(e+140|0,256,0,0),_n(e+184|0,256,0,0),_n(e+228|0,256,0,0),_n(e+272|0,256,0,0)}function qu(e){e=e|0,n[e>>2]=4820,Ku(e+8|0),qn(e)}function h_(e){e=e|0,qu(e),De(e)}function d_(e,i){return e=e|0,i=i|0,ef(e+8|0,n[e+4>>2]|0,i)|0}function Qu(e){e=e|0;var i=0;m[e>>0]=0,m[e+1>>0]=0,i=e+2|0,m[i>>0]=0,m[i+1>>0]=0,e=e+4|0,m[e>>0]=0,m[e+1>>0]=0}function Ku(e){e=e|0,sn(e+272|0),sn(e+228|0),sn(e+184|0),sn(e+140|0),sn(e+96|0),sn(e+52|0),sn(e+8|0)}function ef(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0;if(F=y,y=y+16|0,_=F,!(m[e>>0]|0))m[e>>0]=1,sa(ra(i)|0,r,6),p_(_,r),S=e+1|0,m[S>>0]=m[_>>0]|0,m[S+1>>0]=m[_+1>>0]|0,m[S+2>>0]=m[_+2>>0]|0,m[S+3>>0]=m[_+3>>0]|0,m[S+4>>0]=m[_+4>>0]|0,m[S+5>>0]=m[_+5>>0]|0;else{S=vn(i,e+8|0)|0,Qu(_),S&1?(p=(vn(i,e+52|0)|0)&255,l=e+1|0,l=(Fr(p+((D[l>>0]|D[l+1>>0]<<8)&255)|0)|0)&255):(l=e+1|0,l=(D[l>>0]|D[l+1>>0]<<8)&255),re[_>>1]=l,S&2?(l=(vn(i,e+96|0)|0)&255,p=e+1|0,l=((Fr((((D[p>>0]|D[p+1>>0]<<8)&65535)>>>8)+l|0)|0)&255)<<8,l=(l|Ae[_>>1])&65535):(p=e+1|0,l=l|(D[p>>0]|D[p+1>>0]<<8)&-256),re[_>>1]=l;do if(S&64)if(d=e+1|0,c=(l&255)-((D[d>>0]|D[d+1>>0]<<8)&255)|0,S&4?(l=(vn(i,e+140|0)|0)&255,p=e+3|0,p=c+((D[p>>0]|D[p+1>>0]<<8)&255)|0,l=(Fr(((p|0)<1?0:(p|0)>254?255:p&255)+l|0)|0)&255):(l=e+3|0,l=(D[l>>0]|D[l+1>>0]<<8)&255),p=_+2|0,re[p>>1]=l,S&16?(l=vn(i,e+228|0)|0,N=e+3|0,f=e+5|0,f=((c+(re[p>>1]&255)-((D[N>>0]|D[N+1>>0]<<8)&255)|0)/2|0)+((D[f>>0]|D[f+1>>0]<<8)&255)|0,l=(Fr(((f|0)<1?0:(f|0)>254?255:f&255)+(l&255)|0)|0)&255):(l=e+5|0,l=(D[l>>0]|D[l+1>>0]<<8)&255),f=_+4|0,re[f>>1]=l,l=((Ae[_>>1]|0)>>>8)-(((D[d>>0]|D[d+1>>0]<<8)&65535)>>>8)|0,S&8?(c=(vn(i,e+184|0)|0)&255,N=e+3|0,N=(((D[N>>0]|D[N+1>>0]<<8)&65535)>>>8)+l|0,c=((Fr(((N|0)<1?0:(N|0)>254?255:N&255)+c|0)|0)&255)<<8,c=(c|Ae[p>>1])&65535):(c=e+3|0,c=re[p>>1]|(D[c>>0]|D[c+1>>0]<<8)&-256),re[p>>1]=c,S&32){N=vn(i,e+272|0)|0,i=e+3|0,S=e+5|0,S=((((Ae[p>>1]|0)>>>8)+l-(((D[i>>0]|D[i+1>>0]<<8)&65535)>>>8)|0)/2|0)+(((D[S>>0]|D[S+1>>0]<<8)&65535)>>>8)|0,N=((Fr(((S|0)<1?0:(S|0)>254?255:S&255)+(N&255)|0)|0)&255)<<8,re[f>>1]=N|Ae[f>>1];break}else{N=e+5|0,re[f>>1]=re[f>>1]|(D[N>>0]|D[N+1>>0]<<8)&-256;break}else re[_+2>>1]=l,re[_+4>>1]=l;while(!1);N=e+1|0,m[N>>0]=m[_>>0]|0,m[N+1>>0]=m[_+1>>0]|0,m[N+2>>0]=m[_+2>>0]|0,m[N+3>>0]=m[_+3>>0]|0,m[N+4>>0]=m[_+4>>0]|0,m[N+5>>0]=m[_+5>>0]|0,m_(N,r)}return y=F,r+6|0}function p_(e,i){e=e|0,i=i|0;var r=0,l=0;l=Pr(i)|0,r=Pr(i+2|0)|0,A_(e,l,r,Pr(i+4|0)|0)}function m_(e,i){e=e|0,i=i|0;var r=0;Nr(D[e>>0]|D[e+1>>0]<<8,i),r=e+2|0,Nr(D[r>>0]|D[r+1>>0]<<8,i+2|0),e=e+4|0,Nr(D[e>>0]|D[e+1>>0]<<8,i+4|0)}function A_(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0,m[e>>0]=i,m[e+1>>0]=i>>8,i=e+2|0,m[i>>0]=r,m[i+1>>0]=r>>8,r=e+4|0,m[r>>0]=l,m[r+1>>0]=l>>8}function g_(e){e=e|0,un(e),De(e)}function __(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function v_(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==10570?e+12|0:0)|0}function y_(e){e=e|0,St(e,16)}function x_(e,i,r){e=e|0,i=i|0,r=r|0,Ti(e),n[e>>2]=4872,n[e+4>>2]=i,S_(e+8|0,r)}function M_(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4896,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function S_(e,i){e=e|0,i=i|0,n[e>>2]=n[i>>2],m[e+4>>0]=m[i+4>>0]|0,nf(e+8|0,i+8|0),nf(e+20|0,i+20|0),T_(e+32|0,i+32|0)}function tf(e){e=e|0,n[e>>2]=4872,Nu(e+8|0),qn(e)}function E_(e){e=e|0,tf(e),De(e)}function w_(e,i){return e=e|0,i=i|0,z_(e+8|0,n[e+4>>2]|0,i)|0}function nf(e,i){e=e|0,i=i|0;var r=0,l=0;n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0,r=i+4|0,l=(n[r>>2]|0)-(n[i>>2]|0)|0,l|0&&(rf(e,l),R_(e,n[i>>2]|0,n[r>>2]|0,l))}function T_(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;r=y,y=y+32|0,l=r+24|0,c=r+16|0,d=r+8|0,f=r,n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0,n[e+12>>2]=0,n[e+16>>2]=0,n[e+20>>2]=0,k_(d,i),V_(f,i),n[c>>2]=n[d>>2],n[c+4>>2]=n[d+4>>2],n[l>>2]=n[f>>2],n[l+4>>2]=n[f+4>>2],U_(e,c,l,0),y=r}function rf(e,i){e=e|0,i=i|0;var r=0;if((C_(e)|0)>>>0<i>>>0)Tn(e);else{r=ze(i)|0,n[e+4>>2]=r,n[e>>2]=r,n[e+8>>2]=r+i;return}}function R_(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;f=y,y=y+16|0,c=f,of(c,e,l),l=c+4|0,e=r-i|0,(e|0)>0&&(Hn(n[l>>2]|0,i|0,e|0)|0,n[l>>2]=(n[l>>2]|0)+e),af(c),y=f}function sf(e){e=e|0;var i=0,r=0;i=n[e>>2]|0,r=i,i|0&&(n[e+4>>2]=r,St(i,(n[e+8>>2]|0)-r|0))}function C_(e){return e=e|0,2147483647}function of(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,i=n[i+4>>2]|0,n[e+4>>2]=i,n[e+8>>2]=i+r}function af(e){e=e|0,n[(n[e>>2]|0)+4>>2]=n[e+4>>2]}function U_(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0;if($=y,y=y+96|0,ee=$+80|0,N=$+64|0,_=$+48|0,S=$+40|0,F=$+8|0,p=$,z=$+32|0,q=$+16|0,d=i,f=n[d>>2]|0,d=n[d+4>>2]|0,c=r,r=n[c>>2]|0,c=n[c+4>>2]|0,l=f,(c|0)==(d|0)?d=0:d=((c-(n[r>>2]|0)|0)/44|0)+((r-f>>2)*93|0)+((d-(n[f>>2]|0)|0)/-44|0)|0,r=(n[e+8>>2]|0)-(n[e+4>>2]|0)|0,r=(r|0?((r>>2)*93|0)+-1|0:0)-((n[e+20>>2]|0)+(n[e+16>>2]|0))|0,d>>>0>r>>>0&&lf(e,d-r|0),_o(S,e),_o(p,e),c=p,r=n[c>>2]|0,c=n[c+4>>2]|0,f=F,n[f>>2]=r,n[f+4>>2]=c,f=r,d|0&&(r=((c-(n[r>>2]|0)|0)/44|0)+d|0,(r|0)>0?(p=(r>>>0)/93|0,d=f+(p<<2)|0,n[F>>2]=d,r=(n[d>>2]|0)+((r-(p*93|0)|0)*44|0)|0):(r=92-r|0,p=f+(((r|0)/-93|0)<<2)|0,n[F>>2]=p,r=(n[p>>2]|0)+((92-((r|0)%93|0)|0)*44|0)|0),n[F+4>>2]=r),n[N>>2]=n[S>>2],n[N+4>>2]=n[S+4>>2],n[ee>>2]=n[F>>2],n[ee+4>>2]=n[F+4>>2],W0(_,N,ee),cf(ee,_),uf(N,_),ua(ee,N)|0){f=q+4|0,d=i+4|0;do{if(ff(z,ee),hf(q,e,z),r=n[q>>2]|0,(r|0)!=(n[f>>2]|0)){c=n[d>>2]|0;do I0(r,c),r=(n[q>>2]|0)+44|0,n[q>>2]=r,c=c+44|0,n[d>>2]=c,(c-(n[l>>2]|0)|0)==4092&&(l=l+4|0,n[i>>2]=l,c=n[l>>2]|0,n[d>>2]=c);while((r|0)!=(n[f>>2]|0))}df(q),pf(ee)|0}while(ua(ee,N)|0)}y=$}function b_(e){e=e|0;var i=0,r=0,l=0;i=n[e+4>>2]|0,r=e+8|0,l=n[r>>2]|0,(l|0)!=(i|0)&&(n[r>>2]=l+(~((l+-4-i|0)>>>2)<<2)),i=n[e>>2]|0,i|0&&St(i,(n[e+12>>2]|0)-i|0)}function lf(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0,rt=0,Ce=0,_e=0,Xe=0,oe=0,Nt=0,Qt=0,Lt=0,_t=0,jt=0,ct=0;jt=y,y=y+64|0,Xe=jt+52|0,_e=jt+48|0,oe=jt+28|0,Nt=jt+24|0,Qt=jt+20|0,ee=jt,Lt=e+8|0,r=n[Lt>>2]|0,_t=e+4|0,_=n[_t>>2]|0,rt=((r|0)==(_|0)&1)+i|0,d=(rt>>>0)/93|0,d=d+((rt-(d*93|0)|0)!=0&1)|0,rt=e+16|0,l=n[rt>>2]|0,p=(l>>>0)/93|0,$=d>>>0<p>>>0?d:p,i=d-$|0,f=r;e:do if(i)if(Ce=e+12|0,l=n[Ce>>2]|0,c=l-(n[e>>2]|0)|0,r=f-_>>2,i>>>0>((c>>2)-r|0)>>>0){q=c>>1,z=r+i|0,ir(ee,q>>>0<z>>>0?z:q,r-$|0,e+12|0);do n[Xe>>2]=ze(4092)|0,N_(ee,Xe),i=i+-1|0;while(i|0);if(!$)r=n[_t>>2]|0;else{p=ee+8|0,_=ee+12|0,S=ee+4|0,F=ee+16|0,N=oe+4|0,z=oe+8|0,q=oe+12|0,d=$,i=n[p>>2]|0,r=n[_t>>2]|0;do{f=n[_>>2]|0,l=f;do if((i|0)==(f|0)){if(c=n[S>>2]|0,f=n[ee>>2]|0,i=f,c>>>0<=f>>>0){i=l-i|0,i=i|0?i>>1:1,ir(oe,i,i>>>2,n[F>>2]|0),n[Nt>>2]=n[S>>2],n[Qt>>2]=n[p>>2],n[_e>>2]=n[Nt>>2],n[Xe>>2]=n[Qt>>2],Lr(oe,_e,Xe),i=n[ee>>2]|0,n[ee>>2]=n[oe>>2],n[oe>>2]=i,i=n[S>>2]|0,n[S>>2]=n[N>>2],n[N>>2]=i,i=n[p>>2]|0,n[p>>2]=n[z>>2],n[z>>2]=i,i=n[_>>2]|0,n[_>>2]=n[q>>2],n[q>>2]=i,rr(oe),i=n[p>>2]|0;break}ct=c,i=((ct-i>>2)+1|0)/-2|0,f=c+(i<<2)|0,l=l-ct|0,l?(ti(f|0,c|0,l|0)|0,i=(n[S>>2]|0)+(i<<2)|0):i=f,ct=f+(l>>2<<2)|0,n[p>>2]=ct,n[S>>2]=i,i=ct}while(!1);n[i>>2]=n[r>>2],i=(n[p>>2]|0)+4|0,n[p>>2]=i,r=(n[_t>>2]|0)+4|0,n[_t>>2]=r,d=d+-1|0}while(d|0)}if(i=n[Lt>>2]|0,(i|0)!=(r|0)){do i=i+-4|0,L_(ee,i),r=n[_t>>2]|0;while((i|0)!=(r|0));i=n[Lt>>2]|0}ct=n[e>>2]|0,n[e>>2]=n[ee>>2],n[ee>>2]=ct,ct=ee+4|0,n[_t>>2]=n[ct>>2],n[ct>>2]=r,ct=ee+8|0,n[Lt>>2]=n[ct>>2],n[ct>>2]=i,ct=ee+12|0,_t=n[Ce>>2]|0,n[Ce>>2]=n[ct>>2],n[ct>>2]=_t,n[rt>>2]=(n[rt>>2]|0)+(wt($,-93)|0),rr(ee);break}else{t:do if((l|0)==(f|0))S=18;else{for(;n[Xe>>2]=ze(4092)|0,F_(e,Xe),i=i+-1|0,!!i;)if((n[Ce>>2]|0)==(n[Lt>>2]|0)){S=18;break t}r=$,i=n[rt>>2]|0}while(!1);if((S|0)==18){l=~(d>>>0>p>>>0?p:d),r=i;do n[Xe>>2]=ze(4092)|0,P_(e,Xe),r=r+-1|0,c=(((n[Lt>>2]|0)-(n[_t>>2]|0)|0)==4?92:93)+(n[rt>>2]|0)|0,n[rt>>2]=c;while(r|0);r=i+-1-l|0,i=c}if(n[rt>>2]=i+(wt(r,-93)|0),!r)break;p=e+12|0,_=oe+4|0,S=oe+8|0,F=oe+12|0,i=n[Lt>>2]|0;do{f=n[_t>>2]|0,d=n[f>>2]|0,f=f+4|0,n[_t>>2]=f,ct=n[Ce>>2]|0,l=ct;do if((i|0)==(ct|0)){if(ct=n[e>>2]|0,i=ct,f>>>0<=ct>>>0){i=l-i|0,i=i|0?i>>1:1,ir(oe,i,i>>>2,p),n[Nt>>2]=n[_t>>2],n[Qt>>2]=n[Lt>>2],n[_e>>2]=n[Nt>>2],n[Xe>>2]=n[Qt>>2],Lr(oe,_e,Xe),i=n[e>>2]|0,n[e>>2]=n[oe>>2],n[oe>>2]=i,i=n[_t>>2]|0,n[_t>>2]=n[_>>2],n[_>>2]=i,i=n[Lt>>2]|0,n[Lt>>2]=n[S>>2],n[S>>2]=i,i=n[Ce>>2]|0,n[Ce>>2]=n[F>>2],n[F>>2]=i,rr(oe),i=n[Lt>>2]|0;break}ct=f,i=((ct-i>>2)+1|0)/-2|0,c=f+(i<<2)|0,l=l-ct|0,l?(ti(c|0,f|0,l|0)|0,i=(n[_t>>2]|0)+(i<<2)|0):i=c,ct=c+(l>>2<<2)|0,n[Lt>>2]=ct,n[_t>>2]=i,i=ct}while(!1);n[i>>2]=d,i=(n[Lt>>2]|0)+4|0,n[Lt>>2]=i,r=r+-1|0}while(r|0)}else if(n[rt>>2]=(wt($,-93)|0)+l,$|0)for(p=e+12|0,S=e+12|0,F=oe+4|0,N=oe+8|0,z=oe+12|0,i=$,l=_;;){d=n[l>>2]|0,f=l+4|0,n[_t>>2]=f,Ce=n[p>>2]|0,l=Ce;do if((r|0)==(Ce|0)){if(Ce=n[e>>2]|0,r=Ce,f>>>0<=Ce>>>0){r=l-r|0,r=r|0?r>>1:1,ir(oe,r,r>>>2,S),n[Nt>>2]=n[_t>>2],n[Qt>>2]=n[Lt>>2],n[_e>>2]=n[Nt>>2],n[Xe>>2]=n[Qt>>2],Lr(oe,_e,Xe),r=n[e>>2]|0,n[e>>2]=n[oe>>2],n[oe>>2]=r,r=n[_t>>2]|0,n[_t>>2]=n[F>>2],n[F>>2]=r,r=n[Lt>>2]|0,n[Lt>>2]=n[N>>2],n[N>>2]=r,r=n[p>>2]|0,n[p>>2]=n[z>>2],n[z>>2]=r,rr(oe),r=n[Lt>>2]|0;break}Ce=f,r=((Ce-r>>2)+1|0)/-2|0,c=f+(r<<2)|0,l=l-Ce|0,l?(ti(c|0,f|0,l|0)|0,r=(n[_t>>2]|0)+(r<<2)|0):r=c,Ce=c+(l>>2<<2)|0,n[Lt>>2]=Ce,n[_t>>2]=r,r=Ce}while(!1);if(n[r>>2]=d,r=(n[Lt>>2]|0)+4|0,n[Lt>>2]=r,i=i+-1|0,!i)break e;l=n[_t>>2]|0}while(!1);y=jt}function _o(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;r=(n[i+16>>2]|0)+(n[i+20>>2]|0)|0,f=n[i+4>>2]|0,l=(r>>>0)/93|0,c=f+(l<<2)|0,(n[i+8>>2]|0)==(f|0)?i=0:i=(n[c>>2]|0)+((r-(l*93|0)|0)*44|0)|0,n[e>>2]=c,n[e+4>>2]=i}function W0(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;c=i,i=n[c+4>>2]|0,l=e,n[l>>2]=n[c>>2],n[l+4>>2]=i,l=r,i=n[l+4>>2]|0,r=e+8|0,n[r>>2]=n[l>>2],n[r+4>>2]=i}function cf(e,i){e=e|0,i=i|0,n[e>>2]=n[i>>2],n[e+4>>2]=n[i+4>>2],n[e+8>>2]=n[i+8>>2],n[e+12>>2]=n[i+12>>2]}function uf(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0;r=y,y=y+32|0,l=r+24|0,c=r+16|0,d=r+8|0,f=r,p=i+8|0,_=n[p>>2]|0,p=n[p+4>>2]|0,i=d,n[i>>2]=_,n[i+4>>2]=p,i=f,n[i>>2]=_,n[i+4>>2]=p,n[c>>2]=n[d>>2],n[c+4>>2]=n[d+4>>2],n[l>>2]=n[f>>2],n[l+4>>2]=n[f+4>>2],W0(e,c,l),y=r}function ua(e,i){return e=e|0,i=i|0,(B_(e,i)|0)^1|0}function ff(e,i){e=e|0,i=i|0;var r=0,l=0;r=n[i>>2]|0,l=n[i+4>>2]|0,(r|0)==(n[i+8>>2]|0)?mf(e,l,n[i+12>>2]|0):mf(e,l,(n[r>>2]|0)+4092|0)}function hf(e,i,r){e=e|0,i=i|0,r=r|0;var l=0;l=n[r>>2]|0,n[e>>2]=l,n[e+4>>2]=n[r+4>>2],n[e+8>>2]=l,n[e+12>>2]=i}function df(e){e=e|0;var i=0;i=(n[e+12>>2]|0)+20|0,n[i>>2]=(n[i>>2]|0)+(((n[e>>2]|0)-(n[e+8>>2]|0)|0)/44|0)}function pf(e){e=e|0;var i=0,r=0,l=0;return i=n[e>>2]|0,r=e+8|0,(i|0)==(n[r>>2]|0)?(l=r,i=n[l+4>>2]|0,r=e,n[r>>2]=n[l>>2],n[r+4>>2]=i):(l=i+4|0,n[e>>2]=l,n[e+4>>2]=n[l>>2]),e|0}function F_(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0;ee=y,y=y+48|0,c=ee+32|0,l=ee+28|0,p=ee+8|0,_=ee+4|0,S=ee,q=e+8|0,r=n[q>>2]|0,F=e+12|0,z=n[F>>2]|0,f=z;do if((r|0)==(z|0)){if(z=e+4|0,N=n[z>>2]|0,$=n[e>>2]|0,d=$,N>>>0<=$>>>0){r=f-d|0,r=r|0?r>>1:1,ir(p,r,r>>>2,e+12|0),n[_>>2]=n[z>>2],n[S>>2]=n[q>>2],n[l>>2]=n[_>>2],n[c>>2]=n[S>>2],Lr(p,l,c),r=n[e>>2]|0,n[e>>2]=n[p>>2],n[p>>2]=r,r=p+4|0,$=n[z>>2]|0,n[z>>2]=n[r>>2],n[r>>2]=$,r=p+8|0,$=n[q>>2]|0,n[q>>2]=n[r>>2],n[r>>2]=$,r=p+12|0,$=n[F>>2]|0,n[F>>2]=n[r>>2],n[r>>2]=$,rr(p),r=n[q>>2]|0;break}c=N,l=((c-d>>2)+1|0)/-2|0,e=N+(l<<2)|0,c=r-c|0,c?(ti(e|0,N|0,c|0)|0,r=(n[z>>2]|0)+(l<<2)|0):r=e,$=e+(c>>2<<2)|0,n[q>>2]=$,n[z>>2]=r,r=$}while(!1);n[r>>2]=n[i>>2],n[q>>2]=(n[q>>2]|0)+4,y=ee}function P_(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0;ee=y,y=y+48|0,l=ee+32|0,r=ee+28|0,d=ee+8|0,p=ee+4|0,_=ee,q=e+4|0,N=n[q>>2]|0,z=n[e>>2]|0,S=z;do if((N|0)==(z|0)){if(z=e+8|0,F=n[z>>2]|0,f=e+12|0,$=n[f>>2]|0,c=$,F>>>0>=$>>>0){$=c-S|0,$=$|0?$>>1:1,ir(d,$,($+3|0)>>>2,e+12|0),n[p>>2]=n[q>>2],n[_>>2]=n[z>>2],n[r>>2]=n[p>>2],n[l>>2]=n[_>>2],Lr(d,r,l),r=n[e>>2]|0,n[e>>2]=n[d>>2],n[d>>2]=r,r=d+4|0,$=n[q>>2]|0,n[q>>2]=n[r>>2],n[r>>2]=$,r=d+8|0,$=n[z>>2]|0,n[z>>2]=n[r>>2],n[r>>2]=$,r=d+12|0,$=n[f>>2]|0,n[f>>2]=n[r>>2],n[r>>2]=$,rr(d),r=n[q>>2]|0;break}l=F,e=((c-l>>2)+1|0)/2|0,c=F+(e<<2)|0,l=l-N|0,r=c+(0-(l>>2)<<2)|0,l?(ti(r|0,N|0,l|0)|0,l=(n[z>>2]|0)+(e<<2)|0):(r=c,l=c),n[q>>2]=r,n[z>>2]=l}else r=N;while(!1);n[r+-4>>2]=n[i>>2],n[q>>2]=(n[q>>2]|0)+-4,y=ee}function ir(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0;c=e+12|0,n[c>>2]=0,n[e+16>>2]=l;do if(i)if(i>>>0>1073741823)c=Yt(8)|0,ki(c,6723),n[c>>2]=5956,Jt(c|0,3928,123);else{l=ze(i<<2)|0;break}else l=0;while(!1);n[e>>2]=l,r=l+(r<<2)|0,n[e+8>>2]=r,n[e+4>>2]=r,n[c>>2]=l+(i<<2)}function N_(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0;ee=y,y=y+48|0,c=ee+32|0,l=ee+28|0,p=ee+8|0,_=ee+4|0,S=ee,q=e+8|0,r=n[q>>2]|0,F=e+12|0,z=n[F>>2]|0,f=z;do if((r|0)==(z|0)){if(z=e+4|0,N=n[z>>2]|0,$=n[e>>2]|0,d=$,N>>>0<=$>>>0){r=f-d|0,r=r|0?r>>1:1,ir(p,r,r>>>2,n[e+16>>2]|0),n[_>>2]=n[z>>2],n[S>>2]=n[q>>2],n[l>>2]=n[_>>2],n[c>>2]=n[S>>2],Lr(p,l,c),r=n[e>>2]|0,n[e>>2]=n[p>>2],n[p>>2]=r,r=p+4|0,$=n[z>>2]|0,n[z>>2]=n[r>>2],n[r>>2]=$,r=p+8|0,$=n[q>>2]|0,n[q>>2]=n[r>>2],n[r>>2]=$,r=p+12|0,$=n[F>>2]|0,n[F>>2]=n[r>>2],n[r>>2]=$,rr(p),r=n[q>>2]|0;break}c=N,l=((c-d>>2)+1|0)/-2|0,e=N+(l<<2)|0,c=r-c|0,c?(ti(e|0,N|0,c|0)|0,r=(n[z>>2]|0)+(l<<2)|0):r=e,$=e+(c>>2<<2)|0,n[q>>2]=$,n[z>>2]=r,r=$}while(!1);n[r>>2]=n[i>>2],n[q>>2]=(n[q>>2]|0)+4,y=ee}function L_(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0;ee=y,y=y+48|0,l=ee+32|0,r=ee+28|0,d=ee+8|0,p=ee+4|0,_=ee,q=e+4|0,N=n[q>>2]|0,z=n[e>>2]|0,S=z;do if((N|0)==(z|0)){if(z=e+8|0,F=n[z>>2]|0,f=e+12|0,$=n[f>>2]|0,c=$,F>>>0>=$>>>0){$=c-S|0,$=$|0?$>>1:1,ir(d,$,($+3|0)>>>2,n[e+16>>2]|0),n[p>>2]=n[q>>2],n[_>>2]=n[z>>2],n[r>>2]=n[p>>2],n[l>>2]=n[_>>2],Lr(d,r,l),r=n[e>>2]|0,n[e>>2]=n[d>>2],n[d>>2]=r,r=d+4|0,$=n[q>>2]|0,n[q>>2]=n[r>>2],n[r>>2]=$,r=d+8|0,$=n[z>>2]|0,n[z>>2]=n[r>>2],n[r>>2]=$,r=d+12|0,$=n[f>>2]|0,n[f>>2]=n[r>>2],n[r>>2]=$,rr(d),r=n[q>>2]|0;break}l=F,e=((c-l>>2)+1|0)/2|0,c=F+(e<<2)|0,l=l-N|0,r=c+(0-(l>>2)<<2)|0,l?(ti(r|0,N|0,l|0)|0,l=(n[z>>2]|0)+(e<<2)|0):(r=c,l=c),n[q>>2]=r,n[z>>2]=l}else r=N;while(!1);n[r+-4>>2]=n[i>>2],n[q>>2]=(n[q>>2]|0)+-4,y=ee}function rr(e){e=e|0;var i=0,r=0,l=0;i=n[e+4>>2]|0,r=e+8|0,l=n[r>>2]|0,(l|0)!=(i|0)&&(n[r>>2]=l+(~((l+-4-i|0)>>>2)<<2)),i=n[e>>2]|0,i|0&&St(i,(n[e+12>>2]|0)-i|0)}function Lr(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0;if(d=y,y=y+16|0,f=d,c=n[i>>2]|0,I_(f,e+8|0,(n[r>>2]|0)-c>>2),e=n[f>>2]|0,l=f+4|0,(e|0)!=(n[l>>2]|0)){r=c;do n[e>>2]=n[r>>2],e=(n[f>>2]|0)+4|0,n[f>>2]=e,r=r+4|0;while((e|0)!=(n[l>>2]|0));n[i>>2]=r}D_(f),y=d}function I_(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=n[i>>2],n[e+4>>2]=(n[i>>2]|0)+(r<<2),n[e+8>>2]=i}function D_(e){e=e|0,n[n[e+8>>2]>>2]=n[e>>2]}function B_(e,i){return e=e|0,i=i|0,(n[e+4>>2]|0)==(n[i+4>>2]|0)|0}function mf(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,n[e+4>>2]=r}function k_(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;f=n[i+4>>2]|0,r=n[i+16>>2]|0,l=(r>>>0)/93|0,c=f+(l<<2)|0,(n[i+8>>2]|0)==(f|0)?i=0:i=(n[c>>2]|0)+((r-(l*93|0)|0)*44|0)|0,n[e>>2]=c,n[e+4>>2]=i}function V_(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;r=(n[i+16>>2]|0)+(n[i+20>>2]|0)|0,f=n[i+4>>2]|0,l=(r>>>0)/93|0,c=f+(l<<2)|0,(n[i+8>>2]|0)==(f|0)?i=0:i=(n[c>>2]|0)+((r-(l*93|0)|0)*44|0)|0,n[e>>2]=c,n[e+4>>2]=i}function O_(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0;if(p=y,y=y+16|0,l=p+8|0,f=p,Af(l,e),_o(f,e),c=l+4|0,i=n[c>>2]|0,f=f+4|0,(i|0)!=(n[f>>2]|0))do sn(i),i=(n[c>>2]|0)+44|0,n[c>>2]=i,r=n[l>>2]|0,(i-(n[r>>2]|0)|0)==4092&&(i=r+4|0,n[l>>2]=i,i=n[i>>2]|0,n[c>>2]=i);while((i|0)!=(n[f>>2]|0));if(n[e+20>>2]=0,c=e+8|0,l=e+4|0,r=n[l>>2]|0,i=(n[c>>2]|0)-r>>2,i>>>0>2)do St(n[r>>2]|0,4092),r=(n[l>>2]|0)+4|0,n[l>>2]=r,i=(n[c>>2]|0)-r>>2;while(i>>>0>2);switch(i|0){case 1:{i=46,d=11;break}case 2:{i=93,d=11;break}default:}(d|0)==11&&(n[e+16>>2]=i),y=p}function Af(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;f=n[i+4>>2]|0,r=n[i+16>>2]|0,l=(r>>>0)/93|0,c=f+(l<<2)|0,(n[i+8>>2]|0)==(f|0)?i=0:i=(n[c>>2]|0)+((r-(l*93|0)|0)*44|0)|0,n[e>>2]=c,n[e+4>>2]=i}function z_(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0,S=0;if(S=y,y=y+16|0,_=S,d=e+4|0,m[d>>0]|0){if(c=n[e+20>>2]|0,l=n[e+8>>2]|0,Af(_,e+32|0),e=e+12|0,(l|0)!=(n[e>>2]|0))for(p=_+4|0,d=l,f=c,l=n[p>>2]|0;c=D[d>>0]|0,c=G_((vn(i,l)|0)+c|0)|0,m[f>>0]=c,m[r>>0]=c,m[d>>0]=c,d=d+1|0,r=r+1|0,c=n[_>>2]|0,l=(n[p>>2]|0)+44|0,n[p>>2]=l,(l-(n[c>>2]|0)|0)==4092&&(l=c+4|0,n[_>>2]=l,l=n[l>>2]|0,n[p>>2]=l),(d|0)!=(n[e>>2]|0);)f=f+1|0}else{if(_=ra(i)|0,sa(_,r,n[e>>2]|0),_=n[e>>2]|0,f=r+_|0,!_)l=0;else{for(l=r,c=n[e+8>>2]|0;m[c>>0]=m[l>>0]|0,l=l+1|0,(l|0)!=(f|0);)c=c+1|0;l=n[e>>2]|0}m[d>>0]=1,r=r+l|0}return y=S,r|0}function G_(e){return e=e|0,e&255|0}function W_(e){e=e|0,un(e),De(e)}function X_(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function H_(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==11262?e+12|0:0)|0}function Z_(e){e=e|0,St(e,16)}function gf(e,i){e=e|0,i=i|0,n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0,i|0&&(rf(e,i),J_(e,i))}function Y_(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0,n[e+12>>2]=0,n[e+16>>2]=0,n[e+20>>2]=0,i|0&&j_(e,i,r)}function J_(e,i){e=e|0,i=i|0;var r=0,l=0,c=0;if(c=y,y=y+16|0,l=c,of(l,e,i),i=l+4|0,e=n[i>>2]|0,r=l+8|0,(e|0)!=(n[r>>2]|0))do m[e>>0]=0,e=(n[i>>2]|0)+1|0,n[i>>2]=e;while((e|0)!=(n[r>>2]|0));af(l),y=c}function j_(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0;if(q=y,y=y+96|0,z=q+80|0,S=q+64|0,d=q+48|0,p=q+40|0,_=q+8|0,c=q,F=q+32|0,N=q+16|0,l=(n[e+8>>2]|0)-(n[e+4>>2]|0)|0,l=(l|0?((l>>2)*93|0)+-1|0:0)-((n[e+20>>2]|0)+(n[e+16>>2]|0))|0,l>>>0<i>>>0&&lf(e,i-l|0),_o(p,e),_o(c,e),l=n[c>>2]|0,c=n[c+4>>2]|0,f=_,n[f>>2]=l,n[f+4>>2]=c,f=l,i|0&&(l=((c-(n[l>>2]|0)|0)/44|0)+i|0,(l|0)>0?(i=(l>>>0)/93|0,f=f+(i<<2)|0,n[_>>2]=f,l=(n[f>>2]|0)+((l-(i*93|0)|0)*44|0)|0):(l=92-l|0,i=f+(((l|0)/-93|0)<<2)|0,n[_>>2]=i,l=(n[i>>2]|0)+((92-((l|0)%93|0)|0)*44|0)|0),n[_+4>>2]=l),n[S>>2]=n[p>>2],n[S+4>>2]=n[p+4>>2],n[z>>2]=n[_>>2],n[z+4>>2]=n[_+4>>2],W0(d,S,z),cf(z,d),uf(S,d),ua(z,S)|0){c=N+4|0;do{if(ff(F,z),hf(N,e,F),l=n[N>>2]|0,(l|0)!=(n[c>>2]|0))do I0(l,r),l=(n[N>>2]|0)+44|0,n[N>>2]=l;while((l|0)!=(n[c>>2]|0));df(N),pf(z)|0}while(ua(z,S)|0)}y=q}function $_(e){e=e|0;var i=0,r=0;if(O_(e),i=n[e+4>>2]|0,r=n[e+8>>2]|0,(i|0)!=(r|0))do St(n[i>>2]|0,4092),i=i+4|0;while((i|0)!=(r|0));b_(e)}function q_(e,i,r){e=e|0,i=i|0,r=r|0,ds(e),n[e>>2]=4924,n[e+4>>2]=i,n[e+8>>2]=r}function Q_(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4944,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,fa(e,l),y=r}function K_(e,i){return e=e|0,i=i|0,t1(n[e+8>>2]|0,n[e+4>>2]|0,i)|0}function _f(e){e=e|0;var i=0,r=0;n[e>>2]=4924,r=e+8|0,i=n[r>>2]|0,n[r>>2]=0,i|0&&(n1(i),De(i)),br(e)}function e1(e){e=e|0,_f(e),De(e)}function t1(e,i,r){return e=e|0,i=i|0,r=r|0,X0(e+4784|0,i,Ao(e,i,r)|0)|0}function X0(e,i,r){return e=e|0,i=i|0,r=r|0,m[e>>0]|0&&(L0(i),m[e>>0]=0),r|0}function n1(e){e=e|0,mo(e)}function fa(e,i){e=e|0,i=i|0}function i1(e){e=e|0,un(e),De(e)}function r1(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+8>>2]&255](e)}function s1(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==12004?e+12|0:0)|0}function o1(e){e=e|0,St(e,16)}function H0(e){e=e|0,m[e>>0]=1}function a1(e,i,r){e=e|0,i=i|0,r=r|0,ds(e),n[e>>2]=4972,n[e+4>>2]=i,n[e+8>>2]=r}function l1(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=4992,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,fa(e,l),y=r}function c1(e,i){return e=e|0,i=i|0,f1(n[e+8>>2]|0,n[e+4>>2]|0,i)|0}function vf(e){e=e|0;var i=0,r=0;n[e>>2]=4972,r=e+8|0,i=n[r>>2]|0,n[r>>2]=0,i|0&&(d1(i),De(i)),br(e)}function u1(e){e=e|0,vf(e),De(e)}function f1(e,i,r){return e=e|0,i=i|0,r=r|0,h1(e+4784|0,i,Ao(e,i,r)|0)|0}function h1(e,i,r){return e=e|0,i=i|0,r=r|0,X0(e+328|0,i,go(e,i,r)|0)|0}function d1(e){e=e|0,p1(e+4784|0),mo(e)}function p1(e){e=e|0,G0(e)}function m1(e){e=e|0,un(e),De(e)}function A1(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+8>>2]&255](e)}function g1(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==12827?e+12|0:0)|0}function _1(e){e=e|0,St(e,16)}function v1(e){e=e|0,z0(e),H0(e+328|0)}function y1(e,i,r){e=e|0,i=i|0,r=r|0,ds(e),n[e>>2]=5020,n[e+4>>2]=i,n[e+8>>2]=r}function x1(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5040,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,fa(e,l),y=r}function M1(e,i){return e=e|0,i=i|0,E1(n[e+8>>2]|0,n[e+4>>2]|0,i)|0}function yf(e){e=e|0;var i=0,r=0;n[e>>2]=5020,r=e+8|0,i=n[r>>2]|0,n[r>>2]=0,i|0&&(w1(i),De(i)),br(e)}function S1(e){e=e|0,yf(e),De(e)}function E1(e,i,r){return e=e|0,i=i|0,r=r|0,xf(e+4784|0,i,Ao(e,i,r)|0)|0}function xf(e,i,r){return e=e|0,i=i|0,r=r|0,X0(e+316|0,i,ef(e,i,r)|0)|0}function w1(e){e=e|0,Mf(e+4784|0),mo(e)}function Mf(e){e=e|0,Ku(e)}function T1(e){e=e|0,un(e),De(e)}function R1(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+8>>2]&255](e)}function C1(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==13672?e+12|0:0)|0}function U1(e){e=e|0,St(e,16)}function Sf(e){e=e|0,$u(e),H0(e+316|0)}function b1(e,i,r){e=e|0,i=i|0,r=r|0,ds(e),n[e>>2]=5068,n[e+4>>2]=i,n[e+8>>2]=r}function F1(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5088,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,fa(e,l),y=r}function P1(e,i){return e=e|0,i=i|0,L1(n[e+8>>2]|0,n[e+4>>2]|0,i)|0}function Ef(e){e=e|0;var i=0,r=0;n[e>>2]=5068,r=e+8|0,i=n[r>>2]|0,n[r>>2]=0,i|0&&(D1(i),De(i)),br(e)}function N1(e){e=e|0,Ef(e),De(e)}function L1(e,i,r){return e=e|0,i=i|0,r=r|0,I1(e+4784|0,i,Ao(e,i,r)|0)|0}function I1(e,i,r){return e=e|0,i=i|0,r=r|0,xf(e+328|0,i,go(e,i,r)|0)|0}function D1(e){e=e|0,B1(e+4784|0),mo(e)}function B1(e){e=e|0,Mf(e+328|0),G0(e)}function k1(e){e=e|0,un(e),De(e)}function V1(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+8>>2]&255](e)}function O1(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==14573?e+12|0:0)|0}function z1(e){e=e|0,St(e,16)}function G1(e){e=e|0,z0(e),Sf(e+328|0)}function W1(e){return e=e|0,e+20|0}function X1(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=i,n[e+4>>2]=r,n[e+8>>2]=0}function H1(e,i){e=e|0,i=i|0,n[e>>2]=i,n[e+4>>2]=0,n[e+8>>2]=-1}function Z1(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;r=y,y=y+16|0,l=r+4|0,f=r,c=ze(24)|0,ov(c,i),n[f>>2]=0,n[l>>2]=n[f>>2],av(e,c,l),y=r}function vo(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function Y1(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5116,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,J1(e,l),y=r}function Z0(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function J1(e,i){e=e|0,i=i|0}function j1(e){e=e|0,un(e),De(e)}function $1(e){e=e|0,e=n[e+12>>2]|0,e|0&&De(e)}function q1(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==14966?e+12|0:0)|0}function Q1(e){e=e|0,St(e,16)}function K1(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5144,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,ev(e,l),y=r}function wf(e){e=e|0;var i=0,r=0;e=n[e+4>>2]|0,e|0&&(r=e+4|0,i=n[r>>2]|0,n[r>>2]=i+-1,(i|0)==0)&&(Gt[n[(n[e>>2]|0)+8>>2]&255](e),Bi(e))}function ev(e,i){e=e|0,i=i|0}function tv(e){e=e|0,un(e),De(e)}function nv(e){e=e|0,e=n[e+12>>2]|0,e|0&&(sv(e),De(e))}function iv(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==15127?e+12|0:0)|0}function rv(e){e=e|0,St(e,16)}function sv(e){e=e|0}function ov(e,i){e=e|0,i=i|0,ds(e),n[e>>2]=5172,n[e+4>>2]=i,n[e+8>>2]=0,n[e+12>>2]=0,n[e+16>>2]=0,m[e+20>>0]=1}function av(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5192,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,fv(e,l),y=r}function lv(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0;if(_=y,y=y+16|0,f=_,r=n[e+8>>2]|0,d=n[e+12>>2]|0,(r|0)!=(d|0)){p=f+4|0;do l=n[r>>2]|0,n[f>>2]=l,c=n[r+4>>2]|0,n[p>>2]=c,c|0&&(c=c+4|0,n[c>>2]=(n[c>>2]|0)+1),i=wo[n[(n[l>>2]|0)+12>>2]&63](l,i)|0,Dn(f),r=r+8|0;while((r|0)!=(d|0))}return r=e+20|0,m[r>>0]|0&&(m[r>>0]=0,uv(n[e+4>>2]|0)),y=_,i|0}function Tf(e){e=e|0,n[e>>2]=5172,Bu(e+8|0),br(e)}function cv(e){e=e|0,Tf(e),De(e)}function uv(e){e=e|0;var i=0;i=((ps(n[e>>2]|0)|0)&255)<<24,i=((ps(n[e>>2]|0)|0)&255)<<16|i,i=i|((ps(n[e>>2]|0)|0)&255)<<8,n[e+4>>2]=i|(ps(n[e>>2]|0)|0)&255}function ps(e){e=e|0;var i=0,r=0;return i=n[e>>2]|0,r=e+8|0,e=n[r>>2]|0,n[r>>2]=e+1,m[i+e>>0]|0}function fv(e,i){e=e|0,i=i|0}function hv(e){e=e|0,un(e),De(e)}function dv(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+8>>2]&255](e)}function pv(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==15450?e+12|0:0)|0}function mv(e){e=e|0,St(e,16)}function Y0(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(180)|0,Av(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],gv(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function ha(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(180)|0,Nv(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],Lv(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function Av(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=5220,n[e+4>>2]=i,_v(e+8|0)}function gv(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5244,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function _v(e){e=e|0,Qn(e,32,1,8,0),On(e+80|0,32,1,8,0),m[e+160>>0]=0,m[e+161>>0]=0,xv(e+164|0)}function Rf(e){e=e|0,n[e>>2]=5220,Mv(e+8|0),qn(e)}function vv(e){e=e|0,Rf(e),De(e)}function yv(e,i){return e=e|0,i=i|0,Sv(e+8|0,n[e+4>>2]|0,i)|0}function xv(e){e=e|0,m[e+4>>0]=0}function Mv(e){e=e|0,Gn(e+80|0),Kn(e)}function Sv(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;return f=y,y=y+16|0,l=f,m[e+161>>0]|0||zn(e+80|0),c=e+164|0,Ev(c)|0?(i=ms(e+80|0,i,n[c>>2]|0,0)|0,n[l>>2]=i,la(i,r)):(gs(As(i)|0,r,4),n[l>>2]=oa(r)|0),wv(c,l),y=f,r+4|0}function Ev(e){return e=e|0,(m[e+4>>0]|0)!=0|0}function ms(e,i,r,l){return e=e|0,i=i|0,r=r|0,l=l|0,r=(Tv(e,i,(n[e+36>>2]|0)+(l*44|0)|0)|0)+r|0,i=n[e+24>>2]|0,(r|0)<0?r+i|0:r-(r>>>0<i>>>0?0:i)|0}function As(e){return e=e|0,n[e>>2]|0}function gs(e,i,r){e=e|0,i=i|0,r=r|0;var l=0;if((r|0)>0){l=0;do m[i+l>>0]=ps(e)|0,l=l+1|0;while((l|0)!=(r|0))}}function wv(e,i){e=e|0,i=i|0;var r=0;r=e+4|0,m[r>>0]|0||(m[r>>0]=1),n[e>>2]=n[i>>2]}function Tv(e,i,r){e=e|0,i=i|0,r=r|0;var l=0;r=J0(i,r)|0,n[e>>2]=r;do if(r){if(r>>>0>=32){r=n[e+28>>2]|0;break}if(l=n[e+12>>2]|0,r>>>0>l>>>0?(l=r-l|0,r=J0(i,(n[e+68>>2]|0)+((r+-1|0)*44|0)|0)|0,l=r<<l|(Cf(i,l)|0)):l=J0(i,(n[e+68>>2]|0)+((r+-1|0)*44|0)|0)|0,r=n[e>>2]|0,(l|0)<(1<<r+-1|0)){r=l+1+(-1<<r)|0;break}else{r=l+1|0;break}}else r=Rv(i,e+48|0)|0;while(!1);return r|0}function J0(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0;if(z=e+8|0,N=n[z>>2]|0,c=n[i+16>>2]|0,c){if(l=e+4|0,r=n[l>>2]|0,F=N>>>15,n[z>>2]=F,_=(r>>>0)/(F>>>0)|0,p=_>>>(n[i+40>>2]|0),f=n[c+(p<<2)>>2]|0,p=(n[c+(p+1<<2)>>2]|0)+1|0,d=f+1|0,S=n[i+8>>2]|0,p>>>0>d>>>0){c=f,f=p;do d=(f+c|0)>>>1,p=(n[S+(d<<2)>>2]|0)>>>0>_>>>0,c=p?c:d,f=p?d:f,d=c+1|0;while(f>>>0>d>>>0);f=c}c=wt(n[S+(f<<2)>>2]|0,F)|0,(f|0)==(n[i+32>>2]|0)?d=N:d=wt(n[S+(d<<2)>>2]|0,F)|0}else{S=N>>>15,n[z>>2]=S,p=n[i>>2]|0,F=n[i+8>>2]|0,l=e+4|0,r=n[l>>2]|0,_=p>>>1,c=0,d=N,f=0;do q=wt(n[F+(_<<2)>>2]|0,S)|0,N=q>>>0>r>>>0,d=N?q:d,c=N?c:q,f=N?f:_,p=N?_:p,_=(f+p|0)>>>1;while((_|0)!=(f|0))}return n[l>>2]=r-c,q=d-c|0,n[z>>2]=q,q>>>0<16777216&&da(e),z=(n[i+12>>2]|0)+(f<<2)|0,n[z>>2]=(n[z>>2]|0)+1,z=i+28|0,q=(n[z>>2]|0)+-1|0,n[z>>2]=q,q||D0(i),f|0}function Cf(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;return i>>>0>19?(r=(Cv(e)|0)&65535,(Cf(e,i+-16|0)|0)<<16|r|0):(l=e+4|0,c=n[l>>2]|0,f=e+8|0,r=(n[f>>2]|0)>>>i,n[f>>2]=r,i=(c>>>0)/(r>>>0)|0,n[l>>2]=c-(wt(i,r)|0),r>>>0<16777216&&da(e),i|0)}function Rv(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0,p=0;return l=e+8|0,c=n[l>>2]|0,r=wt(c>>>13,n[i+8>>2]|0)|0,f=e+4|0,d=n[f>>2]|0,p=d>>>0>=r>>>0,p?(n[f>>2]=d-r,r=c-r|0,n[l>>2]=r):(n[l>>2]=r,d=i+12|0,n[d>>2]=(n[d>>2]|0)+1),r>>>0<16777216&&da(e),d=i+4|0,e=(n[d>>2]|0)+-1|0,n[d>>2]=e,e||Fu(i),p&1|0}function da(e){e=e|0;var i=0,r=0,l=0,c=0;i=e+4|0,r=e+8|0,l=n[i>>2]|0;do l=l<<8|(ps(n[e>>2]|0)|0)&255,n[i>>2]=l,c=n[r>>2]<<8,n[r>>2]=c;while(c>>>0<16777216)}function Cv(e){e=e|0;var i=0,r=0,l=0,c=0;return r=e+4|0,c=n[r>>2]|0,i=e+8|0,l=(n[i>>2]|0)>>>16,n[i>>2]=l,i=(c>>>0)/(l>>>0)|0,n[r>>2]=c-(wt(i,l)|0),da(e),i&65535|0}function Uv(e){e=e|0,un(e),De(e)}function bv(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function Fv(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==15904?e+12|0:0)|0}function Pv(e){e=e|0,St(e,16)}function Nv(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=5272,n[e+4>>2]=i,Iv(e+8|0)}function Lv(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5296,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function Iv(e){e=e|0,Qn(e,32,1,8,0),On(e+80|0,32,1,8,0),m[e+160>>0]=0,m[e+161>>0]=0,kv(e+164|0)}function Uf(e){e=e|0,n[e>>2]=5272,Vv(e+8|0),qn(e)}function Dv(e){e=e|0,Uf(e),De(e)}function Bv(e,i){return e=e|0,i=i|0,Ov(e+8|0,n[e+4>>2]|0,i)|0}function kv(e){e=e|0,m[e+4>>0]=0}function Vv(e){e=e|0,Gn(e+80|0),Kn(e)}function Ov(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;return f=y,y=y+16|0,l=f,m[e+161>>0]|0||zn(e+80|0),c=e+164|0,zv(c)|0?(i=ms(e+80|0,i,n[c>>2]|0,0)|0,n[l>>2]=i,ca(i,r)):(gs(As(i)|0,r,4),n[l>>2]=aa(r)|0),Gv(c,l),y=f,r+4|0}function zv(e){return e=e|0,(m[e+4>>0]|0)!=0|0}function Gv(e,i){e=e|0,i=i|0;var r=0;r=e+4|0,m[r>>0]|0||(m[r>>0]=1),n[e>>2]=n[i>>2]}function Wv(e){e=e|0,un(e),De(e)}function Xv(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function Hv(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==16402?e+12|0:0)|0}function Zv(e){e=e|0,St(e,16)}function Yv(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(172)|0,jv(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],$v(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function Jv(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(176)|0,fy(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],hy(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function jv(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=5324,n[e+4>>2]=i,qv(e+8|0)}function $v(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5348,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function qv(e){e=e|0,Qn(e,8,1,8,0),On(e+80|0,8,1,8,0),m[e+160>>0]=0,m[e+161>>0]=0,ey(e+162|0)}function bf(e){e=e|0,n[e>>2]=5324,ty(e+8|0),qn(e)}function Qv(e){e=e|0,bf(e),De(e)}function Kv(e,i){return e=e|0,i=i|0,ny(e+8|0,n[e+4>>2]|0,i)|0}function ey(e){e=e|0,m[e+1>>0]=0}function ty(e){e=e|0,Gn(e+80|0),Kn(e)}function ny(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;return f=y,y=y+16|0,l=f,m[e+161>>0]|0||zn(e+80|0),c=e+162|0,iy(c)|0?(i=(ms(e+80|0,i,m[c>>0]|0,0)|0)&255,m[l>>0]=i,ry(i,r)):(gs(As(i)|0,r,1),m[l>>0]=sy(r)|0),oy(c,l),y=f,r+1|0}function iy(e){return e=e|0,(m[e+1>>0]|0)!=0|0}function ry(e,i){e=e|0,i=i|0,m[i>>0]=e}function sy(e){return e=e|0,m[e>>0]|0}function oy(e,i){e=e|0,i=i|0;var r=0;r=e+1|0,m[r>>0]|0||(m[r>>0]=1),m[e>>0]=m[i>>0]|0}function ay(e){e=e|0,un(e),De(e)}function ly(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function cy(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==16900?e+12|0:0)|0}function uy(e){e=e|0,St(e,16)}function fy(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=5376,n[e+4>>2]=i,dy(e+8|0)}function hy(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5400,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function dy(e){e=e|0,Qn(e,16,1,8,0),On(e+80|0,16,1,8,0),m[e+160>>0]=0,m[e+161>>0]=0,Ay(e+162|0)}function Ff(e){e=e|0,n[e>>2]=5376,gy(e+8|0),qn(e)}function py(e){e=e|0,Ff(e),De(e)}function my(e,i){return e=e|0,i=i|0,_y(e+8|0,n[e+4>>2]|0,i)|0}function Ay(e){e=e|0,m[e+2>>0]=0}function gy(e){e=e|0,Gn(e+80|0),Kn(e)}function _y(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;return f=y,y=y+16|0,l=f,m[e+161>>0]|0||zn(e+80|0),c=e+162|0,vy(c)|0?(i=(ms(e+80|0,i,re[c>>1]|0,0)|0)&65535,re[l>>1]=i,yy(i,r)):(gs(As(i)|0,r,2),re[l>>1]=xy(r)|0),My(c,l),y=f,r+2|0}function vy(e){return e=e|0,(m[e+2>>0]|0)!=0|0}function yy(e,i){e=e|0,i=i|0,Nr(e,i)}function xy(e){return e=e|0,Pr(e)|0}function My(e,i){e=e|0,i=i|0;var r=0;r=e+2|0,m[r>>0]|0||(m[r>>0]=1),re[e>>1]=re[i>>1]|0}function Sy(e){e=e|0,un(e),De(e)}function Ey(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function wy(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==17398?e+12|0:0)|0}function Ty(e){e=e|0,St(e,16)}function Ry(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(172)|0,Uy(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],by(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function Cy(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;_=y,y=y+32|0,l=_+12|0,c=_,i=_+8|0,d=ze(176)|0,Wy(d,n[e+4>>2]|0),f=e+8|0,n[i>>2]=0,n[l>>2]=n[i>>2],Xy(c,d,l),d=e+12|0,i=n[d>>2]|0,p=e+16|0;do if(i>>>0>=(n[p>>2]|0)>>>0)if(i=(i-(n[f>>2]|0)>>3)+1|0,r=wi(f)|0,r>>>0<i>>>0)Tn(f);else{S=n[f>>2]|0,F=(n[p>>2]|0)-S|0,p=F>>2,Mi(l,F>>3>>>0<r>>>1>>>0?p>>>0<i>>>0?i:p:r,(n[d>>2]|0)-S>>3,e+16|0),p=l+8|0,d=n[p>>2]|0,n[d>>2]=n[c>>2],e=c+4|0,n[d+4>>2]=n[e>>2],n[c>>2]=0,n[e>>2]=0,n[p>>2]=d+8,Si(f,l),Ei(l);break}else yi(l,f,1),F=l+4|0,S=n[F>>2]|0,n[S>>2]=n[c>>2],p=c+4|0,n[S+4>>2]=n[p>>2],n[c>>2]=0,n[p>>2]=0,n[F>>2]=S+8,xi(l);while(!1);Dn(c),y=_}function Uy(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=5428,n[e+4>>2]=i,Fy(e+8|0)}function by(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5452,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function Fy(e){e=e|0,Qn(e,8,1,8,0),On(e+80|0,8,1,8,0),m[e+160>>0]=0,m[e+161>>0]=0,Ly(e+162|0)}function Pf(e){e=e|0,n[e>>2]=5428,Iy(e+8|0),qn(e)}function Py(e){e=e|0,Pf(e),De(e)}function Ny(e,i){return e=e|0,i=i|0,Dy(e+8|0,n[e+4>>2]|0,i)|0}function Ly(e){e=e|0,m[e+1>>0]=0}function Iy(e){e=e|0,Gn(e+80|0),Kn(e)}function Dy(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;return f=y,y=y+16|0,l=f,m[e+161>>0]|0||zn(e+80|0),c=e+162|0,By(c)|0?(i=(ms(e+80|0,i,D[c>>0]|0,0)|0)&255,m[l>>0]=i,O0(i,r)):(gs(As(i)|0,r,1),m[l>>0]=V0(r)|0),ky(c,l),y=f,r+1|0}function By(e){return e=e|0,(m[e+1>>0]|0)!=0|0}function ky(e,i){e=e|0,i=i|0;var r=0;r=e+1|0,m[r>>0]|0||(m[r>>0]=1),m[e>>0]=m[i>>0]|0}function Vy(e){e=e|0,un(e),De(e)}function Oy(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function zy(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==17896?e+12|0:0)|0}function Gy(e){e=e|0,St(e,16)}function Wy(e,i){e=e|0,i=i|0,Ti(e),n[e>>2]=5480,n[e+4>>2]=i,Hy(e+8|0)}function Xy(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;r=y,y=y+16|0,l=r,n[e>>2]=i,c=ze(16)|0,n[c+4>>2]=0,n[c+8>>2]=0,n[c>>2]=5504,n[c+12>>2]=i,n[e+4>>2]=c,n[l>>2]=i,n[l+4>>2]=i,Ri(e,l),y=r}function Hy(e){e=e|0,Qn(e,16,1,8,0),On(e+80|0,16,1,8,0),m[e+160>>0]=0,m[e+161>>0]=0,Jy(e+162|0)}function Nf(e){e=e|0,n[e>>2]=5480,jy(e+8|0),qn(e)}function Zy(e){e=e|0,Nf(e),De(e)}function Yy(e,i){return e=e|0,i=i|0,$y(e+8|0,n[e+4>>2]|0,i)|0}function Jy(e){e=e|0,m[e+2>>0]=0}function jy(e){e=e|0,Gn(e+80|0),Kn(e)}function $y(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;return f=y,y=y+16|0,l=f,m[e+161>>0]|0||zn(e+80|0),c=e+162|0,qy(c)|0?(i=(ms(e+80|0,i,Ae[c>>1]|0,0)|0)&65535,re[l>>1]=i,Nr(i,r)):(gs(As(i)|0,r,2),re[l>>1]=Pr(r)|0),Qy(c,l),y=f,r+2|0}function qy(e){return e=e|0,(m[e+2>>0]|0)!=0|0}function Qy(e,i){e=e|0,i=i|0;var r=0;r=e+2|0,m[r>>0]|0||(m[r>>0]=1),re[e>>1]=re[i>>1]|0}function Ky(e){e=e|0,un(e),De(e)}function ex(e){e=e|0,e=n[e+12>>2]|0,e|0&&Gt[n[(n[e>>2]|0)+4>>2]&255](e)}function tx(e,i){return e=e|0,i=i|0,((n[i+4>>2]|0)==18394?e+12|0:0)|0}function nx(e){e=e|0,St(e,16)}function NN(){}function ix(e){return e=e|0,cx(e)|0}function rx(){return 0}function sx(){return 0}function ox(e){e=e|0,e|0&&(ux(e),De(e))}function yo(){return fx()|0}function ax(){return hx()|0}function lx(){return dx()|0}function Lf(){return 0}function cx(e){return e=e|0,3360}function ux(e){e=e|0;var i=0,r=0,l=0,c=0;i=y,y=y+16|0,l=i,n[l>>2]=n[e>>2],n[e>>2]=0,r=e+4|0,n[l+4>>2]=n[r>>2],n[r>>2]=0,C0(l),r=e+8|0,n[l>>2]=n[r>>2],n[r>>2]=0,c=e+12|0,n[l+4>>2]=n[c>>2],n[c>>2]=0,U0(l),U0(r),C0(e),y=i}function fx(){return 3360}function hx(){return 3368}function dx(){return 3384}function pa(){return 18579}function ma(){return 18582}function If(){return 18584}function px(){var e=0;return e=ze(16)|0,xx(e),e|0}function mx(e){e=e|0;var i=0,r=0,l=0,c=0;i=y,y=y+16|0,r=i,c=yo()|0,l=gx(r)|0,r=_x(r)|0,lu(c|0,l|0,r|0,pa()|0,12,e|0),y=i}function Ax(e){return e=e|0,vx(hl[e&3]()|0)|0}function gx(e){return e=e|0,1}function _x(e){return e=e|0,yx()|0}function vx(e){return e=e|0,e|0}function yx(){return 5524}function xx(e){e=e|0,n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0,n[e+12>>2]=0}function Mx(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;r=y,y=y+16|0,l=r,c=r+8|0,d=n[i+4>>2]|0,n[l>>2]=n[i>>2],n[l+4>>2]=d,d=yo()|0,f=Ex(c)|0,c=wx(c)|0,i=Bf()|0,fs(d|0,e|0,f|0,c|0,i|0,4,Tx(l)|0,0),y=r}function Sx(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;f=j0(i)|0,i=n[e>>2]|0,c=n[e+4>>2]|0,e=f+(c>>1)|0,c&1&&(i=n[(n[e>>2]|0)+i>>2]|0),c=Df(r)|0,f=$0(l)|0,To[i&15](e,c,f)}function Ex(e){return e=e|0,4}function wx(e){return e=e|0,Rx()|0}function Tx(e){e=e|0;var i=0,r=0;return i=ze(8)|0,r=n[e+4>>2]|0,n[i>>2]=n[e>>2],n[i+4>>2]=r,i|0}function j0(e){return e=e|0,e|0}function Df(e){return e=e|0,e|0}function $0(e){return e=e|0,e|0}function Rx(){return 144}function Bf(){return 18587}function Cx(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;r=y,y=y+16|0,l=r,c=r+8|0,d=n[i+4>>2]|0,n[l>>2]=n[i>>2],n[l+4>>2]=d,d=yo()|0,f=bx(c)|0,c=Fx(c)|0,i=q0()|0,fs(d|0,e|0,f|0,c|0,i|0,7,Px(l)|0,0),y=r}function Ux(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;c=j0(i)|0,i=n[e>>2]|0,l=n[e+4>>2]|0,e=c+(l>>1)|0,l&1&&(i=n[(n[e>>2]|0)+i>>2]|0),c=kf(r)|0,or[i&15](e,c)}function bx(e){return e=e|0,3}function Fx(e){return e=e|0,Nx()|0}function Px(e){e=e|0;var i=0,r=0;return i=ze(8)|0,r=n[e+4>>2]|0,n[i>>2]=n[e>>2],n[i+4>>2]=r,i|0}function kf(e){return e=e|0,e|0}function Nx(){return 5528}function q0(){return 18593}function Lx(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;r=y,y=y+16|0,l=r,c=r+8|0,d=n[i+4>>2]|0,n[l>>2]=n[i>>2],n[l+4>>2]=d,d=yo()|0,f=Dx(c)|0,c=Bx(c)|0,i=zx()|0,fs(d|0,e|0,f|0,c|0,i|0,41,kx(l)|0,0),y=r}function Ix(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;return l=y,y=y+16|0,r=l,f=j0(i)|0,i=n[e>>2]|0,c=n[e+4>>2]|0,e=f+(c>>1)|0,c&1&&(i=n[(n[e>>2]|0)+i>>2]|0),n[r>>2]=Ma[i&15](e)|0,f=Vx(r)|0,y=l,f|0}function Dx(e){return e=e|0,2}function Bx(e){return e=e|0,Ox()|0}function kx(e){e=e|0;var i=0,r=0;return i=ze(8)|0,r=n[e+4>>2]|0,n[i>>2]=n[e>>2],n[i+4>>2]=r,i|0}function Vx(e){return e=e|0,n[e>>2]|0}function Ox(){return 5540}function zx(){return 18598}function LN(){}function Gx(e){return e=e|0,Jx(e)|0}function Wx(){return 0}function Xx(){return 0}function Hx(e){e=e|0,e|0&&(jx(e),De(e))}function xo(){return $x()|0}function Zx(){return qx()|0}function Yx(){return Qx()|0}function Jx(e){return e=e|0,3400}function jx(e){e=e|0;var i=0,r=0,l=0,c=0;i=y,y=y+16|0,l=i,n[l>>2]=n[e>>2],n[e>>2]=0,r=e+4|0,n[l+4>>2]=n[r>>2],n[r>>2]=0,Z0(l),r=e+16|0,n[l>>2]=n[r>>2],n[r>>2]=0,c=e+20|0,n[l+4>>2]=n[c>>2],n[c>>2]=0,vo(l),n[l>>2]=n[r>>2],n[r>>2]=0,n[l+4>>2]=n[c>>2],n[c>>2]=0,vo(l),vo(r),wf(e+8|0),Z0(e),y=i}function $x(){return 3400}function qx(){return 3408}function Qx(){return 3424}function Kx(){var e=0;return e=ze(24)|0,oM(e),e|0}function eM(e){e=e|0;var i=0,r=0,l=0,c=0;i=y,y=y+16|0,r=i,c=xo()|0,l=nM(r)|0,r=iM(r)|0,lu(c|0,l|0,r|0,pa()|0,13,e|0),y=i}function tM(e){return e=e|0,rM(hl[e&3]()|0)|0}function nM(e){return e=e|0,1}function iM(e){return e=e|0,sM()|0}function rM(e){return e=e|0,e|0}function sM(){return 5548}function oM(e){e=e|0,n[e>>2]=0,n[e+4>>2]=0,n[e+8>>2]=0,n[e+12>>2]=0,n[e+16>>2]=0,n[e+20>>2]=0}function aM(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;r=y,y=y+16|0,l=r,c=r+8|0,d=n[i+4>>2]|0,n[l>>2]=n[i>>2],n[l+4>>2]=d,d=xo()|0,f=cM(c)|0,c=uM(c)|0,i=Bf()|0,fs(d|0,e|0,f|0,c|0,i|0,5,fM(l)|0,0),y=r}function lM(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;f=Q0(i)|0,i=n[e>>2]|0,c=n[e+4>>2]|0,e=f+(c>>1)|0,c&1&&(i=n[(n[e>>2]|0)+i>>2]|0),c=Df(r)|0,f=$0(l)|0,To[i&15](e,c,f)}function cM(e){return e=e|0,4}function uM(e){return e=e|0,hM()|0}function fM(e){e=e|0;var i=0,r=0;return i=ze(8)|0,r=n[e+4>>2]|0,n[i>>2]=n[e>>2],n[i+4>>2]=r,i|0}function Q0(e){return e=e|0,e|0}function hM(){return 160}function K0(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;r=y,y=y+16|0,l=r,c=r+8|0,d=n[i+4>>2]|0,n[l>>2]=n[i>>2],n[l+4>>2]=d,d=xo()|0,f=pM(c)|0,c=mM(c)|0,i=q0()|0,fs(d|0,e|0,f|0,c|0,i|0,8,AM(l)|0,0),y=r}function dM(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;c=Q0(i)|0,i=n[e>>2]|0,l=n[e+4>>2]|0,e=c+(l>>1)|0,l&1&&(i=n[(n[e>>2]|0)+i>>2]|0),c=$0(r)|0,or[i&15](e,c)}function pM(e){return e=e|0,3}function mM(e){return e=e|0,gM()|0}function AM(e){e=e|0;var i=0,r=0;return i=ze(8)|0,r=n[e+4>>2]|0,n[i>>2]=n[e>>2],n[i+4>>2]=r,i|0}function gM(){return 5552}function _M(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;r=y,y=y+16|0,l=r,c=r+8|0,d=n[i+4>>2]|0,n[l>>2]=n[i>>2],n[l+4>>2]=d,d=xo()|0,f=yM(c)|0,c=xM(c)|0,i=q0()|0,fs(d|0,e|0,f|0,c|0,i|0,9,MM(l)|0,0),y=r}function vM(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;c=Q0(i)|0,i=n[e>>2]|0,l=n[e+4>>2]|0,e=c+(l>>1)|0,l&1&&(i=n[(n[e>>2]|0)+i>>2]|0),c=kf(r)|0,or[i&15](e,c)}function yM(e){return e=e|0,3}function xM(e){return e=e|0,SM()|0}function MM(e){e=e|0;var i=0,r=0;return i=ze(8)|0,r=n[e+4>>2]|0,n[i>>2]=n[e>>2],n[i+4>>2]=r,i|0}function SM(){return 5564}function EM(){W2()}function wM(){TM()}function TM(){RM(22144)}function RM(e){e=e|0;var i=0;i=y,y=y+16|0,n[i>>2]=e,Vf(),y=i}function Vf(){B2(CM()|0,18653),I2(UM()|0,18658,1,1,0),bM(18663),FM(18668),PM(18680),NM(18694),LM(18700),IM(18715),DM(18719),BM(18732),kM(18737),VM(18751),OM(18757),uu(zM()|0,18764),uu(GM()|0,18776),R0(WM()|0,4,18809),R0(XM()|0,2,18822),R0(HM()|0,4,18837),D2(ZM()|0,18852),YM(18868),Of(18898),zf(18935),Gf(18974),Wf(19005),Xf(19045),Hf(19074),JM(19112),jM(19142),Of(19181),zf(19213),Gf(19246),Wf(19279),Xf(19313),Hf(19346),$M(19380),qM(19411),QM(19443)}function CM(){return uE()|0}function UM(){return cE()|0}function bM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=aE()|0,Di(e|0,n[r>>2]|0,1,-128<<24>>24|0,127<<24>>24|0),y=i}function FM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=sE()|0,Di(e|0,n[r>>2]|0,1,-128<<24>>24|0,127<<24>>24|0),y=i}function PM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=iE()|0,Di(e|0,n[r>>2]|0,1,0,255),y=i}function NM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=tE()|0,Di(e|0,n[r>>2]|0,2,-32768<<16>>16|0,32767<<16>>16|0),y=i}function LM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=KS()|0,Di(e|0,n[r>>2]|0,2,0,65535),y=i}function IM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=qS()|0,Di(e|0,n[r>>2]|0,4,-2147483648,2147483647),y=i}function DM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=jS()|0,Di(e|0,n[r>>2]|0,4,0,-1),y=i}function BM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=YS()|0,Di(e|0,n[r>>2]|0,4,-2147483648,2147483647),y=i}function kM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=HS()|0,Di(e|0,n[r>>2]|0,4,0,-1),y=i}function VM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=WS()|0,cu(e|0,n[r>>2]|0,4),y=i}function OM(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,n[r>>2]=e,e=zS()|0,cu(e|0,n[r>>2]|0,8),y=i}function zM(){return OS()|0}function GM(){return VS()|0}function WM(){return kS()|0}function XM(){return BS()|0}function HM(){return DS()|0}function ZM(){return IS()|0}function YM(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=PS()|0,e=NS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function Of(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=US()|0,e=bS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function zf(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=TS()|0,e=RS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function Gf(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=SS()|0,e=ES()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function Wf(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=yS()|0,e=xS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function Xf(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=gS()|0,e=_S()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function Hf(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=pS()|0,e=mS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function JM(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=fS()|0,e=hS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function jM(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=lS()|0,e=cS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function $M(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=sS()|0,e=oS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function qM(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=nS()|0,e=iS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function QM(e){e=e|0;var i=0,r=0,l=0;i=y,y=y+16|0,r=i,n[r>>2]=e,l=KM()|0,e=eS()|0,$n(l|0,e|0,n[r>>2]|0),y=i}function KM(){return tS()|0}function eS(){return 7}function tS(){return 3440}function nS(){return rS()|0}function iS(){return 7}function rS(){return 3448}function sS(){return aS()|0}function oS(){return 6}function aS(){return 3456}function lS(){return uS()|0}function cS(){return 5}function uS(){return 3464}function fS(){return dS()|0}function hS(){return 4}function dS(){return 3472}function pS(){return AS()|0}function mS(){return 5}function AS(){return 3480}function gS(){return vS()|0}function _S(){return 4}function vS(){return 3488}function yS(){return MS()|0}function xS(){return 3}function MS(){return 3496}function SS(){return wS()|0}function ES(){return 2}function wS(){return 3504}function TS(){return CS()|0}function RS(){return 1}function CS(){return 3512}function US(){return FS()|0}function bS(){return 0}function FS(){return 3520}function PS(){return LS()|0}function NS(){return 0}function LS(){return 3528}function IS(){return 3536}function DS(){return 3544}function BS(){return 3576}function kS(){return 3600}function VS(){return 3624}function OS(){return 3648}function zS(){return GS()|0}function GS(){return 4144}function WS(){return XS()|0}function XS(){return 4136}function HS(){return ZS()|0}function ZS(){return 4128}function YS(){return JS()|0}function JS(){return 4120}function jS(){return $S()|0}function $S(){return 4112}function qS(){return QS()|0}function QS(){return 4104}function KS(){return eE()|0}function eE(){return 4096}function tE(){return nE()|0}function nE(){return 4088}function iE(){return rE()|0}function rE(){return 4072}function sE(){return oE()|0}function oE(){return 4080}function aE(){return lE()|0}function lE(){return 4064}function cE(){return 4056}function uE(){return 4040}function fE(e){e=e|0;var i=0,r=0,l=0,c=0;return i=y,y=y+16|0,r=i+8|0,l=i+4|0,c=i,n[c>>2]=e,n[l>>2]=n[c>>2],n[r>>2]=n[(n[l>>2]|0)+4>>2],e=FE(n[r>>2]|0)|0,y=i,e|0}function Ci(){return 21636}function Mo(e){return e=e|0,(e+-48|0)>>>0<10|0}function Zf(){return 5576}function Yf(e,i){e=e|0,i=i|0;var r=0,l=0;if(r=m[e>>0]|0,l=m[i>>0]|0,!(r<<24>>24)||r<<24>>24!=l<<24>>24)e=l;else{do e=e+1|0,i=i+1|0,r=m[e>>0]|0,l=m[i>>0]|0;while(!(!(r<<24>>24)||r<<24>>24!=l<<24>>24));e=l}return(r&255)-(e&255)|0}function Aa(e){e=e|0;var i=0,r=0,l=0;l=e;e:do if(!(l&3))r=5;else for(i=l;;){if(!(m[e>>0]|0)){e=i;break e}if(e=e+1|0,i=e,!(i&3)){r=5;break}}while(!1);if((r|0)==5){for(;i=n[e>>2]|0,!((i&-2139062144^-2139062144)&i+-16843009);)e=e+4|0;if((i&255)<<24>>24)do e=e+1|0;while(m[e>>0]|0)}return e-l|0}function hE(e){e=e|0}function dE(e){return e=e|0,1}function pE(e){e=e|0;var i=0,r=0;return i=e+74|0,r=m[i>>0]|0,m[i>>0]=r+255|r,i=n[e>>2]|0,i&8?(n[e>>2]=i|32,e=-1):(n[e+8>>2]=0,n[e+4>>2]=0,r=n[e+44>>2]|0,n[e+28>>2]=r,n[e+20>>2]=r,n[e+16>>2]=r+(n[e+48>>2]|0),e=0),e|0}function mE(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0;l=r+16|0,c=n[l>>2]|0,c?f=5:pE(r)|0?l=0:(c=n[l>>2]|0,f=5);e:do if((f|0)==5){if(p=r+20|0,d=n[p>>2]|0,l=d,(c-d|0)>>>0<i>>>0){l=xs[n[r+36>>2]&7](r,e,i)|0;break}t:do if((m[r+75>>0]|0)<0|(i|0)==0)f=0,c=e;else{for(d=i;c=d+-1|0,(m[e+c>>0]|0)!=10;)if(c)d=c;else{f=0,c=e;break t}if(l=xs[n[r+36>>2]&7](r,e,d)|0,l>>>0<d>>>0)break e;f=d,c=e+d|0,i=i-d|0,l=n[p>>2]|0}while(!1);Hn(l|0,c|0,i|0)|0,n[p>>2]=(n[p>>2]|0)+i,l=f+i|0}while(!1);return l|0}function AE(e,i){return e=e|0,i=i|0,i?i=gE(n[i>>2]|0,n[i+4>>2]|0,e)|0:i=0,(i|0?i:e)|0}function gE(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0;z=(n[e>>2]|0)+1794895138|0,f=Ir(n[e+8>>2]|0,z)|0,l=Ir(n[e+12>>2]|0,z)|0,c=Ir(n[e+16>>2]|0,z)|0;e:do if(f>>>0<i>>>2>>>0&&(N=i-(f<<2)|0,l>>>0<N>>>0&c>>>0<N>>>0)&&!((c|l)&3|0)){for(N=l>>>2,F=c>>>2,S=0;;){if(p=f>>>1,_=S+p|0,d=_<<1,c=d+N|0,l=Ir(n[e+(c<<2)>>2]|0,z)|0,c=Ir(n[e+(c+1<<2)>>2]|0,z)|0,!(c>>>0<i>>>0&l>>>0<(i-c|0)>>>0)){l=0;break e}if(m[e+(c+l)>>0]|0){l=0;break e}if(l=Yf(r,e+c|0)|0,!l)break;if(l=(l|0)<0,(f|0)==1){l=0;break e}S=l?S:_,f=l?p:f-p|0}l=d+F|0,c=Ir(n[e+(l<<2)>>2]|0,z)|0,l=Ir(n[e+(l+1<<2)>>2]|0,z)|0,l>>>0<i>>>0&c>>>0<(i-l|0)>>>0?l=m[e+(l+c)>>0]|0?0:e+l|0:l=0}else l=0;while(!1);return l|0}function Ir(e,i){e=e|0,i=i|0;var r=0;return r=yh(e|0)|0,(i|0?r:e)|0}function _E(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;f=i&255,l=(r|0)!=0;e:do if(l&(e&3|0)!=0)for(c=i&255;;){if((m[e>>0]|0)==c<<24>>24){c=6;break e}if(e=e+1|0,r=r+-1|0,l=(r|0)!=0,!(l&(e&3|0)!=0)){c=5;break}}else c=5;while(!1);(c|0)==5&&(l?c=6:e=0);e:do if((c|0)==6){if((m[e>>0]|0)!=(i&255)<<24>>24){l=wt(f,16843009)|0;t:do if(r>>>0>3)do{if(f=n[e>>2]^l,(f&-2139062144^-2139062144)&f+-16843009|0)break t;e=e+4|0,r=r+-4|0}while(r>>>0>3);while(!1)}if(!r)e=0;else for(l=i&255;;){if((m[e>>0]|0)==l<<24>>24)break e;if(r=r+-1|0,r)e=e+1|0;else{e=0;break}}}while(!1);return e|0}function vE(e,i,r){return e=e|0,i=i|0,r=r|0,ME(e,i,r,1,8)|0}function yE(e,i,r,l,c,f){e=e|0,i=+i,r=r|0,l=l|0,c=c|0,f=f|0;var d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0,rt=0,Ce=0,_e=0,Xe=0,oe=0,Nt=0,Qt=0,Lt=0,_t=0,jt=0,ct=0,ft=0,ui=0;ui=y,y=y+560|0,_=ui+32|0,Ce=ui+536|0,ft=ui,ct=ft,S=ui+540|0,n[Ce>>2]=0,jt=S+12|0,qf(i)|0,d=Pt()|0,(d|0)<0?(i=-i,qf(i)|0,_t=1,Lt=20247,d=Pt()|0):(_t=(c&2049|0)!=0&1,Lt=c&2048|0?20250:c&1|0?20253:20248);do if(!0&(d&2146435072|0)==2146435072)ft=(f&32|0)!=0,d=_t+3|0,yn(e,32,r,d,c&-65537),pn(e,Lt,_t),pn(e,i!=i|!1?ft?20274:20278:ft?20266:20270,3),yn(e,32,r,d,c^8192);else{if(q=+Qf(i,Ce)*2,d=q!=0,d&&(n[Ce>>2]=(n[Ce>>2]|0)+-1),rt=f|32,(rt|0)==97){N=f&32,ee=N|0?Lt+9|0:Lt,z=_t|2,d=12-l|0;do if(l>>>0>11|(d|0)==0)i=q;else{i=8;do d=d+-1|0,i=i*16;while(d|0);if((m[ee>>0]|0)==45){i=-(i+(-q-i));break}else{i=q+i-i;break}}while(!1);p=n[Ce>>2]|0,d=(p|0)<0?0-p|0:p,d=_s(d,((d|0)<0)<<31>>31,jt)|0,(d|0)==(jt|0)&&(d=S+11|0,m[d>>0]=48),m[d+-1>>0]=(p>>31&2)+43,F=d+-2|0,m[F>>0]=f+15,p=(l|0)<1,_=(c&8|0)==0,S=ft;do _t=~~i,d=S+1|0,m[S>>0]=N|D[640+_t>>0],i=(i-+(_t|0))*16,(d-ct|0)==1&&!(_&(p&i==0))?(m[d>>0]=46,S=S+2|0):S=d;while(i!=0);l|0&&(-2-ct+S|0)<(l|0)?(p=jt,_=F,d=l+2+p-_|0):(p=jt,_=F,d=p-ct-_+S|0),jt=d+z|0,yn(e,32,r,jt,c),pn(e,ee,z),yn(e,48,r,jt,c^65536),ct=S-ct|0,pn(e,ft,ct),ft=p-_|0,yn(e,48,d-(ct+ft)|0,0,0),pn(e,F,ft),yn(e,32,r,jt,c^8192),d=jt;break}p=(l|0)<0?6:l,d?(d=(n[Ce>>2]|0)+-28|0,n[Ce>>2]=d,i=q*268435456):(i=q,d=n[Ce>>2]|0),Qt=(d|0)<0?_:_+288|0,_=Qt;do oe=~~i>>>0,n[_>>2]=oe,_=_+4|0,i=(i-+(oe>>>0))*1e9;while(i!=0);if(oe=Qt,(d|0)>0)for(N=Qt;;){if(F=(d|0)<29?d:29,d=_+-4|0,d>>>0>=N>>>0){S=0;do $=_h(n[d>>2]|0,0,F|0)|0,$=ei($|0,Pt()|0,S|0,0)|0,_e=Pt()|0,S=cl($|0,_e|0,1e9,0)|0,Xe=ll(S|0,Pt()|0,1e9,0)|0,Xe=ys($|0,_e|0,Xe|0,Pt()|0)|0,Pt()|0,n[d>>2]=Xe,d=d+-4|0;while(d>>>0>=N>>>0);S?(Xe=N+-4|0,n[Xe>>2]=S,S=Xe):S=N}else S=N;e:do if(_>>>0>S>>>0)for(d=_;;){if(_=d+-4|0,n[_>>2]|0){_=d;break e}if(_>>>0>S>>>0)d=_;else break}while(!1);if(d=(n[Ce>>2]|0)-F|0,n[Ce>>2]=d,(d|0)>0)N=S;else break}else S=Qt;if((d|0)<0){l=((p+25|0)/9|0)+1|0,$=(rt|0)==102;do{if(ee=0-d|0,ee=(ee|0)<9?ee:9,S>>>0<_>>>0){F=(1<<ee)+-1|0,N=1e9>>>ee,z=0,d=S;do Xe=n[d>>2]|0,n[d>>2]=(Xe>>>ee)+z,z=wt(Xe&F,N)|0,d=d+4|0;while(d>>>0<_>>>0);S=n[S>>2]|0?S:S+4|0,z&&(n[_>>2]=z,_=_+4|0)}else S=n[S>>2]|0?S:S+4|0;d=$?Qt:S,_=(_-d>>2|0)>(l|0)?d+(l<<2)|0:_,d=(n[Ce>>2]|0)+ee|0,n[Ce>>2]=d}while((d|0)<0);$=S}else $=S;if($>>>0<_>>>0){if(d=(oe-$>>2)*9|0,F=n[$>>2]|0,F>>>0>=10){S=10;do S=S*10|0,d=d+1|0;while(F>>>0>=S>>>0)}}else d=0;if(_e=(rt|0)==103,Xe=(p|0)!=0,S=p-((rt|0)==102?0:d)+((Xe&_e)<<31>>31)|0,(S|0)<(((_-oe>>2)*9|0)+-9|0)){if(Ce=S+9216|0,S=(Ce|0)/9|0,l=Qt+4+(S+-1024<<2)|0,S=Ce-(S*9|0)|0,(S|0)<8)for(F=10;F=F*10|0,(S|0)<7;)S=S+1|0;else F=10;if(z=n[l>>2]|0,S=(z>>>0)/(F>>>0)|0,ee=z-(wt(S,F)|0)|0,N=(l+4|0)==(_|0),N&(ee|0)==0)S=l,F=$;else if(q=S&1|0?9007199254740994:9007199254740992,Ce=F>>>1,i=ee>>>0<Ce>>>0?.5:N&(ee|0)==(Ce|0)?1:1.5,_t&&(Ce=(m[Lt>>0]|0)==45,i=Ce?-i:i,q=Ce?-q:q),S=z-ee|0,n[l>>2]=S,q+i!=q){if(Ce=S+F|0,n[l>>2]=Ce,Ce>>>0>999999999)for(F=l,d=$;;)if(S=F+-4|0,n[F>>2]=0,S>>>0<d>>>0&&(d=d+-4|0,n[d>>2]=0),Ce=(n[S>>2]|0)+1|0,n[S>>2]=Ce,Ce>>>0>999999999)F=S;else{F=d;break}else S=l,F=$;if(d=(oe-F>>2)*9|0,z=n[F>>2]|0,z>>>0>=10){N=10;do N=N*10|0,d=d+1|0;while(z>>>0>=N>>>0)}}else S=l,F=$;Ce=S+4|0,_=_>>>0>Ce>>>0?Ce:_}else F=$;l=0-d|0;e:do if(_>>>0>F>>>0)for(;;){if(S=_+-4|0,n[S>>2]|0){Ce=_,rt=1;break e}if(S>>>0>F>>>0)_=S;else{Ce=S,rt=0;break}}else Ce=_,rt=0;while(!1);do if(_e){if(p=p+((Xe^1)&1)|0,(p|0)>(d|0)&(d|0)>-5?(N=f+-1|0,p=p+-1-d|0):(N=f+-2|0,p=p+-1|0),!(c&8)){if(rt&&(Nt=n[Ce+-4>>2]|0,(Nt|0)!=0))if((Nt>>>0)%10|0)S=0;else{S=0,_=10;do _=_*10|0,S=S+1|0;while(!((Nt>>>0)%(_>>>0)|0|0))}else S=9;if(_=((Ce-oe>>2)*9|0)+-9|0,(N|32|0)==102){f=_-S|0,f=(f|0)>0?f:0,p=(p|0)<(f|0)?p:f;break}else{f=_+d-S|0,f=(f|0)>0?f:0,p=(p|0)<(f|0)?p:f;break}}}else N=f;while(!1);if($=(p|0)!=0,z=$?1:c>>>3&1,ee=(N|32|0)==102,ee)_e=0,d=(d|0)>0?d:0;else{if(_=(d|0)<0?l:d,_=_s(_,((_|0)<0)<<31>>31,jt)|0,S=jt,(S-_|0)<2)do _=_+-1|0,m[_>>0]=48;while((S-_|0)<2);m[_+-1>>0]=(d>>31&2)+43,d=_+-2|0,m[d>>0]=N,_e=d,d=S-d|0}if(d=_t+1+p+z+d|0,yn(e,32,r,d,c),pn(e,Lt,_t),yn(e,48,r,d,c^65536),ee){z=F>>>0>Qt>>>0?Qt:F,ee=ft+9|0,F=ee,N=ft+8|0,S=z;do{if(_=_s(n[S>>2]|0,0,ee)|0,(S|0)==(z|0))(_|0)==(ee|0)&&(m[N>>0]=48,_=N);else if(_>>>0>ft>>>0){Or(ft|0,48,_-ct|0)|0;do _=_+-1|0;while(_>>>0>ft>>>0)}pn(e,_,F-_|0),S=S+4|0}while(S>>>0<=Qt>>>0);if((c&8|0)==0&($^1)||pn(e,20282,1),S>>>0<Ce>>>0&(p|0)>0)for(;;){if(_=_s(n[S>>2]|0,0,ee)|0,_>>>0>ft>>>0){Or(ft|0,48,_-ct|0)|0;do _=_+-1|0;while(_>>>0>ft>>>0)}if(pn(e,_,(p|0)<9?p:9),S=S+4|0,_=p+-9|0,S>>>0<Ce>>>0&(p|0)>9)p=_;else{p=_;break}}yn(e,48,p+9|0,9,0)}else{if(Ce=rt?Ce:F+4|0,F>>>0<Ce>>>0&(p|0)>-1){l=ft+9|0,$=(c&8|0)==0,rt=l,z=0-ct|0,ee=ft+8|0,N=F;do{_=_s(n[N>>2]|0,0,l)|0,(_|0)==(l|0)&&(m[ee>>0]=48,_=ee);do if((N|0)==(F|0)){if(S=_+1|0,pn(e,_,1),$&(p|0)<1){_=S;break}pn(e,20282,1),_=S}else{if(_>>>0<=ft>>>0)break;Or(ft|0,48,_+z|0)|0;do _=_+-1|0;while(_>>>0>ft>>>0)}while(!1);ct=rt-_|0,pn(e,_,(p|0)>(ct|0)?ct:p),p=p-ct|0,N=N+4|0}while(N>>>0<Ce>>>0&(p|0)>-1)}yn(e,48,p+18|0,18,0),pn(e,_e,jt-_e|0)}yn(e,32,r,d,c^8192)}while(!1);return y=ui,((d|0)<(r|0)?r:d)|0}function xE(e,i){e=e|0,i=i|0;var r=0,l=0;l=(n[i>>2]|0)+7&-8,r=+be[l>>3],n[i>>2]=l+8,be[e>>3]=r}function ME(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0,rt=0,Ce=0;Ce=y,y=y+224|0,q=Ce+208|0,ee=Ce+160|0,$=Ce+80|0,rt=Ce,f=ee,d=f+40|0;do n[f>>2]=0,f=f+4|0;while((f|0)<(d|0));return n[q>>2]=n[r>>2],(el(0,i,q,$,ee,l,c)|0)<0?r=-1:((n[e+76>>2]|0)>-1?z=dE(e)|0:z=0,r=n[e>>2]|0,N=r&32,(m[e+74>>0]|0)<1&&(n[e>>2]=r&-33),f=e+48|0,n[f>>2]|0?r=el(e,i,q,$,ee,l,c)|0:(d=e+44|0,p=n[d>>2]|0,n[d>>2]=rt,_=e+28|0,n[_>>2]=rt,S=e+20|0,n[S>>2]=rt,n[f>>2]=80,F=e+16|0,n[F>>2]=rt+80,r=el(e,i,q,$,ee,l,c)|0,p&&(xs[n[e+36>>2]&7](e,0,0)|0,r=n[S>>2]|0?r:-1,n[d>>2]=p,n[f>>2]=0,n[F>>2]=0,n[_>>2]=0,n[S>>2]=0)),f=n[e>>2]|0,n[e>>2]=f|N,z|0&&hE(e),r=f&32|0?-1:r),y=Ce,r|0}function el(e,i,r,l,c,f,d){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0,d=d|0;var p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0,rt=0,Ce=0,_e=0,Xe=0,oe=0,Nt=0,Qt=0,Lt=0,_t=0,jt=0,ct=0,ft=0,ui=0,nn=0,Gr=0,ni=0;Gr=y,y=y+64|0,ft=Gr+56|0,nn=Gr+40|0,Qt=Gr,_t=Gr+48|0,jt=Gr+60|0,n[ft>>2]=i,Xe=(e|0)!=0,oe=Qt+40|0,Nt=oe,Qt=Qt+39|0,Lt=_t+4|0,p=0,i=0,S=0;e:for(;;){do{do if((i|0)>-1)if((p|0)>(2147483647-i|0)){n[(Ci()|0)>>2]=61,i=-1;break}else{i=p+i|0;break}while(!1);if(q=n[ft>>2]|0,p=m[q>>0]|0,!(p<<24>>24)){_e=92;break e}_=q;t:for(;;){switch(p<<24>>24){case 37:{_e=10;break t}case 0:{p=_;break t}default:}Ce=_+1|0,n[ft>>2]=Ce,p=m[Ce>>0]|0,_=Ce}t:do if((_e|0)==10){_e=0,p=_;do{if((m[_+1>>0]|0)!=37)break t;p=p+1|0,_=_+2|0,n[ft>>2]=_}while((m[_>>0]|0)==37)}while(!1);p=p-q|0,Xe&&pn(e,q,p)}while(p|0);if(Ce=(Mo(m[(n[ft>>2]|0)+1>>0]|0)|0)==0,_=n[ft>>2]|0,!Ce&&(m[_+2>>0]|0)==36?($=(m[_+1>>0]|0)+-48|0,N=1,p=3):($=-1,N=S,p=1),p=_+p|0,n[ft>>2]=p,_=m[p>>0]|0,S=(_<<24>>24)+-32|0,S>>>0>31|(1<<S&75913|0)==0)F=0;else{F=0;do F=1<<S|F,p=p+1|0,n[ft>>2]=p,_=m[p>>0]|0,S=(_<<24>>24)+-32|0;while(!(S>>>0>31|(1<<S&75913|0)==0))}if(_<<24>>24==42){if(Mo(m[p+1>>0]|0)|0&&(ui=n[ft>>2]|0,(m[ui+2>>0]|0)==36))p=ui+1|0,n[c+((m[p>>0]|0)+-48<<2)>>2]=10,p=n[l+((m[p>>0]|0)+-48<<3)>>2]|0,S=1,_=ui+3|0;else{if(N|0){i=-1;break}Xe?(Ce=(n[r>>2]|0)+3&-4,p=n[Ce>>2]|0,n[r>>2]=Ce+4):p=0,S=0,_=(n[ft>>2]|0)+1|0}n[ft>>2]=_,Ce=(p|0)<0,rt=Ce?0-p|0:p,F=Ce?F|8192:F,Ce=S}else{if(p=Jf(ft)|0,(p|0)<0){i=-1;break}rt=p,Ce=N,_=n[ft>>2]|0}do if((m[_>>0]|0)==46){if(p=_+1|0,(m[p>>0]|0)!=42){n[ft>>2]=p,p=Jf(ft)|0,_=n[ft>>2]|0;break}if(Mo(m[_+2>>0]|0)|0&&(ct=n[ft>>2]|0,(m[ct+3>>0]|0)==36)){p=ct+2|0,n[c+((m[p>>0]|0)+-48<<2)>>2]=10,p=n[l+((m[p>>0]|0)+-48<<3)>>2]|0,_=ct+4|0,n[ft>>2]=_;break}if(Ce|0){i=-1;break e}Xe?(ee=(n[r>>2]|0)+3&-4,p=n[ee>>2]|0,n[r>>2]=ee+4):p=0,_=(n[ft>>2]|0)+2|0,n[ft>>2]=_}else p=-1;while(!1);for(ee=0;;){if(((m[_>>0]|0)+-65|0)>>>0>57){i=-1;break e}if(S=_,_=_+1|0,n[ft>>2]=_,S=m[(m[S>>0]|0)+-65+(176+(ee*58|0))>>0]|0,N=S&255,(N+-1|0)>>>0>=8)break;ee=N}if(!(S<<24>>24)){i=-1;break}z=($|0)>-1;do if(S<<24>>24==19)if(z){i=-1;break e}else _e=54;else{if(z){n[c+($<<2)>>2]=N,z=l+($<<3)|0,$=n[z+4>>2]|0,_e=nn,n[_e>>2]=n[z>>2],n[_e+4>>2]=$,_e=54;break}if(!Xe){i=0;break e}jf(nn,N,r,d),_=n[ft>>2]|0,_e=55}while(!1);(_e|0)==54&&(_e=0,Xe?_e=55:p=0);t:do if((_e|0)==55){_e=0,_=m[_+-1>>0]|0,_=(ee|0)!=0&(_&15|0)==3?_&-33:_,S=F&-65537,$=F&8192|0?S:F;n:do switch(_|0){case 110:switch((ee&255)<<24>>24){case 0:{n[n[nn>>2]>>2]=i,p=0;break t}case 1:{n[n[nn>>2]>>2]=i,p=0;break t}case 2:{p=n[nn>>2]|0,n[p>>2]=i,n[p+4>>2]=((i|0)<0)<<31>>31,p=0;break t}case 3:{re[n[nn>>2]>>1]=i,p=0;break t}case 4:{m[n[nn>>2]>>0]=i,p=0;break t}case 6:{n[n[nn>>2]>>2]=i,p=0;break t}case 7:{p=n[nn>>2]|0,n[p>>2]=i,n[p+4>>2]=((i|0)<0)<<31>>31,p=0;break t}default:{p=0;break t}}case 112:{_=120,p=p>>>0>8?p:8,S=$|8,_e=67;break}case 88:case 120:{S=$,_e=67;break}case 111:{z=nn,z=EE(n[z>>2]|0,n[z+4>>2]|0,oe)|0,S=Nt-z|0,F=0,N=20230,p=($&8|0)==0|(p|0)>(S|0)?p:S+1|0,S=$,_e=73;break}case 105:case 100:if(S=nn,_=n[S>>2]|0,S=n[S+4>>2]|0,(S|0)<0){_=ys(0,0,_|0,S|0)|0,S=Pt()|0,F=nn,n[F>>2]=_,n[F+4>>2]=S,F=1,N=20230,_e=72;break n}else{F=($&2049|0)!=0&1,N=$&2048|0?20231:$&1|0?20232:20230,_e=72;break n}case 117:{S=nn,F=0,N=20230,_=n[S>>2]|0,S=n[S+4>>2]|0,_e=72;break}case 99:{m[Qt>>0]=n[nn>>2],q=Qt,F=0,N=20230,z=1,_=S,p=Nt;break}case 115:{ee=n[nn>>2]|0,ee=ee|0?ee:20240,$=_E(ee,0,p)|0,ni=($|0)==0,q=ee,F=0,N=20230,z=ni?p:$-ee|0,_=S,p=ni?ee+p|0:$;break}case 67:{n[_t>>2]=n[nn>>2],n[Lt>>2]=0,n[nn>>2]=_t,N=-1,_e=79;break}case 83:{p?(N=p,_e=79):(yn(e,32,rt,0,$),p=0,_e=89);break}case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:{p=Eh[f&1](e,+be[nn>>3],rt,p,$,_)|0;break t}default:F=0,N=20230,z=p,_=$,p=Nt}while(!1);n:do if((_e|0)==67)z=nn,z=SE(n[z>>2]|0,n[z+4>>2]|0,oe,_&32)|0,N=nn,N=(S&8|0)==0|(n[N>>2]|0)==0&(n[N+4>>2]|0)==0,F=N?0:2,N=N?20230:20230+(_>>>4)|0,_e=73;else if((_e|0)==72)z=_s(_,S,oe)|0,S=$,_e=73;else if((_e|0)==79){for(_e=0,F=n[nn>>2]|0,p=0;_=n[F>>2]|0,!!_;){if(_=$f(jt,_)|0,S=(_|0)<0,S|_>>>0>(N-p|0)>>>0){_e=83;break}if(p=_+p|0,N>>>0>p>>>0)F=F+4|0;else break}if((_e|0)==83&&(_e=0,S)){i=-1;break e}if(yn(e,32,rt,p,$),!p)p=0,_e=89;else for(S=n[nn>>2]|0,F=0;;){if(_=n[S>>2]|0,!_){_e=89;break n}if(_=$f(jt,_)|0,F=_+F|0,(F|0)>(p|0)){_e=89;break n}if(pn(e,jt,_),F>>>0>=p>>>0){_e=89;break}else S=S+4|0}}while(!1);if((_e|0)==73)_e=0,_=nn,_=(n[_>>2]|0)!=0|(n[_+4>>2]|0)!=0,ni=(p|0)!=0|_,_=Nt-z+((_^1)&1)|0,q=ni?z:oe,z=ni?(p|0)>(_|0)?p:_:0,_=(p|0)>-1?S&-65537:S,p=Nt;else if((_e|0)==89){_e=0,yn(e,32,rt,p,$^8192),p=(rt|0)>(p|0)?rt:p;break}$=p-q|0,ee=(z|0)<($|0)?$:z,ni=ee+F|0,p=(rt|0)<(ni|0)?ni:rt,yn(e,32,p,ni,_),pn(e,N,F),yn(e,48,p,ni,_^65536),yn(e,48,ee,$,0),pn(e,q,$),yn(e,32,p,ni,_^8192)}while(!1);S=Ce}e:do if((_e|0)==92&&!e)if(!S)i=0;else{for(i=1;p=n[c+(i<<2)>>2]|0,!!p;)if(jf(l+(i<<3)|0,p,r,d),i=i+1|0,i>>>0>=10){i=1;break e}for(;;){if(n[c+(i<<2)>>2]|0){i=-1;break e}if(i=i+1|0,i>>>0>=10){i=1;break}}}while(!1);return y=Gr,i|0}function pn(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]&32||mE(i,r,e)|0}function Jf(e){e=e|0;var i=0,r=0;if(!(Mo(m[n[e>>2]>>0]|0)|0))i=0;else{i=0;do r=n[e>>2]|0,i=(i*10|0)+-48+(m[r>>0]|0)|0,r=r+1|0,n[e>>2]=r;while(Mo(m[r>>0]|0)|0)}return i|0}function jf(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;e:do if(i>>>0<=20)do switch(i|0){case 9:{i=(n[r>>2]|0)+3&-4,l=n[i>>2]|0,n[r>>2]=i+4,n[e>>2]=l;break e}case 10:{l=(n[r>>2]|0)+3&-4,i=n[l>>2]|0,n[r>>2]=l+4,l=e,n[l>>2]=i,n[l+4>>2]=((i|0)<0)<<31>>31;break e}case 11:{l=(n[r>>2]|0)+3&-4,i=n[l>>2]|0,n[r>>2]=l+4,l=e,n[l>>2]=i,n[l+4>>2]=0;break e}case 12:{l=(n[r>>2]|0)+7&-8,i=l,c=n[i>>2]|0,i=n[i+4>>2]|0,n[r>>2]=l+8,l=e,n[l>>2]=c,n[l+4>>2]=i;break e}case 13:{c=(n[r>>2]|0)+3&-4,l=n[c>>2]|0,n[r>>2]=c+4,l=(l&65535)<<16>>16,c=e,n[c>>2]=l,n[c+4>>2]=((l|0)<0)<<31>>31;break e}case 14:{c=(n[r>>2]|0)+3&-4,l=n[c>>2]|0,n[r>>2]=c+4,c=e,n[c>>2]=l&65535,n[c+4>>2]=0;break e}case 15:{c=(n[r>>2]|0)+3&-4,l=n[c>>2]|0,n[r>>2]=c+4,l=(l&255)<<24>>24,c=e,n[c>>2]=l,n[c+4>>2]=((l|0)<0)<<31>>31;break e}case 16:{c=(n[r>>2]|0)+3&-4,l=n[c>>2]|0,n[r>>2]=c+4,c=e,n[c>>2]=l&255,n[c+4>>2]=0;break e}case 17:{c=(n[r>>2]|0)+7&-8,f=+be[c>>3],n[r>>2]=c+8,be[e>>3]=f;break e}case 18:{or[l&15](e,r);break e}default:break e}while(!1);while(!1)}function SE(e,i,r,l){if(e=e|0,i=i|0,r=r|0,l=l|0,!((e|0)==0&(i|0)==0))do r=r+-1|0,m[r>>0]=D[640+(e&15)>>0]|0|l,e=xa(e|0,i|0,4)|0,i=Pt()|0;while(!((e|0)==0&(i|0)==0));return r|0}function EE(e,i,r){if(e=e|0,i=i|0,r=r|0,!((e|0)==0&(i|0)==0))do r=r+-1|0,m[r>>0]=e&7|48,e=xa(e|0,i|0,3)|0,i=Pt()|0;while(!((e|0)==0&(i|0)==0));return r|0}function _s(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;if(i>>>0>0|(i|0)==0&e>>>0>4294967295){do l=e,e=cl(e|0,i|0,10,0)|0,c=i,i=Pt()|0,f=ll(e|0,i|0,10,0)|0,f=ys(l|0,c|0,f|0,Pt()|0)|0,Pt()|0,r=r+-1|0,m[r>>0]=f&255|48;while(c>>>0>9|(c|0)==9&l>>>0>4294967295);i=e}else i=e;if(i)do f=i,i=(i>>>0)/10|0,r=r+-1|0,m[r>>0]=f-(i*10|0)|48;while(f>>>0>=10);return r|0}function yn(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0,d=0;if(d=y,y=y+256|0,f=d,(r|0)>(l|0)&(c&73728|0)==0){if(c=r-l|0,Or(f|0,i<<24>>24|0,(c>>>0<256?c:256)|0)|0,c>>>0>255){i=r-l|0;do pn(e,f,256),c=c+-256|0;while(c>>>0>255);c=i&255}pn(e,f,c)}y=d}function $f(e,i){return e=e|0,i=i|0,e?e=wE(e,i,0)|0:e=0,e|0}function wE(e,i,r){e=e|0,i=i|0,r=r|0;do if(e){if(i>>>0<128){m[e>>0]=i,e=1;break}if(!(n[n[(TE()|0)+176>>2]>>2]|0))if((i&-128|0)==57216){m[e>>0]=i,e=1;break}else{n[(Ci()|0)>>2]=25,e=-1;break}if(i>>>0<2048){m[e>>0]=i>>>6|192,m[e+1>>0]=i&63|128,e=2;break}if(i>>>0<55296|(i&-8192|0)==57344){m[e>>0]=i>>>12|224,m[e+1>>0]=i>>>6&63|128,m[e+2>>0]=i&63|128,e=3;break}if((i+-65536|0)>>>0<1048576){m[e>>0]=i>>>18|240,m[e+1>>0]=i>>>12&63|128,m[e+2>>0]=i>>>6&63|128,m[e+3>>0]=i&63|128,e=4;break}else{n[(Ci()|0)>>2]=25,e=-1;break}}else e=1;while(!1);return e|0}function TE(){return Zf()|0}function qf(e){e=+e;var i=0;return be[ie>>3]=e,i=n[ie>>2]|0,Zt(n[ie+4>>2]|0),i|0}function Qf(e,i){e=+e,i=i|0;var r=0,l=0,c=0;switch(be[ie>>3]=e,r=n[ie>>2]|0,l=n[ie+4>>2]|0,c=xa(r|0,l|0,52)|0,Pt()|0,c&2047){case 0:{e!=0?(e=+Qf(e*18446744073709552e3,i),r=(n[i>>2]|0)+-64|0):r=0,n[i>>2]=r;break}case 2047:break;default:n[i>>2]=(c&2047)+-1022,n[ie>>2]=r,n[ie+4>>2]=l&-2146435073|1071644672,e=+be[ie>>3]}return+e}function RE(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;e:do if(!r)e=0;else{for(;l=m[e>>0]|0,c=m[i>>0]|0,l<<24>>24==c<<24>>24;)if(r=r+-1|0,r)e=e+1|0,i=i+1|0;else{e=0;break e}e=(l&255)-(c&255)|0}while(!1);return e|0}function CE(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;return c=y,y=y+16|0,f=c,n[f>>2]=l,l=UE(e,i,r,f)|0,y=c,l|0}function UE(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0,d=0,p=0;return p=y,y=y+160|0,c=p+144|0,d=p,Hn(d|0,3672,144)|0,(i+-1|0)>>>0>2147483646?i?(n[(Ci()|0)>>2]=61,i=-1):(e=c,i=1,f=4):f=4,(f|0)==4&&(f=-2-e|0,f=i>>>0>f>>>0?f:i,n[d+48>>2]=f,c=d+20|0,n[c>>2]=e,n[d+44>>2]=e,i=e+f|0,e=d+16|0,n[e>>2]=i,n[d+28>>2]=i,i=vE(d,r,l)|0,f&&(d=n[c>>2]|0,m[d+(((d|0)==(n[e>>2]|0))<<31>>31)>>0]=0)),y=p,i|0}function bE(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;return l=e+20|0,c=n[l>>2]|0,e=(n[e+16>>2]|0)-c|0,e=e>>>0>r>>>0?r:e,Hn(c|0,i|0,e|0)|0,n[l>>2]=(n[l>>2]|0)+e,r|0}function FE(e){e=e|0;var i=0,r=0;return i=(Aa(e)|0)+1|0,r=ya(i)|0,r?e=Hn(r|0,e|0,i|0)|0:e=0,e|0}function PE(e,i){e=e|0,i=i|0;var r=0,l=0;for(r=0;;){if((D[656+r>>0]|0)==(e|0)){l=4;break}if(r=r+1|0,(r|0)==87){e=87,l=5;break}}if((l|0)==4&&(r?(e=r,l=5):r=752),(l|0)==5){r=752;do{do l=r,r=r+1|0;while(m[l>>0]|0);e=e+-1|0}while(e|0)}return NE(r,n[i+20>>2]|0)|0}function NE(e,i){return e=e|0,i=i|0,AE(e,i)|0}function LE(e){return e=e|0,PE(e,n[(IE()|0)+176>>2]|0)|0}function IE(){return Zf()|0}function DE(e,i,r){e=e|0,i=i|0,r=r|0;var l=0;return l=LE(e)|0,e=Aa(l)|0,e>>>0>=r>>>0?(e=r+-1|0,r&&(Hn(i|0,l|0,e|0)|0,m[i+e>>0]=0),e=68):(Hn(i|0,l|0,e+1|0)|0,e=0),e|0}function BE(){var e=0,i=0,r=0,l=0,c=0,f=0,d=0;l=y,y=y+48|0,f=l+32|0,i=l+24|0,d=l+16|0,c=l,l=l+36|0,e=Kf()|0,e|0&&(r=n[e>>2]|0,r|0)&&(e=r+48|0,eh(e)|0||(n[i>>2]=20420,Dr(20370,i)),i=th(e)|0,(i|0)==1126902529&(Pt()|0)==1129074247?e=n[r+44>>2]|0:e=r+80|0,n[l>>2]=e,r=n[r>>2]|0,e=n[r+4>>2]|0,xs[n[(n[954]|0)+16>>2]&7](3816,r,l)|0?(d=n[l>>2]|0,d=Ma[n[(n[d>>2]|0)+8>>2]&15](d)|0,n[c>>2]=20420,n[c+4>>2]=e,n[c+8>>2]=d,Dr(20284,c)):(n[d>>2]=20420,n[d+4>>2]=e,Dr(20329,d))),Dr(20408,f)}function Kf(){return 21640}function eh(e){return e=e|0,e=th(e)|0,(e&-256|0)==1126902528&(Pt()|0)==1129074247|0}function th(e){e=e|0;var i=0;return i=e,e=n[i>>2]|0,Zt(n[i+4>>2]|0),e|0}function Dr(e,i){e=e|0,i=i|0,fu()}function vs(e){e=e|0}function kE(e){e=e|0,vs(e),De(e)}function VE(e){e=e|0}function OE(e){e=e|0}function zE(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0;if(_=y,y=y+64|0,d=_,cn(e,i,0)|0)e=1;else if(i|0&&(p=Wn(i,3840,3824,0)|0,(p|0)!=0)){n[d>>2]=p,n[d+4>>2]=0,n[d+8>>2]=e,n[d+12>>2]=-1,e=d+16|0,i=d+24|0,l=d+48|0,c=e,f=c+36|0;do n[c>>2]=0,c=c+4|0;while((c|0)<(f|0));re[e+36>>1]=0,m[e+38>>0]=0,n[l>>2]=1,Ro[n[(n[p>>2]|0)+28>>2]&7](p,d,n[r>>2]|0,1),(n[i>>2]|0)==1?(n[r>>2]=n[e>>2],e=1):e=0}else e=0;return y=_,e|0}function GE(e,i,r,l,c,f){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0,cn(e,n[i+8>>2]|0,f)|0&&il(0,i,r,l,c)}function WE(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0;do if(cn(e,n[i+8>>2]|0,c)|0)nl(0,i,r,l);else if(cn(e,n[i>>2]|0,c)|0){if((n[i+16>>2]|0)!=(r|0)&&(f=i+20|0,(n[f>>2]|0)!=(r|0))){n[i+32>>2]=l,n[f>>2]=r,c=i+40|0,n[c>>2]=(n[c>>2]|0)+1,(n[i+36>>2]|0)==1&&(n[i+24>>2]|0)==2&&(m[i+54>>0]=1),n[i+44>>2]=4;break}(l|0)==1&&(n[i+32>>2]=1)}while(!1)}function XE(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0,cn(e,n[i+8>>2]|0,0)|0&&tl(0,i,r,l)}function cn(e,i,r){return e=e|0,i=i|0,r=r|0,r?(e|0)==(i|0)?e=1:e=(Yf(n[e+4>>2]|0,n[i+4>>2]|0)|0)==0:e=(n[e+4>>2]|0)==(n[i+4>>2]|0),e|0}function tl(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0;e=i+16|0,c=n[e>>2]|0;do if(c){if((c|0)!=(r|0)){l=i+36|0,n[l>>2]=(n[l>>2]|0)+1,n[i+24>>2]=2,m[i+54>>0]=1;break}e=i+24|0,(n[e>>2]|0)==2&&(n[e>>2]=l)}else n[e>>2]=r,n[i+24>>2]=l,n[i+36>>2]=1;while(!1)}function nl(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0;(n[i+4>>2]|0)==(r|0)&&(c=i+28|0,(n[c>>2]|0)!=1)&&(n[c>>2]=l)}function il(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,m[i+53>>0]=1;do if((n[i+4>>2]|0)==(l|0)){if(m[i+52>>0]=1,e=i+16|0,l=n[e>>2]|0,!l){if(n[e>>2]=r,n[i+24>>2]=c,n[i+36>>2]=1,!((c|0)==1&&(n[i+48>>2]|0)==1))break;m[i+54>>0]=1;break}if((l|0)!=(r|0)){c=i+36|0,n[c>>2]=(n[c>>2]|0)+1,m[i+54>>0]=1;break}l=i+24|0,e=n[l>>2]|0,(e|0)==2&&(n[l>>2]=c,e=c),(e|0)==1&&(n[i+48>>2]|0)==1&&(m[i+54>>0]=1)}while(!1)}function Wn(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0;z=y,y=y+64|0,F=z,S=n[e>>2]|0,N=e+(n[S+-8>>2]|0)|0,S=n[S+-4>>2]|0,n[F>>2]=r,n[F+4>>2]=e,n[F+8>>2]=i,n[F+12>>2]=l,e=F+16|0,i=F+20|0,l=F+24|0,c=F+28|0,f=F+32|0,d=F+40|0,p=e,_=p+36|0;do n[p>>2]=0,p=p+4|0;while((p|0)<(_|0));re[e+36>>1]=0,m[e+38>>0]=0;e:do if(cn(S,r,0)|0)n[F+48>>2]=1,Co[n[(n[S>>2]|0)+20>>2]&3](S,F,N,N,1,0),e=(n[l>>2]|0)==1?N:0;else{switch(Sa[n[(n[S>>2]|0)+24>>2]&3](S,F,N,1,0),n[F+36>>2]|0){case 0:{e=(n[d>>2]|0)==1&(n[c>>2]|0)==1&(n[f>>2]|0)==1?n[i>>2]|0:0;break e}case 1:break;default:{e=0;break e}}if((n[l>>2]|0)!=1&&!((n[d>>2]|0)==0&(n[c>>2]|0)==1&(n[f>>2]|0)==1)){e=0;break}e=n[e>>2]|0}while(!1);return y=z,e|0}function HE(e){e=e|0,vs(e),De(e)}function ZE(e,i,r,l,c,f){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0,cn(e,n[i+8>>2]|0,f)|0?il(0,i,r,l,c):(e=n[e+8>>2]|0,Co[n[(n[e>>2]|0)+20>>2]&3](e,i,r,l,c,f))}function YE(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0,d=0,p=0;e:do if(cn(e,n[i+8>>2]|0,c)|0)nl(0,i,r,l);else{if(!(cn(e,n[i>>2]|0,c)|0)){d=n[e+8>>2]|0,Sa[n[(n[d>>2]|0)+24>>2]&3](d,i,r,l,c);break}if((n[i+16>>2]|0)!=(r|0)&&(d=i+20|0,(n[d>>2]|0)!=(r|0))){n[i+32>>2]=l,l=i+44|0;do if((n[l>>2]|0)!=4)if(f=i+52|0,m[f>>0]=0,p=i+53|0,m[p>>0]=0,e=n[e+8>>2]|0,Co[n[(n[e>>2]|0)+20>>2]&3](e,i,r,r,1,c),m[p>>0]|0){if(p=(m[f>>0]|0)==0,n[l>>2]=3,p)break;break e}else{n[l>>2]=4;break}while(!1);if(n[d>>2]=r,p=i+40|0,n[p>>2]=(n[p>>2]|0)+1,(n[i+36>>2]|0)!=1||(n[i+24>>2]|0)!=2)break;m[i+54>>0]=1;break}(l|0)==1&&(n[i+32>>2]=1)}while(!1)}function JE(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0,cn(e,n[i+8>>2]|0,0)|0?tl(0,i,r,l):(e=n[e+8>>2]|0,Ro[n[(n[e>>2]|0)+28>>2]&7](e,i,r,l))}function De(e){e=e|0,al(e)}function IN(e){e=e|0}function jE(){var e=0,i=0;e=Kf()|0,e|0&&(i=n[e>>2]|0,i|0)&&eh(i+48|0)|0&&nh(n[i+12>>2]|0),nh($E()|0)}function nh(e){e=e|0;var i=0;i=y,y=y+16|0,dl[e&3](),Dr(20559,i)}function $E(){return 2}function qE(e){e=e|0}function QE(e){e=e|0,De(e)}function KE(e){return e=e|0,20599}function ga(e){e=e|0,n[e>>2]=5916,rh(e+4|0)}function ew(e){e=e|0,ga(e),De(e)}function tw(e){return e=e|0,ih(e+4|0)|0}function ih(e){return e=e|0,n[e>>2]|0}function rh(e){e=e|0;var i=0,r=0;nw(e)|0&&(i=iw(n[e>>2]|0)|0,r=i+8|0,e=n[r>>2]|0,n[r>>2]=e+-1,(e|0)<1)&&De(i)}function nw(e){return e=e|0,1}function iw(e){return e=e|0,e+-12|0}function Xn(e){e=e|0,n[e>>2]=5936,rh(e+4|0)}function rw(e){e=e|0,Xn(e),De(e)}function sw(e){return e=e|0,ih(e+4|0)|0}function ow(e){e=e|0,ga(e),De(e)}function aw(e){e=e|0,ga(e),De(e)}function lw(){var e=0;e=y,y=y+16|0,Dr(20848,e)}function cw(e){e=e|0,vs(e),De(e)}function uw(e,i,r){return e=e|0,i=i|0,r=r|0,cn(e,i,0)|0}function fw(e){e=e|0,vs(e),De(e)}function hw(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0;F=y,y=y+64|0,_=F;do if(cn(i,4048,0)|0)n[r>>2]=0,i=1;else{if(dw(e,i,0)|0){if(i=n[r>>2]|0,!i){i=1;break}n[r>>2]=n[i>>2],i=1;break}if(i|0&&(l=Wn(i,3840,3976,0)|0,(l|0)!=0))if(i=n[r>>2]|0,i|0&&(n[r>>2]=n[i>>2]),i=n[l+8>>2]|0,f=e+8|0,c=n[f>>2]|0,!(i&7&(c^7)|0)&&!((i&96^96)&c|0))if(c=e+12|0,e=n[c>>2]|0,l=l+12|0,i=n[l>>2]|0,cn(e,i,0)|0)i=1;else{if(cn(e,4040,0)|0){if(!i){i=1;break}i=(Wn(i,3840,3992,0)|0)==0;break}if(e){if(i=Wn(e,3840,3976,0)|0,i|0){if(!(n[f>>2]&1)){i=0;break}i=pw(i,n[l>>2]|0)|0;break}if(i=n[c>>2]|0,i){if(i=Wn(i,3840,4008,0)|0,i|0){if(!(n[f>>2]&1)){i=0;break}i=sh(i,n[l>>2]|0)|0;break}if(i=n[c>>2]|0,i|0&&(d=Wn(i,3840,3824,0)|0,(d|0)!=0)&&(p=n[l>>2]|0,(p|0)!=0)&&(S=Wn(p,3840,3824,0)|0,(S|0)!=0)){n[_>>2]=S,n[_+4>>2]=0,n[_+8>>2]=d,n[_+12>>2]=-1,i=_+16|0,e=_+24|0,l=_+48|0,c=i,f=c+36|0;do n[c>>2]=0,c=c+4|0;while((c|0)<(f|0));re[i+36>>1]=0,m[i+38>>0]=0,n[l>>2]=1,Ro[n[(n[S>>2]|0)+28>>2]&7](S,_,n[r>>2]|0,1);do if((n[e>>2]|0)==1){if(!(n[r>>2]|0)){i=1;break}n[r>>2]=n[i>>2],i=1}else i=0;while(!1)}else i=0}else i=0}else i=0}else i=0;else i=0}while(!1);return y=F,i|0}function dw(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;return n[e+8>>2]&24?(r=1,c=5):i|0&&(l=Wn(i,3840,3960,0)|0,(l|0)!=0)?(r=(n[l+8>>2]&24|0)!=0,c=5):r=0,(c|0)==5&&(r=cn(e,i,r)|0),r|0}function pw(e,i){e=e|0,i=i|0;for(var r=0,l=0,c=0,f=0,d=0;;){if(!i){i=0;break}if(r=Wn(i,3840,3976,0)|0,!r){i=0;break}if(c=n[e+8>>2]|0,n[r+8>>2]&~c|0){i=0;break}if(l=e+12|0,i=n[l>>2]|0,r=r+12|0,cn(i,n[r>>2]|0,0)|0){i=1;break}if((c&1|0)==0|(i|0)==0){i=0;break}if(e=Wn(i,3840,3976,0)|0,!e){d=9;break}i=n[r>>2]|0}return(d|0)==9&&(i=n[l>>2]|0,i|0&&(f=Wn(i,3840,4008,0)|0,(f|0)!=0)?i=sh(f,n[r>>2]|0)|0:i=0),i|0}function sh(e,i){e=e|0,i=i|0;var r=0;return i|0&&(r=Wn(i,3840,4008,0)|0,(r|0)!=0)&&!(n[r+8>>2]&~n[e+8>>2]|0)&&cn(n[e+12>>2]|0,n[r+12>>2]|0,0)|0?e=cn(n[e+16>>2]|0,n[r+16>>2]|0,0)|0:e=0,e|0}function mw(e){e=e|0,vs(e),De(e)}function Aw(e,i,r,l,c,f){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0;var d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0;if(cn(e,n[i+8>>2]|0,f)|0)il(0,i,r,l,c);else{$=i+52|0,p=m[$>>0]|0,ee=i+53|0,d=m[ee>>0]|0,q=n[e+12>>2]|0,F=e+16+(q<<3)|0,m[$>>0]=0,m[ee>>0]=0,rl(e+16|0,i,r,l,c,f),_=m[$>>0]|0,p=_|p,S=m[ee>>0]|0,d=S|d;e:do if((q|0)>1){N=i+24|0,z=e+8|0,q=i+54|0,e=e+24|0;do{if(d=d&1,p=p&1,m[q>>0]|0)break e;if(_<<24>>24){if((n[N>>2]|0)==1||!(n[z>>2]&2))break e}else if(S<<24>>24&&!(n[z>>2]&1|0))break e;m[$>>0]=0,m[ee>>0]=0,rl(e,i,r,l,c,f),_=m[$>>0]|0,p=_|p,S=m[ee>>0]|0,d=S|d,e=e+8|0}while(e>>>0<F>>>0)}while(!1);m[$>>0]=p<<24>>24!=0&1,m[ee>>0]=d<<24>>24!=0&1}}function gw(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0;e:do if(cn(e,n[i+8>>2]|0,c)|0)nl(0,i,r,l);else{if(!(cn(e,n[i>>2]|0,c)|0)){if(q=n[e+12>>2]|0,_=e+16+(q<<3)|0,_a(e+16|0,i,r,l,c),f=e+24|0,(q|0)<=1)break;if(e=n[e+8>>2]|0,!(e&2|0)&&(p=i+36|0,(n[p>>2]|0)!=1)){if(!(e&1)){for(e=i+54|0;;)if(m[e>>0]|0||(n[p>>2]|0)==1||(_a(f,i,r,l,c),f=f+8|0,f>>>0>=_>>>0))break e}for(e=i+24|0,d=i+54|0;;)if(m[d>>0]|0||(n[p>>2]|0)==1&&(n[e>>2]|0)==1||(_a(f,i,r,l,c),f=f+8|0,f>>>0>=_>>>0))break e}for(e=i+54|0;;)if(m[e>>0]|0||(_a(f,i,r,l,c),f=f+8|0,f>>>0>=_>>>0))break e}if((n[i+16>>2]|0)!=(r|0)&&(q=i+20|0,(n[q>>2]|0)!=(r|0))){if(n[i+32>>2]=l,z=i+44|0,(n[z>>2]|0)!=4){p=e+16+(n[e+12>>2]<<3)|0,_=i+52|0,l=i+53|0,S=i+54|0,F=e+8|0,N=i+24|0,f=0,d=e+16|0,e=0;t:for(;;){if(d>>>0>=p>>>0){d=18;break}if(m[_>>0]=0,m[l>>0]=0,rl(d,i,r,r,1,c),m[S>>0]|0){d=18;break}do if(m[l>>0]|0){if(!(m[_>>0]|0))if(n[F>>2]&1){e=1;break}else{d=19;break t}if((n[N>>2]|0)==1){f=1,d=19;break t}if(n[F>>2]&2)f=1,e=1;else{f=1,d=19;break t}}while(!1);d=d+8|0}if((d|0)==18&&(e?d=19:e=4),(d|0)==19&&(e=3),n[z>>2]=e,f&1)break}if(n[q>>2]=r,r=i+40|0,n[r>>2]=(n[r>>2]|0)+1,(n[i+36>>2]|0)!=1||(n[i+24>>2]|0)!=2)break;m[i+54>>0]=1;break}(l|0)==1&&(n[i+32>>2]=1)}while(!1)}function _w(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;e:do if(cn(e,n[i+8>>2]|0,0)|0)tl(0,i,r,l);else if(f=n[e+12>>2]|0,c=e+16+(f<<3)|0,oh(e+16|0,i,r,l),(f|0)>1){f=i+54|0,e=e+24|0;do{if(oh(e,i,r,l),m[f>>0]|0)break e;e=e+8|0}while(e>>>0<c>>>0)}while(!1)}function oh(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;f=n[e+4>>2]|0,r?(c=f>>8,f&1&&(c=n[(n[r>>2]|0)+c>>2]|0)):c=0,e=n[e>>2]|0,Ro[n[(n[e>>2]|0)+28>>2]&7](e,i,r+c|0,f&2|0?l:2)}function rl(e,i,r,l,c,f){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0;var d=0,p=0;p=n[e+4>>2]|0,d=p>>8,p&1&&(d=n[(n[l>>2]|0)+d>>2]|0),e=n[e>>2]|0,Co[n[(n[e>>2]|0)+20>>2]&3](e,i,r,l+d|0,p&2|0?c:2,f)}function _a(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0,d=0;d=n[e+4>>2]|0,f=d>>8,d&1&&(f=n[(n[r>>2]|0)+f>>2]|0),e=n[e>>2]|0,Sa[n[(n[e>>2]|0)+24>>2]&3](e,i,r+f|0,d&2|0?l:2,c)}function vw(e){e=e|0,n[e>>2]=5896}function Br(e){e=e|0;var i=0,r=0;return i=y,y=y+16|0,r=i,ah(r,e),e=yw(r)|0,y=i,e|0}function ah(e,i){e=e|0,i=i|0,Sw(e,i)}function yw(e){e=e|0;var i=0,r=0;return i=y,y=y+16|0,r=i,lh(r,n[e+4>>2]|0),(xw(r)|0)<<24>>24?e=0:e=Mw(ch(e)|0)|0,y=i,e|0}function lh(e,i){e=e|0,i=i|0,n[e>>2]=i}function xw(e){return e=e|0,m[n[e>>2]>>0]|0}function ch(e){return e=e|0,e|0}function Mw(e){e=e|0;var i=0,r=0,l=0,c=0;c=y,y=y+16|0,l=c,e=n[e+8>>2]|0,i=m[e>>0]|0;do if(i<<24>>24!=1)if(i&2)Dr(20985,l);else{m[e>>0]=2,r=1;break}else r=0;while(!1);return y=c,r|0}function Sw(e,i){e=e|0,i=i|0,n[e>>2]=i,n[e+4>>2]=i,n[e+8>>2]=i+1,n[e+12>>2]=0}function kr(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,ah(r,e),Ew(r),y=i}function Ew(e){e=e|0;var i=0,r=0;i=y,y=y+16|0,r=i,lh(r,n[e+4>>2]|0),ww(r),Tw(ch(e)|0),y=i}function ww(e){e=e|0,m[n[e>>2]>>0]=1}function Tw(e){e=e|0,m[n[e+8>>2]>>0]=1}function Rw(){return 0}function ze(e){e=e|0;var i=0,r=0;for(r=e|0?e:1;;){if(i=ya(r)|0,i|0){e=6;break}if(e=Rw()|0,!e){e=5;break}dl[e&3]()}if((e|0)==5)r=Yt(4)|0,vw(r),Jt(r|0,3880,121);else if((e|0)==6)return i|0;return 0}function uh(e){return e=e|0,ze(e)|0}function fh(e){e=e|0,De(e)}function Cw(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;return c=y,y=y+16|0,l=c,n[l>>2]=n[r>>2],e=xs[n[(n[e>>2]|0)+16>>2]&7](e,i,l)|0,e&&(n[r>>2]=n[l>>2]),y=c,e&1|0}function Uw(e){return e=e|0,e?e=(Wn(e,3840,3976,0)|0)!=0&1:e=0,e|0}function bw(e){return e=e|0,0}function Fw(){return(Pw()|0)>0|0}function Pw(){return L2()|0}function hh(e){e=e|0}function Nw(e){e=e|0,hh(e),De(e)}function Lw(e){return e=e|0,21039}function un(e){e=e|0}function Bi(e){e=e|0;var i=0,r=0;i=e+8|0,n[i>>2]|0&&(r=n[i>>2]|0,n[i>>2]=r+-1,(r|0)!=0)||Gt[n[(n[e>>2]|0)+16>>2]&255](e)}function Iw(e){if(e=e|0,e=bw(e)|0,e)lT(e,21145);else return}function Dw(e){e=e|0}function sl(e,i){e=e|0,i=i|0;var r=0,l=0;l=Aa(i)|0,r=ze(l+13|0)|0,n[r>>2]=l,n[r+4>>2]=l,n[r+8>>2]=0,r=Bw(r)|0,Hn(r|0,i|0,l+1|0)|0,n[e>>2]=r}function Bw(e){return e=e|0,e+12|0}function ki(e,i){e=e|0,i=i|0,n[e>>2]=5916,sl(e+4|0,i)}function kw(e,i){e=e|0,i=i|0,n[e>>2]=5936,sl(e+4|0,(m[i+11>>0]|0)<0?n[i>>2]|0:i)}function ci(e,i){e=e|0,i=i|0,n[e>>2]=5936,sl(e+4|0,i)}function ol(e){e=e|0,e=Yt(8)|0,ki(e,21163),n[e>>2]=5956,Jt(e|0,3928,123)}function Vw(e){e=e|0,e=Yt(8)|0,ki(e,21163),n[e>>2]=5976,Jt(e|0,3944,123)}function va(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0;c=y,y=y+16|0,l=c,r>>>0>4294967279&&ol(e),r>>>0<11?m[e+11>>0]=r:(d=r+16&-16,f=ze(d)|0,n[e>>2]=f,n[e+8>>2]=d|-2147483648,n[e+4>>2]=r,e=f),So(e,i,r)|0,m[l>>0]=0,co(e+r|0,l),y=c}function So(e,i,r){return e=e|0,i=i|0,r=r|0,r|0&&Hn(e|0,i|0,r|0)|0,e|0}function Eo(e){e=e|0,(m[e+11>>0]|0)<0&&St(n[e>>2]|0,n[e+8>>2]&2147483647)}function Ow(e,i,r,l,c,f,d,p){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0,d=d|0,p=p|0;var _=0,S=0,F=0,N=0,z=0;z=y,y=y+16|0,N=z,(-18-i|0)>>>0<r>>>0&&ol(e),(m[e+11>>0]|0)<0?F=n[e>>2]|0:F=e,i>>>0<2147483623?(_=r+i|0,S=i<<1,_=_>>>0<S>>>0?S:_,_=_>>>0<11?11:_+16&-16):_=-17,S=ze(_)|0,c|0&&So(S,F,c)|0,d|0&&So(S+c|0,p,d)|0,l=l-f|0,r=l-c|0,r|0&&So(S+c+d|0,F+c+f|0,r)|0,r=i+1|0,(r|0)!=11&&St(F,r),n[e>>2]=S,n[e+8>>2]=_|-2147483648,d=l+d|0,n[e+4>>2]=d,m[N>>0]=0,co(S+d|0,N),y=z}function dh(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0,p=0,_=0;return _=y,y=y+16|0,d=_,p=e+11|0,l=m[p>>0]|0,f=l<<24>>24<0,f?(c=(n[e+8>>2]&2147483647)+-1|0,l=n[e+4>>2]|0):(c=10,l=l&255),(c-l|0)>>>0>=r>>>0?r|0&&(f?c=n[e>>2]|0:c=e,So(c+l|0,i,r)|0,l=l+r|0,(m[p>>0]|0)<0?n[e+4>>2]=l:m[p>>0]=l,m[d>>0]=0,co(c+l|0,d)):Ow(e,c,l+r-c|0,l,l,0,r,i),y=_,e|0}function zw(e,i){return e=e|0,i=i|0,dh(e,i,hs(i)|0)|0}function Gw(e,i,r){return e=e|0,i=i|0,r=r|0,r?e=RE(e,i,r)|0:e=0,e|0}function Ww(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0,d=0;return f=m[e+11>>0]|0,d=f<<24>>24<0,d?f=n[e+4>>2]|0:f=f&255,(c|0)==-1|f>>>0<i>>>0&&Vw(e),f=f-i|0,r=f>>>0<r>>>0?f:r,d&&(e=n[e>>2]|0),f=r>>>0>c>>>0,e=Gw(e+i|0,l,f?c:r)|0,e?e|0:(r>>>0<c>>>0?-1:f&1)|0}function Xw(e){e=e|0}function Hw(e){e=e|0,De(e)}function Zw(e){return e=e|0,21228}function Yw(e,i,r){e=e|0,i=i|0,r=r|0,n[e>>2]=r,n[e+4>>2]=i}function Jw(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0;return c=y,y=y+16|0,l=c,To[n[(n[e>>2]|0)+12>>2]&15](l,e,i),(n[l+4>>2]|0)==(n[r+4>>2]|0)?e=(n[l>>2]|0)==(n[r>>2]|0):e=0,y=c,e|0}function jw(e,i,r){return e=e|0,i=i|0,r=r|0,((n[i>>2]|0)==(r|0)?(n[i+4>>2]|0)==(e|0):0)|0}function $w(e,i,r){e=e|0,i=i|0,r=r|0,(r|0)>256?va(e,21176,hs(21176)|0):ph(e,0,r)}function ph(e,i,r){e=e|0,i=i|0,r=r|0,qw(e,r)}function qw(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0,d=0;d=y,y=y+1040|0,c=d+1024|0,r=d,f=n[(Ci()|0)>>2]|0,l=Qw(DE(i,r,1024)|0,r)|0,m[l>>0]|0?r=l:(n[c>>2]=i,CE(r,1024,21211,c)|0),n[(Ci()|0)>>2]=f,va(e,r,hs(r)|0),y=d}function Qw(e,i){e=e|0,i=i|0;var r=0,l=0;switch(e|0){case 0:{r=i;break}case-1:{e=n[(Ci()|0)>>2]|0,l=3;break}default:l=3}return(l|0)==3&&((e|0)==28?r=22145:k2()),r|0}function Kw(e){e=e|0,De(e)}function eT(e){return e=e|0,21353}function tT(e,i,r){e=e|0,i=i|0,r=r|0,(r|0)>256?(mh()|0,i=6180):(iT()|0,i=6176),n[e>>2]=r,n[e+4>>2]=i}function nT(e,i,r){e=e|0,i=i|0,r=r|0,(r|0)>256?va(e,21319,hs(21319)|0):ph(e,0,r)}function mh(){return!(m[21488]|0)&&Br(21488)|0&&kr(21488),6180}function iT(){return!(m[21480]|0)&&Br(21480)|0&&kr(21480),6176}function Ah(e){e=e|0,Xn(e)}function rT(e){e=e|0,Ah(e),De(e)}function sT(e,i){e=e|0,i=i|0;var r=0;r=n[i+4>>2]|0,To[n[(n[r>>2]|0)+24>>2]&15](e,r,n[i>>2]|0)}function oT(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;for(f=y,y=y+16|0,c=f,n[i>>2]|0&&(l=m[r+11>>0]|0,l<<24>>24<0?l=n[r+4>>2]|0:l=l&255,l|0&&zw(r,21417)|0,sT(c,i),i=m[c+11>>0]|0,l=i<<24>>24<0,dh(r,l?n[c>>2]|0:c,l?n[c+4>>2]|0:i&255)|0,Eo(c)),n[e>>2]=n[r>>2],n[e+4>>2]=n[r+4>>2],n[e+8>>2]=n[r+8>>2],l=0;(l|0)!=3;)n[r+(l<<2)>>2]=0,l=l+1|0;y=f}function aT(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;l=y,y=y+32|0,f=l+12|0,c=l,va(c,r,hs(r)|0),oT(f,i,c),kw(e,f),Eo(f),Eo(c),n[e>>2]=6192,c=i,i=n[c+4>>2]|0,r=e+8|0,n[r>>2]=n[c>>2],n[r+4>>2]=i,y=l}function lT(e,i){e=e|0,i=i|0;var r=0,l=0,c=0;c=y,y=y+16|0,l=c+8|0,r=Yt(16)|0,mh()|0,n[c>>2]=e,n[c+4>>2]=6180,n[l>>2]=n[c>>2],n[l+4>>2]=n[c+4>>2],aT(r,l,i),Jt(r|0,4272,136)}function Tn(e){e=e|0,e=Yt(8)|0,ki(e,21420),n[e>>2]=5956,Jt(e|0,3928,123)}function ya(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0,$=0,rt=0,Ce=0,_e=0,Xe=0,oe=0,Nt=0;Nt=y,y=y+16|0,z=Nt;do if(e>>>0<245){if(S=e>>>0<11?16:e+11&-8,e=S>>>3,N=n[5412]|0,r=N>>>e,r&3|0)return i=(r&1^1)+e|0,e=21688+(i<<1<<2)|0,r=e+8|0,l=n[r>>2]|0,c=l+8|0,f=n[c>>2]|0,(f|0)==(e|0)?n[5412]=N&~(1<<i):(n[f+12>>2]=e,n[r>>2]=f),oe=i<<3,n[l+4>>2]=oe|3,oe=l+oe+4|0,n[oe>>2]=n[oe>>2]|1,oe=c,y=Nt,oe|0;if(F=n[5414]|0,S>>>0>F>>>0){if(r|0)return i=2<<e,i=r<<e&(i|0-i),i=(i&0-i)+-1|0,p=i>>>12&16,i=i>>>p,r=i>>>5&8,i=i>>>r,f=i>>>2&4,i=i>>>f,e=i>>>1&2,i=i>>>e,l=i>>>1&1,l=(r|p|f|e|l)+(i>>>l)|0,i=21688+(l<<1<<2)|0,e=i+8|0,f=n[e>>2]|0,p=f+8|0,r=n[p>>2]|0,(r|0)==(i|0)?(e=N&~(1<<l),n[5412]=e):(n[r+12>>2]=i,n[e>>2]=r,e=N),oe=l<<3,d=oe-S|0,n[f+4>>2]=S|3,c=f+S|0,n[c+4>>2]=d|1,n[f+oe>>2]=d,F|0&&(l=n[5417]|0,i=F>>>3,r=21688+(i<<1<<2)|0,i=1<<i,e&i?(e=r+8|0,i=n[e>>2]|0):(n[5412]=e|i,i=r,e=r+8|0),n[e>>2]=l,n[i+12>>2]=l,n[l+8>>2]=i,n[l+12>>2]=r),n[5414]=d,n[5417]=c,oe=p,y=Nt,oe|0;if(f=n[5413]|0,f){for(r=(f&0-f)+-1|0,c=r>>>12&16,r=r>>>c,l=r>>>5&8,r=r>>>l,d=r>>>2&4,r=r>>>d,p=r>>>1&2,r=r>>>p,_=r>>>1&1,_=n[21952+((l|c|d|p|_)+(r>>>_)<<2)>>2]|0,r=_,p=_,_=(n[_+4>>2]&-8)-S|0;e=n[r+16>>2]|0,!(!e&&(e=n[r+20>>2]|0,!e));)d=(n[e+4>>2]&-8)-S|0,c=d>>>0<_>>>0,r=e,p=c?e:p,_=c?d:_;if(d=p+S|0,d>>>0>p>>>0){c=n[p+24>>2]|0,i=n[p+12>>2]|0;do if((i|0)==(p|0)){if(e=p+20|0,i=n[e>>2]|0,!i&&(e=p+16|0,i=n[e>>2]|0,!i)){r=0;break}for(;;)if(l=i+20|0,r=n[l>>2]|0,r)i=r,e=l;else if(l=i+16|0,r=n[l>>2]|0,r)i=r,e=l;else break;n[e>>2]=0,r=i}else r=n[p+8>>2]|0,n[r+12>>2]=i,n[i+8>>2]=r,r=i;while(!1);do if(c|0){if(i=n[p+28>>2]|0,e=21952+(i<<2)|0,(p|0)==(n[e>>2]|0)){if(n[e>>2]=r,!r){n[5413]=f&~(1<<i);break}}else if(oe=c+16|0,n[((n[oe>>2]|0)==(p|0)?oe:c+20|0)>>2]=r,!r)break;n[r+24>>2]=c,i=n[p+16>>2]|0,i|0&&(n[r+16>>2]=i,n[i+24>>2]=r),i=n[p+20>>2]|0,i|0&&(n[r+20>>2]=i,n[i+24>>2]=r)}while(!1);return _>>>0<16?(oe=_+S|0,n[p+4>>2]=oe|3,oe=p+oe+4|0,n[oe>>2]=n[oe>>2]|1):(n[p+4>>2]=S|3,n[d+4>>2]=_|1,n[d+_>>2]=_,F|0&&(l=n[5417]|0,i=F>>>3,r=21688+(i<<1<<2)|0,i=1<<i,i&N?(e=r+8|0,i=n[e>>2]|0):(n[5412]=i|N,i=r,e=r+8|0),n[e>>2]=l,n[i+12>>2]=l,n[l+8>>2]=i,n[l+12>>2]=r),n[5414]=_,n[5417]=d),oe=p+8|0,y=Nt,oe|0}else N=S}else N=S}else N=S}else if(e>>>0<=4294967231)if(e=e+11|0,S=e&-8,l=n[5413]|0,l){c=0-S|0,e=e>>>8,e?S>>>0>16777215?_=31:(N=(e+1048320|0)>>>16&8,$=e<<N,p=($+520192|0)>>>16&4,$=$<<p,_=($+245760|0)>>>16&2,_=14-(p|N|_)+($<<_>>>15)|0,_=S>>>(_+7|0)&1|_<<1):_=0,r=n[21952+(_<<2)>>2]|0;e:do if(!r)r=0,e=0,$=61;else for(e=0,p=S<<((_|0)==31?0:25-(_>>>1)|0),f=0;;){if(d=(n[r+4>>2]&-8)-S|0,d>>>0<c>>>0)if(d)e=r,c=d;else{e=r,c=0,$=65;break e}if($=n[r+20>>2]|0,r=n[r+16+(p>>>31<<2)>>2]|0,f=($|0)==0|($|0)==(r|0)?f:$,r)p=p<<1;else{r=f,$=61;break}}while(!1);if(($|0)==61){if((r|0)==0&(e|0)==0){if(e=2<<_,e=(e|0-e)&l,!e){N=S;break}N=(e&0-e)+-1|0,d=N>>>12&16,N=N>>>d,f=N>>>5&8,N=N>>>f,p=N>>>2&4,N=N>>>p,_=N>>>1&2,N=N>>>_,r=N>>>1&1,e=0,r=n[21952+((f|d|p|_|r)+(N>>>r)<<2)>>2]|0}r?$=65:(p=e,d=c)}if(($|0)==65)for(f=r;;)if(N=(n[f+4>>2]&-8)-S|0,r=N>>>0<c>>>0,c=r?N:c,e=r?f:e,r=n[f+16>>2]|0,r||(r=n[f+20>>2]|0),r)f=r;else{p=e,d=c;break}if(p|0&&d>>>0<((n[5414]|0)-S|0)>>>0&&(F=p+S|0,F>>>0>p>>>0)){f=n[p+24>>2]|0,i=n[p+12>>2]|0;do if((i|0)==(p|0)){if(e=p+20|0,i=n[e>>2]|0,!i&&(e=p+16|0,i=n[e>>2]|0,!i)){i=0;break}for(;;)if(c=i+20|0,r=n[c>>2]|0,r)i=r,e=c;else if(c=i+16|0,r=n[c>>2]|0,r)i=r,e=c;else break;n[e>>2]=0}else oe=n[p+8>>2]|0,n[oe+12>>2]=i,n[i+8>>2]=oe;while(!1);do if(f){if(e=n[p+28>>2]|0,r=21952+(e<<2)|0,(p|0)==(n[r>>2]|0)){if(n[r>>2]=i,!i){l=l&~(1<<e),n[5413]=l;break}}else if(oe=f+16|0,n[((n[oe>>2]|0)==(p|0)?oe:f+20|0)>>2]=i,!i)break;n[i+24>>2]=f,e=n[p+16>>2]|0,e|0&&(n[i+16>>2]=e,n[e+24>>2]=i),e=n[p+20>>2]|0,e&&(n[i+20>>2]=e,n[e+24>>2]=i)}while(!1);e:do if(d>>>0<16)oe=d+S|0,n[p+4>>2]=oe|3,oe=p+oe+4|0,n[oe>>2]=n[oe>>2]|1;else{if(n[p+4>>2]=S|3,n[F+4>>2]=d|1,n[F+d>>2]=d,i=d>>>3,d>>>0<256){r=21688+(i<<1<<2)|0,e=n[5412]|0,i=1<<i,e&i?(e=r+8|0,i=n[e>>2]|0):(n[5412]=e|i,i=r,e=r+8|0),n[e>>2]=F,n[i+12>>2]=F,n[F+8>>2]=i,n[F+12>>2]=r;break}if(i=d>>>8,i?d>>>0>16777215?r=31:(Xe=(i+1048320|0)>>>16&8,oe=i<<Xe,_e=(oe+520192|0)>>>16&4,oe=oe<<_e,r=(oe+245760|0)>>>16&2,r=14-(_e|Xe|r)+(oe<<r>>>15)|0,r=d>>>(r+7|0)&1|r<<1):r=0,i=21952+(r<<2)|0,n[F+28>>2]=r,e=F+16|0,n[e+4>>2]=0,n[e>>2]=0,e=1<<r,!(l&e)){n[5413]=l|e,n[i>>2]=F,n[F+24>>2]=i,n[F+12>>2]=F,n[F+8>>2]=F;break}i=n[i>>2]|0;t:do if((n[i+4>>2]&-8|0)!=(d|0)){for(l=d<<((r|0)==31?0:25-(r>>>1)|0);r=i+16+(l>>>31<<2)|0,e=n[r>>2]|0,!!e;)if((n[e+4>>2]&-8|0)==(d|0)){i=e;break t}else l=l<<1,i=e;n[r>>2]=F,n[F+24>>2]=i,n[F+12>>2]=F,n[F+8>>2]=F;break e}while(!1);Xe=i+8|0,oe=n[Xe>>2]|0,n[oe+12>>2]=F,n[Xe>>2]=F,n[F+8>>2]=oe,n[F+12>>2]=i,n[F+24>>2]=0}while(!1);return oe=p+8|0,y=Nt,oe|0}else N=S}else N=S;else N=-1;while(!1);if(r=n[5414]|0,r>>>0>=N>>>0)return i=r-N|0,e=n[5417]|0,i>>>0>15?(oe=e+N|0,n[5417]=oe,n[5414]=i,n[oe+4>>2]=i|1,n[e+r>>2]=i,n[e+4>>2]=N|3):(n[5414]=0,n[5417]=0,n[e+4>>2]=r|3,oe=e+r+4|0,n[oe>>2]=n[oe>>2]|1),oe=e+8|0,y=Nt,oe|0;if(d=n[5415]|0,d>>>0>N>>>0)return _e=d-N|0,n[5415]=_e,oe=n[5418]|0,Xe=oe+N|0,n[5418]=Xe,n[Xe+4>>2]=_e|1,n[oe+4>>2]=N|3,oe=oe+8|0,y=Nt,oe|0;if(n[5530]|0?e=n[5532]|0:(n[5532]=4096,n[5531]=4096,n[5533]=-1,n[5534]=-1,n[5535]=0,n[5523]=0,n[5530]=z&-16^1431655768,e=4096),p=N+48|0,_=N+47|0,f=e+_|0,c=0-e|0,S=f&c,S>>>0<=N>>>0||(e=n[5522]|0,e|0&&(F=n[5520]|0,z=F+S|0,z>>>0<=F>>>0|z>>>0>e>>>0)))return oe=0,y=Nt,oe|0;e:do if(n[5523]&4)i=0,$=143;else{r=n[5418]|0;t:do if(r){for(l=22096;z=n[l>>2]|0,!(z>>>0<=r>>>0&&(z+(n[l+4>>2]|0)|0)>>>0>r>>>0);)if(e=n[l+8>>2]|0,e)l=e;else{$=128;break t}if(i=f-d&c,i>>>0<2147483647)if(e=Vr(i)|0,(e|0)==((n[l>>2]|0)+(n[l+4>>2]|0)|0)){if((e|0)!=-1){d=i,f=e,$=145;break e}}else l=e,$=136;else i=0}else $=128;while(!1);do if(($|0)==128)if(r=Vr(0)|0,(r|0)!=-1&&(i=r,q=n[5531]|0,ee=q+-1|0,i=(ee&i|0?(ee+i&0-q)-i|0:0)+S|0,q=n[5520]|0,ee=i+q|0,i>>>0>N>>>0&i>>>0<2147483647)){if(z=n[5522]|0,z|0&&ee>>>0<=q>>>0|ee>>>0>z>>>0){i=0;break}if(e=Vr(i)|0,(e|0)==(r|0)){d=i,f=r,$=145;break e}else l=e,$=136}else i=0;while(!1);do if(($|0)==136){if(r=0-i|0,!(p>>>0>i>>>0&(i>>>0<2147483647&(l|0)!=-1)))if((l|0)==-1){i=0;break}else{d=i,f=l,$=145;break e}if(e=n[5532]|0,e=_-i+e&0-e,e>>>0>=2147483647){d=i,f=l,$=145;break e}if((Vr(e)|0)==-1){Vr(r)|0,i=0;break}else{d=e+i|0,f=l,$=145;break e}}while(!1);n[5523]=n[5523]|4,$=143}while(!1);if(($|0)==143&&S>>>0<2147483647&&(_e=Vr(S)|0,ee=Vr(0)|0,rt=ee-_e|0,Ce=rt>>>0>(N+40|0)>>>0,!((_e|0)==-1|Ce^1|_e>>>0<ee>>>0&((_e|0)!=-1&(ee|0)!=-1)^1))&&(d=Ce?rt:i,f=_e,$=145),($|0)==145){i=(n[5520]|0)+d|0,n[5520]=i,i>>>0>(n[5521]|0)>>>0&&(n[5521]=i),_=n[5418]|0;e:do if(_){for(i=22096;;){if(e=n[i>>2]|0,r=n[i+4>>2]|0,(f|0)==(e+r|0)){$=154;break}if(l=n[i+8>>2]|0,l)i=l;else break}if(($|0)==154&&(Xe=i+4|0,(n[i+12>>2]&8|0)==0)&&f>>>0>_>>>0&e>>>0<=_>>>0){n[Xe>>2]=r+d,oe=(n[5415]|0)+d|0,_e=_+8|0,_e=_e&7|0?0-_e&7:0,Xe=_+_e|0,_e=oe-_e|0,n[5418]=Xe,n[5415]=_e,n[Xe+4>>2]=_e|1,n[_+oe+4>>2]=40,n[5419]=n[5534];break}for(f>>>0<(n[5416]|0)>>>0&&(n[5416]=f),r=f+d|0,i=22096;;){if((n[i>>2]|0)==(r|0)){$=162;break}if(e=n[i+8>>2]|0,e)i=e;else break}if(($|0)==162&&!(n[i+12>>2]&8|0)){n[i>>2]=f,F=i+4|0,n[F>>2]=(n[F>>2]|0)+d,F=f+8|0,F=f+(F&7|0?0-F&7:0)|0,i=r+8|0,i=r+(i&7|0?0-i&7:0)|0,S=F+N|0,p=i-F-N|0,n[F+4>>2]=N|3;t:do if((_|0)==(i|0))oe=(n[5415]|0)+p|0,n[5415]=oe,n[5418]=S,n[S+4>>2]=oe|1;else{if((n[5417]|0)==(i|0)){oe=(n[5414]|0)+p|0,n[5414]=oe,n[5417]=S,n[S+4>>2]=oe|1,n[S+oe>>2]=oe;break}if(e=n[i+4>>2]|0,(e&3|0)==1){d=e&-8,l=e>>>3;n:do if(e>>>0<256)if(e=n[i+8>>2]|0,r=n[i+12>>2]|0,(r|0)==(e|0)){n[5412]=n[5412]&~(1<<l);break}else{n[e+12>>2]=r,n[r+8>>2]=e;break}else{f=n[i+24>>2]|0,e=n[i+12>>2]|0;do if((e|0)==(i|0)){if(r=i+16|0,l=r+4|0,e=n[l>>2]|0,e)r=l;else if(e=n[r>>2]|0,!e){e=0;break}for(;;)if(c=e+20|0,l=n[c>>2]|0,l)e=l,r=c;else if(c=e+16|0,l=n[c>>2]|0,l)e=l,r=c;else break;n[r>>2]=0}else oe=n[i+8>>2]|0,n[oe+12>>2]=e,n[e+8>>2]=oe;while(!1);if(!f)break;r=n[i+28>>2]|0,l=21952+(r<<2)|0;do if((n[l>>2]|0)!=(i|0)){if(oe=f+16|0,n[((n[oe>>2]|0)==(i|0)?oe:f+20|0)>>2]=e,!e)break n}else{if(n[l>>2]=e,e|0)break;n[5413]=n[5413]&~(1<<r);break n}while(!1);if(n[e+24>>2]=f,r=i+16|0,l=n[r>>2]|0,l|0&&(n[e+16>>2]=l,n[l+24>>2]=e),r=n[r+4>>2]|0,!r)break;n[e+20>>2]=r,n[r+24>>2]=e}while(!1);i=i+d|0,c=d+p|0}else c=p;if(i=i+4|0,n[i>>2]=n[i>>2]&-2,n[S+4>>2]=c|1,n[S+c>>2]=c,i=c>>>3,c>>>0<256){r=21688+(i<<1<<2)|0,e=n[5412]|0,i=1<<i,e&i?(e=r+8|0,i=n[e>>2]|0):(n[5412]=e|i,i=r,e=r+8|0),n[e>>2]=S,n[i+12>>2]=S,n[S+8>>2]=i,n[S+12>>2]=r;break}i=c>>>8;do if(!i)l=0;else{if(c>>>0>16777215){l=31;break}Xe=(i+1048320|0)>>>16&8,oe=i<<Xe,_e=(oe+520192|0)>>>16&4,oe=oe<<_e,l=(oe+245760|0)>>>16&2,l=14-(_e|Xe|l)+(oe<<l>>>15)|0,l=c>>>(l+7|0)&1|l<<1}while(!1);if(i=21952+(l<<2)|0,n[S+28>>2]=l,e=S+16|0,n[e+4>>2]=0,n[e>>2]=0,e=n[5413]|0,r=1<<l,!(e&r)){n[5413]=e|r,n[i>>2]=S,n[S+24>>2]=i,n[S+12>>2]=S,n[S+8>>2]=S;break}i=n[i>>2]|0;n:do if((n[i+4>>2]&-8|0)!=(c|0)){for(l=c<<((l|0)==31?0:25-(l>>>1)|0);r=i+16+(l>>>31<<2)|0,e=n[r>>2]|0,!!e;)if((n[e+4>>2]&-8|0)==(c|0)){i=e;break n}else l=l<<1,i=e;n[r>>2]=S,n[S+24>>2]=i,n[S+12>>2]=S,n[S+8>>2]=S;break t}while(!1);Xe=i+8|0,oe=n[Xe>>2]|0,n[oe+12>>2]=S,n[Xe>>2]=S,n[S+8>>2]=oe,n[S+12>>2]=i,n[S+24>>2]=0}while(!1);return oe=F+8|0,y=Nt,oe|0}for(i=22096;e=n[i>>2]|0,!(e>>>0<=_>>>0&&(oe=e+(n[i+4>>2]|0)|0,oe>>>0>_>>>0));)i=n[i+8>>2]|0;c=oe+-47|0,e=c+8|0,e=c+(e&7|0?0-e&7:0)|0,c=_+16|0,e=e>>>0<c>>>0?_:e,i=e+8|0,r=d+-40|0,_e=f+8|0,_e=_e&7|0?0-_e&7:0,Xe=f+_e|0,_e=r-_e|0,n[5418]=Xe,n[5415]=_e,n[Xe+4>>2]=_e|1,n[f+r+4>>2]=40,n[5419]=n[5534],r=e+4|0,n[r>>2]=27,n[i>>2]=n[5524],n[i+4>>2]=n[5525],n[i+8>>2]=n[5526],n[i+12>>2]=n[5527],n[5524]=f,n[5525]=d,n[5527]=0,n[5526]=i,i=e+24|0;do Xe=i,i=i+4|0,n[i>>2]=7;while((Xe+8|0)>>>0<oe>>>0);if((e|0)!=(_|0)){if(f=e-_|0,n[r>>2]=n[r>>2]&-2,n[_+4>>2]=f|1,n[e>>2]=f,i=f>>>3,f>>>0<256){r=21688+(i<<1<<2)|0,e=n[5412]|0,i=1<<i,e&i?(e=r+8|0,i=n[e>>2]|0):(n[5412]=e|i,i=r,e=r+8|0),n[e>>2]=_,n[i+12>>2]=_,n[_+8>>2]=i,n[_+12>>2]=r;break}if(i=f>>>8,i?f>>>0>16777215?l=31:(Xe=(i+1048320|0)>>>16&8,oe=i<<Xe,_e=(oe+520192|0)>>>16&4,oe=oe<<_e,l=(oe+245760|0)>>>16&2,l=14-(_e|Xe|l)+(oe<<l>>>15)|0,l=f>>>(l+7|0)&1|l<<1):l=0,r=21952+(l<<2)|0,n[_+28>>2]=l,n[_+20>>2]=0,n[c>>2]=0,i=n[5413]|0,e=1<<l,!(i&e)){n[5413]=i|e,n[r>>2]=_,n[_+24>>2]=r,n[_+12>>2]=_,n[_+8>>2]=_;break}i=n[r>>2]|0;t:do if((n[i+4>>2]&-8|0)!=(f|0)){for(l=f<<((l|0)==31?0:25-(l>>>1)|0);r=i+16+(l>>>31<<2)|0,e=n[r>>2]|0,!!e;)if((n[e+4>>2]&-8|0)==(f|0)){i=e;break t}else l=l<<1,i=e;n[r>>2]=_,n[_+24>>2]=i,n[_+12>>2]=_,n[_+8>>2]=_;break e}while(!1);Xe=i+8|0,oe=n[Xe>>2]|0,n[oe+12>>2]=_,n[Xe>>2]=_,n[_+8>>2]=oe,n[_+12>>2]=i,n[_+24>>2]=0}}else oe=n[5416]|0,(oe|0)==0|f>>>0<oe>>>0&&(n[5416]=f),n[5524]=f,n[5525]=d,n[5527]=0,n[5421]=n[5530],n[5420]=-1,n[5425]=21688,n[5424]=21688,n[5427]=21696,n[5426]=21696,n[5429]=21704,n[5428]=21704,n[5431]=21712,n[5430]=21712,n[5433]=21720,n[5432]=21720,n[5435]=21728,n[5434]=21728,n[5437]=21736,n[5436]=21736,n[5439]=21744,n[5438]=21744,n[5441]=21752,n[5440]=21752,n[5443]=21760,n[5442]=21760,n[5445]=21768,n[5444]=21768,n[5447]=21776,n[5446]=21776,n[5449]=21784,n[5448]=21784,n[5451]=21792,n[5450]=21792,n[5453]=21800,n[5452]=21800,n[5455]=21808,n[5454]=21808,n[5457]=21816,n[5456]=21816,n[5459]=21824,n[5458]=21824,n[5461]=21832,n[5460]=21832,n[5463]=21840,n[5462]=21840,n[5465]=21848,n[5464]=21848,n[5467]=21856,n[5466]=21856,n[5469]=21864,n[5468]=21864,n[5471]=21872,n[5470]=21872,n[5473]=21880,n[5472]=21880,n[5475]=21888,n[5474]=21888,n[5477]=21896,n[5476]=21896,n[5479]=21904,n[5478]=21904,n[5481]=21912,n[5480]=21912,n[5483]=21920,n[5482]=21920,n[5485]=21928,n[5484]=21928,n[5487]=21936,n[5486]=21936,oe=d+-40|0,_e=f+8|0,_e=_e&7|0?0-_e&7:0,Xe=f+_e|0,_e=oe-_e|0,n[5418]=Xe,n[5415]=_e,n[Xe+4>>2]=_e|1,n[f+oe+4>>2]=40,n[5419]=n[5534];while(!1);if(i=n[5415]|0,i>>>0>N>>>0)return _e=i-N|0,n[5415]=_e,oe=n[5418]|0,Xe=oe+N|0,n[5418]=Xe,n[Xe+4>>2]=_e|1,n[oe+4>>2]=N|3,oe=oe+8|0,y=Nt,oe|0}return n[(Ci()|0)>>2]=48,oe=0,y=Nt,oe|0}function al(e){e=e|0;var i=0,r=0,l=0,c=0,f=0,d=0,p=0,_=0;if(e){r=e+-8|0,c=n[5416]|0,e=n[e+-4>>2]|0,i=e&-8,_=r+i|0;do if(e&1)p=r,d=r;else{if(l=n[r>>2]|0,!(e&3)||(d=r+(0-l)|0,f=l+i|0,d>>>0<c>>>0))return;if((n[5417]|0)==(d|0)){if(e=_+4|0,i=n[e>>2]|0,(i&3|0)!=3){p=d,i=f;break}n[5414]=f,n[e>>2]=i&-2,n[d+4>>2]=f|1,n[d+f>>2]=f;return}if(r=l>>>3,l>>>0<256)if(e=n[d+8>>2]|0,i=n[d+12>>2]|0,(i|0)==(e|0)){n[5412]=n[5412]&~(1<<r),p=d,i=f;break}else{n[e+12>>2]=i,n[i+8>>2]=e,p=d,i=f;break}c=n[d+24>>2]|0,e=n[d+12>>2]|0;do if((e|0)==(d|0)){if(i=d+16|0,r=i+4|0,e=n[r>>2]|0,e)i=r;else if(e=n[i>>2]|0,!e){e=0;break}for(;;)if(l=e+20|0,r=n[l>>2]|0,r)e=r,i=l;else if(l=e+16|0,r=n[l>>2]|0,r)e=r,i=l;else break;n[i>>2]=0}else p=n[d+8>>2]|0,n[p+12>>2]=e,n[e+8>>2]=p;while(!1);if(c){if(i=n[d+28>>2]|0,r=21952+(i<<2)|0,(n[r>>2]|0)==(d|0)){if(n[r>>2]=e,!e){n[5413]=n[5413]&~(1<<i),p=d,i=f;break}}else if(p=c+16|0,n[((n[p>>2]|0)==(d|0)?p:c+20|0)>>2]=e,!e){p=d,i=f;break}n[e+24>>2]=c,i=d+16|0,r=n[i>>2]|0,r|0&&(n[e+16>>2]=r,n[r+24>>2]=e),i=n[i+4>>2]|0,i?(n[e+20>>2]=i,n[i+24>>2]=e,p=d,i=f):(p=d,i=f)}else p=d,i=f}while(!1);if(!(d>>>0>=_>>>0)&&(e=_+4|0,l=n[e>>2]|0,!!(l&1))){if(l&2)n[e>>2]=l&-2,n[p+4>>2]=i|1,n[d+i>>2]=i,c=i;else{if((n[5418]|0)==(_|0)){if(_=(n[5415]|0)+i|0,n[5415]=_,n[5418]=p,n[p+4>>2]=_|1,(p|0)!=(n[5417]|0))return;n[5417]=0,n[5414]=0;return}if((n[5417]|0)==(_|0)){_=(n[5414]|0)+i|0,n[5414]=_,n[5417]=d,n[p+4>>2]=_|1,n[d+_>>2]=_;return}c=(l&-8)+i|0,r=l>>>3;do if(l>>>0<256)if(i=n[_+8>>2]|0,e=n[_+12>>2]|0,(e|0)==(i|0)){n[5412]=n[5412]&~(1<<r);break}else{n[i+12>>2]=e,n[e+8>>2]=i;break}else{f=n[_+24>>2]|0,e=n[_+12>>2]|0;do if((e|0)==(_|0)){if(i=_+16|0,r=i+4|0,e=n[r>>2]|0,e)i=r;else if(e=n[i>>2]|0,!e){r=0;break}for(;;)if(l=e+20|0,r=n[l>>2]|0,r)e=r,i=l;else if(l=e+16|0,r=n[l>>2]|0,r)e=r,i=l;else break;n[i>>2]=0,r=e}else r=n[_+8>>2]|0,n[r+12>>2]=e,n[e+8>>2]=r,r=e;while(!1);if(f|0){if(e=n[_+28>>2]|0,i=21952+(e<<2)|0,(n[i>>2]|0)==(_|0)){if(n[i>>2]=r,!r){n[5413]=n[5413]&~(1<<e);break}}else if(l=f+16|0,n[((n[l>>2]|0)==(_|0)?l:f+20|0)>>2]=r,!r)break;n[r+24>>2]=f,e=_+16|0,i=n[e>>2]|0,i|0&&(n[r+16>>2]=i,n[i+24>>2]=r),e=n[e+4>>2]|0,e|0&&(n[r+20>>2]=e,n[e+24>>2]=r)}}while(!1);if(n[p+4>>2]=c|1,n[d+c>>2]=c,(p|0)==(n[5417]|0)){n[5414]=c;return}}if(e=c>>>3,c>>>0<256){r=21688+(e<<1<<2)|0,i=n[5412]|0,e=1<<e,i&e?(i=r+8|0,e=n[i>>2]|0):(n[5412]=i|e,e=r,i=r+8|0),n[i>>2]=p,n[e+12>>2]=p,n[p+8>>2]=e,n[p+12>>2]=r;return}e=c>>>8,e?c>>>0>16777215?l=31:(d=(e+1048320|0)>>>16&8,_=e<<d,f=(_+520192|0)>>>16&4,_=_<<f,l=(_+245760|0)>>>16&2,l=14-(f|d|l)+(_<<l>>>15)|0,l=c>>>(l+7|0)&1|l<<1):l=0,e=21952+(l<<2)|0,n[p+28>>2]=l,n[p+20>>2]=0,n[p+16>>2]=0,i=n[5413]|0,r=1<<l;e:do if(!(i&r))n[5413]=i|r,n[e>>2]=p,n[p+24>>2]=e,n[p+12>>2]=p,n[p+8>>2]=p;else{e=n[e>>2]|0;t:do if((n[e+4>>2]&-8|0)!=(c|0)){for(l=c<<((l|0)==31?0:25-(l>>>1)|0);r=e+16+(l>>>31<<2)|0,i=n[r>>2]|0,!!i;)if((n[i+4>>2]&-8|0)==(c|0)){e=i;break t}else l=l<<1,e=i;n[r>>2]=p,n[p+24>>2]=e,n[p+12>>2]=p,n[p+8>>2]=p;break e}while(!1);d=e+8|0,_=n[d>>2]|0,n[_+12>>2]=p,n[d>>2]=p,n[p+8>>2]=_,n[p+12>>2]=e,n[p+24>>2]=0}while(!1);if(_=(n[5420]|0)+-1|0,n[5420]=_,!(_|0)){for(e=22104;e=n[e>>2]|0,e;)e=e+8|0;n[5420]=-1}}}}function Vr(e){e=e|0;var i=0,r=0,l=0;l=e+3&-4,e=vh()|0,i=n[e>>2]|0,r=i+l|0;do if((l|0)<1|r>>>0>i>>>0){if(r>>>0>(V2()|0)>>>0&&!(z2(r|0)|0))break;return n[e>>2]=r,l=i,l|0}while(!1);return n[(Ci()|0)>>2]=48,l=-1,l|0}function cT(e){e=e|0;var i=0;return i=y,y=y+e|0,y=y+15&-16,i|0}function uT(e){e=e|0,y=e}function fT(){return y|0}function hT(e,i){e=e|0,i=i|0;var r=0,l=0,c=0,f=0;return f=e&65535,c=i&65535,r=wt(c,f)|0,l=e>>>16,e=(r>>>16)+(wt(c,l)|0)|0,c=i>>>16,i=wt(c,f)|0,Zt((e>>>16)+(wt(c,l)|0)+(((e&65535)+i|0)>>>16)|0),e+i<<16|r&65535|0|0}function ll(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0;var c=0,f=0;return c=e,f=r,r=hT(c,f)|0,e=Pt()|0,Zt((wt(i,f)|0)+(wt(l,c)|0)+e|e&0|0),r|0|0|0}function ei(e,i,r,l){return e=e|0,i=i|0,r=r|0,l=l|0,r=e+r>>>0,Zt(i+l+(r>>>0<e>>>0|0)>>>0|0),r|0|0}function ys(e,i,r,l){return e=e|0,i=i|0,r=r|0,l=l|0,l=i-l-(r>>>0>e>>>0|0)>>>0,Zt(l|0),e-r>>>0|0|0}function gh(e){return e=e|0,(e?31-(Ii(e^e-1)|0)|0:32)|0}function dT(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0;var f=0,d=0,p=0,_=0,S=0,F=0,N=0,z=0,q=0,ee=0;if(F=e,_=i,S=_,d=r,z=l,p=z,!S)return f=(c|0)!=0,p?f?(n[c>>2]=e|0,n[c+4>>2]=i&0,z=0,c=0,Zt(z|0),c|0):(z=0,c=0,Zt(z|0),c|0):(f&&(n[c>>2]=(F>>>0)%(d>>>0),n[c+4>>2]=0),z=0,c=(F>>>0)/(d>>>0)>>>0,Zt(z|0),c|0);f=(p|0)==0;do if(d){if(!f){if(f=(Ii(p|0)|0)-(Ii(S|0)|0)|0,f>>>0<=31){N=f+1|0,p=31-f|0,i=f-31>>31,d=N,e=F>>>(N>>>0)&i|S<<p,i=S>>>(N>>>0)&i,f=0,p=F<<p;break}return c?(n[c>>2]=e|0,n[c+4>>2]=_|i&0,z=0,c=0,Zt(z|0),c|0):(z=0,c=0,Zt(z|0),c|0)}if(f=d-1|0,f&d|0){p=(Ii(d|0)|0)+33-(Ii(S|0)|0)|0,ee=64-p|0,N=32-p|0,_=N>>31,q=p-32|0,i=q>>31,d=p,e=N-1>>31&S>>>(q>>>0)|(S<<N|F>>>(p>>>0))&i,i=i&S>>>(p>>>0),f=F<<ee&_,p=(S<<ee|F>>>(q>>>0))&_|F<<N&p-33>>31;break}return c|0&&(n[c>>2]=f&F,n[c+4>>2]=0),(d|0)==1?(q=_|i&0,ee=e|0|0,Zt(q|0),ee|0):(ee=gh(d|0)|0,q=S>>>(ee>>>0)|0,ee=S<<32-ee|F>>>(ee>>>0)|0,Zt(q|0),ee|0)}else{if(f)return c|0&&(n[c>>2]=(S>>>0)%(d>>>0),n[c+4>>2]=0),q=0,ee=(S>>>0)/(d>>>0)>>>0,Zt(q|0),ee|0;if(!F)return c|0&&(n[c>>2]=0,n[c+4>>2]=(S>>>0)%(p>>>0)),q=0,ee=(S>>>0)/(p>>>0)>>>0,Zt(q|0),ee|0;if(f=p-1|0,!(f&p))return c|0&&(n[c>>2]=e|0,n[c+4>>2]=f&S|i&0),q=0,ee=S>>>((gh(p|0)|0)>>>0),Zt(q|0),ee|0;if(f=(Ii(p|0)|0)-(Ii(S|0)|0)|0,f>>>0<=30){i=f+1|0,p=31-f|0,d=i,e=S<<p|F>>>(i>>>0),i=S>>>(i>>>0),f=0,p=F<<p;break}return c?(n[c>>2]=e|0,n[c+4>>2]=_|i&0,q=0,ee=0,Zt(q|0),ee|0):(q=0,ee=0,Zt(q|0),ee|0)}while(!1);if(!d)S=p,_=0,p=0;else{N=r|0|0,F=z|l&0,S=ei(N|0,F|0,-1,-1)|0,r=Pt()|0,_=p,p=0;do l=_,_=f>>>31|_<<1,f=p|f<<1,l=e<<1|l>>>31|0,z=e>>>31|i<<1|0,ys(S|0,r|0,l|0,z|0)|0,ee=Pt()|0,q=ee>>31|((ee|0)<0?-1:0)<<1,p=q&1,e=ys(l|0,z|0,q&N|0,(((ee|0)<0?-1:0)>>31|((ee|0)<0?-1:0)<<1)&F|0)|0,i=Pt()|0,d=d-1|0;while(d|0);S=_,_=0}return d=0,c|0&&(n[c>>2]=e,n[c+4>>2]=i),q=(f|0)>>>31|(S|d)<<1|(d<<1|f>>>31)&0|_,ee=(f<<1|0)&-2|p,Zt(q|0),ee|0}function cl(e,i,r,l){return e=e|0,i=i|0,r=r|0,l=l|0,dT(e,i,r,l,0)|0}function xa(e,i,r){return e=e|0,i=i|0,r=r|0,(r|0)<32?(Zt(i>>>r|0),e>>>r|(i&(1<<r)-1)<<32-r):(Zt(0),i>>>r-32|0)}function _h(e,i,r){return e=e|0,i=i|0,r=r|0,(r|0)<32?(Zt(i<<r|(e&(1<<r)-1<<32-r)>>>32-r|0),e<<r):(Zt(e<<r-32|0),0)}function vh(){return 22176}function yh(e){return e=e|0,(e&255)<<24|(e>>8&255)<<16|(e>>16&255)<<8|e>>>24|0}function Hn(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0;if((r|0)>=512)return O2(e|0,i|0,r|0)|0,e|0;if(f=e|0,c=e+r|0,(e&3)==(i&3)){for(;e&3;){if(!r)return f|0;m[e>>0]=m[i>>0]|0,e=e+1|0,i=i+1|0,r=r-1|0}for(r=c&-4|0,l=r-64|0;(e|0)<=(l|0);)n[e>>2]=n[i>>2],n[e+4>>2]=n[i+4>>2],n[e+8>>2]=n[i+8>>2],n[e+12>>2]=n[i+12>>2],n[e+16>>2]=n[i+16>>2],n[e+20>>2]=n[i+20>>2],n[e+24>>2]=n[i+24>>2],n[e+28>>2]=n[i+28>>2],n[e+32>>2]=n[i+32>>2],n[e+36>>2]=n[i+36>>2],n[e+40>>2]=n[i+40>>2],n[e+44>>2]=n[i+44>>2],n[e+48>>2]=n[i+48>>2],n[e+52>>2]=n[i+52>>2],n[e+56>>2]=n[i+56>>2],n[e+60>>2]=n[i+60>>2],e=e+64|0,i=i+64|0;for(;(e|0)<(r|0);)n[e>>2]=n[i>>2],e=e+4|0,i=i+4|0}else for(r=c-4|0;(e|0)<(r|0);)m[e>>0]=m[i>>0]|0,m[e+1>>0]=m[i+1>>0]|0,m[e+2>>0]=m[i+2>>0]|0,m[e+3>>0]=m[i+3>>0]|0,e=e+4|0,i=i+4|0;for(;(e|0)<(c|0);)m[e>>0]=m[i>>0]|0,e=e+1|0,i=i+1|0;return f|0}function ti(e,i,r){e=e|0,i=i|0,r=r|0;var l=0;if((i|0)<(e|0)&(e|0)<(i+r|0)){for(l=e,i=i+r|0,e=e+r|0;(r|0)>0;)e=e-1|0,i=i-1|0,r=r-1|0,m[e>>0]=m[i>>0]|0;e=l}else Hn(e,i,r)|0;return e|0}function Or(e,i,r){e=e|0,i=i|0,r=r|0;var l=0,c=0,f=0,d=0;if(f=e+r|0,i=i&255,(r|0)>=67){for(;e&3;)m[e>>0]=i,e=e+1|0;for(l=f&-4|0,d=i|i<<8|i<<16|i<<24,c=l-64|0;(e|0)<=(c|0);)n[e>>2]=d,n[e+4>>2]=d,n[e+8>>2]=d,n[e+12>>2]=d,n[e+16>>2]=d,n[e+20>>2]=d,n[e+24>>2]=d,n[e+28>>2]=d,n[e+32>>2]=d,n[e+36>>2]=d,n[e+40>>2]=d,n[e+44>>2]=d,n[e+48>>2]=d,n[e+52>>2]=d,n[e+56>>2]=d,n[e+60>>2]=d,e=e+64|0;for(;(e|0)<(l|0);)n[e>>2]=d,e=e+4|0}for(;(e|0)<(f|0);)m[e>>0]=i,e=e+1|0;return f-r|0}function pT(e){return e=e|0,hl[e&3]()|0}function mT(e,i){return e=e|0,i=i|0,Ma[e&15](i|0)|0}function AT(e,i,r,l,c,f,d){return e=e|0,i=i|0,r=+r,l=l|0,c=c|0,f=f|0,d=d|0,Eh[e&1](i|0,+r,l|0,c|0,f|0,d|0)|0}function gT(e,i,r){return e=e|0,i=i|0,r=r|0,wo[e&63](i|0,r|0)|0}function _T(e,i,r,l){return e=e|0,i=i|0,r=r|0,l=l|0,xs[e&7](i|0,r|0,l|0)|0}function vT(e){e=e|0,dl[e&3]()}function yT(e,i){e=e|0,i=i|0,Gt[e&255](i|0)}function xT(e,i,r){e=e|0,i=i|0,r=r|0,or[e&15](i|0,r|0)}function MT(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0,To[e&15](i|0,r|0,l|0)}function ST(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,Ro[e&7](i|0,r|0,l|0,c|0)}function ET(e,i,r,l,c,f){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0,Sa[e&3](i|0,r|0,l|0,c|0,f|0)}function wT(e,i,r,l,c,f,d){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0,d=d|0,Co[e&3](i|0,r|0,l|0,c|0,f|0,d|0)}function xh(){return Un(0),0}function ul(e){return e=e|0,Un(1),0}function TT(e,i,r,l,c,f){return e=e|0,i=+i,r=r|0,l=l|0,c=c|0,f=f|0,Un(2),0}function on(e,i){return e=e|0,i=i|0,Un(3),0}function Mh(e,i,r){return e=e|0,i=i|0,r=r|0,Un(4),0}function Sh(){Un(5)}function ge(e){e=e|0,Un(6)}function sr(e,i){e=e|0,i=i|0,Un(7)}function zr(e,i,r){e=e|0,i=i|0,r=r|0,Un(8)}function fl(e,i,r,l){e=e|0,i=i|0,r=r|0,l=l|0,Un(9)}function RT(e,i,r,l,c){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,Un(10)}function CT(e,i,r,l,c,f){e=e|0,i=i|0,r=r|0,l=l|0,c=c|0,f=f|0,Un(11)}var hl=[xh,px,Kx,xh],Ma=[ul,sw,Om,Zm,KE,tw,Lw,Zw,eT,ix,Y2,Gx,Ax,tM,ul,ul],Eh=[TT,yE],wo=[on,sm,hm,Hm,HA,mg,xg,Tg,Rg,Ug,Wg,Jg,l_,d_,v_,w_,H_,K_,s1,c1,g1,M1,C1,P1,O1,q1,iv,lv,pv,yv,Fv,Bv,Hv,Kv,cy,my,wy,Ny,zy,Yy,tx,Ix,on,on,on,on,on,on,on,on,on,on,on,on,on,on,on,on,on,on,on,on,on,on],xs=[Mh,bE,zE,uw,hw,Jw,jw,Mh],dl=[Sh,lw,BE,Sh],Gt=[ge,un,im,rm,om,um,fm,dm,Xn,Fm,Ym,Vm,Gm,Wm,Qm,Km,lA,cA,yA,xA,MA,DA,WA,XA,ZA,hg,Du,Ag,br,gg,vg,yg,Mg,ku,wg,qn,Cg,zg,Gg,Xg,Yu,Yg,o_,a_,c_,qu,h_,g_,__,y_,tf,E_,W_,X_,Z_,_f,e1,i1,r1,o1,vf,u1,m1,A1,_1,yf,S1,T1,R1,U1,Ef,N1,k1,V1,z1,j1,$1,Q1,tv,nv,rv,Tf,cv,hv,dv,mv,Rf,vv,Uv,bv,Pv,Uf,Dv,Wv,Xv,Zv,bf,Qv,ay,ly,uy,Ff,py,Sy,Ey,Ty,Pf,Py,Vy,Oy,Gy,Nf,Zy,Ky,ex,nx,vs,kE,VE,OE,HE,qE,QE,ga,ew,rw,ow,aw,cw,fw,mw,hh,Nw,Xw,Hw,Kw,Ah,rT,ox,Hx,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge,ge],or=[sr,zm,Xm,Z2,j2,$2,q2,Q2,xE,sr,sr,sr,sr,sr,sr,sr],To=[zr,Yw,$w,tT,nT,H2,J2,Ux,dM,vM,zr,zr,zr,zr,zr,zr],Ro=[fl,XE,JE,_w,Sx,lM,fl,fl],Sa=[RT,WE,YE,gw],Co=[CT,GE,ZE,Aw];return{__ZSt18uncaught_exceptionv:Fw,___cxa_can_catch:Cw,___cxa_is_pointer_type:Uw,___embind_register_native_and_builtin_types:Vf,___errno_location:Ci,___getTypeName:fE,___muldi3:ll,___udivdi3:cl,_bitshift64Lshr:xa,_bitshift64Shl:_h,_emscripten_get_sbrk_ptr:vh,_free:al,_i64Add:ei,_i64Subtract:ys,_llvm_bswap_i32:yh,_malloc:ya,_memcpy:Hn,_memmove:ti,_memset:Or,dynCall_i:pT,dynCall_ii:mT,dynCall_iidiiii:AT,dynCall_iii:gT,dynCall_iiii:_T,dynCall_v:vT,dynCall_vi:yT,dynCall_vii:xT,dynCall_viii:MT,dynCall_viiii:ST,dynCall_viiiii:ET,dynCall_viiiiii:wT,globalCtors:G2,stackAlloc:cT,stackRestore:uT,stackSave:fT}}(R2,C2,We),ao=o.__ZSt18uncaught_exceptionv=Rt.__ZSt18uncaught_exceptionv;o.___cxa_can_catch=Rt.___cxa_can_catch,o.___cxa_is_pointer_type=Rt.___cxa_is_pointer_type,o.___embind_register_native_and_builtin_types=Rt.___embind_register_native_and_builtin_types,o.___errno_location=Rt.___errno_location;var U2=o.___getTypeName=Rt.___getTypeName;o.___muldi3=Rt.___muldi3,o.___udivdi3=Rt.___udivdi3,o._bitshift64Lshr=Rt._bitshift64Lshr,o._bitshift64Shl=Rt._bitshift64Shl,o._emscripten_get_sbrk_ptr=Rt._emscripten_get_sbrk_ptr;var nr=o._free=Rt._free;o._i64Add=Rt._i64Add,o._i64Subtract=Rt._i64Subtract,o._llvm_bswap_i32=Rt._llvm_bswap_i32;var E0=o._malloc=Rt._malloc;o._memcpy=Rt._memcpy,o._memmove=Rt._memmove,o._memset=Rt._memset;var b2=o.globalCtors=Rt.globalCtors;if(o.stackAlloc=Rt.stackAlloc,o.stackRestore=Rt.stackRestore,o.stackSave=Rt.stackSave,o.dynCall_i=Rt.dynCall_i,o.dynCall_ii=Rt.dynCall_ii,o.dynCall_iidiiii=Rt.dynCall_iidiiii,o.dynCall_iii=Rt.dynCall_iii,o.dynCall_iiii=Rt.dynCall_iiii,o.dynCall_v=Rt.dynCall_v,o.dynCall_vi=Rt.dynCall_vi,o.dynCall_vii=Rt.dynCall_vii,o.dynCall_viii=Rt.dynCall_viii,o.dynCall_viiii=Rt.dynCall_viiii,o.dynCall_viiiii=Rt.dynCall_viiiii,o.dynCall_viiiiii=Rt.dynCall_viiiiii,o.asm=Rt,Oe)if(Ye(Oe)||(Oe=v(Oe)),h||A){var F2=E(Oe);Ve.set(F2,V)}else{Te();var w0=function(b){b.byteLength&&(b=new Uint8Array(b)),Ve.set(b,V),o.memoryInitializerRequest&&delete o.memoryInitializerRequest.response,st()},ru=function(){M(Oe,w0,function(){var b=new Error("could not load memory initializer "+Oe);throw b})},su=tr(Oe);if(su)w0(su.buffer);else if(o.memoryInitializerRequest){var ou=function(){var b=o.memoryInitializerRequest,U=b.response;if(b.status!==200&&b.status!==0){var G=tr(o.memoryInitializerRequestURL);if(G)U=G.buffer;else{console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+b.status+", retrying "+Oe),ru();return}}w0(U)};o.memoryInitializerRequest.response?setTimeout(ou,0):o.memoryInitializerRequest.addEventListener("load",ou)}else ru()}var $o;function P2(b){this.name="ExitStatus",this.message="Program terminated with exit("+b+")",this.status=b}Ue=function b(){$o||T0(),$o||(Ue=b)};function T0(b){if(we>0||(an(),we>0))return;function U(){$o||($o=!0,o.calledRun=!0,!H&&(pt(),At(),o.onRuntimeInitialized&&o.onRuntimeInitialized(),X()))}o.setStatus?(o.setStatus("Running..."),setTimeout(function(){setTimeout(function(){o.setStatus("")},1),U()},1)):U()}if(o.run=T0,o.preInit)for(typeof o.preInit=="function"&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return T0(),o}let Xi=null;const Jp={0:o=>({position:[o.getInt32(0,!0),o.getInt32(4,!0),o.getInt32(8,!0)],intensity:o.getUint16(12,!0),classification:o.getUint8(15)}),1:o=>({position:[o.getInt32(0,!0),o.getInt32(4,!0),o.getInt32(8,!0)],intensity:o.getUint16(12,!0),classification:o.getUint8(15)}),2:o=>({position:[o.getInt32(0,!0),o.getInt32(4,!0),o.getInt32(8,!0)],intensity:o.getUint16(12,!0),classification:o.getUint8(15),color:[o.getUint16(20,!0),o.getUint16(22,!0),o.getUint16(24,!0)]}),3:o=>({position:[o.getInt32(0,!0),o.getInt32(4,!0),o.getInt32(8,!0)],intensity:o.getUint16(12,!0),classification:o.getUint8(15),color:[o.getUint16(28,!0),o.getUint16(30,!0),o.getUint16(32,!0)]})};function dr(o,t={},s,a){a=a===void 0||a===0?1:a;const u=o.slice(s,s+t.BYTES_PER_ELEMENT*a),h=new t(u);if(a===1)return h[0];const A=[];for(let g=0;g<a;g++)A.push(h[g]);return A}function jp(o){let t=131;const s={pointsOffset:dr(o,Uint32Array,32*3),pointsFormatId:dr(o,Uint8Array,32*3+8),pointsStructSize:dr(o,Uint16Array,32*3+8+1),pointsCount:dr(o,Uint32Array,32*3+11),scale:dr(o,Float64Array,t,3)};t+=24,s.offset=dr(o,Float64Array,t,3),t+=24;const a=dr(o,Float64Array,t,6);return t+=48,s.maxs=[a[0],a[2],a[4]],s.mins=[a[1],a[3],a[5]],s}let aN=class{constructor(t){tt(this,"arraybuffer");tt(this,"readOffset",0);tt(this,"header",{pointsOffset:0,pointsFormatId:0,pointsStructSize:0,pointsCount:0,scale:[0,0,0],offset:[0,0,0],maxs:[0],mins:[0],totalToRead:0,totalRead:0,versionAsString:"",isCompressed:!0});this.arraybuffer=t}open(){return!0}getHeader(){return this.header=jp(this.arraybuffer),this.header}readData(t,s){const{header:a,arraybuffer:u}=this;if(!a)throw new Error("Cannot start reading data till a header request is issued");let{readOffset:h}=this,A;if(s<=1){t=Math.min(t,a.pointsCount-h),A=a.pointsOffset+h*a.pointsStructSize;const E=A+t*a.pointsStructSize;return h+=t,this.readOffset=h,{buffer:u.slice(A,E),count:t,hasMoreData:h<a.pointsCount}}const g=Math.min(t*s,a.pointsCount-h),v=Math.ceil(g/s);let x=0;const M=new Uint8Array(v*a.pointsStructSize);for(let E=0;E<g;E++){if(E%s===0){A=a.pointsOffset+h*a.pointsStructSize;const w=new Uint8Array(u,A,a.pointsStructSize);M.set(w,x*a.pointsStructSize),x++}h++}return this.readOffset=h,{buffer:M.buffer,count:x,hasMoreData:h<a.pointsCount}}close(){return this.arraybuffer=null,!0}};class lN{constructor(t){tt(this,"arraybuffer");tt(this,"instance",null);tt(this,"header",null);this.arraybuffer=t,Xi||(Xi=oN())}open(){try{const{arraybuffer:t}=this;this.instance=new Xi.LASZip;const s=new Uint8Array(t),a=Xi._malloc(t.byteLength);return this.instance.arraybuffer=t,this.instance.buf=a,Xi.HEAPU8.set(s,a),this.instance.open(a,t.byteLength),this.instance.readOffset=0,!0}catch(t){throw new Error(`Failed to open file: ${t.message}`)}}getHeader(){if(!this.instance)throw new Error("You need to open the file before trying to read header");try{const t=jp(this.instance.arraybuffer);return t.pointsFormatId&=63,this.header=t,t}catch(t){throw new Error(`Failed to get header: ${t.message}`)}}readData(t,s,a){if(!this.instance)throw new Error("You need to open the file before trying to read stuff");const{header:u,instance:h}=this;if(!u)throw new Error("You need to query header before reading, I maintain state that way, sorry :(");try{const A=Math.min(t*a,u.pointsCount-h.readOffset),g=Math.ceil(A/a);let v=0;const x=new Uint8Array(g*u.pointsStructSize),M=Xi._malloc(u.pointsStructSize);for(let E=0;E<A;E++){if(h.getPoint(M),E%a===0){const w=new Uint8Array(Xi.HEAPU8.buffer,M,u.pointsStructSize);x.set(w,v*u.pointsStructSize),v++}h.readOffset++}return Xi._free(M),{buffer:x.buffer,count:v,hasMoreData:h.readOffset<u.pointsCount}}catch(A){throw new Error(`Failed to read data: ${A.message}`)}}close(){try{return this.instance!==null&&(Xi._free(this.instance.buf),this.instance.delete(),this.instance=null),!0}catch(t){throw new Error(`Failed to close file: ${t.message}`)}}}class cN{constructor(t,s,a){tt(this,"arrayb");tt(this,"decoder");tt(this,"pointsCount");tt(this,"pointSize");tt(this,"scale");tt(this,"offset");tt(this,"mins");tt(this,"maxs");this.arrayb=t,this.decoder=Jp[a.pointsFormatId],this.pointsCount=s,this.pointSize=a.pointsStructSize,this.scale=a.scale,this.offset=a.offset,this.mins=a.mins,this.maxs=a.maxs}getPoint(t){if(t<0||t>=this.pointsCount)throw new Error("Point index out of range");const s=new DataView(this.arrayb,t*this.pointSize,this.pointSize);return this.decoder(s)}}class uN{constructor(t){tt(this,"arraybuffer");tt(this,"formatId",0);tt(this,"loader");tt(this,"isCompressed",!0);tt(this,"isOpen",!1);tt(this,"version",0);tt(this,"versionAsString","");if(this.arraybuffer=t,this.determineVersion()>13)throw new Error("Only file versions <= 1.3 are supported at this time");if(this.determineFormat(),Jp[this.formatId]===void 0)throw new Error("The point format ID is not supported");this.loader=this.isCompressed?new lN(this.arraybuffer):new aN(this.arraybuffer)}determineFormat(){const t=dr(this.arraybuffer,Uint8Array,104),s=(t&128)>>7,a=(t&64)>>6;if(s===1&&a===1)throw new Error("Old style compression not supported");this.formatId=t&63,this.isCompressed=s===1||a===1}determineVersion(){const t=new Int8Array(this.arraybuffer,24,2);return this.version=t[0]*10+t[1],this.versionAsString=`${t[0]}.${t[1]}`,this.version}open(){this.loader.open()&&(this.isOpen=!0)}getHeader(){return this.loader.getHeader()}readData(t,s,a){return this.loader.readData(t,s,a)}close(){this.loader.close()&&(this.isOpen=!1)}getUnpacker(){return cN}}function fN(o,t){const s=hN(o);return KP(t,s)}function hN(o){const t={};return t.las_pointsOffset=o.pointsOffset.toString(10),t.las_pointsFormatId=o.pointsFormatId.toString(10),t.las_pointsStructSize=o.pointsStructSize.toString(10),t.las_pointsCount=o.pointsCount.toString(10),t.las_scale=JSON.stringify(o.scale),t.las_offset=JSON.stringify(o.offset),o.maxs!==void 0&&(t.las_maxs=JSON.stringify(o.maxs)),o.mins!==void 0&&(t.las_mins=JSON.stringify(o.mins)),t.las_totalToRead=o.totalToRead.toString(10),t.las_pointsFortotalReadmatId=o.totalRead.toString(10),o.versionAsString!==void 0&&(t.las_versionAsString=o.versionAsString),o.isCompressed!==void 0&&(t.las_isCompressed=o.isCompressed.toString()),t}function Zd(o,t){return dN(o,t)}function dN(o,t={}){var x;let s=0,a,u,h,A,g;const v={loader:"las",loaderData:{},schema:{fields:[],metadata:{}},header:{vertexCount:0,boundingBox:[[0,0,0],[0,0,0]]},attributes:{},topology:"point-list",mode:0};return pN(o,(x=t.las)==null?void 0:x.skip,(M={},E)=>{var se,J,Y;if(!g){g=E;const ae=E.totalToRead,O=(se=t.las)!=null&&se.fp64?Float64Array:Float32Array;a=new O(ae*3),u=E.pointsFormatId>=2?new Uint8Array(ae*4):null,h=new Uint16Array(ae),A=new Uint8Array(ae),v.loaderData=E,v.attributes={POSITION:{value:a,size:3},intensity:{value:h,size:1},classification:{value:A,size:1}},u&&(v.attributes.COLOR_0={value:u,size:4})}const w=M.pointsCount,{scale:[C,P,I],offset:[R,T,W]}=E,V=mN(M,w,(J=t.las)==null?void 0:J.colorDepth);for(let ae=0;ae<w;ae++){const{position:O,color:k,intensity:j,classification:me}=M.getPoint(ae);a[s*3]=O[0]*C+R,a[s*3+1]=O[1]*P+T,a[s*3+2]=O[2]*I+W,k&&u&&(V?(u[s*4]=k[0]/256,u[s*4+1]=k[1]/256,u[s*4+2]=k[2]/256):(u[s*4]=k[0],u[s*4+1]=k[1],u[s*4+2]=k[2]),u[s*4+3]=255),h[s]=j,A[s]=me,s++}const H={...v,header:{vertexCount:E.totalRead},progress:E.totalRead/E.totalToRead};(Y=t==null?void 0:t.onProgress)==null||Y.call(t,H)}),v.header={vertexCount:g.totalToRead,boundingBox:QP((v==null?void 0:v.attributes)||{})},v&&(v.schema=fN(v.loaderData,v.attributes)),v}function pN(o,t,s={}){const a=new uN(o);try{a.open();const u=a.getHeader(),h=a.getUnpacker(),A=Math.ceil(u.pointsCount/Math.max(1,t));u.totalToRead=A;let g=0;for(;;){const v=a.readData(1e5,0,t);g+=v.count,u.totalRead=g,u.versionAsString=v.versionAsString,u.isCompressed=v.isCompressed;const x=new h(v.buffer,v.count,u);if(s(x,u),!v.hasMoreData||g>=A)break}}catch(u){throw u}finally{a.close()}}function mN(o={},t,s){let a=!1;switch(s){case 8:a=!1;break;case 16:a=!0;break;case"auto":if(o.getPoint(0).color)for(let u=0;u<t;u++){const{color:h}=o.getPoint(u);(h[0]>255||h[1]>255||h[2]>255)&&(a=!0)}break;default:console.warn("las: illegal value for options.las.colorDepth");break}return a}const AN={...sN,parse:async(o,t)=>Zd(o,t),parseSync:(o,t)=>Zd(o,t)};let Js,Kr,f0,pr,Pc,$a;const gN=async()=>{const o=new Ki,t=[],s=[],a=new sF().load("src/disc.png");a.colorSpace=pi;const h=await iN("http://192.168.6.22:8082/33177683912/33177683912_V1_GROUND_1.2_3.laz",AN);for(let M=0;M<h.header.vertexCount;M++){const E=h.attributes.POSITION.value[M*3]-27.98,w=h.attributes.POSITION.value[M*3+1]-75.88,C=h.attributes.POSITION.value[M*3+2]-.075;t.push(E,w,C);const P=h.attributes.COLOR_0.value[M*4+0]/255,I=h.attributes.COLOR_0.value[M*4+1]/255,R=h.attributes.COLOR_0.value[M*4+2]/255;s.push(P,I,R)}const A=new $i(t,3),g=new $i(s,3);o.setAttribute("position",A),o.setAttribute("color",g),$a=new Rp({size:.1,sizeAttenuation:!0,vertexColors:!0,transparent:!0});const v=new tF(o,$a);f0.add(v);const x=new Zc;x.add($a,"sizeAttenuation").onChange(function(){$a.needsUpdate=!0}),x.open()};_N();gN();function _N(){Js=new ri(55,window.innerWidth/window.innerHeight,2,2e3),Js.position.z=5,f0=new eF,f0.fog=new Xc(0,.001),pr=new Kb,pr.setPixelRatio(window.devicePixelRatio),pr.setSize(window.innerWidth,window.innerHeight),pr.setAnimationLoop(xN),document.body.appendChild(pr.domElement),Kr=new oF(Js,pr.domElement),Kr.rotateSpeed=1,Kr.zoomSpeed=1.2,Kr.panSpeed=.8,Kr.keys=["KeyA","KeyS","KeyD"],Pc=new Do,document.body.appendChild(Pc.dom),document.body.style.touchAction="none",document.body.addEventListener("pointermove",yN),window.addEventListener("resize",vN)}function vN(){Js.aspect=window.innerWidth/window.innerHeight,Js.updateProjectionMatrix(),pr.setSize(window.innerWidth,window.innerHeight),Kr.handleResize()}function yN(o){}function xN(){Kr.update(),MN(),Pc.update()}function MN(){pr.render(f0,Js)}});export default SN();
