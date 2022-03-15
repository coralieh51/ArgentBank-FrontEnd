import React from "react";
import ReactDOM from "react-dom";
import "./style/css/main.css";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import Header from "./components/Header";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
