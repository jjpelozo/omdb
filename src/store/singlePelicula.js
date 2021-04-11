/* import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

//Action
export const setSinglePelicula = createAsyncThunk("SET_PELICULA", (id) => {
  return axios
  .get(`http://www.omdbapi.com/?apikey=20dac387&t=${id}`)
    .then((res) => res.data);
});

export const singlePeliculaReducer = createReducer([], {
  [setSinglePelicula.fulfilled]: (state, action) => action.payload,
});
 */