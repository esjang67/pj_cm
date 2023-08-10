import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Area from "./page/Area";
import Subject from "./page/Subject";
import Museum from "./page/Museum";
import Mark from "./page/Mark";
import Review from "./page/Review";
import Member from "./page/Member";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/area" element={<Area />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/museum/:MID" element={<Museum />} />
        <Route path="/mark" element={<Mark />} />
        <Route path="/review" element={<Review />} />
        <Route path="/member" element={<Member />} />
      </Routes>
    </div>
  );
}

export default App;
