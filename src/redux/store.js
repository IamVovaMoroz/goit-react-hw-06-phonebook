// import {  configureStore } from '@reduxjs/toolkit';
// // import { tasksReducer, filtersReducer } from "./reducer";
// // import { tasksReducer } from "./tasksSlice";
// // import { filtersReducer } from "./filtersSlice";



// // reducer Здесь rootReducer
// export const store = configureStore({
//   reducer: {
//     // console.log('store', store)
//     // tasks: tasksReducer,
//     // filters: filtersReducer,
//   },
// });

//Импортируется функция devToolsEnhancer.  Эта функция предоставляет возможность подключить расширение Redux DevTools в браузере для отладки Redux-хранилища.
// const { devToolsEnhancer } = require('@redux-devtools/extension');


// было Redux 


// import { reducer } from "./reducer";
// import { createStore } from 'redux';
// export const store = createStore(reducer);



// Redux Toolkit 
import { configureStore } from "@reduxjs/toolkit";
// 1 если создавали как rootReducer, запись ниже
// import { reducer as rootReducer } from "./reducer";
// export const store = configureStore({reducer: rootReducer});

// 2 если rootReducer назван reducer , то

import { reducer  } from "./reducer";
export const store = configureStore({reducer});
