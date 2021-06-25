import React from 'react';
import './Main.css';
import Chart from '../charts/Chart';
import PieChart from '../piechart/PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faLocationArrow, } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="main-cards">
                    <div className="card">
                        <div className="card-inner">
                            <p className="text-primary-p">Total Applications</p>
                            <span className="font-bold text-title">7956</span>
                            <p className="text-purple"><FontAwesomeIcon icon={faArrowUp} /> +3.59%</p>
                        </div>
                        <div class="progress blue">
                            <span class="progress-left">
                                <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">+70%</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <p className="text-primary-p">ShortListed Candidates</p>
                            <span className="font-bold text-title">4658</span>
                            <p className="text-purple"><FontAwesomeIcon icon={faArrowUp} /> -06%</p>
                        </div>
                        <div class="progress blue">
                            <span class="progress-left">
                                <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar"></span>
                            </span>
                            <div class="progress-value">+60%</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <p className="text-primary-p">Total Applications</p>
                            <span className="font-bold text-title">1501</span>
                            <p className="text-red"><FontAwesomeIcon icon={faArrowDown} /> -04%</p>
                        </div>
                        <div class="progress blue">
                            <span class="progress-left">
                                <span class="progress-bar"></span>
                            </span>
                            <span class="progress-right">
                                <span class="progress-bar red-circle"></span>
                            </span>
                            <div class="progress-value">+40%</div>
                        </div>
                    </div>

                </div>

                <div className="charts">

                    <div className="charts-left">
                        <div className="charts-left-title">
                            <div>
                                <h4>Applications Received</h4>
                                <p>This Year, This Week, Today</p>
                            </div>
                            <Chart />
                        </div>

                    </div>

                    <div className="charts-right-cards">

                        <h4>Total Applications</h4>

                        <div className="card1">
                            <p>Application</p>
                            <div class="progress-border">
                                <div class="bar bg-skyblue" style={{width:"35%"}}>
                                    <p class="percent"></p>
                                </div>
                            </div>
                        </div>

                        <div className="card2">
                            <p>Short Liked</p>
                            <div class="progress-border">
                                <div class="bar bg-blue" style={{width:"80%"}}>
                                    <p class="percent"></p>
                                </div>
                            </div>
                        </div>

                        <div className="card3">
                            <p>Rejected</p>
                            <div class="progress-border">
                                <div class="bar bg-red" style={{width:"35%"}}>
                                    <p class="percent"></p>
                                </div>
                            </div>
                        </div>

                        <div className="card4">
                            <p>On hold</p>
                            <div class="progress-border">
                                <div class="bar bg-yellow" style={{width:"15%"}}>
                                    <p class="percent"></p>
                                </div>
                            </div>
                        </div>

                        <div className="card5">
                            <p>Presented</p>
                            <div class="progress-border">
                                <div class="bar bg-purple" style={{width:"85%"}}>
                                    <p class="percent"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pie-chart">
                    <div className="piecharts-right">

                        <div className="title-intro">
                            <div>
                                <h4>Referals and Campaign Starts</h4>
                            </div>
                            <div>
                                <p className="rise"><FontAwesomeIcon className="rise-arrow" icon={faLocationArrow} /> 40 Campaigns sent in total</p>
                                <h4>4 Campaigns sent in Last Month</h4>
                            </div>
                        </div>

                        <div className="middle-card">
                            <div className="card-detail1 ">
                                <p className="text-primary-p">User's Reached</p>
                                <br />
                                <p className="text-blue"><FontAwesomeIcon icon={faArrowUp} /> +3.59%</p>
                                <br />
                                <span className="font-bold text-title">7956</span>
                            </div>
                            <div className="card-detail2">
                                <p className="text-primary-p">Referals</p>
                                <br />
                                <p className="text-blue"><FontAwesomeIcon icon={faArrowUp} /> +3.59%</p>
                                <br />
                                <span className="font-bold text-title">0662</span>
                            </div>
                            <div className="card-detail3">
                                <p className="text-primary-p">Shares</p>
                                <br />
                                <p className="text-blue"><FontAwesomeIcon icon={faArrowUp} /> +3.59%</p>
                                <br />
                                <span className="font-bold text-title">1478</span>
                            </div>
                            <div className="card-detail4">
                                <p className="text-primary-p">Applications</p>
                                <br />
                                <p className="text-blue"><FontAwesomeIcon icon={faArrowUp} /> +3.59%</p>
                                <br />
                                <span className="font-bold text-title">0564</span>
                            </div>
                        </div>

                        <div className="middle-button">
                            <div >
                                <button className="blue-btn">Start a new Campaign now</button>
                            </div>
                            <div >
                                <button className="red-btn">Push all running Campaigns</button>
                            </div>
                        </div>

                    </div>

                    <div className="piecharts-left">

                        <h4>Open Positions By Departments</h4>

                        <PieChart></PieChart>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Main;