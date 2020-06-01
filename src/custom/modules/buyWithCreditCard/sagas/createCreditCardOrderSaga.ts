// tslint:disable-next-line
import { call, put } from 'redux-saga/effects';
import { API, RequestOptions } from '../../../../api';

import {
    creditCardOrderData,
    creditCardOrderError,
    CreditCardOrderFetch,
} from '../actions';

const referralCommissionOptions: RequestOptions = {
    apiVersion: 'instexService',
};

export function* createCreditCardOrderSaga(action: CreditCardOrderFetch) {
    try {
        const data = yield call(API.post(referralCommissionOptions), `/private/orders/new`, action.payload);
        yield put(creditCardOrderData(data));
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.log('error', error);
        yield put(creditCardOrderError(error));
    }
}
