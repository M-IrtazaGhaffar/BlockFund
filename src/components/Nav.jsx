import React from 'react'
import Logo1 from "../images/Logo1.png";
import Logo2 from "../images/Logo2.png";
import { GlobalInfo } from "../App";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {

  const Theme = React.useContext(GlobalInfo)

  const navFun1 = () => {
    const x = document.getElementById('navBtn1')
    const y = document.getElementById('nav-5')

    console.log("Hello")
    if (y.style.display == 'none') {
        y.style.display = 'block'
    }
    else {
        y.style.display = 'none'
    }
}

  return (
    <>
      <div className={`nav ${Theme.ThemeType === 'light' ? 'nav-dark' : ''}`}>
        <div className="nav-1">
          {Theme.ThemeType != 'light' ? <img src={Logo1} alt="Logo" /> : <img src={Logo2} alt="Logo" />}
        </div>
        <div className="nav-2">
          <a href="#">Fundrise</a>
          <a href="#">Invest</a>
        </div>
        <div className="nav-3">
          <button>
            Connect Wallet
          </button>
        </div>
        <div className="nav-4">
          <button id='navBtn1' onClick={navFun1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <div className="nav-5" id='nav-5'>
            <Link to='dashboard/s2'>Fundrise</Link>
            <Link to='dashboard/s1'>Invest</Link>
            <Link to='/'>Connect Wallet</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav