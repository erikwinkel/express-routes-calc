const express = require('express')

const app = express()
const PORT = 8000

// app.get('/add/:x/:y', (req,res) => res.send(`${req.params.x} plus ${req.params.y} is ${parseInt(req.params.x) + parseInt(req.params.y)}`))
// app.get('/subtract/:x/:y', (req,res) => res.send(`${req.params.x} minus ${req.params.y} is ${parseInt(req.params.x) - parseInt(req.params.y)}`))
// app.get('/multiply/:x/:y', (req,res) => res.send(`${req.params.x} times ${req.params.y} is ${parseInt(req.params.x) * parseInt(req.params.y)}`))
// app.get('/divide/:x/:y', (req,res) => res.send(`${req.params.x} divided by ${req.params.y} is ${parseInt(req.params.x) / parseInt(req.params.y)}`))

app.get('/*', (req,res) => {
    let args = req.params[0].split('/').map(char => parseInt(char))
    switch(req.query.math){
        case "add":
            res.send(`${args.reduce((val, arg) => val + arg)}`)
            break
        case "subtract":
            res.send(`${args.reduce((val, arg) => val - arg)}`)
            break
        case "multiply":
            res.send(`${args.reduce((val, arg) => val * arg)}`)
            break
        case "divide":
            res.send(`${args.reduce((val, arg) => val / arg)}`)
            break
    }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
