console.log(
"Pantheos Global Store V6 Loaded"
);

document
.querySelectorAll(".game-card")
.forEach(card=>{

card.addEventListener("click",()=>{

document
.querySelectorAll(".game-card")
.forEach(c=>c.classList.remove("active"));

card.classList.add("active");

});

});

document
.querySelectorAll(".category-card")
.forEach(card=>{

card.addEventListener("click",()=>{

document
.querySelectorAll(".category-card")
.forEach(c=>c.classList.remove("active"));

card.classList.add("active");

});

});

document
.querySelectorAll(".package-card")
.forEach(card=>{

card.addEventListener("click",()=>{

document
.querySelectorAll(".package-card")
.forEach(c=>c.classList.remove("active"));

card.classList.add("active");

});

});
