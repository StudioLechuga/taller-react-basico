import React from 'react'

function ButtonTip(props) {
    return (
        <div className={`button ${props.isActive&&"isActive"}`} onClick={()=>{
            props.action(props.item)
        }}>
            {props.label}
        </div>
    )
}

export default ButtonTip
