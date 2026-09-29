const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.dot')];
const counter=document.querySelector('#current-slide');
let current=0;let timer;
function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>slide.classList.toggle('active',i===current));dots.forEach((dot,i)=>{dot.classList.toggle('active',i===current);dot.setAttribute('aria-pressed',String(i===current));});counter.textContent=String(current+1).padStart(2,'0');}
function restart(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),5000)}
document.querySelector('.next').addEventListener('click',()=>{showSlide(current+1);restart()});
document.querySelector('.prev').addEventListener('click',()=>{showSlide(current-1);restart()});
dots.forEach((dot,i)=>dot.addEventListener('click',()=>{showSlide(i);restart()}));
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
document.querySelector('#year').textContent=new Date().getFullYear();showSlide(0);restart();
