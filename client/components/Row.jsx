import React from "react";
import Box from "./Box.jsx";

export default function Row(props) {

    let cell = 0;
    
    const boxes =
        Array.from(new Array(5).fill(''), (el,i) => {
            cell = i + parseInt(props.rowI)*5;

            return <Box
            key={i}
            cell={cell}
            filledBox={props.filledBoxes[cell]}
            movePics={props.movePics}
            ></Box>
        });
    
    return (
        <>
            {boxes}   
        </>
    )
}