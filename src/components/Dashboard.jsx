import React from 'react'
import "../styles/Dashboard.css";
import NavDash from "./NavDashboard";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HeadDashboard from './HeadDashboard';
import { GlobalInfo } from "../App";


function Dashboard() {

  const Theme = React.useContext(GlobalInfo)

  return (
    <>
      <div className={`dashboard ${Theme.ThemeType === 'light' ? 'dashboard-dark' : ''}`}>

        <div className="dashboard-nav">
          <NavDash />
        </div>

        <div className="dashboard-body">
          <HeadDashboard />

          <div className="dashboard-body">
            <Outlet/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard