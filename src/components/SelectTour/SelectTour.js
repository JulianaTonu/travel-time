import React from 'react';

import Sajek from '../../images/Sajek.png'
import Sreemongol from '../../images/Sreemongol.png'
import sundorbon from '../../images/sundorbon.png'
import CoxsBazar from '../../images/Rectangle 1.png'

const SelectTour = () => {
    return (
        <div className="row ">

        <div className="col-3 m-4">
       <img src={ CoxsBazar } className="rounded  " alt="..."/>
       <p className='text-white fw-bold text-center fs-20'>Cox's Bazar</p>
     </div>
     <div className="col-3 m-4">
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
     </div>
        </div>
    );
};

export default SelectTour;