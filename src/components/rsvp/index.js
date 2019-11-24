import React from "react";
import { Alert } from 'reactstrap';
import Event from "../events/event";
import CodeForm from "./codeForm";


class Rsvp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            code:'',
            attendingEvents:[],
            plus1s:0,
            alert:{text:'',color:'success'}
        }
    }

    submitCode=(e)=>{
        e.preventDefault()
        fetch('https://emilyandalex.herokuapp.com/api/invite',{method: 'POST',body:JSON.stringify({code:this.state.code}),headers: {"Content-Type": "application/json"}})
        .then((res)=>{
            if (!res.ok){
                throw Error(res.status)
            }
            else{
                return res.json()
            }
        })
        .then((res)=>this.setState((prev)=>({...prev,name:res.name,plus1s:res.plus1s,alert:{text:''},attendingEvents:res.rsvps})))
        .catch((err)=>{
            this.setState({alert:{text:"That code wasn't found, please try again.",color:"danger"}})
            console.log(err.message)
        })
    }

    postRSVP = (e)=>{
        e.preventDefault()
        let data = {code:this.state.code,events:this.state.attendingEvents}
        fetch('https://emilyandalex.herokuapp.com//api/rsvp',{method:"POST",body:JSON.stringify(data),headers:{"Content-Type": "application/json"}})
        .then((res)=>{
            if (!res.ok){
                this.setState({alert:{text:"There was an error handling you RSVP, please try again.",color:"danger"}})
            }
            else{
                this.setState({alert:{text:"You have successfully RSVP'd, can't wait to see you there!",color:"success"}})
            }
        })
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
                <label className="col-sm-5 col-form-label">Great! how many in your party?</label>
                <select className="form-control col-sm-2" value={this.state.attendingEvents.find(x=>x.title===event).attendees || 1} onChange={this.attendeesChange.bind(this,event)}>
                    {numArray.map((v,i)=><option key={i} >{v}</option>)}
                </select>
            </React.Fragment>)
        }
        else{
            return ""
        }
    }

    alert = ()=>this.state.alert.text ? <Alert color={`${this.state.alert.color} fade`} >{this.state.alert.text}</Alert> : ""

    attendeesChange=(selectedEvent,e)=>{
        let attendees = parseInt(e.target.value)
        this.setState((prevState,props)=>{
            let attendingEvents = prevState.attendingEvents
            for(let i=0;i<attendingEvents.length;i++){
                if (attendingEvents[i].title===selectedEvent){
                    attendingEvents[i].attendees = attendees
                    return prevState
                }
            }
        }
        )
    }


    render(){
        if(!this.state.name){
            return <React.Fragment>
                <this.alert />
                <CodeForm submit = {this.submitCode} valChange = {this.codeChange} code={this.state.code} />
            </React.Fragment>
        }
        else{
            return <React.Fragment>
                <this.alert />
                <h3>{this.state.name}</h3>
                <form onSubmit={this.postRSVP}>
                    {this.props.events.map((event,key)=>(
                        <Event key={key} {...event}>
                            <div className="row">
                                <div className="col-sm-2 form-check col-form-label">
                                    <input className="form-check-input" type="checkbox" checked={!!this.state.attendingEvents.find((x)=>x.title===event.title)} name={event.title} onChange={this.attendingChange}  />
                                    <label className="form-check-label">I'm going</label>
                                </div>
                                <this.attendeesSelect event={event.title} />
                            </div>
                        </Event>
                     ))
                    }
                    <input className="btn btn-primary" type="submit" />
                </form>
            </React.Fragment>
        }
    }
}



export default Rsvp