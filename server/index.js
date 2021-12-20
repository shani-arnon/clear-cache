import express from "express";
import fs from 'fs/promises';


const app = express();

app.use(express.json())


app.get('/api/latest',async (req,res)=>{
    const content = JSON.parse(await fs.readFile('./data/meta.json'))
    res.status(200).json(content)
})

app.listen(3030,()=>{
    console.log('server is up!!!');
})