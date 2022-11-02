import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SimpleWords() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Simple Words</Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="IMG" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option>...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="CNC" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="..."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="AoA" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="..."
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default SimpleWords;