import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import'./TableManageUser.scss';
import * as actions from "../../../store/actions";

class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    }
    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)
    }
    render() {
        // console.log('check all users: ', this.props.listUsers);
        // console.log('check state: ' , this.state.usersRedux)
        let arrUsers = this.state.usersRedux;
        return (
                    <table id="TableManageUser">
                        <tbody id="customers">
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Address</th>
                            {/*<th scope="col">Phonenumber</th>*/}
                            {/*<th scope="col">Gender</th>*/}
                            {/*<th scope="col">Image</th>*/}
                            {/*<th scope="col">RoleId</th>*/}
                            {/*<th scope="col">PositionId</th>*/}
                            <th scope="col">Action</th>
                        </tr>
                        {arrUsers && arrUsers.length > 0 &&
                            arrUsers.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    {/*<td>{item.phonenumber}</td>*/}
                                    {/*<td>{item.gender}</td>*/}
                                    {/*<td>{item.image}</td>*/}
                                    {/*<td>{item.roleId}</td>*/}
                                    {/*<td>{item.positionId}</td>*/}
                                    <td>
                                        <button
                                            onClick={() => this.handleEditUser(item)}
                                            className="btn-edit" ><i className="fas fa-pencil-alt"></i></button>
                                        <button
                                            onClick={() => this.handleDeleteUser(item)}
                                            className="btn-delete" ><i className="fas -da-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
        );
    }
}


const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
