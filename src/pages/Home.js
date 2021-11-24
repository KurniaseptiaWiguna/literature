import {Container,Row, Col, Navbar,Button} from 'react-bootstrap'
function Home() {
    return (
        <div className="cover-page text-white" >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    src={require("./../assets/img/Group 4.png").default}
                    
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
            <Container>
                <Row>
                    <Col className="px-4">
                        <h1 className="fw-bolder display-1 mt-5">source of intelligence</h1>
                        <p className="h3">Sign-up and receive unlimited accesss to all of your literatur - share your literature.</p>
                        <Row className="mt-5">
                            <Col className="d-grid gap-2 ml-5">
                                <Button variant="danger" size="lg">Login</Button>
                            </Col>
                            <Col className="d-grid gap-2 mr-5">
                                <Button variant="light" size="lg">Register</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col><img
                    src={require("./../assets/img/background.png").default}
                    
                    height="475"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
