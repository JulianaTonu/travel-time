
import { RouterProvider } from 'react-router-dom/dist';

import { routes } from './routes/Routes';

import './App.css'

function App() {

  
  return (
    <div className="app">
     
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
