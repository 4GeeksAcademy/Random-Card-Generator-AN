import "./style.css";
import "bootstrap";

window.onload = function() {
  let numbers = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];
  let cardsuit = ["♠", "♣", "♥", "♦"];

  /**@generatecartsuit funcion que devuelve numero y dibujo aleatorio de una carta
   *@variables
   * variables utilizadas
   *topsuit
   *numbers
   *bottomsuit
   */
  let gerenatecardsuit = () => {
    let RandomN = numbers[Math.floor(Math.random() * numbers.length)];
    document.getElementById("number").innerHTML = RandomN;

    let randomsuit = cardsuit[Math.floor(Math.random() * cardsuit.length)];
    let topsuit = document.getElementById("top-suit");
    let bottomsuit = document.getElementById("bottom-suit");
    topsuit.innerHTML = randomsuit;
    bottomsuit.innerHTML = randomsuit;
    //se utiliza para colorear en rojo las cartas de la baraja corazon y diamante
    if (randomsuit == "♥" || randomsuit == "♦") {
      topsuit.classList.add("red-suit");
      bottomsuit.classList.add("red-suit");
    } else {
      topsuit.classList.remove("red-suit");
      bottomsuit.classList.remove("red-suit");
    }
  };

  //funcion/evento listener al click del raton para generar la carta

  document.getElementById("newcard").addEventListener("click", () => {
    gerenatecardsuit();
  });
  //funcion para generar una carta cada 10s
  setInterval(gerenatecardsuit, 10 * 1000);
  gerenatecardsuit();

  //funcion para ajustar la carta deseada por el usuario
  //para evitar problemas ajustaremos un minimo y maximo
  function cSizeCard() {
    let userWidth = parseInt(document.getElementById("width").value, 10);
    let userHeight = parseInt(document.getElementById("height").value, 10);

   
    const minWidth = 100;
    const maxWidth = 500;
    const minHeight = 140;
    const maxHeight = 700;

    

    if (userWidth < minWidth) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "El ancho mínimo es" + `${minWidth}px.`
      });
      userWidth = minWidth;
    } else if (userWidth > maxWidth) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "El ancho mínimo es " + `${maxWidth}px.`
      });
      userWidth = maxWidth;
    }

    

    if (userHeight < minHeight) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "El alto mínimo es" + `${minHeight}px.`
      });
      userHeight = minHeight;
    } else if (userHeight > maxHeight) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "El alto mínimo es " + `${maxHeight}px.`
      });
      userHeight = maxHeight;
    }

   

    let myDiv = document.getElementById("card");
    myDiv.style.width = `${userWidth}px`;
    myDiv.style.height = `${userHeight}px`;
  }

  document.getElementById("chsize").addEventListener("click", function() {
    cSizeCard();
  });
};
