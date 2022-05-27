const express = require ("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//-----------------------------------Administrador-----------------------------------------------

app.post("/add",async(req,res) => {
    try {
        const { nombre, descripcion, precio, valoracion} = req.body;
        const newAdd = await pool.query(
            "INSERT INTO producto (nombre,descripcion,precio,valoracion) VALUES($1,$2,$3,$4)",
            [nombre,descripcion,precio,valoracion]
            );
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/delete/:id",async (req,res) => {
    try {
        const { id } = req.params
        console.log({id});
        const del = await pool.query("DELETE FROM producto WHERE id = $1", [id])
        console.log("Eliminado con exito");
    } catch (err) {
        console.log(err.message);
    }
})

//AGREGAR RUTA UPDATE


//---------------------------------Cocina----------------------------------------------------------
app.get("/Pedidos",async(req,res)=>{
    try {
        const ped = await pool.query("SELECT * FROM pedidos")   
    } catch (error) {
        console.log(error);
    }
})



//---------------------------------Cliente---------------------------------------------------------

app.get("/:id", async (req,res)=>{
    try {
        const { id } = req.params;
        const all = await pool.query("SELECT * FROM producto WHERE id = $1",[id])
        res.json(all.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/",async (req,res) =>{
    try {
        const all = await pool.query("SELECT * FROM producto");
        res.json(all.rows)
    } catch (error) {
        
    }
})


//PENSAR COMO MOSTRAR LOS PEDIDOS DE UN SOLO USUARIO


app.get("/Favoritos", async(req,res)=>{
    try {
        const favs = await pool.query("SELECT * FROM favoritos")
    } catch (error) {
        console.log(error);
    }
})

//------------------------------------------------Server---------------------------------------

app.listen(5000, () => {
    console.log('corriendo en puerto 5000');
});