import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Category() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Category</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Accordion className="categories">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Animal</Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="mb-3">
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check className="checkLabel" type="checkbox" label="Bird" />
                                                    <Form.Check className="checkLabel" type="checkbox" label="Fish" />
                                                    <Form.Check className="checkLabel" type="checkbox" label="Insect" />
                                                    <Form.Check className="checkLabel" type="checkbox" label="Mammal" />
                                                    <Form.Check className="checkLabel" type="checkbox" label="Other" />
                                                    <Form.Check
                                                        className="checkLabel"
                                                        type="checkbox"
                                                        label="Reptile"
                                                    />
                                                </Form.Group>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion className="categories">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Enviroment</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Areas" />
                                                    <Form.Check type="checkbox" label="Buildings" />
                                                    <Form.Check type="checkbox" label="Celestial Bodies" />
                                                    <Form.Check type="checkbox" label="Landscapes" />
                                                </Form.Group>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion className="categories">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Human</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Actor" />
                                                    <Form.Check type="checkbox" label="Descriptor" />
                                                    <Form.Check type="checkbox" label="Profession" />
                                                    <Form.Check type="checkbox" label="Relative" />
                                                </Form.Group>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion className="categories">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Object</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Clothing" />
                                                    <Form.Check type="checkbox" label="Food & Drinks" />
                                                    <Form.Check type="checkbox" label="Furniture" />
                                                    <Form.Check type="checkbox" label="Instruments" />
                                                    <Form.Check type="checkbox" label="Man-made" />
                                                    <Form.Check type="checkbox" label="Natural" />
                                                    <Form.Check type="checkbox" label="Other" />
                                                    <Form.Check type="checkbox" label="Tool" />
                                                    <Form.Check type="checkbox" label="Weapon" />
                                                </Form.Group>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion className="categories">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Plants</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edible" />
                                                    <Form.Check type="checkbox" label="Inedible" />
                                                </Form.Group>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                        <Col>
                            <Accordion className="categories">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Other</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Body Part" />
                                                <Form.Check type="checkbox" label="Collective Noun" />
                                                <Form.Check type="checkbox" label="Living Thing (Misc.)" />
                                                <Form.Check type="checkbox" label="Ambiguous" />
                                                <Form.Check type="checkbox" label="Supernatural" />
                                                <Form.Check type="checkbox" label="Vehicle" />
                                                <Form.Check type="checkbox" label="Weather" />
                                            </Form.Group>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Row></Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Category;
