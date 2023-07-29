import React, { useRef } from 'react'
import Logo1 from "../images/Logo1.png";
import Logo2 from "../images/Logo2.png";
import { GlobalInfo } from "../App";
import "../styles/NavDashboard.css"
// import DashIcon from "../images/Dashboard.png";
// import CoinIcon from "../images/Coin.png";
// import ProfileIcon from "../images/Profile.png";
// import DashIconDark from "../images/Dashboard-Dark.png";
// import CoinIconDark from "../images/Coin-Dark.png";
// import ProfileIconDark from "../images/Profile-Dark.png";
import { Link } from "react-router-dom";

function NavDashboard() {

    const Theme = React.useContext(GlobalInfo)

    const navFun = () => {
        const x = document.getElementById('navBtn')

        console.log("Hello")
        if (x.style.display == 'none') {
            x.style.display = 'block'
        }
        else {
            x.style.display = 'none'
        }
    }

    return (
        <>
            <div className={`navDash ${Theme.ThemeType === 'light' ? 'navDash-dark' : ''}`}>
                <div className="navDash-img">
                    {Theme.ThemeType != 'light' ? <img src={Logo1} alt="Logo" /> : <img src={Logo2} alt="Logo" />}
                </div>
                <div className="navDash-links-mobile">
                    <button onClick={navFun}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
                <div className={`navDash-links-pop`} id='navBtn'>
                    <div className="navDash-links">
                        <Link className='navDash-link' to='/dashboard'>
                            <svg width="24" height="24" stroke='currentColor' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.6875 4.5C1.6875 3.75408 1.98382 3.03871 2.51126 2.51126C3.03871 1.98382 3.75408 1.6875 4.5 1.6875H7.3125C8.05842 1.6875 8.77379 1.98382 9.30124 2.51126C9.82868 3.03871 10.125 3.75408 10.125 4.5V7.3125C10.125 8.05842 9.82868 8.77379 9.30124 9.30124C8.77379 9.82868 8.05842 10.125 7.3125 10.125H4.5C3.75408 10.125 3.03871 9.82868 2.51126 9.30124C1.98382 8.77379 1.6875 8.05842 1.6875 7.3125V4.5ZM1.6875 16.6875C1.6875 15.9416 1.98382 15.2262 2.51126 14.6988C3.03871 14.1713 3.75408 13.875 4.5 13.875H7.3125C8.05842 13.875 8.77379 14.1713 9.30124 14.6988C9.82868 15.2262 10.125 15.9416 10.125 16.6875V19.5C10.125 20.2459 9.82868 20.9613 9.30124 21.4887C8.77379 22.0162 8.05842 22.3125 7.3125 22.3125H4.5C3.75408 22.3125 3.03871 22.0162 2.51126 21.4887C1.98382 20.9613 1.6875 20.2459 1.6875 19.5V16.6875ZM13.875 4.5C13.875 3.75408 14.1713 3.03871 14.6988 2.51126C15.2262 1.98382 15.9416 1.6875 16.6875 1.6875H19.5C20.2459 1.6875 20.9613 1.98382 21.4887 2.51126C22.0162 3.03871 22.3125 3.75408 22.3125 4.5V7.3125C22.3125 8.05842 22.0162 8.77379 21.4887 9.30124C20.9613 9.82868 20.2459 10.125 19.5 10.125H16.6875C15.9416 10.125 15.2262 9.82868 14.6988 9.30124C14.1713 8.77379 13.875 8.05842 13.875 7.3125V4.5ZM13.875 16.6875C13.875 15.9416 14.1713 15.2262 14.6988 14.6988C15.2262 14.1713 15.9416 13.875 16.6875 13.875H19.5C20.2459 13.875 20.9613 14.1713 21.4887 14.6988C22.0162 15.2262 22.3125 15.9416 22.3125 16.6875V19.5C22.3125 20.2459 22.0162 20.9613 21.4887 21.4887C20.9613 22.0162 20.2459 22.3125 19.5 22.3125H16.6875C15.9416 22.3125 15.2262 22.0162 14.6988 21.4887C14.1713 20.9613 13.875 20.2459 13.875 19.5V16.6875Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>
                                Dashboard
                            </p>
                        </Link>
                        <Link className='navDash-link' to='s2'>
                            <svg width="26" height="26" stroke='currentColor' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 5.5V20.5M9.25 16.9775L10.3487 17.8012C11.8125 18.9 14.1863 18.9 15.6513 17.8012C17.1163 16.7025 17.1163 14.9225 15.6513 13.8238C14.92 13.2738 13.96 13 13 13C12.0937 13 11.1875 12.725 10.4962 12.1762C9.11375 11.0775 9.11375 9.2975 10.4962 8.19875C11.8787 7.1 14.1213 7.1 15.5038 8.19875L16.0225 8.61125M24.25 13C24.25 14.4774 23.959 15.9403 23.3936 17.3052C22.8283 18.6701 21.9996 19.9103 20.955 20.955C19.9103 21.9996 18.6701 22.8283 17.3052 23.3936C15.9403 23.959 14.4774 24.25 13 24.25C11.5226 24.25 10.0597 23.959 8.69481 23.3936C7.3299 22.8283 6.08971 21.9996 5.04505 20.955C4.00039 19.9103 3.17172 18.6701 2.60636 17.3052C2.04099 15.9403 1.75 14.4774 1.75 13C1.75 10.0163 2.93526 7.15483 5.04505 5.04505C7.15483 2.93526 10.0163 1.75 13 1.75C15.9837 1.75 18.8452 2.93526 20.955 5.04505C23.0647 7.15483 24.25 10.0163 24.25 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>
                                Create Fundriser
                            </p>
                        </Link>
                        <Link className='navDash-link'>
                            <svg width="26" height="26" stroke='currentColor' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4772 21.4062C19.6037 20.2498 18.4737 19.312 17.1761 18.6667C15.8785 18.0214 14.4488 17.6862 12.9997 17.6875C11.5505 17.6862 10.1208 18.0214 8.82317 18.6667C7.52559 19.312 6.39558 20.2498 5.52215 21.4062M20.4759 21.4062C22.1803 19.8902 23.3835 17.8919 23.9261 15.6764C24.4687 13.4608 24.325 11.1326 23.514 9.0006C22.703 6.86858 21.2631 5.03347 19.3851 3.73862C17.5072 2.44377 15.2801 1.75037 12.999 1.75037C10.718 1.75037 8.49082 2.44377 6.61291 3.73862C4.73499 5.03347 3.29506 6.86858 2.48407 9.0006C1.67308 11.1326 1.52934 13.4608 2.07192 15.6764C2.61451 17.8919 3.81778 19.8902 5.52215 21.4062M20.4759 21.4062C18.4184 23.2415 15.7567 24.2539 12.9997 24.25C10.2422 24.2542 7.57995 23.2418 5.52215 21.4062M16.7497 10.1875C16.7497 11.1821 16.3546 12.1359 15.6513 12.8391C14.948 13.5424 13.9942 13.9375 12.9997 13.9375C12.0051 13.9375 11.0513 13.5424 10.348 12.8391C9.64474 12.1359 9.24965 11.1821 9.24965 10.1875C9.24965 9.19294 9.64474 8.23911 10.348 7.53585C11.0513 6.83259 12.0051 6.4375 12.9997 6.4375C13.9942 6.4375 14.948 6.83259 15.6513 7.53585C16.3546 8.23911 16.7497 9.19294 16.7497 10.1875V10.1875Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>
                                Profile
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavDashboard
