import React from 'react';
import { Button, Typography, DatePicker, Select, Input, Row, Form } from 'antd';
import Media from 'react-media';
import { isMobile } from 'react-device-detect';
const InputGroup = Input.Group;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Title } = Typography;

class MainSearch extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const categories = this.props.data;
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Title className={isMobile ? 'mobile-title' : ''}>Training berkualitas Standar Internasional</Title>
                <p>Mumblecore vape hashtag iceland offal viral. Cliche paleo prism migas. Ramps artisan pinterest godard keffiyeh, tousled.</p>
                <Media queries={{ small: { maxWidth: 599 } }}>
                    {matches =>
                        matches.small ? (
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: false }],
                                    })(
                                        <RangePicker style={{ width: '100%%' }} />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: false }],
                                    })(

                                        <Select
                                            placeholder="Kategori"
                                            style={{ width: '100%', marginTop: '-20px!important' }}
                                        >
                                            {categories.map((category, index) => (
                                                <Option value={category.id}>{category.cluster_name}</Option>
                                            ))}
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button style={{ width: '50%' }} type="primary" htmlType="submit" >
                                        Cari
                                    </Button>
                                </Form.Item>
                            </Form>
                        ) : (
                                <Row>
                                    <InputGroup compact>
                                        <RangePicker style={{ width: '50%' }} />
                                        <Select
                                            placeholder="Kategori"
                                            style={{ width: '200px' }}
                                        >
                                            {categories.map((category, index) => (
                                                <Option value={category.id}>{category.cluster_name}</Option>
                                            ))}
                                        </Select>
                                    </InputGroup>
                                    <Button type="primary" style={{ padding: '5px 30px', marginTop: '20px' }}>Cari</Button>
                                </Row>
                            )
                    }
                </Media>

            </Row>
        );
    }
}


export default Form.create()(MainSearch);