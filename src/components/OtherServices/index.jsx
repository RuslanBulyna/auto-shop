'use client'

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from 'next/image';
import MySlider from "@/components/MySlider";
import Service from "@/components/Service";
import styles from './styles.module.css';

/* Need Anything Else Block */
const OtherServices = () => {
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
                <Service
                    name={"Showroom (Full Detail)"}
                    text={"Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent."}
                    img={<Image
                        src="/assets/images/tire.png"
                        width={136}
                        height={151}
                        alt="Pay After"
                    />}
                    link={{
                        text: "Learn more",
                        href: "/"
                    }}
                    btn={{
                        text: "Add to cart"
                    }}
                />
                <Service
                    name={"Interior"}
                    text={"Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent."}
                    img={<Image
                        src="/assets/images/tire.png"
                        width={136}
                        height={151}
                        alt="Pay After"
                    />}
                    link={{
                        text: "Learn more",
                        href: "/"
                    }}
                    btn={{
                        text: "Add to cart"
                    }}
                />
                <Service
                    name={"Exterior Detail"}
                    text={"Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent."}
                    img={<Image
                        src="/assets/images/tire.png"
                        width={136}
                        height={151}
                        alt="Pay After"
                    />}
                    link={{
                        text: "Learn more",
                        href: "/"
                    }}
                    btn={{
                        text: "Add to cart"
                    }}
                />
                <Service
                    name={"Showroom (Full Detail)"}
                    text={"Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent."}
                    img={<Image
                        src="/assets/images/tire.png"
                        width={136}
                        height={151}
                        alt="Pay After"
                    />}
                    link={{
                        text: "Learn more",
                        href: "/"
                    }}
                    btn={{
                        text: "Add to cart"
                    }}
                />
            </MySlider>
        </div>
    );
}

export default OtherServices;