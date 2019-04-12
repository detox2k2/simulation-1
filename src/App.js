import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

class App extends Component {
  render() {
    return <Dashboard />, <Form />, <Header />;
  }
}

export default App;
