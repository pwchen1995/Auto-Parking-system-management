import React from 'react';
import AppMode from "./../AppMode.js";

class LoginPage extends React.Component {

    constructor() {
        super();
        //Create a ref for the email input DOM element
        this.carplateRef = React.createRef();
        this.state = {faIcon: "fa fa-sign-in"}
      }
    
    //Focus cursor in email input field when mounted
    componentDidMount() {
        this.carplateRef.current.focus();
    }  

    handleSubmit = (event) => {
        this.setState({faIcon: "fa fa-spin fa-spinner"});
        let stay = this.state
        delete stay.faIcon;
        setTimeout(this.login,1000,stay);
        event.preventDefault();
        this.props.setUserId(this.carplateRef.current.value);
    }
    login = () =>{
        this.props.changeMode(AppMode.MAINPAGE);
    }

    render() {
        return(
        <div id="login-mode-div" className="padded-page">
        <center>
            <h1 />
            <form id="loginInterface" onSubmit={this.handleSubmit}>
            <label htmlFor="carplateInput" style={{ padding: 0, fontSize: 24 }}>
                Car Plate:
                <input
                ref={this.carplateRef}
                className="form-control login-text"
                // type="email"
                placeholder="Enter Your Car Plate"
                id="carplateInput"
                pattern="[A-Z0-9]+"
                required={true}
                />
            </label>
            <p />
            <label htmlFor="phonenumInput" style={{ padding: 0, fontSize: 24 }}>
                Phone Number:
                <input
                className="form-control login-text"
                type="password"
                placeholder="Enter Phone Number"
                pattern="[0-9]+{10}"
                required={true}
                />
            </label>
            <p className="bg-danger" id="feedback" style={{ fontSize: 16 }} />
            <button
                type="submit"
                className="btn-color-theme btn btn-primary btn-block login-btn">
                <span id="login-btn-icon" className={this.state.faIcon}/>
                &nbsp;Submit
            </button>
            <br />
            <a role="button" className="login-btn">
                <img src="https://drive.google.com/uc?export=view&id=1YXRuG0pCtsfvbDSTzuM2PepJdbBpjEut" />
            </a>
            <a role="button" className="login-btn">
                <img src="https://drive.google.com/uc?export=view&id=1ZoySWomjxiCnC_R4n9CZWxd_qXzY1IeL" />
            </a>
            <p>
                <i>Version SKS-SPS parking system.</i>
            </p>
            <p>
                <i>© 2021 Develope Team of SKS-SPS parking system. All rights reserved.</i>
            </p>
            </form>
        </center>
        </div>
        )
    }
}

export default LoginPage;
