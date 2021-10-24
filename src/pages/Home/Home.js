import React, { useEffect, useState } from 'react';

import { getData } from '../../components/Api/Api';
import { HomeContent } from './HomeContent';

export const Home = () => {
  const [currenciesOptions, setCurrenciesOptions] = useState([]); //Set all select options
  const [currencyName, setCurrencyName] = useState({
    from: 'USD',
    to: 'PHP'
  })
  const [exchangeRate, setExchangeRate] = useState(0); //Set exchange value, means 1 USD = 3.97 PLN
  const [currencyAmountInput, setCurrencyAmountInput] = useState(1); //User input value

  const getAPIData = () => {
    getData('currencies?')
      .then(response => {
        setCurrenciesOptions(Object.keys(response.data.results).sort());
      })
  }

  const getExchangeRate = () => {
    getData(`convert?q=${currencyName.from}_${currencyName.to}&compact=ultra&`)
      .then(response => {
        setExchangeRate(response.data[`${currencyName.from}_${currencyName.to}`])
      })
  }

  useEffect(() => {
    getAPIData();
    getExchangeRate();
  }, [currencyName.from, currencyName.to])

  const handleInput = (e) => {
    setCurrencyAmountInput(e.target.value);
  }

  const handleSelect = (e) => {
    const {name, value} = e.target;
    setCurrencyName({
      ...currencyName,
      [name]: value
    })
  }

  const swithOptionValues = () => {
    let temp = currencyName.from;
    setCurrencyName({
      from: currencyName.to,
      to: temp,
    })
  }

  return (
    <div>
      <HomeContent 
        currencyAmountInput={currencyAmountInput}
        handleInput={handleInput}
        handleSelect={handleSelect}
        from={currencyName.from}
        to={currencyName.to}
        currenciesOptions={currenciesOptions}
        swithOptionValues={swithOptionValues}
        exchangeRate={exchangeRate}
      />
    </div>
  )
}