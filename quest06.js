let profissional = {
  titulo: 'Engenheiro de Software',
  departamento: 'Engenharia',
};

function isEngenheiro({titulo, departamento}) {
  return titulo.includes("Engenheiro") && Boolean(departamento);
}

console.log(isEngenheiro(profissional));

profissional.titulo = 'Marketing';

console.log(isEngenheiro(profissional));