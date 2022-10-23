import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Booking = () => {
    return (
        
             <Container className=''>
        <Row>
          <Col  sm={11} lg={6} className='text-white'>
          <h1 className='mt-5'>Cox's Bazar</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero totam eaque, dignissimos quos earum, veritatis delectus quae autem vitae nobis molestiae quo velit accusantium illo, ea veniam qui aliquam corporis.</p>
          </Col>


          <Col sm={12} lg={6}>
            <div className='login w-75 mx-auto  pt-4 pb-5 booking'>
            <h1 className='mb-4 text-center'>For Booking</h1>

            <Form >
      

      <Form.Group className="mb-3" controlId="formBasicOrigin">
        <Form.Label className='formlabel fw-bold'>Origin</Form.Label>
        <Form.Control type="text" name="origin" placeholder="Enter origin" />  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='formlabel fw-bold'>Destination</Form.Label>
        <Form.Control type="text" name="destination" placeholder="" />
      </Form.Group>
      <button className='sub-btn ' type='submit'>Start Booking</button>
    </Form >
        </div></Col>
        </Row>
        
      </Container>
        
    );
};

export default Booking;