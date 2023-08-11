import { configureStore } from "@reduxjs/toolkit";
import museum from "./MuseumSlice";

export default configureStore({
  reducer :{
    museum: museum.reducer
  }
})