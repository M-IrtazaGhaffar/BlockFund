import React from 'react'
import "../styles/S1.css";
import { GlobalInfo } from "../App";
import { useNavigate } from 'react-router-dom';

function S1() {

  const Theme = React.useContext(GlobalInfo)

  const navigate = useNavigate()

  const navigateFun = () => {

    navigate('/dashboard/s1')
  }
  
  return (
    <>
      <div className={`s1 ${Theme.ThemeType === 'light' ? 's1-dark' : ''}`}>
        <div className="s1-head">
          <div className="s1-heading">
            The Best Way to raise fund in <span className='span1'>Crypto Currency</span> for
          </div>
          <div className='s1-desc'>
            Project, VC, Community, Charity etc.
          </div>
        </div>
        <div className="s1-btns">
          <button className='s1-btn-1'>Create Fundriser</button>
          <button className='s1-btn-2' onClick={navigateFun}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
            <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
          </svg> Invest Now</button>
        </div>
      </div>
    </>
  )
}

export default S1