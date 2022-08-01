const hamburger = document.getElementById("hamburger");
const square = document.getElementById("square");
const navlogo = document.getElementById("navlogo");
const menubarhead = document.getElementsByClassName("menubarhead");


hamburger.addEventListener("click", ()=> square.classList.toggle("hide")
);

hamburger.lastElementChild.addEventListener("click", ()=>hamburger.lastElementChild.style.display="none"

);

hamburger.lastElementChild.addEventListener("click", ()=>hamburger.firstElementChild.style.display="inline"
);

// 
hamburger.firstElementChild.addEventListener("click", ()=>hamburger.firstElementChild.style.display="none"

);

hamburger.firstElementChild.addEventListener("click", ()=>hamburger.lastElementChild.style.display="inline"
);



if (document.querySelector('.hide').style.display=="none") {
    hamburger.remove(hamburger.lastElementChild)
}