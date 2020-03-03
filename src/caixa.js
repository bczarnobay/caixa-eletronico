const models = require('./models')
const notas = models.notas

function isValueValid(value) {
  return (value % 10) === 0 && value > 0
}

function getNotas(value) {
  let output = Object.assign({}, models.output)

  if(!isValueValid(value)){
    return 0;
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
  return output;
}

module.exports = {
    getNotas
}