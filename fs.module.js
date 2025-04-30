const fs = require ('fs')

const texto = 'Avaiterceiromaiordomundo'
fs.writeFile('./teste.txt', texto, (err) => {
    if (err){
    console.log(err)
    }
})