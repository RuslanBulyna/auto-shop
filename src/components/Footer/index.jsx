import Image from "next/image";
import Link from 'next/link';
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${global.container} ${styles.footerContainer}`}>
                <div className={styles.top}>
                    <div className={styles.contactInfo}>
                    <span>
                        Lorem ipsum dolor sit amet consectetur.
                        Neque urna cursus blandit faucibus nisi pharetra praesent.
                        Fringilla diam vestibulum neque at tristique in at faucibus.
                    </span>
                    </div>
                    <div className={styles.helpfulLinks}>
                        <div className={styles.menuList}>
                            <h4>Menu</h4>
                            <ul>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                            </ul>
                        </div>
                        <div className={styles.servicesList}>
                            <h4>Services</h4>
                            <ul>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                            </ul>
                        </div>
                        <div className={styles.businessInfoList}>
                            <h4>Business Info</h4>
                            <ul>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                                <li><Link href="/">Title</Link></li>
                            </ul>
                        </div>
                        <div className={styles.location}>
                            <h4>Location</h4>
                            <Image
                                src="/assets/images/footer-map.svg"
                                width={237}
                                height={148}
                                alt="Location"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.socials}>
                        <Link href="/">
                            <Image
                                src="/assets/images/icons/youtube.png"
                                width={25}
                                height={25}
                                alt="Youtube"
                            />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/assets/images/icons/twitter.png"
                                width={25}
                                height={25}
                                alt="Twitter"
                            />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/assets/images/icons/instagram.png"
                                width={25}
                                height={25}
                                alt="Instagram"
                            />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/assets/images/icons/facebook.png"
                                width={25}
                                height={25}
                                alt="Facebook"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;