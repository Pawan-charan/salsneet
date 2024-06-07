window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

const moveTop=document.querySelector('.top');

window.addEventListener('scroll',()=>{
  var y=window.scrollY;
  if(y>=800){
    moveTop.classList.add('active');
  }
  else{
    moveTop.classList.remove('active')
  }
});

const btnshow=document.querySelector('.btn-show');
const navbar=document.querySelector('.navbar');

btnshow.addEventListener('.click',()=>{
  navbar.classList.toggle('show');
});



