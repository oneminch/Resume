import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-05",
    devtools: { enabled: true },
    modules: [
        "@nuxt/icon",
    ],
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            title: "Professional Résumé Template",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    name: "description",
                    content: "A professional Résumé/CV template built with Nuxt",
                }
            ],
            link: [
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png"
                },
                {
                    rel: "icon",
                    sizes: "32x32",
                    href: "/favicon-32x32.png"
                },
                {
                    rel: "icon",
                    sizes: "16x16",
                    href: "/favicon-16x16.png"
                },
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/favicon.ico"
                },
                {
                    rel: "manifest",
                    href: "/site.webmanifest"
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
