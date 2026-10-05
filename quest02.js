let palavroes = [
  "Inconstitucionalíssimo",
  "Otorrinolaringologista",
  "Pneumoultramicroscopicossilicovulcanoconiose",
  "Oftalmotorrinolaringologista"
];

const tamanhos = (palavra) => {return palavra.length};

console.log(palavroes.map(tamanhos).join(", "));