import { Card, Col, Layout, Row, Tabs, Typography, Form, Input, Select, Button, Spin, Empty } from 'antd';
import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import IFooter from "../components/footer";
import IHeader from "../components/header";
import queryString from 'query-string'
import './index.scss';
import { withRouter } from 'react-router-dom'
const { Title, Text } = Typography;
const { Meta } = Card;
const { Content } = Layout;
const axios = require('axios');
const domain = 'https://ipbtraining.com'
const { TabPane } = Tabs;
const { Option } = Select;

function callback(key) {
    console.log(key);
}

class Products extends React.Component {
    state = {
        current: 'pendaftaran',
        parameters: {
            cluster: null,
            keyword: null,
            startDate: null,
            endDate: null
        },
        products: [],
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
        console.log(val);
    }

    fetch = (e) => {
        var self = this;
        self.setState({ loading: true });
        let parameters = queryString.parse(this.props.location.search)

        axios.get('https://ipbtraining.com/api/training/search?cluster=' + parameters.cluster)
            .then(function (response) {
                self.setState({ products: response.data, loading: false });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { products, categories, parameters, loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        let { cluster, keyword } = parameters;
        let category = (cluster === undefined || cluster == null ? null : categories.filter(function (item) { return item.id == cluster; })[0])
        category = (category === undefined || category == null ? { cluster_name: '', 'id': '' } : category)


        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <Layout>
                <IHeader sendData={this.getData} />
                <Content style={{ marginTop: 94 }}>

                    <Row>
                        <Col span={18} offset={3}

                        >
                            <Row >
                                <Col
                                    style={{ padding: '10px 0px' }}
                                    xs={24} sm={24} md={24} lg={10} xl={10}
                                >
                                    <Title level={4} style={{display: category.cluster_name ==''? 'none' : 'block' }}>
                                        <Text>Kategori</Text> {category.cluster_name}  
                                    </Title>
                                </Col>
                                <Col xs={20} sm={20} md={20} lg={14} xl={14}>

                                    <Form
                                        style={{ float: 'right' }}
                                        layout="inline">
                                        <Form.Item
                                            {...formItemLayout}
                                            label="Filter">
                                            {getFieldDecorator('cluster', {
                                                initialValue: category.cluster_name ==''? null :  parseInt(cluster),
                                                rules: [{ required: false }],
                                            })(
                                                <Select
                                                    style={{ width: '160px' }}
                                                    placeholder='Kategori'
                                                >
                                                    {categories.map(p => {
                                                        return (
                                                            <Option value={p.id} key={p.id} title={p.cluster_name}>{p.cluster_name}</Option>
                                                        )
                                                    })}
                                                </Select>
                                            )}
                                        </Form.Item>
                                        <Form.Item

                                            {...formItemLayout}
                                            label="Urutkan"
                                        >
                                            {getFieldDecorator('sort', {

                                                rules: [{ required: false }],
                                            })(
                                                <Select
                                                    style={{ width: '160px' }}>
                                                    <Option value="latest">Waktu Terdekat</Option>
                                                </Select>
                                            )}
                                        </Form.Item>

                                    </Form>
                                </Col>
                            </Row>


                            <Row type="flex" justify="space-between" align="top">

                                {products.map(training => {
                                    var imgUrl = training.primary_image === null ? domain + '/images/frontend/no_images.png' : domain + '/images/trainingimage/' + training.primary_image
                                    return (

                                        <Col
                                            style={{ padding: '10px 0px' }}

                                            xs={16} sm={16} md={16} lg={5} xl={5}
                                        >
                                            <a href={'/product?id='+training.id}>
                                                <Card
                                                    className="topTraining"
                                                    cover={
                                                        <img
                                                            height="242px"
                                                            alt="example"
                                                            src={imgUrl}
                                                        />
                                                    }
                                                >
                                                    <Meta
                                                        title={training.training_title}
                                                    //description={this.cutString(training.description, 20)}
                                                    />
                                                </Card>
                                            </a>
                                        </Col>

                                    )
                                })}

                            </Row>

                            <Row style={{ display: loading ? 'block' : 'none' }} >
                                <center><Spin size="large" /></center>
                            </Row>
                            <Row style={{ display: products.length < 1 && loading == false ? 'block' : 'none' }}>
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
    }
}
const WrappedProducts = Form.create({ name: 'horizontal_login' })(Products);
export default withRouter(WrappedProducts);