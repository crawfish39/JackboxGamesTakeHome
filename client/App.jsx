import React, {Component} from "react";
import Grid from "./components/Grid.jsx";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from "./components/DragDrop.jsx";
import pics from './imageScraper/images.json';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filledBoxes: new Array(20).fill('-'),
            unmovedPics: pics,
            deleteIndex: 0,
            imageId: 0
        };
        
        this.movePics = this.movePics.bind(this);
    }

    movePics(deleteIndex,imageId){
        console.log('deleteIndex',deleteIndex);
        console.log('imageId',imageId)
        this.deletePic()
        for(const image in this.state.unmovedPics){
            if(this.state.unmovedPics[image].id === imageId){
                const newFilledBoxes = [...this.state.filledBoxes];
                newFilledBoxes[deleteIndex] = pics[imageId]
                return this.setState({
                    filledBoxes: newFilledBoxes,
                    deleteIndex: deleteIndex,
                    imageId: imageId
                })
            }
        }
    }

    componentDidUpdate(prevProps,prevState){
        // console.log(prevState.deleteIndex, this.state.deleteIndex)
        const dupCheck = document.getElementById(`table_${this.state.deleteIndex}`)
        if(dupCheck.childNodes.length > 1) dupCheck.removeChild(dupCheck.lastChild) 
        
    }
    
    deletePic(){
        const newUnmovedPics = [...this.state.unmovedPics.slice(0,this.state.imageId),...this.state.unmovedPics.slice(this.state.imageId+1)]
        console.log(this.state.unmovedPics,newUnmovedPics)
        // return this.setState({
        //     unmovedPics: newUnmovedPics
        // })
    }
    
    render(){
        return(
            <DndProvider backend={HTML5Backend}>
                <>
                    <DragDrop unmovedPics={this.state.unmovedPics}/>
                    <h1>Tier List Application</h1>
                    <p>Drag and drop the games into the table based on how much you like each one!</p>
                    <Grid
                        boxKeys={this.state.boxKeys}
                        filledBoxes={this.state.filledBoxes}
                        unmovedPics={this.state.unmovedPics}
                        movePics={this.movePics}
                    />
                </>
            </DndProvider>
        )
    }
}

export default App;