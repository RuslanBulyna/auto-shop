"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Advantages from "@/components/Advantages";
import ReqFreeConsult from "@/components/ReqFreeConsult";
import ReviewsBlock from "@/components/Reviews";
import global from '@/styles/global.module.css';
import styles from './styles.module.css';
import Image from "next/image";

const QuotePortalPage = () => {
    const isTabletOrMobile = useMediaQuery(960);

    return (
        <main className={global.main}>
            <section className={`${global.section} ${styles.heroBlock}`}>
                <h1>Quote Portal</h1>
                <span>
                    Created by enthusiasts for enthusiasts.
                    We provide automotive services for all cars to those looking for the best.
                    Delivering peace of mind and great support
                </span>
                <button className={`${global.btn} ${global.btn__secondary}`}>Book now</button>
                <div>
                    <Image
                        src="/assets/images/icons/premium-quality.svg"
                        width={90}
                        height={80}
                        alt="Trust & Safety"
                    />
                    <Image
                        src="/assets/images/icons/best-customer-service.svg"
                        width={80}
                        height={80}
                        alt="Trust & Safety"
                    />
                    <Image
                        src="/assets/images/icons/best-products.svg"
                        width={73}
                        height={80}
                        alt="Trust & Safety"
                    />
                </div>
            </section>
            <section className={`${global.section} ${styles.advantagesBlock}`}>
                <h2>How does it work</h2>
                <div>
                    <Advantages/>
                    <div className={styles.bgElement}></div>
                </div>
            </section>
            <section className={global.section}>
                <h2>Request free consultation</h2>
                <ReqFreeConsult/>
            </section>
            <section className={`${global.section} ${styles.reviewsBlock}`}>
                <h2>Reviews</h2>
                <div>
                    <ReviewsBlock/>
                    <div className={styles.bgElement}></div>
                </div>
            </section>
        </main>
    );
}

export default QuotePortalPage;
