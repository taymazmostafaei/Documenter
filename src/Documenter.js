const FileReader = require('./FileReader');
const Render = require('./view/Render');
const Documenter = {
    run: (files, options) => {

        FileReader.run(files, function (reads) {
            var result = reads

            if (Render(result,options)) {
                console.log('nice !');
            } else {
                console.log('oh shit');
            }
        })

    }
}
module.exports = Documenter