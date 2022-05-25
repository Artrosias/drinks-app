import {Container, Row, Col, Navbar} from 'react-bootstrap'
import Drink from './components/Drink';
import logo from './img/logo.png'

function App() {
  return (
    <>
        <Navbar bg="dark">
        <Container>
            <Navbar.Brand href="#home">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
            />
            <small className="ms-2" style={{color: "white"}}>AveteUnProblema.com</small>
            </Navbar.Brand>
        </Container>
        </Navbar>

        <Container fluid>
            <Row>
                <Col sm={{ span: 4, offset: 4 }}>
                    <Drink/>
                </Col>
            </Row>
        </Container>

    </>
  );
}

export default App;