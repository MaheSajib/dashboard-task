import React from 'react';
import dash from '../../img/dash.jpg';
import './SubMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const SubMain = () => {
    return (
        <div className="sub-main-container">
            <div className="dash-img">
                <p>Hello John <br /> You Have 8 New Application Today !</p>
                <img src={dash} alt="" />
            </div>
            <div className="new-application">
                <div className="infoTitle">
                    <p>New Applicants</p>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div className="info1">
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                        <p>Rosie Metts</p>
                        <p><small>Applied for <span className="text-lightblue"> IOS Developer</span></small></p>
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="info1">
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                        <p>James Scott</p>
                        <p><small>Applied for <span className="text-lightblue"> NodeJs Developer</span></small></p>
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="info1">
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                        <p>Jamie Laurenson</p>
                        <p><small>Applied for <span className="text-lightblue"> Marketing Manager</span></small></p>
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="info1">
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                        <p>Elizabeth Hurton</p>
                        <p><small>Applied for <span className="text-lightblue"> UI/UX Designer</span></small></p>
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="info1">
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                        <p>Danny Watson</p>
                        <p><small>Applied for <span className="text-lightblue"> IOS Developer</span></small></p>
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div className="info1">
                    <FontAwesomeIcon icon={faUser} />
                    <div>
                        <p>Reha Scarlett</p>
                        <p><small>Applied for <span className="text-lightblue"> IOS Developer</span></small></p>
                    </div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
            </div>
        </div>
    );
};

export default SubMain;