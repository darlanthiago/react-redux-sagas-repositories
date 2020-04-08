import { all, takeLatest, call, put } from 'redux-saga/effects';
import { ToastsStore } from 'react-toasts';


import axios from 'axios';
import { addRepoSuccess } from './actions';

function* addRepo({ payload }) {

    try {
        const response = yield call(axios.get, `https://api.github.com/repos/${payload.newRepo}`);

        if (response.data) {

            yield put(addRepoSuccess(response.data));

            ToastsStore.success('Repositório encontrado!!!');
        }

    } catch (error) {

        ToastsStore.error('Repositório não encontrado!!!');
    }


}


export default all([
    takeLatest('@repo/ADD_REQUEST', addRepo),
]);