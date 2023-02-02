import React, {Component} from "react";
import {connect} from "react-redux";
import './HomeFooter.scss';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {

        return (
            <div className="home-footer">
                <p>&copy; 2023 QuanaDev.com. <a>More information, please visit our pateon: @mr.imperial. Or</a>
                    <a target="_blank" href="#"> &#8594; CLICK HERE! &#8592; </a></p>
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