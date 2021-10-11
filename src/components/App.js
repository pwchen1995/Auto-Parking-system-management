import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import FloatingButton from './FloatingButton.js';
import LoginPage from './LoginPage.js';
import AppMode from "./../AppMode.js"
import Reservations from './Reservations.js';
import AboutBox from './AboutBox.js';
import MainPage from './MainPage.js';
import InfoPage from './InfoPage.js';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Welcome to SKS-SPS Parking System";
modeTitle[AppMode.RESERVATIONS] = "My Reservation";
modeTitle[AppMode.RESERVATIONS_LOGRESERVATION] = "Make New Reservation";
modeTitle[AppMode.RESERVATIONS_EDITRESERVATION] = "Edit Reservation";
modeTitle[AppMode.MAINPAGE] = "SKS-SPS Parking System"
modeTitle[AppMode.INFOPAGE] = "Parking Information"

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.RESERVATIONS] = Reservations;
modeToPage[AppMode.RESERVATIONS_LOGRESERVATION] = Reservations;
modeToPage[AppMode.RESERVATIONS_EDITRESERVATION] = Reservations;
modeToPage[AppMode.MAINPAGE] = MainPage;
modeToPage[AppMode.INFOPAGE] = InfoPage;


class App extends React.Component {

  constructor() {
    super();
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  userId: "",
                  showAbout: false,
                  opa: 1};
  }

  handleChangeMode = (newMode) => {
    this.Switchopacity(newMode)
    if (newMode == "ReservationsMode-LogReservation" && this.state.menuOpen == true){
        this.setState({mode: this.state.mode});
    }
    else {
      this.setState({mode: newMode});
    }
  }
  Switchopacity = (newMode) =>{
    if (newMode == "ReservationsMode-LogReservation"){
      this.setState({opa: 0.2});
    }
    else {
      this.setState({opa: 1})
    }
  }

  openMenu = () => {
    this.setState({menuOpen : true});
  }
  
  closeMenu = () => {
    this.setState({menuOpen : false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  setUserId = (Id) => {
    this.setState({userId: Id});
  }
  openReservationsForm = () =>{
    this.setState({mode: AppMode.RESERVATIONS_LOGRESERVATION});
  }
  closeAboutDialog = () =>{
    this.setState({showAbout: false});
  }
  showAboutDialog = () => {
    this.setState({showAbout: true});
  }

  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div>
      {this.state.showAbout == true? <AboutBox closeAbout={this.closeAboutDialog}/>: null}
        <NavBar 
          title={modeTitle[this.state.mode]} 
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}/>
          <SideMenu 
            menuOpen = {this.state.menuOpen}
            mode={this.state.mode}
            toggleMenuOpen={this.toggleMenuOpen}
            userId={this.state.userId}
            showAbout={this.showAboutDialog}
            openReservationsForm={this.openReservationsForm}
            logOut={this.handleChangeMode}/>
          <ModeBar 
            mode={this.state.mode} 
            changeMode={this.handleChangeMode}
            menuOpen={this.state.menuOpen}
            disableNavBar={this.state.disableNavBar}
            opa={this.state.opa}/>
          <ModePage 
            menuOpen={this.state.menuOpen}
            mode={this.state.mode}
            changeMode={this.handleChangeMode}
            userId={this.state.userId}
            setUserId={this.setUserId}/>
      </div>
    );  
  }
}

export default App;