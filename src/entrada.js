
import { useState, useEffect } from 'react';


const Entrada = ({history, location, match}) => {

  const [producto, setProducto] = useState({})

  console.log(match.params.entrada)
  console.log(match.params)
  console.log(location)
  console.log(history)

  useEffect( () => {
    fetch(`https://api.mercadolibre.com/items/${match.params.entrada}`)
    .then(res=> res.json())
    .then(data => setProducto(data))
  }, [match.params.entrada])

  console.log(producto)


    return (
      <div>
        <p>Hola producto {producto.title}</p>
      </div>
    );
  };
  
  export default Entrada;