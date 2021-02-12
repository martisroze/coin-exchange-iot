import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(2, 2, 65);
  color: #cccccc;
`;

class App extends React.Component {
  state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        {
        name: "Bitcoin",
        ticker: "BTC",
        balance: 0.5,
        price: 45000
        },
        {
        name: "Ethereum",
        ticker: "ETH",
        balance: 1.5,
        price: 1600
        },
        {
        name: "Litecoin",
        ticker: "LTC",
        balance: 2.5,
        price: 200
        },
        {
        name: "Chainlink",
        ticker: "LINK",
        balance: 5.5,
        price: 30
        },
      ],
  }
  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      } 
    });
  }
  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map(function(values) {
      let newValues = {...values};
      if (valueChangeTicker === values.ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
    this.setState({coinData: newCoinData})
  }
  render () {
    return (
      <Div className="App">
        <ExchangeHeader />
        <AccountBalance 
          amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}/>
        <CoinList 
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh}
          />
      </Div>
    );
  }
}

export default App;
