function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Timeline-Crzy0I19.js","assets/vendor-GdE6KxDo.js","assets/Timeline-D204Rb6D.css","assets/Modal-DWZORtHx.js","assets/Modal-ChuV8BRq.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var $t=Object.defineProperty;var Ot=(s,e,i)=>e in s?$t(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var d=(s,e,i)=>(Ot(s,typeof e!="symbol"?e+"":e,i),i);import{o as p,c as _,a as t,b as f,d as v,e as a,f as h,p as At,r as y,g as Y,h as J,F as X,i as S,j as M,k as Tt,l as st,n as Xt,m as B,t as tt,w,u as c,q as E,s as Yt,v as Et,x as jt,y as Rt,z as Ft,A as kt,B as Pt,C as nt,D as Vt,$ as zt,E as Ht,G as _t,H as ht,I as dt,J as Ut,K as Bt,L as Wt,M as $,N as Gt,O as Zt,P as Jt,Q as qt,R as Qt,S as Kt,T as te,U as ee,V as se,W as ne,X as ie,Y as ae}from"./vendor-GdE6KxDo.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();const oe="modulepreload",re=function(s){return"/workshop-bfocm/"+s},ft={},mt=function(e,i,n){let o=Promise.resolve();if(i&&i.length>0){const l=document.getElementsByTagName("link");o=Promise.all(i.map(r=>{if(r=re(r),r in ft)return;ft[r]=!0;const u=r.endsWith(".css"),x=u?'[rel="stylesheet"]':"";if(!!n)for(let C=l.length-1;C>=0;C--){const T=l[C];if(T.href===r&&(!u||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${x}`))return;const k=document.createElement("link");if(k.rel=u?"stylesheet":oe,u||(k.as="script",k.crossOrigin=""),k.href=r,document.head.appendChild(k),u)return new Promise((C,T)=>{k.addEventListener("load",C),k.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${r}`)))})}))}return o.then(()=>e()).catch(l=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l})},bt="/workshop-bfocm/assets/Overview_All_Gates_Updated_01-Bdz7rhcS.png",le="/workshop-bfocm/assets/1868_linett_kineograph_patent_fig._III-Bp_Q6IgE.jpg",de="/workshop-bfocm/assets/media-1067086-mar04fig1still-COYKNvRW.gif",g=(s,e)=>{const i=s.__vccOpts||s;for(const[n,o]of e)i[n]=o;return i},ce={},ue={class:"problem-stack"},pe=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),_e=t("tr",{class:"ps-sw"},[t("td",{style:{"font-weight":"bold"}},"Algorithms")],-1),he=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),fe=t("tr",{class:"ps-sw"},[t("td",null,[f("Runtime System"),t("br"),f("(VM, OS, ...)")])],-1),me=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),ge=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),ve=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),we=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),ye=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),xe=[pe,_e,he,fe,me,ge,ve,we,ye];function ke(s,e){return p(),_("table",ue,xe)}const gt=g(ce,[["render",ke]]),be=t("h3",null,"Finally the Last Piece",-1),Ie=h('<section><h3 class="m-0"><a href="https://en.wikipedia.org/wiki/Flip_book">Flipbook</a></h3><div class="flex justify-center"><img class="scale-50 m-0" data-src="'+le+'"></div></section><section><h3>Video Encoding &amp; Decoding</h3><div class="flex justify-center"><a href="https://www.eetimes.com/how-video-compression-works/"><img data-src="'+de+'"></a></div></section><section><h3>Commonly Used Algorithms</h3><ul><li>AVC (Advanced Video Coding) / H.264</li><li>HEVC (High Efficiency Video Coding) / H.265</li><li>VP8</li><li>VP9</li><li>AV1</li></ul></section><section><h3>Software Encoding &amp; Decoding</h3><ul><li>Can be implemented in any language and run on any CPU</li><li>Can work easily with filters implemented by others</li><li>There&#39;re some good implementations of encoders, such as x264 and x265</li><li>Might consume a lot of computing resource, and is slower than...</li></ul></section><section><h3>Hardware Encoding &amp; Decoding</h3><ul><li>Specialized chips</li><li>Much faster than software</li><li>New algorithms might require hardware upgrading</li></ul></section>',5),Se=v({__name:"algorithms",setup(s){return(e,i)=>(p(),_("section",null,[t("section",null,[be,a(gt,{class:"text-3xl"})]),Ie,t("section",null,[a(gt,{class:"text-3xl"})])]))}}),Me={},De=h('<h3 data-v-ba820645>How to add two numbers?</h3><div class="flex justify-evenly text-right mono" data-v-ba820645><div data-v-ba820645><div class="header" data-v-ba820645>Base 10</div><div class="carry fragment italic" data-fragment-index="1" data-v-ba820645>1 </div><div data-v-ba820645>14</div><div data-v-ba820645>+  7</div><div class="answer" data-v-ba820645><span class="fragment" data-fragment-index="2" data-v-ba820645>2</span><span class="fragment" data-fragment-index="1" data-v-ba820645>1</span></div></div><div class="fragment" data-fragment-index="3" data-v-ba820645><div class="header" data-v-ba820645>Base 2</div><div class="carry italic" data-v-ba820645><span class="fragment" data-fragment-index="7" data-v-ba820645>1</span><span class="fragment" data-fragment-index="6" data-v-ba820645>1</span><span class="fragment" data-fragment-index="5" data-v-ba820645>1</span><span class="fragment" data-fragment-index="4" data-v-ba820645>0</span><span data-v-ba820645> </span></div><div data-v-ba820645>1110</div><div data-v-ba820645>+   111</div><div class="answer" data-v-ba820645><span class="fragment" data-fragment-index="8" data-v-ba820645>1</span><span class="fragment" data-fragment-index="7" data-v-ba820645>0</span><span class="fragment" data-fragment-index="6" data-v-ba820645>1</span><span class="fragment" data-fragment-index="5" data-v-ba820645>0</span><span class="fragment" data-fragment-index="4" data-v-ba820645>1</span></div></div></div><div class="fragment mono mt-8" data-fragment-index="9" data-v-ba820645> (<span class="fragment custom custom-highlight-red" data-fragment-index="10" data-v-ba820645>1</span>0<span class="fragment custom custom-highlight-purple" data-fragment-index="11" data-v-ba820645>1</span>0<span class="fragment custom custom-highlight-cyan" data-fragment-index="12" data-v-ba820645>1</span>)<sub data-v-ba820645>2</sub> = <span class="fragment border-b-2 border-red-500" data-fragment-index="10" data-v-ba820645>2<sup data-v-ba820645>4</sup></span> <span class="fragment fade-up" data-fragment-index="11" data-v-ba820645>+ <span class="border-b-2 border-purple-500" data-v-ba820645>2<sup data-v-ba820645>2</sup></span></span> <span class="fragment" data-fragment-index="12" data-v-ba820645>+ <span class="border-b-2 border-cyan-500" data-v-ba820645>2<sup data-v-ba820645>0</sup></span></span> <span class="fragment" data-fragment-index="13" data-v-ba820645>= 16 + 4 + 1</span></div>',3),Ce=[De];function Ne(s,e){return p(),_("section",null,Ce)}const Le=g(Me,[["render",Ne],["__scopeId","data-v-ba820645"]]),W=new Map,G=new Map;function q(s){if(W.has(s.id)||G.has(s.id))throw Error("Potential resource leak, ID is duplicated");W.set(s.id,s.constructor),G.set(s.id,s.destructor)}function Q(s){W.delete(s),G.delete(s)}var L=(s=>(s[s.EDIT=0]="EDIT",s[s.MOVE=1]="MOVE",s[s.DELETE=2]="DELETE",s))(L||{}),m=(s=>(s[s.NONE=0]="NONE",s[s.NOT=1]="NOT",s[s.AND=2]="AND",s[s.NAND=3]="NAND",s[s.OR=4]="OR",s[s.NOR=5]="NOR",s[s.XOR=6]="XOR",s[s.XNOR=7]="XNOR",s))(m||{}),O=(s=>(s[s.NONE=0]="NONE",s[s.SR_LATCH_ASYNC=1]="SR_LATCH_ASYNC",s[s.SR_LATCH_SYNC=2]="SR_LATCH_SYNC",s[s.FF_D_SINGLE=3]="FF_D_SINGLE",s[s.FF_D_MASTERSLAVE=4]="FF_D_MASTERSLAVE",s[s.FF_T=5]="FF_T",s[s.FF_JK=6]="FF_JK",s))(O||{}),N=(s=>(s[s.FREE=0]="FREE",s[s.TAKEN=1]="TAKEN",s))(N||{});class $e{constructor(){d(this,"currentID");d(this,"nodeList");this.currentID=0,this.nodeList=[]}}class F{constructor(e,i,n,o=!1,l=!1){d(this,"diameter");d(this,"value");d(this,"posX");d(this,"posY");d(this,"isOutput");d(this,"hitRange");d(this,"inputState");d(this,"isAlive");d(this,"brotherNode");d(this,"id");d(this,"nodeManager");d(this,"simulator");this.simulator=e,this.nodeManager=e.nodeManager,this.diameter=10,this.value=l,this.posX=i,this.posY=n,this.isOutput=o,this.hitRange=this.diameter+10,this.inputState=N.FREE,this.isAlive=!0,this.brotherNode=null,this.id=this.nodeManager.currentID++,this.nodeManager.nodeList[this.id]=this}destroy(){this.isAlive=!1,this.nodeManager.nodeList[this.id]=void 0}draw(){const e=this.simulator._instance;e.stroke(0),e.strokeWeight(4),e.circle(this.posX,this.posY,this.diameter),this.isMouseOver()&&(e.fill(128,128),e.noStroke(),e.circle(this.posX,this.posY,this.hitRange))}setID(e){this.nodeManager.nodeList[this.id]=void 0,this.id=e,this.nodeManager.nodeList[this.id]=this,this.id>this.nodeManager.currentID&&(this.nodeManager.currentID=this.id+1)}setInputState(e){this.inputState=e}setBrother(e){this.brotherNode=e}getBrother(){return this.brotherNode}getValue(){return this.value}setValue(e){this.value=e}updatePosition(e,i){this.posX=e,this.posY=i}isMouseOver(){const e=this.simulator._instance;return e.dist(e.mouseX,e.mouseY,this.posX,this.posY)<this.hitRange/2}mouseClicked(){return!!(this.isMouseOver()&&(this.inputState==N.FREE||this.isOutput))}}const Z={State:L.EDIT},Oe=`<svg width="1792.0000000000002" height="1792.0000000000002" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,Ae=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M79.15691 25H95M29.043478 25h-24"/>
  <path d="M28.96875 2.59375v44.8125l2.15625-1.0625 41.03125-20v-2.6875l-41.03125-20-2.15625-1.0625zm3 4.8125L68.09375 25l-36.125 17.59375V7.40625z" style="marker:none"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"  style="marker:none"/>
</svg>
`,Te=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" >
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M31 15H5M32 35H5"/>
  <path d="M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z" />
</svg>
`,Xe=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M79 25h16M31 15H5M32 35H5"/>
  <path d="M30 5V45H50.47619c11.267908 0 20-9.000045 20-20s-8.732091-20-20-20H30zm2.857143 2.857143H50.47619c9.760663 0 16.666667 7.639955 16.666667 17.142857 0 9.502902-7.382195 17.142857-17.142857 17.142857H32.857143V7.857143z"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z" />
</svg>
`,Ye=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M31 15H5M32 35H5"/>
  <path fill-rule="evenodd" d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
</svg>
`,Ee=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" >
  <path fill="none" stroke="#000" stroke-width="2" d="M79 25h16M31 15H5M32 35H5"/>
  <path fill-rule="evenodd" d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z" style="marker:none"/>
</svg>
`,je=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M70 25h25M30.38572 15H5M31.3621 35H5"/>
  <g fill-rule="evenodd">
    <path d="M24.25 42C22.65263 44.6444 22 45 22 45h-3.65625l2-2.4375S26 35.56245 26 25 20.34375 7.4375 20.34375 7.4375l-2-2.4375H22c.78125.9375 1.42188 1.65625 2.21875 3C26.09147 11.09981 29 17.02665 29 25c0 7.95065-2.8967 13.87942-4.75 17z"/>
    <path d="M24.09375 5l2 2.4375S31.75 14.43755 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.40808 0 7.6897.02451 13.625-2.40625s12.53654-7.34327 17.6875-16.875L71.25 25l1.3125-.71875C62.25939 5.21559 46.00657 5 41.25 5H24.09375zm5.875 3H41.25c4.68417 0 18.28685-.1302 27.96875 17C64.45196 33.42907 58.69747 37.68391 53.5 39.8125 48.13934 42.00792 43.65808 42 41.25 42H30c1.87359-3.10843 4.75-9.04935 4.75-17 0-7.97335-2.90853-13.90019-4.78125-17z"/>
  </g>
</svg>
`,Re=`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50">
  <path fill="none" stroke="#000" stroke-width="2" d="M78.333332 25H95M30.385717 15H5M31.362091 35H5"/>
  <g fill-rule="evenodd">
    <path d="M24.25 42.000005c-1.597374 2.6444-2.25 3-2.25 3h-3.65625l2-2.4375S26 35.562451 26 25c0-10.562451-5.65625-17.5625-5.65625-17.5625l-2-2.4375H22c.78125.9375 1.421875 1.65625 2.21875 3C26.091469 11.099815 29 17.026646 29 25c0 7.95065-2.896697 13.879425-4.75 17.000005z"/>
    <path d="M24.09375 5l2 2.4375S31.75 14.437549 31.75 25s-5.65625 17.5625-5.65625 17.5625l-2 2.4375H41.25c2.408076.000001 7.689699.024514 13.625-2.40625s12.536536-7.343266 17.6875-16.875L71.25 25l1.3125-.71875C62.259387 5.21559 46.006574 5 41.25 5H24.09375zm5.875 3H41.25c4.684173 0 18.28685-.130207 27.96875 17C64.451964 33.429075 58.697469 37.68391 53.5 39.8125 48.139339 42.007924 43.658075 42.000001 41.25 42H30c1.873588-3.108434 4.75-9.04935 4.75-17 0-7.973354-2.908531-13.900185-4.78125-17z"/>
  </g>
  <path fill="none" stroke="#000" stroke-width="3" d="M79 25a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"/>
</svg>
`,vt=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100" height="100" id="svg2" sodipodi:version="0.32" inkscape:version="0.46" version="1.0" sodipodi:docbase="C:\\Program Files\\Inkscape" sodipodi:docname="SR Flip-flop Symbol.svg" inkscape:output_extension="org.inkscape.output.svg.inkscape">
  <defs id="defs4">
    <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 50 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="100 : 50 : 1" inkscape:persp3d-origin="50 : 33.333333 : 1" id="perspective3848"/>
  </defs>
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="4" inkscape:cx="30.701454" inkscape:cy="42.37202" inkscape:document-units="px" inkscape:current-layer="g4867" showgrid="true" inkscape:grid-bbox="true" inkscape:grid-points="true" showguides="true" inkscape:guide-bbox="true" gridtolerance="5px" inkscape:window-width="1024" inkscape:window-height="712" inkscape:window-x="129" inkscape:window-y="116" inkscape:snap-bbox="true" objecttolerance="11">
    <inkscape:grid id="GridFromPre046Settings" type="xygrid" originx="0px" originy="0px" spacingx="5px" spacingy="5px" color="#0000ff" empcolor="#0000ff" opacity="0.2" empopacity="0.4" empspacing="5" visible="true" enabled="true"/>
  </sodipodi:namedview>
  <metadata id="metadata7">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
    <g id="g4867" style="fill:none">
      <rect y="11.500001" x="21.499998" height="77" width="56.999996" id="rect1311" style="opacity:1;fill:none;fill-opacity:0.03703703;stroke:#000000;stroke-width:2.99999952;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
      <path id="path3085" d="M 21,30 L 5,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3087" d="M 21,70 L 5,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3089" d="M 79,70 L 95,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3091" d="M 79,30 L 95,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
    </g>
    <path sodipodi:nodetypes="cc" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 63.806565,62 L 73.306565,62" id="path3081"/>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="35.890625" y="34.773438" id="text3850" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3852" x="35.890625" y="34.773438">S</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="36.372707" y="75" id="text3854" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3856" x="36.372707" y="75">R</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.907623" y="35" id="text3858" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3860" x="73.907623" y="35">Q</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.825577" y="75" id="text3863" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3865" x="73.825577" y="75">Q</tspan></text>
  </g>
</svg>`,Fe=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100" height="100" id="svg2" sodipodi:version="0.32" inkscape:version="0.46" version="1.0" sodipodi:docbase="C:\\Program Files\\Inkscape" sodipodi:docname="SR Flip-flop (Synchronous) Symbol.svg" inkscape:output_extension="org.inkscape.output.svg.inkscape">
  <defs id="defs4">
    <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 50 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="100 : 50 : 1" inkscape:persp3d-origin="50 : 33.333333 : 1" id="perspective3848"/>
  </defs>
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="2.8284271" inkscape:cx="71.029119" inkscape:cy="2.5600161" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" inkscape:grid-bbox="true" inkscape:grid-points="true" showguides="true" inkscape:guide-bbox="true" gridtolerance="5px" inkscape:window-width="1024" inkscape:window-height="712" inkscape:window-x="129" inkscape:window-y="116" inkscape:snap-bbox="true" objecttolerance="11">
    <inkscape:grid id="GridFromPre046Settings" type="xygrid" originx="0px" originy="0px" spacingx="5px" spacingy="5px" color="#0000ff" empcolor="#0000ff" opacity="0.2" empopacity="0.4" empspacing="5" visible="true" enabled="true"/>
  </sodipodi:namedview>
  <metadata id="metadata7">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
    <g id="g4867" style="fill:none">
      <rect y="11.500001" x="21.499998" height="77" width="56.999996" id="rect1311" style="opacity:1;fill:none;fill-opacity:0.03703703;stroke:#000000;stroke-width:2.99999952;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
      <path id="path3085" d="M 21,30 L 5,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3087" d="M 21,70 L 5,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3089" d="M 79,70 L 95,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3091" d="M 79,30 L 95,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path4399" d="M 21,50 L 5,50" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
    </g>
    <path sodipodi:nodetypes="cc" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 63.806565,62 L 73.306565,62" id="path3081"/>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="35.890625" y="34.773438" id="text3850" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3852" x="35.890625" y="34.773438">S</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="36.372707" y="75" id="text3854" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3856" x="36.372707" y="75">R</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.907623" y="35" id="text3858" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3860" x="73.907623" y="35">Q</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.825577" y="75" id="text3863" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3865" x="73.825577" y="75">Q</tspan></text>
    <path style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 21,45 L 32.5,50 L 21,55" id="path3888" sodipodi:nodetypes="ccc"/>
  </g>
</svg>`,Pe=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100" height="100" id="svg2" sodipodi:version="0.32" inkscape:version="0.46" version="1.0" sodipodi:docbase="C:\\Program Files\\Inkscape" sodipodi:docname="Transparent Latch Symbol.svg" inkscape:output_extension="org.inkscape.output.svg.inkscape">
  <defs id="defs4">
    <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 50 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="100 : 50 : 1" inkscape:persp3d-origin="50 : 33.333333 : 1" id="perspective3848"/>
  </defs>
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="2" inkscape:cx="69.170212" inkscape:cy="11.088566" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" inkscape:grid-bbox="true" inkscape:grid-points="true" showguides="true" inkscape:guide-bbox="true" gridtolerance="5px" inkscape:window-width="1024" inkscape:window-height="712" inkscape:window-x="94" inkscape:window-y="107" inkscape:snap-bbox="true" objecttolerance="11">
    <inkscape:grid id="GridFromPre046Settings" type="xygrid" originx="0px" originy="0px" spacingx="5px" spacingy="5px" color="#0000ff" empcolor="#0000ff" opacity="0.2" empopacity="0.4" empspacing="5" visible="true" enabled="true"/>
  </sodipodi:namedview>
  <metadata id="metadata7">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
    <g id="g4867" style="fill:none">
      <rect y="11.500001" x="21.499998" height="77" width="56.999996" id="rect1311" style="opacity:1;fill:none;fill-opacity:0.03703703;stroke:#000000;stroke-width:2.99999952;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
      <path id="path3085" d="M 21,30 L 5,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3087" d="M 21,70 L 5,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3089" d="M 79,70 L 95,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3091" d="M 79,30 L 95,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
    </g>
    <path sodipodi:nodetypes="cc" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 63.806565,62 L 73.306565,62" id="path3081"/>
    <text xml:space="preserve" style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:100%;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="26.702469" y="34.773438" id="text3850" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3852" x="26.702469" y="34.773438">D</tspan></text>
    <text xml:space="preserve" style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.907623" y="35" id="text3858" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3860" x="73.907623" y="35">Q</tspan></text>
    <text xml:space="preserve" style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.825577" y="75" id="text3863" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3865" x="73.825577" y="75">Q</tspan></text>
    <text sodipodi:linespacing="100%" id="text4661" y="75" x="26.702469" style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:start;line-height:100%;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" xml:space="preserve"><tspan y="75" x="26.702469" id="tspan4663" sodipodi:role="line">E</tspan></text>
  </g>
</svg>`,Ve=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100" height="100" id="svg2" sodipodi:version="0.32" inkscape:version="0.46" version="1.0" sodipodi:docbase="C:\\Program Files\\Inkscape" sodipodi:docname="D Flip-flop Symbol.svg" inkscape:output_extension="org.inkscape.output.svg.inkscape">
  <defs id="defs4">
    <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 50 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="100 : 50 : 1" inkscape:persp3d-origin="50 : 33.333333 : 1" id="perspective3848"/>
  </defs>
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="2" inkscape:cx="26.836729" inkscape:cy="36.81932" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" inkscape:grid-bbox="true" inkscape:grid-points="true" showguides="true" inkscape:guide-bbox="true" gridtolerance="5px" inkscape:window-width="1024" inkscape:window-height="712" inkscape:window-x="129" inkscape:window-y="116" inkscape:snap-bbox="true" objecttolerance="11">
    <inkscape:grid id="GridFromPre046Settings" type="xygrid" originx="0px" originy="0px" spacingx="5px" spacingy="5px" color="#0000ff" empcolor="#0000ff" opacity="0.2" empopacity="0.4" empspacing="5" visible="true" enabled="true"/>
  </sodipodi:namedview>
  <metadata id="metadata7">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
    <g id="g4867" style="fill:none">
      <rect y="11.500001" x="21.499998" height="77" width="56.999996" id="rect1311" style="opacity:1;fill:none;fill-opacity:0.03703703;stroke:#000000;stroke-width:2.99999952;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
      <path id="path3085" d="M 21,30 L 5,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3087" d="M 21,70 L 5,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3089" d="M 79,70 L 95,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3091" d="M 79,30 L 95,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
    </g>
    <path sodipodi:nodetypes="cc" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 63.806565,62 L 73.306565,62" id="path3081"/>
    <text xml:space="preserve" style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="35.890625" y="34.773438" id="text3850" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3852" x="35.890625" y="34.773438">D</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.907623" y="35" id="text3858" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3860" x="73.907623" y="35">Q</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.825577" y="75" id="text3863" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3865" x="73.825577" y="75">Q</tspan></text>
    <path style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 21.0625,65 L 32.5625,70 L 21.0625,75" id="path3888" sodipodi:nodetypes="ccc"/>
  </g>
</svg>`,ze=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="100" height="100" id="svg2" sodipodi:version="0.32" inkscape:version="0.46" version="1.0" sodipodi:docbase="C:\\Program Files\\Inkscape" sodipodi:docname="T Flip-flop Symbol.svg" inkscape:output_extension="org.inkscape.output.svg.inkscape">
  <defs id="defs4">
    <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 50 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="100 : 50 : 1" inkscape:persp3d-origin="50 : 33.333333 : 1" id="perspective3848"/>
  </defs>
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="2" inkscape:cx="26.836729" inkscape:cy="36.81932" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" inkscape:grid-bbox="true" inkscape:grid-points="true" showguides="true" inkscape:guide-bbox="true" gridtolerance="5px" inkscape:window-width="1024" inkscape:window-height="712" inkscape:window-x="129" inkscape:window-y="116" inkscape:snap-bbox="true" objecttolerance="11">
    <inkscape:grid id="GridFromPre046Settings" type="xygrid" originx="0px" originy="0px" spacingx="5px" spacingy="5px" color="#0000ff" empcolor="#0000ff" opacity="0.2" empopacity="0.4" empspacing="5" visible="true" enabled="true"/>
  </sodipodi:namedview>
  <metadata id="metadata7">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
    <g id="g4867" style="fill:none">
      <rect y="11.500001" x="21.499998" height="77" width="56.999996" id="rect1311" style="opacity:1;fill:none;fill-opacity:0.03703703;stroke:#000000;stroke-width:2.99999952;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
      <path id="path3085" d="M 21,30 L 5,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3087" d="M 21,70 L 5,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3089" d="M 79,70 L 95,70" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
      <path id="path3091" d="M 79,30 L 95,30" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" sodipodi:nodetypes="cc"/>
    </g>
    <path sodipodi:nodetypes="cc" style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 63.806565,62 L 73.306565,62" id="path3081"/>
    <text xml:space="preserve" style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="35.890625" y="34.773438" id="text3850" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3852" x="35.890625" y="34.773438">T</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.907623" y="35" id="text3858" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3860" x="73.907623" y="35">Q</tspan></text>
    <text xml:space="preserve" style="font-size:14;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans" x="73.825577" y="75" id="text3863" sodipodi:linespacing="100%"><tspan sodipodi:role="line" id="tspan3865" x="73.825577" y="75">Q</tspan></text>
    <path style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 21.0625,65 L 32.5625,70 L 21.0625,75" id="path3888" sodipodi:nodetypes="ccc"/>
  </g>
</svg>`,He=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="100"
   height="100"
   id="svg2"
   sodipodi:version="0.32"
   inkscape:version="0.46"
   version="1.0"
   sodipodi:docbase="C:\\Program Files\\Inkscape"
   sodipodi:docname="JK Flip-flop Symbol.svg"
   inkscape:output_extension="org.inkscape.output.svg.inkscape">
  <defs
     id="defs4">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : 50 : 1"
       inkscape:vp_y="0 : 1000 : 0"
       inkscape:vp_z="100 : 50 : 1"
       inkscape:persp3d-origin="50 : 33.333333 : 1"
       id="perspective3848" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="4"
     inkscape:cx="35.223932"
     inkscape:cy="50.283722"
     inkscape:document-units="px"
     inkscape:current-layer="layer1"
     showgrid="true"
     inkscape:grid-bbox="true"
     inkscape:grid-points="true"
     showguides="true"
     inkscape:guide-bbox="true"
     gridtolerance="5px"
     inkscape:window-width="1024"
     inkscape:window-height="712"
     inkscape:window-x="94"
     inkscape:window-y="107"
     inkscape:snap-bbox="true"
     objecttolerance="11">
    <inkscape:grid
       id="GridFromPre046Settings"
       type="xygrid"
       originx="0px"
       originy="0px"
       spacingx="5px"
       spacingy="5px"
       color="#0000ff"
       empcolor="#0000ff"
       opacity="0.2"
       empopacity="0.4"
       empspacing="5"
       visible="true"
       enabled="true" />
  </sodipodi:namedview>
  <metadata
     id="metadata7">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <g
       id="g4867"
       style="fill:none">
      <rect
         y="11.500001"
         x="21.499998"
         height="77"
         width="56.999996"
         id="rect1311"
         style="opacity:1;fill:none;fill-opacity:0.03703703;stroke:#000000;stroke-width:2.99999952;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
      <path
         id="path3085"
         d="M 21,30 L 5,30"
         style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         sodipodi:nodetypes="cc" />
      <path
         id="path3087"
         d="M 21,70 L 5,70"
         style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         sodipodi:nodetypes="cc" />
      <path
         id="path3089"
         d="M 79,70 L 95,70"
         style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         sodipodi:nodetypes="cc" />
      <path
         id="path3091"
         d="M 79,30 L 95,30"
         style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         sodipodi:nodetypes="cc" />
      <path
         id="path4659"
         d="M 21,50 L 5,50"
         style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         sodipodi:nodetypes="cc" />
    </g>
    <path
       sodipodi:nodetypes="cc"
       style="fill:none;fill-opacity:0.75;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 63.806565,62 L 73.306565,62"
       id="path3081" />
    <text
       xml:space="preserve"
       style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
       x="33.890625"
       y="34.773438"
       id="text3850"
       sodipodi:linespacing="100%"><tspan
         sodipodi:role="line"
         id="tspan3852"
         x="33.890625"
         y="34.773438">J</tspan></text>
    <text
       xml:space="preserve"
       style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
       x="73.907623"
       y="35"
       id="text3858"
       sodipodi:linespacing="100%"><tspan
         sodipodi:role="line"
         id="tspan3860"
         x="73.907623"
         y="35">Q</tspan></text>
    <text
       xml:space="preserve"
       style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
       x="73.825577"
       y="75"
       id="text3863"
       sodipodi:linespacing="100%"><tspan
         sodipodi:role="line"
         id="tspan3865"
         x="73.825577"
         y="75">Q</tspan></text>
    <path
       style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 21.0625,45 L 32.5625,50 L 21.0625,55"
       id="path3888"
       sodipodi:nodetypes="ccc" />
    <text
       sodipodi:linespacing="100%"
       id="text4661"
       y="75"
       x="35.702469"
       style="font-size:14px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:end;line-height:100%;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:DejaVu Sans;-inkscape-font-specification:DejaVu Sans"
       xml:space="preserve"><tspan
         y="75"
         x="35.702469"
         id="tspan4663"
         sodipodi:role="line">K</tspan></text>
  </g>
</svg>
`;function It(s,e){e?s.fill(P[0],P[1],P[2]):s.fill(52,58,64)}const b=[0,123,255],P=[54,247,32];function Ue(s){switch(s){case"NOT":return m.NOT;case"AND":return m.AND;case"NAND":return m.NAND;case"OR":return m.OR;case"NOR":return m.NOR;case"XOR":return m.XOR;case"XNOR":return m.XNOR;default:return m.NONE}}const St=new Map,Be=new Map;function We(s){const e=[{type:m.NONE,image:Oe},{type:m.NOT,image:Ae},{type:m.AND,image:Te},{type:m.NAND,image:Xe},{type:m.OR,image:Ye},{type:m.NOR,image:Ee},{type:m.XOR,image:je},{type:m.XNOR,image:Re}];for(const{type:n,image:o}of e){const l=new Blob([o],{type:"image/svg+xml"}),r=URL.createObjectURL(l);St.set(n,s.loadImage(r,()=>URL.revokeObjectURL(r)))}const i=[{type:O.NONE,image:vt},{type:O.SR_LATCH_ASYNC,image:vt},{type:O.SR_LATCH_SYNC,image:Fe},{type:O.FF_D_SINGLE,image:Pe},{type:O.FF_D_MASTERSLAVE,image:Ve},{type:O.FF_T,image:ze},{type:O.FF_JK,image:He}];for(const{type:n,image:o}of i){const l=new Blob([o],{type:"image/svg+xml"}),r=URL.createObjectURL(l);Be.set(n,s.loadImage(r,()=>URL.revokeObjectURL(r)))}}class Ge{constructor(e,i){d(this,"startNode");d(this,"endNode");d(this,"startID");d(this,"endID");d(this,"endX");d(this,"endY");d(this,"width");d(this,"_p");this.startNode=i,this.endNode=null,this.startID=i.id,this.endID=null,this._p=e,this.endX=this._p.mouseX,this.endY=this._p.mouseY,this.width=8}destroy(){this.startNode.setInputState(N.FREE),this.endNode!=null&&(this.endNode.setValue(!1),this.endNode.setInputState(N.FREE))}draw(){if(this._p.stroke(0),this._p.strokeWeight(this.width/2),this.endNode==null){if(!this.startNode.isAlive)return!1;this._p.line(this.startNode.posX,this.startNode.posY,this._p.mouseX,this._p.mouseY)}else if(this.startNode.isAlive&&this.endNode.isAlive)this.generateNodeValue(),this._p.noFill(),this.isMouseOver()?this._p.stroke(b[0],b[1],b[2]):this._p.stroke(0),this._p.line(this.startNode.posX,this.startNode.posY,this.endNode.posX,this.endNode.posY),this.startNode.getValue()&&this.endNode.getValue()&&(this._p.strokeWeight(1),this._p.stroke(P[0],P[1],P[2]),this._p.line(this.startNode.posX,this.startNode.posY,this.endNode.posX,this.endNode.posY));else return this.endNode.setValue(!1),!1;return!0}generateNodeValue(){var e;this.startNode.isOutput&&this.endNode.isOutput||!this.startNode.isOutput&&!this.endNode.isOutput?(this.startNode.setValue(this.startNode.getValue()||this.endNode.getValue()),this.endNode.setValue(this.startNode.getValue())):(e=this.endNode)==null||e.setValue(this.startNode.getValue())}isMouseOver(){var o;if(!this.startNode.isAlive||!((o=this.endNode)!=null&&o.isAlive))return!1;const e=[this.startNode,this.endNode].map(l=>this._p.dist(l.posX,l.posY,this._p.mouseX,this._p.mouseY)),i=this._p.dist(this.startNode.posX,this.startNode.posY,this.endNode.posX,this.endNode.posY),n=e[0]+e[1];return Math.abs(i-n)<=this.width/(10*2)}getStartNode(){return this.startNode}updateEnd(e,i){this.endX=e,this.endY=i}setEndNode(e){if(e.isOutput){let i=this.startNode;this.startNode=e,this.endNode=i,this.endNode.setInputState(N.TAKEN)}else this.endNode=e,this.startNode.setInputState(N.TAKEN),this.endNode.setInputState(N.TAKEN);this.startID=this.startNode.id,this.endID=this.endNode.id}}class Ze{constructor(e,i,n){d(this,"firstNode");d(this,"secondNode");d(this,"inputNode");d(this,"_p");this.firstNode=i,this.secondNode=n,this.inputNode=new F(e,this.firstNode.posX-10,(this.firstNode.posY+this.secondNode.posY)/2),this.firstNode.setInputState(N.TAKEN),this.secondNode.setInputState(N.TAKEN),this._p=e._instance}destroy(){var e;(e=this.inputNode)==null||e.destroy(),this.inputNode=void 0}draw(){return this._p.stroke(0),this._p.strokeWeight(2),this.firstNode.isAlive&&this.secondNode.isAlive?(this.drawShortCircuit(),this.inputNode.draw(),this.firstNode.setValue(this.inputNode.getValue()),this.secondNode.setValue(this.inputNode.getValue()),!0):(this.firstNode.setValue(!1),this.secondNode.setValue(!1),!1)}drawShortCircuit(){var i;let e=[this.firstNode.posX-15,(this.firstNode.posY+this.secondNode.posY)/2];(i=this.inputNode)==null||i.updatePosition(e[0],e[1]),this._p.line(this.firstNode.posX,this.firstNode.posY,e[0],this.firstNode.posY),this._p.line(this.secondNode.posX,this.secondNode.posY,e[0],this.secondNode.posY),this._p.line(e[0],this.firstNode.posY,e[0],this.secondNode.posY)}mouseClicked(){var e;(e=this.inputNode)==null||e.mouseClicked()}}class Je{constructor(e){d(this,"wire");d(this,"shortCircuit");d(this,"isOpened");d(this,"simulator");this.wire=[],this.shortCircuit=[],this.isOpened=!1,this.simulator=e}draw(){for(let e of[this.wire,this.shortCircuit])for(let i=0;i<e.length;i++)e[i].draw()||(this.isOpened=!1,e[i].destroy(),e.splice(i,1))}addNode(e){if(!this.isOpened)this.wire.push(new Ge(this.simulator._instance,e)),this.isOpened=!0;else{let i=this.wire.length-1;e!=this.wire[i].getStartNode()&&(this.wire[i].getStartNode().isOutput!=e.isOutput||e.getBrother()==this.wire[i].getStartNode())?e==this.wire[i].getStartNode().getBrother()?(this.shortCircuit.push(new Ze(this.simulator,this.wire[i].getStartNode(),e)),this.wire.length--):this.wire[i].setEndNode(e):this.wire.length--,this.isOpened=!1}}mouseClicked(){if(Z.State==L.DELETE)for(let e=0;e<this.wire.length;e++)this.wire[e].isMouseOver()&&(this.wire[e].destroy(),this.wire.splice(e,1));for(let e=0;e<this.shortCircuit.length;e++)this.shortCircuit[e].mouseClicked()}}class qe{constructor(e){d(this,"value");d(this,"posX");d(this,"posY");d(this,"diameter");d(this,"isSpawned");d(this,"isMoving");d(this,"offsetMouseX");d(this,"offsetMouseY");d(this,"output");d(this,"nodeStartID");d(this,"simulator");this.simulator=e,this.value=!1,this.posX=this.simulator._instance.mouseX,this.posY=this.simulator._instance.mouseY,this.diameter=25,this.isSpawned=!1,this.isMoving=!1,this.offsetMouseX=0,this.offsetMouseY=0,this.output=new F(this.simulator,this.posX+30,this.posY,!0,this.value),this.nodeStartID=this.output.id}static from(e){return Object.assign(this,e)}destroy(){var e;(e=this.output)==null||e.destroy(),this.output=void 0}draw(){var o,l,r;const e=this.simulator._instance;this.isSpawned||(this.posX=e.mouseX,this.posY=e.mouseY),It(e,this.value),this.isMoving&&(this.posX=e.mouseX+this.offsetMouseX,this.posY=e.mouseY+this.offsetMouseY),this.isMouseOver()?e.stroke(b[0],b[1],b[2]):e.stroke(0),e.strokeWeight(4),e.line(this.posX,this.posY,this.posX+30,this.posY),e.circle(this.posX,this.posY,this.diameter),(o=this.output)==null||o.updatePosition(this.posX+30,this.posY),(l=this.output)==null||l.setValue(this.value),(r=this.output)==null||r.draw(),this.printInfo(),e.textSize(18);const i=this.posX-this.diameter/4,n=this.posY+this.diameter/4;this.value?(e.textStyle(e.BOLD),e.text("1",i,n)):(e.textStyle(e.NORMAL),e.fill(255),e.text("0",i,n))}refreshNodes(){var e;(e=this.output)==null||e.setID(this.nodeStartID)}printInfo(){const e=this.simulator._instance;e.noStroke(),e.fill(0),e.textSize(12),e.textStyle(e.NORMAL),e.text("INPUT",this.posX-20,this.posY+25)}isMouseOver(){const e=this.simulator._instance;return e.dist(e.mouseX,e.mouseY,this.posX,this.posY)<this.diameter/2}mousePressed(){const e=this.simulator._instance;if(!this.isSpawned){this.posX=e.mouseX,this.posY=e.mouseY,this.isSpawned=!0,Z.State=L.EDIT;return}(this.isMouseOver()||Z.State==L.MOVE)&&(this.isMoving=!0,this.offsetMouseX=this.posX-e.mouseX,this.offsetMouseY=this.posY-e.mouseY)}mouseReleased(){this.isMoving=!1}doubleClicked(){this.isMouseOver()&&this.toggle()}mouseClicked(){var e,i;return this.isMouseOver()||(e=this.output)!=null&&e.isMouseOver()?(this.toggle(),(i=this.output)==null||i.mouseClicked(),!0):!1}toggle(){this.value=!this.value}}class Qe{constructor(e){d(this,"value");d(this,"posX");d(this,"posY");d(this,"diameter");d(this,"isSpawned");d(this,"isMoving");d(this,"offsetMouseX");d(this,"offsetMouseY");d(this,"input");d(this,"nodeStartID");d(this,"simulator");this.simulator=e,this.value=!1,this.posX=this.simulator._instance.mouseX,this.posY=this.simulator._instance.mouseY,this.diameter=25,this.isSpawned=!1,this.isMoving=!1,this.offsetMouseX=0,this.offsetMouseY=0,this.input=new F(this.simulator,this.posX-30,this.posY,!1,this.value),this.nodeStartID=this.input.id}destroy(){var e;(e=this.input)==null||e.destroy(),this.input=void 0}draw(){var o,l,r;const e=this.simulator._instance;this.isSpawned||(this.posX=e.mouseX,this.posY=e.mouseY),this.isMoving&&(this.posX=e.mouseX+this.offsetMouseX,this.posY=e.mouseY+this.offsetMouseY),(o=this.input)==null||o.updatePosition(this.posX-30,this.posY),this.value=((l=this.input)==null?void 0:l.getValue())||!1,It(e,this.value),this.isMouseOver()?e.stroke(b[0],b[1],b[2]):e.stroke(0),e.strokeWeight(4),e.line(this.posX,this.posY,this.posX-30,this.posY),e.circle(this.posX,this.posY,this.diameter),(r=this.input)==null||r.draw(),e.noStroke(),e.fill(0),e.textSize(12),e.textStyle(e.NORMAL),e.text("OUTPUT",this.posX-20,this.posY+25),e.textSize(18);const i=this.posX-this.diameter/4,n=this.posY+this.diameter/4;this.value?(e.textStyle(e.BOLD),e.text("1",i,n)):(e.textStyle(e.NORMAL),e.fill(255),e.text("0",i,n))}refreshNodes(){var e;(e=this.input)==null||e.setID(this.nodeStartID)}isMouseOver(){const e=this.simulator._instance;return e.dist(e.mouseX,e.mouseY,this.posX,this.posY)<this.diameter/2}mousePressed(){const e=this.simulator._instance;if(!this.isSpawned){this.posX=e.mouseX,this.posY=e.mouseY,this.isSpawned=!0;return}(this.isMouseOver()||Z.State==L.MOVE)&&(this.isMoving=!0,this.offsetMouseX=this.posX-e.mouseX,this.offsetMouseY=this.posY-e.mouseY)}mouseReleased(){this.isMoving=!1}mouseClicked(){var e,i;return this.isMouseOver()||(e=this.input)!=null&&e.isMouseOver()?((i=this.input)==null||i.mouseClicked(),!0):!1}}class Ke{constructor(e,i){d(this,"_p");d(this,"strType");d(this,"type");d(this,"width");d(this,"height");d(this,"posX");d(this,"posY");d(this,"isSpawned");d(this,"offsetMouseX");d(this,"offsetMouseY");d(this,"isMoving");d(this,"input");d(this,"output");d(this,"nodeStartID");d(this,"_image");this._p=e._instance,this.strType=i,this.type=Ue(i),this._image=St.get(this.type),this.width=this._image.width,this.height=this._image.height,this.posX=this._p.mouseX-this.width/2,this.posY=this._p.mouseY-this.height/2,this.isSpawned=!1,this.offsetMouseX=0,this.offsetMouseY=0,this.isMoving=!1,this.input=[],this.input.push(new F(e,this.posX,this.posY+15)),this.type!=m.NOT&&(this.input.push(new F(e,this.posX,this.posY+this.height-15)),this.input[0].setBrother(this.input[1]),this.input[1].setBrother(this.input[0])),this.output=new F(e,this.posX+this.width,this.posY+this.height/2,!0),this.nodeStartID=this.input[0].id}destroy(){var e,i;for(let n=0;n<this.input.length;n++)(e=this.input[n])==null||e.destroy(),this.input[n]=void 0;(i=this.output)==null||i.destroy(),this.output=void 0}draw(){var e,i,n;this.isSpawned||(this.posX=this._p.mouseX-this.width/2,this.posY=this._p.mouseY-this.height/2),this.isMoving&&(this.posX=this._p.mouseX+this.offsetMouseX,this.posY=this._p.mouseY+this.offsetMouseY),this.type==m.NOT?this.input[0].updatePosition(this.posX,this.posY+this.height/2):(this.input[0].updatePosition(this.posX,this.posY+15),this.input[1].updatePosition(this.posX,this.posY+this.height-15)),(e=this.output)==null||e.updatePosition(this.posX+this.width,this.posY+this.height/2),this.isMouseOver()&&(this._p.noFill(),this._p.strokeWeight(2),this._p.stroke(b[0],b[1],b[2]),this._p.rect(this.posX,this.posY,this.width,this.height)),this._p.image(this._image,this.posX,this.posY);for(let o=0;o<this.input.length;o++)(i=this.input[o])==null||i.draw();this.generateOutput(),(n=this.output)==null||n.draw()}refreshNodes(){var i,n,o;let e=this.nodeStartID;(i=this.input[0])==null||i.setID(e),e++,this.type!=m.NOT&&((n=this.input[1])==null||n.setID(e),e++),(o=this.output)==null||o.setID(e)}generateOutput(){var e;(e=this.output)==null||e.setValue(this.calculateValue())}calculateValue(){switch(this.type){case m.NOT:return!this.input[0].getValue();case m.AND:return this.input[0].getValue()&&this.input[1].getValue();case m.NAND:return!(this.input[0].getValue()&&this.input[1].getValue());case m.OR:return this.input[0].getValue()||this.input[1].getValue();case m.NOR:return!(this.input[0].getValue()||this.input[1].getValue());case m.XOR:return this.input[0].getValue()!=this.input[1].getValue();case m.XNOR:return this.input[0].getValue()==this.input[1].getValue();default:return!1}}isMouseOver(){return this._p.mouseX>this.posX&&this._p.mouseX<this.posX+this.width&&this._p.mouseY>this.posY&&this._p.mouseY<this.posY+this.height}mousePressed(){if(!this.isSpawned){this.posX=this._p.mouseX-this.width/2,this.posY=this._p.mouseY-this.height/2,this.isSpawned=!0;return}(this.isMouseOver()||Z.State==L.MOVE)&&(this.isMoving=!0,this.offsetMouseX=this.posX-this._p.mouseX,this.offsetMouseY=this.posY-this._p.mouseY)}mouseReleased(){this.isMoving=!1}mouseClicked(){let e=this.isMouseOver();for(let i=0;i<this.input.length;i++)e||(e=this.input[i].mouseClicked());return e||(e=this.output.mouseClicked()),e}}function wt(s){return typeof s=="string"||s instanceof String}function it(s,e){if(s!=null&&e.key in s&&Array.isArray(s[e.key])){e.target.length=0;const i=s[e.key];for(let n=0;n<i.length;n++){let o=i[n];if(o==null)break;const l=e.func(o);e.target.push(l),l.refreshNodes()}}}class ts{constructor(e){d(this,"simulator");this.simulator=e}loadFile_ex(e){try{const i=wt(e)?JSON.parse(e):e;if(it(i,{key:"logicInput",target:this.simulator.logicInput,func:n=>Object.assign(new qe(this.simulator),n)}),it(i,{key:"logicOutput",target:this.simulator.logicOutput,func:n=>Object.assign(new Qe(this.simulator),n)}),it(i,{key:"gate",target:this.simulator.gate,func:n=>{const o=new Ke(this.simulator,n==null?void 0:n.strType);return Object.assign(o,n)}}),"wire"in i&&Array.isArray(i.wire)){const n=i.wire;for(let o of n){if(o==null)break;this.simulator.wireMng.addNode(this.simulator.nodeManager.nodeList[o.startID]),this.simulator.wireMng.addNode(this.simulator.nodeManager.nodeList[o.endID])}}}catch(i){console.error(i)}}loadFile(e){const i=e.target;if(i.files&&i.files.length>0){const n=new FileReader;n.onload=()=>{const o=n.result;wt(o)&&this.loadFile_ex(o)},n.readAsText(i.files[0])}}}class et{constructor(e,i){d(this,"logicInput");d(this,"logicOutput");d(this,"gate");d(this,"root");d(this,"currMouseAction");d(this,"_instance");d(this,"wireMng");d(this,"fileManager");d(this,"nodeManager");this.logicInput=[],this.logicOutput=[],this.gate=[],this.currMouseAction={State:L.EDIT},this.nodeManager=new $e;const n=this,o=function(l){l.preload=function(){We(l)},l.setup=function(){l.createCanvas(e.offsetWidth,e.offsetHeight,l.P2D),n.loadFile_ex(i)},l.windowResized=function(){l.resizeCanvas(e.offsetWidth,e.offsetHeight)},l.draw=function(){l.background(255),l.fill(255),l.rect(0,0,l.width,l.height),n.wireMng.draw();for(let r of n.gate)r.draw();for(let r of n.logicInput)r.draw();for(let r of n.logicOutput)r.draw()},l.mousePressed=function(){for(let r of n.gate)r.mousePressed();for(let r of n.logicInput)r.mousePressed();for(let r of n.logicOutput)r.mousePressed()},l.mouseReleased=function(){for(let r of n.gate)r.mouseReleased();for(let r of n.logicInput)r.mouseReleased();for(let r of n.logicOutput)r.mouseReleased()},l.mouseClicked=function(){if(n.currMouseAction.State==L.EDIT){for(let r of n.gate)r.mouseClicked();for(let r of n.logicInput)r.mouseClicked();for(let r of n.logicOutput)r.mouseClicked()}else if(n.currMouseAction.State==L.DELETE){for(let r=0;r<n.gate.length;r++)if(n.gate[r].mouseClicked()){const u=n.gate[r];n.gate.splice(r--,1),u.destroy()}for(let r=0;r<n.logicInput.length;r++)if(n.logicInput[r].mouseClicked()){const u=n.logicInput[r];n.logicInput.splice(r--,1),u.destroy()}for(let r=0;r<n.logicOutput.length;r++)if(n.logicOutput[r].mouseClicked()){const u=n.logicOutput[r];n.logicOutput.splice(r--,1),u.destroy()}}n.wireMng.mouseClicked()}};this.root=e,this._instance=new At(o,this.root),this.wireMng=new Je(this),this.fileManager=new ts(this)}loadFile(e){this.fileManager.loadFile(e)}loadFile_ex(e){this.fileManager.loadFile_ex(e)}destroy(){this._instance.remove(),this.root=null}}const es=[{value:0,posX:39,posY:26,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-33,offsetMouseY:63,nodeStartID:6,isSaved:!0},{value:0,posX:38,posY:110,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:4,nodeStartID:7,isSaved:!0}],ss=[{value:0,posX:303,posY:36,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:231,offsetMouseY:73,nodeStartID:8,isSaved:!0},{value:0,posX:303,posY:100,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-3,offsetMouseY:2,nodeStartID:9,isSaved:!0}],ns=[],is=[],as=[{strType:"AND",type:2,width:100,height:50,posX:135,posY:11,isSpawned:!0,offsetMouseX:63,offsetMouseY:48,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"XOR",type:6,width:100,height:50,posX:136,posY:75,isSpawned:!0,offsetMouseX:64,offsetMouseY:112,isMoving:!1,isSaved:!0,nodeStartID:3}],os=[],rs=[{startID:6,endID:0,endX:396,endY:217,width:8},{startID:6,endID:3,endX:396,endY:217,width:8},{startID:7,endID:1,endX:396,endY:217,width:8},{startID:7,endID:4,endX:396,endY:217,width:8},{startID:2,endID:8,endX:396,endY:217,width:8},{startID:5,endID:9,endX:396,endY:217,width:8}],ls={logicInput:es,logicOutput:ss,flipflop:ns,logicClock:is,gate:as,srLatch:os,wire:rs},Mt=s=>(S("data-v-b2d7dd2f"),s=s(),M(),s),ds=h('<section data-auto-animate data-v-b2d7dd2f><h3 data-v-b2d7dd2f>1-bit Half Adder</h3><table data-v-b2d7dd2f><tr data-v-b2d7dd2f><th data-v-b2d7dd2f>A</th><th data-v-b2d7dd2f>B</th><th class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>C</th><th class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>S</th></tr><tr class="fragment" data-fragment-index="1" data-v-b2d7dd2f><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td></tr><tr class="fragment" data-fragment-index="2" data-v-b2d7dd2f><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>0</td><td data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td></tr><tr class="fragment" data-fragment-index="3" data-v-b2d7dd2f><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td><td data-v-b2d7dd2f>0</td><td class="fragment highlight-blue" data-fragment-index="6" data-v-b2d7dd2f>1</td></tr><tr class="fragment" data-fragment-index="4" data-v-b2d7dd2f><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td class="fragment highlight-red" data-fragment-index="5" data-v-b2d7dd2f>1</td><td data-v-b2d7dd2f>0</td></tr></table></section>',1),cs=Mt(()=>t("h3",null,"1-bit Half Adder",-1)),us={class:"w-full flex justify-center"},ps=Mt(()=>t("div",{class:"text-xl"},"Output on the top right is for carry, the other is for sum",-1)),at="section-half-adder",_s=v({__name:"half-adder",setup(s){const e=y(null);let i;function n(){i==null&&(i=new et(e.value,ls))}function o(){i&&(i.destroy(),i=null)}return Y(()=>{q({id:at,constructor:n,destructor:o})}),J(()=>{Q(at)}),(l,r)=>(p(),_(X,null,[ds,t("section",{"data-auto-animate":"",id:at},[cs,t("div",us,[t("div",{ref_key:"refDivSimulator",ref:e,class:"canvas-container"},null,512)]),ps])],64))}}),hs=g(_s,[["__scopeId","data-v-b2d7dd2f"]]),fs="/workshop-bfocm/assets/BFoCM-full-adder-B8ITB7iF.svg",ms="/workshop-bfocm/assets/BFoCM-full-adder-chain-ClLEStrj.svg",gs={},vs=h('<h3>Full Adder</h3><div class="flex flex-col items-center"><div class="bg-white"><img data-src="'+fs+'"></div><div class="fragment"><img data-src="'+ms+'"></div></div>',2),ws=[vs];function ys(s,e){return p(),_("section",null,ws)}const xs=g(gs,[["render",ys]]),ks="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTkycHgiIGhlaWdodD0iMTQxcHgiIHZpZXdCb3g9Ii0wLjUgLTAuNSAxOTIgMTQxIj48ZGVmcy8+PHJlY3QgZmlsbD0iI2ZmZmZmZiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCIgeT0iMCIvPjxnPjxnPjxwYXRoIGQ9Ik0gMTQwIDcwIEwgMTcwIDcwIEwgMTYwIDcwIEwgMTkwIDcwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigwLCAwLCAwKSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PC9nPjxnPjxyZWN0IHg9IjYwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iMTQwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PC9nPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA3OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDcwcHg7IG1hcmdpbi1sZWZ0OiA2MXB4OyI+PGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiIGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIj48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTZweDsgZm9udC1mYW1pbHk6IENvdXJpZXIgTmV3OyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBmb250LXdlaWdodDogYm9sZDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+W2ldPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjEwMCIgeT0iNzUiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkNvdXJpZXIgTmV3IiBmb250LXNpemU9IjE2cHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5baV08L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48Zz48cGF0aCBkPSJNIDAgMzIuNSBMIDYwIDMyLjUgTSAwIDEwNy41IEwgNjAgMTA3LjUgTSAwIDU3LjUgTCA2MCA1Ny41IE0gMCA4Mi41IEwgNjAgODIuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjwvZz48L2c+PC9zdmc+",bs="/workshop-bfocm/assets/BFoCM-4-bit-mux-BRQnrPWi.svg",Is=[{value:!1,posX:32,posY:24,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-44,offsetMouseY:58,nodeStartID:0,isSaved:!0},{value:!1,posX:31,posY:73,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-45,offsetMouseY:107,nodeStartID:1,isSaved:!0},{value:!1,posX:29,posY:128,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:1,offsetMouseY:4,nodeStartID:2,isSaved:!0}],Ss=[{value:!1,posX:441,posY:76,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:365,offsetMouseY:110,nodeStartID:14,isSaved:!0}],Ms=[],Ds=[],Cs=[{strType:"NOT",type:1,width:100,height:50,posX:67,posY:69,isSpawned:!0,offsetMouseX:-41,offsetMouseY:-30,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"AND",type:2,width:100,height:50,posX:187,posY:8,isSpawned:!0,offsetMouseX:111,offsetMouseY:42,isMoving:!1,isSaved:!0,nodeStartID:5},{strType:"AND",type:2,width:100,height:50,posX:188,posY:94,isSpawned:!0,offsetMouseX:112,offsetMouseY:128,isMoving:!1,isSaved:!0,nodeStartID:8},{strType:"OR",type:4,width:100,height:50,posX:289,posY:51,isSpawned:!0,offsetMouseX:213,offsetMouseY:85,isMoving:!1,isSaved:!0,nodeStartID:11}],Ns=[],Ls=[{startID:0,endID:5,endX:328,endY:200,width:8},{startID:1,endID:3,endX:328,endY:200,width:8},{startID:4,endID:8,endX:328,endY:200,width:8},{startID:2,endID:9,endX:328,endY:200,width:8},{startID:1,endID:6,endX:328,endY:200,width:8},{startID:7,endID:11,endX:328,endY:200,width:8},{startID:10,endID:12,endX:328,endY:200,width:8},{startID:13,endID:14,endX:328,endY:200,width:8}],$s={logicInput:Is,logicOutput:Ss,flipflop:Ms,logicClock:Ds,gate:Cs,srLatch:Ns,wire:Ls},ct=s=>(S("data-v-c5e5b754"),s=s(),M(),s),Os=ct(()=>t("section",{"data-auto-animate":""},[t("h3",null,"Mux (Multiplexer)"),t("div",{class:"flex justify-center"},[t("img",{"data-src":ks})])],-1)),As=ct(()=>t("h3",null,"2-bit Mux",-1)),Ts={class:"flex justify-center"},Xs=ct(()=>t("section",{"data-auto-animate":""},[t("h3",null,"4-bit Mux"),t("div",{class:"flex justify-center"},[t("img",{"data-src":bs})])],-1)),ot="section-mux",Ys=v({__name:"mux",setup(s){const e=y(null);let i;function n(){i==null&&(i=new et(e.value,$s))}function o(){i&&(i.destroy(),i=null)}return Y(()=>{q({id:ot,constructor:n,destructor:o})}),J(()=>{Q(ot)}),(l,r)=>(p(),_(X,null,[Os,t("section",{"data-auto-animate":"",id:ot},[As,t("div",Ts,[t("div",{ref_key:"refDivSimulator",ref:e,class:"canvas-container"},null,512)])]),Xs],64))}}),Es=g(Ys,[["__scopeId","data-v-c5e5b754"]]),js="/workshop-bfocm/assets/BFoCM-2-inverters-back-to-back-C6syTLfx.svg",Rs="/workshop-bfocm/assets/BFoCM-D-Latch-DcswNe3f.svg",Fs="/workshop-bfocm/assets/BFoCM-S-R-Latch-DrsOXjIb.svg",Ps="/workshop-bfocm/assets/BFoCM-4-bit-register-DjJr7J86.svg",Vs={},zs=h('<section data-v-12651195><h3 data-v-12651195>We can also build circuits to store data</h3></section><section data-v-12651195><div class="flex justify-center" data-v-12651195><img data-src="'+js+'" data-v-12651195></div><table class="fragment" data-fragment-index="1" data-v-12651195><tr data-v-12651195><td data-v-12651195>A</td><td data-v-12651195>B</td><td data-v-12651195>C</td></tr><tr class="fragment" data-fragment-index="2" data-v-12651195><td data-v-12651195>0</td><td data-v-12651195>1</td><td data-v-12651195>0</td></tr><tr class="fragment" data-fragment-index="3" data-v-12651195><td data-v-12651195>1</td><td data-v-12651195>0</td><td data-v-12651195>1</td></tr></table></section><section data-v-12651195><h3 class="fragment" data-v-12651195>D Latch</h3><div class="flex justify-center" data-v-12651195><img data-src="'+Rs+'" data-v-12651195></div></section><section data-v-12651195><h3 class="fragment" data-v-12651195>S-R Latch</h3><div class="flex justify-center" data-v-12651195><img data-src="'+Fs+'" data-v-12651195></div></section><section data-v-12651195><h3 class="fragment" data-fragment-index="1" data-v-12651195>4-bit Register</h3><div class="flex justify-center" data-v-12651195><img data-src="'+Ps+'" class="scale-150 fragment custom" data-fragment-index="1" data-v-12651195></div></section>',5);function Hs(s,e){return zs}const Us=g(Vs,[["render",Hs],["__scopeId","data-v-12651195"]]),Bs="/workshop-bfocm/assets/TC-counting-duF_QQYJ.png",Ws="/workshop-bfocm/assets/TC-decoder-CUVaZzG7.png",Gs="/workshop-bfocm/assets/TC-ALU-Dks7jVyS.png",Zs={},Js=h('<section data-v-9b664457><h3 data-v-9b664457>Counter</h3><div class="flex justify-center" data-v-9b664457><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-9b664457><img data-src="'+Bs+'" data-v-9b664457></a></div></section><section data-v-9b664457><h3 data-v-9b664457>Decoder</h3><div class="flex justify-center" data-v-9b664457><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-9b664457><img data-src="'+Ws+'" data-v-9b664457></a></div></section><section data-v-9b664457><h3 data-v-9b664457>ALU (Arithmetic Logic Unit)</h3><div class="flex justify-center" data-v-9b664457><a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank" data-v-9b664457><img data-src="'+Gs+'" class="scale-75 m-0" data-v-9b664457></a></div></section>',3);function qs(s,e){return Js}const Qs=g(Zs,[["render",qs],["__scopeId","data-v-9b664457"]]),Ks=t("section",null,[t("h3",null,"Now, let's build a few components")],-1),tn=v({__name:"basic-components",setup(s){return(e,i)=>(p(),_("section",null,[Ks,a(Le),a(hs),a(xs),a(Es),a(Us),a(Qs)]))}}),en="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M79.15691%2025H95M29.043478%2025h-24'/%3e%3cpath%20d='M28.96875%202.59375v44.8125l2.15625-1.0625%2041.03125-20v-2.6875l-41.03125-20-2.15625-1.0625zm3%204.8125L68.09375%2025l-36.125%2017.59375V7.40625z'%20style='marker:none'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='3'%20d='M79%2025a4%204%200%201%201-8%200%204%204%200%201%201%208%200z'%20style='marker:none'/%3e%3c/svg%3e",sn="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%20%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M31%2015H5M32%2035H5'/%3e%3cpath%20d='M30%205V45H50.47619c11.267908%200%2020-9.000045%2020-20s-8.732091-20-20-20H30zm2.857143%202.857143H50.47619c9.760663%200%2016.666667%207.639955%2016.666667%2017.142857%200%209.502902-7.382195%2017.142857-17.142857%2017.142857H32.857143V7.857143z'%20/%3e%3c/svg%3e",nn="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M31%2015H5M32%2035H5'/%3e%3cpath%20fill-rule='evenodd'%20d='M24.09375%205l2%202.4375S31.75%2014.437549%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.408076.000001%207.689699.024514%2013.625-2.40625s12.536536-7.343266%2017.6875-16.875L71.25%2025l1.3125-.71875C62.259387%205.21559%2046.006574%205%2041.25%205H24.09375zm5.875%203H41.25c4.684173%200%2018.28685-.130207%2027.96875%2017C64.451964%2033.429075%2058.697469%2037.68391%2053.5%2039.8125%2048.139339%2042.007924%2043.658075%2042.000001%2041.25%2042H30c1.873588-3.108434%204.75-9.04935%204.75-17%200-7.973354-2.908531-13.900185-4.78125-17z'/%3e%3c/svg%3e",an="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%20%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M79%2025h16M31%2015H5M32%2035H5'/%3e%3cpath%20fill-rule='evenodd'%20d='M24.09375%205l2%202.4375S31.75%2014.437549%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.408076.000001%207.689699.024514%2013.625-2.40625s12.536536-7.343266%2017.6875-16.875L71.25%2025l1.3125-.71875C62.259387%205.21559%2046.006574%205%2041.25%205H24.09375zm5.875%203H41.25c4.684173%200%2018.28685-.130207%2027.96875%2017C64.451964%2033.429075%2058.697469%2037.68391%2053.5%2039.8125%2048.139339%2042.007924%2043.658075%2042.000001%2041.25%2042H30c1.873588-3.108434%204.75-9.04935%204.75-17%200-7.973354-2.908531-13.900185-4.78125-17z'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='3'%20d='M79%2025a4%204%200%201%201-8%200%204%204%200%201%201%208%200z'%20style='marker:none'/%3e%3c/svg%3e",on="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='100'%20height='50'%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-width='2'%20d='M70%2025h25M30.38572%2015H5M31.3621%2035H5'/%3e%3cg%20fill-rule='evenodd'%3e%3cpath%20d='M24.25%2042C22.65263%2044.6444%2022%2045%2022%2045h-3.65625l2-2.4375S26%2035.56245%2026%2025%2020.34375%207.4375%2020.34375%207.4375l-2-2.4375H22c.78125.9375%201.42188%201.65625%202.21875%203C26.09147%2011.09981%2029%2017.02665%2029%2025c0%207.95065-2.8967%2013.87942-4.75%2017z'/%3e%3cpath%20d='M24.09375%205l2%202.4375S31.75%2014.43755%2031.75%2025s-5.65625%2017.5625-5.65625%2017.5625l-2%202.4375H41.25c2.40808%200%207.6897.02451%2013.625-2.40625s12.53654-7.34327%2017.6875-16.875L71.25%2025l1.3125-.71875C62.25939%205.21559%2046.00657%205%2041.25%205H24.09375zm5.875%203H41.25c4.68417%200%2018.28685-.1302%2027.96875%2017C64.45196%2033.42907%2058.69747%2037.68391%2053.5%2039.8125%2048.13934%2042.00792%2043.65808%2042%2041.25%2042H30c1.87359-3.10843%204.75-9.04935%204.75-17%200-7.97335-2.90853-13.90019-4.78125-17z'/%3e%3c/g%3e%3c/svg%3e",rn="/workshop-bfocm/assets/Aldrin_Apollo_11-D5Jmghkv.jpg",ln="/workshop-bfocm/assets/CMOS_NAND-C6-3LW1A.svg",dn="/workshop-bfocm/assets/NAND_ANSI_Labelled-djz2KPhH.svg",cn=[{value:1,posX:24,posY:77,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-5,offsetMouseY:1,nodeStartID:3,isSaved:!0},{value:1,posX:22,posY:22,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-5,offsetMouseY:3,nodeStartID:4,isSaved:!0}],un=[{value:!1,posX:233,posY:48,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:8,isSaved:!0}],pn=[],_n=[],hn=[{strType:"NAND",type:3,width:100,height:50,posX:82,posY:23,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:5}],fn=[],mn=[{startID:4,endID:5,endX:57,endY:25,width:8},{startID:3,endID:6,endX:60,endY:77,width:8},{startID:7,endID:8,endX:186,endY:47,width:8}],gn={logicInput:cn,logicOutput:un,flipflop:pn,logicClock:_n,gate:hn,srLatch:fn,wire:mn},Dt=s=>(S("data-v-426ed54b"),s=s(),M(),s),vn=["id"],wn=Dt(()=>t("h3",null,"The NAND Gate",-1)),yn={class:"flex"},xn=Dt(()=>t("div",{class:"w-1/2 flex justify-center"},[t("img",{"data-src":ln})],-1)),kn={class:"flex flex-col items-center w-1/2 justify-evenly"},bn=h('<div class="w-full flex justify-center items-center bg-white" data-v-426ed54b><img data-src="'+dn+'" data-v-426ed54b></div><table class="text-lg text-center" style="margin:initial;" data-v-426ed54b><thead data-v-426ed54b><tr data-v-426ed54b><th data-v-426ed54b>Input A</th><th data-v-426ed54b>Input B</th><th data-v-426ed54b>Output Q</th></tr></thead><tbody data-v-426ed54b><tr data-v-426ed54b><td data-v-426ed54b>0</td><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>1</td><td data-v-426ed54b>0</td><td data-v-426ed54b>1</td></tr><tr data-v-426ed54b><td data-v-426ed54b>1</td><td data-v-426ed54b>1</td><td data-v-426ed54b>0</td></tr></tbody></table>',2),In=v({__name:"nand",setup(s){const e=y("section-nand"),i=y(null);let n;function o(){n==null&&(n=new et(i.value,gn))}function l(){n&&(n.destroy(),n=null)}return Y(()=>{q({id:e.value,constructor:o,destructor:l})}),J(()=>{Q(e.value)}),(r,u)=>(p(),_("section",{id:e.value},[wn,t("div",yn,[xn,t("div",kn,[bn,t("div",{ref_key:"refDivSimulator",ref:i,class:"nand-gate-container"},null,512)])])],8,vn))}}),Sn=g(In,[["__scopeId","data-v-426ed54b"]]),Mn=["id"],Dn={class:"fragment","data-fragment-index":"6"},Cn={class:"flex justify-center fragment","data-fragment-index":"5"},Nn={class:"w-full flex justify-center"},Ln={class:"fragment","data-fragment-index":"0"},H=v({__name:"gate",props:{section_id:String,LCJson:Object,canvas_width:{type:[Number,String],default:500},canvas_height:{type:[Number,String],default:500}},setup(s){const e=y(null);let i;const n=s,o=Tt({width:`${n.canvas_width}px`,height:`${n.canvas_height}px`});function l(){i==null&&(i=new et(e.value,n.LCJson))}function r(){i&&(i.destroy(),i=null)}return Y(()=>{q({id:n.section_id,constructor:l,destructor:r})}),J(()=>{Q(n.section_id)}),(u,x)=>(p(),_("section",{id:s.section_id},[t("h3",Dn,[st(u.$slots,"header")]),t("div",Cn,[st(u.$slots,"symbol")]),t("div",Nn,[t("div",{ref_key:"refDivSimulator",ref:e,style:Xt(o)},null,4)]),t("div",Ln,[st(u.$slots,"tftable")])],8,Mn))}}),$n=[{value:!1,posX:63,posY:75,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:0,isSaved:!0}],On=[{value:!0,posX:286,posY:76,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:4,isSaved:!0}],An=[],Tn=[],Xn=[{strType:"NAND",type:3,width:100,height:50,posX:131,posY:51,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:1}],Yn=[],En=[{startID:0,endID:1,endX:95,endY:71,width:8},{startID:0,endID:2,endX:99,endY:77,width:8},{startID:3,endID:4,endX:232,endY:78,width:8}],jn={logicInput:$n,logicOutput:On,flipflop:An,logicClock:Tn,gate:Xn,srLatch:Yn,wire:En},Rn=[{value:0,posX:38,posY:24,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:6,offsetMouseY:-2,nodeStartID:6,isSaved:!0},{value:0,posX:38,posY:89,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:6,offsetMouseY:1,nodeStartID:7,isSaved:!0}],Fn=[{value:!1,posX:374,posY:57,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:307,offsetMouseY:96,nodeStartID:5,isSaved:!0}],Pn=[],Vn=[],zn=[{strType:"NAND",type:3,width:100,height:50,posX:101,posY:31,isSpawned:!0,offsetMouseX:34,offsetMouseY:70,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:219,posY:31,isSpawned:!0,offsetMouseX:152,offsetMouseY:70,isMoving:!1,isSaved:!0,nodeStartID:3}],Hn=[],Un=[{startID:6,endID:0,endX:74,endY:51,width:8},{startID:7,endID:1,endX:85,endY:114,width:8},{startID:2,endID:3,endX:221,endY:76,width:8},{startID:4,endID:5,endX:328,endY:80,width:8}],Bn={logicInput:Rn,logicOutput:Fn,flipflop:Pn,logicClock:Vn,gate:zn,srLatch:Hn,wire:Un},Wn=[{value:0,posX:24,posY:38,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-2,offsetMouseY:6,nodeStartID:2,isSaved:!0},{value:0,posX:23,posY:91,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:2,offsetMouseY:7,nodeStartID:5,isSaved:!0}],Gn=[{value:!1,posX:341,posY:63,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:7,offsetMouseY:2,nodeStartID:9,isSaved:!0}],Zn=[],Jn=[],qn=[{strType:"NOT",type:1,width:100,height:50,posX:75,posY:13,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:75,posY:67,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"NAND",type:3,width:100,height:50,posX:191,posY:38,isSpawned:!0,offsetMouseX:-2,offsetMouseY:-16,isMoving:!1,isSaved:!0,nodeStartID:6}],Qn=[],Kn=[{startID:2,endID:0,endX:52,endY:41,width:8},{startID:5,endID:3,endX:50,endY:93,width:8},{startID:1,endID:6,endX:178,endY:38,width:8},{startID:4,endID:7,endX:176,endY:92,width:8},{startID:8,endID:9,endX:295,endY:62,width:8}],ti={logicInput:Wn,logicOutput:Gn,flipflop:Zn,logicClock:Jn,gate:qn,srLatch:Qn,wire:Kn},ei=[{value:0,posX:24,posY:38,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-3,offsetMouseY:-5,nodeStartID:2,isSaved:!0},{value:0,posX:23,posY:91,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:7,nodeStartID:5,isSaved:!0}],si=[{value:!0,posX:338,posY:66,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:0,offsetMouseY:0,nodeStartID:13,isSaved:!0}],ni=[],ii=[],ai=[{strType:"NOT",type:1,width:100,height:50,posX:75,posY:13,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:0},{strType:"NOT",type:1,width:100,height:50,posX:75,posY:67,isSpawned:!0,offsetMouseX:0,offsetMouseY:0,isMoving:!1,isSaved:!0,nodeStartID:3},{strType:"AND",type:2,width:100,height:50,posX:186,posY:41,isSpawned:!0,offsetMouseX:-98,offsetMouseY:-22,isMoving:!1,isSaved:!0,nodeStartID:10}],oi=[],ri=[{startID:2,endID:0,endX:52,endY:41,width:8},{startID:5,endID:3,endX:50,endY:93,width:8},{startID:1,endID:10,endX:175,endY:42,width:8},{startID:4,endID:11,endX:179,endY:92,width:8},{startID:12,endID:13,endX:284,endY:63,width:8}],li={logicInput:ei,logicOutput:si,flipflop:ni,logicClock:ii,gate:ai,srLatch:oi,wire:ri},di=[{value:0,posX:29,posY:85,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-10,offsetMouseY:5,nodeStartID:0,isSaved:!0},{value:0,posX:30,posY:135,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:-4,offsetMouseY:10,nodeStartID:1,isSaved:!0}],ci=[{value:!1,posX:450,posY:104,diameter:25,isSpawned:!0,isMoving:!1,offsetMouseX:381,offsetMouseY:142,nodeStartID:15,isSaved:!0}],ui=[],pi=[],_i=[{strType:"NOT",type:1,width:100,height:50,posX:63,posY:5,isSpawned:!0,offsetMouseX:-6,offsetMouseY:43,isMoving:!1,isSaved:!0,nodeStartID:2},{strType:"NOT",type:1,width:100,height:50,posX:63,posY:169,isSpawned:!0,offsetMouseX:-6,offsetMouseY:207,isMoving:!1,isSaved:!0,nodeStartID:4},{strType:"OR",type:4,width:100,height:50,posX:191,posY:15,isSpawned:!0,offsetMouseX:122,offsetMouseY:53,isMoving:!1,isSaved:!0,nodeStartID:6},{strType:"OR",type:4,width:100,height:50,posX:189,posY:159,isSpawned:!0,offsetMouseX:120,offsetMouseY:197,isMoving:!1,isSaved:!0,nodeStartID:9},{strType:"NAND",type:3,width:100,height:50,posX:292,posY:79,isSpawned:!0,offsetMouseX:223,offsetMouseY:117,isMoving:!1,isSaved:!0,nodeStartID:12}],hi=[],fi=[{startID:0,endID:2,endX:384,endY:208,width:8},{startID:1,endID:4,endX:384,endY:208,width:8},{startID:5,endID:10,endX:384,endY:208,width:8},{startID:3,endID:6,endX:384,endY:208,width:8},{startID:1,endID:7,endX:384,endY:208,width:8},{startID:0,endID:9,endX:384,endY:208,width:8},{startID:8,endID:12,endX:384,endY:208,width:8},{startID:11,endID:13,endX:384,endY:208,width:8},{startID:14,endID:15,endX:384,endY:208,width:8}],mi={logicInput:di,logicOutput:ci,flipflop:ui,logicClock:pi,gate:_i,srLatch:hi,wire:fi},gi={class:"text-lg text-center"},vi=t("thead",null,[t("tr",null,[t("th",null,"Input A"),t("th",null,"Input B"),t("th",null,"Output Q")])],-1),wi=["data-fragment-index"],K=v({__name:"truth-table",props:{method:{type:String}},setup(s){const e=y([]),i=s;return Y(()=>{e.value.length==0&&[[0,0],[1,0],[0,1],[1,1]].forEach(([n,o])=>{let l=0;switch(i.method){case"xor":l=n^o;break;case"or":l=n|o;break;case"and":l=n&o;break;case"nor":l=n|o?0:1;break;case"nand":l=n&o?0:1;break}e.value.push([n,o,l])})}),(n,o)=>(p(),_("table",gi,[vi,t("tbody",null,[(p(!0),_(X,null,B(e.value,(l,r)=>(p(),_("tr",{class:"fragment","data-fragment-index":r+1},[t("td",null,tt(l[0]),1),t("td",null,tt(l[1]),1),t("td",null,tt(l[2]),1)],8,wi))),256))])]))}}),yi={},xi={class:"problem-stack"},ki=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),bi=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),Ii=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),Si=t("tr",{class:"ps-sw"},[t("td",null,"Operating System")],-1),Mi=t("tr",{class:"ps-isa"},[t("td",null," ")],-1),Di=t("tr",{class:"ps-hw"},[t("td",null," ")],-1),Ci=t("tr",{class:"ps-hw"},[t("td",{style:{"font-weight":"bold"}},"Logic")],-1),Ni=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),Li=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),$i=[ki,bi,Ii,Si,Mi,Di,Ci,Ni,Li];function Oi(s,e){return p(),_("table",xi,$i)}const Ai=g(yi,[["render",Oi]]),Ti=t("section",null,[t("h3",null,"Boolean Algebra"),t("ul",null,[t("li",null,[f("AND: "),t("code",null,"1 AND 0 = 0")]),t("li",null,[f("OR: "),t("code",null,"1 OR 0 = 1")]),t("li",null,"...")])],-1),Xi=t("img",{class:"bg-white scale-150","data-src":en},null,-1),Yi=t("table",{class:"text-lg text-center"},[t("thead",null,[t("tr",null,[t("th",null,"Input"),t("th",null,"Output")])]),t("tbody",null,[t("tr",{class:"fragment","data-fragment-index":"1"},[t("td",null,"0"),t("td",null,"1")]),t("tr",{class:"fragment","data-fragment-index":"2"},[t("td",null,"1"),t("td",null,"0")])])],-1),Ei=t("img",{class:"bg-white scale-150","data-src":sn},null,-1),ji=t("img",{class:"bg-white scale-150","data-src":nn},null,-1),Ri=t("img",{class:"bg-white scale-150","data-src":an},null,-1),Fi=t("img",{class:"bg-white scale-150","data-src":on},null,-1),Pi=t("h3",null,"Summary of Logic Gates",-1),Vi={class:"flex"},zi=t("a",{href:"https://exclusivearchitecture.com/03-technical-articles-IC-02-03-logic-level.html",target:"_blank"},[t("img",{"data-src":bt})],-1),Hi=h('<section><h3>Universal Gates: NOR &amp; NAND</h3><div class="flex items-center"><div><a href="https://en.wikipedia.org/wiki/Apollo_Guidance_Computer" target="_blank"><img data-src="'+rn+'"></a></div><div><ul style="font-size:32px;"><li>It&#39;s possible to implement a computer with NOR or NAND gates only. Read more about <a href="https://en.wikipedia.org/wiki/NOR_logic" target="_blank">NOR logic</a> and <a href="https://en.wikipedia.org/wiki/NAND_logic" target="_blank">NAND logic</a> on Wikipedia.</li><li>The Apollo Guidance Computers (1966-1975) were implemented with NOR gate only.</li></ul></div></div></section>',1),Ui=v({__name:"boolean-algebra",setup(s){return(e,i)=>(p(),_("section",null,[Ti,a(Sn),a(H,{section_id:"section-not-gate",LCJson:c(jn),canvas_height:"160",canvas_width:"340"},{header:w(()=>[f("NOT")]),symbol:w(()=>[Xi]),tftable:w(()=>[Yi]),_:1},8,["LCJson"]),a(H,{section_id:"section-and-gate",LCJson:c(Bn),canvas_height:"140",canvas_width:"420"},{header:w(()=>[f("AND")]),symbol:w(()=>[Ei]),tftable:w(()=>[a(K,{method:"and"})]),_:1},8,["LCJson"]),a(H,{section_id:"section-or-gate",LCJson:c(ti),canvas_height:"140",canvas_width:"380"},{header:w(()=>[f("OR")]),symbol:w(()=>[ji]),tftable:w(()=>[a(K,{method:"or"})]),_:1},8,["LCJson"]),a(H,{section_id:"section-nor-gate",LCJson:c(li),canvas_height:"140",canvas_width:"380"},{header:w(()=>[f("NOR")]),symbol:w(()=>[Ri]),tftable:w(()=>[a(K,{method:"nor"})]),_:1},8,["LCJson"]),a(H,{section_id:"section-xor-gate",LCJson:c(mi),canvas_height:"220",canvas_width:"480"},{header:w(()=>[f("XOR")]),symbol:w(()=>[Fi]),tftable:w(()=>[a(K,{method:"xor"})]),_:1},8,["LCJson"]),t("section",null,[Pi,t("div",Vi,[a(Ai,{class:"text-lg"}),zi])]),Hi]))}}),Bi={},Wi=t("h3",null,"Break",-1),Gi=t("ul",null,[t("li",null,"Signals, logic gates"),t("li",null,"von Neumann architecture"),t("li",{class:"fragment"},"Computers in early days"),t("li",{class:"fragment"},"Operating system")],-1),Zi=[Wi,Gi];function Ji(s,e){return p(),_("section",null,Zi)}const qi=g(Bi,[["render",Ji]]),Qi={},Ki={class:"problem-stack"},ta=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),ea=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),sa=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),na=t("tr",{class:"ps-sw"},[t("td",null,[f("Runtime System"),t("br"),f("(VM, OS, ...)")])],-1),ia=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),aa=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),oa=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),ra=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),la=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),da=[ta,ea,sa,na,ia,aa,oa,ra,la];function ca(s,e){return p(),_("table",Ki,da)}const ua=g(Qi,[["render",ca]]),Ct=s=>(S("data-v-99836d95"),s=s(),M(),s),pa=Ct(()=>t("h3",null,"Break",-1)),_a={class:"column-2"},ha=Ct(()=>t("div",null,[t("ul",null,[t("li",null,"ISA"),t("li",null,"UNIX and C")])],-1)),fa=v({__name:"break-2",setup(s){return(e,i)=>(p(),_("section",null,[pa,t("div",_a,[t("div",null,[a(ua)]),ha])]))}}),ma=g(fa,[["__scopeId","data-v-99836d95"]]),ga="/workshop-bfocm/assets/BFoCM-compile-c-preprocessor-B4jrbsIZ.svg",va="/workshop-bfocm/assets/BFoCM-compile-c-compiler-CStMhMz0.svg",wa="/workshop-bfocm/assets/BFoCM-compile-c-assembler-Bf70tcNB.svg",ya="/workshop-bfocm/assets/BFoCM-compile-c-linker-DwuZ7KoS.svg",R=`#include <stdio.h>

int main() {
	printf("hello world\\n");
	return 0;
}

`,xa=`# 0 "main.c"
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
`,ka=`	.arch armv8-a
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
`,yt=`	.file	"main.c"
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
`,ba=`// callee.c
int sum(int a, int b) {
	return a + b;
}

`,Ia=`// callee.h
#ifndef CALLEE_H
#define CALLEE_H

int sum(int, int);

#endif

`,Sa=`// caller.c
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

`,Ma=`static void uv__cpu_relax(void) {
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

`,I=s=>(S("data-v-6a174cf6"),s=s(),M(),s),Da=h('<section data-v-6a174cf6><h3 data-v-6a174cf6>C (vs Assembly)</h3><ul class="text-4xl" data-v-6a174cf6><li class="fragment" data-v-6a174cf6>High Level: C provides a certain level of abstraction from the hardware</li><li class="fragment" data-v-6a174cf6>Portability: It&#39;s easy to convert from C to machine code</li><li class="fragment" data-v-6a174cf6>Easy of Use: functions, loops, conditional statements and data structures (arrays, linked list, tree, map)</li><li class="fragment" data-v-6a174cf6>Ideal for operating system or system-level application development</li></ul></section>',1),Ca=I(()=>t("h3",null,"Languages Influenced by C",-1)),Na={class:"lang icon-container flex justify-center"},La=["data-src"],$a=I(()=>t("h3",null,"Notable Softwares Developed in C",-1)),Oa={class:"icon-container flex justify-center"},Aa=["data-src"],Ta=h('<section data-v-6a174cf6><h3 data-v-6a174cf6>Timeline of C Language</h3><ul data-v-6a174cf6><li data-v-6a174cf6>1972 - first release</li><li data-v-6a174cf6>1978 - <a href="https://en.wikipedia.org/wiki/K%26R_C" data-v-6a174cf6>K&amp;R C</a></li><li data-v-6a174cf6>1989 - C89</li><li data-v-6a174cf6>1999 - C99</li><li data-v-6a174cf6>2011 - C11</li><li data-v-6a174cf6>2018 - C17</li><li data-v-6a174cf6>2024 - C23</li></ul></section><section data-auto-animate data-v-6a174cf6><h3 data-v-6a174cf6>How to Convert C to Machine Code</h3></section>',2),Xa={"data-auto-animate":""},Ya=I(()=>t("h3",null,"How to Convert C to Machine Code",-1)),Ea={"data-auto-animate":""},ja=I(()=>t("h3",null,"How to Convert C to Machine Code",-1)),Ra={"data-auto-animate":""},Fa=I(()=>t("h3",null,"How to Convert C to Machine Code",-1)),Pa=h('<section data-v-6a174cf6><h3 data-v-6a174cf6>Easy, right?</h3></section><section data-v-6a174cf6><h3 data-v-6a174cf6>Not really, let&#39;s break it down</h3></section><section data-auto-animate data-v-6a174cf6><h3 data-v-6a174cf6>Preprocessor</h3><div class="flex justify-center" data-v-6a174cf6><img data-src="'+ga+'" data-v-6a174cf6></div></section><section data-auto-animate data-v-6a174cf6><h3 data-v-6a174cf6>Preprocessor</h3><ul data-v-6a174cf6><li data-v-6a174cf6><code data-v-6a174cf6>#include</code></li><li data-v-6a174cf6><code data-v-6a174cf6>#define</code></li><li data-v-6a174cf6><code data-v-6a174cf6>#if</code>/<code data-v-6a174cf6>#ifdef</code>/<code data-v-6a174cf6>#ifndef</code>/<code data-v-6a174cf6>#else</code>/<code data-v-6a174cf6>#elif</code>/<code data-v-6a174cf6>#endif</code></li><li data-v-6a174cf6>...</li></ul></section>',4),Va={"data-auto-animate":""},za=I(()=>t("h3",null,"Preprocessor",-1)),Ha={class:"flex"},Ua={class:"w-1/2"},Ba={class:"w-1/2"},Wa={"data-auto-animate":""},Ga=I(()=>t("h3",null,"Preprocessor",-1)),Za={class:"fragment"},Ja={"data-auto-animate":""},qa=I(()=>t("h3",null,"Preprocessor",-1)),Qa=I(()=>t("section",{"data-auto-animate":"","data-auto-animate-restart":""},[t("h3",null,"Compilation"),t("div",{class:"flex justify-center"},[t("img",{"data-src":va})])],-1)),Ka=I(()=>t("h3",null,"Compilation",-1)),to={class:"flex"},eo={class:"w-1/2"},so={class:"w-1/2"},no=I(()=>t("h3",null,"x86_64 vs ARMv8",-1)),io={class:"flex"},ao={class:"w-1/2"},oo={class:"w-1/2"},ro=h('<section data-v-6a174cf6><h3 data-v-6a174cf6>Assembler</h3><div class="flex justify-center" data-v-6a174cf6><img data-src="'+wa+'" data-v-6a174cf6></div></section><section data-v-6a174cf6><div class="flex justify-center" data-v-6a174cf6><img data-src="'+ya+'" data-v-6a174cf6></div></section><section data-v-6a174cf6><h3 data-v-6a174cf6>C (vs Assembly)</h3><ul class="text-3xl" data-v-6a174cf6><li data-v-6a174cf6>High Level: C provides a certain level of <span class="font-bold text-red-500" data-v-6a174cf6>abstraction</span> from the hardware<ul data-v-6a174cf6><li class="fragment" data-v-6a174cf6>Data types and operations are platform dependent</li></ul></li><li data-v-6a174cf6>Portability: It&#39;s easy to convert from C to machine code<ul data-v-6a174cf6><li class="fragment" data-v-6a174cf6>C is not directly related to any instruction set, but close enough</li><li class="fragment" data-v-6a174cf6>C will be convert to Assembly first, then reuse the assembler</li></ul></li><li data-v-6a174cf6>Easy of Use: functions, loops, conditional statements and data structures (arrays, linked list, tree, map)</li><li class="fragment" data-v-6a174cf6>If there&#39;re some parts of the program need to use specific hardware features, it&#39;s possible to write code with assembly languages then compile with other parts in C together</li></ul></section>',3),lo=I(()=>t("h3",null,"C w/ Assembly",-1)),xt='gcc main.c # -> a.out, which means "assembler output"',co='./a.out    # "." means the current dir',uo=v({__name:"c-vs-assembly",setup(s){const e=["cplusplus/cplusplus-original.svg","csharp/csharp-original.svg","objectivec/objectivec-plain.svg","java/java-original.svg","javascript/javascript-original.svg","go/go-original-wordmark.svg","rust/rust-original.svg"],i=["linux/linux-original.svg","postgresql/postgresql-original.svg","redis/redis-original.svg","python/python-original.svg","nginx/nginx-original.svg","git/git-original.svg"];let n=xa.split(`
`);const o=[...n.slice(0,4),"# // ...",`# // other ~${n.length-10} lines`,"# // ...",...n.slice(-6)].join(`
`);return(l,r)=>{const u=E("highlightjs");return p(),_("section",null,[Da,t("section",null,[Ca,t("div",Na,[(p(),_(X,null,B(e,x=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${x}`},null,8,La)),64))])]),t("section",null,[$a,t("div",Oa,[(p(),_(X,null,B(i,x=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${x}`},null,8,Aa)),64))])]),Ta,t("section",Xa,[Ya,a(u,{language:"c",autodetect:!1,code:c(R)},null,8,["code"])]),t("section",Ea,[ja,a(u,{language:"c",autodetect:!1,code:c(R)},null,8,["code"]),a(u,{language:"bash",autodetect:!1,code:xt})]),t("section",Ra,[Fa,a(u,{language:"c",autodetect:!1,code:c(R)},null,8,["code"]),a(u,{language:"bash",autodetect:!1,code:xt}),a(u,{language:"bash",autodetect:!1,code:co})]),Pa,t("section",Va,[za,t("div",null,[a(u,{language:"bash",autodetect:!1,code:"gcc -E main.c -o main.i"})]),t("div",Ha,[t("div",Ua,[a(u,{language:"c",autodetect:!1,code:c(R)},null,8,["code"])]),t("div",Ba,[a(u,{language:"c",autodetect:!1,code:c(o)},null,8,["code"])])])]),t("section",Wa,[Ga,t("div",null,[a(u,{language:"c",autodetect:!1,code:c(ba)},null,8,["code"])]),t("div",Za,[a(u,{language:"c",autodetect:!1,code:c(Ia)},null,8,["code"])])]),t("section",Ja,[qa,t("div",null,[a(u,{language:"c",autodetect:!1,code:c(Sa)},null,8,["code"])])]),Qa,t("section",null,[Ka,t("div",null,[a(u,{language:"bash",autodetect:!1,code:"gcc -S main.i -o main.s"})]),t("div",to,[t("div",eo,[a(u,{language:"c",autodetect:!1,code:c(R)},null,8,["code"])]),t("div",so,[a(u,{language:"x86asm",autodetect:!1,code:c(yt)},null,8,["code"])])])]),t("section",null,[no,t("div",io,[t("div",ao,[a(u,{language:"x86asm",autodetect:!1,code:c(yt)},null,8,["code"])]),t("div",oo,[a(u,{language:"armasm",autodetect:!1,code:c(ka)},null,8,["code"])])])]),ro,t("section",null,[lo,a(u,{language:"c",autodetect:!1,code:c(Ma)},null,8,["code"])])])}}}),po=g(uo,[["__scopeId","data-v-6a174cf6"]]),_o={},ho={class:"problem-stack"},fo=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),mo=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),go=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),vo=t("tr",{class:"ps-sw"},[t("td",null,"Operating System")],-1),wo=t("tr",{class:"ps-isa fragment"},[t("td",{style:{"font-weight":"bold"}},"Instruction Set Architecture")],-1),yo=t("tr",{class:"ps-hw fragment"},[t("td",{style:{"font-weight":"bold"}},"Microarchitecture")],-1),xo=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),ko=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),bo=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),Io=[fo,mo,go,vo,wo,yo,xo,ko,bo];function So(s,e){return p(),_("table",ho,Io)}const Mo=g(_o,[["render",So]]),Do=h('<section><h3>Computers in Early Days</h3><ul><li class="fragment">1940 - <a href="https://en.wikipedia.org/wiki/Bombe">Bombe</a></li><li class="fragment">1945 - <a href="https://en.wikipedia.org/wiki/ENIAC">ENIAC</a></li><li class="fragment">1951 - <a href="https://en.wikipedia.org/wiki/UNIVAC">UNIVAC</a></li><li class="fragment">1952 - <a href="https://en.wikipedia.org/wiki/IBM_701">IBM 701</a> (30 were sold in 1953-54)</li><li class="fragment">1954 - <a href="https://en.wikipedia.org/wiki/IBM_650">IBM 650</a> (120 were sold in 1954, and more than 750 orders)</li></ul></section><section><h3>Users stopped building their own machines</h3><h4 class="fragment">Why was IBM so late getting into computers?</h4></section><section><h3>Programmer&#39;s view of IBM 650</h3><ul><li class="fragment">A machine with 44 instructions</li><li class="fragment">Instruction: <code>60 1234 1009</code><ul class="fragment"><li>Load the contents of location <code>1234</code> into the <span class="italic">distribution</span>; put it also into the <span class="italic">upper accumulator</span>; set the <span class="italic">lower accumulator</span> to zero; and then go to the location <code>1009</code> for the next instruction.</li></ul></li></ul></section><section><h3>Computers in mid 50&#39;s</h3><ul><li class="fragment">Hardware was super expensive</li><li class="fragment">Stores were small (1000 words)</li><li class="fragment">Programmer&#39;s view of the machine was inseparable from the actual hardware implementation</li></ul></section><section><h3>Snow White and the Seven Dwarfs (1960s)</h3><ul><li>IBM</li><li>UNIVAC</li><li>GE (General Electric)</li><li>Burroughs</li><li>NCR</li><li>CDC (Control Data Corporation)</li><li>RCA</li><li>Honeywell</li></ul></section><section><h3>Compatibility Problem at IBM</h3><ul><li class="fragment">For engineering and scientific use: 701, 704, 709, ...</li><li class="fragment">For commercial or data processing use: 702, 705, ...</li><li class="fragment">Mid-range business small mainframe: 1400 series</li></ul><h4 class="fragment">They had completely different instruction sets, I/O system, storage, softwares, etc</h4></section><section><h3>IBM System/360</h3><ul><li class="fragment">Announced on April 7, 1964. Delivered between 1965 and 1978.</li><li class="fragment">Introduced a new layer of <span class="strong">abstraction</span> now well known as <span class="text-red-500">ISA</span> (instruction set architecture).</li><li class="fragment">ISA specifies <span class="text-red-500 italic">what</span> hardware provides, not <span class="text-red-500 italic">how</span> it&#39;s implemented.</li><li class="fragment">It was revolutionary and extraodinarily challenging, see <a href="https://en.wikipedia.org/wiki/The_Mythical_Man-Month">The Mythical Man-Month / 人月神话</a></li></ul></section>',7),Co=h('<section><h3>Famous ISAs and Microarchitectures</h3><table><tr><th>x86_64</th><th>ARMv8</th></tr><tr><td><ul><li>Intel 8086 (1978)</li><li>Intel Pentium (1993)</li><li>Intel Core 6th-gen Skylake (2015)</li><li>AMD Zen 4 (2022)</li></ul></td><td><ul><li>Apple Silicon</li><li>Samsung Exynos</li><li>Qualcomm Snapdragon</li></ul></td></tr></table><div>PowerPC, MIPS, RISC-V, SPARC, ...</div></section><section><h3>The Tradeoffs of ISA</h3><ul><li class="fragment">Enables fast innovation in hardware w/ no need to change the software</li><li class="fragment">Commercially successful ISAs last for decades</li></ul></section>',2),No=v({__name:"early-computers",setup(s){return(e,i)=>(p(),_("section",null,[Do,t("section",null,[a(Mo)]),Co]))}}),Lo={},$o=h('<section><h3>Summary</h3><ul><li class="fragment">There&#39;re multiple layers of abstraction in computing.</li><li class="fragment">&quot;We can solve any problem by introducing an extra level of indirection.&quot; -- David J. Wheeler</li><li class="fragment">Most of the time, implementations have trade-offs.</li><li class="fragment">Gaining an understanding of the lower layers can be beneficial.</li></ul></section><section><h3>References</h3><ul style="font-size:32px;"><li>(Open Course) MIT 6.004 Computation Structures</li><li>(Open Course) CMU 18-447 Introduction to Computer Architecture</li><li>(Book) Operating Systems: Design and Implementation, 3e</li><li>(Book) Computer Systems: A Programmer&#39;s Perspective, 3e</li><li>(Link) <a href="https://exclusivearchitecture.com/03-technical-articles-IC-00-table-of-contents.html">How microchips work</a></li><li>(Link) <a href="https://www.computerhistory.org/timeline/">Timeline of Computer History</a></li><li>(Link) <a href="https://www.hanselman.com/blog/whats-the-difference-between-a-console-a-terminal-and-a-shell">What&#39;s the difference between a console, a terminal, and a shell?</a></li><li>(Source) <a href="https://github.com/drendog/Logic-Circuit-Simulator">Logic Circuit Simulator</a></li><li>(Video Game) <a href="https://turingcomplete.game/">Turing Complete</a></li></ul></section><section><h3>Tools Used for this Project</h3><ul style="font-size:32px;"><li>Neovim + Tmux + Zsh</li><li>Node.js + pnpm</li><li>Vue + Vite + TypeScript</li><li>Reveal.js</li><li>timelinejs</li><li>highlight.js</li><li>echars</li><li>Font Awesome + devicons</li><li>diagrams.net (previously draw.io)</li></ul></section><section data-transition="slide-in fade-out"><h3>May the <span class="fragment custom show" data-fragment-index="1">force</span><span class="fragment custom hidden" data-fragment-index="1">SOURCE</span> be with you.</h3></section>',4),Oo=[$o];function Ao(s,e){return p(),_("section",null,Oo)}const To=g(Lo,[["render",Ao]]),Xo="/workshop-bfocm/assets/Heckert_GNU_white-D6Qvg6Gc.svg",Yo=s=>(S("data-v-9c796747"),s=s(),M(),s),Eo=h('<section data-v-9c796747><div class="flex justify-center" data-v-9c796747><img data-src="'+Xo+'" data-v-9c796747></div><h3 data-v-9c796747>GNU = GNU&#39;s Not Unix</h3></section><section data-v-9c796747><h3 data-v-9c796747>GNU is not the beginning of</h3><h3 data-v-9c796747>the free software movement and the hacker culture</h3></section><section data-v-9c796747><h3 data-v-9c796747>The GNU Project&#39;s aim was to</h3><h3 data-v-9c796747>give computer users freedom and control over their computers</h3></section><section data-v-9c796747><h3 data-v-9c796747>Softwares Released by GNU</h3><ul data-v-9c796747><li data-v-9c796747>Emacs, a text editor</li><li data-v-9c796747>Development Toolchain: debugger, parser, linker, and compiler</li><li data-v-9c796747>Unix utilities: ls, grep, awk, make...</li></ul></section><section data-v-9c796747><h3 data-v-9c796747>MINUX (means mini-UNIX)</h3><div data-v-9c796747>Written by Andrew S. Tanenbaum in Netherlands for teaching purpose and released in 1987 without even one line of UNIX source code</div></section><section data-v-9c796747><h3 data-v-9c796747>MINUX vs UNIX</h3><ul data-v-9c796747><li data-v-9c796747>MINUX was written near 17 years after UNIX V1, and nearly 10 years after UNIX V7</li><li data-v-9c796747>Modern, well structured, efficient, and readable</li><li data-v-9c796747>Compatibility with UNIX V7</li><li data-v-9c796747>For <a href="https://en.wikipedia.org/wiki/IBM_Personal_Computer" data-v-9c796747>IBM PC</a></li></ul></section><section data-v-9c796747><h3 data-v-9c796747>Then There came a Finnish Student</h3><div data-v-9c796747>Linux Torvalds</div><div data-v-9c796747>Announced his kernel on Aug 25, 1991</div><div data-v-9c796747>Released Linux 1.0 under <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" data-v-9c796747>GPLv2</a> on Mar 13, 1994</div><div data-v-9c796747>And adopted by the GNU project as its kernel</div></section>',7),jo=Yo(()=>t("h3",null,"Linux Distributions",-1)),Ro={class:"icon-container flex justify-center"},Fo=["data-src"],Po=v({__name:"free-software-movement",setup(s){const e=["archlinux/archlinux-original.svg","centos/centos-original.svg","debian/debian-original.svg","fedora/fedora-original.svg","gentoo/gentoo-original.svg","opensuse/opensuse-original.svg","redhat/redhat-original.svg","ubuntu/ubuntu-original.svg"];return(i,n)=>(p(),_("section",null,[Eo,t("section",null,[jo,t("div",Ro,[(p(),_(X,null,B(e,o=>t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${o}`},null,8,Fo)),64))])])]))}}),Vo=g(Po,[["__scopeId","data-v-9c796747"]]),zo="/workshop-bfocm/assets/BFoCM-java-bytecode-DB21QsSY.svg",Ho=`// event_loop.js
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

`,Uo=`$ node event_loop.js
first
third (while loop)
third (while loop)
third (while loop)
.....
third (while loop)
third (while loop)
second (timeout)
`,U=`#include <stdio.h>  // for printf()
#include <fcntl.h>  // for open() and O_RDWR
#include <unistd.h> // for close()

int main() {
	// Attempt to open /dev/null
	int fd = open("/dev/null", O_RDWR);
	printf("The file discriptor is %d\\n", fd);
	close(fd); // otherwise memory leak
	return 0;
}

`,Bo=`NAME
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
`,Wo=`fs.open(path[, flags[, mode]], callback)

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

`,Go=`os.open(path, flags, mode=0o777, *, dir_fd=None)

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
`,Zo=h('<section><h3>A Glance of High Level</h3><h3>Programming Languages</h3></section><section><h3>New Features</h3><ul><li>Object-oriented programming</li><li>Standard libraries w/ rich features</li><li>Functional programming</li><li>Cross-platform</li><li>Less knowledge about memory or compilation</li></ul></section><section><h3>Java</h3><h4>Write Once, Run Anywhere</h4></section><section><h3>Java Virtural Machine</h3><h4>Another Abstraction</h4><div class="flex justify-center"><img data-src="'+zo+'"></div></section>',4),Jo=t("h3",null,"Languages atop the JVM",-1),qo={class:"flex justify-evenly icon-container items-center"},Qo={class:"flex flex-col items-center"},Ko=["data-src"],tr={class:"text-3xl"},er=h("<section><h3>Some JVM Implementations</h3><table><tr><td>HotSpot</td><td>Open Source</td></tr><tr><td>GraalVM</td><td>Open Source</td></tr><tr><td>OpenJ9</td><td>Open Source</td></tr><tr><td>JRocket</td><td>Proprietary, Discontinued</td></tr><tr><td>Microsoft JVM</td><td>Proprietary, Discontinued</td></tr></table></section><section><h3>Highlights of JVM</h3><ul><li>Platform Independence</li><li>Object-Oriented</li><li>JIT: Just-In-Time compilation</li><li>Security</li><li>Robust Ecosystem</li></ul></section><section data-auto-animate><h3>No Free Lunch</h3><ul><li>Full GC is a Stop-The-World (STW) event</li><li>Generics (J2SE 5.0) / Lambda Expression (Java 8)</li><li>Understanding JVM</li></ul></section><section data-auto-animate><h3>No Free Lunch</h3><div>No only in JVM...</div></section>",4),sr={"data-auto-animate":""},nr=t("h3",null,"Event Loop in Node.js",-1),ir={"data-auto-animate":""},ar=t("h3",null,"Event Loop in Node.js",-1),or=h('<section><h3>General JVM Implementations</h3><table><tr><td></td><td><a href="https://github.com/openjdk/jdk">OpenJDK</a></td><td><a href="https://github.com/oracle/graal">GraalVM</a></td><td><a href="https://github.com/eclipse-openj9/openj9">OpenJ9</a></td></tr><tr><td>Java</td><td>74.6%</td><td>91.6%</td><td>42.5%</td></tr><tr><td>C</td><td>7.2%</td><td>3.7%</td><td>18.8%</td></tr><tr><td>C++</td><td>13.7%</td><td>0.4%</td><td>34.3%</td></tr></table></section><section><h3>Reminisce for a Moment</h3><div>It&#39;s possible to compile C<br>and assembly language togother.</div><div class="fragment">As Java is implemented with C/C++,</div><div class="fragment">is it possible to invoke functions<br>defined in C/C++ from Java, and vice versa?</div></section><section><h3>Yes</h3><div>Java, Python, Node.js, ...</div></section>',3),rr=t("div",null,[f("Now let's take a look at this code for the "),t("span",{class:"text-red-500"},"4th"),f(" time")],-1),lr=t("h3",null,[t("span",{class:"mono"},"open(2)")],-1),dr=t("h3",null,[t("a",{href:"https://nodejs.org/api/fs.html#fsopenpath-flags-mode-callback",class:"mono"},"fs.open()"),f(" in Node.js")],-1),cr=t("h3",null,[t("a",{href:"https://docs.python.org/3/library/os.html#os.open",class:"mono"},"os.open()"),f(" in Python")],-1),ur=h('<section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>C</td><td><ul><li class="fragment">simple syntax</li><li class="fragment">close to hardware</li><li class="fragment">manual memory management</li><li class="fragment">compiled ahead-of-time</li><li class="fragment">operating systems, embedded systems, and system programming</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>C++</td><td><ul><li class="fragment">more complex than C</li><li class="fragment">comparable to C with optimizations and abstractions</li><li class="fragment">manual memory management with RAII, smart pointers and automatic memory management</li><li class="fragment">compiled ahead-of-time</li><li class="fragment">system/software, game, simulations</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Java</td><td><ul><li class="fragment">Object-oriented, high-level</li><li class="fragment">Generally slower than C/C++, but JIT can optimise</li><li class="fragment">Automatic garbage collection</li><li class="fragment">Rich standard library, 3rd party libraries and frameworks</li><li class="fragment">Enterprise applications, web services, Android apps</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Python</td><td><ul><li class="fragment">High-level, readable</li><li class="fragment">Slower than compiled languages (REPL)</li><li class="fragment">Automatic garbage collection</li><li class="fragment">Rich libraries and frameworks for web, data analysis, AI, scientific computing</li><li class="fragment">Web, data science, AI/ML, scripting, rapic prototyping</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Node.js</td><td><ul><li class="fragment">High-level, involving</li><li class="fragment">Generally good for I/O tasks due to its non-blocking, event-driven architecture. Use V8 JIT to compile to bytecode first, then compile to machine code.</li><li class="fragment">Automatic garbage collection from V8</li><li class="fragment">Large ecosystem, several package managers</li><li class="fragment">Web, RESTful APIs, microservices</li></ul></td></tr></table></section><section data-auto-animate><h3>A Quick Comparison of Languages</h3><table><tr><td>Rust</td><td><ul><li class="fragment">A young language with complex syntax</li><li class="fragment">Comparable to C/C++ w/ safety guarantees</li><li class="fragment">Compile ahead-of-time</li><li class="fragment">Without GC through its ownership and borrowing system</li><li class="fragment">System programming, web assembly, embedded systems</li></ul></td></tr></table></section>',6),pr=v({__name:"high-level-languages",setup(s){const e=[{name:"Scala",icon:"scala/scala-original.svg"},{name:"Kotlin",icon:"kotlin/kotlin-original.svg"},{name:"Clojure",icon:"clojure/clojure-original.svg"},{name:"Groovy",icon:"groovy/groovy-original.svg"},{name:"JRuby",icon:"ruby/ruby-original.svg"},{name:"JPython",icon:"python/python-original.svg"}];return(i,n)=>{const o=E("highlightjs");return p(),_("section",null,[Zo,t("section",null,[Jo,t("div",qo,[(p(),_(X,null,B(e,l=>t("div",Qo,[t("img",{"data-src":`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${l.icon}`},null,8,Ko),t("span",tr,tt(l.name),1)])),64))])]),er,t("section",sr,[nr,a(o,{language:"javascript",autodetect:!1,code:c(Ho)},null,8,["code"])]),t("section",ir,[ar,a(o,{language:"plaintext",autodetect:!1,code:c(Uo)},null,8,["code"])]),or,t("section",null,[rr,a(o,{language:"c",autodetect:!1,code:c(U)},null,8,["code"])]),t("section",null,[lr,a(o,{language:"plaintext",autodetect:!1,code:c(Bo)},null,8,["code"])]),t("section",null,[dr,a(o,{language:"plaintext",autodetect:!1,code:c(Wo)},null,8,["code"])]),t("section",null,[cr,a(o,{language:"plaintext",autodetect:!1,code:c(Go)},null,8,["code"])]),ur])}}}),_r="/workshop-bfocm/assets/IMG_2090-B24t_2MV.jpeg",hr="/workshop-bfocm/assets/BFoCM-batch-system-DFBbu-04.png",fr="/workshop-bfocm/assets/Pdp7-oslo-2005-c5N3X5Pf.jpeg",mr="/workshop-bfocm/assets/ken-and-den-C8zCG6un.jpg",gr="/workshop-bfocm/assets/Unix_history-simple-BTBq0WRC.svg",vr="/workshop-bfocm/assets/BFoCM-programming-against-hw-B98I5pHn.svg",rt="/workshop-bfocm/assets/BFoCM-programming-against-os-CzGtGIEB.svg",wr={},yr={class:"problem-stack"},xr=t("tr",{class:"ps-sw"},[t("td",null,"Problem")],-1),kr=t("tr",{class:"ps-sw"},[t("td",null," ")],-1),br=t("tr",{class:"ps-sw"},[t("td",null,"Program/Language")],-1),Ir=t("tr",{class:"ps-sw"},[t("td",{style:{"font-weight":"bold"}},[f("Runtime System"),t("br"),f("(VM, OS, ...)")])],-1),Sr=t("tr",{class:"ps-isa"},[t("td",null,"Instruction Set Architecture")],-1),Mr=t("tr",{class:"ps-hw"},[t("td",null,"Microarchitecture")],-1),Dr=t("tr",{class:"ps-hw"},[t("td",null,"Logic")],-1),Cr=t("tr",{class:"ps-hw"},[t("td",null,"Circuits")],-1),Nr=t("tr",{class:"ps-hw"},[t("td",null,"Electrons")],-1),Lr=[xr,kr,br,Ir,Sr,Mr,Dr,Cr,Nr];function $r(s,e){return p(),_("table",yr,Lr)}const Or=g(wr,[["render",$r]]),Ar=h('<section><img data-src="'+_r+'"></section><section><h3>Batch Systems in Mid 1950s</h3><div class="flex justify-center"><img data-src="'+hr+'"></div><div class="italic text-lg">Source: A. S. Tanenbaum, Operating Systems</div></section><section><h3>A Few New Technologies in Early 1960s</h3><ul><li class="fragment">Hard Drive</li><li class="fragment">Multiprogramming w/ memory partitions</li><li class="fragment">MIT: CTSS (Compatible Time-Sharing System)</li><li class="fragment">Minicomputers, smaller but less than 5% of a 7094</li></ul></section><section><h3>MULTICS</h3><h4>MULTiplexed Information and Computing Service</h4><ul><li>MIT, Bell Labs, and GE</li><li>A machine (a huge mainframe) to support hundreds of simultaneous timesharing users</li><li>Was written in PL/I, but the <span class="strong">compiler</span> was years late</li></ul></section><section><div><a href="https://en.wikipedia.org/wiki/Ken_Thompson_(computer_programmer)">Ken Thompson</a> from Bell Labs</div><div>wrote a stripped-down, one-user version of MULTICS</div><div>on a small DEC PDP-8 minicomputer</div></section><section><img data-src="'+fr+'"></section><section><h3>K. Thompson &amp; D. Ritchie at PDP-11</h3><a href="https://www.bell-labs.com/usr/dmr/www/picture.html"><img data-src="'+mr+'"></a></section><section><h3>UNIX</h3><ul><li class="fragment">Originally named Unics, Uniplexed Information and Computing Service, a pun on Multics</li><li class="fragment">Originally written in assembly language, Version 4 was rewritten in <span class="font-bold text-red-500">C</span> in 1973</li><li class="fragment">In 1973, AT&amp;T licensed Version 5 Unix to educational institutions</li><li class="fragment">The first <span class="font-bold text-red-500">port</span> of Unix to another platform in 1977</li></ul></section><section><h3>Where is UNIX</h3></section><section><h3>The UNIX Family Tree</h3><a href="https://en.wikipedia.org/wiki/History_of_Unix"><img data-src="'+gr+'"></a></section><section><h3>Key Aspects of UNIX</h3><ul><li class="fragment">Simplicity</li><li class="fragment">Portability w/ the C programming language, easily adapted on different platforms</li><li class="fragment">Shell, able to interactive w/ the system</li><li class="fragment">Pipelines</li><li class="fragment">Development Environment</li></ul></section><section><div class="flex justify-center"><img data-src="'+vr+'"></div></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+rt+'"></div></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+rt+'"></div><h3>Processes vs Program</h3><ul class="text-3xl"><li class="fragment">A program is a collection of binary instructions</li><li class="fragment">A process is an instance of a program that is being executed, including program code and states (registers, memory and other resources)</li><li class="fragment">The <span class="font-bold text-red-500">OS Kernel</span> is a process with special privileges</li></ul></section><section data-auto-animate><div class="flex justify-center"><img data-src="'+rt+'"></div><h3>Programmer&#39;s View of OS</h3><ul class="text-3xl"><li class="fragment"><span class="strong">Protection</span> and Privacy: Process cannot access each other&#39;s data</li><li class="fragment"><span class="strong">Abstraction</span>: OS hides details of underlying</li><li class="fragment"><span class="strong">Resource Management</span>: OS controls how processes share hardware</li></ul></section>',15),Tr={"data-auto-animate":"",style:{"margin-bottom":"50px"}},Xr=t("h3",null,"Virtual Machines",-1),Yr=t("div",{class:"text-4xl"},"A New Layer of Abstraction",-1),Er=h('<section data-auto-animate><h3>Virtual Machines</h3><ul><li class="fragment">The OS gives a Virtual Machine to each process</li><li class="fragment">Each process believes it runs on its own machine, e.g. processor, memory, I/O, files ...</li><li class="fragment">... but this machine doesn&#39;t exist in physical hardware</li><li class="fragment">A Virtual Machine is an <span class="font-bold text-red-500">emulation</span> of a computer system</li></ul></section>',1),jr=v({__name:"operating-system",setup(s){return(e,i)=>(p(),_("section",null,[Ar,t("section",Tr,[Xr,Yr,a(Or,{class:"text-2xl"})]),Er]))}}),Rr="/workshop-bfocm/assets/man-printf(3)-DAhUur7r.png",Fr="/workshop-bfocm/assets/man-open(2)-5seNUdi_.png",Pr="/workshop-bfocm/assets/man-null(4)-DZ4_gdcU.png",Vr={"data-auto-animate":""},zr={"data-auto-animate":""},Hr=t("h3",null,"Imagine You're a System Developer",-1),Ur=t("div",null,[f("How to use "),t("span",{class:"mono"},"open()"),f(" and "),t("span",{class:"mono"},"printf()"),f("?")],-1),Br=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man3/printf.3.html"},[t("img",{"data-src":Rr})])],-1),Wr=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man2/open.2.html"},[t("img",{"data-src":Fr})])],-1),Gr=t("div",{class:"flex justify-center"},[t("a",{href:"https://man7.org/linux/man-pages/man4/null.4.html"},[t("img",{"data-src":Pr})])],-1),Zr=h("<section><h3>Common Man Page Sections</h3><table><tr><th>No.</th><th>Description</th></tr><tr><td>1</td><td>General commands</td></tr><tr><td>2</td><td>System calls</td></tr><tr><td>3</td><td>Library functions, e.g. the C standard library</td></tr><tr><td>8</td><td>System administration commands and daemons</td></tr></table></section>",1),Jr=t("div",null,"Now let's take a look at this code again",-1),qr=h('<section data-auto-animate><h3>POSIX</h3><div>Portable Operating System Interface</div></section><section data-auto-animate><h3>POSIX</h3><ul><li class="fragment">It&#39;s a family of standards specified by IEEE.</li><li class="fragment">It defined APIs for Unix-like operating systems.</li><li class="fragment">Not all operating systems claim full compliance with POSIX standards.</li><li class="fragment">But it allows developers to write applications that could run on any POSIX-compliant system without significant modifications.</li></ul></section>',2),Qr=`$ ./a.out
The file discriptor is 3`,Kr=v({__name:"posix",setup(s){return(e,i)=>{const n=E("highlightjs");return p(),_("section",null,[t("section",Vr,[a(n,{language:"c",autodetect:!1,code:c(U)},null,8,["code"]),a(n,{language:"plaintext",autodetect:!1,code:Qr})]),t("section",zr,[Hr,a(n,{language:"c",autodetect:!1,code:c(U)},null,8,["code"]),Ur]),t("section",null,[a(n,{language:"plaintext",autodetect:!1,code:"man 3 printf"}),Br]),t("section",null,[a(n,{language:"plaintext",autodetect:!1,code:"man 2 open"}),Wr]),t("section",null,[a(n,{language:"plaintext",autodetect:!1,code:"man 4 null"}),Gr]),Zr,t("section",null,[Jr,a(n,{language:"c",autodetect:!1,code:c(U)},null,8,["code"])]),qr])}}}),tl=`#include <stdio.h>

int main() {
	fprintf(stdout, "hello world\\n");
	return 0;
}

`,el=`Console.WriteLine("This message is logged to stdout");
Console.Error.WriteLine("This error is logged to stderr");
`,sl=`System.out.println("This message is logged to stdout");
System.err.println("This error is logged to stderr");
`,nl=`console.log('This message is logged to stdout');
console.error('This error is logged to stderr');
`,il=`print("This message is logged to stdout")

import sys
sys.stderr.write("This error is logged to stderr\\n")
print("This error is logged to stderr", file=sys.stderr)
`,D=s=>(S("data-v-f8fee562"),s=s(),M(),s),al=D(()=>t("div",null,"Now let's take a look at this code for the third time",-1)),ol=D(()=>t("section",null,[t("h3",null,"The Default Streams"),t("ul",null,[t("li",null,[f("0 - "),t("code",null,"stdin")]),t("li",null,[f("1 - "),t("code",null,"stdout")]),t("li",null,[f("2 - "),t("code",null,"stderr")])])],-1)),rl={class:"column-2"},ll=D(()=>t("section",null,[t("h3",null,"Do You Remember the Python Workshop?")],-1)),dl=D(()=>t("div",null,"C#",-1)),cl=D(()=>t("div",null,"Java",-1)),ul=D(()=>t("div",null,"JavaScript",-1)),pl=D(()=>t("div",null,"Python",-1)),_l=D(()=>t("div",null,"You might have also seen this from somewhere",-1)),hl=D(()=>t("ul",null,[t("li",{class:"fragment"},[t("code",null,"`./a.out`"),f(" execute the file a.out in the current directory")]),t("li",{class:"fragment"},[t("code",null,"`> out.txt`"),f(" redirect the stdout stream to the file out.txt")]),t("li",{class:"fragment"},[t("code",null,"`2>/dev/null`"),f(" redirect the stderr stream to the file /dev/null")]),t("li",{class:"fragment"},[t("code",null,"`&`"),f(" execute the file in the background")])],-1)),fl=D(()=>t("section",null,[t("div",null,[f("Now you see a program can get data from "),t("code",null,"stdin"),f(" and return data to "),t("code",null,"stdout")]),t("div",{class:"fragment"},"What if I want to use the output of a program as the input of another?")],-1)),ml=D(()=>t("h3",null,"Pipe",-1)),gl=`$ ./a.out
The file discriptor is 3`,vl=v({__name:"printf",setup(s){return(e,i)=>{const n=E("highlightjs");return p(),_("section",null,[t("section",null,[al,a(n,{language:"c",autodetect:!1,code:c(U)},null,8,["code"]),a(n,{language:"plaintext",autodetect:!1,code:gl})]),ol,t("section",null,[t("div",rl,[t("div",null,[a(n,{language:"c",autodetect:!1,code:c(R)},null,8,["code"])]),t("div",null,[a(n,{language:"c",autodetect:!1,code:c(tl)},null,8,["code"])])])]),ll,t("section",null,[dl,a(n,{language:"csharp",autodetect:!1,code:c(el)},null,8,["code"]),cl,a(n,{language:"java",autodetect:!1,code:c(sl)},null,8,["code"])]),t("section",null,[ul,a(n,{language:"javascript",autodetect:!1,code:c(nl)},null,8,["code"]),pl,a(n,{language:"python",autodetect:!1,code:c(il)},null,8,["code"])]),t("section",null,[_l,a(n,{language:"bash",autodetect:!1,code:"./a.out > out.txt 2>/dev/null &"}),hl]),fl,t("section",null,[ml,a(n,{language:"bash",autodetect:!1,code:'ls | grep "foo" | grep "bar"'})])])}}}),wl=g(vl,[["__scopeId","data-v-f8fee562"]]),yl={},xl={class:"problem-stack"},kl=t("tr",{class:"ps-sw fragment","data-fragment-index":"1"},[t("td",null,"Problem")],-1),bl=t("tr",{class:"ps-sw fragment","data-fragment-index":"2"},[t("td",null,"Program/Language")],-1),Il=t("tr",{class:"ps-sw fragment","data-fragment-index":"3"},[t("td",null,"Operating System")],-1),Sl=t("tr",{class:"ps-hw fragment","data-fragment-index":"5"},[t("td",null,"Circuits")],-1),Ml=t("tr",{class:"ps-hw fragment","data-fragment-index":"4"},[t("td",null,"Electrons")],-1),Dl=[kl,bl,Il,Sl,Ml];function Cl(s,e){return p(),_("table",xl,Dl)}const Nl=g(yl,[["render",Cl]]);Yt([Et,jt,Rt,Ft]);const Nt=s=>(S("data-v-ec1b5bfa"),s=s(),M(),s),Ll=Nt(()=>t("h3",null,"Signal: Analog vs Digital",-1)),$l={class:"bfocm-column-3"},Ol={class:"fragment"},Al={class:"fragment"},Tl={class:"fragment"},Xl=Nt(()=>t("p",{class:"fragment"},"Noise resistance, data compression, error detection and correction, cost efficiency...",-1)),lt="signal-analog-digital",Yl=v({__name:"signal-analog-digital",setup(s){const e=kt("dark_mode"),i=y(null),n=y(null),o=y(null);let l,r,u,x=!1;function V(){l&&l.dispose(),r&&r.dispose(),u&&u.dispose(),l=null,r=null,u=null,x=!1}function k(){V(),x=!0,l=nt(i.value,e.value?"dark":""),l.setOption({title:{text:"Analog (ideal)"},xAxis:{name:"t"},yAxis:{name:"V"},series:[{type:"line",data:[[0,0],[1,5]]}]}),r=nt(n.value,e.value?"dark":""),r.setOption({title:{text:"Digital (ideal)"},xAxis:{name:"t"},yAxis:{name:"V"},series:[{type:"line",data:[[0,0],[1,0],[1,5],[2,5]]}]}),u=nt(o.value,e.value?"dark":""),u.setOption({title:{text:"Real"},xAxis:{name:"t"},yAxis:{name:"V"},series:[{type:"line",data:[[0,0],[.25,1.5],[.5,1],[.75,1.5],[1,5],[1.25,4.8],[1.5,3],[1.75,4],[2,4.5]]}]})}return Y(()=>{q({id:lt,constructor:k,destructor:V})}),J(()=>{Q(lt)}),Pt(e,async()=>{x&&k()}),(C,T)=>(p(),_("section",{id:lt},[Ll,t("div",$l,[t("div",Ol,[t("div",{class:"bfocm-chart",ref_key:"refChartAnalog",ref:i},null,512)]),t("div",Al,[t("div",{class:"bfocm-chart",ref_key:"refChartDigitalR",ref:o},null,512)]),t("div",Tl,[t("div",{class:"bfocm-chart",ref_key:"refChartDigitalI",ref:n},null,512)])]),Xl]))}}),El=g(Yl,[["__scopeId","data-v-ec1b5bfa"]]),jl=h('<section><h2>Brief History of the Digital<br>Programmable Machines</h2></section><section><h3>Quick Survey: When Were You Born</h3><ul><li class="fragment">~1981</li><li class="fragment">1980~1984</li><li class="fragment">1985~1989</li><li class="fragment">1990~1994</li><li class="fragment">1995~1999</li><li class="fragment">2000s~</li></ul></section><section><h3>When You Try to Learn Programming</h3><ul><li>Weird syntaxes and code structures</li><li>Strange concepts like stack / heap / threads</li><li>What could be done with a programming language</li><li>How to improve programming skills</li><li>How to learn other languages fast</li><li>And why some languages look the same</li><li>What happens underneath</li><li>Should I learn Linux and command line tools</li></ul></section><section><h3>Fasten Your Seatbelt</h3><h4>We&#39;ll see patterns over and over again. Déjà vu.</h4></section>',4),Rl=v({__name:"prologue",setup(s){return(e,i)=>(p(),_("section",null,[jl,t("section",null,[a(Nl)]),a(El)]))}}),Fl="/workshop-bfocm/assets/premium_photo-1679255807252-3c568399dfc2-DQyoh-xX.avif",Pl="/workshop-bfocm/assets/Tower_of_Hanoi-CluCuWxr.jpeg",Vl="/workshop-bfocm/assets/BFoCM-memory-hierarchy-De5H_NOY.png",zl=`#include <stdio.h>  // printf
#include <stdlib.h> // malloc and free

int main() {
	int *x = (int *) malloc(sizeof(int));
	printf("The address of x  is %p\\n", &x);
	printf("The address of *x is %p\\n",  x);
	free(x);
	return 0;
}

`,Hl=`#include <stdio.h> // printf

int main() {
	int x;
	printf("The size of x is %ld byte(s)\\n", sizeof(int));
	printf("The address of x is %p\\n", &x);
	return 0;
}

`,Ul=`#include <stdio.h>
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

`,Bl=`#include <stdio.h>
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

`,Wl=`#include <stdio.h>
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

`,Gl=`#include <stdio.h>

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

`,Zl=`$ ./addr_var_heap
The address of x  is 0x7ffedb7516c0
The address of *x is 0x61f42dfc92a0
`,Jl=`$ ./addr_var_recursive
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
`,ql=`$ ./addr_var_stack
The size of x is 4 byte(s)
The address of x is 0x7ffde0c2a054
`,Ql=`$ ./array
The address of a    is 0x7ffdbcba285c
The address of a[0] is 0x7ffdbcba285c
The address of a[1] is 0x7ffdbcba2860
The address of a[2] is 0x7ffdbcba2864
`,Kl=`$ ./array_uninitialized
The value of a[0] is 0
The value of a[1] is 4096
The value of a[2] is 0
`,td=`$ ./pointer
The address of x is 0x7fff90062e4c
The address of p is 0x7fff90062e50
The value   of p is 0x7fff90062e4c
The value p points to is 42
`,A=s=>(S("data-v-a10a5439"),s=s(),M(),s),ed=A(()=>t("section",null,[t("div",null,"With C you don't have to deal with registers or instructions."),t("div",{class:"fragment"},"But you still need to take care of memory."),t("div",{class:"fragment"},"Let's get hands dirty.")],-1)),sd=A(()=>t("h3",null,"Address of Variable",-1)),nd=A(()=>t("h3",null,"Hi, Pointer",-1)),id={class:"flex"},ad={class:"w-1/2"},od={class:"w-1/2"},rd={"data-auto-animate":""},ld=A(()=>t("h3",null,"Hi, Array",-1)),dd={class:"flex"},cd={class:"w-1/2"},ud={class:"w-1/2"},pd={"data-auto-animate":""},_d=A(()=>t("h3",null,"Hi, Array",-1)),hd={class:"flex"},fd={class:"w-1/2"},md={class:"w-1/2"},gd=A(()=>t("h3",null,"Allocate and Free Dynamic Memory",-1)),vd={"data-auto-animate":""},wd=A(()=>t("h3",null,"Let's Make It SPICER",-1)),yd={"data-auto-animate":""},xd=A(()=>t("h3",null,"Let's Make It SPICER",-1)),kd=h('<section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Hi Stack</h3><div class="flex justify-center" data-v-a10a5439><img data-src="'+Fl+'" data-v-a10a5439></div></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Hi Stack</h3><div data-v-a10a5439>Tower of Hanoi</div><div class="flex justify-center" data-v-a10a5439><img data-src="'+Pl+'" data-v-a10a5439></div><div class="fragment" data-v-a10a5439>First-In-Last-Out (or Last-In-First-Out)</div></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Memory Hierarchy</h3><img data-src="'+Vl+'" data-v-a10a5439></section><section data-auto-animate data-v-a10a5439><h3 data-v-a10a5439>Memory Hierarchy</h3><table class="memory-hierarchy" data-v-a10a5439><tr data-v-a10a5439><td style="text-align:right;" data-v-a10a5439>0.5ns</td><td data-v-a10a5439>L1 Cache</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>0.5s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>7ns</td><td data-v-a10a5439>L2 Cache</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>7s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>100ns</td><td data-v-a10a5439>DRAM</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>100s</td></tr><tr data-v-a10a5439><td data-v-a10a5439>150µs</td><td data-v-a10a5439>SSD</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>1.7 days</td></tr><tr data-v-a10a5439><td data-v-a10a5439>10ms</td><td data-v-a10a5439>HDD</td><td class="fragment" data-fragment-index="1" data-v-a10a5439>16.5 weeks</td></tr></table></section><section data-v-a10a5439><h3 data-v-a10a5439>Stack</h3><ul style="font-size:30px;" data-v-a10a5439><li class="fragment" data-v-a10a5439>When a function is called, a block is reserved on the top of stack for local variables and some bookkeeping data.</li><li class="fragment" data-v-a10a5439>When that function returns, the block becomes unused and can be reused for another function call.</li><li class="fragment" data-v-a10a5439>In most computer architectures, there is a special register known as the <span class="text-red-500" data-v-a10a5439>stack pointer</span> register.</li><li class="fragment" data-v-a10a5439>The most recently used data (i.e. the data on the top of the stack) is likely to be the data needed next, it tends to stay in the CPU cache.</li></ul></section><section data-v-a10a5439><h3 data-v-a10a5439>Heap</h3><ul style="font-size:30px;" data-v-a10a5439><li class="fragment" data-v-a10a5439>Is another region of memory managed by the operating system for dynamic memory allocation. (<code data-v-a10a5439>`malloc()` / `calloc()` / `realloc()`</code>)</li><li class="fragment" data-v-a10a5439>The compiler needs to know how much memory to allocate in a function, so you can&#39;t declare an array of unknown size on the stack.</li><li class="fragment" data-v-a10a5439>Sometime you also need to use a space to keep data for longer time the function in which it&#39;s created.</li><li class="fragment" data-v-a10a5439>Don&#39;t forget to call <code data-v-a10a5439>`free()`</code>, otherwise it would cause memory leak.</li></ul></section><section data-v-a10a5439><h3 data-v-a10a5439>Now You May Have a Guess</h3><h3 data-v-a10a5439>of Stack Overflow</h3></section>',7),bd=v({__name:"stack-heap",setup(s){return(e,i)=>{const n=E("highlightjs");return p(),_("section",null,[ed,t("section",null,[sd,a(n,{language:"c",autodetect:!1,code:c(Hl)},null,8,["code"]),a(n,{language:"plaintext",autodetect:!1,code:c(ql)},null,8,["code"])]),t("section",null,[nd,t("div",id,[t("div",ad,[a(n,{language:"c",autodetect:!1,code:c(Gl)},null,8,["code"])]),t("div",od,[a(n,{language:"plaintext",autodetect:!1,code:c(td)},null,8,["code"])])])]),t("section",rd,[ld,t("div",dd,[t("div",cd,[a(n,{language:"c",autodetect:!1,code:c(Bl)},null,8,["code"])]),t("div",ud,[a(n,{language:"plaintext",autodetect:!1,code:c(Ql)},null,8,["code"])])])]),t("section",pd,[_d,t("div",hd,[t("div",fd,[a(n,{language:"c",autodetect:!1,code:c(Wl)},null,8,["code"])]),t("div",md,[a(n,{language:"plaintext",autodetect:!1,code:c(Kl)},null,8,["code"])])])]),t("section",null,[gd,a(n,{language:"c",autodetect:!1,code:c(zl)},null,8,["code"]),a(n,{language:"plaintext",autodetect:!1,code:c(Zl)},null,8,["code"])]),t("section",vd,[wd,a(n,{language:"c",autodetect:!1,code:c(Ul)},null,8,["code"])]),t("section",yd,[xd,a(n,{language:"plaintext",autodetect:!1,code:c(Jl)},null,8,["code"])]),kd])}}}),Id=g(bd,[["__scopeId","data-v-a10a5439"]]),Sd="/workshop-bfocm/assets/1678948976_14529e3278_c-D5NwS9gj.jpg",Md="/workshop-bfocm/assets/3281139507_f56091fa84_z-CK7TuODw.jpg",Dd="/workshop-bfocm/assets/DEC_VT100_terminal-B822DIAI.jpg",Cd="/workshop-bfocm/assets/image_e3c2af63-3682-44c6-89b3-4c7d09f0fcf4-2TTtwk0m.png",Nd={},Ld=h('<section><ul><li>Terminals?</li><li>Consoles?</li><li>Shells?</li><li>Terminal Emulators?</li></ul></section><section><h3>Terminals</h3><div class="flex justify-center"><a href="https://www.flickr.com/photos/16057786@N00/1678948976"><img data-src="'+Sd+'"></a></div></section><section><h3>Shells</h3><ul class="text-4xl"><li>The kernel of an operating system manages hardwares.</li><li>A shell provides an interface to interact with the kernel indirectly.</li></ul></section><section><h3>Notable Shells</h3><ul><li class="fragment">Thompson shell - 1971, Ken Thompson</li><li class="fragment">Bourne shell (sh) - 1979, Stephen Bourne</li><li class="fragment">Bourne-Again SHell (bash) - 1989, Brian Fox</li><li class="fragment">C shell (csh) - 1978, Bill Joy (BSD, vi, Sun Microsystems, Java, SPARC, Solaris, ...)</li><li class="fragment">Powershell - 2006, Microsoft</li><li class="fragment">Z shell (zsh) - 1990, Paul Falstad</li></ul></section><section><h3>Consoles</h3><div class="flex justify-center"><a href="https://www.flickr.com/photos/ajmexico/3281139507/"><img data-src="'+Md+'"></a></div></section><section><div class="flex justify-center"><a href="https://en.wikipedia.org/wiki/VT100"><img data-src="'+Dd+'"></a></div></section><section><h3>Pseudoterminal</h3><ul><li>Remote logins (telnet, ssh)</li><li>Hardware terminals are less and less</li></ul></section><section><div class="flex justify-center"><img data-src="'+Cd+'"></div></section><section><h3>Notable Terminal Emulators</h3><ul><li><a href="https://hyper.is/">Hyper</a></li><li><a href="https://conemu.github.io/">ConEmu</a></li><li><a href="https://en.wikipedia.org/wiki/PuTTY">PuTTY</a></li><li><a href="https://apps.microsoft.com/detail/9n0dx20hk701">Windows Terminal</a></li><li><a href="https://alacritty.org/">Alacritty</a></li></ul><div>Yet another GUI application</div><div>Take a try or watch tutorials</div></section>',9),$d=[Ld];function Od(s,e){return p(),_("section",null,$d)}const Ad=g(Nd,[["render",Od]]),Td="/workshop-bfocm/assets/BFoCM-von-neumann-computer-C3DFUaq3.svg",Xd="/workshop-bfocm/assets/BFoCM-von-neumann-computer-anatomy-CAf57Qs2.svg",Yd="/workshop-bfocm/assets/BFoCM-von-neumann-computer-loop-CpzOQyFq.svg",Lt=s=>(S("data-v-63872613"),s=s(),M(),s),Ed=h('<section data-auto-animate data-auto-animate-id="one" data-v-63872613><h3 data-v-63872613>Main Memory</h3><h4 data-v-63872613>(Random Access Memory)</h4><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Registers are inside processors, built with logic gates just like ALUs and other components.</li><li class="fragment" data-v-63872613>Registers are super fast, but can only be used to store a small number of data elements.</li><li class="fragment" data-v-63872613>Main memory is an array of bits, organized in <span class="mono italic" data-v-63872613>W</span> words of <span class="mono italic" data-v-63872613>N</span> bits each.</li><li class="fragment" data-v-63872613>Typically <span class="mono italic" data-v-63872613>W</span> is power of 2 (<span class="mono" data-v-63872613>W = 2<sup data-v-63872613>k</sup></span>), e.g. W = 8 (k = 3 address bits), N = 32 bits per word.</li><li class="fragment" data-v-63872613>Can read from and write to individual words.</li><li class="fragment" data-v-63872613>Many possible implementations.</li></ul></section><section data-auto-animate data-auto-animate-id="one" data-v-63872613><h3 data-v-63872613>Main Memory</h3><h4 data-v-63872613>(Random Access Memory)</h4><table class="text-3xl" data-v-63872613><tr data-v-63872613><th class="text-center" data-v-63872613>Addr.</th><th class="text-center" data-v-63872613>Value</th></tr><tr data-v-63872613><td class="mono" data-v-63872613>000</td><td class="mono" data-v-63872613>11001001 01010001 10001111 01110011</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>001</td><td class="mono" data-v-63872613>01011000 01110001 10101101 11010001</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>010</td><td class="mono text-center" data-v-63872613>...</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>...</td><td class="mono text-center" data-v-63872613>...</td></tr><tr data-v-63872613><td class="mono" data-v-63872613>111</td><td class="mono" data-v-63872613>10000100 01001111 11100100 00001000</td></tr></table></section><section data-auto-animate data-auto-animate-id="two" data-v-63872613><h3 data-v-63872613>Registers vs Memory</h3><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Typically variables live in memory.</li><li class="fragment" data-v-63872613>Registers hold temporary values or values that we need to use repeatedly.</li><li class="fragment" data-v-63872613>ALU operations work on registers only.</li><li class="fragment" data-v-63872613>To operate with memory variables: <ul data-v-63872613><li data-v-63872613>Load them into a register.</li><li data-v-63872613>Compute on them.</li><li data-v-63872613>Store the results back to memory.</li></ul></li></ul></section>',3),jd={"data-auto-animate":"","data-auto-animate-id":"two"},Rd=Lt(()=>t("h3",null,"Registers vs Memory",-1)),Fd={class:"flex justify-center items-center"},Pd=h('<div class="w-1/2" data-v-63872613><ul data-v-63872613><li class="mono" data-v-63872613>0x1000: n</li><li class="mono" data-v-63872613>0x1004: r</li><li class="mono" data-v-63872613>0x1008: x</li><li class="mono" data-v-63872613>0x100C: y</li></ul></div>',1),Vd={class:"w-1/2"},zd={class:"fragment"},Hd={class:"fragment"},Ud={"data-auto-animate":"","data-auto-animate-id":"three"},Bd=Lt(()=>t("h3",null,"von Neumann Computer",-1)),Wd={class:"flex items-center"},Gd=h('<div data-v-63872613><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613>Also called stored-program computer</li><li class="fragment" data-v-63872613>Express program as a sequence of <span class="strong" data-v-63872613>coded instructions</span></li><li class="fragment" data-v-63872613>Memory holds both data and instructions</li><li class="fragment" data-v-63872613>CPU fetches, interprets, and executes successive instructions of the program</li></ul></div>',1),Zd=h('<section data-auto-animate data-auto-animate-id="three" data-v-63872613><h3 data-v-63872613>von Neumann Computer</h3><div class="flex flex-col items-center" data-v-63872613><img data-src="'+Xd+'" data-v-63872613><ul class="text-3xl" data-v-63872613><li class="fragment" data-v-63872613><span class="strong" data-v-63872613>Instructions</span> coded as binary data</li><li class="fragment" data-v-63872613><span class="strong" data-v-63872613>Program Counter</span>, or PC, a special register, stores the address of the instruction to be executed</li><li class="fragment" data-v-63872613>Decode the instruction, and generate control signals for datapath</li></ul></div></section><section data-auto-animate data-auto-animate-id="three" data-v-63872613><h3 data-v-63872613>von Neumann Computer</h3><div class="flex justify-center" data-v-63872613><img data-src="'+Yd+'" data-v-63872613></div><div class="text-3xl text-left" data-v-63872613><div class="fragment mt-6" data-v-63872613>Instructions are the fundamental unit of work.</div><div class="fragment mt-6" data-v-63872613>Each instruction specifies: <ul data-v-63872613><li data-v-63872613>an operation (also called <span class="strong" data-v-63872613>opcode</span>) to be performed,</li><li data-v-63872613>source and destination <span class="strong" data-v-63872613>operands</span>.</li></ul></div><div class="fragment mt-6" data-v-63872613>By default, the next PC is current PC + size of current instruction, unless the instruction says otherwise. <span class="fragment" data-v-63872613><span class="strong" data-v-63872613>guess?</span></span></div></div></section><section data-v-63872613><h3 data-v-63872613>Your Own Programmable Machine</h3><ul data-v-63872613><li class="fragment" data-v-63872613>Now you can design your own CPU with logic gates. <span class="fragment" data-v-63872613>Theoretically.</span></li><li class="fragment" data-v-63872613>And you can write programs to run on your own CPU. <span class="fragment" data-v-63872613>In Binary.</span></li><li class="fragment" data-v-63872613>However it&#39;s too tedious to write programs directly in binary.</li><li class="fragment" data-v-63872613>So assembly language was created, it looks like <code data-v-63872613>add x1, x2, x3</code> and then would be translated by the <span class="strong" data-v-63872613>assemblers</span> into binary code.</li></ul></section>',3),Jd=`int x, y;
y = x - 37;`,qd=`R1 <- Mem[0x1008]
R1 <- R1 - 37`,Qd=v({__name:"von-neumann-architecture",setup(s){const e=kt("open_common_modal"),i=y(null);function n(){e.open_common_modal(i.value.outerHTML)}return(o,l)=>{const r=E("highlightjs");return p(),_("section",null,[Ed,t("section",jd,[Rd,t("div",Fd,[Pd,t("div",Vd,[t("div",zd,[a(r,{language:"c",autodetect:!1,code:Jd})]),t("div",Hd,[a(r,{language:"plaintext",autodetect:!1,code:qd})])])])]),t("section",Ud,[Bd,t("div",Wd,[Gd,t("div",{class:"fragment",onClick:n},[t("img",{ref_key:"vNCImg",ref:i,"data-src":Td},null,512)])])]),Zd])}}}),Kd=g(Qd,[["__scopeId","data-v-63872613"]]),tc=s=>(S("data-v-f3549cef"),s=s(),M(),s),ec={class:"bfocm-toolbar"},sc={ref:"revealEl",class:"reveal"},nc={class:"slides"},ic=tc(()=>t("img",{src:bt},null,-1)),ac=["innerHTML"],oc=v({__name:"App",setup(s){const e=y(!0);_t("dark_mode",e);const i=Vt(()=>`reveal-root-theme-${e.value?"black":"white"}`),n=ht(()=>mt(()=>import("./Timeline-Crzy0I19.js"),__vite__mapDeps([0,1,2]))),o=ht(()=>mt(()=>import("./Modal-DWZORtHx.js"),__vite__mapDeps([3,1,4]))),l=y(null),r=y(null),u=y(null);Y(()=>{const z=new zt({hash:!1});z.initialize({maxScale:1,minScale:1,slideNumber:!0,plugins:[]}),z.on("slidechanged",ut=>{const{previousSlide:j,currentSlide:pt}=ut;G.has(j.id)&&G.get(j.id)(),W.has(pt.id)&&W.get(pt.id)()})});function x(){e.value=!e.value}function V(){l.value.show()}function k(){r.value.show()}const C=y("");function T(z){C.value=z,u.value.show(()=>C.value="")}return _t("open_common_modal",{open_common_modal:T}),(z,ut)=>{const j=E("fa");return p(),_("div",{class:Ht(i.value)},[t("div",ec,[t("div",{class:"btn",onClick:x},[a(j,{icon:"fa-regular fa-lightbulb"})]),t("div",{class:"btn",onClick:k},[a(j,{icon:"fa-soid fa-microchip"})]),t("div",{class:"btn",onClick:V},[a(j,{icon:"fa-solid fa-timeline"})])]),t("div",sc,[t("div",nc,[a(Rl),a(Ui),a(tn),a(Kd),a(qi),a(No),a(jr),a(po),a(Vo),a(Kr),a(ma),a(Ad),a(wl),a(Id),a(pr),a(Se),a(To)])],512),a(c(o),{ref_key:"timelineModal",ref:l},{default:w(()=>[a(c(n))]),_:1},512),a(c(o),{ref_key:"gateModal",ref:r},{default:w(()=>[ic]),_:1},512),a(c(o),{ref_key:"commonModal",ref:u},{default:w(()=>[t("div",{innerHTML:C.value},null,8,ac)]),_:1},512)],2)}}}),rc=g(oc,[["__scopeId","data-v-f3549cef"]]);dt.add(Ut);dt.add(Bt);dt.add(Wt);$.registerLanguage("armasm",Gt);$.registerLanguage("bash",Zt);$.registerLanguage("c",Jt);$.registerLanguage("csharp",qt);$.registerLanguage("java",Qt);$.registerLanguage("javascript",Kt);$.registerLanguage("plaintext",te);$.registerLanguage("python",ee);$.registerLanguage("x86asm",se);ie(rc).component("fa",ae).use(ne).mount("#app");export{g as _};
