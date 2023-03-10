import React from 'react'
import '../styles/Part5.css'
import { GlobalInfo } from "../App";
import { useNavigate } from 'react-router-dom';

function Part5() {

    const Theme = React.useContext(GlobalInfo)

    const navigate = useNavigate()

    const passFunc = () => {
        navigate('/dashboard/s4')
    }
    return (
        <>
            <div className={`part4 ${Theme.ThemeType === 'light' ? 'part4-dark' : ''}`}>
                <div className="part4-head">
                    Available Pools
                </div>
                <div className="part4-card">
                    <div className="part4-card-1">
                        <div className="part4-card-title">
                            Project Tittle
                        </div>
                        <div className="part4-card-name">
                            Project Name
                        </div>
                        <div className="part4-card-desc">
                            Project Description
                        </div>
                        <div className="part4-card-detail">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quam ipsa quidem laborum consequatur quod delectus neque obcaecati possimus dignissimos quae deserunt voluptas beatae nostrum autem asperiores in facere ducimus consectetur omnis, maiores repellat? Mollitia aperiam reprehenderit corrupti ea ducimus nam veritatis laborum molestiae atque nihil, dolorum blanditiis temporibus officiis!
                        </div>
                    </div>
                    <hr />
                    <div className="part4-btns">
                        <div className="part5-card-2">
                            <div className="p4-2-1">
                                <div className="div1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                                        <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
                                    </svg>
                                </div>
                                <div className='div2'>
                                    Status
                                    <div className="div2-1">
                                        Live/Stopped/Ended
                                    </div>
                                </div>
                            </div>
                            <div className="p4-2-2">
                                <div className="div1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                    </svg>

                                </div>
                                <div className='div2'>
                                    Contribution
                                    <div className="div2-1">
                                        $0
                                    </div>
                                </div>
                            </div>
                            <div className="p4-2-3">
                                <div className="div1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                    </svg>

                                </div>
                                <div className='div2'>
                                    Total Amount
                                    <div className="div2-1">
                                        $0
                                    </div>
                                </div>
                            </div>
                            <div className="p4-2-4">
                                <div className="div1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-minus" viewBox="0 0 16 16">
                                        <path d="M5.5 9.5A.5.5 0 0 1 6 9h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                    </svg>

                                </div>
                                <div className="div2">
                                    Timeline
                                    <div className="div2-1">
                                        <button>
                                            Start :  3 june 2022
                                        </button>
                                        <button>
                                            End :  4 june 2022
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p4-2-5">
                                <div className="div1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16">
                                        <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
                                    </svg>

                                </div>
                                <div className="div2">
                                    Coins
                                    <div className="div2-1">
                                        <button>
                                            BSC BUSD <span> > </span>
                                        </button>
                                        <button>
                                            BSC BUDP <span> > </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p4-2-6">
                                <div className="div1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
                                        <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                    </svg>

                                </div>
                                <div className='div2'>
                                    Acceptance Size
                                    <div className="div2-1 div-last">
                                        Min 500$ Max 850$
                                        <button className='part4-btn-1'>
                                            VC fee
                                        </button>
                                        <button className='part4-btn-2'>
                                            10%
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="part4-card-3">
                            Contribution sofar details
                        </div>
                    </div>
                </div>
                <div className="part5-lower-btns">
                    <button className='part5-lower-btns-1' onClick={passFunc}>
                        View Contribution Page
                    </button>
                    <button className='part5-lower-btns-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-down-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.364 12.5a.5.5 0 0 0 .5.5H14.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 14.5 0h-10A1.5 1.5 0 0 0 3 1.5v6.636a.5.5 0 1 0 1 0V1.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H7.864a.5.5 0 0 0-.5.5z" />
                            <path fill-rule="evenodd" d="M0 15.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H1.707l8.147-8.146a.5.5 0 0 0-.708-.708L1 14.293V10.5a.5.5 0 0 0-1 0v5z" />
                        </svg>
                        Download CSV
                    </button>
                </div>
            </div>
        </>
    )
}

export default Part5