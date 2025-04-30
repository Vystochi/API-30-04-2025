const { v4: uuidv4 } = require('uuid');

const express = require('express');
const fs = require('fs');
const router_aulas = require('./roteamento/aulas_router');
const app = express();
const PORT = 8000;
app.use(express.json());

const listarAulas = () => {

}

const atualizarAulas = () => {
    
}

app.use('/aulas', router_aulas);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});