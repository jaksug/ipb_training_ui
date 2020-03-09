import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Dropdown, Icon, Row, Col, Input, Button,Drawer } from 'antd';
import {Link} from "react-router-dom";
import Media from 'react-media';
const { SubMenu } = Menu;
const { Header } = Layout;
const { Search } = Input;
const axios = require('axios');
const domain = 'https://ipbtraining.com'


class IHeader extends React.Component {
	state = {
		categories : [],
        visible: false,
        visible_right: false
	}

	componentDidMount() {
        this.fetch()
	}
	
	onClose = () => {
		this.setState({
            visible: false,
            visible_right: false
		});
	};
	
	category = (e) => (
		<Menu>
			{this.state.categories.map((cty, index) => (
				<Menu.Item>
					<a href={'/products?cluster='+cty.id}>
						{cty.cluster_name}
					</a>
				</Menu.Item>				
			))}
		</Menu>
    );
	
	fetch = (e) => {
		var self = this;
		axios.get(domain + '/api/cluster')
        .then(function (response) { 
            self.setState({ categories: response.data.data });
            self.props.sendData(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render() {
        return (
			<Media queries={{ small: { maxWidth: 599 } }}>
          		{matches =>
                    matches.small ? (
				        <Header
				            className={'main-menu'}
				            style={{padding:'0px'}}
			            >
				            <Row>
				                <Col span={4}>
				                    <center>
                                        <a className="i-icon" onClick={() => this.setState({visible : true})}>
				                	        <Icon type="menu" />
        		                        </a>
				                    </center>
				                </Col>
				            	<Col span={16}>
				            		<a href="/">
				            		    <center>
				            			    <img src="https://ipbtraining.com/images/logo.png" width="200px" />
				            			</center>
				            		</a>
				            	</Col>
				            	<Col span={4}>
				            	    <center>
				            	        <a className="i-icon"  onClick={() => this.setState({visible_right : true})}>
				                            <Icon type="search" />
                                        </a>	
                                    </center>
				                </Col>
				            </Row>

                            <Drawer
                                width="90%"
                                placement="right"
                                closable={true}
                                onClose={this.onClose}
                                visible={this.state.visible_right}
                            >
                                <Search
				            			placeholder="Cari training"
				            			onSearch={value => console.log(value)}
				            		/>
                            </Drawer>

		                    <Drawer
                                width="90%"
                                placement="left"
                                closable={true}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <Menu mode="inline" >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <span>Kategori</span>
                                            </span>
                                        }
                                    >
                                        {this.state.categories.map((cty, index) => (
		                            		<Menu.Item>
		                            			<a target="_blank" href={domain+'/cluster/'+cty.id}>
		                            				{cty.cluster_name}
		                            			</a>
		                            		</Menu.Item>				
		                            	))}
                                    </SubMenu>
                                    
				            		<Menu.Item key="1" >
				            			<Link to="/about">About Training</Link>
				            		</Menu.Item>
				            		<Menu.Item key="2" >
				            			<a href="/faq">
				            				FAQ
				            			  </a>
				            		</Menu.Item>
				            		<Menu.Item key="3">Daftar</Menu.Item>
				            		<Menu.Item key="4" block>
										<a className="ant-btn" href="/faq">Login</a>
									</Menu.Item>
                                </Menu>
                            </Drawer>
			            </Header>
                    ) : (
				        <Header className={'main-menu'} >
				            <Row>
				            	<Col span={3}>
				            		<a href="/">
				            			<img src="https://ipbtraining.com/images/logo.png" width="150px" />
				            		</a>
				            	</Col>
				            	<Col span={2}>
				            		<Dropdown overlay={this.category}>
				            			<a href="#">
				            				Kategori<Icon type="down" />
				            			</a>
				            		</Dropdown>
				            	</Col>
				            	<Col span={6}>
				            		<Search
				            			placeholder="Cari training"
				            			onSearch={value => console.log(value)}
				            		/>
				            	</Col>
				            	<Col span={12}>
				            		<Menu
				            			theme="light"
				            			mode="horizontal"
				            			style={{ lineHeight: '62px', border: 'none', float: 'right' }}
				            		>
				            			<Dropdown
				            				//overlay={set_language()}
				            			>
				            				<a href="#">
				            					<Icon type="global" />
				            				</a>
				            			</Dropdown>
				            			<Menu.Item key="1" >
				            				<Link to="/schedule">Jadwal Training</Link>

				            			</Menu.Item>
				            			<Menu.Item key="2" >
				            				<a href="/faq">
				            					FAQ
				            				  </a>
				            			</Menu.Item>
				            			<Menu.Item key="3"><a  href="/register">Daftar</a></Menu.Item>
				            			<Menu.Item key="4"><Button><a  href="/login">Login</a></Button></Menu.Item>
				            		</Menu>
				            	</Col>
				            </Row>
			            </Header>
                    )
                }
            </Media> 
        );
    }
}

export default IHeader;
