import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../app.css'
//INVESTIGAR USELOCALSTORAGE.



const Cards = () => {

    const [data, setData] = useState([]);
    const [carrito, setCarrito] = useState([]);

    const addCart = async (id) => {
        try {
            const newCart = [...carrito,id]
            setCarrito(newCart)
        } catch (err) {
            console.log(err.message);
        }
    }

    const getAll = async () => {
        try {
            const response = await fetch ('http://localhost:5000');
            const dat = await response.json();
            setData(dat);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect (()=> {
        getAll();
    },[]);


    return(
        <div className='container' style={{marginLeft:"15%", marginRight:"15%"}}>
            <div className='cards'>
                {data.map(dat =>(
                    <div className="card" style={{width: "18rem"}} key={dat.id}>
                        <img className="card-img-top" src='https://elgourmet.s3.amazonaws.com/recetas/cover/milan_SuLEW9PUrTwyi0npoGIKD5zNqHmcAb.png' alt="imagen"/>
                        <div className="card-body">
                            <h5 className="card-title">{dat.nombre.toUpperCase()}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{dat.descripcion.toUpperCase()}</h6>
                            <p className="card-text">${dat.precio}</p>
                            <Link  to = {`/${(dat.id)}`} id = {dat.id} className="info btn btn-primary">Mas info</Link>
                            <button className='btn btn-success' onClick = { () => addCart(`${dat.id}`)}>Agregar al Carrito</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Cards;