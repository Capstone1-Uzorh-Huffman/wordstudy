import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { words } from "../../data/data";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";

function ListTable(props) {
    const [filtered, setFiltered] = useState([]);
    let categories = props.filterTerms;
    let filterMinMax = props.filterMinMax;

    function between(value, min, max) {
        return min <= value && max >= value;
    }

    useEffect(() => {
        setFiltered((filtered) => {
            if ((!categories || categories.length === 0) && (!filterMinMax || filterMinMax.length === 0)) {
                return [];
            }

            let newFilter = words;
            console.log(newFilter.length);

            console.log(categories);

            if (categories.length > 0) {
                newFilter = words.filter((word) => {
                    return categories.includes(word.Category);
                });
            }

            if (!filterMinMax || filterMinMax.length === 0) {
                return [...newFilter];
            }

            filterMinMax.forEach((minmax) => {
                newFilter = newFilter.filter((value) => {
                    return between(value[minmax.label], minmax.min, minmax.max);
                });
            });

            return [...newFilter];
        });
    }, [categories, filterMinMax]);


    return (
                <Accordion className="lt-accord-no-Top">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{props.tableName}</Accordion.Header>
                        <Accordion.Body>
                            <Card className={"lt-card"}>
                                <Table className={"wt-table"} bordered hover size="sm">
                                    <thead>
                                        <tr key="col" className={"wt-row"}>
                                            <th className={"wt-th"}>Word</th>
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
                                        {filtered.map((word) => {
                                            return (
                                                <tr key={word.Word}>
                                                    <td className={"wt-th"}>{word.Word}</td>
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
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
    );
}

export default ListTable;
