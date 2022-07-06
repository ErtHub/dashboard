import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';
import Menu from './Menu';
import SideMenu from "./SideMenu";
import {Container, Row, Col} from "react-bootstrap";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Container>
          <Row>
            <Col xs={4} sm={3}>
              <SideMenu />
            </Col>
            <Col xs={8} sm={9}>
              <Routes>
                <Route path="/" element={<h2>Home</h2>} />
                <Route path="/data" element={<h2>Data</h2>} />
              </Routes>
            </Col>
          </Row>
        </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
