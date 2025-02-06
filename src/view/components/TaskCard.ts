class TaskCard extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(): string[] {
        return ['title', 'content'];
    }

    connectedCallback(): void {
        this.render();
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
        if (newValue !== oldValue) {
            this.render();
        }
    }

    render(): void {
        const title: string = this.getAttribute('title') || 'Título por defecto';
        const content: string = this.getAttribute('content') || 'Contenido por defecto';

        this.innerHTML = `
        <div class="card">
            <div class="card-content">
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
            <div class="card-buttons">
                <button class="btn btn-info">Información</button>
                <button class="btn btn-delete">Borrar</button>
            </div>
        </div>
        `;
    }
}

// Verifica si el elemento ya está registrado antes de definirlo
if (!customElements.get('task-card')) {
    customElements.define('task-card', TaskCard);
}

export default TaskCard;
