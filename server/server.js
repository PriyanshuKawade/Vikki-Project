import express  from 'express'
import mysql, { createConnection } from 'mysql'
import cors from 'cors'

const app=express();

app.use(cors());
app.use(express.json())

const db= mysql.createConnection({
    host:"localhost",
user:"root",
password:"root",
database:'crud'
})

app.get('/',(req,res)=>
{
    const sql="Select * from Contact";
    db.query(sql,(err,result)=>
    {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })

})
app.post('/Contact',(req,res)=>{
    const sql="Insert into Contact('Name','Phone') values (?)";
    const values =[
        req.body.name,
        req.body.Phone
]
db.query(sql,[values],(err,result)=>{
    if(err) return res.json(err);
    return res.json(result);
})
})

app.get('/read/:id',(req,res)=>
{
    const sql="Select * from Contact where ID=?";
    const id=req.params.id;
    db.query(sql,[id],(err,result)=>
    {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })

})

app.put('/udate/:id',(req,res)=>{
    const sql='Update Contact set `Name`=?, `Phone`=? where ID=? ';
    const id=req.params.id;
    db.query(sql,[req.body.name,req.body.Phone,id], (err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id',(req,res)=>{
    const sql="DELETE FROM Contact where ID=?";
    const id=req.params.id;
    db.query(sql,[id], (err,result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.listen(8081,()=>{
    console.log("Listening");
})