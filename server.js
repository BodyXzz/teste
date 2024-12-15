const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    //console.log(req)
    console.log("IP: "+ip)

    res.send(`<h1>Bem-vindo ao site!</h1><p>Seu IP é: ${ip}</p>`);
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});