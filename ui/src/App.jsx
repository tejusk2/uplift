import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Layout from "./containers/Layout";
import Login from "./containers/Login";
import PostCreator from "./components/PostCreator";
import PV from "./containers/PV";
import Error from "./containers/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Layout/>}>
            <Route index element = {<Home/>} />
            <Route path = '/login' element = {<Login/>}/>
            <Route path = "/create" element = {<PostCreator/>}/>
            <Route path = "/posts/:postId" element = {<PV/>}/>
            <Route path = "/pagenotfound" element = {<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
