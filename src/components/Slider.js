import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from './CardItem';

function PortfolioSlider() {
    let settings = {
        dot: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        {/* <img src='images/img-8.jpg' /> */}
                        <CardItem
                            src='images/img-3.jpg'
                            text='NBA Shot Clock Analysis'
                            label='Research Project'
                            path='/services'
                        />
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        {/* <img src='images/img-9.jpg' /> */}
                        <CardItem
                            src='images/img-9.jpg'
                            text='StuOrgCentral'
                            label='Website'
                            path='/services'
                        />
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        {/* <img src='images/img-8.jpg' /> */}
                        <CardItem
                            src='images/img-8.jpg'
                            text='Event Hawk'
                            label='Website'
                            path='/services'
                        />
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        {/* <img src='images/img-8.jpg' /> */}
                        <CardItem
                            src='images/img-6.jpg'
                            text='Gradient Descent Research'
                            label='Reserach Project'
                            path='/services'
                        />
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default PortfolioSlider
