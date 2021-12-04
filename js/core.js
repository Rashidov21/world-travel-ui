M.AutoInit();
let tech = document.querySelectorAll(".tech");
for(let i = 0; i < tech.length; i++){
    tech[i].style.width = `${Math.round(50 - Math.random() * 150)}px`;
    tech[i].style.top = `${Math.round(Math.random() * 500)}px`;
    tech[i].style.left = `${Math.round(Math.random() * 500)}px`;
    tech[i].style.transition = `all 0.5s`;
}