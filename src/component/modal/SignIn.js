import {useState, useContext} from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    Modal,
    Button,
    NavLink,
    Alert
} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { UserContext } from '../../contexts/userContext'
import {API} from '../../config/api'
function SignIn(props) {
    // const route = useHistory();
    // let api = API();
    const [state, dispatch] = useContext(UserContext)
    // // const [state, dispatch]= useContext(AppContext)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    // const [data,setData] = useState(JSON.parse(localStorage.getItem("Users")));
    // const form = {
    //     email: email,
    //     password: password
    // }
    

    async function handleOnSubmit(e) {
        e.preventDefault();
        // try{
        //     const body = JSON.stringify(form)
        //     const config = {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json",
        //         },
        //         body: body
        //     };
            
        //     console.log(body)
        //     const response = await api.post("/login", config);

        //     console.log(response);
        //     // if(response.status === "success"){
        //         dispatch({
        //             type: 'LOGIN',
        //             payload:{
        //                 id: response.data.id,
        //                 name: response.data.name,
        //                 email: response.data.email,
        //                 status: response.data.status,
        //                 token: response.data.token,
        //             }});
                    
        //         if( response.data.status == "admin"){
        //             route.push("/transactions");
    
        //         }else{
        //             route.push("/")
        //         }
        // }catch(e){

        // }
        
    }
    

    
    return (
        <>
           <Modal show={props.show} onHide={props.handleClose} className="modal-dialog-centered text-white" style={{width:"20rem",marginLeft:"40%"}}>
              
                    
                   
                <Modal.Body className="rounded custom-color" >
                    <Container className="my-4" >
                        <span className="h2 fw-bold">Sign In</span>
                        
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="my-4">

                                <input id="email" className="form-control border custom-input"size="lg"type="email" onChange={ e => setEmail(e.target.value) } value={email || ''} placeholder="Email"  required/>
                            </Form.Group>
                                                    <Form.Group className="my-4">
                                                    
                                                    <input id="password" className="form-control border custom-input"size="lg"type="password" onChange={ e => setPassword(e.target.value) } value={password || ''} placeholder="Password" required/>
                                                    </Form.Group>
                                                    <div className="d-grid gap-2">
                                                    <Button variant="danger" size="lg" type="submit" block>Sign in</Button>
                                                    </div>
                                                        
                                                     
                                                    <NavLink onClick={props.switchModal} className="text-center text-light font-size-sm">Don't have an account? Click <span className="fw-bolder">Here</span></NavLink>
                                                </Form>
                                            </Container>
                                        </Modal.Body>
                                    </Modal> 
        </>
    )
}

export default SignIn
