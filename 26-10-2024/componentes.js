class titulosElprofebarrientos extends HTMLElement{
    constructor(){
       super();
            }
   // este metodo activa el uso del componente 
connectedCallback(){    
  let shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <style>
    div {      
  text-align: center;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;  
  background-color: green;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 1720px; 
  font-size: 1.0em;
  color: #ffffff;
  margin: 0 0 20px;
    }
  </style>
   <div>Derechos reservados El profe barrientos</div>
  `

}}

class buscarElprofebarrientos extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
    }
    connectedCallback() {
      // Create a shadow root
      const shadow = this.attachShadow({ mode: "open" });
      // Create caja de texto
      const buscarcaja = document.createElement("input");
      buscarcaja.type = 'text';
      buscarcaja.name = 'buscar';
      buscarcaja.id = 'buscar';
  
      buscarcaja.placeholder = 'Burcar con ChatGPT';
      buscarcaja.setAttribute("class", "buscarcaja buscarcaja:focus");
      const style = document.createElement("style");
      style.textContent = `
        .buscarcaja {       
         
        width: 1800px;           /* Ancho de la caja de texto */
    padding: 10px;         /* Espaciado interno */
    border: 2px solid #007bff; /* Color y grosor del borde */
    border-radius: 20px;   /* Esquinas redondeadas */
    outline: none;         /* Quitar el contorno al hacer clic */
    transition: border-color 0.3s; /* Transición suave para el color del borde */
  
        }
          .buscarcaja:focus {
    border-color: #CD5C5C;  /* Color del borde al enfocar */
  }
       
      `;
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);   
      shadow.appendChild(buscarcaja);
      
    }
  }
  class FechaHoy extends HTMLElement {
    constructor() {
      super();  
      let shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
      <style>
        div {
          font-size: 20px;
          color: blue;
        }
      </style>
    <div>${this.fecha()}</div>`;

    }
  
    fecha() {
      var today = new Date();
      var dia = String(today.getDate());
      var mes = String(today.getMonth() + 1); //January is 0!
      var ano = today.getFullYear();
  
     return `${dia}/${mes}/${ano}`;
    }
  }
  class HoraActual extends HTMLElement {
    constructor() {
      super();  
      let shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
      <style>
        div {
          font-size: 20px;
          color: blue;
        }
      </style>
    <div>Bienvenido son las: ${this.hora()}</div>`;

    }
  
    hora() {
      var today = new Date();
      var hour = String(today.getHours());
  
     return `${hour}`;
    }
  }

  class BotonIrAlCarrito extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });
  
      const button = document.createElement("button");
      button.textContent = "Ir al Carrito";
      button.setAttribute("class", "carrito-button");
  
      const style = document.createElement("style");
      style.textContent = `
        .carrito-button {
          background-color: #007bff; 
          color: white;
          padding: 10px 20px;
          border: none; 
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px; 
          transition: background-color 0.3s; 
        }
        .carrito-button:hover {
          background-color: #0056b3; 
        }
      `;
  
      button.addEventListener("click", () => {
        window.open("#", "_blank"); 
      });
  
      shadow.appendChild(style);
      shadow.appendChild(button);
    }
  }
  
  
  // Define the new element
  customElements.define("titulos-elprofebarrientos", titulosElprofebarrientos);
  customElements.define("buscar-elprofebarrientos", buscarElprofebarrientos);
  customElements.define("fecha-hoy",FechaHoy);
  customElements.define("hora-actual",HoraActual);
  customElements.define('boton-iralcarrito', BotonIrAlCarrito);

