onload = () =>{
    document.body.classList.remove("container");
};
const petals = document.querySelectorAll('.petal');

petals.forEach(petal => {
  // posición horizontal aleatoria
  petal.style.setProperty('--random-x', Math.random());
  // velocidad aleatoria (0.5 a 1.5)
  petal.style.setProperty('--random-speed', 0.5 + Math.random());
  // rotación inicial aleatoria
  const rot = Math.floor(Math.random() * 360);
  petal.style.setProperty('--random-rot-deg', rot + 'deg');
  petal.style.setProperty('--random-rot', Math.random());
});
