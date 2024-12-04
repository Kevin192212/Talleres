const app = Vue.createApp({
    data() {
        return {
            menuItems: [
                { name: "Mac", link: "#" },
                { name: "iPad", link: "#" },
                { name: "iPhone", link: "#" },
                { name: "Watch", link: "#" },
                { name: "AirPods", link: "#" },
                { name: "TV y Casa", link: "#" },
                { name: "Entretenimiento", link: "#" },
                { name: "Soporte", link: "#" },
                { name: "Dónde comprar", link: "#" },
            ],
        };
    },
});

app.mount("#app");
