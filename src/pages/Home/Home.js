import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/Select/Select';
import { Option } from '../../components/Select/Option/Option';
import { Link } from '../../components/Link/Link';

export const Home = () => {
  const [currenciesOptions, setCurrenciesOptions] = useState([]); //Set all select options
  const [from, setFrom] = useState('USD'); //Set from currency
  const [to, setTo] = useState('PHP'); //Set to currency
  const [exchangeRate, setExchangeRate] = useState(0); //Set exchange value, means 1 USD = 3.97 PLN
  const [currencyAmountInput, setCurrencyAmountInput] = useState(1); //User input value
  
  const getData = () => {
    axios.get('https://free.currconv.com/api/v7/currencies?apiKey=c4ce82a9581c86dfe0e5')
      .then(response => {
        setCurrenciesOptions(Object.keys(response.data.results).sort());
      })
  }
  
  const getExchangeRate = () => {
    axios.get(
      `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=c4ce82a9581c86dfe0e5`
      )
      .then(response => {
        setExchangeRate(response.data[`${from}_${to}`])
      })
  }

  useEffect(() => {
    getData();
    getExchangeRate();
  }, [from ,to])

  const handleInput = (e) => {
    setCurrencyAmountInput(e.target.value);
  }

  const swithOptionValues = () => {
    let temp = from;
    setFrom(to);
    setTo(temp)
  }

  return (
    <div>
      <h2>Currency Converter</h2>

      <div>
        <Input 
          type='number' 
          name='currency-amount-input' 
          value={currencyAmountInput}
          placeholder='Currency Amount' 
          onChange={handleInput}
        />

        <p>
          <Select 
            value={from} 
            name='first_value' 
            onChange={e => setFrom(e.target.value)}
          >
            {currenciesOptions.map((item, index) => (
              <Option 
                value={item} 
                key={`List-item-${index}`}
                txt={item}
              />
            ))}
          </Select>
        </p>

        <p>
          <Button txt='Switch' onClick={swithOptionValues}/>
        </p>

        <p>
          <Select 
            value={to} 
            name='second_value' 
            onChange={e => setTo(e.target.value)}
          >
            {currenciesOptions.map((item, index) => (
              <Option 
                value={item} 
                key={`List-item-${index}`}
                txt={item}
              />
            ))}
          </Select>
        </p>

        <p>
          <span>
            {exchangeRate !== 0 && (
              `${currencyAmountInput} ${from} = ${currencyAmountInput * exchangeRate} ${to}`
            )}
          </span>
        </p>

        <p>
          <Link 
            href='https://pl.reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Made with React
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  )
}