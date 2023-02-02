import React, {Component} from "react";
import {connect} from "react-redux";
import './About.scss';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói j về Quana the Dev
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                                src=""
                                title="Youtube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; pocture;"
                                allowfullscreen>

                        </iframe>
                    </div>
                    <div className="content-right">

                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);