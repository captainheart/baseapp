import MockAdapter from 'axios-mock-adapter';
import { MockStoreEnhanced } from 'redux-mock-store';
import { Cryptobase, defaultConfig } from '../../../../api';
import { generateMockStore, setupMockAxios } from '../../../../helpers/jest';
import { PROFILE_RESET_USER } from '../../../user/profile/constants';
import { alertPush } from '../actions';
import { ALERT_DATA, ALERT_DELETE, ALERT_PUSH } from '../constants';

const debug = false;

describe('Alert error handler', () => {
    let store: MockStoreEnhanced;
    let mockAxios: MockAdapter;

    afterEach(() => {
        mockAxios.reset();
    });

    beforeEach(() => {
        mockAxios = setupMockAxios();
        store = generateMockStore(debug);
        Cryptobase.config = {
            ...defaultConfig,
            msAlertDisplayTime: '0.01',
        };
    });

    const payloadAlertErrorAccountNotActive = {
        code: 401,
        message: ['identity.session.not_active'],
        type: 'error',
    };

    const expectedErrorActionUnauthorized = {
        type: ALERT_PUSH,
        payload: payloadAlertErrorAccountNotActive,
    };

    const expectedUserProfileReset = {
        type: PROFILE_RESET_USER,
    };

    const expectedAlertErrorData = {
        type: ALERT_DATA,
        payload: {
            code: 401,
            message: ['identity.session.not_active'],
            type: 'error',
        },
    };

    const expectedDeleteError = {
        type: ALERT_DELETE,
    };

    it('should handle error alert fo 401', async () => {
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                switch (actions.length) {
                    case 1:
                        expect(actions).toEqual([expectedErrorActionUnauthorized]);
                        setTimeout(resolve, 0.01);
                        break;
                    case 2:
                        expect(actions).toEqual([expectedErrorActionUnauthorized, expectedUserProfileReset]);
                        setTimeout(resolve, 0.01);
                        break;
                    case 3:
                        expect(actions).toEqual([expectedErrorActionUnauthorized, expectedUserProfileReset, expectedAlertErrorData]);
                        setTimeout(resolve, 0.01);
                        break;
                    case 4:
                        expect(actions).toEqual([expectedErrorActionUnauthorized, expectedUserProfileReset, expectedAlertErrorData, expectedDeleteError]);
                        setTimeout(resolve, 0.01);
                        break;
                    default:
                        fail();
                }
            });
        });
        store.dispatch(alertPush(payloadAlertErrorAccountNotActive));

        return promise;
    });

    const errorCodeAccount2faNeeded = {
        code: 403,
        message: [''],
        type: 'error',
    };

    const expectedErrorAction2faNeeded = {
        type: ALERT_PUSH,
        payload: errorCodeAccount2faNeeded,
    };

    it('should skip 403 error', async () => {
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                if (actions.length === 1) {
                    expect(actions).toEqual([expectedErrorAction2faNeeded]);
                    setTimeout(resolve, 0.01);
                } else {
                    fail();
                }
            });
        });
        store.dispatch(alertPush(errorCodeAccount2faNeeded));

        return promise;
    });

    const errorCodeAccount = {
        code: 400,
        message: ['error message'],
        type: 'error',
    };

    const expectedErrorAlertPushAction = {
        type: ALERT_PUSH,
        payload: errorCodeAccount,
    };

    const expectedErrorAlertDataAction = {
        type: ALERT_DATA,
        payload: errorCodeAccount,
    };

    const expectedErrorAlertDeleteAction = {
        type: ALERT_DELETE,
    };

    it('should handle error alert', async () => {
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                switch (actions.length) {
                    case 1:
                        expect(actions).toEqual([expectedErrorAlertPushAction]);
                        setTimeout(resolve, 0.01);
                        break;
                    case 2:
                        expect(actions).toEqual([expectedErrorAlertPushAction, expectedErrorAlertDataAction]);
                        setTimeout(resolve, 0.01);
                        break;
                    case 3:
                        expect(actions).toEqual([expectedErrorAlertPushAction, expectedErrorAlertDataAction, expectedErrorAlertDeleteAction]);
                        setTimeout(resolve, 0.01);
                        break;
                    default:
                        fail();
                }
            });
        });
        store.dispatch(alertPush(errorCodeAccount));

        return promise;
    });
});
