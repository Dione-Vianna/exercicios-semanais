function temHabilidade(skills) {
  var elemento = 'Javascript';
  var i = skills.indexOf(elemento);
  if (i != -1) {
    document.write('true');
  } else {
    document.write('false');
  }
}
var skills = ['Javascript', 'ReactJS', 'React Native'];
