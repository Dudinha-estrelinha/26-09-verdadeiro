1) let elefantes = parseInt(prompt("Quantos elefantes estão no ambiente?"));
let i = 1;

while (i <= elefantes) {
  if (i === 1) {
    console.log(`${i} elefante incomoda muita gente.`);
  } else {
    console.log(`${i} elefantes incomodam muito mais.`);
  }
  i++;
}