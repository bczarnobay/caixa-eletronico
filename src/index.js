const caixa = require('./caixa');
const readline = require('readline')
const models = require ('./models')
const notas = models.notas

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("How much do you want to withdrawl?  ", (answer) => {
    const output = caixa.getNotas(answer)
    if (output === 0){
        rl.write('Invalid value, please try again.')
    } else {
        rl.write('\nYou should receive ' + output.total + ' bills.')
        rl.write(' You can find more detail about the transaction below:')
        for(var i = 0; i < notas.length; i++){
            rl.write('\n' + notas[i] + '$ bills: ' + output[notas[i]])
        }
    }
    rl.close()
})


