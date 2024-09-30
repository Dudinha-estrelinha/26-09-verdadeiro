4) let preco = 10;
let numeroPessoas = 1000;
let custoOrganizacao = 150;
let maiorLucro = 0;
let melhorPreco = preco;

while (numeroPessoas > 0) {
  let lucro = (preco * numeroPessoas) - custoOrganizacao;
  
  console.log(`Com o preço de R$${preco}, o número de pessoas seria ${numeroPessoas} e o lucro seria R$${lucro}.`);
  
  if (lucro > maiorLucro) {
    maiorLucro = lucro;
    melhorPreco = preco;
  }
  
  preco += 10;
  numeroPessoas -= 150;
}

console.log(`O melhor preço para maximizar o lucro é R$${melhorPreco}, com lucro de R$${maiorLucro}.`);