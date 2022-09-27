import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import { words } from "./data/data";

function App() {
    return (
        <div className="App">
            <span>
                <div style={{ marginTop: "3rem" }}>
                    <h1>Animacy & Normative Data</h1>
                </div>
                <div style={{ marginTop: "5rem" }}>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Search by words</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Search by attributes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Important Information</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </span>
            <InputGroup
                className="mb-3"
                style={{
                    width: "80rem",
                    margin: "auto",
                    justifyContent: "center",
                    marginTop: "5rem",
                    border: "none",
                    height: "3rem"
                }}
            >
                <InputGroup.Text
                    id="basic-addon1"
                    style={{ backgroundColor: "black", color: "white", border: "1em", fontWeight: "bold" }}
                >
                    Enter words
                </InputGroup.Text>
                <Form.Control
                    placeholder="example: jump, run, laugh"
                    aria-label="words to search"
                    aria-describedby="basic-addon2"
                />
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    style={{ backgroundColor: "black", color: "white", border: "1em", fontWeight: "bold" }}
                >
                    Submit
                </Button>
            </InputGroup>
            <Card style={{ width: "122rem", margin: "5rem", overflow: "auto" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr style={{ borderBottom: "solid 0.1rem" }}>
                            <th style={{ borderRight: "solid 0.05rem" }}>Word</th>
                            <th>Category</th>
                            <th>Living</th>
                            <th>Thought</th>
                            <th>Repro</th>
                            <th>Person</th>
                            <th>Goals</th>
                            <th>Move</th>
                            <th>LivingN</th>
                            <th>ThoughtN</th>
                            <th>ReproN</th>
                            <th>PersonN</th>
                            <th>GoalsN</th>
                            <th>MoveN</th>
                            <th>CNC</th>
                            <th>FAM</th>
                            <th>IMG</th>
                            <th>AVAIL</th>
                            <th>MNG</th>
                            <th>VAL</th>
                            <th>ARO</th>
                            <th>DOM</th>
                            <th>AoA</th>
                            <th>LEN</th>
                            <th>OrthoN</th>
                            <th>PhonoN</th>
                            <th>NSyll</th>
                            <th>SUBTLWF</th>
                            <th>SUBTLCD</th>
                            <th>AnimMental</th>
                            <th>AnimPhysical</th>
                            <th>R1Overall</th>
                            <th>R2Overall</th>
                            <th>R3Overall</th>
                            <th>R_totOverall</th>
                            <th>R1Lab</th>
                            <th>R2Lab</th>
                            <th>R3Lab</th>
                            <th>R_totLab</th>
                            <th>R1Online</th>
                            <th>R2Online</th>
                            <th>R3Online</th>
                            <th>R_totOnline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {words.map((word) => (
                            <tr>
                                <td style={{ borderRight: "solid 0.05em" }}>{word.Word}</td>
                                <td>{word.Category}</td>
                                <td>{word.Living}</td>
                                <td>{word.Thought}</td>
                                <td>{word.Repro}</td>
                                <td>{word.Person}</td>
                                <td>{word.Goals}</td>
                                <td>{word.Move}</td>
                                <td>{word.LivingN}</td>
                                <td>{word.ThoughtN}</td>
                                <td>{word.ReproN}</td>
                                <td>{word.PersonN}</td>
                                <td>{word.GoalsN}</td>
                                <td>{word.MoveN}</td>
                                <td>{word.CNC}</td>
                                <td>{word.FAM}</td>
                                <td>{word.IMG}</td>
                                <td>{word.AVAIL}</td>
                                <td>{word.MNG}</td>
                                <td>{word.VAL}</td>
                                <td>{word.ARO}</td>
                                <td>{word.DOM}</td>
                                <td>{word.AoA}</td>
                                <td>{word.LEN}</td>
                                <td>{word.OrthoN}</td>
                                <td>{word.PhonoN}</td>
                                <td>{word.NSyll}</td>
                                <td>{word.SUBTLWF}</td>
                                <td>{word.SUBTLCD}</td>
                                <td>{word.AnimMental}</td>
                                <td>{word.AnimPhysical}</td>
                                <td>{word.R1Overall}</td>
                                <td>{word.R2Overall}</td>
                                <td>{word.R3Overall}</td>
                                <td>{word.R_totOverall}</td>
                                <td>{word.R1Lab}</td>
                                <td>{word.R2Lab}</td>
                                <td>{word.R3Lab}</td>
                                <td>{word.R_totLab}</td>
                                <td>{word.R1Online}</td>
                                <td>{word.R2Online}</td>
                                <td>{word.R3Online}</td>
                                <td>{word.R_totOnline}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </div>
    );
}

export default App;
