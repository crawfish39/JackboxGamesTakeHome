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
            unmovedPics: pics
        };
        
        this.movePics = this.movePics.bind(this);
    }

    movePics(deleteIndex,imageId){
        for(const image in this.state.unmovedPics){
            if(this.state.unmovedPics[image].id === imageId){
                const newUnmovedPics = [...this.state.unmovedPics.slice(0,imageId),...this.state.unmovedPics.slice(imageId+1)]
                const newFilledBoxes = this.state.filledBoxes
                return this.setState({
                    unmovedPics: newUnmovedPics,
                    filledBoxes: newFilledBoxes[deleteIndex] = pics[imageId]
                })
            }
        }
    }
    

    render(){
        return(
            <DndProvider backend={HTML5Backend}>
                <div>
                    <DragDrop unmovedPics={this.state.unmovedPics}/>
                    <h1>Tier List Application</h1>
                    <p>Drag the images into the table based on how much you like each game.</p>
                    <Grid
                        boxKeys={this.state.boxKeys}
                        filledBoxes={this.state.filledBoxes}
                        unmovedPics={this.state.unmovedPics}
                        movePics={this.movePics}
                    />
                </div>
            </DndProvider>
        )
        
        }
}

export default App;
