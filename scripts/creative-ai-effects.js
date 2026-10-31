/* Lightweight Creative AI interactions: hero light field, spotlight and reveal. */
(() => {
 const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const canvas=document.getElementById('heroAmbient');
 if(canvas&&!reduce){
  const ctx=canvas.getContext('2d',{alpha:true});
  if(ctx){
   const host=canvas.parentElement;let w=0,h=0,dpr=1,raf=0,last=0,visible=true;
   const pointer={x:.72,y:.42,active:false,burstAt:0};
   const particles=Array.from({length:58},(_,i)=>({x:Math.random(),y:Math.random(),homeX:Math.random(),homeY:Math.random(),phase:Math.random()*Math.PI*2,size:.7+Math.random()*1.6,seed:i}));
   const resize=()=>{const r=host.getBoundingClientRect();w=Math.max(1,r.width);h=Math.max(1,r.height);dpr=Math.min(window.devicePixelRatio||1,1.35);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)};
   const draw=time=>{
    raf=0;if(!visible)return;if(time-last<32){raf=requestAnimationFrame(draw);return}last=time;ctx.clearRect(0,0,w,h);
    const ox=w*(pointer.active?pointer.x:.88),oy=h*.06;
    const glow=ctx.createRadialGradient(ox,oy,2,ox,oy,Math.max(w,h)*.72);glow.addColorStop(0,'rgba(157,111,255,.16)');glow.addColorStop(.38,'rgba(116,73,218,.07)');glow.addColorStop(1,'rgba(116,73,218,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    ctx.save();ctx.globalCompositeOperation='screen';
    for(let i=0;i<15;i++){const angle=(Math.PI*.48)+(i-7)*.055+Math.sin(time*.00022+i)*.012;const len=Math.max(w,h)*1.1;const ex=ox+Math.cos(angle)*len,ey=oy+Math.sin(angle)*len;const g=ctx.createLinearGradient(ox,oy,ex,ey);g.addColorStop(0,'rgba(175,139,255,'+(.035+(i%4)*.009)+')');g.addColorStop(.42,'rgba(125,82,228,.018)');g.addColorStop(1,'rgba(125,82,228,0)');ctx.strokeStyle=g;ctx.lineWidth=10+(i%3)*9;ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ex,ey);ctx.stroke()}
    ctx.restore();
    const mx=pointer.x*w,my=pointer.y*h;
    for(const p of particles){let tx=p.homeX*w+Math.sin(time*.00018+p.phase)*10,ty=p.homeY*h+Math.cos(time*.0002+p.phase)*9;if(pointer.active){const angle=(p.seed/particles.length)*Math.PI*2;const radius=52+Math.sin(time*.0015+p.phase)*5;tx=mx+Math.cos(angle)*radius;ty=my+Math.sin(angle)*radius*.72}const burstAge=time-pointer.burstAt;if(burstAge>=0&&burstAge<520){const angle=(p.seed/particles.length)*Math.PI*2;const strength=(1-burstAge/520)*46;tx+=Math.cos(angle)*strength;ty+=Math.sin(angle)*strength}p.x+=(tx/w-p.x)*.075;p.y+=(ty/h-p.y)*.075;const pulse=.55+.45*Math.sin(time*.0012+p.phase);ctx.beginPath();ctx.fillStyle='rgba(196,169,255,'+(.24+pulse*.48)+')';ctx.arc(p.x*w,p.y*h,p.size,0,Math.PI*2);ctx.fill()}
    if(pointer.active){ctx.beginPath();ctx.strokeStyle='rgba(171,132,255,.13)';ctx.lineWidth=1;ctx.arc(mx,my,42+Math.sin(time*.003)*3,0,Math.PI*2);ctx.stroke()}
    raf=requestAnimationFrame(draw)
   };
   const start=()=>{if(!raf&&visible)raf=requestAnimationFrame(draw)},stop=()=>{if(raf)cancelAnimationFrame(raf);raf=0};
   host.addEventListener('pointermove',e=>{const r=host.getBoundingClientRect();pointer.x=(e.clientX-r.left)/r.width;pointer.y=(e.clientY-r.top)/r.height;pointer.active=true;start()},{passive:true});
   host.addEventListener('pointerleave',()=>{pointer.active=false},{passive:true});
   host.addEventListener('click',()=>{pointer.burstAt=performance.now();start()});
   const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;visible?start():stop()},{threshold:0});observer.observe(host);resize();start();
   window.addEventListener('resize',resize,{passive:true});document.addEventListener('visibilitychange',()=>document.hidden?stop():start())
  }
 }
 if(!reduce&&'IntersectionObserver'in window){
  const targets=document.querySelectorAll('.section,.home-discovery,.category-home,.product-paths,.timeline-strip,.tool-card,.category-card,.update-card,.panel,.detail-panel');
  targets.forEach(el=>el.classList.add('ca-reveal'));
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -24px 0px'});
  targets.forEach(el=>io.observe(el))
 }
 // Animate real catalog metrics when the data arrives.
 const metricNodes=['toolCount','categoryCount','sourceCount'].map(id=>document.getElementById(id)).filter(Boolean);
 const metricObserver=new MutationObserver(records=>records.forEach(record=>{
  const node=record.target;const value=parseInt(node.textContent,10);
  if(!Number.isFinite(value)||node.dataset.countAnimated==='1')return;
  node.dataset.countAnimated='1';node.classList.add('ca-count-up');
  if(reduce){return}
  const start=performance.now(),duration=650;
  const tick=now=>{const progress=Math.min(1,(now-start)/duration);node.textContent=Math.round(value*(1-Math.pow(1-progress,3))).toLocaleString();if(progress<1)requestAnimationFrame(tick);else node.textContent=value.toLocaleString()};
  node.textContent='0';requestAnimationFrame(tick);
 }));
 metricNodes.forEach(node=>metricObserver.observe(node,{childList:true,characterData:true,subtree:true}));
 document.addEventListener('pointermove',e=>{const card=e.target.closest('.home-page .card,.catalog-redesign .tool-card,.discovery-redesign .category-card');if(!card)return;const r=card.getBoundingClientRect();card.style.setProperty('--pointer-x',(e.clientX-r.left)+'px');card.style.setProperty('--pointer-y',(e.clientY-r.top)+'px')},{passive:true})
})();
