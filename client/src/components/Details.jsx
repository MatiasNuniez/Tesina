import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../app.css'

const Details = () => {
  const [food, setFood] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const { id } = useParams();

  const delToDb = async id => {
    try {
      const resp = await fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE'
      })
      console.log(resp);
    } catch (err) {
      console.log(err.message);
    }
  }

  const addCart = async (id) => {
    try {
      const newCart = [...carrito, id]
      setCarrito(newCart)
    } catch (err) {
      console.log(err.message);
    }
  }


  const getFood = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${id}`);
      const data = await response.json();
      setFood(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div style={{marginLeft:"30%"}}>
      {food.map((foo)=>(
      <div className="card mb-2" style={{ marginTop: "100px", width:"50%", display:"flex", alignItems:"center", textAlign:"center" }} key={foo.id}>
      <img src="https://elgourmet.s3.amazonaws.com/recetas/cover/milan_SuLEW9PUrTwyi0npoGIKD5zNqHmcAb.png" className="card-img-top" style={{ width: "80%", marginTop:"20px" }} alt={foo.id}/>
        <div className="card-body">
          <h5 className="card-title">{foo.nombre.toUpperCase()}</h5>
          <p className="card-text">{foo.descripcion.toUpperCase()}</p>
          <p className="card-text">${foo.precio}</p>
          <button
              className="btn btn-success"
              onClick={() => addCart()}
            >
              Agregar al carrito
            </button>
            <button className="btn btn-danger"
              onClick={() => delToDb(`${foo.id}`)}
            >
              Eliminar
            </button>
        </div>
    </div>
      ))}
    </div>
  );
};

export default Details;
