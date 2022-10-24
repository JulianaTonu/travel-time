import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLoaderData } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
  const desti =useLoaderData()
    return (
        
             <Container className=''>
        <Row>
          <Col  sm={11} lg={6} className='text-white text-center'>
          <h1 className='mt-5  py-3'>{desti.name}</h1>
          <p>{desti.description}</p>
          </Col>


          <Col sm={12} lg={6}>
            <div className='login w-75 mx-auto  pt-4 pb-5 booking'>
            <h1 className='mb-4 text-center'>For Booking</h1>

            <Form >
      

      <Form.Group className="mb-3" controlId="formBasicOrigin">
        <Form.Label className='formlabel fw-bold'>Origin</Form.Label>
        <Form.Control type="text" name="origin" placeholder=""/>  
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className='formlabel fw-bold'>Destination</Form.Label>
        <Form.Control type="text" name="destination" placeholder={desti.name} />
      </Form.Group>



      <Form.Group className="mb-3  ms-2 d-flex form-date" controlId="formBasicPassword">

       <div className='me-4'>

       <Form.Label className='formlabel fw-bold '>Form</Form.Label>

       <Form.Control type="date" name="form" placeholder="" />
       </div>

       <div className='me-4'>
       <Form.Label className='formlabel fw-bold'>To</Form.Label>
        <Form.Control type="date" name="to" placeholder="" />
       </div>

      </Form.Group>


      <button className='sub-btn ' type='submit'><Link to='/hotel'>Start Booking</Link></button>
    </Form >
        </div></Col>
        </Row>
        
      </Container>
        
    );
};

export default Booking;