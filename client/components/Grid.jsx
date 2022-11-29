import React from "react";
import Row from './Row.jsx';

const columns = Array.from(new Array(5), (el,i) => <th>{i+1}</th>)
columns.unshift(<th>Likeness Tier</th>)


export default function Grid(props){

    const tableGen = () => {
        let table = [];
        const rowLabels = ["love it", "like it", "leave it", "Haven't played"]
        return(
            rowLabels.map((el,i) => {
                return (
                <tr key={i}>
                    <td>{el}</td>
                    <Row 
                        rowI={i}
                        filledBoxes={props.filledBoxes}
                        movePics={props.movePics}
                    ></Row>
                </tr>
            )})
        );
    }
            return(
                <>           
                <style>{"table,th,td{border:1px solid black;}"}</style>
                <table className="table">
                    <tr>{columns}</tr>
                    {tableGen()}
                </table>
            </>
        );
}