
//sidenav init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  // Parallax page
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  });

  // side nav
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  let query = document.querySelector('.q1');
  let searchBtn= document.queryselector('.searchBtn');
  
  searchBtn.onclick = function(){
    let url='https://www.google.com/search?q'+ query.value;
    window.open(url)
  }