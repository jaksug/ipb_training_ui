import { Col, Layout, Row, Typography,Form,Select,List,Input,Button,Checkbox,Icon,Card } from 'antd';
import React from 'react';
import IFooter from "../components/footer";
import IHeader from "../components/header";
import LeftMenu from "../components/leftMenu";
import './index.scss';
import { withRouter } from 'react-router-dom'
const { Option } = Select;
const { Title, Text } = Typography;
const { Content } = Layout;
const axios = require('axios');
const domain = 'https://ipbtraining.com'

class ProfileEdit extends React.Component {
    state = {
    };
    componentDidMount() {

    }

    getData = (val) => {
        this.setState({ categories: val });
        console.log(val);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };

    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <Layout>
                <IHeader sendData={this.getData} />
                <Content style={{ marginTop: 84 }}>
                    <Row>
                      	<Col span={5}>
                      		<LeftMenu/>
                      	</Col>
                      	<Col span={18} offset={5} >
                      	  	<Card  style={{borderRadius: '8px'}}>
								<Row>
									<Col span={3}>col-8</Col>
    							  	<Col span={8}>
									  	<Title>Denny Haryadi</Title>
										<p>asdasdasd@yahoo.com</p>
										<p>08123456789</p>
									</Col>
    							  	<Col span={8}>
									  	<p>Instansi</p>
										<p>IPB</p>
									</Col>
    							  	<Col span={5}>
									  	<a href="#" className="ant-btn">Edit Profil</a>
									</Col>
    							</Row>
                      	  	</Card>
                      	</Col>
                    </Row>
                    
                </Content>
             
            </Layout>

        );
    }
}

const WrappedLogin= Form.create({ name: 'normal_login' })(ProfileEdit);
export default withRouter(WrappedLogin);