import { Col, Layout, Row, Typography } from 'antd';
import React from 'react';
import IFooter from "../components/footer";
import IHeader from "../components/header";
import './index.scss';
const { Title } = Typography;
const { Content } = Layout;
class About extends React.Component {
    render() {
        return (
            <Layout>
                <IHeader sendData={this.getData} />
                <Content style={{ marginTop: 124 }}>
                    <Row>
                        <center><Title level={1} >Why Choose IPB Training</Title><p>one stop service in human resources development</p></center>
                        <Row style={{ backgroundColor: '#f7f9fc', marginTop: '90px', height: '200px' }}>
                            <Col span={18} offset={3}>
                                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} style={{ marginTop: "-60px", marginBottom: "-80px" }}>
                                    <Col className="gutter-row" style  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="about-gutter-box">
                                            <b>Strong Scientific Basis</b>
                                            <p>We deliver to you various training modules based on IPB expertises to inpiring innovation with integrity</p>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row"  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="about-gutter-box"><b>Hands-on Practice</b><p>Every training we offer is completed by hands-on practice to make the topics easier to understand</p></div>
                                    </Col>
                                    <Col className="gutter-row"  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="about-gutter-box"><b>Practitioner's Experience</b><p>We create collaboration between the academicians and practitioners to ensure that each module is easy to apply</p></div>
                                    </Col>

                                </Row>
                                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                                    <Col className="gutter-row" style  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="about-gutter-box"><b>Customer Oriented</b><p>We always try the best effort in preparing the content and service to bring the best experience for our customer</p></div>
                                    </Col>
                                    <Col className="gutter-row"  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="about-gutter-box"><b>Friendly Service</b><p>Customer satisfaction is our goal thus we bring our heart and passion to serve you as our businessmate</p></div>
                                    </Col>
                                    <Col className="gutter-row"  xs={24} sm={24} md={24} lg={8} xl={8}>
                                        <div className="about-gutter-box"><b>+ 3000 Customers</b><p>IPB Training has been trusted by thousands of people from various backgrounds and institutions</p></div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                    <Row style={{marginTop: '60px'}}>
                        <center><Title level={1} >Our Story</Title>
                            <p>Our Story</p></center>
                        <Row style={{ backgroundColor: '#f7f9fc', marginTop: '90px', height: '150px',marginBottom:'40px' }}>
                            <Col span={18} offset={3}>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={14} offset={5}>
                                <p>“IPB Training – PT Global Scholarship Services Indonesia – is a company of IPB University also a subsidiary of PT Bogor Life Science and Technology (Holding company of IPB). IPB Training is given the mandate to conduct expertise-based business activities, particularly in the field of training and development of human resource expertise.
                                    Our business focuses on providing vocational and professional training to develop HR skills based on applied life science. We deliver the values through regular training service and tailor made training according to customer needs (in house training).”
                                </p>
                                <b>
                                Director Sambas Waemata</b>
                            </Col>
                        </Row>
                    </Row>
                </Content>
                <IFooter />
            </Layout>
        );
    }
}

export default About;