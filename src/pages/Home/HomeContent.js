import React from 'react';

import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Input } from '../../components/Input/Input';
import { Link } from '../../components/Link/Link';
import { Option } from '../../components/Select/Option/Option';
import { Select } from '../../components/Select/Select';

export const HomeContent = ({
  currencyAmountInput,
  handleInput,
  handleSelect,
  from,
  to,
  currenciesOptions,
  swithOptionValues,
  exchangeRate
}) => {
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
            name='from'
            onChange={handleSelect}
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
          <Button txt='Switch' onClick={swithOptionValues} />
        </p>

        <p>
          <Select
            value={to}
            name='to'
            onChange={handleSelect}
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
              `${currencyAmountInput} ${from} = ${(currencyAmountInput * exchangeRate).toFixed(2)} ${to}`
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