import React from "react";



const codeForm = (props)=>(
    <form onSubmit={props.submit}>
        <input name="code" value={props.code} onChange={props.valChange} className=" col-sm-2 form-control" />
        <div style={{color:props.code.length > 5 ? "red" : "black" }}>{props.code.length}/5</div>
        <input className="btn btn-primary" type="submit" />
    </form>
)

export default codeForm