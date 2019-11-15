import React from "react";
import CodeForm from "./codeForm";


class Rsvp extends React.Component{
    constructor(){
        super()
        this.state = {
            user:'',
            code:'',
            events:[]
        }
    }

    submitCode=(e)=>{
        e.preventDefault()
        fetch('/api/invite',{method: 'POST',body:JSON.stringify({code:this.state.code}),headers: {"Content-Type": "application/json"}})
    }

    valChange = (e)=>this.setState({[e.target.name]:e.target.value.toUpperCase()})

    render(){
        return <CodeForm submit = {this.submitCode} valChange = {this.valChange} code={this.state.code} />
    }
}



export default Rsvp