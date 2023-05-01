const { restClient } = require('@polygon.io/client-js');
const rest = restClient('lSQpT7okeKaPTxOXCzX0WSvJo8vn1pjK');

export const fetchData = async (ticker, setStockData) => {
  rest.stocks
    .aggregates(ticker, 1, 'day', '2022-05-01', '2023-05-01')
    .then((data) => {
      setStockData({ ticker, results: data.results });
    })
    .catch((e) => {
      console.error('An error happened:', e);
    });
};

export const getStockInfo = (stockData, counter) => {
  let result = '';
  let curr = stockData.results[counter];
  result += `O: ${curr?.o}, H: ${curr?.h}, L: ${curr?.l}, C: ${curr?.c}`;
  return result;
};
