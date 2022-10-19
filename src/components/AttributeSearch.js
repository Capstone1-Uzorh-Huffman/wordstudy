import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Animacy from "./categories/Animacy";

function AttributeSearch(props) {
    return (
        <Card className="as-wrapper">
            <Card.Body>
                    <Row className="as-row">
                        <Col>
                            <Animacy />
                        </Col>
                        <Col>
                            <Animacy />
                        </Col>
                    </Row>
                    <Row className="as-row">
                        <Col>
                            <Animacy />
                        </Col>
                        <Col>
                            <Animacy />
                        </Col>
                    </Row>
                    <Row className="as-row">
                        <Col>
                            <Animacy />
                        </Col>
                        <Col>
                            <Animacy />
                        </Col>
                    </Row>
                    <Row className="as-row">
                        <Col>
                            <Animacy />
                        </Col>
                        <Col>
                            <Animacy />
                        </Col>
                    </Row>
            </Card.Body>
        </Card>
    );
}

export default AttributeSearch;
