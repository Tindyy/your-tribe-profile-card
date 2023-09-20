const tiltEffectSettings = {
  max: 50,
  perspective: 1000,
  scale: 1.06
};

const card = document.querySelector(".card", ".cardback");

card.addEventListener("mouseenter", cardMouseEnter);
card.addEventListener("mousemove", cardMouseMove);
card.addEventListener("mouseleave", cardMouseLeave);

function cardMouseEnter(event){
  setTransition();

}

function cardMouseMove(event){
const cardWidth = card.offsetWidth;
const cardHeight = card.offsetHeight;
const centerX = card.offsetLeft + cardWidth/2;
const centerY = card.offsetTop + cardHeight/2;
const mouseX = event.clientX - centerX;
const mouseY = event.clientY - centerY;
const rotateX = ((-1)*tiltEffectSettings.max*mouseY/(cardHeight/2)).toFixed(2);
const rotateY = (tiltEffectSettings.max*mouseX/(cardWidth/2)).toFixed(2);

card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
setTransition();
}

function cardMouseLeave(event){ 
  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
}



/*cardback*/


/*card flip*/
const tile = document.querySelector(".tile");

tile.addEventListener("click", function(){
  tile.classList.toggle("is-flipped");
});


