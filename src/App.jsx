import './App.css';
import {  RouterProvider, createHashRouter } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Layout from './Layout/Layout';

function App() {
  let routes = createHashRouter([
    {path:'/' , element:<Layout /> , children:[
      {index:true, element: <Login/>},
      {path: "/register", element: <Register/>},

    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
