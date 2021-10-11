import React from 'react';
import AppMode from './../AppMode.js'

class SideMenu extends React.Component {

//renderModeItems -- Renders correct subset of mode menu items based on
//current mode, which is stored in this.prop.mode. Uses switch statement to
//determine mode.
renderModeMenuItems = () => {
  switch (this.props.mode) {
    // case AppMode.FEED:
    //   return(
    //     <div>
    //     <a className="sidemenu-item">
    //         <span className="fa fa-users"></span>&nbsp;Followed Users</a>
    //     <a className="sidemenu-item ">
    //         <span className="fa fa-search"></span>&nbsp;Search Feed</a>
    //     </div>
    //   );
    // break;
    case AppMode.MAINPAGE:
      return(
        <div>
        {/* <a className="sidemenu-item">
            <span className="fa fa-users"></span>&nbsp;Followed Users</a> */}
        <a className="sidemenu-item ">
            <span className="fa fa-exclamation-circle"></span>&nbsp;Car Plate</a>
        </div>
      );
    break;
    case AppMode.RESERVATIONS:
      return(
        <div>
          <a className="sidemenu-item"  onClick={() => this.props.openReservationsForm()}>
            <span className="fa fa-plus"></span>&nbsp;Make New Reservation</a>
          <a className="sidemenu-item">
            <span className="fa fa-search"></span>&nbsp;Search Reservations</a>
        </div>
      );
    break;
    // case AppMode.COURSES:
    //   return(
    //     <div>
    //     <a className="sidemenu-item">
    //         <span className="fa fa-plus"></span>&nbsp;Add a Course</a>
    //     <a className="sidemenu-item">
    //         <span className="fa fa-search"></span>&nbsp;Search Courses</a>
    //     </div>
    //   );
    default:
        return null;
    }
}

    render() {
       return (
        <div className={"sidemenu " + (this.props.menuOpen ? "sidemenu-open" : "sidemenu-closed")}
             onClick={this.props.toggleMenuOpen}>
          {/* SIDE MENU TITLE */}
          <div className="sidemenu-title">
              <img src='https://lh3.googleusercontent.com/d/1qyej0Pdi1IwJNLMgJ3Feag6ojUX-CCfw=s220?authuser=0' height='50' width='50' />
              <span id="userID" className="sidemenu-userID">&nbsp;{this.props.userId}</span>
          </div>
          {/* MENU CONTENT */}
          {this.renderModeMenuItems()}
          {/* The following menu items are present regardless of mode */}
          <a id="aboutBtn" className="sidemenu-item" onClick={()=>this.props.showAbout()}>
            <span className="fa fa-info-circle"></span>&nbsp;About</a>
          <a id="logOutBtn" className="sidemenu-item" onClick={()=>this.props.logOut(AppMode.LOGIN)}>
            <span className="fa fa-sign-out-alt"></span>&nbsp;Log Out</a>
        </div>
       );
    }
}

export default SideMenu;
