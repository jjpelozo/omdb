import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { setSinglePelicula } from "../store/singlePelicula"




export default function SinglePelicula(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch()
  const [singlePelicula, setSinglePelicula] = useState({});

  const pelicula = useSelector((state)=> state.peliculas)


  useEffect(() => {
    //console.log("peliculasssssssssssoooooooolllllllaaaaa", singlePelicula);
    return axios
      .get(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
      .then((pelicula) => {
        
        setSinglePelicula(pelicula.data);
      });
  }, []);

  /* function handleSubmit() {
    return axios
      .get(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
      .then((pelicula) => {
          console.log(pelicula)
        setSinglePelicula(pelicula.data);
      });
  } */

  /*  http://www.omdbapi.com/?apikey=20dac387&i=${id} 
        http://www.omdbapi.com/?apikey=20dac387&i=${id} 
 */

  return (
    <div className= "box-pelicula">
      <h2>Titulo: {singlePelicula.Title}</h2>
      <h3>Año de Lanzamiento:{singlePelicula.Year}</h3>
      <img src={singlePelicula.Poster} alt="" />
      <h4>Actores:{singlePelicula.Actors}</h4>
      <h5>Genero:{singlePelicula.Genre}</h5>
      <h5>Directior:{singlePelicula.Director}</h5>
      <h5>Idiomas:{singlePelicula.Language}</h5>
      <p>Reseña:{singlePelicula.Plot}</p>
      <Link>
        <button className="btnHeader">Añadir a favoritos</button>
      </Link>
    </div>
  );
}