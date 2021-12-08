console.log("Hello World");

const allToggleElements = document.querySelectorAll("js.toggle");

Fußballfan.addEventListener("click", () => {
  allToggleElements.forEach((element) => {
    element.classList.toggle("hidden");
  });
  /*
{body.classList.add("active")
header.classList.add("active"));
article.classList.add("active"));
Lebenslauf.classList.add("active"));
Zitat.classList.add("active"));
Privates.classList.add("active"));
Fotos.classList.add("active"));
footer.classList.add("active"));*/
});
