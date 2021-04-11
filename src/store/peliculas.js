import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

//Action
export const setPeliculas = createAsyncThunk(
  "SET_PELICULAS",
  (value = 'batman') => {
    return axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=f6b345cb&s=${value}`)
      .then((res) => res.data.Search);
  }
);

export const peliculasReducer = createReducer([], {
  [setPeliculas.fulfilled]: (state, action) => action.payload,
});
