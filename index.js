//importando o express
const express = require("express");

//iniciando e passando para variavel
const app = express()

//primeiro parametro e a port ado servidor o segundo e o tratamento de erros,subindo o servidor
app.listen(4000,function(error){
    if(error) {
        console.log("servidor deu pau");
    } else{
        console.log("deu rock");
    }
});