import React, {Component} from "react";
import {FormattedMessage} from "react-intl";
import {connect} from "react-redux";
import { getAllCodeService} from "../../../services/userService";
import { LANGUAGES} from "../../../utils";

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        // try {
        //  let res = await getAllCodeService('gender');
        //     // console.log('check res: ', res)
        //     if(res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // }catch(e) {
        //     console.log(e)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // render => didupdate
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
    }


    render() {
        // console.log('check state:' , this.state)
        let genders = this.state.genderArr;
        let language = this.props.language;
        return (
            <div className="user-redux-container">
                <div className="title">
                    learn react-redux quana
                </div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"><FormattedMessage id="manage-use.add"/></div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.email"/></label>
                                <input className="form-control" type="email"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.password"/></label>
                                <input className="form-control" type="password"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.firstName"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.lastName"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.phonenumber"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-9">
                                <label><FormattedMessage id="manage-use.address"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.gender"/></label>
                                <select className="form-control">
                                    {genders &&  genders.length > 0 &&
                                    genders.map((item , index) => {
                                        return (
                                            <option key={index}>
                                                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                            </option>
                                        )
                                    })
                                    }

                                    <option>...</option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.position"/></label>
                                <select className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.role"/></label>
                                <select className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-use.image"/></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-12 mt-3">
                            <button className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapDispatchToProps, mapStateToProps)(UserRedux);

