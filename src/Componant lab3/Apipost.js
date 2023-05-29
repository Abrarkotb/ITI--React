import axios from "axios";
import React, { Component } from "react";

class Apipost extends Component{
  constructor(props){
    super(props)
    this.state={
        userid:'',
        id:'',
        title:'',
        body:''
    }
  }
 HandlChange=(e)=>{
    this.setState({
        [e.target.name]: e.target.value
    })
 }

handlesubmit = (e) =>{
    e.preventDefault()

    axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
    .then((Response)=>{
        console.log(Response);
    })
    .catch()
   
    }



    render(){
        return(
        <form onSubmit={this.handlesubmit}>
            <div className="div2">
                <label>userId</label>
                <input type="text" name="userid" value={this.state.userid} onChange={this.HandlChange}/>
            </div>
            {/* <div className="div2">
                <label>ID</label>
                <input type="text" name="id" value={this.state.id} onChange={this.HandlChange}/>
            </div> */}
            <div className="div2">
                <label>title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.HandlChange}/>
            </div>
            <div className="div2">
                <label>Body</label>
                <input type="text" name="body" value={this.state.body} onChange={this.HandlChange}/>
            </div>
            <button className="submit" type="submit">add to post</button>
        </form>

        )
    }
}

export default Apipost;
