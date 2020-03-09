import React from 'react';
import IFooter from "../components/footer"
import IHeader from "../components/header"
import ISlider from "../components/slider"
import MainSearch from "../components/mainSearch"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Media from 'react-media';
import './index.scss';
import { isMobile } from 'react-device-detect';
import { Layout, Comment, Row, Col, Button, Avatar, Card, Typography, Spin } from 'antd';

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;
const axios = require('axios');
const domain = 'https://ipbtraining.com'

const testimonis = [
    {
        name: 'Maria José Botín',
        institution: 'Pakar Ilmu Ekonomi dan Ekonomterika Terapan',
        avatar: 'https://ipbtraining.com/images/frontend/slide1.png',
        testimoni: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. It has roots in a piece of classical Latin literature.'
    }, {
        name: 'Maria José Botín',
        institution: 'Pakar Ilmu Ekonomi dan Ekonomterika Terapan',
        avatar: 'https://ipbtraining.com/images/frontend/slide1.png',
        testimoni: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. It has roots in a piece of classical Latin literature.'
    }, {
        name: 'Maria José Botín',
        institution: 'Pakar Ilmu Ekonomi dan Ekonomterika Terapan',
        avatar: 'https://ipbtraining.com/images/frontend/slide1.png',
        testimoni: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. It has roots in a piece of classical Latin literature.'
    }, {
        name: 'Maria José Botín',
        institution: 'Pakar Ilmu Ekonomi dan Ekonomterika Terapan',
        avatar: 'https://ipbtraining.com/images/frontend/slide1.png',
        testimoni: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. It has roots in a piece of classical Latin literature.'
    }
]

class Homepage extends React.Component {
    state = {
        top_trainings: [],
        new_trainings: [],
        loading_top_training : false,
        loading_category : false,
        loading_new_training : false,
        categories: [],
        is_mobile: false,
    }

    componentDidMount() {
        this.fetch()

    }

    cutString = (s, n) => {
        var cut = s.indexOf(' ', n);
        if (cut == -1) return s;
        return s.substring(0, cut)
    }

