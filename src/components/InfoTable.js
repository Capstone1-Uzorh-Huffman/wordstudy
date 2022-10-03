import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { wordDescriptions } from "../data/info.js";
import { abbreviations } from "../data/abbreviation.js";
import { resources } from "../data/resources.js";

function InfoTable(props) {
    return (
    <Card style={{ maxWidth: "92.5rem", margin: "4rem", overflow: "auto" }}>
        <Table striped bordered hover size="sm">
            <thead>
                <tr style={{ borderBottom: "solid 0.1rem" }}>
                    <th style={{ borderRight: "solid 0.05rem" }}>Word</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {wordDescriptions.map((wordDescriptions) => {
                    return (
                        <tr>
                            <td style={{ borderRight: "solid 0.05em" }}>{wordDescriptions.Word}</td>
                            <td>{wordDescriptions.Description}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
        <Table striped bordered hover size="sm">
            <thead>
                <tr style={{ borderBottom: "solid 0.1rem" }}>
                    <th style={{ borderRight: "solid 0.05rem" }}>Abrevation</th>
                    <th>Definition</th>
                </tr>
            </thead>
            <tbody>
                {abbreviations.map((abbreviations) => {
                    return (
                        <tr>
                            <td style={{ borderRight: "solid 0.05em" }}>{abbreviations.Abrevation}</td>
                            <td>{abbreviations.Definition}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
        <Table striped bordered hover size="sm">
            <thead>
                <tr style={{ borderBottom: "solid 0.1rem" }}>
                    <th style={{ borderRight: "solid 0.05rem" }}>Resources</th>
                </tr>
            </thead>
            <tbody>
                {resources.map((resources) => {
                    return (
                        <tr>
                            <td style={{ borderRight: "solid 0.05em" }}>{resources.Reference}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    </Card>
    );
}

export default InfoTable;
