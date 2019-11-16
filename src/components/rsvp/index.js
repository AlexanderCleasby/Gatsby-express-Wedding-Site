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
        .then((res)=>{
            if (!res.ok){
                throw Error(res.status)
            }
            else{
                return res.json()
            }
        })
        .then((res)=>this.setState((prev)=>({...prev,name:res.name,plus1s:res.plus1s})))
        .catch((err)=>{console.log(err.message)})
    }

    valChange = (e)=>{
        if(e.target.value.length<=5){
            this.setState({[e.target.name]:e.target.value.toUpperCase()})
        }
    }

    render(){
        return <CodeForm submit = {this.submitCode} valChange = {this.valChange} code={this.state.code} />
    }
}



export default Rsvp