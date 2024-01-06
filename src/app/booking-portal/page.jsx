"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import MySlider from "@/components/MySlider";
import BookingForm from "@/components/BookingForm";
import OtherServices from "@/components/OtherServices";
import Accordion from "@/components/Accordion";
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

import faqData from "@/data/faqData";

const advantagesData = [
    {
        image: <Image
            src="/assets/images/icons/hassle-free.svg"
            width={87}
            height={72}
            alt="Hassle Free"
        />,
        text: `Any auto service in one place on your time and on your schedule`
    },
    {
        image: <Image
            src="/assets/images/icons/no-obligations.svg"
            width={87}
            height={73}
            alt="No obligations"
        />,
        text: `Сancel or reschedule anytime`
    },
    {
        image: <Image
            src="/assets/images/icons/pay-after.svg"
            width={80}
            height={71}
            alt="Pay After"
        />,
        text: `No worries, pay only after services are completed`
    },
    {
        image: <Image
            src="/assets/images/icons/ready-to-support-you.svg"
            width={75}
            height={75}
            alt="Ready to support you"
        />,
        text: `Text, Call, Email us with any questions`
    },
]

const BookingPortalPage = () => {
    const isTabletOrMobile = useMediaQuery(960);

    const settings = {
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <main className={global.main}>
            <section className={`${global.section} ${styles.heroBlock}`}>
                <h1>Booking Portal</h1>
                <div>
                    {
                        !isTabletOrMobile
                            ? <div className={styles.advantagesList}>
                                {
                                    advantagesData
                                        ? advantagesData?.map((item, index) => (
                                            <div key={index} className={styles.advantage}>
                                                {item.image}
                                                <span>{item.text}</span>
                                            </div>
                                        ))
                                        : ''
                                }
                            </div>
                            : <div className={styles.advantagesSlider}>
                                <MySlider settings={settings}>
                                    {
                                        advantagesData
                                            ? advantagesData?.map((item, index) => (
                                                <div key={`test-${index}`} className={styles.advantage}>
                                                    <div>
                                                        {item.image}
                                                        <span>{item.text}</span>
                                                    </div>
                                                </div>
                                            ))
                                            : ''
                                    }
                                </MySlider>
                            </div>

                    }
                </div>
            </section>
            <section className={`${global.section} ${styles.bookingFormWrapper}`}>
                <div>
                    <BookingForm/>
                    <div className={styles.bgElement}></div>
                </div>
            </section>
            <section className={`${global.section} ${styles.otherServicesBlock}`}>
                <h2>Need anything else?</h2>
                <div>
                    <OtherServices/>
                </div>
            </section>
            <section className={`${global.section} ${styles.faqAccordion}`}>
                <h2>Have a questions? Well we’ve got answers</h2>
                <div>
                    {
                        faqData
                            ? faqData?.map((item, index) => (
                                <Accordion key={index} title={item.title} content={item.content} />
                                )
                            )
                            : ''
                    }
                    <button className={`${global.btn} ${global.btn__secondary}`}>Book now</button>
                </div>
            </section>
        </main>
    );
}

export default BookingPortalPage;
