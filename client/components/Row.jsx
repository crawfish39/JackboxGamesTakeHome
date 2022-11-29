import React from "react";
import Box from "./Box.jsx";

export default function Row(props) {

    const boxes = Array.from(new Array(5).fill(''), (el,i) => {
        const cell = i + parseInt(props.rowI)*5;
         return <Box
            key={i}
            cell={cell}
            movePics={props.movePics}
            filledBoxes={props.filledBoxes}
        ></Box>
    }); 

    return (
        <>
            {boxes}   
        </>
    )
}