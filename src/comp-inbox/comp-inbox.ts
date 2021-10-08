export function mountInbox(contInboxEl) {
  contInboxEl.innerHTML = `<h2 class="section-main__title">Inbox</h2>
  <h2 class="section-main__title-aux">Recibido</h2>
  <p class="section-main__text-email"></p>
  <div class="section-main__cont-form">
      <form class="section-main__form">
          <div class="section-main__cont-input">
              <input name="email" placeholder="Un email" class="section-main__input" type="email">
              <img class="section-main__img-button" src="./Polygon1.png">
          </div>
          <div class="section-main__cont-input">
              <input name="email" placeholder="Un email" class="section-main__otro-input" type="email">
              <img class="section-main__otro-img-button" src="./Polygon1.png">
          </div>
      </form>
  </div>`;
}
