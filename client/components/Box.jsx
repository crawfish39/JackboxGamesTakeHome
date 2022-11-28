import React from "react";

export default function Box(props) {
    return (
        <td key={props.boxKeys}>
            <button onClick={() => console.log('button')}>
                {props.boxKeys+props.rowI*5}
            </button>
        </td>
    )
}