const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
let isItLight = true;

/* Looping through images */

for(let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i+1}.jpg`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function(){
        displayedImage.setAttribute('src', `images/pic${i+1}.jpg`);
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(){
    if(isItLight) {
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        isItLight = false;
        btn.textContent = "Lighten";
    } else {
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        isItLight = true;
        btn.textContent = "Darken";
    }
});