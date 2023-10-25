

// Array de frases de biscoito da sorte
const frases = [
  "A vida é uma jornada, e o amor é o que a torna significativa.",
  "Acredite em si mesmo e todos os seus sonhos se tornarão realidade.",
  "A sorte favorece a mente bem preparada.",
  "Seja a mudança que você deseja ver no mundo.",
  "O segredo para obter adiante é simplesmente começar.",
  "A paciência é amarga, mas seus frutos são doces."
];

// Elementos do DOM
const sorteioLink = document.getElementById("sortear");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fraseBox = document.getElementById("frase");
const handleClickButton = document.getElementById("handleClick");

// Adiciona um ouvinte de evento para o link "Sortear"
sorteioLink.addEventListener("click", function(event) {
  event.preventDefault(); // Impede o comportamento padrão do link

  // Gere uma frase aleatória
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

  // Exiba a frase na tela 2 e oculte a tela 1
  fraseBox.textContent = fraseAleatoria;
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
});

// Adiciona um ouvinte de evento para o botão "Abrir outro biscoito"
handleClickButton.addEventListener("click", function() {
  // Oculte a tela 2 e exiba a tela 1 novamente
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  fraseBox.textContent = ""; // Limpa a frase anterior
});
