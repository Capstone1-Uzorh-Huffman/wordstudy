import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchBox(props) {
    return (
        <InputGroup
            className="mb-3"
            style={{
                width: "80rem",
                margin: "auto",
                justifyContent: "center",
                marginTop: "5rem",
                border: "none",
                height: "3rem"
            }}
        >
            <InputGroup.Text
                id="basic-addon1"
                style={{ backgroundColor: "black", color: "white", border: "1em", fontWeight: "bold" }}
            >
                Enter words
            </InputGroup.Text>
            <Form.Control
                placeholder="example: jump, run, laugh ... "
                aria-label="words to search"
                aria-describedby="basic-addon2"
                onChange={(event) => props.setSearchTerms(event.target.value)}
            />
        </InputGroup>
    );
}

export default SearchBox;
