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


//play csgo tab

function playTab(evt, tabname) {
  var i, tabcontent, tablinks;

  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";

}