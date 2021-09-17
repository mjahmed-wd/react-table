import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter]=useState(0)
    return (
        <div>
            <div className="d-flex">
                <button onClick={()=>setCounter((prev)=>prev-1)}>-</button>
                {counter}
                <button onClick={()=>setCounter((prev)=>prev+1)}>+</button>
            </div>
        </div>
    )
}

export default Counter
