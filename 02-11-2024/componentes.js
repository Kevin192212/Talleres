class ayudasSpan extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            span {
                display: inline-block;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                color: #5D8AA8;
                font-weight: bold;
                font-family: Arial, Helvetica, sans-serif;
                padding: 8px 12px;
                font-size: 1.1em;
                margin: 0 0 20px;
                background-color: rgba(255, 255, 255, 0.8);
            }
        </style>
        <span><slot></slot></span>
        `;
    }
}

class NotificacionesButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            button {
                display: flex;
                align-items: center;
                background-color: #5D8AA8;
                color: white; 
                border: none; 
                border-radius: 8px; 
                padding: 10px 15px; 
                font-size: 16px; 
                cursor: pointer; 
                transition: background-color 0.3s; 
            }
            button:hover {
                background-color: #4C6A78;
            }
            .icon {
                margin-right: 8px; 
            }
        </style>
        <button>
            <span class="icon">🔔</span>
            Notificaciones
        </button>
        `;
    }
}

class ClaveInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            .container {
                display: flex;
                flex-direction: column;
                margin: 10px;
                max-width: 300px;
            }
            input {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-size: 14px;
            }
            button {
                margin-top: 5px;
                padding: 8px;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
            }
            button:hover {
                background-color: #45a049;
            }
        </style>
        <div class="container">
            <input type="password" placeholder="Introduce tu clave" id="password" />
            <button id="sendButton">Enviar</button>
        </div>
        `;

        this.shadowRoot.querySelector('#sendButton').addEventListener('click', () => {
            this.encryptAndSend();
        });
    }

    encryptAndSend() {
        const passwordInput = this.shadowRoot.querySelector('#password').value;
        const encryptedPassword = btoa(passwordInput);
        console.log('Contraseña Encriptada:', encryptedPassword);
    }
}

class CuponDescuentoInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            .container {
                display: flex;
                flex-direction: column;
                margin: 10px;
                max-width: 300px;
            }
            input {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-size: 14px;
            }
            button {
                margin-top: 5px;
                padding: 8px;
                background-color: #007BFF;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
            }
            button:hover {
                background-color: #0056b3;
            }
        </style>
        <div class="container">
            <input type="text" placeholder="Introduce tu cupón de descuento" id="cupon" />
            <button id="applyButton">Aplicar Cupón</button>
        </div>
        `;

        this.shadowRoot.querySelector('#applyButton').addEventListener('click', () => {
            this.aplicarCupon();
        });
    }

    aplicarCupon() {
        const couponInput = this.shadowRoot.querySelector('#cupon').value;
        console.log('Cupón aplicado:', couponInput);
    }
}

customElements.define("ayudas-span", ayudasSpan);
customElements.define("notificaciones-button", NotificacionesButton);
customElements.define("clave-input", ClaveInput);
customElements.define("cupon-descuento-input", CuponDescuentoInput);


