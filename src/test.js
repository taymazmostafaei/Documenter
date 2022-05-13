const Documenter = require('./Documenter');
Documenter.run(
  ['F:/Documenter/title.dc'],
  { demo: 'simple' }, 
  (result) => {
    console.log(result);
  })