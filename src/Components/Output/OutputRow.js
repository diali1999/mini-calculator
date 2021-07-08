import React, { useState } from 'react';
import './OutputRow.css';

function Outputrow(props){
    return(
        <div >
            <input type= "text" className="screen" value={props.question} readOnly ></input>
            <input type= "text" className="screen" value={props.answer} readOnly></input>
        </div>
    )
}

export default Outputrow;