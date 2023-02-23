import React, {Component} from "react";
import {connect} from "react-redux";
// import './About.scss';
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
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p> Ngày xửa ngày xưa có một nàng công chúa tên là Bạch Tuyết. Trên đường đi đến nhà bà ngoại cô bắt gặp con sói sám. Con sói đưa cô quả táo đỏ và nói cô phải lên xe bí ngô và sỏ giày thủy tin để dự vũ hội. Đi giữa đường thì bổng nhiên saitama xuất hiện giải cứu thế giới trên trời ngộ không đại náo thiên cung thì gặp đoremon kế bên đang dùng bảo bối để giúp Conan giải vụ án giết heo của thợ săn rồi thấy dì ghẻ đứng trước gương thần và hỏi:" Gương kia trả lời xem ai đẹp đc dường như ta..." Gương thần đáp :" Dạ đó là Thị Nở..." Thị Nở từ bé đã sống với dì ghẻ và cô em gái Cám. Một hôm dì ghẻ bắt Thị Nở ở nhà dọn dẹp xong mới đc đi dự lễ hội của Chí Phèo. Thị Nở ngồi khóc thì bỗng bà tiên đỡ đầu xuất hiện gọi Goku dẫn cô đi. Đến nơi cô gặp đc 7 chú lùn và đc quái vật cầu hôn....Thế r Thị nở nổi điên vì bị lừa r hóa Jojo muda giết sạch đám 7 chú lùn và con rồng xấc xược, said "mày éo đủ tuổi" r bị phật tổ nhốt dưới chân núi Bet88 năm, rồi đc thầy trò Đường Tăng giải cứu và lên đường trở thành vua hải tặc, đánh bại trùm cuối Luffy và đến đc với rương kho báu, khi mở ra bên trong chỉ có 1 mẩu giấy "kho báu chính là tình bạn" nhưng bạn của Thị đã chết cmn hết r còn đâu, thị nở ngồi khóc thì bụt hiện lên và nói "sau này, phải có làm thì mới có ăn...". Rồi thần đèn bỗng dưng xuất hiện, đấm chết cmn bụt rồi ban cho thị 1 điều ước, Thị ước mình đc cưới Chí Phèo và thế là họ sống hạnh fuck mãi mãi về sau.End</p>
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