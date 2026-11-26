(function(){
var btn=document.querySelector('.hamburger');var drawer=document.getElementById('mob-drawer');
if(btn&&drawer){btn.addEventListener('click',function(){var open=drawer.classList.toggle('is-open');btn.setAttribute('aria-expanded',open?'true':'false');});
window.addEventListener('resize',function(){if(window.innerWidth>900){drawer.classList.remove('is-open');btn.setAttribute('aria-expanded','false');}});}
var fab=document.querySelector('.fab');var foot=document.querySelector('.sitefoot');
if(fab&&foot&&'IntersectionObserver' in window){new IntersectionObserver(function(e){fab.classList.toggle('is-hidden',e[0].isIntersecting);},{threshold:0.05}).observe(foot);}
})();
