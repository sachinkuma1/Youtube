import appslice from "./appslice";
import {configureStore} from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        app:appslice,
    }
})

export default store;