import React from 'react'

const Counter = ({setIsOpenSidebar,isOpenSidebar,children}) => {
    return (
        <div onClick={()=>setIsOpenSidebar(true)}>
           {!isOpenSidebar && <button>Open</button>}
            {
                children
            }
        </div>
    )
}

export default Counter
