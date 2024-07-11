// Definizione degli array di parole e immagini associate
var wordPairs = [
  {
    word1: "Insalata di mare",
    image1: "img/Insalata-di-mare.jpg",
    word2: "Verdicchio dei Castelli di Jesiì",
    image2: "img/verdicchio-castelli-jesi-classico.jpg",
  },
  {
    word1: "Cannelloni al forno",
    image1: "img/cannelloni-sugo.jpg",
    word2: "Colli Bolognesi Barbera",
    image2: "img/Colli-Bolognesi-Barbera.jpg",
  },
  {
    word1: "Lepre in salmì",
    image1: "img/Lepre-in-salmì.jpg",
    word2: "Valpolicella Classico",
    image2: "img/Valpolicella-Classico.jpg",
  },
  {
    word1: "Mele al forno con salsa all’arancia",
    image1: "img/Mele-al-forno-con-salsa-all-arancia-e-zenzero.jpg",
    word2: "Malvasia delle Lipari Passito",
    image2: "img/Malvasia-delle-Lipari-Passito.jpg",
  },
  {
    word1: "Tonno scottato in semi di sesamo",
    image1: "img/Tonno-scottato-in-semi-di-sesamo.jpg",
    word2: "Langhe Bianco",
    image2: "img/Langhe-Bianco.jpg",
  },
];

document.getElementById("drawButton").addEventListener("click", function () {
  // Estrazione casuale di un abbinamento
  var randomIndex = Math.floor(Math.random() * wordPairs.length);
  var pair = wordPairs[randomIndex];

  // Aggiornamento dell'HTML con le parole e le immagini estratte
  document.getElementById("word1").textContent = pair.word1;
  document.getElementById("word2").textContent = pair.word2;

  document.getElementById("imageContainer1").style.backgroundImage =
    "url(" + pair.image1 + ")";
  document.getElementById("imageContainer2").style.backgroundImage =
    "url(" + pair.image2 + ")";
});
