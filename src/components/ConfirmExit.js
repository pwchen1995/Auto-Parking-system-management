import React from 'react';

class ConfirmExit extends React.Component {
    //render: presents user with dialog to confirm deletion
    //of round. Credit: https://getbootstrap.com/docs/4.0/components/modal/
    render() {
        return (
            <div className="modal" role="dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <p className="modal-title">Confirm Exit</p>
                    <button className="close-modal-button" onClick={()=>this.props.cancel()}>
                    &times;</button>
                    </div>
                        <div className="modal-body">
                            <h4>Are you sure that you want to cancel reservation?</h4>
                            <div className="modal-footer">
                            <button className="btn btn-primary" onClick={() => this.props.confirm()}>Yes, exit reservation</button> 
                            {/* onClick={} */}
                            <button className="btn btn-secondary" onClick={() => this.props.cancel()}>No, do not leave reservation process</button>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
}
export default ConfirmExit;
