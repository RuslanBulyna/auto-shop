'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

/* Custom Slick Slider */
const MySlider = (props) => {
    const { settings, children } = props;

    const default_settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: styles.dots
    };

    let custom_settings = {
        ...default_settings,
        ...settings
    };

    return (
        <Slider className={styles.MySlider} {...custom_settings}>
            {children}
        </Slider>
    );
}

export default MySlider;