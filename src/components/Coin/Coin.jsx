import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        // Prevent default action of submitting the form
        event.preventDefault();


        this.props.handleRefresh(this.props.ticker);
/*
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState( function(oldState) {
            return {
                price: oldState.price * randomPercentage
            };
        });
*/
    }
    
    render() {
        return(
            <tr>
                 <Td>{this.props.name}</Td>
                 <Td>{this.props.ticker}</Td>
                 <Td>${this.props.price}</Td>
                 <Td>
                     <form action="#" method="POST">
                     <button onClick={this.handleClick}>Refresh</button>
                     </form>
                 </Td>
             </tr>
         );
    }
}

Coin.propTypes = {
    name: PropTypes.string,
    ticker: PropTypes.string,
    price: PropTypes.number
}