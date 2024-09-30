3) let numCartas = parseInt(prompt("Quantas cartas deseja sortear?"));
let i = 0;

while (i < numCartas) {
  let naipe = Math.floor(Math.random() * 4);
  let numero = Math.floor(Math.random() * 13) + 1;
  
  let naipes = ["Copas", "Ouros", "Espadas", "Paus"];
  
  console.log(`Carta sorteada: ${numero} de ${naipes[naipe]}`);
  i++;
}