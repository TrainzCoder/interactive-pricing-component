const slider = document.querySelector('.slider');
const toggle = document.getElementById("switch-input");

const trackColor = (newWidth) => {
  let color =`linear-gradient(90deg, hsl(174, 77%, 80%) ${newWidth}%,  hsl(224, 65%, 95%) ${newWidth}%)`;
  slider.style.background = color;
}

slider.oninput = function(){

  const setData = (views,nominal,width) => {
    let newNominal = nominal;

    if(toggle.checked) {
      newNominal = nominal - nominal * 0.25;
    }
  
    const viewsText = document.querySelector(".views");
    const nominalText = document.querySelector(".nominal");

    viewsText.innerText = views === 1 ? `${views}M pageviews` : `${views}K pageviews`;
    nominalText.innerText = `$${newNominal}.00`;

    trackColor(width);
  }

  if(this.value == 0) setData(10,8,0);
  if(this.value == 1) setData(50,12,25);
  if(this.value == 2) setData(100,16,50);
  if(this.value == 3) setData(500,24,75);
  if(this.value == 4) setData(1,36,100);
  
}

toggle.addEventListener('click',function(){
  slider.oninput();
})

trackColor(50);





  