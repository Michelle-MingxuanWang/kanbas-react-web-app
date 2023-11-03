import Nav from "../Nav";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
  return (
    <Provider store={store}>
      <div className="container">
        <Nav/>
        <h1>Labs</h1>
        <Link to="a3">Assignment 3</Link>
        <Link to="a4">Assignment 4</Link>
        <Routes>
          <Route path="/" element={<Navigate to="a4" />} />
          <Route path="a3/*" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;
