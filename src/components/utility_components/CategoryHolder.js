import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";

function CategoryHolder(props) {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.FilterHeader}</Accordion.Header>
                <Accordion.Body>
                    <Container>{props.children}</Container>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default CategoryHolder;
