let container = document.getElementById('container');

function loadPage(page) {
  import(`./pages/${page}.mjs`)
    .then(module => {
      container.innerHTML = ""; // Bersihin kontainer sebelum load baru
      let Component = module.default();
      console.log(Component)
      container.appendChild(Component);
    })
    .catch(err => console.error(`Error loading ${page}:`, err));
}

// Cek route
let route = window.location.hash.replace("#", "") || "home";
console.log(route);
loadPage(route);