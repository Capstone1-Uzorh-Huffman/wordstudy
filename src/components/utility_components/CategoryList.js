import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { words } from "../../data/data";
import { useEffect, useState } from "react";

//Each category list is dynamically generated here
//Placeholders pull from the data through words, only 3 currently are hardcoded
function CategoryList(props) {
    const [minPlaceholder, setMinPlaceholder] = useState("Min");
    const [maxPlaceholder, setMaxPlaceholder] = useState("Max");
    const [labelMinMax, setLabelMinMax] = useState({ label: props.FilterLabel, min: "", max: "" });
    const [checkBoxValue, setCheckBoxValue] = useState(false);

    useEffect(() => {
        let tablelabel = props.FilterLabel;

        if (tablelabel === "Mental" || tablelabel === "Physical") {
            tablelabel = "Anim" + tablelabel;
        }

        //If placeholders render improperly, check that label is correct first
        //Otherwise, do the following to properly set a new placeholder
        if (tablelabel === "MNG") {
            setMinPlaceholder("2");
            setMaxPlaceholder("33");
        } else if (tablelabel === "AoA") {
            setMinPlaceholder("2.22");
            setMaxPlaceholder("13.22");
        } else if (tablelabel === "LEN") {
            setMinPlaceholder("2");
            setMaxPlaceholder("12");
        } else {
            setMinPlaceholder(
                words.reduce((prev, curr) => {
                    return prev[tablelabel] < curr[tablelabel] ? prev : curr;
                })[tablelabel]
            );

            setMaxPlaceholder(
                words.reduce((prev, curr) => {
                    return prev[tablelabel] > curr[tablelabel] ? prev : curr;
                })[tablelabel]
            );
        }
    }, [props.FilterLabel]);

    const setMin = (value) => {
        setLabelMinMax((minMax) => {
            return { label: minMax.label, min: value, max: minMax.max };
        });
    };

    const setMax = (value) => {
        setLabelMinMax((minMax) => {
            return { label: minMax.label, min: minMax.min, max: value };
        });
    };

    const toggle = () => {
        setCheckBoxValue((checkBoxValue) => !checkBoxValue);
    };

    useEffect(() => {
        if (checkBoxValue) {
            props.setFilterMinMax(labelMinMax);
        } else {
            if (props.removeFilter) {
                props.removeFilter(labelMinMax.label);
            }
        }
    }, [checkBoxValue]);

    useEffect(() => {
        if (labelMinMax.max && labelMinMax.min) {
            return;
        }

        setCheckBoxValue(false);
    }, [labelMinMax]);

    return (
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={toggle}
                        checked={checkBoxValue}
                        label={props.FilterLabel}
                        disabled={!labelMinMax.min || !labelMinMax.max}
                    />
                </Form.Group>
            </Col>
            <Col>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder={`Min: ${minPlaceholder}`}
                        onChange={(event) => setMin(event.target.value)}
                    />
                </InputGroup>
            </Col>
            <Col>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder={`Max: ${maxPlaceholder}`}
                        onChange={(event) => setMax(event.target.value)}
                    />
                </InputGroup>
            </Col>
        </Row>
    );
}

export default CategoryList;
