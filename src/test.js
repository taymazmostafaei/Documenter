const Documenter = require('./Documenter');
Documenter.run(
  ['F:/Documenter/title.dc', 'F:/Documenter/fifa.dc'],
  { demo: 'simple' },
  (result) => {
    console.log(result);
  })