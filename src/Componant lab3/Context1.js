import React, { Component } from 'react'
import { UserConsumer } from './ContextMain';

class Context1 extends Component {

  render() {
    return (
        <UserConsumer>
        {
            (Arro) => {
                return (
                    <h3>WElcome {Arro}</h3>
                )
            }}
        </UserConsumer>
    )
  }
  
}

export default Context1;