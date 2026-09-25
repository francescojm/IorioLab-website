const nav = document.querySelector('.nav-wrap');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>30));
const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
btn?.addEventListener('click',()=>{
  const open=links.style.display==='flex';
  links.style.display=open?'none':'flex';
  if(!open){Object.assign(links.style,{position:'absolute',top:'66px',left:'17px',right:'17px',background:'#f8f7f4',padding:'22px',borderRadius:'18px',flexDirection:'column',alignItems:'flex-start',boxShadow:'0 18px 40px rgba(0,0,0,.10)'})}
});
