class TasKCard extends HTMLElement {
    constructor() {
        super();

    }
    static get observedAttributes() {
        return ['title', 'content'];
    }

    connectedCallback() {
        this.render();

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue) {
            this.render();
        }
    }

    render() {
        const title = this.getAttribute('title') || 'Título por defecto';
        const content = this.getAttribute('content') || 'Contenido por defecto';

        this.innerHTML = `
        <div class="card">
        <div class="card-content">
            <h3>${title}</h3>
            <p>${content}</p>
        </div>
        <div class="card-buttons">
            <button class="btn btn-info" >Información</button>
            <button class="btn btn-delete">Borrar</button>
        </div>
        
        </div>
        `;
    }

}


if (!customElements.get('task-card')) {
    customElements.define('task-card', TasKCard);
}