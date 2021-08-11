import React from "react";
import logo from '../assets/images/Logo_ML@2x.png.png.png';
import '../styles/PageNotFound.scss';
import { Link } from "react-router-dom";



function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found__header">
        <img src={logo} alt="logo" />
      </div>
      <div className="page-not-found__main">
        <h1>Pagina no encontrada, Error 404</h1>
        <Link to="/"><button className="page-not-found__main--button"><strong>Home</strong></button></Link>
      </div>
    </div>
  );
}

export default PageNotFound;
