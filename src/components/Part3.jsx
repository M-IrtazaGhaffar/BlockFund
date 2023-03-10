import React from 'react'
import "../styles/Part3.css";
import { GlobalInfo } from "../App"

function Part3() {

    const Theme = React.useContext(GlobalInfo)

    return (
        <>
            <div className={`part3 ${Theme.ThemeType === 'light' ? 'part3-dark' : ''}`}>
                <div className="part3-head">
                    <div className="part3-head-heading">
                        My Pool
                    </div>
                    <div className="part3-head-btns">
                        <button className='part3-head-btn1'>
                            Copy URL
                        </button>
                        <button className='part3-head-btn2'>
                            Edit
                        </button>
                    </div>
                </div>
                <div className="part3-card">
                    <div className="part3-card-title">
                        Project Title
                    </div>
                    <div className="part3-card-name">
                        Project Name
                    </div>
                    <div className="part3-card-desc">
                        Project Description
                    </div>
                    <div className="part3-card-detail">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi ipsam tenetur laudantium iure dolorum minus, est omnis ea eum quas fugiat quos excepturi veritatis expedita? Quam similique sint illum blanditiis qui eum quibusdam fuga doloribus ea odio! Sequi, facilis. Suscipit ducimus quasi dolor quod ab, atque, perspiciatis sapiente explicabo aliquam aspernatur asperiores illum, beatae deleniti quidem dicta. Molestias tempore illum repellat eius dolor provident dolores vel sapiente id modi.
                    </div>
                    <div className="part3-card-btns">
                        <div className="part3-card-btn p1">

                            <div className='p1-1'>
                                <div className="p1-1-1">

                                    <div class="container-1">
                                        75%
                                    </div>

                                    <div className="detail-1">
                                        Contribution
                                        <div className='detail-1-1'>
                                            333$
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="part3-card-btn p1">
                            <div className="p1-1">
                                <div className="p1-1-1">
                                    <div className="container-1 c-2">
                                        $
                                    </div>
                                    <div className="detail-1">
                                        Total Amount
                                        <div className='detail-1-1'>
                                            350$
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p2">
                            <div className="p2-1">
                                <div>
                                    Accepted Size
                                </div>
                                <div className="p2-1-btns">
                                    <button>
                                        Min:500$
                                    </button>
                                    <button>
                                        Max:6,000$
                                    </button>
                                    <button>
                                        VC Fee: 10%
                                    </button>
                                </div>
                            </div>
                            <div className="p2-1">
                                <div>
                                    Accepted Coins
                                </div>
                                <div className="p2-1-btns">
                                    <button>
                                        BSC BSUDT
                                    </button>
                                    <button>
                                        BSC USDC
                                    </button>
                                    <button>
                                        BSC USDC
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p3">
                            <div className="p3-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                                Edit Pool
                            </div>
                            <div className="p3-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                </svg>
                                Copy Contribution URL
                            </div>
                            <div className="p3-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                                View Contribution Page
                            </div>
                        </div>
                        <div className="p4">
                        <div className="p4-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                                Resume Pool
                            </div>
                            <div className="p4-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
                                    <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                                Download CSV
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Part3