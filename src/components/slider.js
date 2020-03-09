import React from 'react';
import Slider from "react-slick";

const sliders = [
    {
        image : 'https://ipbtraining.com/images/frontend/slide1.png',
    },{
        image : 'https://ipbtraining.com/images/frontend/slide1.png',
    }
]

class ISlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            dotsClass: "slick-dots slick-thumb sliders-dot",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {sliders.map((slider, index) => {
                    return (<img style={{width:"100%"}} src={slider.image} />);
                })}
            </Slider>
        );
    }
}

export default ISlider;