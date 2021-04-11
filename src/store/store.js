import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { peliculasReducer } from "./peliculas"
import { singlePeliculaReducer} from "./singlePelicula"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    peliculas: peliculasReducer,
    singlePelicula: singlePeliculaReducer
  },
});

export default store;
