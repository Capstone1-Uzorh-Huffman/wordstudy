import Nav from "react-bootstrap/Nav";
import "../style.scss";

function SearchNav(props) {
    return (
        <div className={"sn-wrapper"}>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Search by words</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Search by attributes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Important Information</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default SearchNav;
