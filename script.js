
 //Google Sheet connect code
  var scriptURL = "Your-URL";
  var form = document.forms['google-sheet'];
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });

let l=0;
let s=$(document).height()-$(window).height();
$(window).scroll(()=>{
    let c=$(this).scrollTop();

    if(c>l){
      $("#top-btn").text("");
      $("#top-btn").append('<i class="fa-solid fa-circle-down fa-2x">');
      $("#top-btn").attr("href", "#footer");
    }else{
      $("#top-btn").text("");
      $("#top-btn").append('<i class="fa-solid fa-circle-up fa-2x">');
      $("#top-btn").attr("href", "#header");
    }
    l=c;

    if(c==0){
      $("#top-btn").text("");
      $("#top-btn").append('<i class="fa-solid fa-circle-down fa-2x">');
      $("#top-btn").attr("href", "#footer");
    }
    if(c+1>=s){
      $("#top-btn").text("");
      $("#top-btn").append('<i class="fa-solid fa-circle-up fa-2x">');
      $("#top-btn").attr("href", "#header");
    }
});

 AOS.init();