import React, {useState} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [valoracion, setValoracion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { nombre, descripcion, precio,valoracion };
            const response = await fetch ('http://localhost:5000/add',{
                method:'POST',
                headers: { "Content-Type":"application/json" },
                body:JSON.stringify(body)
            })
            console.log(response);
        } catch (error) {
        
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder='Ingrese el nombre original' onChange={ e => setNombre (e.target.value)} value={nombre} required/>
            </div>
            <div className="mb-3">
                <label for="superheroName" className="form-label">Descripcion</label>
                <input type="text" className="form-control" id="descripcion" placeholder='Ingrese el nombre del superheroe' onChange={ e => setDescripcion (e.target.value)} value = {descripcion} required/>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Precio</label>
                <input type="number" className="form-control" id="precio" placeholder='Precio' onChange={e => setPrecio(e.target.value)} value={precio} required/>
            </div>
            <div className="mb-3">
                <label for="Valoracion" className="form-label">Valoracion</label>
                <input type="number" className="form-control" id="valoracion" placeholder='Valoracion del producto' onChange={e => setValoracion(e.target.value)} value={valoracion} required/>
            </div>
             <button type="submit" className="btn btn-primary">Submit</button>
        </form>
)
}

export default Formulario;