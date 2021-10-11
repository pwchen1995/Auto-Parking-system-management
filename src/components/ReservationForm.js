import React from 'react';
import AppMode from '../AppMode.js';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        //Create date object for today, taking time zone into consideration
        let today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
        //store date as ISO string
        if (this.props.mode === AppMode.RESERVATIONS_LOGRESERVATION) {
            //If logging a new reservation, the starting state is a default reservation with
            //today's date.
            this.state = {date:  today.toISOString().substr(0,10), 
                        plate: "",
                        slot: "",
                        notes: "",
                        faIcon: "fa fa-save",
                        btnLabel: "Save Reservation Data"}
        } else {
            //if editing an existing reservation, the starting state is the reservation's
            //current data
            this.state = this.props.startData;
            this.state.faIcon = "fa fa-edit";
            this.state.btnLabel = "Update Reservation Data";
        }
    }
  
  
    handleChange = (event) => {
        const name = event.target.name;
        if (name === "seconds") {
          let newSec = (event.target.value.length < 2 ? "0" + 
            event.target.value : event.target.value);
          let newSGS = this.computeSGS(this.state.strokes, this.state.minutes, 
                                       newSec);
          this.setState({seconds: newSec, SGS: newSGS});
        } else if (name === "strokes") {
          let newStrokes = event.target.value;
          let newSGS = this.computeSGS(newStrokes, this.state.minutes, 
            this.state.seconds);
          this.setState({strokes: newStrokes, SGS: newSGS});
        } else if (name === "minutes") {
            let newMin = event.target.value;
            let newSGS = this.computeSGS(this.state.strokes, newMin, 
              this.state.seconds);
            this.setState({minutes: newMin, SGS: newSGS});
        } else {
          this.setState({[name]: event.target.value});
        }
    }
  
    //handleSubmit -- When the user clicks on the button to save/update the
    //reservation, start the spinner and invoke the parent component's savereservation
    //method to do the actual work. Note that savereservation is set to the correct
    //parent method based on whether the user is logging a new reservation or editing
    //an existing reservation.
    handleSubmit = (event) => {
        //start spinner
        this.setState({faIcon: "fa fa-spin fa-spinner",
                        btnLabel: (this.props.mode === AppMode.RESERVATIONS_LOGRESERVATION ? 
                                    "Saving..." : "Updating...")});
        //Prepare current reservation data to be saved
        let resData = this.state;
        delete resData.faIcon;
        delete resData.btnLabel;
        //call savereservation on 1 second delay to show spinning icon
        setTimeout(this.props.saveReservation,1000,resData); 
        event.preventDefault(); 
        }
  

    computeSGS = (strokes, min, sec) => {
      return (Number(strokes) + Number(min)) 
                  + ":" + sec;
    }
  
    render() {
      return (
        <form className="padded-page" onSubmit={this.handleSubmit}>
          <center>
            <label>
              Date:
              <input name="date" className="form-control form-center" 
                type="date" value={this.state.date} onChange={this.handleChange} />
            </label>
            <p></p>
            <label>Time: <br></br>
          <input name="minutes" type="number" size="3"
            min="0" max="400" value={this.state.minutes}
            onChange={this.handleChange} />:  
          <input name="seconds" type="number" size="2"
            min="1" max="60" value={this.state.seconds} 
            onChange={this.handleChange} />
          </label>
          <p></p>
            <label>
              Plate:
              <input name="plate" className="form-control form-center" type="text"
                value={this.state.plate} onChange={this.handleChange}
                placeholder="Plate Number" size="50" maxLength="50" />
            </label>
          <p></p>
          <label>
              Preferred Slot:
              <input name="slot" className="form-control form-center" type="text"
                value={this.state.slot} onChange={this.handleChange}
                placeholder="Prefer Slot ID" size="20" maxLength="20" />
            </label>
          <p></p>
          <label>Notes:
              <textarea name="notes" className="form-control" rows="6" cols="75" 
                placeholder="Enter reservation notes" value={this.state.notes} 
                onChange={this.handleChange} />
          </label>
          <p></p>
          <p></p>
          <button type="submit" style={{width: "70%",fontSize: "36px"}} 
            className="btn btn-primary btn-color-theme">
              <span className={this.state.faIcon}/>&nbsp;{this.state.btnLabel}
          </button>
          </center>
        </form>
      );
    }
}

export default ReservationForm;