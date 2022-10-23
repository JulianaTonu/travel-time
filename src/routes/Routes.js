
import { createBrowserRouter } from 'react-router-dom/dist';
import Booking from '../components/Booking/Booking';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Main from '../layout/Main';



 export const routes =createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/booking',
                element:<Booking></Booking>
            }

        ]
    }
    
 ])

    
