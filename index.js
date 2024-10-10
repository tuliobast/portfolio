let date = new Date();
let deviceWidth = window.innerWidth;
console.log("Ancho del dispositivo:", deviceWidth);
if (deviceWidth > 680) {
  let dropdown = document.querySelector(".dropdown");
  let dropdownContent = document.querySelector(".dropdown-content");
  console.log(dropdown.classList.remove("dropdown"));
  console.log(dropdownContent.classList.remove("dropdown-content"));
}

let year = date.getFullYear();  
contenido = `2022 - ${year}`;
document.getElementById("year").innerHTML = contenido;

// Function to validate each field
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const inputs = form.querySelectorAll(".contact-form__input");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = message;
    input.setAttribute("aria-invalid", "true");
    input.classList.add("contact-form__input--invalid");
  }

  function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = "";
    input.removeAttribute("aria-invalid");
    input.classList.remove("contact-form__input--invalid");
  }

  function validateForm() {
    let isValid = true;
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        showError(input, "Este campo es obligatorio.");
        isValid = false;
      } else if (input.type === "email" && !validateEmail(input.value.trim())) {
        showError(
          input,
          "Por favor, introduzca una dirección de correo electrónico válida."
        );
        isValid = false;
      } else {
        clearError(input);
      }
    });

    submitBtn.disabled = !isValid;
    submitBtn.setAttribute("aria-disabled", !isValid);
    return isValid;
  }

  inputs.forEach((input) => {
    input.addEventListener("input", validateForm);
    input.addEventListener("blur", validateForm);
  });

  form.addEventListener("submit", function (e) {
    if (!validateForm()) {
      e.preventDefault();
    }
  });
});

function redirectToPage(currentUrl, targetUrl, delay) {
  // Verifica si la página actual contiene el fragmento de URL especificado
  if (window.location.href === currentUrl) {
    console.log(window.location.href)
    // Espera el tiempo ind icado antes de redirigir
    setTimeout(() => {
      window.location.assign(targetUrl);
    }, delay);
  }
}

function counter(){
  let counter = document.getElementById('counter');
  console.log(counter);
  let count = 6;
  let timer = setInterval(() => {
    count--;
    counter.innerHTML = count;
  }, 1000);

  // Limpia el contador y detiene el timer al finalizar
  setTimeout(() => {
    clearInterval(timer);
    counter.textContent = 0;
  }, 5000);
}

counter()
// Uso de la función:
// partialUrl: parte de la URL actual que deseas verificar (puede ser la ruta o una parte del dominio)
// targetUrl: la URL a la que deseas redirigir
// delay: tiempo de espera en milisegundos (ej. 3000ms = 3 segundos)
redirectToPage('http://127.0.0.1:5500/thanks.html', 'http://127.0.0.1:5500/index.html', 5000);


