import React, { Component } from 'react'
import HandlingFormlog from './HandlingFormlog'

class HandlingForm extends Component {

    constructor(props) {
        super(props)
        this.state={
            username: '',
            password:'',
            email:'',
           signupStatus:'false'
        }
    }
    
    handleUserNameChange= (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlepasswordChange=(event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleemailChange=(event) => {
        this.setState({
            email: event.target.value
        })
        console.log(event);
    }
    // handlegenderChange=(event) => {
    //     this.setState({
    //         gender: event.target.value
    //     })
    //     console.log(event);
    // }

    handleFormSubmit= (e) => {
        alert(`UserName is ${this.state.username}, password: ${this.state.Password} your email: ${this.state.email}`)
        e.preventDefault()
    }


  render() {
    
    const { username, password, email} = this.state
   
      return (
       
     <div>
        (signupStatus ? (<HandlingFormlog/> ) : (
        <form className='form' onSubmit={this.handleFormSubmit}>
            <h1>Please Submit this form</h1>
            <div className='div2'>
                <label className='label'>Username:</label>
                <input type="text" required  value={username} onChange={this.handleUserNameChange} />
            </div>

            <div className='div2'>
                <label className='label'>Password:</label>
                <input type="password" required  value={password} onChange={this.handlepasswordChange} />
            </div>

            <div className='div2'>
                <label className='label'>E-Mail:</label>
                <input type="text" required  value={email} onChange={this.handleemailChange} />
            </div>
            {/* <div className='div2'>
                <label className='label'>Gender:</label>
                <input type="text" required  value={gender} onChange={this.handlegenderChange} />
            </div> */}
            <button className='submit'  type='submit'>Submit</button>
        </form>
        ))
        </div>
)
       
  }
}

export default HandlingForm;
