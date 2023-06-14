

import { filterReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);


// // Redux Toolkit 
// import { configureStore } from "@reduxjs/toolkit";
// // для работы с localStorage

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import { reducer  } from "./reducer";



// // persistConfig  добавляем в новый редюсер persistedReducer
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, reducer)
// // export const store = configureStore({reducer});
// export const store = configureStore({reducer: persistedReducer});

// export const persistor = persistStore(store)


















// import { reducer } from "./reducer";
// // import { reducer  } from "./reducer";
// // 1 если создавали как rootReducer, запись ниже
// // import { reducer as rootReducer } from "./reducer";
// // export const store = configureStore({reducer: rootReducer});

// // 2 если rootReducer назван reducer , то




 
// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({reducer: persistedReducer});
// // reducer становится ключём в configureStore, а persistedReducer  значением
// // export const store = configureStore({reducer}); это было, выше то что стало

// export const persistor = persistStore(store)
// после этого в оборачиваем index.js   <PersistGate loading={null} persistor={persistor}>
    // <App />
    // </PersistGate>

// 1 если создавали как rootReducer, запись ниже
// import { reducer as rootReducer } from "./reducer";
// export const store = configureStore({reducer: rootReducer});

// 2 если rootReducer назван reducer , то

// import { reducer  } from "./reducer";
// export const store = configureStore({reducer});




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


// 1 если создавали как rootReducer, запись ниже
// import { reducer as rootReducer } from "./reducer";
// export const store = configureStore({reducer: rootReducer});

// 2 если rootReducer назван reducer , то

