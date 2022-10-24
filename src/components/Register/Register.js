import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './Register.css'

import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/UserContext';
// import { AuthContext } from '../../UserContext/UserContext';
import { toast } from 'react-hot-toast';

        const Register = () => {
           const navigate =useNavigate()
       const {createUser,signInWithGoogle}=useContext(AuthContext)
            const handleSubmit= event =>{
                event.preventDefault()
                const form =event.target;
                const name =form.name.value
                const email =form.email.value
                const password =form.password.value
                const confirm =form.confirm.value
                console.log(name, email, password,confirm)
        
                createUser(email,password)
                .then(result=>{
                  const user =result.user
                  console.log(user)
                  form.reset()
                  toast.success("Register completed")
                  navigate('/login')
                })
                .catch(error=>console.error(error))
            }

            const handleGoogleSignIn =()=>{
              signInWithGoogle()
              .then(result=>{
                const user =result.user
                console.log(user)

              })
              .catch(e=>console.error(e))
            }
            return (
                <Container className=''>
                <Row className=''>
                 
        
        
                  <Col sm={12} lg={6} ><div className='register w-75  '>
                    <h1 className='mb-1 text-center'>Register </h1>
        
                    <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="formBasicName">
                <Form.Label className='formlabel fw-bold'>Your Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Enter your name" />  
              </Form.Group>
        
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className='formlabel fw-bold'>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />  
              </Form.Group>
        
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label className='formlabel fw-bold'>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
        
              <Form.Group className="mb-2" >
                <Form.Label className='formlabel fw-bold'>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm" placeholder="confirm Password" />
              </Form.Group>
              <p className='text-danger fw-bold text-center'><small></small></p>
              <button className='sub-btn ' type='submit'>REGISTER</button>
             
              <button onClick={handleGoogleSignIn}  className='google-btn  mt-3' type='submit'><FcGoogle/> GOOGLE</button>

             
              <p className='text-center text-white'><small>Already Have an account? please <Link to='/login' className='text-info fw-bold'>Login</Link></small></p>
              
              
            </Form>
                </div></Col>
                </Row>
                
              </Container>
              
        
        
        
                
            );
        };
    
        export default Register;