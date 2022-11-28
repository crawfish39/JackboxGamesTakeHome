import React, {Component} from "react";
import Row from './Row.jsx';
import Images from "./Images.jsx";

const columns = Array.from(new Array(5), (el,i) => <th>{i+1}</th>)
columns.unshift(<th>Likeness Tier</th>)


export default class Grid extends Component{
    constructor(props) {
        super(props);
        this.state = {
            boxKeys: new Array(20).fill(0).map((e,i) => e=i+1)
        };
        
    }
    
    tableGen (){
        let table = [];
        const rowLabels = ["love it", "like it", "leave it", "Haven't played"]
        return(
            rowLabels.map((el,i) => {
                return (
                <tr key={i}>
                    <td>{el}</td>
                    <Row boxKeys={this.state['boxKeys']} rowI={i}></Row>
                </tr>
            )})
        );
    }
        render() {
            return(
                <>
                <Images/>
            
                <style>{"table,th,td{border:1px solid black;}"}</style>
                <table>
                    <tr key={0}>{columns}</tr>
                    {this.tableGen()}
                </table>
            </>
        );
    }
}