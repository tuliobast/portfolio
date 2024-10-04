    let deviceWidth = window.innerWidth;
  console.log('Ancho del dispositivo:', deviceWidth)  ;
  if (deviceWidth > 360){
    let dropdown = document.querySelector(".dropdown");
    let dropdownContent = document.querySelector(".dropdown-content");
    console.log(dropdown.classList.remove("dropdown"));
    console.log(dropdownContent.classList.remove("dropdown-content"));
    }  
