import React, { useState, useEffect, useMemo } from 'react';
import './style.css';
import { fetchData, getStockInfo } from './utils.js';

export default function App() {
  const [ticker, setTicker] = useState('');
  const [stockData, setStockData] = useState({});
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);
  // const calculation = useMemo(() => fetchData(ticker, setStockData), [ticker]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(ticker, setStockData);
    setTicker('');
    setFlag(true);
  };

  console.log(stockData);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter(prev => (prev + 1) % (stockData?.results?.length - 1));
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [flag]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>

      <div className="results">
        <h1>{stockData.ticker}</h1>
        <p>{getStockInfo(stockData, counter)}</p>
      </div>
    </div>
  );
}
