3) let somatorio = 0;
let numero;

for (;;) {
    numero = parseFloat(prompt("Digite um número (0 para sair):"));
    if (numero === 0) {
        break; 
    }
    if (numero > 0) {
        somatorio += numero;
    }
}

console.log(`O somatório dos números é: ${somatorio}`);
