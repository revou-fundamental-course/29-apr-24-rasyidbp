let clientY = 0;
let clientX = 0;
let total_scroll = 0;
function coordinate(event) {
    clientX = event.clientX;
    clientY = event.clientY + total_scroll;

    const blob = document.getElementById("blob");
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"});
}
document.addEventListener('scroll', (e) => {
    total_scroll = window.scrollY;
})

var slideIndex = 1;

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("slide-show");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }
    
    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

function myFunction() {
    let text = "";
    let nama = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let cb = document.getElementById("cb").value;
    if (nama == "") {
        text += "Nama anda kosong ";
        if (!validateEmail(email)){
            text += "Email anda tidak valid ";
        }
        if (cb == "0"){
            text += "Silahkan pilih paket.";
        }
    } else {
      text = "Input OK";
    }
    document.getElementById("validation").innerHTML = text;
}