import React, { useState } from 'react';
import OutputRow from '../Output/OutputRow';
import './button.css';

function Calculator(){

    let [question, setQuestion] = useState("");
    let [answer, setAnswer] = useState("");
    let [saved, setSaved] = useState("");

    const handleClick = (e) => {
        let value = e.target.value;
        console.log(value,answer);
        switch(value){
            case "AC":
                setQuestion("");
                setAnswer("");
                break;
            case '=':
                if(question != ""){
                    let ans = ""
                    try{
                        ans = eval(question);
                    }
                    catch(err){
                        setAnswer("Math error");
                        setQuestion("");
                    }
                    if(ans === ""  || ans =="Infinity"){
                        setAnswer("Math error");
                        setQuestion("");
                    }
                    else{
                        setAnswer(ans);
                        setQuestion("");
                        setSaved(ans.toString());
                    }
                }
                break;
            // case 'D':
            //     let ques = question;
            //     ques = ques.substr(0,ques.length - 1);
            //     setQuestion(ques);
            //     break;
            default:
                if(saved != "" && (value == '+' || value == '-' || value == '*' || value =='/' || value == '**'))
                question = question.concat(saved);
                question = question.concat(value);
                setQuestion(question)
                setSaved("");
                break;
        }
    }

    return(
        <div >
            <OutputRow question={question} answer={answer}/>
            <div className="styling">
                <button className="btn-group" onClick={handleClick} value={'('} >(</button>
                <button className="btn-group" onClick={handleClick} value={')'}>)</button>
                <button className="btn-group" onClick={handleClick} value={'**'}>pow</button>
                <button className="clear" onClick={handleClick} value={'AC'}>AC</button>
                
            </div>
            <div className="styling">
            <button className="btn-group" onClick={handleClick} value={'7'}>7</button>
                <button className="btn-group" onClick={handleClick} value={'8'}>8</button>
                <button className="btn-group" onClick={handleClick} value={'9'}>9</button>
                <button className="btn-group" onClick={handleClick} value={'/'}>/</button> 
            </div>
            <div className="styling">
            <button className="btn-group" onClick={handleClick} value={'4'}>4</button>
                <button className="btn-group" onClick={handleClick} value={'5'}>5</button>
                <button className="btn-group" onClick={handleClick} value={'6'}>6</button>
                <button className="btn-group" onClick={handleClick} value={'*'}>*</button> 
            </div>
            <div className="styling">
            <button className="btn-group" onClick={handleClick} value={'1'}>1</button>
                <button className="btn-group" onClick={handleClick} value={'2'}>2</button>
                <button className="btn-group" onClick={handleClick} value={'3'}>3</button>
                <button className="btn-group" onClick={handleClick} value={'-'}>-</button> 
            </div>
            <div className="styling">
            <button className="btn-group" onClick={handleClick} value={'0'}>0</button>
                <button className="btn-group" onClick={handleClick} value={'.'}>.</button>
                <button className="equal" onClick={handleClick} value={'='}>=</button>
                <button className="btn-group" onClick={handleClick} value={'+'}>+</button> 
            </div>
        </div>
    )
}

export default Calculator;