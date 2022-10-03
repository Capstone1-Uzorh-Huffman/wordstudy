import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Animacy from "./categories/Animacy";

function AttributeSearch(props) {
    return (
        <Card style={{ margin: "auto", maxWidth: "90%", justifySelf: "center", padding: "none" }}>
            <Card.Body style={{ minWidth: "100%" }}>
                <Container>
                    <Row>
                        <Col>
                            <Animacy />
                        </Col>
                        <Col>
                            <Animacy />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", marginTop: "1rem" }}>
                        <Col>
                            <Animacy />
                        </Col>
                        <Col>
                            <Animacy />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", marginTop: "1rem" }}>
                        <Col>
                            <Animacy />
                        </Col>
                        <Col>
                            <Animacy />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", marginTop: "1rem" }}>
                        <Col md="8">
                            <Animacy />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default AttributeSearch;
