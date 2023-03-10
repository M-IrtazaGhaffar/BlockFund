import React from 'react'
import '../styles/Part2.css'
// import Word from "./Word";
import { GlobalInfo } from "../App";
import { useNavigate } from 'react-router-dom';

function Part2() {

    const navigate = useNavigate()

    const Theme = React.useContext(GlobalInfo)

    const btnFun = () => {
        navigate('/dashboard/s4')
    }

    return (
        <>
            <div className={`part2 ${Theme.ThemeType === 'light' ? 'part2-dark' : ''}`}>
                <div className="part2-head">
                    Create New Pool
                </div>
                <div className="part2-s1">
                    <div className='part2-s1-1'>
                        <span>STEP 1</span> Introduction
                    </div>
                    <div className='part2-s1-2'>
                        <p>
                            Project Title *
                        </p>
                        <input type="text" />
                    </div>
                    <div className='part2-s1-3'>
                        <p>
                            Project Discription *
                        </p>
                        {/* <Word /> */}
                    </div>
                </div>
                <div className="part2-s2">
                    <div className='part2-s2-1'>
                        <span>STEP 2</span> Funds
                    </div>
                    <div className='part2-s2-2'>
                        <p>
                            Fund Receiver Address *
                        </p>
                        <input type="text" />
                    </div>
                    <div className="part2-s2-3">
                        <p>
                            Total Pool Amount *
                        </p>
                        <input type="text" />
                    </div>
                    <div className="part2-s2-4">
                        <p>
                            Pool Currency *
                        </p>
                        <input type="text" />
                    </div>
                </div>
                <div className="part2-s3">
                    <div className='part2-s3-1'>
                        <span>STEP 3</span> Funds
                    </div>
                    <div className='part2-s3-2'>
                        <p>
                            User Group/ Tier *
                        </p>
                        <input type="text" />
                    </div>
                    <div className='part2-s3-2'>
                        <p>
                            Min Single Ticket Amount *
                        </p>
                        <input type="text" />
                    </div>
                    <div className='part2-s3-2'>
                        <p>
                            Max Single Ticket Amount *
                        </p>
                        <input type="text" />
                    </div>
                    <div className='part2-s3-2'>
                        <p>
                            VC Fee % for these pool
                        </p>
                        <input type="text" />
                    </div>
                    <div className='part2-s3-2'>
                        <p>
                            Pool Start Date *
                        </p>
                        <input type="text" />
                    </div>
                    <div className='part2-s3-2'>
                        <p>
                            Pool End Date *
                        </p>
                        <input type="text" />
                    </div>
                    <button className="part2-s3-btn">
                        Create Group Rules
                    </button>
                </div>
                <div className="part2-s4">
                    <div className='part2-s4-1'>
                        <span>STEP 4</span> Settings
                    </div>
                    <div className='part2-s4-2'>
                        <p>
                            Choose the fields you want to collect from contributions *
                        </p>
                        <input type="text" placeholder='Email'/>
                    </div>
                    <button className='cancel-btn'>
                        Cancel
                    </button>
                    <button className="part2-s4-btn" onClick={btnFun}>
                        Create Group Rules
                    </button>
                </div>
            </div>
        </>
    )
}

export default Part2