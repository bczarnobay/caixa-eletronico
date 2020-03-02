const models = require('./models')
const notas = models.notas
const output = models.output

function isValueValid(value) {
    return (value % 10) === 0 && value > 0
}

function getNotas(value) {
    if(!isValueValid(value)){
        return false
    }    

    while(value > 0){
        withdrawn: { 
            for(var i = 0; i < notas.length; i++){
                if(value - notas[i] >= 0){
                    value = value - notas[i]
                    output[notas[i]]++
                    output['total']++
                    break withdrawn
                } 
            }
        }
    }
    return output['total'];
}

module.exports = {
    getNotas
}