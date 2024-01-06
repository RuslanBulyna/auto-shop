'use client'

import MySlider from "@/components/MySlider";
import styles from './styles.module.css';

import reviewsData from "@/data/reviewsData";

const RatingIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path d="M15.8652 0.956055L19.2329 11.3208H30.1311L21.3143 17.7266L24.682 28.0913L15.8652 21.6855L7.04846 28.0913L10.4162 17.7266L1.59939 11.3208H12.4975L15.8652 0.956055Z" fill="#FCA761"/>
        </svg>
    )
}

const Background = () => {
    return (
        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="round">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
        </svg>
    )
}

/* Reviews Block */
const ReviewsBlock = () => {

    const settings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <MySlider settings={settings}>
            {
                reviewsData
                    ? reviewsData?.map((item, index) => {
                        return <div key={index} className={styles.review}>
                            <div>
                                <div className={styles.reviewBackground}></div>
                                <div>
                                    <div className={styles.rating}>
                                        <span>{item.rating}</span>
                                        <ul className={styles.ratingStars}>
                                            {
                                                (() => {
                                                    let html = [];
                                                    for (let i = 1; i <= item.stars; i++) {
                                                        html.push(<li key={i}><RatingIcon/></li>);
                                                    }
                                                    return html;
                                                })()
                                            }
                                        </ul>
                                    </div>
                                    <hr/>
                                    <span className={styles.text}>{item.reviewText}</span>
                                    <div className={styles.info}>
                                        <span className={styles.reviewSource}>{item.reviewSource}</span>
                                        <span className={styles.userName}>{item.userName}</span>
                                        <span className={styles.userRole}>{item.userRole}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }) : ''
            }
        </MySlider>
    );
}

export default ReviewsBlock;