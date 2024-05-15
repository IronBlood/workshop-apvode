function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Timeline-DfnVQoOM.js","assets/vendor-D9hPdfz0.js","assets/Timeline-D204Rb6D.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var Nt=Object.defineProperty;var Lt=(n,e,s)=>e in n?Nt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var l=(n,e,s)=>(Lt(n,typeof e!="symbol"?e+"":e,s),s);import{d as v,r as x,c as u,a as t,b as J,e as Tt,o as h,f as p,g as o,h as f,L as H,C as dt,T as N,I as Ot,K as Q,R as bt,i as X,j as B,F as E,p as k,k as $,l as At,n as Et,m as z,t as q,w as b,u as _,q as Y,s as xt,v as Xt,x as Yt,$ as Pt,y as Rt,z as ft,A as Ht,B as ct,D as Ft,E as Vt,G as zt,H as L,J as Ut,M as jt,N as Bt,O as Wt,P as Gt,Q as Zt,S as Jt,U as qt,V as Qt,W as Kt,X as te,Y as ee}from"./vendor-D9hPdfz0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const se="modulepreload",ne=function(n){return"/workshop-bfocm/"+n},pt={},ae=function(e,s,a){let i=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link");i=Promise.all(s.map(c=>{if(c=ne(c),c in pt)return;pt[c]=!0;const d=c.endsWith(".css"),w=d?'[rel="stylesheet"]':"";if(!!a)for(let T=r.length-1;T>=0;T--){const M=r[T];if(M.href===c&&(!d||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${w}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":se,d||(y.as="script",y.crossOrigin=""),y.href=c,document.head.appendChild(y),d)return new Promise((T,M)=>{y.addEventListener("load",T),y.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}return i.then(()=>e()).catch(r=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r})},yt="/workshop-bfocm/assets/Overview_All_Gates_Updated_01-Bdz7rhcS.png";var m=(n=>(n[n.NONE=0]="NONE",n[n.NOT=1]="NOT",n[n.AND=2]="AND",n[n.NAND=3]="NAND",n[n.OR=4]="OR",n[n.NOR=5]="NOR",n[n.XOR=6]="XOR",n[n.XNOR=7]="XNOR",n))(m||{}),A=(n=>(n[n.FREE=0]="FREE",n[n.TAKEN=1]="TAKEN",n))(A||{});const ie=`<svg width="1792.0000000000002" height="1792.0000000000002" xmlns="http://www.w3.org/2000/svg">
 <metadata id="metadata3035">image/svg+xml</metadata>

 <g>
  <title>background</title>
  <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
 </g>
 <g>
  <title>Layer 1</title>
  <g id="g3027" transform="matrix(1, 0, 0, -1, 121.492, 1285.42)">
   <path fill="currentColor" id="path3029" d="m1286.508057,389.420074q0,104.000031 -40.5,198.500031q-40.5,94.5 -109.5,163.5q-69,69 -163.499939,109.5q-94.5,40.5 -198.5,40.5q-104,0 -198.5,-40.5q-94.500122,-40.5 -163.500122,-109.5q-69,-69 -109.5,-163.5q-40.499969,-94.5 -40.499969,-198.500031q0,-104 40.499969,-198.5q40.5,-94.499992 109.5,-163.499996q69,-69.000004 163.500122,-109.499996q94.5,-40.5 198.5,-40.5q104,0 198.5,40.5q94.499939,40.499992 163.499939,109.499996q69,69.000004 109.5,163.499996q40.5,94.5 40.5,198.5zm256,0q0,-209 -103,-385.499998q-103,-176.500002 -279.5,-279.499971q-176.499939,-103.000031 -385.499939,-103.000031q-209,0 -385.500122,103.000031q-176.499969,102.999969 -279.499908,279.499971q-103.000023,176.499998 -103.000023,385.499998q0,209.000031 103.000023,385.500031q102.999939,176.5 279.499908,279.499817q176.500122,103 385.500122,103q209,0 385.499939,-103q176.5,-102.999817 279.5,-279.499817q103,-176.5 103,-385.500031z"/>
  </g>
  <text transform="matrix(1.96552, 0, 0, 1.96552, -1510.39, -1585.32)" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="Georgia, Times, 'Times New Roman', serif" font-size="250" id="svg_2" y="1663.982531" x="1567.725114" stroke-width="0" stroke="#000" fill="#000000">I</text>
 </g>
</svg>`,oe=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M79.15691 25H95M29.043478 25h-24"/>
  <path d="M28.96875 2.59375v44.8125l2.15625-1.0625 41.03125-20v-2.6875l-41.03125-20-2.15625-1.0625zm3 4.8125L68.09375 25l-36.125 17.59375V7.40625z" style="marker:none"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"  style="marker:none"/>
</svg>
`,le=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" >
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M31 15H5M32 35H5"/>
  <path d="M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z" />
</svg>
`,re=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M79 25h16M31 15H5M32 35H5"/>
  <path d="M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z" />
</svg>
`,de=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M31 15H5M32 35H5"/>
  <path fill-rule="evenodd" d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
</svg>
`,ce=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" >
  <path fill="none" stroke="#000" stroke-width="2" d="M79 25h16M31 15H5M32 35H5"/>
  <path fill-rule="evenodd" d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z" style="marker:none"/>
</svg>
`,_e=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M30.38572 15H5M31.3621 35H5"/>
  <g fill-rule="evenodd">
    <path d="M24.25 42C22.65263 44.6444 22 45 22 45h-3.65625l2-2.4375S26 35.56245 26 25 20.34375 7.4375 20.34375 7.4375l-2-2.4375H22c.78125.9375 1.42188 1.65625 2.21875 3C26.09147 11.09981 29 17.02665 29 25c0 7.95065-2.8967 13.87942-4.75 17z"/>
    <path d="M24.09375 5l2 2.4375S31.75 14.43755 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.40808 0 7.6897.02451 13.625-2.40625s12.53654-7.34327 17.6875-16.875L71.25 25l1.3125-.71875C62.25939 5.21559 46.00657 5 41.25 5H24.09375zm5.875 3H41.25c4.68417 0 18.28685-.1302 27.96875 17C64.45196 33.42907 58.69747 37.68391 53.5 39.8125 48.13934 42.00792 43.65808 42 41.25 42H30c1.87359-3.10843 4.75-9.04935 4.75-17 0-7.97335-2.90853-13.90019-4.78125-17z"/>
  </g>
</svg>
`,ue=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M78.333332 25H95M30.385717 15H5M31.362091 35H5"/>
  <g fill-rule="evenodd">
    <path d="M24.25 42.000005c-1.597374 2.6444-2.25 3-2.25 3h-3.65625l2-2.4375S26 35.562451 26 25c0-10.562451-5.65625-17.5625-5.65625-17.5625l-2-2.4375H22c.78125.9375 1.421875 1.65625 2.21875 3C26.091469 11.099815 29 17.026646 29 25c0 7.95065-2.896697 13.879425-4.75 17.000005z"/>
    <path d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
  </g>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"/>
</svg>
`;function S(n){return n?"#36f720":"#343A40"}function he(n){switch(n){case"NOT":return m.NOT;case"AND":return m.AND;case"NAND":return m.NAND;case"OR":return m.OR;case"NOR":return m.NOR;case"XOR":return m.XOR;case"XNOR":return m.XNOR;default:return m.NONE}}const lt=new Map;function fe(){const n=[{type:m.NONE,image:ie},{type:m.NOT,image:oe},{type:m.AND,image:le},{type:m.NAND,image:re},{type:m.OR,image:de},{type:m.NOR,image:ce},{type:m.XOR,image:_e},{type:m.XNOR,image:ue}];for(const{type:e,image:s}of n){const a=new Blob([s],{type:"image/svg+xml"}),i=URL.createObjectURL(a),r=new Image;r.onload=()=>{lt.set(e,r),URL.revokeObjectURL(i)},r.src=i}}const pe={key:0,class:"modal"},me={class:"modal-content flex justify-center"},ge=v({__name:"Modal",setup(n,{expose:e}){const s=x(!1);let a;function i(c){s.value=!0,a=c}function r(){typeof a=="function"&&a(),s.value=!1}return e({show:i}),(c,d)=>s.value?(h(),u("div",pe,[t("div",{class:"modal-header"},[t("span",{class:"close",onClick:r},"×")]),t("div",me,[J(c.$slots,"default",{},void 0,!0)])])):Tt("",!0)}}),g=(n,e)=>{const s=n.__vccOpts||n;for(const[a,i]of e)s[a]=i;return s},tt=g(ge,[["__scopeId","data-v-0f580d60"]]),ve="/workshop-bfocm/assets/1868_linett_kineograph_patent_fig._III-Bp_Q6IgE.jpg",we="/workshop-bfocm/assets/media-1067086-mar04fig1still-COYKNvRW.gif",be={},xe={class:"problem-stack"},ye=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),Ie=t("tr",{class:"ps-sw"},[t("td",{style:{"font-weight":"bold"}},"Algorithms")],-1),Me=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),Se=t("tr",{class:"ps-sw"},[t("td",null,[p("Runtime System"),t("br"),p("(VM, OS, ...)")])],-1),ke=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),$e=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),Ce=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),De=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),Ne=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),Le=[ye,Ie,Me,Se,ke,$e,Ce,De,Ne];function Te(n,e){return h(),u("table",xe,Le)}const mt=g(be,[["render",Te]]),Oe=t("h3",null,"Finally the Last Piece",-1),Ae=f('<section><h3 class="m-0"><a href="https://en.wikipedia.org/wiki/Flip_book">Flipbook</a></h3><div class="flex justify-center"><img class="scale-50 m-0" data-src="'+ve+'"></div></section><section><h3>Video Encoding &amp; Decoding</h3><div class="flex justify-center"><a href="https://www.eetimes.com/how-video-compression-works/"><img data-src="'+we+'"></a></div></section><section><h3>Commonly Used Algorithms</h3><ul><li>AVC (Advanced Video Coding) / H.264</li><li>HEVC (High Efficiency Video Coding) / H.265</li><li>VP8</li><li>VP9</li><li>AV1</li></ul></section><section><h3>Software Encoding &amp; Decoding</h3><ul><li>Can be implemented in any language and run on any CPU</li><li>Can work easily with filters implemented by others</li><li>There&#39;re some good implementations of encoders, such as x264 and x265</li><li>Might consume a lot of computing resource, and is slower than...</li></ul></section><section><h3>Hardware Encoding &amp; Decoding</h3><ul><li>Specialized chips</li><li>Much faster than software</li><li>New algorithms might require hardware upgrading</li></ul></section>',5),Ee=v({__name:"algorithms",setup(n){return(e,s)=>(h(),u("section",null,[t("section",null,[Oe,o(mt,{class:"text-3xl"})]),Ae,t("section",null,[o(mt,{class:"text-3xl"})])]))}}),Xe={},Ye=f('<h3 data-v-ba820645>How to add two numbers?</h3><div class="flex justify-evenly text-right mono" data-v-ba820645><div data-v-ba820645><div class="header" data-v-ba820645>Base 10</div><div class="carry fragment italic" data-fragment-index="1" data-v-ba820645>1 </div><div data-v-ba820645>14</div><div data-v-ba820645>+  7</div><div class="answer" data-v-ba820645><span class="fragment" data-fragment-index="2" data-v-ba820645>2</span><span class="fragment" data-fragment-index="1" data-v-ba820645>1</span></div></div><div class="fragment" data-fragment-index="3" data-v-ba820645><div class="header" data-v-ba820645>Base 2</div><div class="carry italic" data-v-ba820645><span class="fragment" data-fragment-index="7" data-v-ba820645>1</span><span class="fragment" data-fragment-index="6" data-v-ba820645>1</span><span class="fragment" data-fragment-index="5" data-v-ba820645>1</span><span class="fragment" data-fragment-index="4" data-v-ba820645>0</span><span data-v-ba820645> </span></div><div data-v-ba820645>1110</div><div data-v-ba820645>+   111</div><div class="answer" data-v-ba820645><span class="fragment" data-fragment-index="8" data-v-ba820645>1</span><span class="fragment" data-fragment-index="7" data-v-ba820645>0</span><span class="fragment" data-fragment-index="6" data-v-ba820645>1</span><span class="fragment" data-fragment-index="5" data-v-ba820645>0</span><span class="fragment" data-fragment-index="4" data-v-ba820645>1</span></div></div></div><div class="fragment mono mt-8" data-fragment-index="9" data-v-ba820645> (<span class="fragment custom custom-highlight-red" data-fragment-index="10" data-v-ba820645>1</span>0<span class="fragment custom custom-highlight-purple" data-fragment-index="11" data-v-ba820645>1</span>0<span class="fragment custom custom-highlight-cyan" data-fragment-index="12" data-v-ba820645>1</span>)<sub data-v-ba820645>2</sub> = <span class="fragment border-b-2 border-red-500" data-fragment-index="10" data-v-ba820645>2<sup data-v-ba820645>4</sup></span> <span class="fragment fade-up" data-fragment-index="11" data-v-ba820645>+ <span class="border-b-2 border-purple-500" data-v-ba820645>2<sup data-v-ba820645>2</sup></span></span> <span class="fragment" data-fragment-index="12" data-v-ba820645>+ <span class="border-b-2 border-cyan-500" data-v-ba820645>2<sup data-v-ba820645>0</sup></span></span> <span class="fragment" data-fragment-index="13" data-v-ba820645>= 16 + 4 + 1</span></div>',3),Pe=[Ye];function Re(n,e){return h(),u("section",null,Pe)}const He=g(Xe,[["render",Re],["__scopeId","data-v-ba820645"]]),U=new Map,j=new Map;function W(n){if(U.has(n.id)||j.has(n.id))throw Error("Potential resource leak, ID is duplicated");U.set(n.id,n.constructor),j.set(n.id,n.destructor)}function G(n){U.delete(n),j.delete(n)}class Fe{constructor(e,s){l(this,"startNode");l(this,"endNode");l(this,"startID");l(this,"endID");l(this,"endX");l(this,"endY");l(this,"width");l(this,"simulator");l(this,"line");l(this,"_value");l(this,"_destroyed");this.startNode=s,this.endNode=null,this.startID=s.id,this.endID=null,this.simulator=e,this.endX=0,this.endY=0,this.width=8,this._destroyed=!1,this.Value=this.startNode.value}destroy(){this._destroyed||(this._destroyed=!0,this.startNode.InputState=A.FREE,this.endNode&&(this.endNode.Value=!1,this.endNode.InputState=A.FREE),this.startNode=null,this.endNode=null)}generateNodeValue(){this._destroyed||(this.startNode.isOutput&&this.endNode.isOutput||!this.startNode.isOutput&&!this.endNode.isOutput?(this.startNode.Value=this.startNode.Value||this.endNode.Value,this.endNode.Value=this.startNode.Value):this.endNode&&(this.endNode.Value=this.startNode.Value))}getStartNode(){return this.startNode}updateEnd(e,s){this.endX=e,this.endY=s}setEndNode(e){if(!this._destroyed){if(e.isOutput){let s=this.startNode;this.startNode=e,this.endNode=s,this.endNode.InputState=A.TAKEN}else this.endNode=e,this.startNode.InputState=A.TAKEN,this.endNode.InputState=A.TAKEN;if(this.startID=this.startNode.id,this.endID=this.endNode.id,this.line)this.line.points(this._generateLinePoints());else{this.line=new H({stroke:"black",strokeWidth:this.width/2,points:this._generateLinePoints()}),this.simulator._layer.add(this.line);const s=this.startNode;s.subscribe(this.endNode),this.Value=this.startNode.Value,s.subscribe(this)}}}get Value(){return this._value}set Value(e){this._value=e,this.line&&this.line.stroke(this._value?S(!0):"black")}_generateLinePoints(){var e,s,a,i;return[((e=this.startNode)==null?void 0:e.posX)||0,((s=this.startNode)==null?void 0:s.posY)||0,((a=this.endNode)==null?void 0:a.posX)||0,((i=this.endNode)==null?void 0:i.posY)||0]}}class Ve{constructor(e){l(this,"wire");l(this,"shortCircuit");l(this,"isOpened");l(this,"simulator");this.wire=[],this.shortCircuit=[],this.isOpened=!1,this.simulator=e}addNode(e){var s,a;if(!this.isOpened)this.wire.push(new Fe(this.simulator,e)),this.isOpened=!0;else{let i=this.wire.length-1;e!=this.wire[i].getStartNode()&&(((s=this.wire[i].getStartNode())==null?void 0:s.isOutput)!=e.isOutput||e.Brother==this.wire[i].getStartNode())?e==((a=this.wire[i].getStartNode())==null?void 0:a.Brother)?this.wire.length--:this.wire[i].setEndNode(e):this.wire.length--,this.isOpened=!1}}destroy(){for(let e of this.wire)e.destroy();this.wire.length=0,this.simulator=null}}class ze{constructor(){l(this,"currentID");l(this,"nodeList");this.currentID=0,this.nodeList=[]}}class It{constructor(e,s,a,i=!1,r=!1){l(this,"diameter");l(this,"value");l(this,"posX");l(this,"posY");l(this,"isOutput");l(this,"hitRange");l(this,"inputState");l(this,"isAlive");l(this,"brotherNode");l(this,"id");l(this,"nodeManager");l(this,"circle");this.nodeManager=e.nodeManager,this.diameter=10,this.value=r,this.posX=s,this.posY=a,this.isOutput=i,this.hitRange=this.diameter+10,this.inputState=A.FREE,this.isAlive=!0,this.brotherNode=null,this.id=this.nodeManager.currentID++,this.nodeManager.nodeList[this.id]=this;const c=e._layer;this.circle=new dt({x:this.posX,y:this.posY,fill:S(this.value),radius:this.diameter/2,stroke:"black",strokeWidth:4}),this.circle.on("mouseover",()=>{this.circle.fill("#80808080")}),this.circle.on("mouseout",()=>{this.circle.fill(S(this.value))}),c.add(this.circle)}destroy(){this.isAlive=!1,this.nodeManager.nodeList[this.id]=void 0}draw(){}set ID(e){this.nodeManager.nodeList[this.id]=void 0,this.id=e,this.nodeManager.nodeList[this.id]=this,this.id>this.nodeManager.currentID&&(this.nodeManager.currentID=this.id+1)}set InputState(e){this.inputState=e}set Brother(e){this.brotherNode=e}get Brother(){return this.brotherNode}get Value(){return this.value}set Value(e){this.value=e,this.circle.fill(S(this.value)),this.circle.stroke(this.value?S(this.value):"black")}updatePosition(e,s){this.posX=e,this.posY=s,this.circle.x(this.posX),this.circle.y(this.posY)}}class rt extends It{constructor(s,a,i,r=!1,c){super(s,a,i,!1,r);l(this,"_callback");this._callback=c}get Value(){return super.Value}set Value(s){super.Value=s,typeof this._callback=="function"&&this._callback(this.value)}}class Mt extends It{constructor(s,a,i,r=!1){super(s,a,i,!0,r);l(this,"_subscribers");this._subscribers=[]}get Value(){return super.Value}set Value(s){super.Value=s;for(const a of this._subscribers)a.Value=s}subscribe(s){this._subscribers.push(s)}destroy(){this._subscribers.length=0}}class Ue{constructor(e,s={}){l(this,"value");l(this,"posX");l(this,"posY");l(this,"diameter");l(this,"isSpawned");l(this,"isMoving");l(this,"offsetMouseX");l(this,"offsetMouseY");l(this,"output");l(this,"nodeStartID");l(this,"circle");l(this,"line");l(this,"txt_value");l(this,"txt_label");this.value=s.value==1||!1,this.posX=typeof s.posX=="number"?s.posX:0,this.posY=typeof s.posY=="number"?s.posY:0,this.diameter=typeof s.diameter=="number"?s.diameter:25,this.isSpawned=typeof s.isSpawned=="boolean"?s.isSpawned:!1,this.isMoving=s.isMoving||!1,this.offsetMouseX=typeof s.offsetMouseX=="number"?s.offsetMouseX:0,this.offsetMouseY=typeof s.offsetMouseY=="number"?s.offsetMouseY:0,this.output=new Mt(e,this.posX+30,this.posY,this.value),this.nodeStartID=typeof s.nodeStartID=="number"?s.nodeStartID:this.output.id;const a=e._layer;this.circle=new dt({x:this.posX,y:this.posY,radius:this.diameter/2,fill:S(this.value),stroke:"black",strokeWidth:4}),this.circle.on("click",()=>{this.toggle()}),a.add(this.circle),this.line=new H({points:this._generateLinePoints(),strokeWidth:4,stroke:"black"}),a.add(this.line);const i=this.TextLabelPos;this.txt_label=new N({x:i.x,y:i.y,text:"INPUT",fontSize:12}),a.add(this.txt_label);const r=this.TextValuePos;this.txt_value=new N({x:r.x,y:r.y,text:this.value?"1":"0",fontSize:18,fontStyle:this.value?"bold":"normal",fill:this.value?"black":"white"}),this.txt_value.on("click",()=>{this.toggle()}),a.add(this.txt_value)}destroy(){var e;(e=this.output)==null||e.destroy(),this.output=void 0}refreshNodes(){this.output&&(this.output.ID=this.nodeStartID)}get TextValuePos(){return{x:this.posX-this.diameter/4,y:this.posY-this.diameter/4}}get TextLabelPos(){return{x:this.posX-20,y:this.posY+this.diameter}}_generateLinePoints(){var e;return[this.posX+this.diameter/2,this.posY,this.posX+30-(((e=this.output)==null?void 0:e.diameter)||0)/2,this.posY]}toggle(){this.value=!this.value,this.circle.fill(S(this.value)),this.line.stroke(this.value?S(this.value):"black"),this.output&&(this.output.Value=this.value),this.value?(this.txt_value.text("1"),this.txt_value.fontStyle("bold"),this.txt_value.fill("black")):(this.txt_value.text("0"),this.txt_value.fontStyle("normal"),this.txt_value.fill("white"))}}class je{constructor(e,s={}){l(this,"value");l(this,"posX");l(this,"posY");l(this,"diameter");l(this,"isSpawned");l(this,"isMoving");l(this,"offsetMouseX");l(this,"offsetMouseY");l(this,"input");l(this,"nodeStartID");l(this,"line");l(this,"circle");l(this,"txt_value");l(this,"txt_label");this.value=s.value==!0,this.posX=typeof s.posX=="number"?s.posX:0,this.posY=typeof s.posY=="number"?s.posY:0,this.diameter=typeof s.diameter=="number"?s.diameter:25,this.isSpawned=typeof s.isSpawned=="boolean"?s.isSpawned:!1,this.isMoving=s.isMoving||!1,this.offsetMouseX=typeof s.offsetMouseX=="number"?s.offsetMouseX:0,this.offsetMouseY=typeof s.offsetMouseY=="number"?s.offsetMouseY:0,this.input=new rt(e,this.posX-30,this.posY,this.value,c=>{this._update(c)}),this.nodeStartID=typeof s.nodeStartID=="number"?s.nodeStartID:this.input.id;const a=e._layer;this.circle=new dt({x:this.posX,y:this.posY,radius:this.diameter/2,fill:S(this.value),stroke:"black",strokeWidth:4}),a.add(this.circle),this.line=new H({points:this._generateLinePoints(),strokeWidth:4,stroke:"black"}),a.add(this.line);const i=this.TextLabelPos;this.txt_label=new N({x:i.x,y:i.y,text:"OUTPUT",fontSize:12}),a.add(this.txt_label);const r=this.TextValuePos;this.txt_value=new N({x:r.x,y:r.y,text:this.value?"1":"0",fontSize:18,fontStyle:this.value?"bold":"normal",fill:this.value?"black":"white"}),a.add(this.txt_value)}destroy(){var e;(e=this.input)==null||e.destroy(),this.input=void 0}_update(e){this.value=e,this.circle.fill(S(this.value)),this.line.stroke(this.value?S(this.value):"black"),this.value?(this.txt_value.text("1"),this.txt_value.fontStyle("bold"),this.txt_value.fill("black")):(this.txt_value.text("0"),this.txt_value.fontStyle("normal"),this.txt_value.fill("white"))}refreshNodes(){this.input&&(this.input.ID=this.nodeStartID)}get TextValuePos(){return{x:this.posX-this.diameter/4,y:this.posY-this.diameter/4}}get TextLabelPos(){return{x:this.posX-20,y:this.posY+this.diameter}}_generateLinePoints(){var e;return[this.posX-this.diameter/2,this.posY,this.posX-30+(((e=this.input)==null?void 0:e.diameter)||0)/2,this.posY]}}class Be{constructor(e,s={}){l(this,"strType");l(this,"type");l(this,"width");l(this,"height");l(this,"posX");l(this,"posY");l(this,"isSpawned");l(this,"offsetMouseX");l(this,"offsetMouseY");l(this,"isMoving");l(this,"input");l(this,"output");l(this,"nodeStartID");l(this,"_image");l(this,"text");l(this,"image");if(this.strType=typeof s.strType=="string"?s.strType:"AND",this.type=he(this.strType),!lt.has(this.type)){const i="Images are not intialized";throw new Error(i)}this._image=lt.get(this.type),this.width=this._image.width,this.height=this._image.height,this.posX=typeof s.posX=="number"?s.posX:0,this.posY=typeof s.posY=="number"?s.posY:0,this.image=new Ot({x:this.posX,y:this.posY,image:this._image,width:this.width,height:this.height}),e._layer.add(this.image);const a=12;this.text=new N({x:this.posX+this.width/4+12,y:this.posY+this.height,text:this.strType,fontSize:a}),e._layer.add(this.text),this.isSpawned=typeof s.isSpawned=="boolean"?s.isSpawned:!1,this.offsetMouseX=typeof s.offsetMouseX=="number"?s.offsetMouseX:0,this.offsetMouseY=typeof s.offsetMouseY=="number"?s.offsetMouseY:0,this.isMoving=typeof s.isMoving=="boolean"?s.isMoving:!1,this.input=[],this.input.push(new rt(e,this.posX,this.posY+(this.type==m.NOT?this.height/2:15),!1,()=>{this.generateOutput()})),this.type!=m.NOT&&(this.input.push(new rt(e,this.posX,this.posY+this.height-15,!1,()=>{this.generateOutput()})),this.input[0].Brother=this.input[1],this.input[1].Brother=this.input[0]),this.output=new Mt(e,this.posX+this.width,this.posY+this.height/2),this.output.Value=this.calculateValue(),this.nodeStartID=typeof s.nodeStartID=="number"?s.nodeStartID:this.input[0].id}destroy(){var e,s;for(let a=0;a<this.input.length;a++)(e=this.input[a])==null||e.destroy(),this.input[a]=void 0;(s=this.output)==null||s.destroy(),this.output=void 0}refreshNodes(){let e=this.nodeStartID;for(let s=0;s<this.input.length;s++)this.input[s]!=null&&(this.input[s].ID=e,e++);this.output&&(this.output.ID=e)}generateOutput(){this.output&&(this.output.Value=this.calculateValue())}calculateValue(){switch(this.type){case m.NOT:return!this.input[0].Value;case m.AND:return this.input[0].Value&&this.input[1].Value;case m.NAND:return!(this.input[0].Value&&this.input[1].Value);case m.OR:return this.input[0].Value||this.input[1].Value;case m.NOR:return!(this.input[0].Value||this.input[1].Value);case m.XOR:return this.input[0].Value!=this.input[1].Value;case m.XNOR:return this.input[0].Value==this.input[1].Value;default:return!1}}}function gt(n){return typeof n=="string"||n instanceof String}function et(n,e){if(n!=null&&e.key in n&&Array.isArray(n[e.key])){e.target.length=0;const s=n[e.key];for(let a=0;a<s.length;a++){let i=s[a];if(i==null)break;const r=e.func(i);e.target.push(r),r.refreshNodes()}}}class We{constructor(e){l(this,"simulator");this.simulator=e}loadFile_ex(e){try{const s=gt(e)?JSON.parse(e):e;if(et(s,{key:"logicInput",target:this.simulator.logicInput,func:a=>new Ue(this.simulator,a)}),et(s,{key:"logicOutput",target:this.simulator.logicOutput,func:a=>new je(this.simulator,a)}),et(s,{key:"gate",target:this.simulator.gate,func:a=>new Be(this.simulator,a)}),"wire"in s&&Array.isArray(s.wire)){const a=s.wire;for(let i of a){if(i==null)break;this.simulator.wireMng.addNode(this.simulator.nodeManager.nodeList[i.startID]),this.simulator.wireMng.addNode(this.simulator.nodeManager.nodeList[i.endID])}}}catch(s){console.error(s)}}loadFile(e){const s=e.target;if(s.files&&s.files.length>0){const a=new FileReader;a.onload=()=>{const i=a.result;gt(i)&&this.loadFile_ex(i)},a.readAsText(s.files[0])}}}class K{constructor(e,s){l(this,"logicInput");l(this,"logicOutput");l(this,"gate");l(this,"wireMng");l(this,"fileManager");l(this,"nodeManager");l(this,"_layer");l(this,"_stage");this._stage=new Q.Stage({container:e,height:e.offsetHeight,width:e.offsetWidth}),this._layer=new Q.Layer,this._stage.add(this._layer);const a=new bt({x:0,y:0,width:e.offsetWidth,height:e.offsetHeight,fill:"white"});this._layer.add(a),this.logicInput=[],this.logicOutput=[],this.gate=[],this.nodeManager=new ze,this.wireMng=new Ve(this),this.fileManager=new We(this),this.loadFile_ex(s)}loadFile(e){this.fileManager.loadFile(e)}loadFile_ex(e){this.fileManager.loadFile_ex(e)}destroy(){this.wireMng.destroy(),this.wireMng=null,this.fileManager=null;for(let e of this.logicInput)e.destroy();this.logicInput.length=0;for(let e of this.gate)e.destroy();this.gate.length=0;for(let e of this.logicOutput)e.destroy();this.logicOutput.length=0,this._stage.destroy()}}const Ge=[{value:0,posX:39,posY:26,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-33,offsetMouseY:63,nodeStartID:6,isSaved:!0},{value:0,posX:38,posY:110,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:4,nodeStartID:7,isSaved:!0}],Ze=[{value:0,posX:303,posY:36,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:231,offsetMouseY:73,nodeStartID:8,isSaved:!0},{value:0,posX:303,posY:100,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-3,offsetMouseY:2,nodeStartID:9,isSaved:!0}],Je=[],qe=[],Qe=[{strType:"AND",type:2,width:100,height:50,posX:135,posY:11,isSpawned:!0,offsetMouseX:63,offsetMouseY:48,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"XOR",type:6,width:100,height:50,posX:136,posY:75,isSpawned:!0,offsetMouseX:64,offsetMouseY:112,isMoving:!1,isSaved:!0,nodeStartID:3}],Ke=[],ts=[{startID:6,endID:0,endX:396,endY:217,width:8},{startID:6,endID:3,endX:396,endY:217,width:8},{startID:7,endID:1,endX:396,endY:217,width:8},{startID:7,endID:4,endX:396,endY:217,width:8},{startID:2,endID:8,endX:396,endY:217,width:8},{startID:5,endID:9,endX:396,endY:217,width:8}],es={logicInput:Ge,logicOutput:Ze,flipflop:Je,logicClock:qe,gate:Qe,srLatch:Ke,wire:ts},St=n=>(k("data-v-b2d7dd2f"),n=n(),$(),n),ss=f('<section data-auto-animate data-v-b2d7dd2f><h3 data-v-b2d7dd2f>1-bit Half Adder</h3><table data-v-b2d7dd2f><tr data-v-b2d7dd2f><th data-v-b2d7dd2f>A</th><th data-v-b2d7dd2f>B</th><th class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>C</th><th class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>S</th></tr><tr class="fragment" data-fragment-index="1" data-v-b2d7dd2f><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td></tr><tr class="fragment" data-fragment-index="2" data-v-b2d7dd2f><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td></tr><tr class="fragment" data-fragment-index="3" data-v-b2d7dd2f><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td><td data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td></tr><tr class="fragment" data-fragment-index="4" data-v-b2d7dd2f><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td data-v-b2d7dd2f>0</td></tr></table></section>',1),ns=St(()=>t("h3",null,"1-bit Half Adder",-1)),as={class:"w-full flex justify-center"},is=St(()=>t("div",{class:"text-xl"},"Output on the top right is for carry, the other is for sum",-1)),st="section-half-adder",os=v({__name:"half-adder",setup(n){const e=x(null);let s;function a(){s==null&&(s=new K(e.value,es))}function i(){s&&(s.destroy(),s=null)}return X(()=>{W({id:st,constructor:a,destructor:i})}),B(()=>{G(st)}),(r,c)=>(h(),u(E,null,[ss,t("section",{"data-auto-animate":"",id:st},[ns,t("div",as,[t("div",{ref_key:"refDivSimulator",ref:e,class:"canvas-container"},null,512)]),is])],64))}}),ls=g(os,[["__scopeId","data-v-b2d7dd2f"]]),rs="/workshop-bfocm/assets/BFoCM-full-adder-B8ITB7iF.svg",ds="/workshop-bfocm/assets/BFoCM-full-adder-chain-ClLEStrj.svg",cs={},_s=f('<h3>Full Adder</h3><div class="flex flex-col items-center"><div class="bg-white"><img data-src="'+rs+'"></div><div class="fragment"><img data-src="'+ds+'"></div></div>',2),us=[_s];function hs(n,e){return h(),u("section",null,us)}const fs=g(cs,[["render",hs]]),ps="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTkycHgiIGhlaWdodD0iMTQxcHgiIHZpZXdCb3g9Ii0wLjUgLTAuNSAxOTIgMTQxIj48ZGVmcy8+PHJlY3QgZmlsbD0iI2ZmZmZmZiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCIgeT0iMCIvPjxnPjxnPjxwYXRoIGQ9Ik0gMTQwIDcwIEwgMTcwIDcwIEwgMTYwIDcwIEwgMTkwIDcwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PC9nPjxnPjxyZWN0IHg9IjYwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iMTQwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PC9nPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA3OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDcwcHg7IG1hcmdpbi1sZWZ0OiA2MXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiIGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IENvdXJpZXIgTmV3OyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBmb250LXdlaWdodDogYm9sZDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+W2ldPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjEwMCIgeT0iNzUiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkNvdXJpZXIgTmV3IiBmb250LXNpemU9IjE2cHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5baV08L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48Zz48cGF0aCBkPSJNIDAgMzIuNSBMIDYwIDMyLjUgTSAwIDEwNy41IEwgNjAgMTA3LjUgTSAwIDU3LjUgTCA2MCA1Ny41IE0gMCA4Mi41IEwgNjAgODIuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjwvZz48L2c+PC9zdmc+",ms="/workshop-bfocm/assets/BFoCM-4-bit-mux-BRQnrPWi.svg",gs=[{value:!1,posX:32,posY:24,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-44,offsetMouseY:58,nodeStartID:0,isSaved:!0},{value:!1,posX:31,posY:73,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-45,offsetMouseY:107,nodeStartID:1,isSaved:!0},{value:!1,posX:29,posY:128,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:1,offsetMouseY:4,nodeStartID:2,isSaved:!0}],vs=[{value:!1,posX:441,posY:76,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:365,offsetMouseY:110,nodeStartID:14,isSaved:!0}],ws=[],bs=[],xs=[{strType:"NOT",type:1,width:100,height:50,posX:67,posY:69,isSpawned:!0,offsetMouseX:-41,offsetMouseY:-30,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"AND",type:2,width:100,height:50,posX:187,posY:8,isSpawned:!0,offsetMouseX:111,offsetMouseY:42,isMoving:!1,isSaved:!0,nodeStartID:5},{strType:"AND",type:2,width:100,height:50,posX:188,posY:94,isSpawned:!0,offsetMouseX:112,offsetMouseY:128,isMoving:!1,isSaved:!0,nodeStartID:8},{strType:"OR",type:4,width:100,height:50,posX:289,posY:51,isSpawned:!0,offsetMouseX:213,offsetMouseY:85,isMoving:!1,isSaved:!0,nodeStartID:11}],ys=[],Is=[{startID:0,endID:5,endX:328,endY:200,width:8},{startID:1,endID:3,endX:328,endY:200,width:8},{startID:4,endID:8,endX:328,endY:200,width:8},{startID:2,endID:9,endX:328,endY:200,width:8},{startID:1,endID:6,endX:328,endY:200,width:8},{startID:7,endID:11,endX:328,endY:200,width:8},{startID:10,endID:12,endX:328,endY:200,width:8},{startID:13,endID:14,endX:328,endY:200,width:8}],Ms={logicInput:gs,logicOutput:vs,flipflop:ws,logicClock:bs,gate:xs,srLatch:ys,wire:Is},_t=n=>(k("data-v-c5e5b754"),n=n(),$(),n),Ss=_t(()=>t("section",{"data-auto-animate":""},[t("h3",null,"Mux (Multiplexer)"),t("div",{class:"flex justify-center"},[t("img",{"data-src":ps})])],-1)),ks=_t(()=>t("h3",null,"2-bit Mux",-1)),$s={class:"flex justify-center"},Cs=_t(()=>t("section",{"data-auto-animate":""},[t("h3",null,"4-bit Mux"),t("div",{class:"flex justify-center"},[t("img",{"data-src":ms})])],-1)),nt="section-mux",Ds=v({__name:"mux",setup(n){const e=x(null);let s;function a(){s==null&&(s=new K(e.value,Ms))}function i(){s&&(s.destroy(),s=null)}return X(()=>{W({id:nt,constructor:a,destructor:i})}),B(()=>{G(nt)}),(r,c)=>(h(),u(E,null,[Ss,t("section",{"data-auto-animate":"",id:nt},[ks,t("div",$s,[t("div",{ref_key:"refDivSimulator",ref:e,class:"canvas-container"},null,512)])]),Cs],64))}}),Ns=g(Ds,[["__scopeId","data-v-c5e5b754"]]),Ls="/workshop-bfocm/assets/BFoCM-2-inverters-back-to-back-C6syTLfx.svg",Ts="/workshop-bfocm/assets/BFoCM-D-Latch-DcswNe3f.svg",Os="/workshop-bfocm/assets/BFoCM-S-R-Latch-DrsOXjIb.svg",As="/workshop-bfocm/assets/BFoCM-4-bit-register-DjJr7J86.svg",Es={},Xs=f('<section data-v-12651195><h3 data-v-12651195>We can also build circuits to store data</h3></section><section data-v-12651195><div class="flex justify-center" data-v-12651195><img data-src="'+Ls+'" data-v-12651195></div><table class="fragment" data-fragment-index="1" data-v-12651195><tr data-v-12651195><td data-v-12651195>A</td><td data-v-12651195>B</td><td data-v-12651195>C</td></tr><tr class="fragment" data-fragment-index="2" data-v-12651195><td data-v-12651195>0</td><td data-v-12651195>1</td><td data-v-12651195>0</td></tr><tr class="fragment" data-fragment-index="3" data-v-12651195><td data-v-12651195>1</td><td data-v-12651195>0</td><td data-v-12651195>1</td></tr></table></section><section data-v-12651195><h3 class="fragment" data-v-12651195>D Latch</h3><div class="flex justify-center" data-v-12651195><img data-src="'+Ts+'" data-v-12651195></div></section><section data-v-12651195><h3 class="fragment" data-v-12651195>S-R Latch</h3><div class="flex justify-center" data-v-12651195><img data-src="'+Os+'" data-v-12651195></div></section><section data-v-12651195><h3 class="fragment" data-fragment-index="1" data-v-12651195>4-bit Register</h3><div class="flex justify-center" data-v-12651195><img data-src="'+As+'" class="scale-150 fragment custom" data-fragment-index="1" data-v-12651195></div></section>',5);function Ys(n,e){return Xs}const Ps=g(Es,[["render",Ys],["__scopeId","data-v-12651195"]]),Rs="/workshop-bfocm/assets/TC-counting-duF_QQYJ.png",Hs="/workshop-bfocm/assets/TC-decoder-CUVaZzG7.png",Fs="/workshop-bfocm/assets/TC-ALU-Dks7jVyS.png",Vs={},zs=f('<section data-v-9b664457><h3 data-v-9b664457>Counter</h3><div class="flex justify-center" data-v-9b664457><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-9b664457><img data-src="'+Rs+'" data-v-9b664457></a></div></section><section data-v-9b664457><h3 data-v-9b664457>Decoder</h3><div class="flex justify-center" data-v-9b664457><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-9b664457><img data-src="'+Hs+'" data-v-9b664457></a></div></section><section data-v-9b664457><h3 data-v-9b664457>ALU (Arithmetic Logic Unit)</h3><div class="flex justify-center" data-v-9b664457><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-9b664457><img data-src="'+Fs+'" class="scale-75 m-0" data-v-9b664457></a></div></section>',3);function Us(n,e){return zs}const js=g(Vs,[["render",Us],["__scopeId","data-v-9b664457"]]),Bs=t("section",null,[t("h3",null,"Now, let's build a few components")],-1),Ws=v({__name:"basic-components",setup(n){return(e,s)=>(h(),u("section",null,[Bs,o(He),o(ls),o(fs),o(Ns),o(Ps),o(js)]))}}),Gs="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M79.15691%2025H95M29.043478%2025h-24'/%3e%3cpath%20d='M28.96875%202.59375v44.8125l2.15625-1.0625%2041.03125-20v-2.6875l-41.03125-20-2.15625-1.0625zm3%204.8125L68.09375%2025l-36.125%2017.59375V7.40625z'%20style='marker:none'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='3'%20d='M79%2025a4%204%200%201%201-8%200%204%204%200%201%201%208%200z'%20style='marker:none'/%3e%3c/svg%3e",Zs="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%20%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M31%2015H5M32%2035H5'/%3e%3cpath%20d='M30%205V45H50.47619c11.267908%200%2020-9.000045%2020-20s-8.732091-20-20-20H30zm2.857143%202.857143H50.47619c9.760663%200%2016.666667%207.639955%2016.666667%2017.142857%200%209.502902-7.382195%2017.142857-17.142857%2017.142857H32.857143V7.857143z'%20/%3e%3c/svg%3e",Js="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M31%2015H5M32%2035H5'/%3e%3cpath%20fill-rule='evenodd'%20d='M24.09375%205l2%202.4375S31.75%2014.437549%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.408076.000001%207.689699.024514%2013.625-2.40625s12.536536-7.343266%2017.6875-16.875L71.25%2025l1.3125-.71875C62.259387%205.21559%2046.006574%205%2041.25%205H24.09375zm5.875%203H41.25c4.684173%200%2018.28685-.130207%2027.96875%2017C64.451964%2033.429075%2058.697469%2037.68391%2053.5%2039.8125%2048.139339%2042.007924%2043.658075%2042.000001%2041.25%2042H30c1.873588-3.108434%204.75-9.04935%204.75-17%200-7.973354-2.908531-13.900185-4.78125-17z'/%3e%3c/svg%3e",qs="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%20%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M79%2025h16M31%2015H5M32%2035H5'/%3e%3cpath%20fill-rule='evenodd'%20d='M24.09375%205l2%202.4375S31.75%2014.437549%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.408076.000001%207.689699.024514%2013.625-2.40625s12.536536-7.343266%2017.6875-16.875L71.25%2025l1.3125-.71875C62.259387%205.21559%2046.006574%205%2041.25%205H24.09375zm5.875%203H41.25c4.684173%200%2018.28685-.130207%2027.96875%2017C64.451964%2033.429075%2058.697469%2037.68391%2053.5%2039.8125%2048.139339%2042.007924%2043.658075%2042.000001%2041.25%2042H30c1.873588-3.108434%204.75-9.04935%204.75-17%200-7.973354-2.908531-13.900185-4.78125-17z'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='3'%20d='M79%2025a4%204%200%201%201-8%200%204%204%200%201%201%208%200z'%20style='marker:none'/%3e%3c/svg%3e",Qs="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M30.38572%2015H5M31.3621%2035H5'/%3e%3cg%20fill-rule='evenodd'%3e%3cpath%20d='M24.25%2042C22.65263%2044.6444%2022%2045%2022%2045h-3.65625l2-2.4375S26%2035.56245%2026%2025%2020.34375%207.4375%2020.34375%207.4375l-2-2.4375H22c.78125.9375%201.42188%201.65625%202.21875%203C26.09147%2011.09981%2029%2017.02665%2029%2025c0%207.95065-2.8967%2013.87942-4.75%2017z'/%3e%3cpath%20d='M24.09375%205l2%202.4375S31.75%2014.43755%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.40808%200%207.6897.02451%2013.625-2.40625s12.53654-7.34327%2017.6875-16.875L71.25%2025l1.3125-.71875C62.25939%205.21559%2046.00657%205%2041.25%205H24.09375zm5.875%203H41.25c4.68417%200%2018.28685-.1302%2027.96875%2017C64.45196%2033.42907%2058.69747%2037.68391%2053.5%2039.8125%2048.13934%2042.00792%2043.65808%2042%2041.25%2042H30c1.87359-3.10843%204.75-9.04935%204.75-17%200-7.97335-2.90853-13.90019-4.78125-17z'/%3e%3c/g%3e%3c/svg%3e",Ks="/workshop-bfocm/assets/Aldrin_Apollo_11-D5Jmghkv.jpg",tn="/workshop-bfocm/assets/CMOS_NAND-C6-3LW1A.svg",en="/workshop-bfocm/assets/NAND_ANSI_Labelled-djz2KPhH.svg",sn=[{value:1,posX:24,posY:77,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-5,offsetMouseY:1,nodeStartID:3,isSaved:!0},{value:1,posX:22,posY:22,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-5,offsetMouseY:3,nodeStartID:4,isSaved:!0}],nn=[{value:!1,posX:233,posY:48,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:8,isSaved:!0}],an=[],on=[],ln=[{strType:"NAND",type:3,width:100,height:50,posX:82,posY:23,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:5}],rn=[],dn=[{startID:4,endID:5,endX:57,endY:25,width:8},{startID:3,endID:6,endX:60,endY:77,width:8},{startID:7,endID:8,endX:186,endY:47,width:8}],cn={logicInput:sn,logicOutput:nn,flipflop:an,logicClock:on,gate:ln,srLatch:rn,wire:dn},kt=n=>(k("data-v-426ed54b"),n=n(),$(),n),_n=["id"],un=kt(()=>t("h3",null,"The NAND Gate",-1)),hn={class:"flex"},fn=kt(()=>t("div",{class:"w-1/2 flex justify-center"},[t("img",{"data-src":tn})],-1)),pn={class:"flex flex-col items-center w-1/2 justify-evenly"},mn=f('<div class="w-full flex justify-center items-center bg-white" data-v-426ed54b><img data-src="'+en+'" data-v-426ed54b></div><table class="text-lg text-center" style="margin:initial;" data-v-426ed54b><thead data-v-426ed54b><tr data-v-426ed54b><th data-v-426ed54b>Input A</th><th data-v-426ed54b>Input B</th><th data-v-426ed54b>Output Q</th></tr></thead><tbody data-v-426ed54b><tr data-v-426ed54b><td data-v-426ed54b>0</td><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>1</td><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>1</td><td data-v-426ed54b>1</td><td data-v-426ed54b>0</td></tr></tbody></table>',2),gn=v({__name:"nand",setup(n){const e=x("section-nand"),s=x(null);let a;function i(){a==null&&(a=new K(s.value,cn))}function r(){a&&(a.destroy(),a=null)}return X(()=>{W({id:e.value,constructor:i,destructor:r})}),B(()=>{G(e.value)}),(c,d)=>(h(),u("section",{id:e.value},[un,t("div",hn,[fn,t("div",pn,[mn,t("div",{ref_key:"refDivSimulator",ref:s,class:"nand-gate-container"},null,512)])])],8,_n))}}),vn=g(gn,[["__scopeId","data-v-426ed54b"]]),wn=["id"],bn={class:"fragment","data-fragment-index":"6"},xn={class:"flex justify-center fragment","data-fragment-index":"5"},yn={class:"w-full flex justify-center"},In={class:"fragment","data-fragment-index":"0"},F=v({__name:"gate",props:{section_id:String,LCJson:Object,canvas_width:{type:[Number,String],default:500},canvas_height:{type:[Number,String],default:500}},setup(n){const e=x(null);let s;const a=n,i=At({width:`${a.canvas_width}px`,height:`${a.canvas_height}px`});function r(){s==null&&(s=new K(e.value,a.LCJson))}function c(){s&&(s.destroy(),s=null)}return X(()=>{W({id:a.section_id,constructor:r,destructor:c})}),B(()=>{G(a.section_id)}),(d,w)=>(h(),u("section",{id:n.section_id},[t("h3",bn,[J(d.$slots,"header")]),t("div",xn,[J(d.$slots,"symbol")]),t("div",yn,[t("div",{ref_key:"refDivSimulator",ref:e,style:Et(i)},null,4)]),t("div",In,[J(d.$slots,"tftable")])],8,wn))}}),Mn=[{value:!1,posX:63,posY:75,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:0,isSaved:!0}],Sn=[{value:!0,posX:286,posY:76,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:4,isSaved:!0}],kn=[],$n=[],Cn=[{strType:"NAND",type:3,width:100,height:50,posX:131,posY:51,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:1}],Dn=[],Nn=[{startID:0,endID:1,endX:95,endY:71,width:8},{startID:0,endID:2,endX:99,endY:77,width:8},{startID:3,endID:4,endX:232,endY:78,width:8}],Ln={logicInput:Mn,logicOutput:Sn,flipflop:kn,logicClock:$n,gate:Cn,srLatch:Dn,wire:Nn},Tn=[{value:0,posX:38,posY:24,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:6,offsetMouseY:-2,nodeStartID:6,isSaved:!0},{value:0,posX:38,posY:89,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:6,offsetMouseY:1,nodeStartID:7,isSaved:!0}],On=[{value:!1,posX:374,posY:57,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:307,offsetMouseY:96,nodeStartID:5,isSaved:!0}],An=[],En=[],Xn=[{strType:"NAND",type:3,width:100,height:50,posX:101,posY:31,isSpawned:!0,offsetMouseX:34,offsetMouseY:70,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:219,posY:31,isSpawned:!0,offsetMouseX:152,offsetMouseY:70,isMoving:!1,isSaved:!0,nodeStartID:3}],Yn=[],Pn=[{startID:6,endID:0,endX:74,endY:51,width:8},{startID:7,endID:1,endX:85,endY:114,width:8},{startID:2,endID:3,endX:221,endY:76,width:8},{startID:4,endID:5,endX:328,endY:80,width:8}],Rn={logicInput:Tn,logicOutput:On,flipflop:An,logicClock:En,gate:Xn,srLatch:Yn,wire:Pn},Hn=[{value:0,posX:24,posY:38,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-2,offsetMouseY:6,nodeStartID:2,isSaved:!0},{value:0,posX:23,posY:91,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:2,offsetMouseY:7,nodeStartID:5,isSaved:!0}],Fn=[{value:!1,posX:341,posY:63,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:7,offsetMouseY:2,nodeStartID:9,isSaved:!0}],Vn=[],zn=[],Un=[{strType:"NOT",type:1,width:100,height:50,posX:75,posY:13,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:75,posY:67,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"NAND",type:3,width:100,height:50,posX:191,posY:38,isSpawned:!0,offsetMouseX:-2,offsetMouseY:-16,isMoving:!1,isSaved:!0,nodeStartID:6}],jn=[],Bn=[{startID:2,endID:0,endX:52,endY:41,width:8},{startID:5,endID:3,endX:50,endY:93,width:8},{startID:1,endID:6,endX:178,endY:38,width:8},{startID:4,endID:7,endX:176,endY:92,width:8},{startID:8,endID:9,endX:295,endY:62,width:8}],Wn={logicInput:Hn,logicOutput:Fn,flipflop:Vn,logicClock:zn,gate:Un,srLatch:jn,wire:Bn},Gn=[{value:0,posX:24,posY:38,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-3,offsetMouseY:-5,nodeStartID:2,isSaved:!0},{value:0,posX:23,posY:91,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:7,nodeStartID:5,isSaved:!0}],Zn=[{value:!0,posX:338,posY:66,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:13,isSaved:!0}],Jn=[],qn=[],Qn=[{strType:"NOT",type:1,width:100,height:50,posX:75,posY:13,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:75,posY:67,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"AND",type:2,width:100,height:50,posX:186,posY:41,isSpawned:!0,offsetMouseX:-98,offsetMouseY:-22,isMoving:!1,isSaved:!0,nodeStartID:10}],Kn=[],ta=[{startID:2,endID:0,endX:52,endY:41,width:8},{startID:5,endID:3,endX:50,endY:93,width:8},{startID:1,endID:10,endX:175,endY:42,width:8},{startID:4,endID:11,endX:179,endY:92,width:8},{startID:12,endID:13,endX:284,endY:63,width:8}],ea={logicInput:Gn,logicOutput:Zn,flipflop:Jn,logicClock:qn,gate:Qn,srLatch:Kn,wire:ta},sa=[{value:0,posX:29,posY:85,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-10,offsetMouseY:5,nodeStartID:0,isSaved:!0},{value:0,posX:30,posY:135,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-4,offsetMouseY:10,nodeStartID:1,isSaved:!0}],na=[{value:!1,posX:450,posY:104,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:381,offsetMouseY:142,nodeStartID:15,isSaved:!0}],aa=[],ia=[],oa=[{strType:"NOT",type:1,width:100,height:50,posX:63,posY:5,isSpawned:!0,offsetMouseX:-6,offsetMouseY:43,isMoving:!1,isSaved:!0,nodeStartID:2},{strType:"NOT",type:1,width:100,height:50,posX:63,posY:169,isSpawned:!0,offsetMouseX:-6,offsetMouseY:207,isMoving:!1,isSaved:!0,nodeStartID:4},{strType:"OR",type:4,width:100,height:50,posX:191,posY:15,isSpawned:!0,offsetMouseX:122,offsetMouseY:53,isMoving:!1,isSaved:!0,nodeStartID:6},{strType:"OR",type:4,width:100,height:50,posX:189,posY:159,isSpawned:!0,offsetMouseX:120,offsetMouseY:197,isMoving:!1,isSaved:!0,nodeStartID:9},{strType:"NAND",type:3,width:100,height:50,posX:292,posY:79,isSpawned:!0,offsetMouseX:223,offsetMouseY:117,isMoving:!1,isSaved:!0,nodeStartID:12}],la=[],ra=[{startID:0,endID:2,endX:384,endY:208,width:8},{startID:1,endID:4,endX:384,endY:208,width:8},{startID:5,endID:10,endX:384,endY:208,width:8},{startID:3,endID:6,endX:384,endY:208,width:8},{startID:1,endID:7,endX:384,endY:208,width:8},{startID:0,endID:9,endX:384,endY:208,width:8},{startID:8,endID:12,endX:384,endY:208,width:8},{startID:11,endID:13,endX:384,endY:208,width:8},{startID:14,endID:15,endX:384,endY:208,width:8}],da={logicInput:sa,logicOutput:na,flipflop:aa,logicClock:ia,gate:oa,srLatch:la,wire:ra},ca={class:"text-lg text-center"},_a=t("thead",null,[t("tr",null,[t("th",null,"Input A"),t("th",null,"Input B"),t("th",null,"Output Q")])],-1),ua=["data-fragment-index"],Z=v({__name:"truth-table",props:{method:{type:String}},setup(n){const e=x([]),s=n;return X(()=>{e.value.length==0&&[[0,0],[1,0],[0,1],[1,1]].forEach(([a,i])=>{let r=0;switch(s.method){case"xor":r=a^i;break;case"or":r=a|i;break;case"and":r=a&i;break;case"nor":r=a|i?0:1;break;case"nand":r=a&i?0:1;break}e.value.push([a,i,r])})}),(a,i)=>(h(),u("table",ca,[_a,t("tbody",null,[(h(!0),u(E,null,z(e.value,(r,c)=>(h(),u("tr",{class:"fragment","data-fragment-index":c+1},[t("td",null,q(r[0]),1),t("td",null,q(r[1]),1),t("td",null,q(r[2]),1)],8,ua))),256))])]))}}),ha={},fa={class:"problem-stack"},pa=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),ma=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),ga=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),va=t("tr",{class:"ps-sw"},[t("td",null,"Operating System")],-1),wa=t("tr",{class:"ps-isa"},[t("td",null," ")],-1),ba=t("tr",{class:"ps-hw"},[t("td",null," ")],-1),xa=t("tr",{class:"ps-hw"},[t("td",{style:{"font-weight":"bold"}},"Logic")],-1),ya=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),Ia=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),Ma=[pa,ma,ga,va,wa,ba,xa,ya,Ia];function Sa(n,e){return h(),u("table",fa,Ma)}const ka=g(ha,[["render",Sa]]),$a=t("section",null,[t("h3",null,"Boolean Algebra"),t("ul",null,[t("li",null,[p("AND: "),t("code",null,"1 AND 0 = 0")]),t("li",null,[p("OR: "),t("code",null,"1 OR 0 = 1")]),t("li",null,"...")])],-1),Ca=t("img",{class:"bg-white scale-150","data-src":Gs},null,-1),Da=t("table",{class:"text-lg text-center"},[t("thead",null,[t("tr",null,[t("th",null,"Input"),t("th",null,"Output")])]),t("tbody",null,[t("tr",{class:"fragment","data-fragment-index":"1"},[t("td",null,"0"),t("td",null,"1")]),t("tr",{class:"fragment","data-fragment-index":"2"},[t("td",null,"1"),t("td",null,"0")])])],-1),Na=t("img",{class:"bg-white scale-150","data-src":Zs},null,-1),La=t("img",{class:"bg-white scale-150","data-src":Js},null,-1),Ta=t("img",{class:"bg-white scale-150","data-src":qs},null,-1),Oa=t("img",{class:"bg-white scale-150","data-src":Qs},null,-1),Aa=t("h3",null,"Summary of Logic Gates",-1),Ea={class:"flex"},Xa=t("a",{href:"https://exclusivearchitecture.com/03-technical-articles-IC-02-03-logic-level.html",target:"_blank"},[t("img",{"data-src":yt})],-1),Ya=f('<section><h3>Universal Gates: NOR &amp; NAND</h3><div class="flex items-center"><div><a href="https://en.wikipedia.org/wiki/Apollo_Guidance_Computer" target="_blank"><img data-src="'+Ks+'"></a></div><div><ul style="font-size:32px;"><li>It&#39;s possible to implement a computer with NOR or NAND gates only. Read more about <a href="https://en.wikipedia.org/wiki/NOR_logic" target="_blank">NOR logic</a> and <a href="https://en.wikipedia.org/wiki/NAND_logic" target="_blank">NAND logic</a> on Wikipedia.</li><li>The Apollo Guidance Computers (1966-1975) were implemented with NOR gate only.</li></ul></div></div></section>',1),Pa=v({__name:"boolean-algebra",setup(n){return(e,s)=>(h(),u("section",null,[$a,o(vn),o(F,{section_id:"section-not-gate",LCJson:_(Ln),canvas_height:"160",canvas_width:"340"},{header:b(()=>[p("NOT")]),symbol:b(()=>[Ca]),tftable:b(()=>[Da]),_:1},8,["LCJson"]),o(F,{section_id:"section-and-gate",LCJson:_(Rn),canvas_height:"140",canvas_width:"420"},{header:b(()=>[p("AND")]),symbol:b(()=>[Na]),tftable:b(()=>[o(Z,{method:"and"})]),_:1},8,["LCJson"]),o(F,{section_id:"section-or-gate",LCJson:_(Wn),canvas_height:"140",canvas_width:"380"},{header:b(()=>[p("OR")]),symbol:b(()=>[La]),tftable:b(()=>[o(Z,{method:"or"})]),_:1},8,["LCJson"]),o(F,{section_id:"section-nor-gate",LCJson:_(ea),canvas_height:"140",canvas_width:"380"},{header:b(()=>[p("NOR")]),symbol:b(()=>[Ta]),tftable:b(()=>[o(Z,{method:"nor"})]),_:1},8,["LCJson"]),o(F,{section_id:"section-xor-gate",LCJson:_(da),canvas_height:"220",canvas_width:"480"},{header:b(()=>[p("XOR")]),symbol:b(()=>[Oa]),tftable:b(()=>[o(Z,{method:"xor"})]),_:1},8,["LCJson"]),t("section",null,[Aa,t("div",Ea,[o(ka,{class:"text-lg"}),Xa])]),Ya]))}}),Ra={},Ha=t("h3",null,"Break",-1),Fa=t("ul",null,[t("li",null,"Signals, logic gates"),t("li",null,"von Neumann architecture"),t("li",{class:"fragment"},"Computers in early days"),t("li",{class:"fragment"},"Operating system")],-1),Va=[Ha,Fa];function za(n,e){return h(),u("section",null,Va)}const Ua=g(Ra,[["render",za]]),ja={},Ba={class:"problem-stack"},Wa=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),Ga=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),Za=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),Ja=t("tr",{class:"ps-sw"},[t("td",null,[p("Runtime System"),t("br"),p("(VM, OS, ...)")])],-1),qa=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),Qa=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),Ka=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),ti=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),ei=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),si=[Wa,Ga,Za,Ja,qa,Qa,Ka,ti,ei];function ni(n,e){return h(),u("table",Ba,si)}const ai=g(ja,[["render",ni]]),$t=n=>(k("data-v-99836d95"),n=n(),$(),n),ii=$t(()=>t("h3",null,"Break",-1)),oi={class:"column-2"},li=$t(()=>t("div",null,[t("ul",null,[t("li",null,"ISA"),t("li",null,"UNIX and C")])],-1)),ri=v({__name:"break-2",setup(n){return(e,s)=>(h(),u("section",null,[ii,t("div",oi,[t("div",null,[o(ai)]),li])]))}}),di=g(ri,[["__scopeId","data-v-99836d95"]]),ci="/workshop-bfocm/assets/BFoCM-compile-c-preprocessor-B4jrbsIZ.svg",_i="/workshop-bfocm/assets/BFoCM-compile-c-compiler-CStMhMz0.svg",ui="/workshop-bfocm/assets/BFoCM-compile-c-assembler-Bf70tcNB.svg",hi="/workshop-bfocm/assets/BFoCM-compile-c-linker-DwuZ7KoS.svg",R=`#include <stdio.h>

int main() {
	printf("hello world\\n");
	return 0;
}

`,fi=`# 0 "main.c"
# 0 "<built-in>"
# 0 "<command-line>"
# 1 "/usr/include/stdc-predef.h" 1 3 4
# 0 "<command-line>" 2
# 1 "main.c"
# 1 "/usr/include/stdio.h" 1 3 4
# 27 "/usr/include/stdio.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/libc-header-start.h" 1 3 4
# 33 "/usr/include/x86_64-linux-gnu/bits/libc-header-start.h" 3 4
# 1 "/usr/include/features.h" 1 3 4
# 392 "/usr/include/features.h" 3 4
# 1 "/usr/include/features-time64.h" 1 3 4
# 20 "/usr/include/features-time64.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 21 "/usr/include/features-time64.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 1 3 4
# 19 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 20 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 2 3 4
# 22 "/usr/include/features-time64.h" 2 3 4
# 393 "/usr/include/features.h" 2 3 4
# 486 "/usr/include/features.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/sys/cdefs.h" 1 3 4
# 559 "/usr/include/x86_64-linux-gnu/sys/cdefs.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 560 "/usr/include/x86_64-linux-gnu/sys/cdefs.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/long-double.h" 1 3 4
# 561 "/usr/include/x86_64-linux-gnu/sys/cdefs.h" 2 3 4
# 487 "/usr/include/features.h" 2 3 4
# 510 "/usr/include/features.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/gnu/stubs.h" 1 3 4
# 10 "/usr/include/x86_64-linux-gnu/gnu/stubs.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/gnu/stubs-64.h" 1 3 4
# 11 "/usr/include/x86_64-linux-gnu/gnu/stubs.h" 2 3 4
# 511 "/usr/include/features.h" 2 3 4
# 34 "/usr/include/x86_64-linux-gnu/bits/libc-header-start.h" 2 3 4
# 28 "/usr/include/stdio.h" 2 3 4





# 1 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stddef.h" 1 3 4
# 209 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stddef.h" 3 4

# 209 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stddef.h" 3 4
typedef long unsigned int size_t;
# 34 "/usr/include/stdio.h" 2 3 4


# 1 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stdarg.h" 1 3 4
# 40 "/usr/lib/gcc/x86_64-linux-gnu/11/include/stdarg.h" 3 4
typedef __builtin_va_list __gnuc_va_list;
# 37 "/usr/include/stdio.h" 2 3 4

# 1 "/usr/include/x86_64-linux-gnu/bits/types.h" 1 3 4
# 27 "/usr/include/x86_64-linux-gnu/bits/types.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 28 "/usr/include/x86_64-linux-gnu/bits/types.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 1 3 4
# 19 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/wordsize.h" 1 3 4
# 20 "/usr/include/x86_64-linux-gnu/bits/timesize.h" 2 3 4
# 29 "/usr/include/x86_64-linux-gnu/bits/types.h" 2 3 4


typedef unsigned char __u_char;
typedef unsigned short int __u_short;
typedef unsigned int __u_int;
typedef unsigned long int __u_long;


typedef signed char __int8_t;
typedef unsigned char __uint8_t;
typedef signed short int __int16_t;
typedef unsigned short int __uint16_t;
typedef signed int __int32_t;
typedef unsigned int __uint32_t;

typedef signed long int __int64_t;
typedef unsigned long int __uint64_t;






typedef __int8_t __int_least8_t;
typedef __uint8_t __uint_least8_t;
typedef __int16_t __int_least16_t;
typedef __uint16_t __uint_least16_t;
typedef __int32_t __int_least32_t;
typedef __uint32_t __uint_least32_t;
typedef __int64_t __int_least64_t;
typedef __uint64_t __uint_least64_t;



typedef long int __quad_t;
typedef unsigned long int __u_quad_t;







typedef long int __intmax_t;
typedef unsigned long int __uintmax_t;
# 141 "/usr/include/x86_64-linux-gnu/bits/types.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/typesizes.h" 1 3 4
# 142 "/usr/include/x86_64-linux-gnu/bits/types.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/time64.h" 1 3 4
# 143 "/usr/include/x86_64-linux-gnu/bits/types.h" 2 3 4


typedef unsigned long int __dev_t;
typedef unsigned int __uid_t;
typedef unsigned int __gid_t;
typedef unsigned long int __ino_t;
typedef unsigned long int __ino64_t;
typedef unsigned int __mode_t;
typedef unsigned long int __nlink_t;
typedef long int __off_t;
typedef long int __off64_t;
typedef int __pid_t;
typedef struct { int __val[2]; } __fsid_t;
typedef long int __clock_t;
typedef unsigned long int __rlim_t;
typedef unsigned long int __rlim64_t;
typedef unsigned int __id_t;
typedef long int __time_t;
typedef unsigned int __useconds_t;
typedef long int __suseconds_t;
typedef long int __suseconds64_t;

typedef int __daddr_t;
typedef int __key_t;


typedef int __clockid_t;


typedef void * __timer_t;


typedef long int __blksize_t;




typedef long int __blkcnt_t;
typedef long int __blkcnt64_t;


typedef unsigned long int __fsblkcnt_t;
typedef unsigned long int __fsblkcnt64_t;


typedef unsigned long int __fsfilcnt_t;
typedef unsigned long int __fsfilcnt64_t;


typedef long int __fsword_t;

typedef long int __ssize_t;


typedef long int __syscall_slong_t;

typedef unsigned long int __syscall_ulong_t;



typedef __off64_t __loff_t;
typedef char *__caddr_t;


typedef long int __intptr_t;


typedef unsigned int __socklen_t;




typedef int __sig_atomic_t;
# 39 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/__fpos_t.h" 1 3 4




# 1 "/usr/include/x86_64-linux-gnu/bits/types/__mbstate_t.h" 1 3 4
# 13 "/usr/include/x86_64-linux-gnu/bits/types/__mbstate_t.h" 3 4
typedef struct
{
  int __count;
  union
  {
    unsigned int __wch;
    char __wchb[4];
  } __value;
} __mbstate_t;
# 6 "/usr/include/x86_64-linux-gnu/bits/types/__fpos_t.h" 2 3 4




typedef struct _G_fpos_t
{
  __off_t __pos;
  __mbstate_t __state;
} __fpos_t;
# 40 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/__fpos64_t.h" 1 3 4
# 10 "/usr/include/x86_64-linux-gnu/bits/types/__fpos64_t.h" 3 4
typedef struct _G_fpos64_t
{
  __off64_t __pos;
  __mbstate_t __state;
} __fpos64_t;
# 41 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/__FILE.h" 1 3 4



struct _IO_FILE;
typedef struct _IO_FILE __FILE;
# 42 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/FILE.h" 1 3 4



struct _IO_FILE;


typedef struct _IO_FILE FILE;
# 43 "/usr/include/stdio.h" 2 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/types/struct_FILE.h" 1 3 4
# 35 "/usr/include/x86_64-linux-gnu/bits/types/struct_FILE.h" 3 4
struct _IO_FILE;
struct _IO_marker;
struct _IO_codecvt;
struct _IO_wide_data;




typedef void _IO_lock_t;





struct _IO_FILE
{
  int _flags;


  char *_IO_read_ptr;
  char *_IO_read_end;
  char *_IO_read_base;
  char *_IO_write_base;
  char *_IO_write_ptr;
  char *_IO_write_end;
  char *_IO_buf_base;
  char *_IO_buf_end;


  char *_IO_save_base;
  char *_IO_backup_base;
  char *_IO_save_end;

  struct _IO_marker *_markers;

  struct _IO_FILE *_chain;

  int _fileno;
  int _flags2;
  __off_t _old_offset;


  unsigned short _cur_column;
  signed char _vtable_offset;
  char _shortbuf[1];

  _IO_lock_t *_lock;







  __off64_t _offset;

  struct _IO_codecvt *_codecvt;
  struct _IO_wide_data *_wide_data;
  struct _IO_FILE *_freeres_list;
  void *_freeres_buf;
  size_t __pad5;
  int _mode;

  char _unused2[15 * sizeof (int) - 4 * sizeof (void *) - sizeof (size_t)];
};
# 44 "/usr/include/stdio.h" 2 3 4
# 52 "/usr/include/stdio.h" 3 4
typedef __gnuc_va_list va_list;
# 63 "/usr/include/stdio.h" 3 4
typedef __off_t off_t;
# 77 "/usr/include/stdio.h" 3 4
typedef __ssize_t ssize_t;






typedef __fpos_t fpos_t;
# 133 "/usr/include/stdio.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/stdio_lim.h" 1 3 4
# 134 "/usr/include/stdio.h" 2 3 4
# 143 "/usr/include/stdio.h" 3 4
extern FILE *stdin;
extern FILE *stdout;
extern FILE *stderr;






extern int remove (const char *__filename) __attribute__ ((__nothrow__ , __leaf__));

extern int rename (const char *__old, const char *__new) __attribute__ ((__nothrow__ , __leaf__));



extern int renameat (int __oldfd, const char *__old, int __newfd,
       const char *__new) __attribute__ ((__nothrow__ , __leaf__));
# 178 "/usr/include/stdio.h" 3 4
extern int fclose (FILE *__stream);
# 188 "/usr/include/stdio.h" 3 4
extern FILE *tmpfile (void)
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;
# 205 "/usr/include/stdio.h" 3 4
extern char *tmpnam (char[20]) __attribute__ ((__nothrow__ , __leaf__)) ;




extern char *tmpnam_r (char __s[20]) __attribute__ ((__nothrow__ , __leaf__)) ;
# 222 "/usr/include/stdio.h" 3 4
extern char *tempnam (const char *__dir, const char *__pfx)
   __attribute__ ((__nothrow__ , __leaf__)) __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (__builtin_free, 1)));






extern int fflush (FILE *__stream);
# 239 "/usr/include/stdio.h" 3 4
extern int fflush_unlocked (FILE *__stream);
# 258 "/usr/include/stdio.h" 3 4
extern FILE *fopen (const char *__restrict __filename,
      const char *__restrict __modes)
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;




extern FILE *freopen (const char *__restrict __filename,
        const char *__restrict __modes,
        FILE *__restrict __stream) ;
# 293 "/usr/include/stdio.h" 3 4
extern FILE *fdopen (int __fd, const char *__modes) __attribute__ ((__nothrow__ , __leaf__))
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;
# 308 "/usr/include/stdio.h" 3 4
extern FILE *fmemopen (void *__s, size_t __len, const char *__modes)
  __attribute__ ((__nothrow__ , __leaf__)) __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;




extern FILE *open_memstream (char **__bufloc, size_t *__sizeloc) __attribute__ ((__nothrow__ , __leaf__))
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (fclose, 1))) ;
# 328 "/usr/include/stdio.h" 3 4
extern void setbuf (FILE *__restrict __stream, char *__restrict __buf) __attribute__ ((__nothrow__ , __leaf__));



extern int setvbuf (FILE *__restrict __stream, char *__restrict __buf,
      int __modes, size_t __n) __attribute__ ((__nothrow__ , __leaf__));




extern void setbuffer (FILE *__restrict __stream, char *__restrict __buf,
         size_t __size) __attribute__ ((__nothrow__ , __leaf__));


extern void setlinebuf (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));







extern int fprintf (FILE *__restrict __stream,
      const char *__restrict __format, ...);




extern int printf (const char *__restrict __format, ...);

extern int sprintf (char *__restrict __s,
      const char *__restrict __format, ...) __attribute__ ((__nothrow__));





extern int vfprintf (FILE *__restrict __s, const char *__restrict __format,
       __gnuc_va_list __arg);




extern int vprintf (const char *__restrict __format, __gnuc_va_list __arg);

extern int vsprintf (char *__restrict __s, const char *__restrict __format,
       __gnuc_va_list __arg) __attribute__ ((__nothrow__));



extern int snprintf (char *__restrict __s, size_t __maxlen,
       const char *__restrict __format, ...)
     __attribute__ ((__nothrow__)) __attribute__ ((__format__ (__printf__, 3, 4)));

extern int vsnprintf (char *__restrict __s, size_t __maxlen,
        const char *__restrict __format, __gnuc_va_list __arg)
     __attribute__ ((__nothrow__)) __attribute__ ((__format__ (__printf__, 3, 0)));
# 403 "/usr/include/stdio.h" 3 4
extern int vdprintf (int __fd, const char *__restrict __fmt,
       __gnuc_va_list __arg)
     __attribute__ ((__format__ (__printf__, 2, 0)));
extern int dprintf (int __fd, const char *__restrict __fmt, ...)
     __attribute__ ((__format__ (__printf__, 2, 3)));







extern int fscanf (FILE *__restrict __stream,
     const char *__restrict __format, ...) ;




extern int scanf (const char *__restrict __format, ...) ;

extern int sscanf (const char *__restrict __s,
     const char *__restrict __format, ...) __attribute__ ((__nothrow__ , __leaf__));





# 1 "/usr/include/x86_64-linux-gnu/bits/floatn.h" 1 3 4
# 119 "/usr/include/x86_64-linux-gnu/bits/floatn.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/floatn-common.h" 1 3 4
# 24 "/usr/include/x86_64-linux-gnu/bits/floatn-common.h" 3 4
# 1 "/usr/include/x86_64-linux-gnu/bits/long-double.h" 1 3 4
# 25 "/usr/include/x86_64-linux-gnu/bits/floatn-common.h" 2 3 4
# 120 "/usr/include/x86_64-linux-gnu/bits/floatn.h" 2 3 4
# 431 "/usr/include/stdio.h" 2 3 4



extern int fscanf (FILE *__restrict __stream, const char *__restrict __format, ...) __asm__ ("" "__isoc99_fscanf")

                               ;
extern int scanf (const char *__restrict __format, ...) __asm__ ("" "__isoc99_scanf")
                              ;
extern int sscanf (const char *__restrict __s, const char *__restrict __format, ...) __asm__ ("" "__isoc99_sscanf") __attribute__ ((__nothrow__ , __leaf__))

                      ;
# 459 "/usr/include/stdio.h" 3 4
extern int vfscanf (FILE *__restrict __s, const char *__restrict __format,
      __gnuc_va_list __arg)
     __attribute__ ((__format__ (__scanf__, 2, 0))) ;





extern int vscanf (const char *__restrict __format, __gnuc_va_list __arg)
     __attribute__ ((__format__ (__scanf__, 1, 0))) ;


extern int vsscanf (const char *__restrict __s,
      const char *__restrict __format, __gnuc_va_list __arg)
     __attribute__ ((__nothrow__ , __leaf__)) __attribute__ ((__format__ (__scanf__, 2, 0)));





extern int vfscanf (FILE *__restrict __s, const char *__restrict __format, __gnuc_va_list __arg) __asm__ ("" "__isoc99_vfscanf")



     __attribute__ ((__format__ (__scanf__, 2, 0))) ;
extern int vscanf (const char *__restrict __format, __gnuc_va_list __arg) __asm__ ("" "__isoc99_vscanf")

     __attribute__ ((__format__ (__scanf__, 1, 0))) ;
extern int vsscanf (const char *__restrict __s, const char *__restrict __format, __gnuc_va_list __arg) __asm__ ("" "__isoc99_vsscanf") __attribute__ ((__nothrow__ , __leaf__))



     __attribute__ ((__format__ (__scanf__, 2, 0)));
# 513 "/usr/include/stdio.h" 3 4
extern int fgetc (FILE *__stream);
extern int getc (FILE *__stream);





extern int getchar (void);






extern int getc_unlocked (FILE *__stream);
extern int getchar_unlocked (void);
# 538 "/usr/include/stdio.h" 3 4
extern int fgetc_unlocked (FILE *__stream);
# 549 "/usr/include/stdio.h" 3 4
extern int fputc (int __c, FILE *__stream);
extern int putc (int __c, FILE *__stream);





extern int putchar (int __c);
# 565 "/usr/include/stdio.h" 3 4
extern int fputc_unlocked (int __c, FILE *__stream);







extern int putc_unlocked (int __c, FILE *__stream);
extern int putchar_unlocked (int __c);






extern int getw (FILE *__stream);


extern int putw (int __w, FILE *__stream);







extern char *fgets (char *__restrict __s, int __n, FILE *__restrict __stream)
     __attribute__ ((__access__ (__write_only__, 1, 2)));
# 632 "/usr/include/stdio.h" 3 4
extern __ssize_t __getdelim (char **__restrict __lineptr,
                             size_t *__restrict __n, int __delimiter,
                             FILE *__restrict __stream) ;
extern __ssize_t getdelim (char **__restrict __lineptr,
                           size_t *__restrict __n, int __delimiter,
                           FILE *__restrict __stream) ;







extern __ssize_t getline (char **__restrict __lineptr,
                          size_t *__restrict __n,
                          FILE *__restrict __stream) ;







extern int fputs (const char *__restrict __s, FILE *__restrict __stream);





extern int puts (const char *__s);






extern int ungetc (int __c, FILE *__stream);






extern size_t fread (void *__restrict __ptr, size_t __size,
       size_t __n, FILE *__restrict __stream) ;




extern size_t fwrite (const void *__restrict __ptr, size_t __size,
        size_t __n, FILE *__restrict __s);
# 702 "/usr/include/stdio.h" 3 4
extern size_t fread_unlocked (void *__restrict __ptr, size_t __size,
         size_t __n, FILE *__restrict __stream) ;
extern size_t fwrite_unlocked (const void *__restrict __ptr, size_t __size,
          size_t __n, FILE *__restrict __stream);







extern int fseek (FILE *__stream, long int __off, int __whence);




extern long int ftell (FILE *__stream) ;




extern void rewind (FILE *__stream);
# 736 "/usr/include/stdio.h" 3 4
extern int fseeko (FILE *__stream, __off_t __off, int __whence);




extern __off_t ftello (FILE *__stream) ;
# 760 "/usr/include/stdio.h" 3 4
extern int fgetpos (FILE *__restrict __stream, fpos_t *__restrict __pos);




extern int fsetpos (FILE *__stream, const fpos_t *__pos);
# 786 "/usr/include/stdio.h" 3 4
extern void clearerr (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));

extern int feof (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;

extern int ferror (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;



extern void clearerr_unlocked (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));
extern int feof_unlocked (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;
extern int ferror_unlocked (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;







extern void perror (const char *__s);




extern int fileno (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;




extern int fileno_unlocked (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;
# 823 "/usr/include/stdio.h" 3 4
extern int pclose (FILE *__stream);





extern FILE *popen (const char *__command, const char *__modes)
  __attribute__ ((__malloc__)) __attribute__ ((__malloc__ (pclose, 1))) ;






extern char *ctermid (char *__s) __attribute__ ((__nothrow__ , __leaf__))
  __attribute__ ((__access__ (__write_only__, 1)));
# 867 "/usr/include/stdio.h" 3 4
extern void flockfile (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));



extern int ftrylockfile (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__)) ;


extern void funlockfile (FILE *__stream) __attribute__ ((__nothrow__ , __leaf__));
# 885 "/usr/include/stdio.h" 3 4
extern int __uflow (FILE *);
extern int __overflow (FILE *, int);
# 902 "/usr/include/stdio.h" 3 4

# 2 "main.c" 2


# 3 "main.c"
int main() {
 printf("hello world\\n");
 return 0;
}
`,pi=`	.arch armv8-a
	.file	"main.c"
	.text
	.section	.rodata
	.align	3
.LC0:
	.string	"hello world"
	.text
	.align	2
	.global	main
	.type	main, %function
main:
.LFB0:
	.cfi_startproc
	stp	x29, x30, [sp, -16]!
	.cfi_def_cfa_offset 16
	.cfi_offset 29, -16
	.cfi_offset 30, -8
	mov	x29, sp
	adrp	x0, .LC0
	add	x0, x0, :lo12:.LC0
	bl	puts
	mov	w0, 0
	ldp	x29, x30, [sp], 16
	.cfi_restore 30
	.cfi_restore 29
	.cfi_def_cfa_offset 0
	ret
	.cfi_endproc
.LFE0:
	.size	main, .-main
	.ident	"GCC: (Debian 12.2.0-14) 12.2.0"
	.section	.note.GNU-stack,"",@progbits
`,vt=`	.file	"main.c"
	.text
	.section	.rodata
.LC0:
	.string	"hello world"
	.text
	.globl	main
	.type	main, @function
main:
.LFB0:
	.cfi_startproc
	endbr64
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	leaq	.LC0(%rip), %rax
	movq	%rax, %rdi
	call	puts@PLT
	movl	$0, %eax
	popq	%rbp
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	main, .-main
	.ident	"GCC: (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0"
	.section	.note.GNU-stack,"",@progbits
	.section	.note.gnu.property,"a"
	.align 8
	.long	1f - 0f
	.long	4f - 1f
	.long	5
0:
	.string	"GNU"
1:
	.align 8
	.long	0xc0000002
	.long	3f - 2f
2:
	.long	0x3
3:
	.align 8
4:
`,mi=`// callee.c
int sum(int a, int b) {
	return a + b;
}

`,gi=`// callee.h
#ifndef CALLEE_H
#define CALLEE_H

int sum(int, int);

#endif

`,vi=`// caller.c
#include <stdio.h>  // for printf()
#include "callee.h" // for sum()
// Or you can use this
// extern int sum(int, int);

int main() {
	int x = 1;
	int y = 2;
	int z = sum(x, y);
	printf("The result is %d\\n", z);
	return 0;
}

`,wi=`static void uv__cpu_relax(void) {
#if defined(__i386__) || defined(__x86_64__)
  __asm__ __volatile__ ("rep; nop" ::: "memory");  /* a.k.a. PAUSE */
#elif (defined(__arm__) && __ARM_ARCH >= 7) || defined(__aarch64__)
  __asm__ __volatile__ ("yield" ::: "memory");
#elif (defined(__ppc__) || defined(__ppc64__)) && defined(__APPLE__)
  __asm volatile ("" : : : "memory");
#elif !defined(__APPLE__) && (defined(__powerpc64__) || defined(__ppc64__) || defined(__PPC64__))
  __asm__ __volatile__ ("or 1,1,1; or 2,2,2" ::: "memory");
#endif
}

`,I=n=>(k("data-v-3d61aa58"),n=n(),$(),n),bi=f('<section data-v-3d61aa58><h3 data-v-3d61aa58>C (vs Assembly)</h3><ul class="text-4xl" data-v-3d61aa58><li class="fragment" data-v-3d61aa58>High Level: C provides a certain level of abstraction from the hardware</li><li class="fragment" data-v-3d61aa58>Portability: It&#39;s easy to convert from C to machine code</li><li class="fragment" data-v-3d61aa58>Easy of Use: functions, loops, conditional statements and data structures (arrays, linked list, tree, map)</li><li class="fragment" data-v-3d61aa58>Ideal for operating system or system-level application development</li></ul></section>',1),xi=I(()=>t("h3",null,"Languages Influenced by C",-1)),yi={class:"lang icon-container flex justify-center"},Ii=["data-src"],Mi=I(()=>t("h3",null,"Notable Softwares Developed in C",-1)),Si={class:"icon-container flex justify-center"},ki=["data-src"],$i=f('<section data-v-3d61aa58><h3 data-v-3d61aa58>Timeline of C Language</h3><ul data-v-3d61aa58><li data-v-3d61aa58>1972 - first release</li><li data-v-3d61aa58>1978 - <a href="https://en.wikipedia.org/wiki/K%26R_C" data-v-3d61aa58>K&amp;R C</a></li><li data-v-3d61aa58>1989 - C89</li><li data-v-3d61aa58>1999 - C99</li><li data-v-3d61aa58>2011 - C11</li><li data-v-3d61aa58>2018 - C17</li><li data-v-3d61aa58>2024 - C23</li></ul></section><section data-auto-animate data-v-3d61aa58><h3 data-v-3d61aa58>How to Convert C to Machine Code</h3></section>',2),Ci={"data-auto-animate":""},Di=I(()=>t("h3",null,"How to Convert C to Machine Code",-1)),Ni={"data-auto-animate":""},Li=I(()=>t("h3",null,"How to Convert C to Machine Code",-1)),Ti={"data-auto-animate":""},Oi=I(()=>t("h3",null,"How to Convert C to Machine Code",-1)),Ai=f('<section data-v-3d61aa58><h3 data-v-3d61aa58>Easy, right?</h3></section><section data-v-3d61aa58><h3 data-v-3d61aa58>Not really, let&#39;s break it down</h3></section><section data-auto-animate data-v-3d61aa58><h3 data-v-3d61aa58>Preprocessor</h3><div class="flex justify-center" data-v-3d61aa58><img data-src="'+ci+'" data-v-3d61aa58></div></section><section data-auto-animate data-v-3d61aa58><h3 data-v-3d61aa58>Preprocessor</h3><ul data-v-3d61aa58><li data-v-3d61aa58><code data-v-3d61aa58>#include</code></li><li data-v-3d61aa58><code data-v-3d61aa58>#define</code></li><li data-v-3d61aa58><code data-v-3d61aa58>#if</code>/<code data-v-3d61aa58>#ifdef</code>/<code data-v-3d61aa58>#ifndef</code>/<code data-v-3d61aa58>#else</code>/<code data-v-3d61aa58>#elif</code>/<code data-v-3d61aa58>#endif</code></li><li data-v-3d61aa58>...</li></ul></section>',4),Ei={"data-auto-animate":""},Xi=I(()=>t("h3",null,"Preprocessor",-1)),Yi={class:"flex"},Pi={class:"w-1/2"},Ri={class:"w-1/2"},Hi={"data-auto-animate":""},Fi=I(()=>t("h3",null,"Preprocessor",-1)),Vi={class:"fragment"},zi={"data-auto-animate":""},Ui=I(()=>t("h3",null,"Preprocessor",-1)),ji=I(()=>t("section",{"data-auto-animate":"","data-auto-animate-restart":""},[t("h3",null,"Compilation"),t("div",{class:"flex justify-center"},[t("img",{"data-src":_i})])],-1)),Bi=I(()=>t("h3",null,"Compilation",-1)),Wi={class:"flex"},Gi={class:"w-1/2"},Zi={class:"w-1/2"},Ji=I(()=>t("h3",null,"x86_64 vs ARMv8",-1)),qi={class:"flex"},Qi={class:"w-1/2"},Ki={class:"w-1/2"},to=f('<section data-v-3d61aa58><h3 data-v-3d61aa58>Assembler</h3><div class="flex justify-center" data-v-3d61aa58><img data-src="'+ui+'" data-v-3d61aa58></div></section><section data-v-3d61aa58><div class="flex justify-center" data-v-3d61aa58><img data-src="'+hi+'" data-v-3d61aa58></div></section><section data-v-3d61aa58><h3 data-v-3d61aa58>C (vs Assembly)</h3><ul class="text-3xl" data-v-3d61aa58><li data-v-3d61aa58>High Level: C provides a certain level of <span class="font-bold text-red-500" data-v-3d61aa58>abstraction</span> from the hardware<ul data-v-3d61aa58><li class="fragment" data-v-3d61aa58>Data types and operations are platform dependent</li></ul></li><li data-v-3d61aa58>Portability: It&#39;s easy to convert from C to machine code<ul data-v-3d61aa58><li class="fragment" data-v-3d61aa58>C is not directly related to any instruction set, but close enough</li><li class="fragment" data-v-3d61aa58>C will be convert to Assembly first, then reuse the assembler</li></ul></li><li data-v-3d61aa58>Easy of Use: functions, loops, conditional statements and data structures (arrays, linked list, tree, map)</li><li class="fragment" data-v-3d61aa58>If there&#39;re some parts of the program need to use specific hardware features, it&#39;s possible to write code with assembly languages then compile with other parts in C together</li></ul></section>',3),eo=I(()=>t("h3",null,"C w/ Assembly",-1)),wt='gcc main.c # -> a.out, which means "assembler output"',so='./a.out    # "." means the current dir',no=v({__name:"c-vs-assembly",setup(n){const e=["cplusplus/cplusplus-original.svg","csharp/csharp-original.svg","objectivec/objectivec-plain.svg","java/java-original.svg","javascript/javascript-original.svg","go/go-original-wordmark.svg","rust/rust-original.svg"],s=["linux/linux-original.svg","postgresql/postgresql-original.svg","redis/redis-original.svg","python/python-original.svg","nginx/nginx-original.svg","git/git-original.svg"];let a=fi.split(`
`);const i=[...a.slice(0,4),"# // ...",`# // other ~${a.length-10} lines`,"# // ...",...a.slice(-6)].join(`
`);return(r,c)=>{const d=Y("highlightjs");return h(),u("section",null,[bi,t("section",null,[xi,t("div",yi,[(h(),u(E,null,z(e,w=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${w}`},null,8,Ii)),64))])]),t("section",null,[Mi,t("div",Si,[(h(),u(E,null,z(s,w=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${w}`},null,8,ki)),64))])]),$i,t("section",Ci,[Di,o(d,{language:"c",autodetect:!1,code:_(R)},null,8,["code"])]),t("section",Ni,[Li,o(d,{language:"c",autodetect:!1,code:_(R)},null,8,["code"]),o(d,{language:"bash",autodetect:!1,code:wt})]),t("section",Ti,[Oi,o(d,{language:"c",autodetect:!1,code:_(R)},null,8,["code"]),o(d,{language:"bash",autodetect:!1,code:wt}),o(d,{language:"bash",autodetect:!1,code:so})]),Ai,t("section",Ei,[Xi,t("div",null,[o(d,{language:"bash",autodetect:!1,code:"gcc -E main.c -o main.i"})]),t("div",Yi,[t("div",Pi,[o(d,{language:"c",autodetect:!1,code:_(R)},null,8,["code"])]),t("div",Ri,[o(d,{language:"c",autodetect:!1,code:_(i)},null,8,["code"])])])]),t("section",Hi,[Fi,t("div",null,[o(d,{language:"c",autodetect:!1,code:_(mi)},null,8,["code"])]),t("div",Vi,[o(d,{language:"c",autodetect:!1,code:_(gi)},null,8,["code"])])]),t("section",zi,[Ui,t("div",null,[o(d,{language:"c",autodetect:!1,code:_(vi)},null,8,["code"])])]),ji,t("section",null,[Bi,t("div",null,[o(d,{language:"bash",autodetect:!1,code:"gcc -S main.i -o main.s"})]),t("div",Wi,[t("div",Gi,[o(d,{language:"c",autodetect:!1,code:_(R)},null,8,["code"])]),t("div",Zi,[o(d,{language:"x86asm",autodetect:!1,code:_(vt)},null,8,["code"])])])]),t("section",null,[Ji,t("div",qi,[t("div",Qi,[o(d,{language:"x86asm",autodetect:!1,code:_(vt)},null,8,["code"])]),t("div",Ki,[o(d,{language:"armasm",autodetect:!1,code:_(pi)},null,8,["code"])])])]),to,t("section",null,[eo,o(d,{language:"c",autodetect:!1,code:_(wi)},null,8,["code"])])])}}}),ao=g(no,[["__scopeId","data-v-3d61aa58"]]),io={},oo={class:"problem-stack"},lo=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),ro=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),co=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),_o=t("tr",{class:"ps-sw"},[t("td",null,"Operating System")],-1),uo=t("tr",{class:"ps-isa fragment"},[t("td",{style:{"font-weight":"bold"}},"Instruction Set Architecture")],-1),ho=t("tr",{class:"ps-hw fragment"},[t("td",{style:{"font-weight":"bold"}},"Microarchitecture")],-1),fo=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),po=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),mo=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),go=[lo,ro,co,_o,uo,ho,fo,po,mo];function vo(n,e){return h(),u("table",oo,go)}const wo=g(io,[["render",vo]]),bo=f('<section><h3>Computers in Early Days</h3><ul><li class="fragment">1940 - <a href="https://en.wikipedia.org/wiki/Bombe">Bombe</a></li><li class="fragment">1945 - <a href="https://en.wikipedia.org/wiki/ENIAC">ENIAC</a></li><li class="fragment">1951 - <a href="https://en.wikipedia.org/wiki/UNIVAC">UNIVAC</a></li><li class="fragment">1952 - <a href="https://en.wikipedia.org/wiki/IBM_701">IBM 701</a> (30 were sold in 1953-54)</li><li class="fragment">1954 - <a href="https://en.wikipedia.org/wiki/IBM_650">IBM 650</a> (120 were sold in 1954, and more than 750 orders)</li></ul></section><section><h3>Users stopped building their own machines</h3><h4 class="fragment">Why was IBM so late getting into computers?</h4></section><section><h3>Programmer&#39;s view of IBM 650</h3><ul><li class="fragment">A machine with 44 instructions</li><li class="fragment">Instruction: <code>60 1234 1009</code><ul class="fragment"><li>Load the contents of location <code>1234</code> into the <span class="italic">distribution</span>; put it also into the <span class="italic">upper accumulator</span>; set the <span class="italic">lower accumulator</span> to zero; and then go to the location <code>1009</code> for the next instruction.</li></ul></li></ul></section><section><h3>Computers in mid 50&#39;s</h3><ul><li class="fragment">Hardware was super expensive</li><li class="fragment">Stores were small (1000 words)</li><li class="fragment">Programmer&#39;s view of the machine was inseparable from the actual hardware implementation</li></ul></section><section><h3>Snow White and the Seven Dwarfs (1960s)</h3><ul><li>IBM</li><li>UNIVAC</li><li>GE (General Electric)</li><li>Burroughs</li><li>NCR</li><li>CDC (Control Data Corporation)</li><li>RCA</li><li>Honeywell</li></ul></section><section><h3>Compatibility Problem at IBM</h3><ul><li class="fragment">For engineering and scientific use: 701, 704, 709, ...</li><li class="fragment">For commercial or data processing use: 702, 705, ...</li><li class="fragment">Mid-range business small mainframe: 1400 series</li></ul><h4 class="fragment">They had completely different instruction sets, I/O system, storage, softwares, etc</h4></section><section><h3>IBM System/360</h3><ul><li class="fragment">Announced on April 7, 1964. Delivered between 1965 and 1978.</li><li class="fragment">Introduced a new layer of <span class="strong">abstraction</span> now well known as <span class="text-red-500">ISA</span> (instruction set architecture).</li><li class="fragment">ISA specifies <span class="text-red-500 italic">what</span> hardware provides, not <span class="text-red-500 italic">how</span> it&#39;s implemented.</li><li class="fragment">It was revolutionary and extraodinarily challenging, see <a href="https://en.wikipedia.org/wiki/The_Mythical_Man-Month">The Mythical Man-Month / 人月神话</a></li></ul></section>',7),xo=f('<section><h3>Famous ISAs and Microarchitectures</h3><table><tr><th>x86_64</th><th>ARMv8</th></tr><tr><td><ul><li>Intel 8086 (1978)</li><li>Intel Pentium (1993)</li><li>Intel Core 6th-gen Skylake (2015)</li><li>AMD Zen 4 (2022)</li></ul></td><td><ul><li>Apple Silicon</li><li>Samsung Exynos</li><li>Qualcomm Snapdragon</li></ul></td></tr></table><div>PowerPC, MIPS, RISC-V, SPARC, ...</div></section><section><h3>The Tradeoffs of ISA</h3><ul><li class="fragment">Enables fast innovation in hardware w/ no need to change the software</li><li class="fragment">Commercially successful ISAs last for decades</li></ul></section>',2),yo=v({__name:"early-computers",setup(n){return(e,s)=>(h(),u("section",null,[bo,t("section",null,[o(wo)]),xo]))}}),Io={},Mo=f('<section><h3>Summary</h3><ul><li class="fragment">There&#39;re multiple layers of abstraction in computing.</li><li class="fragment">&quot;We can solve any problem by introducing an extra level of indirection.&quot; -- David J. Wheeler</li><li class="fragment">Most of the time, implementations have trade-offs.</li><li class="fragment">Gaining an understanding of the lower layers can be beneficial.</li></ul></section><section><h3>References</h3><ul style="font-size:32px;"><li>(Open Course) MIT 6.004 Computation Structures</li><li>(Open Course) CMU 18-447 Introduction to Computer Architecture</li><li>(Book) Operating Systems: Design and Implementation, 3e</li><li>(Book) Computer Systems: A Programmer&#39;s Perspective, 3e</li><li>(Link) <a href="https://exclusivearchitecture.com/03-technical-articles-IC-00-table-of-contents.html">How microchips work</a></li><li>(Link) <a href="https://www.computerhistory.org/timeline/">Timeline of Computer History</a></li><li>(Link) <a href="https://www.hanselman.com/blog/whats-the-difference-between-a-console-a-terminal-and-a-shell">What&#39;s the difference between a console, a terminal, and a shell?</a></li><li>(Source) <a href="https://github.com/drendog/Logic-Circuit-Simulator">Logic Circuit Simulator</a></li><li>(Video Game) <a href="https://turingcomplete.game/">Turing Complete</a></li></ul></section><section><h3>Tools Used for this Project</h3><ul style="font-size:32px;"><li>Neovim + Tmux + Zsh</li><li>Node.js + pnpm</li><li>Vue + Vite + TypeScript</li><li>Reveal.js</li><li>timelinejs</li><li>highlight.js</li><li>echars</li><li>Font Awesome + devicons</li><li>diagrams.net (previously draw.io)</li></ul></section><section data-transition="slide-in fade-out"><h3>May the <span class="fragment custom show" data-fragment-index="1">force</span><span class="fragment custom hidden" data-fragment-index="1">SOURCE</span> be with you.</h3></section>',4),So=[Mo];function ko(n,e){return h(),u("section",null,So)}const $o=g(Io,[["render",ko]]),Co="/workshop-bfocm/assets/Heckert_GNU_white-D6Qvg6Gc.svg",Do=n=>(k("data-v-9c796747"),n=n(),$(),n),No=f('<section data-v-9c796747><div class="flex justify-center" data-v-9c796747><img data-src="'+Co+'" data-v-9c796747></div><h3 data-v-9c796747>GNU = GNU&#39;s Not Unix</h3></section><section data-v-9c796747><h3 data-v-9c796747>GNU is not the beginning of</h3><h3 data-v-9c796747>the free software movement and the hacker culture</h3></section><section data-v-9c796747><h3 data-v-9c796747>The GNU Project&#39;s aim was to</h3><h3 data-v-9c796747>give computer users freedom and control over their computers</h3></section><section data-v-9c796747><h3 data-v-9c796747>Softwares Released by GNU</h3><ul data-v-9c796747><li data-v-9c796747>Emacs, a text editor</li><li data-v-9c796747>Development Toolchain: debugger, parser, linker, and compiler</li><li data-v-9c796747>Unix utilities: ls, grep, awk, make...</li></ul></section><section data-v-9c796747><h3 data-v-9c796747>MINUX (means mini-UNIX)</h3><div data-v-9c796747>Written by Andrew S. Tanenbaum in Netherlands for teaching purpose and released in 1987 without even one line of UNIX source code</div></section><section data-v-9c796747><h3 data-v-9c796747>MINUX vs UNIX</h3><ul data-v-9c796747><li data-v-9c796747>MINUX was written near 17 years after UNIX V1, and nearly 10 years after UNIX V7</li><li data-v-9c796747>Modern, well structured, efficient, and readable</li><li data-v-9c796747>Compatibility with UNIX V7</li><li data-v-9c796747>For <a href="https://en.wikipedia.org/wiki/IBM_Personal_Computer" data-v-9c796747>IBM PC</a></li></ul></section><section data-v-9c796747><h3 data-v-9c796747>Then There came a Finnish Student</h3><div data-v-9c796747>Linux Torvalds</div><div data-v-9c796747>Announced his kernel on Aug 25, 1991</div><div data-v-9c796747>Released Linux 1.0 under <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" data-v-9c796747>GPLv2</a> on Mar 13, 1994</div><div data-v-9c796747>And adopted by the GNU project as its kernel</div></section>',7),Lo=Do(()=>t("h3",null,"Linux Distributions",-1)),To={class:"icon-container flex justify-center"},Oo=["data-src"],Ao=v({__name:"free-software-movement",setup(n){const e=["archlinux/archlinux-original.svg","centos/centos-original.svg","debian/debian-original.svg","fedora/fedora-original.svg","gentoo/gentoo-original.svg","opensuse/opensuse-original.svg","redhat/redhat-original.svg","ubuntu/ubuntu-original.svg"];return(s,a)=>(h(),u("section",null,[No,t("section",null,[Lo,t("div",To,[(h(),u(E,null,z(e,i=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${i}`},null,8,Oo)),64))])])]))}}),Eo=g(Ao,[["__scopeId","data-v-9c796747"]]),Xo="/workshop-bfocm/assets/BFoCM-java-bytecode-DB21QsSY.svg",Yo=`// event_loop.js
const first  = () => console.log("first");
const second = () => console.log("second (timeout)");
const third  = () => console.log("third (while loop)");

first();
// The global setTimeout() method sets a timer which
// executes a function or specified piece of code once
// the timer expires.
setTimeout(second, 0);

const startTime = new Date();
// endTime is 10ms later than startTime
const endTime   = new Date(startTime.getTime() + 10);

while (new Date() < endTime) {
	third();
}

`,Po=`$ node event_loop.js
first
third (while loop)
third (while loop)
third (while loop)
.....
third (while loop)
third (while loop)
second (timeout)
`,V=`#include <stdio.h>  // for printf()
#include <fcntl.h>  // for open() and O_RDWR
#include <unistd.h> // for close()

int main() {
	// Attempt to open /dev/null
	int fd = open("/dev/null", O_RDWR);
	printf("The file discriptor is %d\\n", fd);
	close(fd); // otherwise memory leak
	return 0;
}

`,Ro=`NAME
    open, openat, creat - open and possibly create a file

SYNOPSIS
    int open(const char *pathname, int flags);

DESCRIPTION
    The open() system call opens the file specified by pathname.
    If the specified  file  does  not  exist, it may optionally
    (if O_CREAT is specified in flags) be created by open().

    The  return  value of open()  is a file descriptor, a small,
    nonnegative integer that  is used in subsequent system calls
    (read(2),  write(2), lseek(2),  fcntl(2),  etc.) to refer to
    the open file. The file descriptor returned by a successful
    call will be the lowest-numbered file descriptor not curren-
    tly open for the process.
`,Ho=`fs.open(path[, flags[, mode]], callback)

* path <string> | <Buffer> | <URL>
* flags <string> | <number> See support of file system flags.
  Default: 'r'.
* mode <string> | <integer> Default: 0o666 (readable and writable)
* callback <Function>
    * err <Error>
    * fd <integer>

    Asynchronous file open. See the POSIX open(2) documentation
    for more details.

    mode sets  the  file mode (permission and sticky bits), but
    only  if the file was created.  On Windows,  only the write
    permission can be manipulated; see fs.chmod().

`,Fo=`os.open(path, flags, mode=0o777, *, dir_fd=None)

    Open the file  path  and  set various  flags according to
	flags  and  possibly  its  mode according  to mode.  When
	computing  mode,  the current umask value is first masked
	out. Return the file descriptor for the newly opened file.
	The new file descriptor is non-inheritable.

    For a description of the flag and mode values, see the C
	run-time documentation; flag constants (like O_RDONLY and
	O_WRONLY) are defined in the os module. In particular, on
	Windows adding O_BINARY is needed to open files in binary
	mode.
`,Vo=f('<section><h3>A Glance of High Level</h3><h3>Programming Languages</h3></section><section><h3>New Features</h3><ul><li>Object-oriented programming</li><li>Standard libraries w/ rich features</li><li>Functional programming</li><li>Cross-platform</li><li>Less knowledge about memory or compilation</li></ul></section><section><h3>Java</h3><h4>Write Once, Run Anywhere</h4></section><section><h3>Java Virtural Machine</h3><h4>Another Abstraction</h4><div class="flex justify-center"><img data-src="'+Xo+'"></div></section>',4),zo=t("h3",null,"Languages atop the JVM",-1),Uo={class:"flex justify-evenly icon-container items-center"},jo={class:"flex flex-col items-center"},Bo=["data-src"],Wo={class:"text-3xl"},Go=f("<section><h3>Some JVM Implementations</h3><table><tr><td>HotSpot</td><td>Open Source</td></tr><tr><td>GraalVM</td><td>Open Source</td></tr><tr><td>OpenJ9</td><td>Open Source</td></tr><tr><td>JRocket</td><td>Proprietary, Discontinued</td></tr><tr><td>Microsoft JVM</td><td>Proprietary, Discontinued</td></tr></table></section><section><h3>Highlights of JVM</h3><ul><li>Platform Independence</li><li>Object-Oriented</li><li>JIT: Just-In-Time compilation</li><li>Security</li><li>Robust Ecosystem</li></ul></section><section data-auto-animate><h3>No Free Lunch</h3><ul><li>Full GC is a Stop-The-World (STW) event</li><li>Generics (J2SE 5.0) / Lambda Expression (Java 8)</li><li>Understanding JVM</li></ul></section><section data-auto-animate><h3>No Free Lunch</h3><div>No only in JVM...</div></section>",4),Zo={"data-auto-animate":""},Jo=t("h3",null,"Event Loop in Node.js",-1),qo={"data-auto-animate":""},Qo=t("h3",null,"Event Loop in Node.js",-1),Ko=f('<section><h3>General JVM Implementations</h3><table><tr><td></td><td><a href="https://github.com/openjdk/jdk">OpenJDK</a></td><td><a href="https://github.com/oracle/graal">GraalVM</a></td><td><a href="https://github.com/eclipse-openj9/openj9">OpenJ9</a></td></tr><tr><td>Java</td><td>74.6%</td><td>91.6%</td><td>42.5%</td></tr><tr><td>C</td><td>7.2%</td><td>3.7%</td><td>18.8%</td></tr><tr><td>C++</td><td>13.7%</td><td>0.4%</td><td>34.3%</td></tr></table></section><section><h3>Reminisce for a Moment</h3><div>It&#39;s possible to compile C<br>and assembly language togother.</div><div class="fragment">As Java is implemented with C/C++,</div><div class="fragment">is it possible to invoke functions<br>defined in C/C++ from Java, and vice versa?</div></section><section><h3>Yes</h3><div>Java, Python, Node.js, ...</div></section>',3),tl=t("div",null,[p("Now let's take a look at this code for the "),t("span",{class:"text-red-500"},"4th"),p(" time")],-1),el=t("h3",null,[t("span",{class:"mono"},"open(2)")],-1),sl=t("h3",null,[t("a",{href:"https://nodejs.org/api/fs.html#fsopenpath-flags-mode-callback",class:"mono"},"fs.open()"),p(" in Node.js")],-1),nl=t("h3",null,[t("a",{href:"https://docs.python.org/3/library/os.html#os.open",class:"mono"},"os.open()"),p(" in Python")],-1),al=f('<section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>C</td><td><ul><li class="fragment">simple syntax</li><li class="fragment">close to hardware</li><li class="fragment">manual memory management</li><li class="fragment">compiled ahead-of-time</li><li class="fragment">operating systems, embedded systems, and system programming</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>C++</td><td><ul><li class="fragment">more complex than C</li><li class="fragment">comparable to C with optimizations and abstractions</li><li class="fragment">manual memory management with RAII, smart pointers and automatic memory management</li><li class="fragment">compiled ahead-of-time</li><li class="fragment">system/software, game, simulations</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Java</td><td><ul><li class="fragment">Object-oriented, high-level</li><li class="fragment">Generally slower than C/C++, but JIT can optimise</li><li class="fragment">Automatic garbage collection</li><li class="fragment">Rich standard library, 3rd party libraries and frameworks</li><li class="fragment">Enterprise applications, web services, Android apps</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Python</td><td><ul><li class="fragment">High-level, readable</li><li class="fragment">Slower than compiled languages (REPL)</li><li class="fragment">Automatic garbage collection</li><li class="fragment">Rich libraries and frameworks for web, data analysis, AI, scientific computing</li><li class="fragment">Web, data science, AI/ML, scripting, rapic prototyping</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Node.js</td><td><ul><li class="fragment">High-level, involving</li><li class="fragment">Generally good for I/O tasks due to its non-blocking, event-driven architecture. Use V8 JIT to compile to bytecode first, then compile to machine code.</li><li class="fragment">Automatic garbage collection from V8</li><li class="fragment">Large ecosystem, several package managers</li><li class="fragment">Web, RESTful APIs, microservices</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Rust</td><td><ul><li class="fragment">A young language with complex syntax</li><li class="fragment">Comparable to C/C++ w/ safety guarantees</li><li class="fragment">Compile ahead-of-time</li><li class="fragment">Without GC through its ownership and borrowing system</li><li class="fragment">System programming, web assembly, embedded systems</li></ul></td></tr></table></section>',6),il=v({__name:"high-level-languages",setup(n){const e=[{name:"Scala",icon:"scala/scala-original.svg"},{name:"Kotlin",icon:"kotlin/kotlin-original.svg"},{name:"Clojure",icon:"clojure/clojure-original.svg"},{name:"Groovy",icon:"groovy/groovy-original.svg"},{name:"JRuby",icon:"ruby/ruby-original.svg"},{name:"JPython",icon:"python/python-original.svg"}];return(s,a)=>{const i=Y("highlightjs");return h(),u("section",null,[Vo,t("section",null,[zo,t("div",Uo,[(h(),u(E,null,z(e,r=>t("div",jo,[t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${r.icon}`},null,8,Bo),t("span",Wo,q(r.name),1)])),64))])]),Go,t("section",Zo,[Jo,o(i,{language:"javascript",autodetect:!1,code:_(Yo)},null,8,["code"])]),t("section",qo,[Qo,o(i,{language:"plaintext",autodetect:!1,code:_(Po)},null,8,["code"])]),Ko,t("section",null,[tl,o(i,{language:"c",autodetect:!1,code:_(V)},null,8,["code"])]),t("section",null,[el,o(i,{language:"plaintext",autodetect:!1,code:_(Ro)},null,8,["code"])]),t("section",null,[sl,o(i,{language:"plaintext",autodetect:!1,code:_(Ho)},null,8,["code"])]),t("section",null,[nl,o(i,{language:"plaintext",autodetect:!1,code:_(Fo)},null,8,["code"])]),al])}}}),ol="/workshop-bfocm/assets/IMG_2090-B24t_2MV.jpeg",ll="/workshop-bfocm/assets/BFoCM-batch-system-DFBbu-04.png",rl="/workshop-bfocm/assets/Pdp7-oslo-2005-c5N3X5Pf.jpeg",dl="/workshop-bfocm/assets/ken-and-den-C8zCG6un.jpg",cl="/workshop-bfocm/assets/Unix_history-simple-BTBq0WRC.svg",_l="/workshop-bfocm/assets/BFoCM-programming-against-hw-B98I5pHn.svg",at="/workshop-bfocm/assets/BFoCM-programming-against-os-CzGtGIEB.svg",ul={},hl={class:"problem-stack"},fl=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),pl=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),ml=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),gl=t("tr",{class:"ps-sw"},[t("td",{style:{"font-weight":"bold"}},[p("Runtime System"),t("br"),p("(VM, OS, ...)")])],-1),vl=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),wl=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),bl=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),xl=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),yl=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),Il=[fl,pl,ml,gl,vl,wl,bl,xl,yl];function Ml(n,e){return h(),u("table",hl,Il)}const Sl=g(ul,[["render",Ml]]),kl=f('<section><img data-src="'+ol+'"></section><section><h3>Batch Systems in Mid 1950s</h3><div class="flex justify-center"><img data-src="'+ll+'"></div><div class="italic text-lg">Source: A. S. Tanenbaum, Operating Systems</div></section><section><h3>A Few New Technologies in Early 1960s</h3><ul><li class="fragment">Hard Drive</li><li class="fragment">Multiprogramming w/ memory partitions</li><li class="fragment">MIT: CTSS (Compatible Time-Sharing System)</li><li class="fragment">Minicomputers, smaller but less than 5% of a 7094</li></ul></section><section><h3>MULTICS</h3><h4>MULTiplexed Information and Computing Service</h4><ul><li>MIT, Bell Labs, and GE</li><li>A machine (a huge mainframe) to support hundreds of simultaneous timesharing users</li><li>Was written in PL/I, but the <span class="strong">compiler</span> was years late</li></ul></section><section><div><a href="https://en.wikipedia.org/wiki/Ken_Thompson_(computer_programmer)">Ken Thompson</a> from Bell Labs</div><div>wrote a stripped-down, one-user version of MULTICS</div><div>on a small DEC PDP-8 minicomputer</div></section><section><img data-src="'+rl+'"></section><section><h3>K. Thompson &amp; D. Ritchie at PDP-11</h3><a href="https://www.bell-labs.com/usr/dmr/www/picture.html"><img data-src="'+dl+'"></a></section><section><h3>UNIX</h3><ul><li class="fragment">Originally named Unics, Uniplexed Information and Computing Service, a pun on Multics</li><li class="fragment">Originally written in assembly language, Version 4 was rewritten in <span class="font-bold text-red-500">C</span> in 1973</li><li class="fragment">In 1973, AT&amp;T licensed Version 5 Unix to educational institutions</li><li class="fragment">The first <span class="font-bold text-red-500">port</span> of Unix to another platform in 1977</li></ul></section><section><h3>Where is UNIX</h3></section><section><h3>The UNIX Family Tree</h3><a href="https://en.wikipedia.org/wiki/History_of_Unix"><img data-src="'+cl+'"></a></section><section><h3>Key Aspects of UNIX</h3><ul><li class="fragment">Simplicity</li><li class="fragment">Portability w/ the C programming language, easily adapted on different platforms</li><li class="fragment">Shell, able to interactive w/ the system</li><li class="fragment">Pipelines</li><li class="fragment">Development Environment</li></ul></section><section><div class="flex justify-center"><img data-src="'+_l+'"></div></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+at+'"></div></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+at+'"></div><h3>Processes vs Program</h3><ul class="text-3xl"><li class="fragment">A program is a collection of binary instructions</li><li class="fragment">A process is an instance of a program that is being executed, including program code and states (registers, memory and other resources)</li><li class="fragment">The <span class="font-bold text-red-500">OS Kernel</span> is a process with special privileges</li></ul></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+at+'"></div><h3>Programmer&#39;s View of OS</h3><ul class="text-3xl"><li class="fragment"><span class="strong">Protection</span> and Privacy: Process cannot access each other&#39;s data</li><li class="fragment"><span class="strong">Abstraction</span>: OS hides details of underlying</li><li class="fragment"><span class="strong">Resource Management</span>: OS controls how processes share hardware</li></ul></section>',15),$l={"data-auto-animate":"",style:{"margin-bottom":"50px"}},Cl=t("h3",null,"Virtual Machines",-1),Dl=t("div",{class:"text-4xl"},"A New Layer of Abstraction",-1),Nl=f('<section data-auto-animate><h3>Virtual Machines</h3><ul><li class="fragment">The OS gives a Virtual Machine to each process</li><li class="fragment">Each process believes it runs on its own machine, e.g. processor, memory, I/O, files ...</li><li class="fragment">... but this machine doesn&#39;t exist in physical hardware</li><li class="fragment">A Virtual Machine is an <span class="font-bold text-red-500">emulation</span> of a computer system</li></ul></section>',1),Ll=v({__name:"operating-system",setup(n){return(e,s)=>(h(),u("section",null,[kl,t("section",$l,[Cl,Dl,o(Sl,{class:"text-2xl"})]),Nl]))}}),Tl="/workshop-bfocm/assets/man-printf(3)-DAhUur7r.png",Ol="/workshop-bfocm/assets/man-open(2)-5seNUdi_.png",Al="/workshop-bfocm/assets/man-null(4)-DZ4_gdcU.png",El={"data-auto-animate":""},Xl={"data-auto-animate":""},Yl=t("h3",null,"Imagine You're a System Developer",-1),Pl=t("div",null,[p("How to use "),t("span",{class:"mono"},"open()"),p(" and "),t("span",{class:"mono"},"printf()"),p("?")],-1),Rl=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man3/printf.3.html"},[t("img",{"data-src":Tl})])],-1),Hl=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man2/open.2.html"},[t("img",{"data-src":Ol})])],-1),Fl=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man4/null.4.html"},[t("img",{"data-src":Al})])],-1),Vl=f("<section><h3>Common Man Page Sections</h3><table><tr><th>No.</th><th>Description</th></tr><tr><td>1</td><td>General commands</td></tr><tr><td>2</td><td>System calls</td></tr><tr><td>3</td><td>Library functions, e.g. the C standard library</td></tr><tr><td>8</td><td>System administration commands and daemons</td></tr></table></section>",1),zl=t("div",null,"Now let's take a look at this code again",-1),Ul=f('<section data-auto-animate><h3>POSIX</h3><div>Portable Operating System Interface</div></section><section data-auto-animate><h3>POSIX</h3><ul><li class="fragment">It&#39;s a family of standards specified by IEEE.</li><li class="fragment">It defined APIs for Unix-like operating systems.</li><li class="fragment">Not all operating systems claim full compliance with POSIX standards.</li><li class="fragment">But it allows developers to write applications that could run on any POSIX-compliant system without significant modifications.</li></ul></section>',2),jl=`$ ./a.out
The file discriptor is 3`,Bl=v({__name:"posix",setup(n){return(e,s)=>{const a=Y("highlightjs");return h(),u("section",null,[t("section",El,[o(a,{language:"c",autodetect:!1,code:_(V)},null,8,["code"]),o(a,{language:"plaintext",autodetect:!1,code:jl})]),t("section",Xl,[Yl,o(a,{language:"c",autodetect:!1,code:_(V)},null,8,["code"]),Pl]),t("section",null,[o(a,{language:"plaintext",autodetect:!1,code:"man 3 printf"}),Rl]),t("section",null,[o(a,{language:"plaintext",autodetect:!1,code:"man 2 open"}),Hl]),t("section",null,[o(a,{language:"plaintext",autodetect:!1,code:"man 4 null"}),Fl]),Vl,t("section",null,[zl,o(a,{language:"c",autodetect:!1,code:_(V)},null,8,["code"])]),Ul])}}}),Wl=`#include <stdio.h>

