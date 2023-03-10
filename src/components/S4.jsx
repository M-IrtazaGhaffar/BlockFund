import React from 'react'
import Axios from "axios";
import "../styles/S4.css";
import { GlobalInfo } from "../App";

function S4() {

  const [Btn, setBtn] = React.useState(false)

  const displayFun = () => {

    let y = document.getElementById('para')

    if (y.style.display == 'block') {
      y.style.display = 'none'
    } else {
      y.style.display = 'block'
    }


    if (!Btn) {
      setBtn(true)
    }
    else {
      setBtn(false)
    }

  }

  const [Email, setEmail] = React.useState('')
  const [Msg, setMsg] = React.useState('')

  const formFun = async (e) => {
    e.preventDefault()
    const url = ''
    await Axios.post(url, {
      Email, Msg
    })
  }

  const Theme = React.useContext(GlobalInfo)




  return (
    <>
      <div className={`s4 ${Theme.ThemeType === 'light' ? 's4-dark' : ''}`}>
        <div className="s4-detail">
          <div className="s4-detail-head" id='head'>
            <div id="question">
              How does it work?
            </div>
            <button id="icon" onClick={displayFun}>
              {
                !Btn ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                </svg>
              }
            </button>
          </div>
          <div className="s4-detail-para" id='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi dolores quibusdam maxime doloribus non nulla voluptatum facilis soluta rem consequatur illo quis vitae labore eos suscipit, laboriosam esse iste.
          </div>
        </div>

        <div className="s4-form">
          <div className="s4-form-head">
            Still have A <span className='span1'>Questions</span>?
          </div>
          <div className="s4-form-desc">
            Loredm ipsudm dodlor sdit amdet, codnsectetur
            adipidscing eldit. Aldiquam ddictddum nec elemenftum et.
          </div>
          <form method='POST'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required className='input-1' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="text">Enter Your Question</label>
            <textarea type="text" name="text" cols="30" rows="10" id="" required className='input-2' onChange={(e) => setMsg(e.target.value)}></textarea>
            <button type='submit' onClick={formFun}>Ask Question</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default S4