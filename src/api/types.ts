export interface Config {
    api: {
        authUrl: string;
        tradeUrl: string;
        applogicUrl: string;
        rangerUrl: string;
        nodelogicUrl: string;
        exchangeRatesUrl: string;
        arkeUrl: string;
    };
    minutesUntilAutoLogout?: string;
    rangerReconnectPeriod?: string;
    withCredentials: boolean;
    storage: {
        defaultStorageLimit?: number;
    };
    gaTrackerKey?: string;
    msAlertDisplayTime?: string;
    incrementalOrderBook: boolean;
    // tslint:disable-next-line: no-any
    plugins: any[];
    isResizable: boolean;
    isDraggable: boolean;
    languages: string[];
}
