const cacheName = "pwa-receitas";
const filesToCache = [
    "/",
    "/index.html",
    "/receitas/massas.html",
    "/receitas/doces.html",
    "/receitas/carnes.html",
    "/receitas/massas",
    "/receitas/doces",
    "/receitas/carnes",
    "/css/style.css",
    "/js/carousel.js",
    "/js/main.js",
    "/images/icone-256.png",
    "/images/icone-512.png",
    "/images/beijinho.jpg",
    "/images/bolo-chocolate.jpg",
    "/images/brigadeiro.jpg",
    "/images/churrasco.jpg",
    "/images/costela.jpg",
    "/images/espaguete.jpg",
    "/images/fettuccine.jpg",
    "/images/file-mignon.jpg",
    "/images/lasanha.jpg"
];

/* Inicializando a service worker e fazendo o download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

/* Disponibilizando o conteúdo quando estiver offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
