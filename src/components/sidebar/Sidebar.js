import React from 'react';
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faBriefcase, faCalendarCheck, faChartBar, faCog, faCommentDots, faFolder, faHome, faSignOutAlt, faTimes, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div>
                    <a href="#"><FontAwesomeIcon className="sidebar-img" icon={faBrain} /></a>
                </div>
                <i href="#"><FontAwesomeIcon id="sidebarIcon" onClick={() => closeSidebar()} icon={faTimes} /></i>
            </div>
            <div className="sidebar-menu">
                <div className="main-sidebar">
                    <div>
                        <div className="sidebar-link active-menu-link">
                            <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faHome} /></a>
                        </div>
                        <div className="sidebar-link">
                            <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faChartBar} /></a>
                        </div>
                        <div className="sidebar-link">
                            <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faBriefcase} /> </a>
                        </div>
                        <div className="sidebar-link">
                            <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faFolder} /> </a>
                        </div>
                        <div className="sidebar-link">
                            <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faCalendarCheck} /></a>
                        </div>
                        <div className="sidebar-link">
                            <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faUserFriends} /></a>
                        </div>
                        <div className="sidebar-link">
                            <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faCommentDots} /></a>
                        </div>
                        <div className="sidebar-link">
                            <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faSignOutAlt} /></a>
                        </div>
                    </div>
                    <div className="config-div">
                        <a href="#"><FontAwesomeIcon className="sidebar-icon" icon={faCog} /></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;