import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
   res.send('users')
})

const users = [
    {id:1 , name:'john doe' ,email: 'john.doe@example.com'},
    {id:2 , name:'bohn doe' ,email: 'bohn.doe@example.com'},
    {id:3, name:'BOD doe' ,email: 'bod.doe@example.com'},
    {id:4, name:'sob doe' ,email: 'sob.doe@example.com'}
]

app.get('/users',(req,res)=>{
    res.send(users)
})

app.listen(PORT,(req,res)=>{
    console.log(`server is ruuning ${PORT}`)
})