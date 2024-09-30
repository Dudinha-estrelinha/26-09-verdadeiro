2) let soma = 0;
let numero = 7;
let i = 0;

while (i < 20) {
  console.log(`Número da sequência: ${numero}`);
  soma += numero;
  numero += 4;
  i++;
}

console.log(`A soma dos 20 primeiros números da sequência é: ${soma}`);