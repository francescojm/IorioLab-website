const header = document.querySelector('.site-header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>12));
const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
btn?.addEventListener('click',()=>nav?.classList.toggle('open'));

document.querySelectorAll('.viz-node').forEach((n,i)=>{
  n.animate([
    {transform:'translate(0,0)'},
    {transform:`translate(${(i%2?1:-1)*(4+i%3)}px,${(i%3-1)*5}px)`},
    {transform:'translate(0,0)'}
  ],{duration:3600+i*260,iterations:Infinity,easing:'ease-in-out'});
});
