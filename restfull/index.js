//npm install //instala/atualiza as dependencias do projeto
//npm install 'express' --save instala o pacote e inclui a dependencia no package.json
//npm install 'nodemon' -g  instala o pacote mas não inclui a dependencia no package.json//monitorar todas as alterações nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessário
//npm install nedb --save //banco de dados embarcado em javascript(tipo sqlite, derby, h2 etc)
//node 'nome do arquivo js' executa o arquivo
//nodemon 'index' executa o arquivo
//npm install consign --save instala o consign para trabalhar com rotas
//npm install body-parser --save
//npm install nedb --save
//npm install express-validator --save
//npm install express-generator -g //ferramenta geradora de aplicativos, express

const express = require('express');//carrega o módulo express(servidor http), nesse caso procura em 'node_modules'
const consign = require('consign');//módulo que abstrai toda a lógica de carregamento de módulos. Para trabalhar com rotas
const bodyParser = require('body-parser');//módulo capaz de converter o body da requisição para vários formatos. 
const expressValidator = require('express-validator');//biblioteca perfeita para validação, filtragem e tratamento de dados.

let app = express();
app.use(bodyParser.urlencoded({extended:false, limit:'50mb'}));

app.use(bodyParser.json({limit:'50mb'}));
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

app.listen(4000, '127.0.0.1', ()=>{
    console.log("Servidor Rodando normalmente!!!");
});
