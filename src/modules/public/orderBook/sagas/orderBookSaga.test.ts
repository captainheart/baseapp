import MockAdapter from 'axios-mock-adapter';
import { MockStoreEnhanced } from 'redux-mock-store';
import { generateMockStore, mockNetworkError, setupMockAxios } from '../../../../helpers/jest';
import { Market } from '../../markets';
import { orderBookData, orderBookError, orderBookFetch } from '../actions';
import { OrderBookState } from '../types';

// tslint:disable no-any no-magic-numbers
describe('Saga: OrderBook', () => {
    let store: MockStoreEnhanced;
    let mockAxios: MockAdapter;

    beforeEach(() => {
        mockAxios = setupMockAxios();
        store = generateMockStore();
    });

    afterEach(() => {
        mockAxios.reset();
    });

    const fakeMarket: Market = {
        id: 'btczar',
        name: 'BTC/ZAR',
        base_unit: 'btc',
        quote_unit: 'zar',
        min_price: '0.0',
        max_price: '0.0',
        min_amount: '0.0',
        amount_precision: 4,
        price_precision: 4,
    };

    const fakeError = {
        code: 500,
        message: ['Server error'],
    };

    const fakeOrderBook: OrderBookState = {
        asks: [
            {
                id: 202440,
                side: 'sell',
                price: '0.99',
                avg_price: '0.99',
                state: 'wait',
                market: 'btczar',
                created_at: '2018-11-21T15:19:48+01:00',
                volume: '0.12',
                remaining_volume: '0.09',
                executed_volume: '0.03',
                trades_count: 1,
                ord_type: 'limit',
            },
        ],
        bids: [
            {
                id: 203599,
                side: 'buy',
                price: '0.01',
                avg_price: '0.01',
                state: 'wait',
                market: 'btczar',
                created_at: '2018-12-14T14:20:12+01:00',
                volume: '0.1',
                remaining_volume: '0.041',
                executed_volume: '0.059',
                trades_count: 1,
                ord_type: 'limit',
            },
        ],
        loading: false,
    };

    const mockOrderBook = () => {
        mockAxios.onGet('/public/markets/btczar/order-book').reply(200, fakeOrderBook);
    };

    const expectedActionsFetch = [ orderBookFetch(fakeMarket), orderBookData(fakeOrderBook) ];

    const expectedActionsError = [ orderBookFetch(fakeMarket), orderBookError(fakeError) ];

    it('should fetch orderBook', async () => {
        mockOrderBook();
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                if (actions.length === expectedActionsFetch.length) {
                    expect(actions).toEqual(expectedActionsFetch);
                    resolve();
                }
            });
        });
        store.dispatch(orderBookFetch(fakeMarket));

        return promise;
    });

    it('should trigger an error (orderBook)', async () => {
        mockNetworkError(mockAxios);
        const promise = new Promise(resolve => {
            store.subscribe(() => {
                const actions = store.getActions();
                if (actions.length === expectedActionsError.length) {
                    expect(actions).toEqual(expectedActionsError);
                    resolve();
                }
            });
        });
        store.dispatch(orderBookFetch(fakeMarket));

        return promise;
    });
});
