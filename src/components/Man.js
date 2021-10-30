import React from 'react'

export default function Man(props) {
    return (
        <div>
            <hr />
            <h1>I am from functional component(Man)</h1>
            <h3>Number: {props.number}</h3>
            <hr />
        </div>
    )
}
