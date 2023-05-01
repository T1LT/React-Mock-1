/*
https://www.epochconverter.com/


First, install this package
https://github.com/polygon-io/client-js

Welcome to Gamestop, we're running in house simulations in order to figure out how to "maximize" share capital
To do this, we want you to create a proof of concept "realtime" stock price notification app

You should try to accomplish the following:

1. Make a get request to polygon.io. You should use the documentation provided above, and receive all of stock data requests. Uses the following API key. 

const API_KEY = 'lSQpT7okeKaPTxOXCzX0WSvJo8vn1pjK';

You should request about one years worth of daily chart data.
Please note that polygon.io's api only allows to 
Do not push the key to github, or we will sue you like we're Nintendo

max of 5 calls every min

2. You should store the results of this request in a variable (type of your choice) to access it later. After you've retrieved all the data for the timestamp, you should have the following datapoints (among others)

open, high, low, close (OHLC)
unix timestamp

3. We want you to create a graphic which shows the following:
The ticker name
The OHLC. Emphasize the closing price, as this is what our customers want to see
The date of that OHLC
Center the element that contains the above items

<-- COME BACK TO THIS -->
Prices should change to the next day's every 10 seconds
If there are no other days left to query from, we should loop back to the first set of price points

3b.  Bonuses: Come back to these after doing 4.
Illustrate a running array of the last 10 days of closing prices gathered, if the price was greater than the last price, than make it green colored, else make it red colored

4. Users should be able to edit the ticker they want to see data for. The page should rerender if and only if the ticker change is submitted.
*/