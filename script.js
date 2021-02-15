window.addEventListener("DOMContentLoaded", () => {
   const input = document.querySelectorAll("input"),
         img = document.querySelector("img"),
         body = document.querySelector("body"),
         h1 = document.querySelector("h1");

   input.forEach(value => value.addEventListener("input", () => {
       if (value.classList.contains("bg-color")) {
           body.style.backgroundColor = value.value;
           h1.style.color = value.value;
       }

       if (value.classList.contains("bg-size")) {
           img.style.maxWidth = value.value * 12 + "px";
           img.style.maxHeight = value.value * 12 + "px";
       }

       if (value.classList.contains("blur")) {
           img.style.filter = `blur(${value.value/10}px)`;
       }

       if (value.classList.contains("inversion")) {
           img.style.filter = `invert(${value.value*2}%)`;
       }

       if (value.classList.contains("sepia")) {
           img.style.filter = `sepia(${value.value*2}%)`;
       }

       if (value.classList.contains("saturation")) {
           img.style.filter = `saturate(${value.value*2}%)`;
       }

       if (value.classList.contains("shade")) {
           img.style.filter = `hue-rotate(${value.value*14.4}deg)`;
       }
   }));
});