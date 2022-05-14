const ToHtml = require('./ToHtml');
const Attr = require('./Atter');
const Compiler = {
    run:(line,callback)=>{

        var separated = line.split(":");
        var sign = separated[0]
        var value = separated[1]
        var tohtml = new ToHtml()
        var compiled = tohtml.run(Compiler.translateTag(sign),value)
        return callback(compiled)
    },
    translateTag:sign=>{
        if (sign == 'h') {
            return 'h1'
        }
        if (sign == 'h2') {
            return 'h2'
        }
        if (sign == 'h3') {
            return 'h3'
        }
        if (sign == 'h4') {
            return 'h4'
        }
        if (sign == 'h5') {
            return 'h5'
        }
        if (sign == 'p') {
            return 'p'
        }
        if (sign == 't') {
            return 'text'
        }
    }
}
module.exports = Compiler