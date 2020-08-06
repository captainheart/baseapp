import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Decimal, TickerTable } from '../../components';
import {
    Market,
    marketsFetch,
    marketsTickersFetch,
    selectMarkets,
    selectMarketsLoading,
    selectMarketTickers,
    setCurrentMarket,
} from '../../modules';
import { rangerConnectFetch } from '../../modules/public/ranger';
import { selectRanger } from '../../modules/public/ranger/selectors';

const defaultTicker = {
    amount: '0.0',
    last: '0.0',
    high: '0.0',
    open: '0.0',
    low: '0.0',
    price_change_percent: '+0.00%',
    volume: '0.0',
};

const MarketsTableComponent = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    const markets = useSelector(selectMarkets);
    const marketsLoading = useSelector(selectMarketsLoading);
    const marketTickers = useSelector(selectMarketTickers);
    const rangerState = useSelector(selectRanger);
    const [currentBidUnit, setCurrentBidUnit] = React.useState('');

    const handleRedirectToTrading = (id: string) => {
        const currentMarket: Market | undefined = markets.find(item => item.id === id);

        if (currentMarket) {
            props.handleChangeCurrentMarket && props.handleChangeCurrentMarket(currentMarket);
            dispatch(setCurrentMarket(currentMarket));
            history.push(`/trading/${currentMarket.id}`);
        }
    };

    const formatFilteredMarkets = (list: string[], market: Market) => {
        if (!list.includes(market.quote_unit)) {
            list.push(market.quote_unit);
        }

        return list;
    };

    React.useEffect(() => {
        if (!rangerState.connected) {
            dispatch(rangerConnectFetch({ withAuth: false }));
        }

        if (!markets.length && !marketsLoading) {
            dispatch(marketsFetch());
            dispatch(marketsTickersFetch());
        }

    }, [dispatch, rangerState.connected, markets, marketsLoading]);

    let currentBidUnitsList: string[] = [''];

    if (markets.length > 0) {
        currentBidUnitsList = markets.reduce(formatFilteredMarkets, currentBidUnitsList);
    }

    let currentBidUnitMarkets = props.markets || markets;

    if (currentBidUnit) {
        currentBidUnitMarkets = currentBidUnitMarkets.length ? currentBidUnitMarkets.filter(market => market.quote_unit === currentBidUnit) : [];
    }

    const formattedMarkets = currentBidUnitMarkets.length ? currentBidUnitMarkets.map(market =>
        ({
            ...market,
            last: Decimal.format(Number((marketTickers[market.id] || defaultTicker).last), market.amount_precision),
            open: Decimal.format(Number((marketTickers[market.id] || defaultTicker).open), market.price_precision),
            price_change_percent: String((marketTickers[market.id] || defaultTicker).price_change_percent),
            high: Decimal.format(Number((marketTickers[market.id] || defaultTicker).high), market.amount_precision),
            low: Decimal.format(Number((marketTickers[market.id] || defaultTicker).low), market.amount_precision),
            volume: Decimal.format(Number((marketTickers[market.id] || defaultTicker).volume), market.amount_precision),
        }),
    ).map(market =>
        ({
            ...market,
            change: Decimal.format((+market.last - +market.open)
                .toFixed(market.price_precision), market.price_precision),
        }),
    ) : [];

    return (
        <TickerTable
            currentBidUnit={currentBidUnit}
            currentBidUnitsList={currentBidUnitsList}
            markets={formattedMarkets}
            redirectToTrading={handleRedirectToTrading}
            setCurrentBidUnit={setCurrentBidUnit}
        />
    );
};

export const MarketsTable = React.memo(MarketsTableComponent);
