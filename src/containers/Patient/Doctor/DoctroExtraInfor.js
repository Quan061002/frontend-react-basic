import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DoctorExtraInfor.scss';
import { LANGUAGES } from "../../../utils";
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';
import { components } from 'react-select';

class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false
        }
    }
    async componentDidMount() {

    
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if ( this.props.language !== prevProps.language) {

        }
        
    }

    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }

    render() {
        let { isShowDetailInfor } = this.state;

        return (
            <div className="doctor-extra-infor-container">
                <div className="content-up">
                    <div className="text-address">Địa chỉ khám</div>
                    <div className="name-clinic">Phòng khám chuyên khoa da liễu</div>
                    <div className="detail-address">hà fukin nội</div>
                </div>
                <div className="content-down">
                    {isShowDetailInfor === false &&
                    <div className="short-infor">
                        Giá khám 250.000đ
                        <span onClick={() => this.showHideDetailInfor(true)}>
                            Xem chi tiết
                        </span>
                    </div>   
                    }

                    {isShowDetailInfor === true &&
                        <>
                            <div className="title-price">Giá Khám: . </div>
                            <div className="detail-infor">
                                <div className="price">
                                    <span className="left">Giá khám</span>
                                    <span className="right">250.000đ</span>
                                </div>
                                <div className="note">
                                    Được ưu tiên khám trước khi đã đặt hẹn trc qua quana
                                </div>

                            </div>
                            <div className="payment">
                                Người bệnh có thể thanh toán chi phí bằng tiền mặt hoặc thẻ tín dụng
                            </div>
                            <div className="hide-price">
                                <span onClick={() => this.showHideDetailInfor(false)}>
                                    Ẩn bảng giá
                                </span>
                            </div>

                        </>

                    }
                </div>
            </div>
        )
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

export default connect(mapDispatchToProps, mapStateToProps)(DoctorExtraInfor);