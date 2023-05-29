import React, { Component } from 'react'
class HandlingFormlog extends Component {

    constructor(props) {
        super(props)
        this.state={
            username: '',
            password:''
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

    handleFormSubmit= (e) => {
        alert(`UserName is ${this.state.username}, password: ${this.state.Password}`)
        e.preventDefault()
    }

    render() {
        const { username, password} = this.state
        return (
            <form className='form' onSubmit={this.handleFormSubmit}>
                <h1>Please Log In</h1>
                <div className='div2'>
                    <label className='label'>Username:</label>
                    <input type="text" required  value={username} onChange={this.handleUserNameChange} />
                </div>
    
                <div className='div2'>
                    <label className='label'>Password:</label>
                    <input type="password" required  value={password} onChange={this.handlepasswordChange} />
                </div>
          
                <button className='submit'  type='submit'>Log in </button>
            </form>
        )
      }
 }

export default HandlingFormlog;