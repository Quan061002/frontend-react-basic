import React, {Component} from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import './BookingModal.scss';
import { Modal } from "bootstrap";

class BookingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if ( this.props.language !== prevProps.language) {

        }
    }

    render() {
        let { isOPenModal, closeBookingClose, dataTime } = this.props;
        return (
            <Modal
            isOpen = {isOPenModal}
            className = {'booking-modal-container'}
            size="lg"
            centered
            >
                <div className="booking-modal-content">
                    <div className="booking-modal-header">
                        <span className="left">tong tin dat lich kham</span>
                        <span
                            className="right"
                            onClick={closeBookingClose}
                        ><i className="fas fa-times"></i></span>
                    </div>
                    <div className="booking-modal-body">
                        {}
                        <div className="doctor-infor">

                        </div>
                        <div className="price">
                            gia kham 500.000vnd
                        </div>
                        <div className="row">
                            <div className="col-6 form-group">
                                <label>ho ten</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>so dien thoai</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>dia chi email</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>dia chi lien he</label>
                                <input className="form-control" />
                            </div>

                            <div className="col-12 form-group">
                                <label>ly do kham</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>dat cho ai</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label>gioi tinh</label>
                                <input className="form-control" />
                            </div>

                        </div>
                    </div>

                    <div className="booking-modal-footer">
                        <button className="btn-booking-confirm"
                        onClick={closeBookingClose}
                        >Xac nhan</button>
                        <button className="btn-booking-cancel"
                        onClick={closeBookingClose}
                        >cancer</button>
                    </div>

                </div>

            </Modal>
        );
    }

}
const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapDispatchToProps, mapStateToProps)(BookingModal);
