class ToHtml {
    run(tagName,Inner=false,attr=false) {
        if (Inner == false) {
            return `<${tagName} ${attr.name}="${attr.value}">`
        }
        if (attr) {
            return `<${tagName} ${attr.name}="${attr.value}">${Inner}</${tagName}>`
        }
        return `<${tagName}>${Inner}</${tagName}>`
    }
}
module.exports = ToHtml