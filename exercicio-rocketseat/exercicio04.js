function experiencia(anos) {
  if (anos <= 1) {
    document.write('Iniciante');
  } else if (anos > 1 && anos <= 3) {
    document.write('Intermediário');
  } else if (anos > 3 && anos <= 6) {
    document.write('Avançado');
  } else {
    document.write('Jedi Master');
  }
}
var anos = 7;
