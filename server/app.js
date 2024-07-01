const express =require('express')
const mongo = require('mongoose')
const cors = require('cors')
const cusModule= require('./module/module')


const app =express()
app.use(express.json())
app.use(cors())
mongo.connect('mongodb://localhost:27017/customers')
app.post('/auth', (req, res) =>{
    const {email , pass } = req.body
    cusModule.findOne({email: email})
    .then(user =>{
        if(user) {
            res.json('already exist')
        }
        else{
            cusModule.create(req.body)
            .then(customer => {res.json(customer)})
        }
    } )
    .catch(err => res.json(err))

} )
app.post('/auth-login', (req, res) => {
    const {email, pass } = req.body
    cusModule.findOne({email: email})
    .then(user => {
        if(user) {
            if (user.pass === pass) {
                res.json('good')
            }
        }
        else {
            res.json('bad')
        }
    })
    .catch(err => res.json(err))

})
app.listen(3000, ()=> {
    console.log('server is running in port 3000')
})