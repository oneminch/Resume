import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-05",
    devtools: { enabled: false },
    modules: [
        "@nuxt/icon",
    ],
    css: ["~/assets/css/main.css"],
    app: {
        baseURL: "/Resume/",
        head: {
            title: "Professional Resume Template",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    name: "description",
                    content: "A professional Resume/CV template built with Nuxt",
                }
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
                },
            ],
        },
    },
    routeRules: {
        "/": {
            prerender: true,
        },
    },
    vite: {
        plugins: [tailwindcss()],
    }
});
