import React from "react";
import Image from "./Image.jsx";


export default function DragDrop(props){
    return (
        <div>
            <div className="Pictures" style={{display:'flex', flexWrap: 'wrap', maxWidth: '100%'}}>{props.unmovedPics.map(el => {
                return <Image id={el.id} link={el.link} />
            })}
            </div>
        </div>
    )
}