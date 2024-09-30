5) let quantidadePessoas = parseInt(prompt("Quantas pessoas você quer cadastrar?"));
let maisJovemAltura = null;
let maisVelhaPeso = null;
let somaIdades = 0;

for (let i = 0; i < quantidadePessoas; i++) {
    let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} (em metros):`));
    let peso = parseFloat(prompt(`Digite o peso da pessoa ${i + 1} (em kg):`));

    if (i === 0 || idade < maisJovemAltura.idade) {
        maisJovemAltura = { idade: idade, altura: altura };
    }

    if (i === 0 || idade > maisVelhaPeso.idade) {
        maisVelhaPeso = { idade: idade, peso: peso };
    }

    somaIdades += idade;
}

let mediaIdades = somaIdades / quantidadePessoas;

console.log(`A altura da pessoa mais jovem é: ${maisJovemAltura.altura} metros`);
console.log(`O peso da pessoa mais velha é: ${maisVelhaPeso.peso} kg`);
console.log(`A média de idades é: ${mediaIdades}`);