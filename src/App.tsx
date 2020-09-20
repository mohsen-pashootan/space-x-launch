import React, { useState } from "react";
import "./App.css";
import Layout from "./sharedComponent/layout";

function App() {
  const [mode, setMode] = useState("earth");
  return (
    <Layout onPast onLuanch>
      {}
    </Layout>
  );
}

export default App;
