import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

//create a funciton that creates a csv export file from a table
function ExportCSV(props) {
    return (
        <div className="export">
            <InputGroup className="exportTable">
                <Button.Text className="exportButton" id="basic-addon2">
                    Export Table
                </Button.Text>
            </InputGroup>
        </div>
    );
}

export default ExportCSV;
