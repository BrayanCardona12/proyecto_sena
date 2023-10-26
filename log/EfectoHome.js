import { useEffect } from "react";


function EfectoHome() {

    useEffect(() => {
        let closer = document.querySelector('#closer');
        
      
      closer.onclick = () => {
          closer.style.display = 'none';
          loginForm.classList.remove('active');
      }
      
      
      let loginForm = document.querySelector('.login-form');
      
      document.querySelector('#login-btn').onclick = () => {
          closer.style.display = 'block';
          loginForm.classList.toggle('active');
      }
      
      let searchForm = document.querySelector('.header .search-form');
      
      document.querySelector('#search-btn').onclick = ( ) =>{
          searchForm.classList.toggle('active');
      }
      
      window.onscroll = () => {
          searchForm.classList.remove('active');
      }
      
      let slides = document.querySelectorAll('.home .slides-container .slide');
      let index = 0;
      
      function next() {
          slides[index].classList.remove('actives');
          index = (index + 1) % slides.length;
          slides[index].classList.add('actives');
      }
      
      function prev() {
          slides[index].classList.remove('actives');
          index = (index - 1 + slides.length) % slides.length;
          slides[index].classList.add('actives');
      }
      
      document.getElementById("slide-next").addEventListener("click", next);
      document.getElementById("slide-prev").addEventListener("click", prev);
      
      
      },[])

  return 
    
  
}

export default EfectoHome