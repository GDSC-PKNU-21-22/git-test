//모바일 or pc를 os로 구분
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (isMobile()) {
  var header_ul = document.querySelector('#header_ul');
    header_ul.style.display= 'none'

} 

window.onload = function(event) {
  if(window.outerWidth <=900) {
    var header_ul = document.querySelector('#header_ul');
    header_ul.style.display= 'none'
   }
  else if(window.outerWidth >900 && window.outerWidth <=1900){
    var header_ul = document.querySelector('#header_ul');
    header_ul.style.display= 'inline-block';
  }

  else if(window.outerWidth > 1900) {
    var header_ul = document.querySelector('#header_ul');
    header_ul.style.display= 'inline-block';
  
  }
}
window.onresize = function(event) {
  if(window.outerWidth <=900) {
    var header_ul = document.querySelector('#header_ul');
    header_ul.style.display= 'none'
   }
  else if(window.outerWidth >900 && window.outerWidth <=1900){
    var header_ul = document.querySelector('#header_ul');
    header_ul.style.display= 'inline-block';
  }

  else if(window.outerWidth > 1900) {
    var header_ul = document.querySelector('#header_ul');
    header_ul.style.display= 'inline-block';
  
  }
}
