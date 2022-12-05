import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { words } from "../../data/data";
import { useEffect, useState } from "react";

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
