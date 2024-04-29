const {request} = require('express');

const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');
const app = express();

const router = express.Router();

//Creation of routers CRUD (Create - Read - Update - Delete)

//Create - POST (insert)

router.post("/", async (req,res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

//Read - GET
    //Get all users
router.get("/",async (req,res) =>{
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
})

    //Get only one user
router.get("/:id",async (req,res) =>{
    const id = req.params.id;
    const resp = await ModelUser.findById(id)
    res.send(resp);
})

//Update - PUT
router.put("/:id", async (req,res)=>{
    const body = req.body;
    const id = req.params.id;
    const resp = await ModelUser.findByIdAndUpdate({_id: id, body})
    res.send(resp);
})

//Delete - DELETE
router.delete("/:id",async (req,res) =>{
    const id = req.params.id;
    const resp = await ModelUser.deleteOne({_id: id})
    res.send(resp);
})

app.use(express.json())
app.use(router)

//Connection with port 3001

app.listen(3001, () => {
    console.log("El servidor está en el puerto 3001")
} )

dbconnect();
