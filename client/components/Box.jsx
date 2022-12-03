import React from "react";
import { useDrop } from 'react-dnd';
import Image from './Image.jsx';

export default function Box(props) {
    const [{isOver},drop] =  useDrop({
        accept: 'img',
        drop: (item) => props.movePics(props.cell,item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    const cellValue = () => {
        return <div id={`table_${props.cell}`} style={{height:'110px',width:'120px'}}>
                    {props.filledBox !== '-' ? 
                    <Image id={props.filledBox.id} link={props.filledBox.link}/>
                     : isOver}
                </div> 
    }

    return (
        <td ref={drop}>
            {
                cellValue()
            }   
   
        </td>
    )
}