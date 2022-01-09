const express=require('express');
const app=express();
const data=require('./user.json')
app.use(express.json());
console.log(data)



app.get('/',(req,res)=>{
    
    res.send(data)
})

app.listen(2345,()=>{
    console.log("Server is running in port 2345")
})