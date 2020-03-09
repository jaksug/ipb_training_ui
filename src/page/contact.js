import { Col, Layout, Row, Typography } from 'antd';
import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import IFooter from "../components/footer";
import IHeader from "../components/header";
import './index.scss';

const { Title } = Typography;
const { Content } = Layout;


function callback(key) {
    console.log(key);
}

class Contact extends React.Component {
    state = {
        current: 'pendaftaran',
    };

    componentDidMount() {


    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };



    render() {
        const { top_trainings, new_trainings, categories } = this.state;



        return (
            <Layout>
                <IHeader sendData={this.getData} />
                <Content style={{ marginTop: 54 }}>


                    <Row

                        style={
                            {
                                marginTop: '60px'
                            }
                        }
                    >

                        <center><Title level={1} >Contact Us</Title></center>
                        <Row style={{  marginTop: '90px'}}>
                            <Col
                                span={18} offset={3}

                            >
                                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} style={{ marginTop: "-60px", marginBottom: "-80px" }}

                                >
                                    <Col className="gutter-row" style  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="gutter-box">
                                            <Title level={3}>Address</Title>
                                            <p>Jalan Taman Kencana. 3, Bogor
West Java - Indonesia.y</p>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row"  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="gutter-box">
                                        <Title level={3}>
                                        Email
                                        </Title>
                                        <p>info@ipbtraining.com
iict.blst@gmail.com
Monday to Friday 9am - 7pm</p>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row"  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="gutter-box">
                                        <Title level={3}>Phone</Title>
                                        <p>+62 (251) 837 2400 <br/>
+62 (251) 838 2223<br/>
+62 813 8089 6308<br/>
Monday to Friday 9am - 7pm</p></div>
                                    </Col>

                                </Row>
                               
                            </Col>
                        </Row>



                    </Row>

                   




                </Content>
                <IFooter />
            </Layout>

        );
    }
}

export default Contact;