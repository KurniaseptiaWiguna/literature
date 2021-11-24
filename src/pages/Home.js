import { useContext,useState } from 'react'
import {Container,Row, Col, Navbar,Button} from 'react-bootstrap'
import SignIn from '../component/modal/SignIn';
import SignUp from '../component/modal/SignUp';
import {UserContext} from '../contexts/userContext'
function Home() {

    const [state,dispatch]= useContext(UserContext)
    console.log(state)
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
                                <Button variant="danger" size="lg" onClick={()=> dispatch({ type: 'SHOW_LOGIN'}) }>Sign In</Button>
                            </Col>
                            <Col className="d-grid gap-2 mr-5">
                                <Button variant="light" size="lg"  onClick={()=> dispatch({ type: 'SHOW_REGISTER'}) }>Sign Up</Button>
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
            <SignIn
                handleClose={() => dispatch({ type: 'HIDE_LOGIN' })}
                switchModal={() => dispatch({ type: 'SWITCH_MODAL' })}
                show={state.modalLogin}
            />
            <SignUp 
                handleClose={() => dispatch({ type: 'HIDE_REGISTER' })}
                switchModal={() => dispatch({ type: 'SWITCH_MODAL' })}
                show={state.modalRegister}
            />
        </div>
    )
}

export default Home
