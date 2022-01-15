import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Post from "./components/Post";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route  path="/post/:slug" element={<SinglePost/>}/>
        <Route path="/post" element={<Post/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;