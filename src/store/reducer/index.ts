import { combineReducers } from "@reduxjs/toolkit";

import repo from "./repo";

const rootState = combineReducers({
    repo
});

export default rootState;

export type RootState = ReturnType<typeof rootState>;