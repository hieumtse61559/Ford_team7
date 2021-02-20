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