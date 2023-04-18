import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cards: [],
    params: {
        tag: '',
        page: 1
    },
    apiEndpoints: {
        baseUrl: "/api",
        expand: "/api/expand",
        explore: "/api/explore",
        contribute: "/api/contribute"
    }
};

export const fetchData = createAsyncThunk(
    'app/fetchData',
    async (urlWithParams, { rejectWithValue }) => {
        try {
            const response = await axios.get(urlWithParams);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setParams: (state, action) => {
            state.params = action.payload;
        },
        setApiEndpoints: (state, action) => {
            state.apiEndpoints = action.payload;
        },
        incrementPage: (state) => {
            state.params.page = state.params.page + 1;
        },
        setFetchedData: (state, action) => {
            state.cards = action.payload;
        },
        addToFetchedData: (state, action) => {
            state.cards = [...state.cards, ...action.payload]; // Correctly concatenate the arrays
        },
    },
});

appSlice.extraReducers = (builder) => {
    builder.addCase(fetchData.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
};

export const { setParams, setApiEndpoints, incrementPage, setFetchedData, addToFetchedData } = appSlice.actions;
export default appSlice.reducer;
