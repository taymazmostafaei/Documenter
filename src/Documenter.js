const FileReader = require('./FileReader');
const Documenter = {
    run: (files, options, callback) => {

        FileReader.run(files, function (reads) {
            var result = reads
            return callback(result)
        })

    }
}
module.exports = Documenter