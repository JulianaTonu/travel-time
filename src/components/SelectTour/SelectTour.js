import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SelectTour.css'

const SelectTour = ({destination}) => {

  

const {name, image} =destination
console.log('my desti', destination)
 


    return (
        <div className="row m-4  ">

      <div className='col card'>

          
       <img src={ image} className="rounded  " alt="..."/>
       <p   className=' fw-bold text-center fs-20'><Link to={`/booking/${destination.id}`}>{name}</Link></p>
      </div>
     
 
        </div>
    );
};

export default SelectTour;

{/* <div className="col-3 m-4">
<img src={ Sajek} className="rounded " alt="..."/>
<p className='text-white fw-bold text-center fs-20'>Sajek</p>
</div>
<div className="col-3 m-4">
<img src={ Sreemongol} className="rounded " alt="..."/>
<p className='text-white fw-bold text-center fs-20'>Sreemongol</p>
</div>
<div className="col-3 m-4">
<img src={ sundorbon} className="rounded  " alt="..."/>
<p className='text-white fw-bold text-center fs-20'>Sundorbon</p>
</div> */}