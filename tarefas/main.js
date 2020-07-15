function media() {
  // pega o valor digitado no input com o id nota
  var nota01 = parseInt(document.getElementById('nota01').value);
  var nota02 = parseInt(document.getElementById('nota02').value);
  var nota03 = parseInt(document.getElementById('nota03').value);
  var media = (nota01 + nota02 + nota03) / 3;

  // passa o resultado da media para a div com id resultado
  document.getElementById('resultado01').innerHTML = media;
}

var valor = [];
function maior() {
  // Adiciona um item ao arry
  valor.push(document.getElementById('valor').value);
  // Limpa o campo imput
  document.getElementById('valor').value = '';
  // Mostra o valor no dom
  document.getElementById('numeroAdd').innerHTML = valor;
}
function resultado() {
  valor.sort(function (a, b) {
    return a - b;
  });

  var str = '';
  for (var it = 0; it < valor.length; it++) {
    str += valor[it] + '-';
  }
  // Adiciona o ultimo item do arry na div com id resultado
  document.getElementById('resultado02').innerHTML = valor[valor.length - 1];
}
