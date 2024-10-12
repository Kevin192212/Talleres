class titlegreenUfpso extends HTMLElement{
    constructor(){
        super();
    }

connectedCallback(){

    this.innerHTML= '<p> Bienvenidos a la UFPSO </p>';
    this.style.color="green";
    this.style.fontFamily="arial";
    this.style.fontSize="30px";
    this.style.textDecoration="underline";
    this.style.fontWeight="bold";
}

}

window.customElements.define("titlegreen-ufpso", titlegreenUfpso);

class iralcarritoUfpso extends HTMLElement{
    constructor(){
        super();
    }

connectedCallback(){

    this.innerHTML= '<a href="" type="button"> Ir al carrito </a>';
    this.style.color="white";
    this.style.backgroundColor="green"
    this.style.padding="20px";
    this.style.borderRadius="10px";
    this.style.margin="20px";
    this.style.fontFamily="arial";
    this.style.fontSize="30px";
    this.style.textDecoration ="none";
}

}

window.customElements.define("iralcarrito-ufpso", iralcarritoUfpso);