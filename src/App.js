import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo" />
        <h1 className="App-title">
          Coin Exchange 
        </h1>
      </header>
      <table className="coin-table"/>
      <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={38000.00}/>
          <Coin name="Litecoin" ticker="LTC" price={200.00}/>
          <Coin name="Ethereum" ticker="ETH" price={1600.00}/>
          <Coin name="Chainlink" ticker="LINK" price={25.00}/>
        </tbody>
    </table>
    </div>
  );
}

export default App;
