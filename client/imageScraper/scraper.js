import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://www.jackboxgames.com/games/',{ waitUntil: 'networkidle0' })
        console.log("page has been loaded!");

        const selector = '#post-4956 > div > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-d92efb0.elementor-section-stretched.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div.elementor-element.elementor-element-23c9bc6.elementor-grid-5.gamePageIndividuals.elementor-grid-tablet-3.elementor-grid-mobile-2.elementor-products-grid.elementor-wc-products.elementor-widget.elementor-widget-woocommerce-products > div > div > ul'
        await page.waitForSelector(selector)
        
        const links = await page.evaluate(() => {
            const imageCollection = document.getElementsByClassName('products elementor-grid columns-5')[1].getElementsByTagName('img')
            let srcs = [];
            for(const image in imageCollection){
                const link = imageCollection[image].src;
                if(link) srcs.push(link);
            }
            
            return srcs
        })
        
        await browser.close();
        
        fs.writeFile('images.json',JSON.stringify(links), err => {
            if(err) console.log('file writing error:',err);
            else {
                console.log('File written successfully')
            }
        })

    } catch(error) {
        console.log('image fetching error:',error)
    }
})()