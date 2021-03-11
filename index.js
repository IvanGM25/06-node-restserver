
require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', function (req, res) {
const users = [
        {
        id: 1,
        name: 'ivan',
        },
        {
        id: 2,
        name: 'marta',
        }
    ]

    res.json(users);
})

app.post('/users',  (req, res) => {

    const user = req.body;
    user.id = 124;

    const result = {
        message: `user created`,
        user
    }
    res.status(201).json(result);
})

app.put('/users/:id',  (req, res) => {
    const {id} = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'user update ',
        user
    }
    res.json(result);
})

app.patch('/users',  (req, res) => {
    const {id} = req.params;
    const user = req.body;

    user.id = id;
    const result = {
        message: 'user update with patch',
        user
    }
    res.json(result);
})

app.delete('/users/:id',  (req, res)=> {

    const {id} = req.params;
    //const id = req.params.id;
    const result = {
        message: `user wiht id:${id} deleted`
    }
    res.json(result);
})

app.listen(port,()=>{
    console.log(`##### App started. Port ${port} ######`);
})
