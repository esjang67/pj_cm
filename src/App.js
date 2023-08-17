import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Area from "./page/Area";
import Subject from "./page/Subject";
import Museum from "./page/Museum";
import Mark from "./page/Mark";
import Review from "./page/Review";
import Header from "./component/Header";
import ReviewDetail from "./page/ReviewDetail";
import Login from "./page/Login";
import Join from "./page/Join";
import { useState } from "react";

function App() {

  const [ user, setUser ] = useState();

  console.log('App', user)
  return (
    <div className="App">
      <div>
        <Header user={user} setUser={setUser} />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/area" element={<Area />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/museum/:id" element={<Museum />} />
        <Route path="/mark" element={<Mark />} />
        <Route path="/review" element={<Review />} />
        <Route path="/review/:id" element={<ReviewDetail />} />
        <Route path="/member/login" element={<Login setUser={setUser} />} />
        <Route path="/member/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
