import {configureStore} from "@reduxjs/toolkit";
import studentReducer from "../reducers/studentSlice";
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


export const store = configureStore({
    reducer:{
        students:studentReducer
    }
})

// const rootReducer = combineReducers({
//     students: studentReducer
//   });
  
//   const configureStore = () => {
//     return createStore(
//       rootReducer,
//       compose(applyMiddleware(thunk))
//     );
//   };
  
//   export default configureStore;