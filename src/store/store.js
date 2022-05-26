import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './githubSlice';
const myStore = {
    github: {
        repos: [],
        status: 'INITIAL',
    },
};

const store = configureStore({
    reducer: {
        github: githubReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
