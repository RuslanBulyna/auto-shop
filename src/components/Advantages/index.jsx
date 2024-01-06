'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from 'next/image';
import MySlider from "@/components/MySlider";
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

/* How does it work block */
const Advantages = () => {
    const isTabletOrMobile = useMediaQuery(960);
    const settings = {
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const advantagesData = [
        {
            'bg': true,
            'component': <>
                <Image
                    src="/assets/images/icons/trust-and-safety.png"
                    width={50}
                    height={60}
                    alt="Trust & Safety"
                />
                <span className={styles.advantagesList_name}>Trust & Safety</span>
                <span className={styles.advantagesList_text}>
                    All shops are trusted, highly rated, and loved by Chicagoans.
                    Our concierges go through rigorous training and your car is insured while we service it.
                </span>
            </>
        },
        {
            'bg': false,
            'component': <>
                <Image
                    src="/assets/images/icons/convenience.png"
                    width={42}
                    height={60}
                    alt="Convenience"
                />
                <span className={styles.advantagesList_name}>Convenience</span>
                <span className={styles.advantagesList_text}>
                    Gone are the days of long lines and spending hours at service centers.
                    Don’t juggle your schedule around maintenance appointments.
                </span>
            </>
        },
        {
            'bg': false,
            'component': <>
                <Image
                    src="/assets/images/icons/pay-after.png"
                    width={60}
                    height={60}
                    alt="Stay updated, pay after"
                />
                <span className={styles.advantagesList_name}>Stay updated, pay after</span>
                <span className={styles.advantagesList_text}>
                    We give you an expert advice and keep you updated on the price and status.
                    We ask for approval on all repairs needed and you only pay when the service is completed.
                </span>
            </>
        }
    ];

    return (
        <>
            {
                !isTabletOrMobile
                    ?   <div className={styles.advantages}>
                            <ul className={styles.advantagesList}>
                                {
                                    advantagesData
                                        ? advantagesData?.map((item, index) => {
                                            return <li key={index} className={item.bg ? styles.bg : ''}>
                                                {item.component}
                                            </li>
                                        }) : ''
                                }
                            </ul>
                            <button className={`${global.btn} ${global.btn__secondary}`}>Book now</button>
                        </div>
                    :   <div className={styles.advantagesSlider}>
                            <MySlider settings={settings}>
                                {
                                    advantagesData
                                        ? advantagesData?.map((item, index) => {
                                            return <div key={index} className={`${styles.advantage} ${item.bg ? styles.bg : ''}`}>
                                                <div>
                                                    {item.component}
                                                </div>
                                            </div>
                                        }) : ''
                                }
                            </MySlider>
                            <div className={styles.buttonGroup}>
                                <button className={`${global.btn} ${global.btn__secondary}`}>Book now</button>
                            </div>
                    </div>
            }
        </>
    );
}

export default Advantages;