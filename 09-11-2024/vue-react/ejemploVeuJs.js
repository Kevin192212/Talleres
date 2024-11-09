const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const contador = ref(0);

        const incrementarContador = () => {
            contador.value += 1;
        };

        const texto = ref("");

        const colorFondo = ref("Blanco");

        const alternarColorFondo = () => {
            colorFondo.value = colorFondo.value === "Blanco" ? "Azul" : "Blanco";
            document.body.style.backgroundColor = colorFondo.value === "Blanco" ? "#ffffff" : "#00bcd4";
        };

        return {
            contador,
            incrementarContador,
            texto,
            colorFondo,
            alternarColorFondo
        };
    }
});

app.mount("#app");
