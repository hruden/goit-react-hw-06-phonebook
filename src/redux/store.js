import { combineReducers} from "redux"
import contactsReducer from "./slice";
import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: "contactsBook",
    storage,
    blacklist: ['filter']
  };

const rootReducer = combineReducers({
    contactsBook: contactsReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(rootReducer)
// export default store

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
