import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import BoardDetail from "./component/Board/BoardDetail";
import BoardPostList from "./component/Board/BoardPostList";
import BoardWrite from "./component/Board/BoardWrite";
import Login from "./component/Login/Login";

function App() {
  // const [ session, setSession ] = useState('suah');
  
  return (
    <>
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<BoardPostList/>} />
          <Route path='/board/write' element={<BoardWrite />} />
          <Route path="/board/detail/:boardId" element={<BoardDetail />} />
          <Route path='/toyrent' element={<BoardPostList/>} />
          <Route path='/signup' element={<BoardPostList/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
