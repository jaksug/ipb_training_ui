import { Card, Col, Layout, Row, Tabs, Typography, Form, Checkbox,List,Avatar, Icon, Select, Button, Spin, Empty } from 'antd';
import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import IFooter from "../components/footer";
import IHeader from "../components/header";
import queryString from 'query-string'
import './index.scss';
import { withRouter } from 'react-router-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
const { Title, Text } = Typography;
const { Meta } = Card;
const { Content } = Layout;
const axios = require('axios');
const domain = 'https://ipbtraining.com'
const { TabPane } = Tabs;
const { Option } = Select;
const months = {
    '01': 'Januari',
    '02': 'Februari',
    '03': 'Maret',
    '04': 'April',
    '05': 'Mei',
    '06': 'Juni',
    '07': 'Juli',
    '08': 'Agustus',
    '09': ' September',
    '10': 'Oktober',
    '11': 'November',
    '12': 'Desember'
}

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
  ];


  
const position = [51.505, -0.09]
class Product extends React.Component {
    state = {
        current: 'pendaftaran',
        parameters: {
            cluster: null,
            keyword: null,
            startDate: null,
            endDate: null
        },
        product: [],
        categories: [],
        loading: false
    };

    componentDidMount() {
        let parameters = queryString.parse(this.props.location.search)
        this.setState({
            parameters
        });
        this.fetch()
    }

    getData = (val) => {
        this.setState({ categories: val });
    }

    fetch = (e) => {
        var self = this;
        self.setState({ loading: true });
        let parameters = queryString.parse(this.props.location.search)

        axios.get('https://ipbtraining.com/api/detail/' + parameters.id)
            .then(function (response) {
                self.setState({ product: response.data[0], loading: false });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    render() {
        const { product, categories, parameters, loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        var imgUrl = product.primary_image === null ? domain + '/images/frontend/no_images.png' : domain + '/images/trainingimage/' + product.primary_image


        if (product.id === undefined) {
            return (
                <Layout>
                    <IHeader sendData={this.getData} />
                    <Content style={{ marginTop: 94 }}>
                        <Row>
                            <Col span={18} offset={3}

                            >
                                <Row style={{ display: loading ? 'block' : 'none' }} >
                                    <center><Spin size="large" /></center>
                                </Row>
                                <Row style={{ display: product.length < 1 && loading == false ? 'block' : 'none' }}>
                                    <Empty
                                        description={
                                            <span>
                                                Tidak ada training
                                        </span>
                                        }
                                    >
                                    </Empty>,
                                </Row>
                            </Col>
                        </Row>
                    </Content>
                    <IFooter />
                </Layout>
            );
        } else {
            return (
                <Layout>
                    <IHeader sendData={this.getData} />
                    <Content style={{ marginTop: 94 }}>
                        <Row>
                            <Col span={18} offset={3}
                            >
                                <Row style={{ display: loading ? 'none' : 'block' }}>
                                    <Col xs={20} sm={20} md={20} lg={8} xl={8}>
                                        <div>
                                            <img style={{
                                                width: '100%',
                                                boxShadow: '0 8px 16px 0 rgba(96, 97, 112, 0.16), 0 2px 4px 0 rgba(40, 41, 61, 0.04)',
                                                borderRadius: ' 30px'
                                            }} src={imgUrl} />
                                        </div>
                                    </Col>
                                    <Col xs={20} sm={20} md={20} lg={16} xl={16}
                                        style={{ padding: '0px 40px' }}
                                    >
                                        <Text> {product.date_from.substring(8, 10)} {months[product.date_from.substring(5, 7)]} - {product.date_end.substring(8, 10)} {months[product.date_end.substring(5, 7)]} {product.date_end.substring(0, 4)}</Text>
                                        <Title>{product.training_title}</Title>
                                        <Text >{product.training_output}</Text>
                                        <br />
                                        <br />
                                        <Text>{product.participant_capacity} orang sudah mendaftar, sisa 1 kursi lagi!</Text>
                                        <br />
                                        <br />
                                        <a>
                                            <Icon type="file" /> download pdf</a>
                                    </Col>


                                </Row>





                                <Row style={{ display: loading ? 'block' : 'none' }} >
                                    <center><Spin size="large" /></center>
                                </Row>
                                <Row style={{ display: product.length < 1 && loading == false ? 'block' : 'none' }}>
                                    <Empty
                                        description={
                                            <span>
                                                Tidak ada training
                                        </span>
                                        }
                                    >
                                    </Empty>,
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '60px' }}>
                            <Col span={10} offset={3}>
                                <Title level={3}>Participant Criteria</Title>
                                <p>{product.participant_description}</p>

                                <Title level={3} style={{marginTop:'60px'}}>Topik</Title>
                                <p>Disajikan dengan metode presentasi dan diskusi ({product.metode_diskusi}%), praktek dan simulasi ({product.metode_simulasi}%), diantaranya:</p>
                                {product.topics.map(topic => {
                                    return (
                                        <p><b>{topic.topics_name}</b></p>
                                    );
                                })}

                                <Title level={3} style={{marginTop:'60px'}}>Trainer</Title>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={product.trainers}
                                    renderItem={item => (
                                        <List.Item>
                                          <List.Item.Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={<a href="https://ant.design">{item.full_name}</a>}
                                            description={item.occupation}
                                          />
                                        </List.Item>
                                    )}
                                />

                                <Title level={3} style={{marginTop:'60px'}}>Location</Title>
                                <div style={{width: '100%'}}>
                                    <iframe width="100%" height="208" 
                                        src="https://maps.google.com/maps?width=100%&amp;height=208&amp;hl=en&amp;q=ipb%20science%20park+(IPB%20Training)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=A&amp;output=embed" 
                                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                        <a href="https://www.maps.ie/coordinates.html">find my location</a>
                                    </iframe>
                                        </div><br />
                                    <p>{product.venuename}, {product.address}, {product.city}</p>
                                </Col>
                            <Col span={10} offset={1}
                                style={{
                                    borderRadius: '40px 0 0 40px', backgroundColor: '#f7f9fc', padding: '30px'
                                }}
                            >
                                <p>Harga per orang</p>
                                <h2>Rp {this.numberWithCommas(product.price)}</h2> <br />
                                <Checkbox
                                    checked={true}
                                >
                                    with accomodation (optional)
                                </Checkbox>
                                <br />
                                <Button style={{ width: '300px', margin: '20px 0 20px 0' }} type="primary" htmlType="submit" >
                                    Daftar Sekarang
                                    </Button>

                                <Button style={{ width: '300px', }} type="default" htmlType="submit" >
                                    Request In-House Training
                                    </Button>
                            </Col>
                        </Row>


                    </Content>
                    <IFooter />
                </Layout>
            );
        }

    }
}
const WrappedProducts = Form.create({ name: 'horizontal_login' })(Product);
export default withRouter(WrappedProducts);