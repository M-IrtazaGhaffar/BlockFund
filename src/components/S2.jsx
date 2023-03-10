import React from 'react'
import "../styles/S2.css";
import Icon1 from "../images/Icon1.png";
import Icon2 from "../images/Icon2.png";
import Icon3 from "../images/Icon3.png";
import { GlobalInfo } from "../App";

function S2() {
  
  const Theme = React.useContext(GlobalInfo)
  
  return (
    <>
      <div className={`s2 ${Theme.ThemeType === 'light' ? 's2-dark' : ''}`}>
        <div className="s2-head">
          why you should use <span className='span1'>BlockFund</span>?
        </div>
        <div className="s2-desc">
          Loredm ipsudm dodlor sdit amdet, codnsectetur adipidscing eldit. Aldiquam ddictddum nec elemenftum.
        </div>
        <div className="s2-box"></div>
        <div className="s2-cards">
          <div className="s2-card s2-card1">
            <div className="s2-icon">
              <img src={Icon1} alt="" srcset="" />
            </div>
            <div className="s2-card-detail">
              <h4>
                Trust
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse placerat felis
                quis posuere pretium. Nam eu blandit
                metus.
                <br />
                Vivamus iaculis erat eu massa sollicitudin
                condimentum. Nunc quis magna vulputate,
                vehicula mauris id, commodo neque.
                Suspendisse egestas velit at elit aliquam,
                vel lobortis felis euismod. Aenean in
                placerat odio. Duis gravida id mauris
                eget lobortis.
              </p>
            </div>
          </div>
          <div className="s2-card s2-card2">
            <div className="s2-icon">
              <img src={Icon2} alt="" srcset="" />
            </div>
            <div className="s2-card-detail">
              <h4>
                Commission
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse placerat felis
                quis posuere pretium. Nam eu blandit
                metus.
                <br />
                Vivamus iaculis erat eu massa sollicitudin
                condimentum. Nunc quis magna vulputate,
                vehicula mauris id, commodo neque.
                Suspendisse egestas velit at elit aliquam,
                vel lobortis felis euismod. Aenean in
                placerat odio. Duis gravida id mauris
                eget lobortis.
              </p>
            </div>
          </div>
          <div className="s2-card s2-card3">
            <div className="s2-icon">
              <img src={Icon3} alt="" srcset="" />
            </div>
            <div className="s2-card-detail">
              <h4>
                Quick
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse placerat felis
                quis posuere pretium. Nam eu blandit
                metus.
                <br />
                Vivamus iaculis erat eu massa sollicitudin
                condimentum. Nunc quis magna vulputate,
                vehicula mauris id, commodo neque.
                Suspendisse egestas velit at elit aliquam,
                vel lobortis felis euismod. Aenean in
                placerat odio. Duis gravida id mauris
                eget lobortis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default S2