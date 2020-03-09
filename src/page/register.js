import { Col, Layout, Row, Typography,Form,Select,List,Input,Button,Checkbox,Modal } from 'antd';
import React from 'react';
import IFooter from "../components/footer";
import IHeader from "../components/header";
import './index.scss';
import { withRouter } from 'react-router-dom'
const { Option } = Select;
const { Title, Text } = Typography;
const { Content } = Layout;
const axios = require('axios');
const domain = 'https://ipbtraining.com'
const { confirm } = Modal;

class Register extends React.Component {
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
            axios.post('https://ipbtraining.com/api/register', values)
            .then(function (response) {
              if(response.status == false) {
                confirm({
                  title: 'Do you want to delete these items?',
                  content: 'When clicked the OK button, this dialog will be closed after 1 second',
                
                });
              } else {
                window.location.href = "/login";
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        });
    };

    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <Layout>
                <IHeader sendData={this.getData} />
                <Content style={{ marginTop: 84 }}>
                    <Row style={{margin:'40px 0'}}>
                        <Col span={18} offset={3}>
                            <Row >
                                <Col span={14}>
                                <Title>Daftar Akun</Title>
                                
                                </Col>
                                <Col span={9} offset={1}>
                                <Form style={{
                                                borderRadius: '30px',boxShadow: '0 4px 8px 0 rgba(96, 97, 112, 0.16), 0 0 2px 0 rgba(40, 41, 61, 0.04)',
                                                backgroundColor: '#ffffff',
                                                padding:'30px'
                                            }} 
                                    onSubmit={this.handleSubmit} className="Register-form"
                                >

<Form.Item>
          {getFieldDecorator('sapaan', {
            rules: [{ required: true,  }],
          })(
           <Select placeholder="Sapaan">
               <Select.Option value="mr">
                    Tuan
               </Select.Option>
               <Select.Option value="ms">
                    Nyonya
               </Select.Option>
           </Select>,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input
             
              placeholder="Name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
             
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input phone number!' }],
          })(
            <Input
             type="number"
              placeholder="No. Handphone"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
             
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password_confirmation', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
             
              type="password"
              placeholder="Konfirmasi Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Ingat saya</Checkbox>)}
         
          <Button style={{width:'100%'}} type="primary" htmlType="submit" className="Register-form-button">
            Register
          </Button>

        
         
        </Form.Item>
      </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Content>
                <IFooter />
            </Layout>

        );
    }
}

const WrappedLogin= Form.create({ name: 'normal_register' })(Register);
export default withRouter(WrappedLogin);