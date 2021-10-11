import React from 'react';
import AppMode from "./../AppMode.js";
import parkingInfoBtn from "./../Parking-Information.png";
import reservationBtn from "./../reservation.png";
import paymentBtn from "./../payment.jpeg";
import customerBtn from "./../cusService.png";
import Clock from 'react-live-clock';

class MainPage extends React.Component {
    ChangeModeRounds = () =>{
      this.props.changeMode(AppMode.RESERVATIONS_LOGRESERVATION)
    }
    ChangeModeFee = () =>{
      this.props.changeMode(AppMode.RESERVATIONS)
    }
    ChangeModeService = () =>{
      this.props.changeMode(AppMode.RESERVATIONS)
    }
    ChangeModeInfo = () =>{
      this.props.changeMode(AppMode.INFOPAGE)
    }

    render() {
      var butStyle = {width:'180px',height:'45px'}
      return(
        <div>
          <div>
            <center>
              <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'}/>
            </center>
          </div>
            <center>
            <div style={{marginTop: '10%'}}>
                <h1>Welcome to SKS-SPS parking system</h1>
                <h2>To access following service, please click on related button</h2>
              </div>
            </center>
            <div style={{marginTop: '10%'}}>
              <center>
                <a role="button" className="login-btn" onClick = {this.ChangeModeInfo}>
                <img style={butStyle} src={parkingInfoBtn} />
                </a>
                <a role="button" className="login-btn" onClick = {this.ChangeModeRounds}>
                <img style={butStyle} src={reservationBtn} />
                </a>
                <a role="button" className="login-btn" onClick = {this.ChangeModeFee}>
                <img style={butStyle} src={paymentBtn} />
                </a>
                {/* <button onClick = {this.ChangeModeFee}>Pay Parking Fee</button>
                <button onClick = {this.ChangeModeService}>Customer Service</button> */}
              </center>
              <div type="button" className="floatbtn" onClick={this.ChangeModeService}>
                <span className="floatbtn-icon fa fa-phone">
                </span>
              </div> 
            </div>
        </div>
      );
    }
}

export default MainPage;
