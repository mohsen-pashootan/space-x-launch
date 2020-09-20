import React, { useState } from "react";
import PastLaunches from "./component/pastLaunches";
import UpcomingLaunches from "./component/upcomingLaunches";
import Layout from "./sharedComponent/layout";

function App() {
  const [mode, setMode] = useState("earth");

  function handleOnPast() {
    setMode("past");
  }
  function handleOnLaunch() {
    setMode("launch");
  }
  return (
    <Layout onPast={handleOnPast} onLuanch={handleOnLaunch}>
      {mode === "past" && <PastLaunches />}
      {mode === "launch" && <UpcomingLaunches />}
    </Layout>
  );
}

export default App;
