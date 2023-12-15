import React from 'react';
import "./common.css"
import "./adaptive.css"
import {RouterProvider} from "react-router-dom";
import {router} from "./data/routers";



function App() {
  return <RouterProvider router={router}/>
}

export default App;
