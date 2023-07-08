// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '/assets/styles/main.scss',
  ],
  // app: {
  //   head: {
  //     link: [
  //       { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  //       { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
  //       { href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Hanken+Grotesk:wght@500&family=Plus+Jakarta+Sans:wght@800&family=Roboto:wght@100;300;400;500;700;900&display=swap', rel: 'stylesheet' },
  //     ],
  //   },
  // }
})
