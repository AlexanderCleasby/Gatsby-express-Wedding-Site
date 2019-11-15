import React from "react";



const codeForm = (props)=>(
    <form onSubmit={props.submit}>
        <input name="code" value={props.code} onChange={props.valChange} />
        <div style={{color:props.code.length > 5 ? "red" : "black" }}>{props.code.length}/5</div>
        <input type="submit" />
    </form>
)

export default codeForm