import React from 'react';

export default function Item (props) {
    return (
        <div>
            <h1>{props.apod.date}</h1>
        </div>
    )
}