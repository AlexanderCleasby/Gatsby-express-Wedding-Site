import React from "react";
import Event from "../events/event";
import CodeForm from "./codeForm";


class Rsvp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            code:'',
            events:[],
            plus1s:0
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

    codeChange = (e)=>{
        if(e.target.value.length<=5){
            this.setState({[e.target.name]:e.target.value.toUpperCase()})
        }
    }

    render(){
        if(!this.state.name){
            return <CodeForm submit = {this.submitCode} valChange = {this.codeChange} code={this.state.code} />
        }
        else{
            return <React.Fragment>
                <h3>{this.state.name}</h3>
                {this.props.events.map((event,key)=>(
                    <Event key={key} {...event}>
                        <div>
                            foo
                        </div>
                    </Event>
                 ))
                }
            </React.Fragment>
        }
    }
}



export default Rsvp