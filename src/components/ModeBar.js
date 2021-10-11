import React from 'react';
import AppMode from '../AppMode.js';


class ModeBar extends React.Component {
    render() {
      const ModeBarStyle = {opacity: this.props.opa}
      return(
        <div style={ModeBarStyle} className={"modebar" + (this.props.mode === AppMode.LOGIN ? 
          " invisible" : (this.props.menuOpen ? " ignore-click visible" : " visible"))}>
          <fieldset disabled={this.props.disable}>
          {/* <a className={(this.props.mode === AppMode.FEED ? " item-selected" : null)}
              onClick={()=>this.props.changeMode(AppMode.FEED)}>
            <span className="modebaricon fa fa-th-list"></span>
            <span className="modebar-text">Feed</span>
          </a> */}
          <a className={(this.props.mode === AppMode.RESERVATIONS || 
                this.props.mode === AppMode.RESERVATIONS_EDITRESERVATION || 
                this.props.mode === AppMode.RESERVATIONS_LOGRESERVATION ? 
                    " item-selected" : null)}
            onClick={()=>this.props.changeMode(AppMode.RESERVATIONS)}>
            <span className="modebar-icon  fa fa-history"></span>
            <span className="modebar-text">Coming Soon!</span>
          </a>
          <a className={(this.props.mode === AppMode.MAINPAGE ? " item-selected" : null)}
              onClick={()=>this.props.changeMode(AppMode.MAINPAGE)}>
            <span className="modebaricon fa fa-th-list"></span>
            <span className="modebar-text">Coming Soon!</span>
          </a>
          
          {/* <a className={(this.props.mode === AppMode.COURSES ? " item-selected" : null)}
            onClick={()=>this.props.changeMode(AppMode.COURSES)}>
            <span className="modebar-icon  fa fa-flag"></span>
            <span className="modebar-text">Courses</span>
          </a>  */}
          </fieldset>
        </div>
      );
    }
}

export default ModeBar;
