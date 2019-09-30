import React from "react";
import Home from "./components/home";
import { AppProvider } from "./contexts";

const App = () => (
  <AppProvider>
    <Home />
  </AppProvider>
);

export default App;
