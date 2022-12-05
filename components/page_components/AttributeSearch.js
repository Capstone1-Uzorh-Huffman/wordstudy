import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Animacy from "../categories/Animacy";
import Lexical from "../categories/Lexical";
import Category from "../categories/Category";
import Context from "../categories/Context";
import Emotion from "../categories/Emotion";
import Meaningfulness from "../categories/Meaningfulness";
import Recall from "../categories/Recall";
import SimpleWords from "../categories/SimpleWords";

function AttributeSearch(props) {
    return (
        <Card className="as-wrapper">
            <Card.Body>
                <Row className="as-row">
                    <Col>
                        <Animacy setFilterMinMax={props.setFilterMinMax} removeFilter={props.removeFilter} />
                    </Col>
                    <Col>
                        <Lexical setFilterMinMax={props.setFilterMinMax} removeFilter={props.removeFilter} />
                    </Col>
                </Row>
                <Row className="as-row">
                    <Col>
                        <Category updateFilter={props.updateFilter} />
                    </Col>
                    <Col>
                        <Context setFilterMinMax={props.setFilterMinMax} removeFilter={props.removeFilter} />
                    </Col>
                </Row>
                <Row className="as-row">
                    <Col>
                        <Emotion setFilterMinMax={props.setFilterMinMax} removeFilter={props.removeFilter} />
                    </Col>
                    <Col>
                        <Meaningfulness setFilterMinMax={props.setFilterMinMax} removeFilter={props.removeFilter} />
                    </Col>
                </Row>
                <Row className="as-row">
                    <Col>
                        <Recall setFilterMinMax={props.setFilterMinMax} removeFilter={props.removeFilter} />
                    </Col>
                    <Col>
                        <SimpleWords setFilterMinMax={props.setFilterMinMax} removeFilter={props.removeFilter} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default AttributeSearch;
