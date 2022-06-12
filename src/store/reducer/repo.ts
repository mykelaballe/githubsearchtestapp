import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "repo",
    initialState: {
        list: {
            requesting: false,
            data: [],
            success: false,
            error: ""
        }
    },
    reducers: {
        attemptGetRepo: (state, action) => {
            state.list.requesting = true;
            state.list.success = false;
            state.list.error = "";
        },
        doneAttemptGetRepo: (state) => {
            state.list.requesting = false;
        },
        setGetRepoSuccess: (state) => {
            state.list.success = true;
            state.list.error = "";
        },
        setGetRepoError: (state, action) => {
            state.list.success = false;
            state.list.error = action.payload;
        },
        setRepo: (state, action) => {
            state.list.data = action.payload;
        }
    },
});

export const {
    attemptGetRepo,
    doneAttemptGetRepo,
    setGetRepoSuccess,
    setGetRepoError,
    setRepo
} = slice.actions;

export default slice.reducer;