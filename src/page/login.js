import React, { useState, useEffect } from 'react';
import { Col, Layout, Row, Typography, Form, Select, List, Input, Button, Checkbox, Modal } from 'antd';
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


const Login = (props) => {
	const [categories, setCategories] = useState()
	const getData = (val) => {
		setCategories(val);
	}

	const handleSubmit = e => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				axios.post('https://ipbtraining.com/api/login', values)
				.then(function (response) {
					console.log(response)
				  
				})
				.catch(function (error) {
				  console.log(error);
				});
			}
		});
	};

	const { getFieldDecorator } = props.form;
	return (
		<Layout>
			<IHeader sendData={getData} />
			<Content style={{ marginTop: 84 }}>
				<Row style={{ margin: '40px 0' }}>
					<Col span={18} offset={3}>
						<Row >
							<Col span={14}>
								<Title>Selamat Datang</Title>
								<p>di portal pendaftaran training</p>
							</Col>
							<Col span={9} offset={1}>
								<Form style={{
									borderRadius: '30px', boxShadow: '0 4px 8px 0 rgba(96, 97, 112, 0.16), 0 0 2px 0 rgba(40, 41, 61, 0.04)',
									backgroundColor: '#ffffff',
									padding: '30px'
								}}
									onSubmit={handleSubmit} className="login-form"
								>
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
										{getFieldDecorator('remember', {
											valuePropName: 'checked',
											initialValue: true,
										})(<Checkbox>Ingat saya</Checkbox>)}
										<a className="login-form-forgot" style={{ float: 'right' }} href="">
											Lupa Password
          </a>
										<Button style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
											Login
          </Button>

										<Button style={{ width: '100%' }} type="default" htmlType="submit" className="login-form-button">
											<a href="/register">Buat akun baru</a>
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

const WrappedLogin = Form.create({ name: 'normal_login' })(Login);
export default withRouter(WrappedLogin);