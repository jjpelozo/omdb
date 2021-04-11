import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPeliculas } from "../store/peliculas";

import "../css/Peliculas.css";

export default function Peliculas() {
  const dispatch = useDispatch();
  const peliculas = useSelector((state) => state.peliculas);

  const [value, setValue] = useState("");
  
  useEffect(() => {
    dispatch(setPeliculas("batman"));
  }, []);

  useEffect(() => {
    dispatch(setPeliculas(value));
  }, [value]);


  const handleChange = (e) => {
    setValue(e.target.value);
  };

 
  return (
    <div>
      <div className="buscador">
        <input
          className="input-container-buscador"
          type="text"
          placeholder="Buscar peliculas"
          onChange={handleChange}
        />
       
      </div>

      <div className="container">
        {peliculas &&
          peliculas.map((pelicula) => (
            <div key={pelicula.imdbID}>
              <Link to={`/movies/${pelicula.imdbID}`} >
                <img src={pelicula.Poster} alt="" />
                {/*     <h2>{pelicula.Year}</h2>
              <h2>{pelicula.Type}</h2> */}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
