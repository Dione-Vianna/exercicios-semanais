var usuarios = [
  {
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJs', 'Redux'],
  },
  {
    nome: 'Gabriel',
    habilidades: ['VuesJs', 'Ruby on Rails', 'Elixir'],
  },
];

function habilidade() {
  for (const value of usuarios) {
    var usuario = value.nome;
    var habilidade = value.habilidades.join();
    document.write(`O ${usuario} possui as habilidades: ${habilidade} <br>`);
  }
}
