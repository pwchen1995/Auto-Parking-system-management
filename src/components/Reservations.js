//Rounds -- A parent component for the app's "rounds" mode.
//Manages the rounds data for the current user and conditionally renders the
//appropriate rounds mode page based on App's mode, which is passed in as a prop.

import React from 'react';
import AppMode from '../AppMode.js';
import ReservationsTable from './ReservationsTable.js';
import ReservationForm from './ReservationForm.js';
import FloatingButton from './FloatingButton.js';

class Reservations extends React.Component {

    //Initialize a Rounds object based on local storage
    constructor(props) {
            super(props);
            let data = JSON.parse(localStorage.getItem(this.props.userId)); 
            if (data == null) { //no data yet for this user -- create empty record
                data = {ress: {},
                        resCount: 0};  
                localStorage.setItem(this.props.userId,JSON.stringify(data));
            }
            this.state = {ress: data.ress,
                          resCount: data.resCount,
                          deleteId: "",
                          editId: "",
                          showConfirmDelete: false,
                          menuOpened: this.props.menuOpened};           
        }

    //addRound -- Given an object newData containing a new round, add the round
    //to the current user's list of rounds, incremeting roundCount to ensure
    //the round id is unique. Then commit to local storage and toggle
    //the mode back to AppMode.ROUNDS since the user is done adding a round.
    addReservation = (newData) => {
        let data = JSON.parse(localStorage.getItem(this.props.userId));
        data.ress[++data.resCount] = newData;
        localStorage.setItem(this.props.userId, JSON.stringify(data));
        this.setState({ress: data.ress, resCount: data.resCount});
        this.props.changeMode(AppMode.RESERVATIONS);
    }

    //editRound -- Given an object newData containing updated data on an
    //existing round, update the current user's round uniquely identified by
    //this.state.editId, commit to local storage, reset editId to empty and
    //toggle the mode back to AppMode.ROUNDS since the user is done editing the
    //round. 
    editReservation = (newData) => {
        let data = JSON.parse(localStorage.getItem(this.props.userId)); 
        data.ress[this.state.editId] = newData;
        localStorage.setItem(this.props.userId, JSON.stringify(data));
        this.setState({ress: data.ress, editId: ""});
        this.props.changeMode(AppMode.RESERVATIONS);
    }

    //deleteRound -- Delete the current user's round uniquely identified by
    //this.state.deleteId, commit to local storage, and reset deleteId to empty.
    deleteReservation = () => {
        let data = JSON.parse(localStorage.getItem(this.props.userId));
        delete data.ress[this.state.deleteId];
        localStorage.setItem(this.props.userId,JSON.stringify(data));
        this.setState({ress: data.ress, deleteId: ""});
    }  

    //setDeleteId -- Capture in this.state.deleteId the unique id of the item
    //the user is considering deleting.
    setDeleteId = (val) => {
        this.setState({deleteId: val});
    }

    //setEditId -- Capture in this.state.editId the unique id of the item
    //the user is considering editing.
    setEditId = (val) => {
        this.setState({editId: val});
    }
    
    //render -- Conditionally render the Rounds mode page as either the rounds
    //table, the rounds form set to obtain a new round, or the rounds form set
    //to edit an existing round.
    render() {
        // alert(this.props.showExit);
        switch(this.props.mode) {
            case AppMode.RESERVATIONS:
                return (
                    <>
                    <ReservationsTable 
                    ress={this.state.ress}
                    setEditId={this.setEditId}
                    setDeleteId={this.setDeleteId}
                    deleteReservation={this.deleteReservation}
                    changeMode={this.props.changeMode}
                    menuOpen={this.props.menuOpen} /> 
                    <FloatingButton
                        handleClick={() => 
                        this.props.changeMode(AppMode.RESERVATIONS_LOGRESERVATION)}
                        menuOpen={this.props.menuOpen}
                        icon={"fa fa-plus"} />
                    </>
                );
            case AppMode.RESERVATIONS_LOGRESERVATION:
                return (
                    <ReservationForm
                        mode={this.props.mode}
                        startData={""} 
                        saveReservation={this.addReservation} />
                );
            case AppMode.RESERVATIONS_EDITRESERVATION:
                return (
                    <ReservationForm
                        mode={this.props.mode}
                        startData={this.state.ress[this.state.editId]} 
                        saveReservation={this.editReservation} />
                );
        }
    }

}   

export default Reservations;
