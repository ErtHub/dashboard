import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function SideMenu() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/data"><Nav.Link>Data</Nav.Link></LinkContainer>
        </Nav>
    );
}

export default SideMenu;