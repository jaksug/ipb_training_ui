import { Col, Layout, Row, Typography,Form,Select,List } from 'antd';
import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import IFooter from "../components/footer";
import IHeader from "../components/header";
import './index.scss';
import { withRouter } from 'react-router-dom'
const { Option } = Select;
const { Title, Text } = Typography;
const { Content } = Layout;
const axios = require('axios');
const domain = 'https://ipbtraining.com'


const data = [
    {    
        title : 'Post-harvest Handling of Horticulture Products to Penetrate The Export Market',
        id : 12,
        month : 8,
        schedule :  '2-4'
    }
  ];
class Schedule extends React.Component {
    state = {
        categories: [],
        parameters: {
            cluster: null,
            keyword: null,
            startDate: null,
            endDate: null
        },
    };

    componentDidMount() {


    }

    getData = (val) => {
        this.setState({ categories: val });
        console.log(val);
    }


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };



    render() {

        const { categories, parameters, loading } = this.state;
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
                <Content style={{ marginTop: 84 }}>
                <Row style={{margin:'40px 0'}}>
                        <Col span={18} offset={3}>
                            <Row >
                                <Col
                                    style={{ padding: '10px 0px' }}
                                    xs={24} sm={24} md={24} lg={10} xl={10}
                                >
                                    <Title> Jadwal Training</Title>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18} offset={3}>
                            <Row>
                                <Col span={8}>
                                NAMA
                                </Col>
                                <Col span={16}>

                                    <Row>
                                        <Col span={2} className="schedule-head">JAN</Col>
                                        <Col span={2} className="schedule-head schedule-head-dark">FEB</Col>
                                        <Col span={2} className="schedule-head">MAR</Col>
                                        <Col span={2} className="schedule-head schedule-head-dark">APR</Col>
                                        <Col span={2} className="schedule-head">MEI</Col>
                                        <Col span={2} className="schedule-head schedule-head-dark">JUN</Col>
                                        <Col span={2} className="schedule-head">JUL</Col>
                                        <Col span={2} className="schedule-head schedule-head-dark">AGU</Col>
                                        <Col span={2} className="schedule-head">SEP</Col>
                                        <Col span={2} className="schedule-head schedule-head-dark">OKT</Col>
                                        <Col span={2} className="schedule-head">NOV</Col>
                                        <Col span={2} className="schedule-head schedule-head-dark">DES</Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                            <List
                               itemLayout="horizontal"
      header={<div className="shcedule-header">Biomedis dan Veteriner</div>}
      
      dataSource={data}
      renderItem={item => (
        <List.Item>
             <Row style={{width:'100%'}}>
                                <Col span={8}>
                                {item.title}
                                </Col>
                                <Col span={16}>
                                
                            </Col>
                            </Row>
           
        </List.Item>
      )}
    />
                            </Row>
                        </Col>
                    </Row>
                </Content>
                <IFooter />
            </Layout>

        );
    }
}

const WrappedSchedule= Form.create({ name: 'horizontal_login' })(Schedule);
export default withRouter(WrappedSchedule);