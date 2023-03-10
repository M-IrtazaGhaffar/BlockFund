import React from 'react'
import Nav from "./Nav";
import S1 from "./S1";
import S2 from "./S2";
import S3 from "./S3";
import S4 from "./S4";
import Footer from "./Footer";
import { GlobalInfo } from "../App";

import "../styles/BG-1.css";

function LandingPage() {

  const Theme = React.useContext(GlobalInfo)

  return (
    <>
      <div className={`bg-1 ${Theme.ThemeType === 'light' ? 'bg-1-dark' : ''}`}>
        <Nav />
        <S1 />
      </div>
      <S2 />
      <S3 />
      <S4 />
      <Footer />
    </>
  )
}

export default LandingPage