import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {emitter} from "../../utils/emitter";
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: '',
        }

    }



    componentDidMount() {
        let user = this.props.currentUser;
        if(user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phonenumber: user.phonenumber,
            })
        }
        // console.log('mouting modal')
        // console.log('didmout edit modal', this.props.currentUser)
    }

    toggle = () => { //bus event???
        // alert('me toggle')
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event ,id) => {

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
            }
        }
        return isValid;
    }

    handleSeveUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid === true) {
            //call api edit user modal
            this.props.editUser(this.state);
        }

    }
    render() {
        // console.log('check prop from parent', this,props);
        // console.log('check child prop', this.props);
        // console.log('check child open modal', this.props.isOpen);
        return (
            <Modal isOpen={this.props.isOpen}
                   toggle={()=>{ this.toggle() }}
                   className={'modal-user-container'}
                   size="lg"
                // centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Edit user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">

                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="textl"
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                value={this.state.email}
                                disabled //cant be clicked
                            />
                        </div>

                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="Password"
                                onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                value={this.state.password}
                                disabled
                            />
                        </div>

                        <div className="input-container">
                            <label>First name</label>
                            <input
                                type="textl"
                                onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                                value={this.state.firstName}
                            />
                        </div>

                        <div className="input-container">
                            <label>Last name</label>
                            <input
                                type="textl"
                                onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                                value={this.state.lastName}
                            />
                        </div>

                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input
                                type="textl"
                                onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                value={this.state.address}
                            />
                        </div>

                        <div className="input-container">
                            <label>Phonenumber</label>
                            <input
                                type="textl"
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
                        onClick={()=>{this.handleSeveUser()}}
                    >Save changes</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);






