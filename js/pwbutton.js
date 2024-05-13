class PWButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.color = this.getAttribute('color') || 'green';
        this.size = this.getAttribute('size') || 'medium';
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background: ${this.color};
                    padding: ${this.getPadding()};
                    border-radius: ${this.getBorderRadius()};
                    color: white;
                    border: none;
                    font-size: ${this.getFontSize()};
                }
                button:hover {
                    background: ${this.getHoverColor()};
                }
            </style>
            <button><slot></slot></button>
        `;
    }

    getPadding() {
        if (this.size === 'small') return '5px 10px';
        if (this.size === 'large') return '15px 20px';
        return '10px 15px';
    }

    getBorderRadius() {
        if (this.size === 'large') return '10px';
        return '5px';
    }

    getFontSize() {
        if (this.size === 'small') return '12px';
        if (this.size === 'large') return '18px';
        return '16px';
    }

    getHoverColor() {
        if (this.color === 'green') return 'lightgreen';
        if (this.color === 'blue') return 'lightblue';
        return this.color;
    }
}

customElements.define('pw-button', PWButton);