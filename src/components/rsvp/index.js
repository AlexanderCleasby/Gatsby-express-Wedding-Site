import React from "react";
import Event from "../events/event";
import CodeForm from "./codeForm";


class Rsvp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            code:'',
            attendingEvents:[],
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

    postRSVP = (e)=>{
        e.preventDefault()
    }

    codeChange = (e)=>{
        if(e.target.value.length<=5){
            this.setState({[e.target.name]:e.target.value.toUpperCase()})
        }
    }

    attendingChange = (e)=>{
        let checked = e.target.checked,
        title = e.target.name,
        attendingEvents = this.state.attendingEvents
        if (checked){
            this.setState({attendingEvents:[...attendingEvents,{title:title,attendees:1}]})
        }
        else{
            this.setState({attendingEvents:attendingEvents.filter((event)=>event.title!==title)})
        }
    }

    attendeesSelect=({event})=>{
        let numArray=[...new Array(this.state.plus1s+1).keys()].slice(1)
        let eventAttended = this.state.attendingEvents.map((e)=>e.title).includes(event)
        if(this.state.plus1s>1 && eventAttended){
            return (
            <React.Fragment>
                <label>Great! how many in your party?</label>
                <select>
                    {numArray.map((v,i)=><option key={i}>{v}</option>)}
                </select>
            </React.Fragment>)
        }
        else{
            return ""
        }
    }


    render(){
        if(!this.state.name){
            return <CodeForm submit = {this.submitCode} valChange = {this.codeChange} code={this.state.code} />
        }
        else{
            return <React.Fragment>
                <h3>{this.state.name}</h3>
                <form onSubmit={this.postRSVP}>
                    {this.props.events.map((event,key)=>(
                        <Event key={key} {...event}>
                            <div>
                                <input type="checkbox" name={event.title} onChange={this.attendingChange}  /> <label>I'm going</label>
                                <this.attendeesSelect event={event.title} />
                            </div>
                        </Event>
                     ))
                    }
                    <input type="submit" />
                </form>
            </React.Fragment>
        }
    }
}



export default Rsvp