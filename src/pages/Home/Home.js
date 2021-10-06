import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Input } from '../../components/Input/Input';
import { Select } from '../../components/Select/Select';
import { Option } from '../../components/Select/Option/Option';
import { Link } from '../../components/Link/Link';

import { currencies } from '../../data/currencies';

export const Home = () => {
  const [currenciesData, setCurrenciesData] = useState({});
  const [currencyAmount, setCurrencyAmount] = useState({'currency-amount': 1});
  const [computeCurrency, setComputeCurrency] = useState([]);
  const [selectedCurrencyItems, setSelectedCurrencyItems] = useState(
    {
      'first_value': 'USD', 
      'second_value': 'PHP'
    }
  );

  // const getData = () => {
  //   axios.get('https://free.currconv.com/api/v7/currencies?apiKey=c4ce82a9581c86dfe0e5')
  //     .then(response => {
  //       setCurrenciesData(currenciesData.concat(response.results))
  //     })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  // const getCurrencyPrices = () => {
  //   axios.get(`https://free.currconv.com/api/v7/convert?q=${selectedCurrencyItems.first_value}_${selectedCurrencyItems.second_value}&compact=ultra&apiKey=c4ce82a9581c86dfe0e5`)
  //     .then(response => {
  //       setComputeCurrency(Object.values(response))
  //     })
  // }

  const handleInput = (e) => {
    const {name, value} = e.target;
    setCurrencyAmount({
      ...currencyAmount,
      [name]: value
    })
  }

  const handleSelectOnChange = (e) => {
    const {name, value} = e.target;
    setSelectedCurrencyItems({
      ...selectedCurrencyItems,
      [name]: value
    })
  }

  const swithOptionValues = () => {
    setSelectedCurrencyItems({
      'first_value': selectedCurrencyItems.second_value,
      'second_value': selectedCurrencyItems.first_value
    })
  }

  return (
    <div>
      <h2>Currency Converter</h2>

      <div>
        <Input 
          type='number' 
          name='currency-amount' 
          value={currencyAmount['currency-amount']}
          placeholder='Currency Amount' 
          onChange={handleInput}
        />

        <p>
          <Select 
            value={selectedCurrencyItems.first_value} 
            name='first_value' 
            onChange={handleSelectOnChange}
          >
            {currencies.map((item, index) => (
              <Option 
                value={Object.values(item)[0].id} 
                key={`List-item-${index}`}
                txt={Object.values(item)[0].id}
              />
            ))}
          </Select>
        </p>

        <p>
          <Button txt='Switch' onClick={swithOptionValues}/>
        </p>

        <p>
          <Select 
            value={selectedCurrencyItems.second_value} 
            name='second_value' 
            onChange={handleSelectOnChange}
          >
            {currencies.map((item, index) => (
              <Option 
                value={Object.values(item)[0].id} 
                key={`List-item-${index}`}
                txt={Object.values(item)[0].id}
              />
            ))}
          </Select>
        </p>

        <p>
          <span>
            {/* {`${currencyAmount['currency-amount']} ${selectedCurrencyItems.first_value} = ${currencyAmount['currency-amount'] * computeCurrency[0]} ${selectedCurrencyItems.second_value}`} */}
            {`${currencyAmount['currency-amount']} ${selectedCurrencyItems.first_value} = 3.97 ${selectedCurrencyItems.second_value}`}
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