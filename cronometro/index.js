var cronometro = (function () {
  var horas = 0;
  var minutos = 0;
  var segundos = 0;
  let valor = document.getElementById('temporizador');
  var para = true;

  function iniciar() {
    if (para) {
      para = false;
      tempo = setInterval(timer, 1000);
    }
  }

  function parar() {
    para = true;
    clearInterval(tempo);
  }

  function zerar() {
    clearInterval(tempo);
    horas = 0;
    minutos = 0;
    segundos = 0;

    valor.innerText = '00:00:00';
  }

  function timer() {
    segundos++;

    if (segundos == 59) {
      segundos = 0;
      minutos++;

      if (minutos == 59) {
        minutos = 0;
        horas++;
      }
    }

    valor.innerText = `${String(horas).padStart(2, '0')}:${String(
      minutos
    ).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  }

  return {
    iniciar,
    parar,
    zerar,
  };
})();
