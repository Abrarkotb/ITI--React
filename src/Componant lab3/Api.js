import axios from 'axios'
import React,{ Component } from 'react'
class Api extends Component{
    constructor(props){
        super(props)
        this.state={
        posts:[]
    }}
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            this.setState({
                posts :response.data
            })
        })
        .catch()
    }
    render(){
        return(
            <div>
                <h1>welcome</h1>
                {
                this.state.posts.map((post)=>(
                    <div className='div_api' key={post.id}>
                        {post.userId}<br></br>{post.id}<br></br>{post.title}<br></br>{post.body}
                    </div>
                ))
                }
            </div>
        )
    }
}
export default Api;