int main() {
	fprintf(stdout, "hello world\\n");
	return 0;
}

`,Gl=`Console.WriteLine("This message is logged to stdout");
Console.Error.WriteLine("This error is logged to stderr");
`,Zl=`System.out.println("This message is logged to stdout");
System.err.println("This error is logged to stderr");
`,Jl=`console.log('This message is logged to stdout');
console.error('This error is logged to stderr');
`,ql=`print("This message is logged to stdout")

import sys
sys.stderr.write("This error is logged to stderr\\n")
print("This error is logged to stderr", file=sys.stderr)
`,C=n=>(k("data-v-f8fee562"),n=n(),$(),n),Ql=C(()=>t("div",null,"Now let's take a look at this code for the third time",-1)),Kl=C(()=>t("section",null,[t("h3",null,"The Default Streams"),t("ul",null,[t("li",null,[p("0 - "),t("code",null,"stdin")]),t("li",null,[p("1 - "),t("code",null,"stdout")]),t("li",null,[p("2 - "),t("code",null,"stderr")])])],-1)),tr={class:"column-2"},er=C(()=>t("section",null,[t("h3",null,"Do You Remember the Python Workshop?")],-1)),sr=C(()=>t("div",null,"C#",-1)),nr=C(()=>t("div",null,"Java",-1)),ar=C(()=>t("div",null,"JavaScript",-1)),ir=C(()=>t("div",null,"Python",-1)),or=C(()=>t("div",null,"You might have also seen this from somewhere",-1)),lr=C(()=>t("ul",null,[t("li",{class:"fragment"},[t("code",null,"`./a.out`"),p(" execute the file a.out in the current directory")]),t("li",{class:"fragment"},[t("code",null,"`> out.txt`"),p(" redirect the stdout stream to the file out.txt")]),t("li",{class:"fragment"},[t("code",null,"`2>/dev/null`"),p(" redirect the stderr stream to the file /dev/null")]),t("li",{class:"fragment"},[t("code",null,"`&`"),p(" execute the file in the background")])],-1)),rr=C(()=>t("section",null,[t("div",null,[p("Now you see a program can get data from "),t("code",null,"stdin"),p(" and return data to "),t("code",null,"stdout")]),t("div",{class:"fragment"},"What if I want to use the output of a program as the input of another?")],-1)),dr=C(()=>t("h3",null,"Pipe",-1)),cr=`$ ./a.out
The file discriptor is 3`,_r=v({__name:"printf",setup(n){return(e,s)=>{const a=Y("highlightjs");return h(),u("section",null,[t("section",null,[Ql,o(a,{language:"c",autodetect:!1,code:_(V)},null,8,["code"]),o(a,{language:"plaintext",autodetect:!1,code:cr})]),Kl,t("section",null,[t("div",tr,[t("div",null,[o(a,{language:"c",autodetect:!1,code:_(R)},null,8,["code"])]),t("div",null,[o(a,{language:"c",autodetect:!1,code:_(Wl)},null,8,["code"])])])]),er,t("section",null,[sr,o(a,{language:"csharp",autodetect:!1,code:_(Gl)},null,8,["code"]),nr,o(a,{language:"java",autodetect:!1,code:_(Zl)},null,8,["code"])]),t("section",null,[ar,o(a,{language:"javascript",autodetect:!1,code:_(Jl)},null,8,["code"]),ir,o(a,{language:"python",autodetect:!1,code:_(ql)},null,8,["code"])]),t("section",null,[or,o(a,{language:"bash",autodetect:!1,code:"./a.out > out.txt 2>/dev/null &"}),lr]),rr,t("section",null,[dr,o(a,{language:"bash",autodetect:!1,code:'ls | grep "foo" | grep "bar"'})])])}}}),ur=g(_r,[["__scopeId","data-v-f8fee562"]]),hr={},fr={class:"problem-stack"},pr=t("tr",{class:"ps-sw fragment","data-fragment-index":"1"},[t("td",null,"Problem")],-1),mr=t("tr",{class:"ps-sw fragment","data-fragment-index":"2"},[t("td",null,"Program/Language")],-1),gr=t("tr",{class:"ps-sw fragment","data-fragment-index":"3"},[t("td",null,"Operating System")],-1),vr=t("tr",{class:"ps-hw fragment","data-fragment-index":"5"},[t("td",null,"Circuits")],-1),wr=t("tr",{class:"ps-hw fragment","data-fragment-index":"4"},[t("td",null,"Electrons")],-1),br=[pr,mr,gr,vr,wr];function xr(n,e){return h(),u("table",fr,br)}const yr=g(hr,[["render",xr]]);function Ir(n,e,s,a){return[.1*s+n*.8*s,a-.1*a-a*.8*e]}function Mr(n,e,s,a){const i=[];for(const[r,c]of e)i.push(...Ir(r,c,s,a));n.add(new H({points:i,stroke:"blue",strokeWidth:2}))}function it(n){const e=n.offsetHeight,s=n.offsetWidth,a=new Q.Stage({container:n,height:e,width:s}),i=new Q.Layer;a.add(i),i.add(new bt({x:0,y:0,height:e,width:s,fill:"#eee"}));const r=[[[.1,.1],[.9,.1]],[[.1,.26],[.9,.26]],[[.1,.42],[.9,.42]],[[.1,.58],[.9,.58]],[[.1,.74],[.9,.74]],[[.26,.1],[.26,.9]],[[.42,.1],[.42,.9]],[[.58,.1],[.58,.9]],[[.74,.1],[.74,.9]],[[.9,.1],[.9,.9]]],c=[[[.1,.9],[.9,.9]],[[.1,.9],[.1,.1]]];for(let[d,w]of r){const D=[d[0]*s,d[1]*e,w[0]*s,w[1]*e];i.add(new H({points:D,strokeWidth:1,stroke:"#ccc"}))}for(let[d,w]of c){const D=[d[0]*s,d[1]*e,w[0]*s,w[1]*e];i.add(new H({points:D,strokeWidth:1,stroke:"#666"}))}i.add(new N({text:"t",x:.9*s+8,y:.9*e-8,fontSize:16,fontStyle:"italic"})),i.add(new N({text:"V",x:.1*s-6,y:.1*e-20,fontSize:16,fontStyle:"italic"}));for(let d=0;d<6;d++)i.add(new N({text:d.toString(),x:.1*s+d*.16*s-4,y:.9*e+8,fontSize:16,fill:"#555"}));for(let d=0;d<6;d++)i.add(new N({text:d.toString(),x:.1*s-20,y:.9*e-d*.16*e-8,fontSize:16,fill:"#555"}));return{stage:a,line:d=>{Mr(i,d,s,e)}}}const Ct=n=>(k("data-v-7ab190df"),n=n(),$(),n),Sr=Ct(()=>t("h3",null,"Signal: Analog vs Digital",-1)),kr={class:"bfocm-column-3"},$r={class:"fragment"},Cr={class:"fragment"},Dr={class:"fragment"},Nr=Ct(()=>t("p",{class:"fragment"},"Noise resistance, data compression, error detection and correction, cost efficiency...",-1)),ot="signal-analog-digital",Lr=v({__name:"signal-analog-digital",setup(n){const e=xt("dark_mode"),s=x(null),a=x(null),i=x(null);let r,c,d,w=!1;function D(){r&&r.stage.destroy(),c&&c.stage.destroy(),d&&d.stage.destroy(),r=null,c=null,d=null,w=!1}function y(){D(),w=!0,r=it(s.value),c=it(a.value),d=it(i.value),r.line([[0,0],[1,1]]),c.line([[0,0],[.5,0],[.5,1],[1,1]]),d.line([[0,0],[1/8,1.5/5],[2/8,1/5],[3/8,1.5/5],[4/8,5/5],[5/8,4.8/5],[6/8,3/5],[7/8,4/5],[8/8,4.5/5]])}return X(()=>{W({id:ot,constructor:y,destructor:D})}),B(()=>{G(ot)}),Xt(e,async()=>{w&&y()}),(T,M)=>(h(),u("section",{id:ot},[Sr,t("div",kr,[t("div",$r,[t("div",{class:"bfocm-chart",ref_key:"refChartAnalog",ref:s},null,512)]),t("div",Cr,[t("div",{class:"bfocm-chart",ref_key:"refChartDigitalR",ref:i},null,512)]),t("div",Dr,[t("div",{class:"bfocm-chart",ref_key:"refChartDigitalI",ref:a},null,512)])]),Nr]))}}),Tr=g(Lr,[["__scopeId","data-v-7ab190df"]]),Or=f('<section><h2>Brief History of the Digital<br>Programmable Machines</h2></section><section><h3>Quick Survey: When Were You Born</h3><ul><li class="fragment">~1981</li><li class="fragment">1980~1984</li><li class="fragment">1985~1989</li><li class="fragment">1990~1994</li><li class="fragment">1995~1999</li><li class="fragment">2000s~</li></ul></section><section><h3>When You Try to Learn Programming</h3><ul><li>Weird syntaxes and code structures</li><li>Strange concepts like stack / heap / threads</li><li>What could be done with a programming language</li><li>How to improve programming skills</li><li>How to learn other languages fast</li><li>And why some languages look the same</li><li>What happens underneath</li><li>Should I learn Linux and command line tools</li></ul></section><section><h3>Fasten Your Seatbelt</h3><h4>We&#39;ll see patterns over and over again. Déjà vu.</h4></section>',4),Ar=v({__name:"prologue",setup(n){return(e,s)=>(h(),u("section",null,[Or,t("section",null,[o(yr)]),o(Tr)]))}}),Er="/workshop-bfocm/assets/premium_photo-1679255807252-3c568399dfc2-DQyoh-xX.avif",Xr="/workshop-bfocm/assets/Tower_of_Hanoi-CluCuWxr.jpeg",Yr="/workshop-bfocm/assets/BFoCM-memory-hierarchy-De5H_NOY.png",Pr=`#include <stdio.h>  // printf
#include <stdlib.h> // malloc and free

