import './style.css'

window.addEventListener('load', () => {
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  let currentSlide = 0;

  const hiddenSlide =()=>{
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('remove');
    slides[currentSlide].animate(
      [{opacity: '1'},{opacity: '0'}],
      {duration: 500, fill: 'forwards'}
    )
  }
  const showSlide =()=>{
    slides[currentSlide].classList.add('active');
    slides[currentSlide].classList.remove('remove');
    slides[currentSlide].animate(
      [{opacity: '0'},{opacity: '1'}],
      {duration: 500, fill: 'forwards'}
    )
  }

  const goSlide = (n:number) => {
    hiddenSlide();
    if(n === 1){
      if(currentSlide >= slides.length - 1){
        currentSlide = 0;
      }else{
        currentSlide ++;
      }
    }else if(n === -1){
      if(currentSlide <= 0){
        currentSlide = slides.length - 1;
      }else{
        currentSlide --;
      }
    }
    console.log(currentSlide);
    showSlide();
  }

  next?.addEventListener('click', ()=>goSlide(1));
  prev?.addEventListener('click', ()=>goSlide(-1));
})