import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import appReducer from './slices/appSlice';

const store = configureStore({
    reducer: {
        app: appReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
