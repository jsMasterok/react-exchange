import React from 'react';
import { useState } from 'react';

import useSWR from 'swr';
import { fetcher } from './helpers/fetcher';

import Header from './components/Header';
import ExchangeBlock from './components/ui/ExchangeBlock';
import Preloader from './components/ui/Preloader';

const API = 'https://636af1b8c07d8f936daa9e2f.mockapi.io/react-exchange';

export default function App() {
    // Get Data
    const { data, isLoading, error } = useSWR(API, fetcher);
    //
    // States
    const [fromCurrency, setFromCurrency] = useState('UAH');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    //
    // Rates List
    const rates = data?.rates;
    //
    //  Operations
    const operationFrom = (val) => {
        const price = val / rates[fromCurrency];
        const result = price * rates[toCurrency];
        const formaterResult = result.toFixed(2);
        setToValue(formaterResult);
        setFromValue(val);
    };

    const operationTo = (val) => {
        const price = rates[fromCurrency] / rates[toCurrency];
        const result = price * val;
        const formatResult = result.toFixed(2);
        setFromValue(formatResult);
        setToValue(val);
    };

    // useEffect(() => {
    //     // Header currencyes
    //     const USD = rates[0].toFixed(2);
    //     const EUR = (USD / rates[1]).toFixed(2);
    //     const GBP = (USD / rates[2]).toFixed(2);
    //     //
    // }, []);

    return (
        <div className="relative flex min-h-screen w-screen flex-col bg-gradient-to-br from-lavender-gradient-from to-lavender-gradient-to p-2">
            {isLoading && <Preloader />}
            {error && <Preloader error={error} />}
            <Header rates={rates} />
            <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center p-2">
                <div className="flex w-full flex-col gap-4 rounded-md bg-snow-white p-4 md:flex-row">
                    <ExchangeBlock
                        value={fromValue}
                        onChangeValue={operationFrom}
                        currency={fromCurrency}
                        onChangeCurrency={setFromCurrency}
                    />
                    <ExchangeBlock
                        value={toValue}
                        onChangeValue={operationTo}
                        currency={toCurrency}
                        onChangeCurrency={setToCurrency}
                    />
                </div>
            </div>
        </div>
    );
}
