import { React, useState } from "react";
import "./App.css";
import Blog from "./blog";
import Contacto from "./contacto";
import Home from "./home";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Entrada from "./entrada";
import Page404 from "./page404";

function App() {
  // const [vista, setVista] = useState("home")

  // const [nombre, setNombre] = useState("Flor");

  // const cambio = () => {
  //   if (nombre === "Flor") {
  //     setNombre("Maca");
  //   }

  //   if (nombre === "Maca") {
  //     setNombre("Flor");
  //   }
  // };

  return (
    <>
      <BrowserRouter>
   
        <nav>
          <p>
            <Link to="/home">Home</Link>
          </p>
          <p>
            <Link to="/Blog">Blog</Link>
          </p>
          <p>
            <Link to="/Contacto">Contacto</Link>
          </p>
          <p>
            <Link to="/blog/MLA918076518">Televisor</Link>
          </p>
          <p>
            <Link to="/blog/MLA918426518">Celular</Link>
          </p>
        </nav>
    
    <Switch>
        <Route path="/home" component={Home}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/contacto" component={Contacto}></Route>
        <Route exact path="/blog/:entrada" component={Entrada}></Route>
        <Route component={Page404}></Route>
        </Switch>
  

      </BrowserRouter>

{/*  
      <h1>{nombre}</h1>
      <button onClick={cambio}>Cambiar nombre</button> */}


      {/* 

      <div>
   

     
    </div> */}
    </>
  );
}

export default App;
