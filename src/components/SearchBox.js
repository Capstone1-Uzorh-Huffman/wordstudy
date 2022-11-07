import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../style.scss";

function SearchBox(props) {
    return (
        <InputGroup className="mb-3 sb-group">
            <InputGroup.Text id="basic-addon1" className="sb-text">
                Enter words
            </InputGroup.Text>
            <Form.Control
                placeholder="example: actor, acrobat, air ... "
                aria-label="words to search"
                aria-describedby="basic-addon2"
                onChange={(event) => props.setSearchTerms(event.target.value)}
            />
        </InputGroup>
    );
}

export default SearchBox;
