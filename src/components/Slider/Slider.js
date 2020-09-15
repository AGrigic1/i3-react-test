import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slider.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#525559" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#525559" }}
        onClick={onClick}
      />
    );
  }

class SliderComp extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        const percentage1 = 6;
        const percentage2 = 13;
        const percentage3 = 114;

        return (
            <div className="slider-position">
                <Slider {...settings}>
                    <div className="circular-style">
                        <CircularProgressbar value={percentage1} text={`${percentage1}%`} background={true} styles={buildStyles ({ backgroundColor: '#3e98c7', textColor: '#f88', trailColor: '#d6d6d6', pathColor: 'rgba(255, 136, 136)'})} />
                        <br/>
                        <br/>
                        <div className="bottom-text-slider">Organic sales growth</div>
                    </div>
                    <div className="circular-style">
                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} background={true} styles={buildStyles ({ backgroundColor: '#3e98c7', textColor: '#f88', trailColor: '#d6d6d6', pathColor: 'rgba(255, 136, 136)'})} />
                        <br/>
                        <br/>
                        <div className="bottom-text-slider">Core eps growth</div>
                    </div>
                    <div className="circular-style">
                        <CircularProgressbar value={percentage3} text={`${percentage3}%`} background={true} styles={buildStyles ({ backgroundColor: '#3e98c7', textColor: '#f88', trailColor: '#d6d6d6', pathColor: `rgba(255, 136, 136)`})} />
                        <br/>
                        <br/>
                        <div className="bottom-text-slider">Adjusted free cash flow productivity</div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SliderComp
