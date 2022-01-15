import styles from './photoSlider.module.css';
import React, { Children, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidersToScroll: 1,
            autoplay: true,
            arrows: false
        };
        return (
            <div className={styles.carousel}>
                <h2>Slidey McSlideFace</h2>
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>
        )
    }
}