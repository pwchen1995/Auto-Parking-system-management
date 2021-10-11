import React from 'react';
import parkingBtn from './../parkingsign.png';

class AboutBox extends React.Component {

    render() {
      return(
        <div id="aboutModal" className="modal" role="dialog">
            <div className="modal-content" style={{background: '#fff'}}>
                <div className="modal-header">
                    <center>
                    <h3 className="modal-title"><b>About SKS-SPS Parking Express System</b>
                        <button id="modalClose" className="close"
                        style={{border: '2px solid black',
                        backgroundColor: 'black', color: 'white'}} onClick={()=>this.props.closeAbout()}>
                        &times;</button>
                    </h3>
                    </center>
                    
                </div>
                <div className="modal-body">
                    <center>
                    <img
                    src={parkingBtn}
                    height="200" width="200"></img>
                    <h3>The Most Intelligent Parking Management System</h3>
                    <p style={{fontStyle:'italic'}}>Version 8787 (Live), Build 12.3.2021 &copy; 2021-present The Development team of Software Quality course. All rights.
                    </p>
                    </center>
                    <p>SKS-SPS Parking System apps support</p>
                    <ul>
                    <li>Reservation</li>
                    <li>Seacrhing vehicle</li>
                    <li>Customer Service</li>
                    <li>The World's top security payment system</li>
                    </ul>
                    <p>SKS-SPS Parking Express is developed by team SKS-SPS,
                    graduate students of computer science at Washington State
                    University.</p>
                    <p>For more information on SKS-SPS Parking Express, contact maintance team.</p>
                </div>
                <div className="modal-footer">
                        <button id="aboutOK" className="close" style={{border: '2px solid black', padding: '4px',
                         backgroundColor: 'black' , color: 'white'}} onClick={()=>this.props.closeAbout()}>
                        OK</button>
                </div>
            </div>
        </div>
      );
    }
}

export default AboutBox;