// Button Collaspsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

let elements = document.getElementsByTagName("*");

/* Nice fade-in for article */
for (let element = 0; element < elements.length; element++) {
elements[element].style.animation = "transition-in .5s ease-in-out forwards";
  elements[element].style.animationDelay = ".5s";
 
}

let para = document.querySelector("p");

/* Word Count */
function wordCount(str) {
  let wordArray = str.split(" ");
  
  return "Word Count: " + wordArray.filter(word => word !== "").length;
}

document.getElementById("word-count").textContent = wordCount(para.innerText);


let author = "";
document.getElementById("author").textContent = author;