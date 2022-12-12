import {configureStore, combineReducers} from '@reduxjs/toolkit'
import truck from "./truck.js";
import menus from "./menus.js";
import auth from "./auth.js";

const reducer = combineReducers({truck,menus,auth})
export default configureStore({reducer})