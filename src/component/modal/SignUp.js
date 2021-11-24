import {useState, useContext} from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    Modal,
    Button,
    NavLink
} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { UserContext } from '../../contexts/userContext';

function SignUp(props) {
    const route = useHistory();
    const [state, dispatch]= useContext(UserContext)
    const [fullName, setFullName]= useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    
    // const [data,setData] = useState(JSON.parse(localStorage.getItem("Users")));

    

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
        //     const response = await api.post("/register", config);

        //     console.log(response);
        //     // if(response.status === "success"){
        //         dispatch({
        //             type: 'LOGIN_SUCCESS',
        //             payload:{
        //                 username: response.username,
        //                 token: response.token
        //             }});
        //             console.log(response.status)
        //         if( response.status == "admin"){
        //             route.push("/admin");
    
        //         }else{
        //             route.push("/")
        //         }
        // }catch(e){
        //     console.log(e)
        // }
        
    }
    

    
    return (
        <>
           <Modal show={props.show} onHide={props.handleClose} className="modal-dialog-centered text-white" style={{width:"20rem",marginLeft:"40%"}}>
              
                <Modal.Body className="rounded custom-color" >
                    <Container className="my-4" >
                    <span className="h2 fw-bold">Sign Up</span>
                        
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="my-1">
                                <input  className="form-control border custom-input"size="lg"type="text" onChange={ e => setFullName(e.target.value) } value={fullName || ''} placeholder="Full name"  required/>
                            </Form.Group>
                            <Form.Group className="my-1">
                                <input className="form-control border custom-input"size="lg"type="email" onChange={ e => setEmail(e.target.value) } value={email || ''} placeholder="Email" required/>
                            </Form.Group>
                            <Form.Group className="my-1">
                                <input className="form-control border custom-input"size="lg"type="password" onChange={ e => setPassword(e.target.value) } value={password || ''} placeholder="Password"  required/>
                            </Form.Group>
                            <Form.Group className="my-1">
                                <input className="form-control border custom-input"size="lg"type="text" onChange={ e => setPhone(e.target.value) } value={phone || ''} placeholder="Phone" required/>
                            </Form.Group>
                            <Form.Select aria-label="Default select example">
                                <option>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                            <Form.Group className="my-1">
                                <input  className="form-control border custom-input"size="lg"type="text" onChange={ e => setAddress(e.target.value) } value={address || ''} placeholder="Address" required/>
                            </Form.Group>
                            <div className="d-grid gap-2">
                            <Button variant="warning" type="submit" block>Sign Up</Button>
                            </div>                      
                            
                                                     
                            <NavLink onClick={props.switchModal} className="text-center text-light font-size-sm">Already have an account? Click <span className="fw-bolder">Here</span></NavLink>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal> 
        </>
    )
}

export default SignUp
