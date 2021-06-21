import React from 'react';
import './Main.css';
import Chart from '../charts/Chart';
import PieChart from '../piechart/PieChart';

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="main-cards">
                    <div className="card">
                        <i></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Total Applications</p>
                            <span className="font-bold text-title">7956</span>
                        </div>
                    </div>
                    <div className="card">
                        <i></i>
                        <div className="card-inner">
                            <p className="text-primary-p">ShortListed Candidates</p>
                            <span className="font-bold text-title">4658</span>
                        </div>
                    </div>
                    <div className="card">
                        <i></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Total Applications</p>
                            <span className="font-bold text-title">1501</span>
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
                            </div>

                            <div className="card2">
                                <p>Short Liked</p>
                            </div>

                            <div className="card3">
                                <p>Rejected</p>
                            </div>

                            <div className="card4">
                                <p>On hold</p>
                            </div>

                            <div className="card5">
                                <p>Presented</p>
                            </div>
                    </div>

                </div>

                <div className="pie-chart">
                    <div className="piecharts-right">
                            
                            <h4>Referals</h4>

                            <div className="card1">
                                <p>Application</p>
                            </div>

                            <div className="card2">
                                <p>Short Liked</p>
                            </div>

                            <div className="card3">
                                <p>Rejected</p>
                            </div>

                            <div className="card4">
                                <p>On hold</p>
                            </div>

                            <div className="card5">
                                <p>Presented</p>
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