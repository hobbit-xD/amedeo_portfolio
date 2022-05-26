import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.github.com/users/hobbit-xD/repos';
export const fetchRepos = createAsyncThunk('repos/fetchRepos', async () => {
    try {
        const response = await fetch(url);
        const repos = response.json();
        return repos;
    } catch (error) {
        console.log(error);
    }
});

export const githubSlice = createSlice({
    name: 'github',
    initialState: {
        status: 'INITIAL',
        repos: [],
    },

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRepos.pending, (state) => {
            state.status = 'PENDING';
        });

        builder.addCase(fetchRepos.fulfilled, (state, action) => {
            state.repos = action.payload;
            state.status = 'SUCCESS';
        });

        builder.addCase(fetchRepos.rejected, (state) => {
            state.status = 'ERROR';
        });
    },
});

export default githubSlice.reducer;
