import React from 'react'

function ButtonTip(props) {
    return (
        <div className={`button ${props.isActive&&"isActive"}`}>
            {props.tip}%
        </div>
    )
}

export default ButtonTip
