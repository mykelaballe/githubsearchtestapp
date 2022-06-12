import { takeLatest, call, put } from "redux-saga/effects";

import * as actions from "store/reducer/repo";

function* getRepo({ payload }) {
    try {
        console.log("search repo payload", payload);

        const res = yield call(fetch, `https://api.github.com/search/repositories?q=${payload}`);
        const jsonRes = yield res.json();

        console.log("search repo response", JSON.stringify(jsonRes, null, 2));

        yield put(actions.setRepo(jsonRes.items));
        yield put(actions.setGetRepoSuccess());
    }
    catch (error) {
        console.error("search repo error", error);
        yield put(actions.setGetRepoError(error));
    }

    yield put(actions.doneAttemptGetRepo());
}

export default function* () {
    yield takeLatest(actions.attemptGetRepo.type, getRepo);
}