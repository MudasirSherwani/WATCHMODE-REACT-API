import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const root = combineReducers({
 
});
const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;