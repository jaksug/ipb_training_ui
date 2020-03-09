import { Col, Layout, Row, Typography,Form,Select,List,Input,Button,Checkbox,Icon,Card, Tabs} from 'antd';
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
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class MyTraining extends React.Component {
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
                      	<Col span={18} offset={5} style={{height:1700}}>
                          <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
                      	</Col>
                    </Row>
                    
                </Content>
             
            </Layout>

        );
    }
}

const WrappedMyTraining= Form.create({ name: 'normal_login' })(MyTraining);
export default withRouter(WrappedMyTraining);