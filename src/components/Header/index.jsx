'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery";
import global from '@/styles/global.module.css';
import styles from './styles.module.css';
import Image from "next/image";

const Header = () => {
    const isTabletOrMobile = useMediaQuery(768);

    return (
        <header className={styles.header}>
            <div className={`${global.container} ${styles.headerContainer}`}>
                <div className={styles.left}>
                    <button className={styles.burgerBtn}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    { !isTabletOrMobile ? <button className={`${global.btn} ${global.btn__primary}`}>Contact us</button> : '' }
                </div>
                <div className={styles.right}>
                    {
                        !isTabletOrMobile
                            ?
                                <>
                                    <button className={`${global.btn} ${global.btn__primary}`}>Quote</button>
                                    <button className={`${global.btn} ${global.btn__secondary}`}>Book now</button>
                                </>
                            : ''
                    }
                    <button className={styles.cartBtn}>
                        <span></span>
                        <Image
                            src="/assets/images/icons/cart.svg"
                            width={22}
                            height={25}
                            alt="Cart"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;