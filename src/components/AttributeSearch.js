import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Animacy from "./categories/Animacy";
import Lexical from "./categories/Lexical";
import Category from "./categories/Category";
import Context from "./categories/Context";
import Emotion from "./categories/Emotion";
import Meaningfulness from "./categories/Meaningfulness";
import Recall from "./categories/Recall";
import SimpleWords from "./categories/SimpleWords";

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
                            <Lexical />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", marginTop: "1rem" }}>
                        <Col>
                            <Category />
                        </Col>
                        <Col>
                            <Context />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", marginTop: "1rem" }}>
                        <Col>
                            <Emotion />
                        </Col>
                        <Col>
                            <Meaningfulness />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center", marginTop: "1rem" }}>
                        <Col >
                            <Recall />
                        </Col>
                        <Col>
                            <SimpleWords />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default AttributeSearch;
