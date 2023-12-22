'use client'

import Image from 'next/image';
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

/* Service Block */
const ServicesBlock = () => {

    return (
        <div className={styles.servicesList}>
            <div className={styles.servicesRow1}>
                <div className={`${styles.serviceItem} ${styles.serviceItem1}`}>
                    <div>
                        <h3>Mechanical</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                            Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                            Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                        </p>
                        <a href="#">Learn More</a>
                        <div className={styles.buttonGroup}>
                            <button className={`${global.btn} ${global.btn__primary}`}>Book now</button>
                            <button className={`${global.btn} ${global.btn__primary}`}>Get quote</button>
                        </div>
                        <Image
                            src="/assets/images/mechanical-desktop-image.png"
                            width={400}
                            height={300}
                            alt="Mechanical"
                        />
                    </div>
                </div>
                <div className={`${styles.serviceItem} ${styles.serviceItem2}`}>
                    <div>
                        <h3>Protection</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                            Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                            Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                        </p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
            <div className={styles.servicesRow2}>
                <div className={`${styles.serviceItem} ${styles.serviceItem3}`}>
                    <div>
                        <h3>Aesthetics</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                            Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                            Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                        </p>
                        <a href="#">Learn More</a>
                        <Image
                            src="/assets/images/aesthetics-image.png"
                            width={270}
                            height={140}
                            alt="Aesthetics"
                        />
                    </div>
                </div>
                <div className={`${styles.serviceItem} ${styles.serviceItem4}`}>
                    <div>
                        <h3>Detailing</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                            Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                            Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                        </p>
                        <a href="#">Learn More</a>
                        <button className={`${global.btn} ${global.btn__primary}`}>Book now</button>
                        <Image
                            src="/assets/images/detailing-image.png"
                            width={320}
                            height={260}
                            alt="Detailing"
                        />
                    </div>
                </div>
                <div className={`${styles.serviceItem} ${styles.serviceItem5}`}>
                    <div>
                        <h3>Body Work</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                            Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                            Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                        </p>
                        <a href="#">Learn More</a>
                        <button className={`${global.btn} ${global.btn__primary}`}>Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesBlock;