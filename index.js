const express = require('express');
const cors=require('cors')
const app=express();
app.use(cors());
app.use(express.json());
const port= process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send('wow,Hi,Hello from node with nodemon');
});
const users =[
    {id:0,name: 'sabana', email:'sabana@gmail.com',phone:'01788888888'},
    {id:1,name: 'sabanoor', email:'sabanoor@gmail.com',phone:'01788888889'},
    {id:2,name: 'shrabonti', email:'shrabonti@gmail.com',phone:'01788888887'},
    {id:3,name: 'suchoritra', email:'suchoritra@gmail.com',phone:'01788888886'},
    {id:4,name: 'soniya', email:'soniya@gmail.com',phone:'01788888885'},
    {id:5,name: 'susmita', email:'susmita@gmail.com',phone:'01788888884'}
]

app.get('/users',(req,res)=>{
    res.send(users)
})
// app.METHOD
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
console.log('hitting the posts',req.body);
// res.send(JSON.stringify(newUser));
res.json(newUser);
})

// dynamic api
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    // console.log(req.params.id);
    res.send(user)

})
app.listen(port,()=>{
    console.log('listening to port',port);
});