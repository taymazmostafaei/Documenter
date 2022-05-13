const Compiler = require('./compiler/Compiler.js')
const FileReader = {
    run:(files, callback) => {
        var result = []

        files.forEach(file => {
            var html = ''
            var lineReader = require('readline').createInterface({
                input: require('fs').createReadStream(file)
            });

            lineReader.on('line', function (line) {
                Compiler.run(line,function(compield){
                   html += compield
                })
            });
            lineReader.on("close",function () { 
                result.push('title',html)
             })

        });

        return callback(result)
    }
}
module.exports = FileReader