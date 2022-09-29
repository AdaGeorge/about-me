const express = require('express');

const app = express();

app.get('/me', (req, res)=>{
    res.status(200).json({
        nombre: 'Adashi',
        edad: 24,
        pais: 'Venezuela'
    })
});

app.post('/metas', (req, res)=>{
    res.status(200).json({
        hobbie1: 'Tatuar',
        hobbie2: 'Ejercicios de flexibilidad',
        hobbie3: 'Programar'
    })
});

app.patch('/metas', (req, res)=>{
    res.status(200).json({
        metas1: 'Ahorrar',
        metas2: 'Ser la mejor fron-end',
        metas3: 'Hacer de mi trabajo una buena experiencia'
    })
});

app.put('/business', (req, res)=>{
    res.status(200).json({
        empresa1: 'Globant',
        empresa2: 'Apple',
        empresa3: 'Microsoft'
    })
});



app.listen(8000, ()=>{
    console.log('Server started at port 8000')
});