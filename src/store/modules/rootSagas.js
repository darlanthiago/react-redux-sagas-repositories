import { all } from 'redux-saga/effects';

import repositories from './repositories/saga';

export default function* rootSaga() {
    return yield all([

        repositories,

    ]);
}