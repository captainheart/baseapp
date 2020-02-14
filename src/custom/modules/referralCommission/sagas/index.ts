// tslint:disable-next-line
import { takeLatest, takeEvery } from 'redux-saga/effects';
import { REFERRAL_COMMISSION_BALANCES_FETCH, REFERRAL_COMMISSION_REFERRALS_FETCH } from '../constants';
import { referralCommissionBalancesFetchSaga } from './referralCommissionBalancesFetchSaga';
import { referralCommissionReferralsFetchSaga } from './referralCommissionReferralsFetchSaga';

export function* rootReferralCommissionSaga() {
    yield takeLatest(REFERRAL_COMMISSION_BALANCES_FETCH, referralCommissionBalancesFetchSaga);
    yield takeEvery(REFERRAL_COMMISSION_REFERRALS_FETCH, referralCommissionReferralsFetchSaga);
}