3) let somatorio = 0;
let numero;

// Usando for para controlar a repetição
for (;;) {
    numero = parseFloat(prompt("Digite um número (0 para sair):"));
    if (numero === 0) {
        break; // Sai do laço quando o número for 0
    }
    if (numero > 0) {
        somatorio += numero;
    }
}

console.log(`O somatório dos números é: ${somatorio}`);