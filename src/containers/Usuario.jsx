import React, { useEffect , useContext} from "react";
import { UserContext } from "../index";



export default function SinglePelicula() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    //console.log("peliculasssssssssssoooooooolllllllaaaaa", singlePelicula);
  }, []);


  return (
    <div className= "">
      <h2>Nombre: {user.email}</h2>
      <h3>Email: {user.email}</h3>
      <h3>Peliculas Favoritas:</h3>
      
      
    </div>
  );
}
