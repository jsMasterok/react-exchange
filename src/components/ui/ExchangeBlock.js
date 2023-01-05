import React from 'react';

const defaultCurrencyes = ['UAH', 'USD', 'EUR', 'GBP'];

export default function ExchangeBlock({
    value,
    currency,
    onChangeValue,
    onChangeCurrency,
    ...props
}) {
    return (
        <div className="flex w-full flex-col gap-1">
            <select
                onChange={(e) => onChangeCurrency(e.target.value)}
                value={currency}
                className="rounded-md border border-alto-gray text-base font-semibold  focus:border-gull-gray focus:ring-gull-gray"
            >
                {defaultCurrencyes.map((item, index) => {
                    return (
                        <option
                            className="text-md font-medium "
                            key={index}
                            value={item}
                        >
                            {item}
                        </option>
                    );
                })}
            </select>
            <input
                value={value}
                placeholder="0,00"
                onChange={(e) => onChangeValue(e.target.value)}
                type="number"
                className="rounded-md border border-alto-gray font-mono text-xl font-medium placeholder:text-base-black focus:border-gull-gray focus:ring-gull-gray"
            />
        </div>
    );
}
