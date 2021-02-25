document.getElementById("sweeten__view").onclick = function(){
  
  var itemHiddens = document.getElementsByClassName("item-hidden");
  
  for(var i =0; i < itemHiddens.length; i++){
    if(window.getComputedStyle(itemHiddens[i]).display === "none" ){
      console.log("aaaaaaaaaa");
      itemHiddens[i].style.display == "block";
  }
    }
    

}

// Click disclosures to show content 
var coll = document.getElementsByClassName("disclosures__btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      document.getElementById("id-down").style.display = "inline";
      document.getElementById("id-up").style.display = "none";
    } else {
      content.style.display = "block";
      document.getElementById("id-down").style.display = "none";
      document.getElementById("id-up").style.display = "inline";
    }
  });
}


// Back to Top
var mybutton = document.getElementById("myback2Top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


