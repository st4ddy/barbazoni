let button = document.getElementById("form-show");
let myDiv = document.getElementById("form-section");

function toggle() {
    myDiv.style.visibility = myDiv.style.visibility === "hidden" ? "visible" :  "hidden";
    myDiv.style.display = myDiv.style.display === "none" ? "block" : "none";
}

toggle();

button.addEventListener("click", toggle, false);
