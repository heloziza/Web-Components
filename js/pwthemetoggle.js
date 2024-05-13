class PWThemeToggle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    cursor: pointer;
                    user-select: none;
                }
                .toggle {
                    width: 40px;
                    height: 20px;
                    background-color: #ccc;
                    border-radius: 20px;
                    position: relative;
                    transition: background-color 0.3s;
                }
                .toggle::after {
                    content: '';
                    width: 18px;
                    height: 18px;
                    background-color: white;
                    border-radius: 50%;
                    position: absolute;
                    top: 1px;
                    left: 1px;
                    transition: left 0.3s;
                }
                :host([dark]) .toggle {
                    background-color: #333;
                }
                :host([dark]) .toggle::after {
                    left: calc(100% - 21px);
                }
            </style>
            <div class="toggle"></div>
        `;
        this.darkMode = false;
        this.toggleButton = this.shadowRoot.querySelector('.toggle');
        this.toggleButton.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.darkMode = !this.darkMode;
        if (this.darkMode) {
            document.body.classList.add('dark-theme');
            this.setAttribute('dark', '');
        } else {
            document.body.classList.remove('dark-theme');
            this.removeAttribute('dark');
        }
    }
}

customElements.define('pw-theme-toggle', PWThemeToggle);