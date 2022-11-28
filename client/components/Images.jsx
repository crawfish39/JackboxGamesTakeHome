import React from "react";
import links from '../imageScraper/images.json'

const images = (() => {
    return links.map((link,i) => <img key={i} src={`${link}`} height='60'></img>)
})();

export default function Images() {
    return(
        <>
        {images}
        </>
    )
}