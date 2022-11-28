import React from "react";
import Box from "./Box.jsx";

export default function Row(props) {
    const boxes = Array.from(new Array(5), (el,i) => {
         return <Box key={i} rowI={props.rowI} boxKeys ={props['boxKeys'][i]}></Box>
            
    });

    return (
        <>
            {boxes}
        </>
    )
}