import React from 'react';
import 'antd/dist/antd.css';
import { Col, Row, Typography, Menu } from 'antd';

const { Text } = Typography;

class IFooter extends React.Component {
    render() {
        return (
            <Row >
            <Row style={{
                background:'#fff',
                height: '60px',
                fontSize:'12px',
                borderRadius:'0 0 50% 50%',
                marginBottom:' -30px',
                zIndex: '100'
            }}>
            </Row>
            <Row style={{
                background:'#f7f9fc',
                padding: '100px 0 40px',
                fontSize:'12px'
            }}>
                <Col span={18} offset={3}>
                    <Row>
                        <Col 
                            xs={24} sm={24} md={24} lg={12} xl={12}
                            style={{padding:'0px 30px 0 0'}}
                        >
                            
                            <img 
                                style={{
                                    maxWidth:'200px'
                                }}
                                src="https://ipbtraining.com/images/logo.png"
                            />
                            <br/>
                            <br/>
                            
                            <Text style={{fontSize:'12px'}} >IPB Training – PT Global Scholarship Services Indonesia – is a company of IPB University also a subsidiary of PT Bogor Life Science and Technology (Holding company of IPB). IPB Training is given the mandate to conduct expertise-based business activities, particularly in the field of training and development of human resource expertise.</Text>
                            <br />
                            <br/>
                            <Text strong>Alamat</Text>
                            <br/>
                            <Text >Jalan Taman Kencana. 3, Bogor Jawa Barat Indonesia</Text>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <Text strong>Email</Text><br/>
                            <Text>ipbtraining@apps.ipb.ac.id</Text>
                            <br/>
                            <br/>
                            <Text strong>Contact</Text><br/>
                            <Text>+62 (251) 837 2400<br/>
                                +62 (251) 838 2223<br/>
                                +62 813 8089 6308 <br/><br/>
                                Monday to Friday 9am - 7pm
                                <br/>
                                <br/>
                            </Text> 
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                        <Menu
                            style={{ background:'#f7f9fc'}}              
                            mode='inline'
                            theme='light'
                        >
                            <Menu.Item style={{marginTop:'-20px'}}>
                               <a href="/" style={{fontSize:'12px' }}>Home</a> 
                            </Menu.Item>
                            <Menu.Item style={{marginTop:'-20px'}}>
                                <a href="/about"  style={{fontSize:'12px' }}>About</a> 
                            </Menu.Item>
                            <Menu.Item style={{marginTop:'-20px'}}>
                                <a href="/contact"  style={{fontSize:'12px' }}>Contact</a> 
                            </Menu.Item>
                            <Menu.Item style={{marginTop:'-20px'}}>
                                <a style={{fontSize:'12px' }}>Blog</a> 
                            </Menu.Item>
                            <Menu.Item style={{marginTop:'-20px'}}>
                                <a style={{fontSize:'12px' }}> Our Client</a> 
                            </Menu.Item>
                        </Menu>
                        </Col>
                        <Col span={24} style={{marginTop : '40px'}}>
                            <center>
                                <Text>© 2017-2019 IT PT BLST</Text>
                            </center>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Row>
        );
    }
}

export default IFooter;
