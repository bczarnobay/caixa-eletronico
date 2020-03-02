var caixa = require('./caixa');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("How much do you want to withdrawl?  ", (answer) => {
    const output = caixa.getNotas(answer)
    if (!output){
        rl.write('Invalid value, please try again.')
    } else {
        rl.write('You should receive ' + output + ' bills.')
    //     rl.write('\nHere is the detailed information for this operation' + 
    //              '\
    //      )
    }
    rl.close()
})


