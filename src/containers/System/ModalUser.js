import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {emitter} from "../../utils/emitter";

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: '',
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            //reset state
            this.setState({
                email:'',
                password:'',
                firstName:'',
                lastName:'',
                address:'',
                phonenumber:'',
            })
        })
    }

    componentDidMount() {
        // console.log('mouting modal')
    }

    toggle = () => { //bus event???
        // alert('me toggle')
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event ,id) => {
        //bad code, modify state
        // this.state={
        //     email:'',
        //     password:'',
        // }
        // this.state.email ===this.state['email']
        //
        //
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad state: ', this.state)
        // })
        //goodone
        let copyState = {...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phonenumber'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === true) {
            //call api create modal
            this.props.createNewUser(this.state, 'abc');
        }

    }
    render() {
        // console.log('check child prop', this.props);
        // console.log('check child open modal', this.props.isOpen);
        return (
            <Modal isOpen={this.props.isOpen}
                   toggle={()=>{ this.toggle() }}
                   className={'modal-user-container'}
                   size="lg"
                   // centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                value={this.state.email}
                            />
                        </div>

                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="Password"
                                onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                value={this.state.password}
                            />
                        </div>

                        <div className="input-container">
                            <label>First name</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                                value={this.state.firstName}
                            />
                        </div>

                        <div className="input-container">
                            <label>Last name</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                                value={this.state.lastName}
                            />
                        </div>

                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                value={this.state.address}
                            />
                         </div>

                        <div className="input-container">
                            <label>Phonenumber</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "phonenumber") }}
                                value={this.state.phonenumber}
                            />
                        </div>

                                <div className="form-group col-3">
                                    <label htmlFor="inputState">Sex</label>
                                    <select name="gender" className="form-control">
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>

                                <div className="form-group col-3">
                                    <label htmlFor="inputState">Role</label>
                                    <select name="roleId" className="form-control">
                                        <option value="1">Admin</option>
                                        <option value="2">Doctor</option>
                                        <option value="3">Patient</option>
                                    </select>
                                </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={()=>{this.handleAddNewUser() }}
                    >add new</Button>{' '}
                    <Button color="secondary"
                            className="px-3"
                            onClick={()=>{this.toggle()}}
                    >Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);






