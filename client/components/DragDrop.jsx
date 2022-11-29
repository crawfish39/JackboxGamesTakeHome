import React from "react";
import Image from "./Image.jsx";


export default function DragDrop(props){
    return (
        <>
            <div className="Pictures" >{props.unmovedPics.map(el => {
                return <Image id={el.id} link={el.link}/>
            })}
            </div>
        </>
    )
}