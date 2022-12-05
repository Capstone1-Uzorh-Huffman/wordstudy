import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SplitTable(props) {
    return (
        <div className="split">
            <InputGroup className="splitTable">
                <Form.Control placeholder="Words per Table" />
                <InputGroup.Text className="splitButton" id="basic-addon2">
                    Split Table
                </InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export default SplitTable;
