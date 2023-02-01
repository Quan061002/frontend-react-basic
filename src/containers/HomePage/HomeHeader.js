import React, {Component} from "react";
import {connect} from "react-redux";
import './HomeHeader.scss';
import logo from '../../assets/logo.jpg';
import { FormatedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        console.log('check props: ', this.props)
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <img className="header-logo" src={logo}></>
                        </div>
                     <div className="center-content">
                         <div className="child-content">
                             <div><b> <FormatedMessage id="homeheader.speciality"/></b></div>
                             <div className="subs-title"><FormatedMessage id="homeheader.searchdoctor"/></div>
                         </div>
                         <div className="child-content">
                             <div><b> <FormatedMessage id="homeheader.health-facility"/></b></div>
                             <div className="subs-title"><FormatedMessage id="homeheader.select-room"/></div>
                         </div>
                         <div className="child-content">
                             <div><b> <FormatedMessage id="homeheader.doctor"/></b></div>
                             <div className="subs-title"><FormatedMessage id="homeheader.select-doctor"/></div>
                         </div>
                         <div className="child-content">
                             <div><b> <FormatedMessage id="homeheader.fee"/></b></div>
                             <div className="subs-title"><FormatedMessage id="homeheader.check-health"/></div>
                         </div>
                     </div>
                     <div className="right-content">
                         <div className="support"><i className="fas fa-question-circle"></i>
                            <FormatedMessage id="homeheader.support" />
                         </div>
                         <div className="language-vi">VN</div>
                         <div className="language-rn">EN</div>
                     </div>
                 </div>
                </div>
             <div className="home-header-banner">
                 <div className="content-up">
                     <div className="title1"><FormatedMessage id="banner.title1"/></div>
                     <div className="title2"><FormatedMessage id="banner.title2"/></div>
                     <div className="search">
                         <i className="fas fa-search"></i>
                         <input type="text" placeholder="Tìm chuyên khoa khám bệnh"/>
                     </div>
                 </div>
                 <div className="content-down">
                     <div className="options">
                         <div className="options-child">
                             <div className="icon-child"><i className="far fa-hospital"></i> </div>
                            <div className="text-child"><FormatedMessage id="banner.child1"/></div>
                        </div>
                         <div className="options-child">
                            <div className="icon-child"><i className="fas fa-mobile-alt"></i> </div>
                            <div className="text-child"><FormatedMessage id="banner.child2"/></div>
                         </div>
                         <div className="options-child">
                             <div className="icon-child"><i className="fas fa-procedures"></i> </div>
                             <div className="text-child"><FormatedMessage id="banner.child3"/></div>
                        </div>
                         <div className="options-child">
                             <div className="icon-child"><i className="fas fa-microscope"></i> </div>
                             <div className="text-child"><FormatedMessage id="banner.child4"/></div>
                        </div>
                         <div className="options-child">
                            <div className="icon-child"><i className="fas fa-user-md"></i> </div>
                            <div className="text-child"><FormatedMessage id="banner.child5"/></div>
                        </div>
                         <div className="options-child">
                             <div className="icon-child"><i className="fas fa-briefcase-medical"></i> </div>
                             <div className="text-child"><FormatedMessage id="banner.child6"/></div>
                        </div>


                 </div>
             </div>
        </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn : state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);