int main() {
	int *x = (int *) malloc(sizeof(int));
	printf("The address of x  is %p\\n", &x);
	printf("The address of *x is %p\\n",  x);
	free(x);
	return 0;
}

`,Rr=`#include <stdio.h> // printf

int main() {
	int x;
	printf("The size of x is %ld byte(s)\\n", sizeof(int));
	printf("The address of x is %p\\n", &x);
	return 0;
}

`,Hr=`#include <stdio.h>
#include <stdlib.h>
#define VAR_SIZE 0x10
#define MAX_FRAME 5

int g_count = 0;

void foo() {
	if (g_count == MAX_FRAME)
		return;

	char s1[VAR_SIZE], *s2;
	s2 = (char *) malloc(VAR_SIZE * sizeof(char));
	printf("=== %d ===\\n", g_count);
	printf("The address of s1 is             %p\\n", &s1);
	printf("The address of s2 is             %p\\n", &s2);
	printf("The address that s2 points to is %p\\n",  s2);

	g_count++;
	foo();
	free(s2);
}

int main() {
	foo();
	return 0;
}

`,Fr=`#include <stdio.h>
#define SIZE 3

int main() {
	int a[SIZE];
	int i;

	printf("The address of a    is %p\\n", &a);
	for (i = 0; i < SIZE; i++) {
		printf("The address of a[%d] is %p\\n",
			i,
			&a[i]
		);
	}

	return 0;
}

