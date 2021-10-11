import React from 'react';

class ConfirmDelete extends React.Component {
    //render: presents user with dialog to confirm deletion
    //of reservation. Credit: https://getbootstrap.com/docs/4.0/components/modal/
    render() {
        return (
            <div className="modal" role="dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <p className="modal-title">Confirm Reservation Deletion</p>
                    <button className="close-modal-button" onClick={()=>this.props.cancel()}>
                    &times;</button>
                    </div>
                        <div className="modal-body">
                            <h4>Are you sure that you want to delete this reservation?</h4>
                            <div className="modal-footer">
                            <button className="btn btn-primary" onClick={() => this.props.confirm()}>Yes, delete reservation</button> 
                            {/* onClick={} */}
                            <button className="btn btn-secondary" onClick={() => this.props.cancel()}>No, do not delete reservation </button>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
}
export default ConfirmDelete;
