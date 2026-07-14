/* Menu mobile + reveal allo scroll — nessuna dipendenza esterna */
(function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.nav');
  var backdrop=document.querySelector('.nav-backdrop');
  function close(){nav&&nav.classList.remove('open');backdrop&&backdrop.classList.remove('open');document.body.style.overflow=''}
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      backdrop&&backdrop.classList.toggle('open',open);
      document.body.style.overflow=open?'hidden':'';
    });
  }
  backdrop&&backdrop.addEventListener('click',close);
  nav&&nav.querySelectorAll('a').forEach(function(a){
    if(!a.parentElement.classList.contains('has-drop')) a.addEventListener('click',close);
  });

  // reveal
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
    },{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  } else { els.forEach(function(e){e.classList.add('in')}); }
})();
