const ToHtml = require('./ToHtml');
const Attr = require('./Atter');
const Compiler = {
    run:(line,callback)=>{

        var separated = line.split(":");
        var sign = separated[0]
        var value = separated[1]
        console.log(sign,value);
        
        var compield = new ToHtml('h1',value)
    
        return callback(compield)
    }//,
    // translateTag:(sign)=>{
    //     if (sign == 'h') {
    //         return 'h1'
    //     }
    // }
}
module.exports = Compiler