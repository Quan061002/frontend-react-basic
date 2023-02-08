import React, {Component} from "react";
import {connect} from "react-redux";
import './HomeFooter.css'

// import './HomeFooter.scss';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {

        return (
            <div className="home-footer">
                <p>&copy; 2023 QuanaDev.com. <a>More information, please visit our pateon: @mr.imperial. Or</a>
                    <a target="_blank" href="#"> &#8594; CLICK HERE! &#8592; </a></p>
                <div className="footer-container">
                    <i className="fab fa-apple apple" id="apple"></i>
                    <i className="fab fa-twitter twitter" id="twitter"></i>
                    <i className="fab fa-github github" id="github"></i>
                    <i className="fab fa-facebook facebook" id="facebook"></i>
                    <i className="fab fa-google google" id="google"></i>
                </div>
            </div>

        );

    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn : state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);