import { configureStore } from "@reduxjs/toolkit";
import museum from "./MuseumSlice";
import museumInfo from "./MuseumInfoSlice";

export default configureStore({
  reducer :{
    museum: museum.reducer,
    museumInfo:museumInfo.reducer
  }
})