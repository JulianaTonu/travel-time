
import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css'

const Login =() => {
const {signIn}=useContext(AuthContext)
            
    const handleSubmit= event=>{
        event.preventDefault()
        const form=event.target
        const email =form.email.value
        const password =form.password.value
        console.log(email, password)
signIn(email, password)
.then(result=>{
    const user =result.user
    console.log('login user',user)
    form.reset()

})
.catch(e=>console.error(e))

    }

    return (
        <Container className=''>
        <Row className=''>
         


          <Col sm={12} lg={6} ><div className='login w-75  '>
            <h1 className='mb-1 text-center'>Login </h1>

            <Form onSubmit={handleSubmit}>
     

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className='formlabel fw-bold'>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />  
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label className='formlabel fw-bold'>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      
      <p className='text-danger fw-bold text-center'><small></small></p>
      <button className='sub-btn ' type='submit'>Login</button>
    
     
      <p className='text-center text-white'><small>New to this account? please <Link to='/register' className='text-info fw-bold'>Register</Link></small></p>
      
      
    </Form>
        </div></Col>
        </Row>
        
      </Container>
      



    );
};

export default Login;