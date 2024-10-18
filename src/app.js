import "./style.css";
import "bootstrap";
import Swal from "sweetalert2";

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

  /**@csizecard funcion que ajusta la carta a lo que escribe el usuario mediante input
   * Se usan variables para
tener un minimo y un maximo de altura y anchura   
en caso que se supere se abrira un alert personalizado swal
*/
  function cSizeCard() {
    let userWidth = parseInt(document.getElementById("width").value, 10);
    let userHeight = parseInt(document.getElementById("height").value, 10);

    const minWidth = 150;
    const maxWidth = 900;
    const minHeight = 140;
    const maxHeight = 900;

    if (userWidth < minWidth) {
      Swal.fire({
        imageUrl:
          "https://ih1.redbubble.net/image.5386788144.4201/pp,504x498-pad,600x600,f8f8f8.jpg",
        imageWidth: 50,
        footer: "El ancho mínimo es " + `${minWidth}px.`
      });
      userWidth = minWidth;
    } else if (userWidth > maxWidth) {
      Swal.fire({
        imageUrl:
          "https://ih1.redbubble.net/image.835916903.9548/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
        imageWidth: 1500,
        footer: "El ancho máximo es " + `${maxWidth}px.`
      });
      userWidth = maxWidth;
    }

    if (userHeight < minHeight) {
      Swal.fire({
        imageUrl:
          "https://images3.memedroid.com/images/UPLOADED549/6037b3ea7bf06.jpeg",
        imageHeight: 50,
        footer: "El alto mínimo es " + `${minHeight}px.`
      });
      userHeight = minHeight;
    } else if (userHeight > maxHeight) {
      Swal.fire({
        imageUrl:
          "https://images3.memedroid.com/images/UPLOADED549/6037b3ea7bf06.jpeg",
        imageHeight: 1500,
        footer: "El alto máximo es " + `${maxHeight}px.`
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
