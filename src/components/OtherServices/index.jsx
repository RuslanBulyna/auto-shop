'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from 'next/image';
import Link from 'next/link';
import MySlider from "@/components/MySlider";
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

/* Need Anything Else Block */
const OtherServices = () => {
    const isTabletOrMobile = useMediaQuery(960);
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
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.servicesSlider}>
            <MySlider settings={settings}>
                <div className={`${styles.service}`}>
                    <div className={styles.serviceBg}>
                        <Image
                            src="/assets/images/tire.png"
                            width={136}
                            height={151}
                            alt="Pay After"
                        />
                    </div>
                    <div className={styles.serviceContent}>
                        <span className={styles.serviceName}>Showroom (Full Detail)</span>
                        <span className={styles.serviceText}>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                         </span>
                        <Link href="/">Learn more</Link>
                        <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                    </div>
                </div>
                <div className={`${styles.service}`}>
                    <div className={styles.serviceBg}>
                        <Image
                            src="/assets/images/tire.png"
                            width={136}
                            height={151}
                            alt="Pay After"
                        />
                    </div>
                    <div className={styles.serviceContent}>
                        <span className={styles.serviceName}>Interior</span>
                        <span className={styles.serviceText}>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                         </span>
                        <Link href="/">Learn more</Link>
                        <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                    </div>
                </div>
                <div className={`${styles.service}`}>
                    <div className={styles.serviceBg}>
                        <Image
                            src="/assets/images/tire.png"
                            width={136}
                            height={151}
                            alt="Pay After"
                        />
                    </div>
                    <div className={styles.serviceContent}>
                        <span className={styles.serviceName}>Exterior Detail</span>
                        <span className={styles.serviceText}>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                         </span>
                        <Link href="/">Learn more</Link>
                        <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                    </div>
                </div>
                <div className={`${styles.service}`}>
                    <div className={styles.serviceBg}>
                        <Image
                            src="/assets/images/tire.png"
                            width={136}
                            height={151}
                            alt="Pay After"
                        />
                    </div>
                    <div className={styles.serviceContent}>
                        <span className={styles.serviceName}>Showroom (Full Detail)</span>
                        <span className={styles.serviceText}>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                         </span>
                        <Link href="/">Learn more</Link>
                        <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                    </div>
                </div>
            </MySlider>
        </div>
    );
}

export default OtherServices;