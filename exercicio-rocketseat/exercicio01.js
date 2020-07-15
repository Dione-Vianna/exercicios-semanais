var endereco = {
  rua: 'Rua dos pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP',
};

function usuario() {
  document.write(
    `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na "${endereco.rua}" com o n° ${endereco.numero}`
  );
}
