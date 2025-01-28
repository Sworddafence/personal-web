(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{3689:function(e,t,r){Promise.resolve().then(r.bind(r,7479))},8528:function(e,t,r){"use strict";r.d(t,{Z:function(){return Card}});var n=r(6307),a=r(3921),i=r(7117),s=r(9851),c=r(6402);function _templateObject(){let e=(0,n._)(["radial-gradient(240px at ","px ","px, white, transparent)"]);return _templateObject=function(){return e},e}let Card=e=>{let{children:t}=e,r=(0,i.q)(0,{stiffness:500,damping:100}),n=(0,i.q)(0,{stiffness:500,damping:100}),l=(0,s.Y)(_templateObject(),r,n),o={maskImage:l,WebkitMaskImage:l};return(0,a.jsxs)("div",{onMouseMove:function(e){let{currentTarget:t,clientX:a,clientY:i}=e,{left:s,top:c}=t.getBoundingClientRect();r.set(a-s),n.set(i-c)},className:"overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ",children:[(0,a.jsxs)("div",{className:"pointer-events-none",children:[(0,a.jsx)("div",{className:"absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"}),(0,a.jsx)(c.E.div,{className:"absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 ",style:o}),(0,a.jsx)(c.E.div,{className:"absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100",style:o})]}),t]})}},2461:function(e,t,r){"use strict";r.d(t,{W:function(){return Navigation}});var n=r(3921),a=r(3826),i=r(4706),s=r.n(i),c=r(7515);let Navigation=()=>{let e=(0,c.useRef)(null),[t,r]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{if(!e.current)return;let t=new IntersectionObserver(e=>{let[t]=e;return r(t.isIntersecting)});return t.observe(e.current),()=>t.disconnect()},[]),(0,n.jsx)("header",{ref:e,children:(0,n.jsx)("div",{className:"fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ".concat(t?"bg-zinc-900/0 border-transparent":"bg-zinc-900/500  border-zinc-800 "),children:(0,n.jsxs)("div",{className:"container flex flex-row-reverse items-center justify-between p-6 mx-auto",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-8",children:[(0,n.jsx)(s(),{href:"/projects",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"Projects"}),(0,n.jsx)(s(),{href:"/contact",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"Contact"})]}),(0,n.jsx)(s(),{href:"/",className:"duration-200 text-zinc-300 hover:text-zinc-100",children:(0,n.jsx)(a.Z,{className:"w-6 h-6 "})})]})})})}},2361:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Particles}});var n=r(3921),a=r(7515);function Particles(e){let{className:t="",quantity:r=30,staticity:i=50,ease:s=50,refresh:c=!1}=e,l=(0,a.useRef)(null),o=(0,a.useRef)(null),u=(0,a.useRef)(null),d=(0,a.useRef)([]),h=function(){let[e,t]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{let handleMouseMove=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",handleMouseMove),()=>{window.removeEventListener("mousemove",handleMouseMove)}},[]),e}(),m=(0,a.useRef)({x:0,y:0}),x=(0,a.useRef)({w:0,h:0}),f=window.devicePixelRatio;(0,a.useEffect)(()=>(l.current&&(u.current=l.current.getContext("2d")),initCanvas(),animate(),window.addEventListener("resize",initCanvas),()=>{window.removeEventListener("resize",initCanvas)}),[]),(0,a.useEffect)(()=>{onMouseMove()},[h.x,h.y]),(0,a.useEffect)(()=>{initCanvas()},[c]);let initCanvas=()=>{resizeCanvas(),drawParticles()},onMouseMove=()=>{if(l.current){let e=l.current.getBoundingClientRect(),{w:t,h:r}=x.current,n=h.x-e.left-t/2,a=h.y-e.top-r/2,i=n<t/2&&n>-t/2&&a<r/2&&a>-r/2;i&&(m.current.x=n,m.current.y=a)}},resizeCanvas=()=>{o.current&&l.current&&u.current&&(d.current.length=0,x.current.w=o.current.offsetWidth,x.current.h=o.current.offsetHeight,l.current.width=x.current.w*f,l.current.height=x.current.h*f,l.current.style.width="".concat(x.current.w,"px"),l.current.style.height="".concat(x.current.h,"px"),u.current.scale(f,f))},circleParams=()=>{let e=Math.floor(Math.random()*x.current.w),t=Math.floor(Math.random()*x.current.h),r=parseFloat((.6*Math.random()+.1).toFixed(1));return{x:e,y:t,translateX:0,translateY:0,size:Math.floor(2*Math.random())+.1,alpha:0,targetAlpha:r,dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+4*Math.random()}},drawCircle=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(u.current){let{x:r,y:n,translateX:a,translateY:i,size:s,alpha:c}=e;u.current.translate(a,i),u.current.beginPath(),u.current.arc(r,n,s,0,2*Math.PI),u.current.fillStyle="rgba(255, 255, 255, ".concat(c,")"),u.current.fill(),u.current.setTransform(f,0,0,f,0,0),t||d.current.push(e)}},clearContext=()=>{u.current&&u.current.clearRect(0,0,x.current.w,x.current.h)},drawParticles=()=>{clearContext();for(let e=0;e<r;e++){let e=circleParams();drawCircle(e)}},remapValue=(e,t,r,n,a)=>{let i=(e-t)*(a-n)/(r-t)+n;return i>0?i:0},animate=()=>{clearContext(),d.current.forEach((e,t)=>{let r=[e.x+e.translateX-e.size,x.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,x.current.h-e.y-e.translateY-e.size],n=r.reduce((e,t)=>Math.min(e,t)),a=parseFloat(remapValue(n,0,20,0,1).toFixed(2));if(a>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*a,e.x+=e.dx,e.y+=e.dy,e.translateX+=(m.current.x/(i/e.magnetism)-e.translateX)/s,e.translateY+=(m.current.y/(i/e.magnetism)-e.translateY)/s,e.x<-e.size||e.x>x.current.w+e.size||e.y<-e.size||e.y>x.current.h+e.size){d.current.splice(t,1);let e=circleParams();drawCircle(e)}else drawCircle({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(animate)};return(0,n.jsx)("div",{className:t,ref:o,"aria-hidden":"true",children:(0,n.jsx)("canvas",{ref:l})})}},7479:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Example}});var n=r(3921),a=r(4711);let i=(0,a.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),s=(0,a.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),c=(0,a.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);var l=r(4706),o=r.n(l),u=r(2461),d=r(8528),h=r(6402),m=r(2361);let x=[{icon:(0,n.jsx)(i,{size:20}),href:"https://www.linkedin.com/in/justin-lee-831637218/",label:"LinkedIn",handle:"Justin Lee"},{icon:(0,n.jsx)(s,{size:20}),href:"mailto:getjustind@gmail.com",label:"Email",handle:"getjustind@gmail.com"},{icon:(0,n.jsx)(c,{size:20}),href:"https://github.com/Sworddafence",label:"Github",handle:"Sworddafence"}];function Example(){return(0,n.jsx)(h.E.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0,transition:{duration:4}},children:(0,n.jsxs)("div",{className:" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0",children:[(0,n.jsx)(m.default,{className:"absolute inset-0 -z-10 animate-fade-in",quantity:2e3}),(0,n.jsx)(u.W,{}),(0,n.jsx)("div",{className:"container flex items-center justify-center min-h-screen px-4 mx-auto",children:(0,n.jsx)("div",{className:"grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16",children:x.map(e=>(0,n.jsx)(d.Z,{children:(0,n.jsxs)(o(),{href:e.href,target:"_blank",className:"p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16",children:[(0,n.jsx)("span",{className:"absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent","aria-hidden":"true"}),(0,n.jsx)("span",{className:"relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange",children:e.icon})," ",(0,n.jsxs)("div",{className:"z-10 flex flex-col items-center",children:[(0,n.jsx)("span",{className:"lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display",children:e.handle}),(0,n.jsx)("span",{className:"mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200",children:e.label})]})]})}))})})]})})}}},function(e){e.O(0,[499,811,274,83,744],function(){return e(e.s=3689)}),_N_E=e.O()}]);