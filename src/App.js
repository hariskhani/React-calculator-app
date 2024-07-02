import './App.css'
import React from 'react'
import { useState } from 'react'

// function addition(...num){
//     num++
//     return num;
// }




const Input = () => {

    const [operation, setOperation] = useState('')
    const [result, setResult] = useState()

    function handleClick(e){
        let operand = e.target.innerText;
        if (operand==='X') operand = "*"
        setOperation(operation+operand)
    }
    
    function handleEqual(){
        setResult(eval(operation))
    }

    function handleClear(){
        setOperation(' ')
        setResult(' ')
    }
    return(
        <div>
            <div className="container">
            <div style={{textAlign:'center', margin: '50px auto', fontSize: '28px'}}>Calculator</div>
                <div className="calculator">
                    <div className="inputField" >
                        <div>
                            {operation}
                        </div>
                        <div>
                            {result}
                        </div>
                        
                    </div>   
                    <div className="buttons">
                        <div className='btn-row'>
                            <button className="btn" onClick={handleClick} >7</button>
                            <button className="btn" onClick={handleClick}>8</button>
                            <button className="btn" onClick={handleClick}>9</button>
                            <button className="btn btn-divide" onClick={handleClick}>%</button>
                        </div>
                        <div className='btn-row'>
                            <button className="btn" onClick={handleClick}>4</button>
                            <button className="btn" onClick={handleClick}>5</button>
                            <button className="btn" onClick={handleClick}>6</button>
                            <button className="btn btn-multiply" onClick={handleClick}>X</button>
                        </div>
                        <div className='btn-row'>
                            <button className="btn" onClick={handleClick}>1</button>
                            <button className="btn" onClick={handleClick}>2</button>
                            <button className="btn" onClick={handleClick}>3</button>
                            <button className="btn btn-minus" onClick={handleClick}>-</button>
                        </div>
                        <div className='btn-row'>
                            <button className="btn" onClick={handleClick}>0</button>
                            <button className="btn btn-decimal" onClick={handleClick}>.</button>
                            <button className="btn btn-add" onClick={handleClick}>+</button>
                            <button className="btn btn-equal" onClick={handleEqual}>=</button>
                        </div>
                        <div className='btn-row'>
                            <button style={{width: '100%'}} className='btn' onClick={handleClear}>Clear</button>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default function Calculator () {
    return(
        <div>
            <Input />
        </div>
    )
}