    fetch = (e) => {
        var self = this;
        self.setState({ loading_new_training: true, loading_top_training : true, loading_category: true});
        axios.get(domain + '/api/toptraining')
            .then(function (response) {
                self.setState({ top_trainings: response.data.top_trainings ,loading_top_training: false });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(domain + '/api/newtraining')
            .then(function (response) {
                self.setState({ new_trainings: response.data.new_trainings, loading_new_training: false});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getData = (val) => {
        this.setState({ categories: val });
        if(val !== undefined || val.length > 0) {
            this.setState({ loading_category: false });
        }
        console.log(val);
    }

    render() {
        const { top_trainings, new_trainings, categories } = this.state;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: isMobile ? 1 : 4,
            slidesToScroll: 1,
            prevArrow: <Button shape="circle" icon="left" ></Button>,
            nextArrow: <Button shape="circle" icon="right" ></Button>,
        };

        const settings_category = {
            dots: false,
            infinite: false,
            speed: 500,
            rows: 2,
            slidesToShow: isMobile ? 1 : 4,
            slidesToScroll: 1,
            prevArrow: <Button shape="circle" icon="left" ></Button>,
            nextArrow: <Button shape="circle" icon="right" ></Button>,
        };

        const settings_new = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: isMobile ? 1 : 4,
            slidesToScroll: isMobile ? 1 : 4,
            arrows: false
        };

        return (
            <Layout>
                <IHeader sendData={this.getData} />
                <Content style={{ marginTop: 54 }}>
                    <Media queries={{ small: { maxWidth: 599 } }}>
                        {matches =>
                            matches.small ? (
                                <Row>
                                    <Col
                                        span={24}
                                    >
                                        <ISlider />
                                    </Col>

                                    <Col
                                        style={{ marginTop: 20 }}
                                        offset={2}
                                        span={20}
                                    >
                                        <MainSearch data={categories} />
                                    </Col>


                                </Row>
                            ) : (
                                    <Row>
                                        <Col
                                            style={{ padding: '50px 0px' }}
                                            offset={3}
                                            span={8}
                                        >
                                            <MainSearch data={categories} />
                                        </Col>
                                        <Col span={13}>
                                            <ISlider />
                                        </Col>
                                    </Row>
                                )
                        }
                    </Media>
                    <Row>
                        <Col span={18} offset={3}>
                            <Row
                                style={{ marginTop: '50px' }}
                            >
                                <Col span={24} >
                                    <Title className={isMobile ? 'mobile-title' : ''}>Top Training</Title>
                                </Col>
                            </Row>
                            <Row
                                gutter={[{ xs: 8, sm: 16, md: 24, lg: 48 }, 20]}
                                style={{ marginTop: '20px' }}
                            >
                                <Row style={{ display: this.state.loading_top_training ? 'block' : 'none', height:'200px' }} >
                                    <center><Spin size="large" /></center>
                                </Row>
                                <Slider {...settings}>
                                    {top_trainings.map((training, index) => {
                                        var imgUrl = training.cover === null ? domain + '/images/frontend/no_images.png' : domain + '/images/trainingimage/' + training.cover
                                        return (<Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8}>
                                            <div className="gutter-box">
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
                                                            style={{marginTop:'-70px',background:'#ffffff!important'}}
                                                            title={training.name.substring(0,70)+" ..."}
                                                            //description={this.cutString(training.description, 20)}
                                                        />
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>
                                        );
                                    }
                                    )}
                                </Slider>
                            </Row>

                            <Row
                                gutter={[{ xs: 8, sm: 16, md: 24, lg: 48 }, 20]}
                                style={{ marginTop: '50px' }}
                            >
                                <Col
                                    span={6}
                                >
                                    <Row
                                        style={{ marginTop: '80px' }}
                                    >
                                        <Title className={isMobile ? 'mobile-title' : ''}>Pilihan Kategori</Title>
                                    </Row>

                                </Col>
                                <Col
                                    span={18}
                                >
                                    <Row
                                        gutter={[{ xs: 8, sm: 16, md: 24, lg: 28 }, 10]}
                                        style={{ marginTop: '50px' }}
                                    >
                                        <Row style={{ display: this.state.loading_category ? 'block' : 'none', height:'200px' }} >
                                            <center>
                                                <Spin size="large" />
                                            </center>
                                        </Row>
                                        <Slider {...settings_category}>
                                            {categories.map(category => {
                                                return (
                                                    <Col className="gutter-row" span={8}>
                                                        <div className="gutter-box">
                                                            <a href={'/products?cluster='+category.id}>
                                                                <Card
                                                                    className="categories"
                                                                >
                                                                    <Meta
                                                                        avatar={<Avatar src={domain + '/images/frontend/no_images.png'} />}
                                                                        title={category.cluster_name}

                                                                    />
                                                                </Card>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                );
                                            })}
                                        </Slider>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>

                        <Media queries={{ small: { maxWidth: 599 } }}>
                            {matches =>
                                matches.small ? (
                                    <p></p>
                                ) : (
                                        <div>
                                            <Col span={22}>
                                                <Row
                                                    style={
                                                        {
                                                            marginTop: '50px',
                                                            background: '#f7f9fc',
                                                            height: '320px',
                                                            paddingTop: '30px',
                                                            borderRadius: '0px 30px 30px 0px'
                                                        }
                                                    }
                                                >
                                                    <Col
                                                        span={10}
                                                        offset={3}
                                                    >
                                                        <Title className={isMobile ? 'mobile-title' : ''}>Training Terbaru</Title>
                                                    </Col>
                                                    <Col
                                                        span={10}
                                                        offset={0}
                                                    >
                                                        <Row type="flex" justify="end">
                                                            <Col span={4}>
                                                                <Button style={{ color: '#29a0db' }}>
                                                                    Lihat semua
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Col span={2}>
                                                </Col>
                                            </Col>


                                            <Col span={18} offset={3}>
                                                <Row
                                                    gutter={[{ xs: 8, sm: 16, md: 24, lg: 48 }, 20]}
                                                    style={{ marginTop: '-200px' }}
                                                    className="newTraining-row"
                                                >
                                                    <Row style={{ display: this.state.loading_new_training ? 'block' : 'none', height:'200px' }} >
                                                        <center>
                                                            <Spin size="large" />
                                                        </center>
                                                    </Row>
                                                    <Slider {...settings_new}>
                                                        {new_trainings.map(training => {
                                                            var imgUrl = training.cover === null ? domain + '/images/frontend/no_images.png' : domain + '/images/trainingimage/' + training.cover
                                                            return (
                                                                <Col className="gutter-row" span={6}>
                                                                    <div className="gutter-box">
                                                                        <Card
                                                                            className='newTraining'
                                                                            cover={
                                                                                <img
                                                                                    height="160px"
                                                                                    alt="example"
                                                                                    src={imgUrl}
                                                                                />
                                                                            }
                                                                        >
                                                                            <Meta
                                                                                title={training.name}
                                                                            //description={training.description}
                                                                            />
                                                                        </Card>
                                                                    </div>
                                                                </Col>);
                                                        })
                                                        }
                                                    </Slider>
                                                </Row>
                                            </Col>
                                        </div>)
                            }
                        </Media>

                        <Col span={18} offset={3}>
                            <Row
                                style={{ marginTop: '50px' }}
                            >
                                <Col
                                    span={24}
                                >
                                    <Title className={isMobile ? 'mobile-title' : ''}>Testimoni Peserta</Title>
                                </Col>
                            </Row>
                            <Row>

                                <Slider {...settings}>
                                    {testimonis.map(testimoni => {
                                        return (
                                            <Comment

                                                author={<a>{testimoni.name}</a>}
                                                avatar={
                                                    <Avatar
                                                        src={testimoni.avatar}
                                                        alt="Han Solo"
                                                    />
                                                }
                                                content={
                                                    <span>
                                                        <p className="testi-institution">{testimoni.institution}</p>
                                                        <p>
                                                            {testimoni.testimoni}
                                                        </p>
                                                    </span>
                                                }

                                            />

                                        );
                                    })
                                    }
                                </Slider>

                            </Row></Col>






                            <Col span={18} offset={3}>
                            <Row
                                style={{ 
                                    marginTop: '80px',
                                    marginBottom: '20px'
                                }}
                            >
                                <Col
                                    span={24}
                                >
                                    <center><Title level={3} className={isMobile ? 'mobile-title' : ''}>Top Klien</Title></center>
                                </Col>
                            </Row>
                            <Row>

                                <Slider {...settings}>
                                    {testimonis.map(testimoni => {
                                        return (
                                            <Row style={{
                                                width:'100px!important',
                                                height:'40px'
                                            }}> 
                                            <center>
                                                <img style={{
                                                    opacity: 0.52,
                                                    mixBlendMode: 'luminosity',
                                                
                                                }} width="100"  src="https://upload.wikimedia.org/wikipedia/id/thumb/9/95/Makara_UI.png/1098px-Makara_UI.png"/>
                                                </center>
                                            </Row>
                                        );
                                    })
                                    }
                                </Slider>

                            </Row>
                        </Col>

                        <Col span={18} offset={3}>
                            <Row
                                style={{ marginTop: '80px', marginBottom:'20px' }}
                            >
                                <Col
                                    span={24}
                                >
                                    <center><Title level={3} className={isMobile ? 'mobile-title' : ''}>Tidak Menemukan yang Dicari?</Title></center>
                                </Col>
                            </Row>
                            <Row>
                                <center>
                                <Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10,
              });
            }}
          >
            Ajukan In-house Training
          </Button>
                                </center>
                            </Row>
                        </Col>



                    </Row>
                </Content>
                <IFooter />
            </Layout>

        );
    }
}

export default Homepage;