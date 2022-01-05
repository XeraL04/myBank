import React from 'react'
import { useState } from 'react'

function Service({title, sendValue , calculate}) {
    const [inputvalue, setInputValue] = useState(0)
    const getValue=(e)=>{
        e.preventDefault()
        sendValue(inputvalue)
        setInputValue("")
        calculate()
    }
    return (
        <div>
            <h1>{title}</h1>
            <form action="" onSubmit={getValue}>
                <input type="text" name="" id="" onChange={(e)=>{setInputValue(e.target.value)}} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Service
