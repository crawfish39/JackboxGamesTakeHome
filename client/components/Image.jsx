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
        <div>

            <img
                ref={drag} 
                key={props.id} 
                src={`${props.link}`} 
                
                style={{height:'50px',display:'flex'}}
            ></img>
        </div>
    )
}