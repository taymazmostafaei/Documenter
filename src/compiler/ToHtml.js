class ToHtml {
    constructor(tagName,Inner,attr=false) {
        if (attr) {
            return `<${tagName} ${attr.name}="${attr.value}">${Inner}<${tagName}>`
        }
        return `<${tagName}>${Inner}<${tagName}>`
    }
}
module.exports = ToHtml
