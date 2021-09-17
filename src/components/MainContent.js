import React from 'react'

const Counter = ({sidebar,children}) => {
    return (
        <div className={sidebar?"sidebarOpen main": "sidebarOpen"}>
            {
                children
            }
        </div>
    )
}

export default Counter
