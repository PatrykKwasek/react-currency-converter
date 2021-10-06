import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Input } from '../../components/Input/Input';

import { currencies } from '../../data/currencies';
import { Select } from '../../components/Select/Select';
import { Option } from '../../components/Select/Option/Option';

export const Home = () => {
  const [currencyAmount, setCurrencyAmount] = useState({'currency-amount': 0})
  const [selectedCurrencyItems, setSelectedCurrencyItems] = useState({'first_value': 'USD', 'second_value': 'PHP'})
  const [currenciesData, setCurrenciesData] = useState({})

  // const getData = () => {
  //   axios.get('https://free.currconv.com/api/v7/currencies?apiKey=c4ce82a9581c86dfe0e5')
  //     .then(response => {
  //       setCurrenciesData(currenciesData.concat(response.results))
  //     })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

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

  return (
    <div>
      <h2>Currency Converter</h2>

      <div>
        <Input 
          type='number' 
          name='currency-amount' 
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
          <Button txt='Switch'/>
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
            {`1 ${selectedCurrencyItems.first_value} = 3.97 ${selectedCurrencyItems.second_value}`}
          </span>
        </p>

        <p>Made with React</p>
      </div>

      <Footer />
    </div>
  )
}