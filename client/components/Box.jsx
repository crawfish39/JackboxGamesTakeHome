import React, { useEffect, useState } from "react";
import { useDrop } from 'react-dnd';
import pics from '../imageScraper/images.json';

export default function Box(props) {
    const [{isOver},drop] =  useDrop({
        accept: 'img',
        drop: (item) => addImageToBox(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })


    const addImageToBox = (imageId) => {
        console.log('imageId',imageId);
        console.log('cell',props.cell)
        // props.movePics(props.cell,imageId)
        const oImg = document.createElement("img");
        oImg.setAttribute('src', `${pics[imageId].link}`);
        oImg.setAttribute('height','50px')
        document.getElementById(`table_${props.cell}`).appendChild(oImg)

    }
    return (
        <td ref={drop}>        
            <div id={`table_${props.cell}`} style={{height:'110px',width:'110px'}}></div>
        </td>
    )
}