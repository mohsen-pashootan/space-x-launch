import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./sharedComponent/layout";

function App() {
  const [mode, setMode] = useState("earth");
  return <Layout></Layout>;
}

export default App;
