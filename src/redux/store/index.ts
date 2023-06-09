import Storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import currentUserReducer from "../reducers/currentUserReducer";
import charactersReducer from "../reducers/charactersReducer";
import placesReducer from "../reducers/placesReducer";
import notesReducer from "../reducers/noteReducer";
import storiesReducer from "../reducers/storiesReducer";

const persistConfig = {
  storage: Storage,
  key: "root",
};

const combinedReducer = combineReducers({
  currentUser: currentUserReducer,
  characters: charactersReducer,
  places: placesReducer,
  notes: notesReducer,
  stories: storiesReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistedStore };
