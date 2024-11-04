import React from 'react';
import Body from './components/Body';
import Login from './components/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login/>
      }
    ])

  return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
  );
}


export default App;
