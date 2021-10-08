import { mountComponentHeader } from "./comp-header/header";
import { mountInbox } from "./comp-inbox/comp-inbox";

function mostrarSectionInbox() {
  const contInboxEl = document.querySelector(".section-main");
  mountInbox(contInboxEl);
}

function manejarRutas(ruta) {
  console.log(ruta);
  const rutas = [
    {
      ruta: /\/inbox\/../,
      accion: function () {
        const inputEl: HTMLInputElement = document.querySelector(
          ".section-main__input"
        );

        const titleAuxEl: HTMLElement = document.querySelector(
          ".section-main__title-aux"
        );
        const titleEl: HTMLElement = document.querySelector(
          ".section-main__title"
        );
        const contFormEl: HTMLElement = document.querySelector(
          ".section-main__cont-form"
        );
        const textEmailEl: HTMLElement = document.querySelector(
          ".section-main__text-email"
        );

        titleEl.style.display = "none";
        titleAuxEl.style.display = "block";
        contFormEl.style.display = "none";
        textEmailEl.textContent = inputEl.value;
        history.pushState({}, "", ruta);
      },
    },
    {
      ruta: /\/inbox/,
      accion: function () {
        // mostrarSectionInbox();
        history.pushState({}, "", ruta);
      },
    },
  ];

  rutas.forEach((element) => {
    if (element.ruta.test(ruta)) {
      console.log("entre al IF");
      if (ruta == "/inbox") {
        console.log("Entre al primer if");
        element.accion();
      } else {
        console.log("Entre al segundo if");
        element.accion();
      }
    }
  });
}

function listenerButtons() {
  const buttonEl = document.querySelector(".section-main__img-button");
  buttonEl.addEventListener("click", (e) => {
    const inputEl: HTMLInputElement = document.querySelector(
      ".section-main__input"
    );

    let url: string;
    if (location.pathname == "/") {
      url = location.pathname + "inbox/" + inputEl.value;
      history.pushState({}, "", url);
    } else {
      url = location.pathname + "/" + inputEl.value;
      history.pushState({}, "", url);
    }
    //manejarRutas(url);
    console.log("Soy un boton");
  });

  const otroButtonEl = document.querySelector(".section-main__otro-img-button");
  otroButtonEl.addEventListener("click", (e) => {
    const otroInputEl: HTMLInputElement = document.querySelector(
      ".section-main__otro-input"
    );
    let url: string;
    if (location.pathname == "/") {
      url = location.pathname + "inbox/" + otroInputEl.value;
      history.pushState({}, "", url);
    } else {
      url = location.pathname + "/" + otroInputEl.value;
      history.pushState({}, "", url);
    }
    manejarRutas(url);
    console.log("Soy un boton");
  });
}

function main() {
  const contComponentHeaderEl = document.querySelector(".contenedor-header");
  mountComponentHeader(contComponentHeaderEl);

  mostrarSectionInbox();
}
main();
