import React from 'react';
import { createRoutesFromElements } from 'react-router';
import { 
  createBrowserRouter,
  RouterProvider,
  Route  
} from 'react-router-dom';

/* Custom component imports*/
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {

  //create a router object
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
