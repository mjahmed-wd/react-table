import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import {reduxBatch} from "@manaflair/redux-batch";
import { persistStore, persistReducer } from "redux-persist";
// import {rootReducer, rootSaga} from "./rootReducer";
// import { rootReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["localStorage"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  //   sagaMiddleware
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  //   enhancers: [reduxBatch]
});

export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

export default store;
