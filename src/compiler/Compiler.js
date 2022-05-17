const ToHtml = require('./ToHtml');
const Attr = require('./Atter');
const Compiler = {
    run: (line, callback) => {

        var separated = line.split(":");
        var sign = separated[0]
        var value = separated[1]
        var tohtml = new ToHtml()
        var translate
        var compiled = ''

        if (translate = Compiler.translateTag(sign, value)) {
            if (typeof translate === 'object' && translate !== null) {
                if (translate.value == false) {
                    compiled = tohtml.run(translate.tag,false,new Attr(translate.attr[0],translate.attr[1]))
                } else {
                    compiled = tohtml.run(translate.tag, translate.value, new Attr(translate.attr[0], translate.attr[1]))
                }
                
            } else{
                compiled = tohtml.run(translate, value)
            }

        }

        return callback(compiled)

    },
    translateTag: (sign, value) => {
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
        if (sign == 'l') {
            var separated = value.split(",");
            return {
                tag: 'a',
                value: separated[1],
                attr: ['href', separated[0]]
            }
        }
        if (sign == 'i') {
            return {
                tag: 'img',
                value: false,
                attr: ['src', value]
            }
        }
        if (sign == '') {
            return false
        }
        return false
    }
}
module.exports = Compiler