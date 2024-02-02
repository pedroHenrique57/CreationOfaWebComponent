class Card extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.appendChild(this.Build());
    shadow.appendChild(this.Styles());
  }

  Build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'cardLeft');

    const author = document.createElement('span');
    author.textContent = 'By ' + this.getAttribute('author' || 'Unknow Author');

    const title = document.createElement('h1');
    title.textContent = this.getAttribute('title' || 'Unknow Title');

    const description = document.createElement('p');
    description.textContent =
      this.getAttribute('description') || 'Unknow Description';

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'cardRight');

    const img = document.createElement('img');
    img.src = this.getAttribute('img-src');
    img.alt = this.getAttribute('img-alt') || 'No image descriptive information.';

    cardLeft.appendChild(author);
    cardLeft.appendChild(title);
    cardLeft.appendChild(description);

    cardRight.appendChild(img);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  Styles() {
    const style = document.createElement('style');

    style.textContent = `
    
    img {
      width: 200px;
      height: 200px;
      border-radius: 5px
    }

    span, h1, p {
      margin: 4px 0 4px 0;
    }

    h1 {
      word-spacing: -10px;
    }

    p, span {
      font-weight: 300;
    }

    .card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 800px;
      height: 200px;
      margin-top: 10px;
      border-radius: 5px;
      background-color: white;
    }
    
    .cardLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 2rem;
    }
    .cardRight {
      width: 200px;
      border-radius: 5px;
    }`;

    return style;
  }
}

customElements.define('custom-card', Card);
