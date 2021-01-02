function myFunction() {
  var x = document.getElementById("wingman");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}


const Indicator = document.getElementById('Indicator');

function toggleUser(){
  Indicator.style.transform = "translateX(8px)";
}
function toggleUsers(){
  Indicator.style.transform = "translateX(66px)";
}
function toggleHistory(){
  Indicator.style.transform = "translateX(128px)";

}
function toggleEnv(){
  Indicator.style.transform = "translateX(185px)";
}

//market toggle

const Indicator2 = document.getElementById('Indicator2');

function togglecoupons(){
  Indicator2.style.transform = "translateX(20px)";
}
function toggleshop(){
  Indicator2.style.transform = "translateX(95px)";
}
function togglekeys(){
  Indicator2.style.transform = "translateX(150px)";

}
function togglemarket(){
  Indicator2.style.transform = "translateX(215px)";
}

