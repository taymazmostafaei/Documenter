const Documenter = require('./Documenter');
Documenter.run(
  [
    ['F:/Documenter/title.dc','first one'],
    ['F:/Documenter/fifa.dc','secound']
  ],
  { demo: 'simple' },
  (result) => {
    console.log(result);
  })