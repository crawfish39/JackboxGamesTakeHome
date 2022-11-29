import React from "react";
import { useDrag } from "react-dnd";

export default function Image(props) {
    const [{ isDragging },drag] = useDrag(() => ({
        type: 'img',
        item: {id: props.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return(
            <img
                ref={drag} 
                key={props.id} 
                src={`${props.link}`} 
                height='60'
                style={{border: isDragging ? '5px solid green' : '0px'}}
            ></img>
    )
}