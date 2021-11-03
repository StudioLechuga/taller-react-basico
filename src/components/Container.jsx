import React from 'react'

function Container(props) {
    return (
        <div className="container-items">
            <h3 className="container-items_label">{props.title}</h3>
            {props.children}
        </div>
    )
}

export default Container
