export function mountComponentHeader(contenedorHeaderEl) {
  contenedorHeaderEl.innerHTML = `<header class="header">
    <div class="header__logo">Logo</div>
    <form class="header__form">
        <input class="header__input" type="text">
        <button class="header__btn">Buscar</button>
    </form>
    </header>`;
}
