import React from 'react';
import AppMode from '../AppMode';
import parkingBtn from './../parkingsign.png';

class NavBar extends React.Component {

  getMenuBtnIcon = () => {
      if (this.props.mode === AppMode.RESERVATIONS_LOGRESERVATION || 
          this.props.mode === AppMode.RESERVATIONS_EDITRESERVATION ||
          this.props.mode === AppMode.INFOPAGE)
          return "fa fa-arrow-left";
      if (this.props.menuOpen)
        return "fa fa-times";
      return "fa fa-bars";
  }

  handleMenuBtnClick = () => {
    if (this.props.mode === AppMode.RESERVATIONS_LOGRESERVATION ||
        this.props.mode === AppMode.RESERVATIONS_EDITRESERVATION) 
    {
      // this.props.showExitDialog();
      this.props.changeMode(AppMode.MAINPAGE);
    } else if (this.props.mode != AppMode.LOGIN) {
      this.props.toggleMenuOpen();
    }
  }

  ExitDialog = (id) => {
    // this.props.setDeleteId(id);
    this.setState({showExitDialog: true});
    // this.setState({target: id})
  }
  cancelExit = () =>{
    this.setState({showExitDialog: false});
  }
  confirmExit = () =>{
    // this.props.deleteReservation()
    this.setState({showExitDialog: false});
  }

    
  render() {
    return (
    <div className="navbar">  
    
    <span className="navbar-items">
      <button className="sidemenu-btn" onClick={this.handleMenuBtnClick}>
        <span id="menuBtnIcon" className={"sidemenu-btn-icon " + this.getMenuBtnIcon()}>
        </span>
      </button>
      <img src={parkingBtn} alt="Parking Express Logo" height="38px"
      width="38px" border-radius="50px"/>
      <span className="navbar-title">
        &nbsp;{this.props.title}
      </span>
    </span>
  </div>
); 
}
}

export default NavBar;
