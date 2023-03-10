import React from 'react'
import '../styles/Part1.css'
import { GlobalInfo } from "../App";

function Part1() {

    const Theme = React.useContext(GlobalInfo)

    return (
        <>
            <div className={`part1 ${Theme.ThemeType === 'light' ? 'part1-dark' : ''}`}>
                <div className="part1-head">
                    <div className="part1-head-heading">
                        My Contributions
                    </div>
                    <div className="part1-head-show">
                        <p>
                            Show
                        </p>
                        <select name="" id="">
                            <option value="">5</option>
                        </select>
                        <p>
                            Entries
                        </p>
                    </div>
                    <div className="part1-head-search">
                        <input type="text" placeholder='Search' />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="part1-main">
                    <div className="part1-main-p pmp1">
                        SUBJECT
                    </div>
                    <div className="part1-main-p pmp2">
                        STATUS
                    </div>
                    <div className="part1-main-p pmp3">
                        DISPOSITION STATUS
                    </div>
                    <div className="part1-main-p pmp4">
                        DATE SUMMITION
                    </div>
                    <div className="part1-main-p pmp5">
                        DATE Initiated
                    </div>
                    <div className="part1-main-p pmp6">
                        Amount
                    </div>
                </div>
                <div className="part1-detail">
                    <div className="part1-detail-r">
                        <div className="part1-detail-r-1 pdr">
                            Contribute On 25/8/2022
                        </div>
                        <div className="part1-detail-r-2 pdr">
                            Pending
                        </div>
                        <div className="part1-detail-r-3 pdr">
                            Follow
                        </div>
                        <div className="part1-detail-r-4 pdr">
                            20 January, 2022
                        </div>
                        <div className="part1-detail-r-5 pdr">
                            13 February, 2021
                        </div>
                        <div className="part1-detail-r-6 pdr">
                            500$
                        </div>
                    </div>
                </div>
                <div className="part1-footer">
                    <div className="part1-footer">
                        <div className="part1-footer-1">
                        Show 1 to 1 of 1 Enteries
                        </div>
                        <div className="part1-footer-2">
                            Next
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Part1