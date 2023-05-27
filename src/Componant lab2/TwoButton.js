import React, { Component } from 'react';
import './Comp.css'
class TwoButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleIncrement = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  };

  handleDecrement = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

  render() {
    const { quantity } = this.state;

    return (
      <div className='div'>
        <button className='button' onClick={this.handleDecrement}>-</button>
        <span className='span'>{quantity}</span>
        <button className='button' onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default TwoButton;