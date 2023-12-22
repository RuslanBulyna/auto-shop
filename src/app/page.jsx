"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery";
import ServicesBlock from "@/components/Services";
import VerticalTabs from '@/components/VerticalTabs';
import global from '@/styles/global.module.css';
import styles from './styles.module.css';
import Image from "next/image";

const Homepage = () => {
    const isTabletOrMobile = useMediaQuery(960);

    return (
        <main className={global.main}>
            <section className={global.section}>
                <h2>Services</h2>
                {
                    !isTabletOrMobile ?
                    (
                        <ServicesBlock/>
                    ) : (
                        <VerticalTabs
                            data={[
                                {
                                    name: 'Mechanical',
                                    content: (
                                        <>
                                            <h3>Mechanical</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                                                Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                                                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                                            </p>
                                            <a href="#">Learn More</a>
                                            <div className={`${styles.buttonGroup}`}>
                                                <button className={`${global.btn} ${global.btn__primary}`}>Get quote</button>
                                                <button className={`${global.btn} ${global.btn__secondary}`}>Book now</button>
                                            </div>
                                            <Image
                                                src="/assets/images/mechanical-mobile-image.png"
                                                width={450}
                                                height={250}
                                                alt="Detailing"
                                            />
                                        </>
                                    ),
                                    styles: `${styles.tabBody} ${styles.tabContent1}`
                                },
                                {
                                    name: 'Protection',
                                    content: (
                                        <>
                                            <h3>Protection</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                                                Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                                                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                                            </p>
                                            <a href="#">Learn More</a>
                                        </>
                                    ),
                                    styles: `${styles.tabBody} ${styles.tabContent2}`
                                },
                                {
                                    name: 'Aesthetics',
                                    content: (
                                        <>
                                            <h3>Aesthetics</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                                                Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                                                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                                            </p>
                                            <a href="#">Learn More</a>
                                        </>
                                    ),
                                    styles: `${styles.tabBody} ${styles.tabContent3}`
                                },
                                {
                                    name: 'Detailing',
                                    content: (
                                        <>
                                            <h3>Detailing</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                                                Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                                                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                                            </p>
                                            <a href="#">Learn More</a>
                                            <button className={`${global.btn} ${global.btn__primary}`}>Book now</button>
                                        </>
                                    ),
                                    styles: `${styles.tabBody} ${styles.tabContent4}`
                                },
                                {
                                    name: 'Body Work',
                                    content: (
                                        <>
                                            <h3>Body Work</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                                                Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                                                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                                            </p>
                                            <a href="#">Learn More</a>
                                            <button className={`${global.btn} ${global.btn__primary}`}>Book now</button>
                                        </>
                                    ),
                                    styles: `${styles.tabBody} ${styles.tabContent5}`
                                }
                            ]}
                        />
                    )
                }
            </section>
        </main>
    );
}

export default Homepage;
