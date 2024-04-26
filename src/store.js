import {configureStore} from "@reduxjs/toolkit"
import customerReducer from './slices/customerSlice'

export const store = configureStore({
    // IF YOU DO NOT WANT TO HIDE THE DETAILS THEN MAKE THIS devTools into true
    devTools:false,
    reducer: {
        customers: customerReducer,
  },
});