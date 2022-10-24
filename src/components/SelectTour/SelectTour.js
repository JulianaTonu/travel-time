
import { Link } from 'react-router-dom';
import './SelectTour.css'

const SelectTour = ({destination}) => {

  

const {name, image} =destination
console.log('my desti', destination)
 


    return (
        <div className="row m-4 ">

      <div className='col card'>

          
       <img src={ image} className="rounded  " alt="..."/>
       <p   className=' fw-bold text-center fs-20'><Link to={`/booking/${destination.id}`}>{name}</Link></p>
      </div>
     
 
        </div>
    );
};

export default SelectTour;
