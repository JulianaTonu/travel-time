import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

import SelectTour from '../SelectTour/SelectTour';
import './Home.css'



const Home = () => {
const destinations =useLoaderData()

  const{user}=useContext(AuthContext)

    return (

      <div className="container text-center">
  <div className="row">
    <div className="col-4 my-5 text-white text-center">
    <h1 className='mt-5'> Take a tour: {user?.displayName}{destinations.length}</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio laborum inventore aliquam fugiat nemo nobis? Non similique mollitia deleniti. Explicabo atque suscipit provident nihil inventore, illum vero at magni?</p>

            <button className='btn btn-warning'><Link to='/booking'>Booking</Link> </button>
    </div>


    <div className="col my-5  tour">
      
{
  destinations.map(destination=><SelectTour
  key={destination.id}
  destination={destination}
  
  ></SelectTour>)
}
  

    </div>
   
  </div>
</div>
       
    );
};

export default Home;



// <div className='bg'>
// <div className='text-white text-center'>
//  <h1> Take a tour</h1>
//  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio laborum inventore aliquam fugiat nemo nobis? Non similique mollitia deleniti. Explicabo atque suscipit provident nihil inventore, illum vero at magni?</p>
//  <button className='btn btn-warning'>Booking</button>
// </div>

// <div className='tour '>
// <div className="">
// <img src={ sundorbon} className="rounded" alt="..."/>
// <p className='text-white fw-bold text-center fs-20'>Sundorbon</p>
// </div>
// <div className="">
// <img src={ Sajek} className="rounded" alt="..."/>
// <p className='text-white fw-bold text-center fs-20'>Sajek</p>
// </div>
// <div className="">
// <img src={ Sreemongol} className="rounded" alt="..."/>
// <p className='text-white fw-bold text-center fs-20'>Sreemongol</p>
// </div>
// </div>
// </div>