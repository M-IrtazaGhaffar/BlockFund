import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import "./styles/Theme.css";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";
import Part5 from "./components/Part5";
export const GlobalInfo = React.createContext();

function App() {

  const [Theme, setTheme] = React.useState('light')

  const themeFunc = () => {
    if (Theme === 'light') {
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }

  return (
    <>
      <div className="theme">
        <span>Change Theme</span>
        <button onClick={themeFunc}>{Theme}</button>
      </div>

      <GlobalInfo.Provider value={{ ThemeType: Theme }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/dashboard" element={<Dashboard />}>
              <Route exact path="s1" element={<Part1/>}/>
              <Route exact path="s2" element={<Part2/>}/>
              <Route exact path="s3" element={<Part3/>}/>
              <Route exact path="s4" element={<Part4/>}/>
              <Route exact path="s5" element={<Part5/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalInfo.Provider>
    </>
  );
}

export default App;