`,Vr=`#include <stdio.h>
#define SIZE 3

int main() {
	int a[SIZE];
	int i;

	for (i = 0; i < SIZE; i++) {
		printf("The value of a[%d] is %d\\n",
		i,
		a[i]);
	}

	return 0;
}

`,zr=`#include <stdio.h>

int main() {
	int x, *p;

	x = 42;
	p = &x;

	printf("The address of x is %p\\n", &x);
	printf("The address of p is %p\\n", &p);
	printf("The value   of p is %p\\n", p);
	printf("The value p points to is %d\\n", *p);

	return 0;
}

`,Ur=`$ ./addr_var_heap
The address of x  is 0x7ffedb7516c0
The address of *x is 0x61f42dfc92a0
`,jr=`$ ./addr_var_recursive
=== 0 ===
The address of s1 is             0x7ffc1b25a6b0
The address of s2 is             0x7ffc1b25a6a8
The address that s2 points to is 0x632de61e72a0
=== 1 ===
The address of s1 is             0x7ffc1b25a670
The address of s2 is             0x7ffc1b25a668
The address that s2 points to is 0x632de61e76d0
=== 2 ===
The address of s1 is             0x7ffc1b25a630
The address of s2 is             0x7ffc1b25a628
The address that s2 points to is 0x632de61e76f0
=== 3 ===
The address of s1 is             0x7ffc1b25a5f0
The address of s2 is             0x7ffc1b25a5e8
The address that s2 points to is 0x632de61e7710
=== 4 ===
The address of s1 is             0x7ffc1b25a5b0
The address of s2 is             0x7ffc1b25a5a8
The address that s2 points to is 0x632de61e7730
`,Br=`$ ./addr_var_stack
The size of x is 4 byte(s)
The address of x is 0x7ffde0c2a054
`,Wr=`$ ./array
The address of a    is 0x7ffdbcba285c
The address of a[0] is 0x7ffdbcba285c
The address of a[1] is 0x7ffdbcba2860
The address of a[2] is 0x7ffdbcba2864
`,Gr=`$ ./array_uninitialized
The value of a[0] is 0
The value of a[1] is 4096
The value of a[2] is 0
`,Zr=`$ ./pointer
The address of x is 0x7fff90062e4c
The address of p is 0x7fff90062e50
The value   of p is 0x7fff90062e4c
The value p points to is 42
`,O=n=>(k("data-v-a10a5439"),n=n(),$(),n),Jr=O(()=>t("section",null,[t("div",null,"With C you don't have to deal with registers or instructions."),t("div",{class:"fragment"},"But you still need to take care of memory."),t("div",{class:"fragment"},"Let's get hands dirty.")],-1)),qr=O(()=>t("h3",null,"Address of Variable",-1)),Qr=O(()=>t("h3",null,"Hi, Pointer",-1)),Kr={class:"flex"},td={class:"w-1/2"},ed={class:"w-1/2"},sd={"data-auto-animate":""},nd=O(()=>t("h3",null,"Hi, Array",-1)),ad={class:"flex"},id={class:"w-1/2"},od={class:"w-1/2"},ld={"data-auto-animate":""},rd=O(()=>t("h3",null,"Hi, Array",-1)),dd={class:"flex"},cd={class:"w-1/2"},_d={class:"w-1/2"},ud=O(()=>t("h3",null,"Allocate and Free Dynamic Memory",-1)),hd={"data-auto-animate":""},fd=O(()=>t("h3",null,"Let's Make It SPICER",-1)),pd={"data-auto-animate":""},md=O(()=>t("h3",null,"Let's Make It SPICER",-1)),gd=f('<section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Hi Stack</h3><div class="flex justify-center" data-v-a10a5439><img data-src="'+Er+'" data-v-a10a5439></div></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Hi Stack</h3><div data-v-a10a5439>Tower of Hanoi</div><div class="flex justify-center" data-v-a10a5439><img data-src="'+Xr+'" data-v-a10a5439></div><div class="fragment" data-v-a10a5439>First-In-Last-Out (or Last-In-First-Out)</div></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Memory Hierarchy</h3><img data-src="'+Yr+'" data-v-a10a5439></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Memory Hierarchy</h3><table class="memory-hierarchy" data-v-a10a5439><tr data-v-a10a5439><td style="text-align:right;" data-v-a10a5439>0.5ns</td><td data-v-a10a5439>L1 Cache</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>0.5s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>7ns</td><td data-v-a10a5439>L2 Cache</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>7s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>100ns</td><td data-v-a10a5439>DRAM</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>100s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>150µs</td><td data-v-a10a5439>SSD</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>1.7 days</td></tr><tr data-v-a10a5439><td data-v-a10a5439>10ms</td><td data-v-a10a5439>HDD</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>16.5 weeks</td></tr></table></section><section data-v-a10a5439><h3 data-v-a10a5439>Stack</h3><ul style="font-size:30px;" data-v-a10a5439><li class="fragment" data-v-a10a5439>When a function is called, a block is reserved on the top of stack for local variables and some bookkeeping data.</li><li class="fragment" data-v-a10a5439>When that function returns, the block becomes unused and can be reused for another function call.</li><li class="fragment" data-v-a10a5439>In most computer architectures, there is a special register known as the <span class="text-red-500" data-v-a10a5439>stack pointer</span> register.</li><li class="fragment" data-v-a10a5439>The most recently used data (i.e. the data on the top of the stack) is likely to be the data needed next, it tends to stay in the CPU cache.</li></ul></section><section data-v-a10a5439><h3 data-v-a10a5439>Heap</h3><ul style="font-size:30px;" data-v-a10a5439><li class="fragment" data-v-a10a5439>Is another region of memory managed by the operating system for dynamic memory allocation. (<code data-v-a10a5439>`malloc()` / `calloc()` / `realloc()`</code>)</li><li class="fragment" data-v-a10a5439>The compiler needs to know how much memory to allocate in a function, so you can&#39;t declare an array of unknown size on the stack.</li><li class="fragment" data-v-a10a5439>Sometime you also need to use a space to keep data for longer time the function in which it&#39;s created.</li><li class="fragment" data-v-a10a5439>Don&#39;t forget to call <code data-v-a10a5439>`free()`</code>, otherwise it would cause memory leak.</li></ul></section><section data-v-a10a5439><h3 data-v-a10a5439>Now You May Have a Guess</h3><h3 data-v-a10a5439>of Stack Overflow</h3></section>',7),vd=v({__name:"stack-heap",setup(n){return(e,s)=>{const a=Y("highlightjs");return h(),u("section",null,[Jr,t("section",null,[qr,o(a,{language:"c",autodetect:!1,code:_(Rr)},null,8,["code"]),o(a,{language:"plaintext",autodetect:!1,code:_(Br)},null,8,["code"])]),t("section",null,[Qr,t("div",Kr,[t("div",td,[o(a,{language:"c",autodetect:!1,code:_(zr)},null,8,["code"])]),t("div",ed,[o(a,{language:"plaintext",autodetect:!1,code:_(Zr)},null,8,["code"])])])]),t("section",sd,[nd,t("div",ad,[t("div",id,[o(a,{language:"c",autodetect:!1,code:_(Fr)},null,8,["code"])]),t("div",od,[o(a,{language:"plaintext",autodetect:!1,code:_(Wr)},null,8,["code"])])])]),t("section",ld,[rd,t("div",dd,[t("div",cd,[o(a,{language:"c",autodetect:!1,code:_(Vr)},null,8,["code"])]),t("div",_d,[o(a,{language:"plaintext",autodetect:!1,code:_(Gr)},null,8,["code"])])])]),t("section",null,[ud,o(a,{language:"c",autodetect:!1,code:_(Pr)},null,8,["code"]),o(a,{language:"plaintext",autodetect:!1,code:_(Ur)},null,8,["code"])]),t("section",hd,[fd,o(a,{language:"c",autodetect:!1,code:_(Hr)},null,8,["code"])]),t("section",pd,[md,o(a,{language:"plaintext",autodetect:!1,code:_(jr)},null,8,["code"])]),gd])}}}),wd=g(vd,[["__scopeId","data-v-a10a5439"]]),bd="/workshop-bfocm/assets/1678948976_14529e3278_c-D5NwS9gj.jpg",xd="/workshop-bfocm/assets/3281139507_f56091fa84_z-CK7TuODw.jpg",yd="/workshop-bfocm/assets/DEC_VT100_terminal-B822DIAI.jpg",Id="/workshop-bfocm/assets/image_e3c2af63-3682-44c6-89b3-4c7d09f0fcf4-2TTtwk0m.png",Md={},Sd=f('<section><ul><li>Terminals?</li><li>Consoles?</li><li>Shells?</li><li>Terminal Emulators?</li></ul></section><section><h3>Terminals</h3><div class="flex justify-center"><a href="https://www.flickr.com/photos/16057786@N00/1678948976"><img data-src="'+bd+'"></a></div></section><section><h3>Shells</h3><ul class="text-4xl"><li>The kernel of an operating system manages hardwares.</li><li>A shell provides an interface to interact with the kernel indirectly.</li></ul></section><section><h3>Notable Shells</h3><ul><li class="fragment">Thompson shell - 1971, Ken Thompson</li><li class="fragment">Bourne shell (sh) - 1979, Stephen Bourne</li><li class="fragment">Bourne-Again SHell (bash) - 1989, Brian Fox</li><li class="fragment">C shell (csh) - 1978, Bill Joy (BSD, vi, Sun Microsystems, Java, SPARC, Solaris, ...)</li><li class="fragment">Powershell - 2006, Microsoft</li><li class="fragment">Z shell (zsh) - 1990, Paul Falstad</li></ul></section><section><h3>Consoles</h3><div class="flex justify-center"><a href="https://www.flickr.com/photos/ajmexico/3281139507/"><img data-src="'+xd+'"></a></div></section><section><div class="flex justify-center"><a href="https://en.wikipedia.org/wiki/VT100"><img data-src="'+yd+'"></a></div></section><section><h3>Pseudoterminal</h3><ul><li>Remote logins (telnet, ssh)</li><li>Hardware terminals are less and less</li></ul></section><section><div class="flex justify-center"><img data-src="'+Id+'"></div></section><section><h3>Notable Terminal Emulators</h3><ul><li><a href="https://hyper.is/">Hyper</a></li><li><a href="https://conemu.github.io/">ConEmu</a></li><li><a href="https://en.wikipedia.org/wiki/PuTTY">PuTTY</a></li><li><a href="https://apps.microsoft.com/detail/9n0dx20hk701">Windows Terminal</a></li><li><a href="https://alacritty.org/">Alacritty</a></li></ul><div>Yet another GUI application</div><div>Take a try or watch tutorials</div></section>',9),kd=[Sd];function $d(n,e){return h(),u("section",null,kd)}const Cd=g(Md,[["render",$d]]),Dd="/workshop-bfocm/assets/BFoCM-von-neumann-computer-C3DFUaq3.svg",Nd="/workshop-bfocm/assets/BFoCM-von-neumann-computer-anatomy-CAf57Qs2.svg",Ld="/workshop-bfocm/assets/BFoCM-von-neumann-computer-loop-CpzOQyFq.svg",Dt=n=>(k("data-v-63872613"),n=n(),$(),n),Td=f('<section data-auto-animate data-auto-animate-id="one" data-v-63872613><h3 data-v-63872613>Main Memory</h3><h4 data-v-63872613>(Random Access Memory)</h4><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Registers are inside processors, built with logic gates just like ALUs and other components.</li><li class="fragment" data-v-63872613>Registers are super fast, but can only be used to store a small number of data elements.</li><li class="fragment" data-v-63872613>Main memory is an array of bits, organized in <span class="mono italic" data-v-63872613>W</span> words of <span class="mono italic" data-v-63872613>N</span> bits each.</li><li class="fragment" data-v-63872613>Typically <span class="mono italic" data-v-63872613>W</span> is power of 2 (<span class="mono" data-v-63872613>W = 2<sup data-v-63872613>k</sup></span>), e.g. W = 8 (k = 3 address bits), N = 32 bits per word.</li><li class="fragment" data-v-63872613>Can read from and write to individual words.</li><li class="fragment" data-v-63872613>Many possible implementations.</li></ul></section><section data-auto-animate data-auto-animate-id="one" data-v-63872613><h3 data-v-63872613>Main Memory</h3><h4 data-v-63872613>(Random Access Memory)</h4><table class="text-3xl" data-v-63872613><tr data-v-63872613><th class="text-center" data-v-63872613>Addr.</th><th class="text-center" data-v-63872613>Value</th></tr><tr data-v-63872613><td class="mono" data-v-63872613>000</td><td class="mono" data-v-63872613>11001001 01010001 10001111 01110011</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>001</td><td class="mono" data-v-63872613>01011000 01110001 10101101 11010001</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>010</td><td class="mono text-center" data-v-63872613>...</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>...</td><td class="mono text-center" data-v-63872613>...</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>111</td><td class="mono" data-v-63872613>10000100 01001111 11100100 00001000</td></tr></table></section><section data-auto-animate data-auto-animate-id="two" data-v-63872613><h3 data-v-63872613>Registers vs Memory</h3><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Typically variables live in memory.</li><li class="fragment" data-v-63872613>Registers hold temporary values or values that we need to use repeatedly.</li><li class="fragment" data-v-63872613>ALU operations work on registers only.</li><li class="fragment" data-v-63872613>To operate with memory variables: <ul data-v-63872613><li data-v-63872613>Load them into a register.</li><li data-v-63872613>Compute on them.</li><li data-v-63872613>Store the results back to memory.</li></ul></li></ul></section>',3),Od={"data-auto-animate":"","data-auto-animate-id":"two"},Ad=Dt(()=>t("h3",null,"Registers vs Memory",-1)),Ed={class:"flex justify-center items-center"},Xd=f('<div class="w-1/2" data-v-63872613><ul data-v-63872613><li class="mono" data-v-63872613>0x1000: n</li><li class="mono" data-v-63872613>0x1004: r</li><li class="mono" data-v-63872613>0x1008: x</li><li class="mono" data-v-63872613>0x100C: y</li></ul></div>',1),Yd={class:"w-1/2"},Pd={class:"fragment"},Rd={class:"fragment"},Hd={"data-auto-animate":"","data-auto-animate-id":"three"},Fd=Dt(()=>t("h3",null,"von Neumann Computer",-1)),Vd={class:"flex items-center"},zd=f('<div data-v-63872613><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Also called stored-program computer</li><li class="fragment" data-v-63872613>Express program as a sequence of <span class="strong" data-v-63872613>coded instructions</span></li><li class="fragment" data-v-63872613>Memory holds both data and instructions</li><li class="fragment" data-v-63872613>CPU fetches, interprets, and executes successive instructions of the program</li></ul></div>',1),Ud=f('<section data-auto-animate data-auto-animate-id="three" data-v-63872613><h3 data-v-63872613>von Neumann Computer</h3><div class="flex flex-col items-center" data-v-63872613><img data-src="'+Nd+'" data-v-63872613><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613><span class="strong" data-v-63872613>Instructions</span> coded as binary data</li><li class="fragment" data-v-63872613><span class="strong" data-v-63872613>Program Counter</span>, or PC, a special register, stores the address of the instruction to be executed</li><li class="fragment" data-v-63872613>Decode the instruction, and generate control signals for datapath</li></ul></div></section><section data-auto-animate data-auto-animate-id="three" data-v-63872613><h3 data-v-63872613>von Neumann Computer</h3><div class="flex justify-center" data-v-63872613><img data-src="'+Ld+'" data-v-63872613></div><div class="text-3xl text-left" data-v-63872613><div class="fragment mt-6" data-v-63872613>Instructions are the fundamental unit of work.</div><div class="fragment mt-6" data-v-63872613>Each instruction specifies: <ul data-v-63872613><li data-v-63872613>an operation (also called <span class="strong" data-v-63872613>opcode</span>) to be performed,</li><li data-v-63872613>source and destination <span class="strong" data-v-63872613>operands</span>.</li></ul></div><div class="fragment mt-6" data-v-63872613>By default, the next PC is current PC + size of current instruction, unless the instruction says otherwise. <span class="fragment" data-v-63872613><span class="strong" data-v-63872613>guess?</span></span></div></div></section><section data-v-63872613><h3 data-v-63872613>Your Own Programmable Machine</h3><ul data-v-63872613><li class="fragment" data-v-63872613>Now you can design your own CPU with logic gates. <span class="fragment" data-v-63872613>Theoretically.</span></li><li class="fragment" data-v-63872613>And you can write programs to run on your own CPU. <span class="fragment" data-v-63872613>In Binary.</span></li><li class="fragment" data-v-63872613>However it&#39;s too tedious to write programs directly in binary.</li><li class="fragment" data-v-63872613>So assembly language was created, it looks like <code data-v-63872613>add x1, x2, x3</code> and then would be translated by the <span class="strong" data-v-63872613>assemblers</span> into binary code.</li></ul></section>',3),jd=`int x, y;
y = x - 37;`,Bd=`R1 <- Mem[0x1008]
R1 <- R1 - 37`,Wd=v({__name:"von-neumann-architecture",setup(n){const e=xt("open_common_modal"),s=x(null);function a(){e.open_common_modal(s.value.outerHTML)}return(i,r)=>{const c=Y("highlightjs");return h(),u("section",null,[Td,t("section",Od,[Ad,t("div",Ed,[Xd,t("div",Yd,[t("div",Pd,[o(c,{language:"c",autodetect:!1,code:jd})]),t("div",Rd,[o(c,{language:"plaintext",autodetect:!1,code:Bd})])])])]),t("section",Hd,[Fd,t("div",Vd,[zd,t("div",{class:"fragment",onClick:a},[t("img",{ref_key:"vNCImg",ref:s,"data-src":Dd},null,512)])])]),Ud])}}}),Gd=g(Wd,[["__scopeId","data-v-63872613"]]),Zd=n=>(k("data-v-4a81ac49"),n=n(),$(),n),Jd={class:"bfocm-toolbar"},qd={ref:"revealEl",class:"reveal"},Qd={class:"slides"},Kd=Zd(()=>t("img",{src:yt},null,-1)),tc=["innerHTML"],ec=v({__name:"App",setup(n){const e=x(!0);ft("dark_mode",e);const s=Yt(()=>`reveal-root-theme-${e.value?"black":"white"}`),a=Ht(()=>ae(()=>import("./Timeline-DfnVQoOM.js"),__vite__mapDeps([0,1,2]))),i=x(null),r=x(null),c=x(null);X(()=>{const M=new Pt({hash:!1});M.initialize({maxScale:1,minScale:1,slideNumber:!0,plugins:[]}),M.on("slidechanged",ut=>{const{previousSlide:P,currentSlide:ht}=ut;j.has(P.id)&&j.get(P.id)(),U.has(ht.id)&&U.get(ht.id)()}),fe()});function d(){e.value=!e.value}function w(){i.value.show()}function D(){r.value.show()}const y=x("");function T(M){y.value=M,c.value.show(()=>y.value="")}return ft("open_common_modal",{open_common_modal:T}),(M,ut)=>{const P=Y("fa");return h(),u("div",{class:Rt(s.value)},[t("div",Jd,[t("div",{class:"btn",onClick:d},[o(P,{icon:"fa-regular fa-lightbulb"})]),t("div",{class:"btn",onClick:D},[o(P,{icon:"fa-soid fa-microchip"})]),t("div",{class:"btn",onClick:w},[o(P,{icon:"fa-solid fa-timeline"})])]),t("div",qd,[t("div",Qd,[o(Ar),o(Pa),o(Ws),o(Gd),o(Ua),o(yo),o(Ll),o(ao),o(Eo),o(Bl),o(di),o(Cd),o(ur),o(wd),o(il),o(Ee),o($o)])],512),o(tt,{ref_key:"timelineModal",ref:i},{default:b(()=>[o(_(a))]),_:1},512),o(tt,{ref_key:"gateModal",ref:r},{default:b(()=>[Kd]),_:1},512),o(tt,{ref_key:"commonModal",ref:c},{default:b(()=>[t("div",{innerHTML:y.value},null,8,tc)]),_:1},512)],2)}}}),sc=g(ec,[["__scopeId","data-v-4a81ac49"]]);ct.add(Ft);ct.add(Vt);ct.add(zt);L.registerLanguage("armasm",Ut);L.registerLanguage("bash",jt);L.registerLanguage("c",Bt);L.registerLanguage("csharp",Wt);L.registerLanguage("java",Gt);L.registerLanguage("javascript",Zt);L.registerLanguage("plaintext",Jt);L.registerLanguage("python",qt);L.registerLanguage("x86asm",Qt);te(sc).component("fa",ee).use(Kt).mount("#app");
