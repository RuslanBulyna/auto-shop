"use client"

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useGetCategoriesWithServices } from "@/hooks/categories/useGetCategoriesWithServices";
import { useGetServiceById } from "@/hooks/services/useGetServiceById";
import MySlider from "@/components/MySlider";
import Tabs from '@/components/Tabs';
import Service from "@/components/Service";
import Modal from '@/components/Modal';
import Select from '@/components/Form/Select';
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

const serviceSettings = {
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

const serviceImagesSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
};

const yearData = [
    {
        label: "2024",
        value: "2024",
    }
];

const makeData = [
    {
        label: "Tesla",
        value: "Tesla",
    }
]

const modelData = [
    {
        label: "Model S",
        value: "Model S",
    }
]

const CatalogPage = () => {
    const pathname = usePathname();

    const [ year, setYear ] = useState({});
    const [ make, setMake ] = useState({});
    const [ model, setModel ] = useState({});
    const [ isModalAvailable, setIsModalAvailable ] = useState(true);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ serviceId, setServiceId ] = useState(1);

    const { categories, loading } = useGetCategoriesWithServices(0);
    const { getService, getServiceLoading } = useGetServiceById(serviceId);

    //console.log("getService", getService);

    const openModal = () => {
        setIsOpen(!isOpen);
    }

    const scrollToForm = (e) => {
        e.preventDefault();

        let href = '';
        if(e.target.tagName === "A") {
            href = e.currentTarget.href;
        } else {
            href =  e.target.getAttribute('data-href');
        }

        const targetId = href?.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);

        elem?.scrollIntoView({
            behavior: "smooth",
        });
    }

    const checkAutoForm = () => {
        if((Object.keys(year).length !== 0) && (Object.keys(make).length !== 0) && (Object.keys(model).length !== 0)) {
            setIsModalAvailable(true);
            console.log("Modal is available", isModalAvailable)
        } else {
            setIsModalAvailable(false);
            console.log("Modal is not available")
        }
    }

    const getServiceById = (id) => {
        setServiceId(id);
    }

    const showServiceModal = (e) => {
        const serviceId = e.target.getAttribute('data-service-id');
        console.log("SERVICE ID", serviceId)
        if(isModalAvailable && serviceId) {
            setIsOpen(!isOpen);
            getServiceById(serviceId)
        } else {
            scrollToForm(e);
        }
    }

    const onSubmit = (event) => {
        checkAutoForm();

        console.log("SUBMIT", isModalAvailable)
    }

    // console.log("SERVICE", getService, serviceId);
    // console.log("TEST123", isModalAvailable && isOpen, isModalAvailable, isOpen)
    return (
        <>
            <main className={global.main}>
                <section id="auto-filter" className={`${global.section} ${styles.heroBlock}`}>
                    <h1>SELECT A SERVICE FOR YOUR CAR</h1>
                    <form action={onSubmit}>
                        <Select
                            className={styles.select}
                            placeHolder="Year"
                            options={yearData}
                            onChange={setYear}
                        />
                        <Select
                            className={styles.select}
                            placeHolder="Make"
                            options={makeData}
                            onChange={setMake}
                        />
                        <Select
                            className={styles.select}
                            placeHolder="Model"
                            options={modelData}
                            onChange={setModel}
                        />
                        <button className={`${global.btn} ${global.btn__primary}`}>Select</button>
                        <div className={styles.formBg}></div>
                    </form>
                    <div className={styles.bgElement1}></div>
                    <div className={styles.bgElement2}></div>
                </section>
                { loading ? (
                    <div className={`${styles.loader}`}>Loading...</div>
                ) : (
                    <>
                        { categories?.map((category) => (
                            <section className={`${global.section} ${styles.categorySection}`}>
                                <h2>{category.name}</h2>
                                <div className={styles.servicesSlider}>
                                    <MySlider settings={serviceSettings}>
                                        { category.services?.map((service, key) => (
                                            <Service
                                                id={service.id}
                                                key={service.id + '-' + key}
                                                name={service.name + ' ' + service.id}
                                                text={service.description}
                                                img={service.icon
                                                    && <Image
                                                        src={service.icon}
                                                        width={136}
                                                        height={151}
                                                        alt="service icon"
                                                    />
                                                }
                                                link={{
                                                    text: "Learn more",
                                                    href: (isModalAvailable ? {pathname} : "#auto-filter"),
                                                    onClick: showServiceModal
                                                }}
                                                btn={{
                                                    text: "Add to cart",
                                                    onClick: showServiceModal
                                                }}
                                            />
                                        ))}
                                    </MySlider>
                                </div>
                            </section>
                        ))}
                    </>
                )}
            </main>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                {   loading ? (
                    <div className={`${styles.loader}`}>Loading...</div>
                ) : (
                    <>
                        <div className={`${styles.modalHeading}`}>
                            <h2 className={`${styles.modalServiceName}`}>{getService?.name}</h2>
                            <h2 className={`${styles.modalServicePrice}`}>${getService?.price}</h2>
                        </div>
                        <div className={`${styles.modalServiceInfo}`}>
                            <div className={`${styles.modalImageSlider}`}>
                                <MySlider settings={serviceImagesSettings}>
                                    {
                                        getService?.images?.map(image => (
                                            <Image
                                                src={image.url}
                                                width={451}
                                                height={343}
                                                alt="Service Image"
                                            />
                                        ))
                                    }
                                </MySlider>
                            </div>
                            <div className={`${styles.modalTabsWrapper}`}>
                                <Tabs
                                    className={styles.modalTabs}
                                    type="horizontal"
                                    data={[
                                        {
                                            name: 'About',
                                            content: (
                                                <div className={`${styles.tabContent}`}>
                                                    <div className={`${styles.tabContentTop}`}>
                                                        <div className={`${styles.tabDescription}`}>
                                                            {getService?.longDescription}
                                                        </div>
                                                        <div className={`${styles.tabCertificates}`}>
                                                            <Image
                                                                src="/assets/images/icons/premium-quality-white.svg"
                                                                width={56}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                            <Image
                                                                src="/assets/images/icons/best-products-white.svg"
                                                                width={50}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                            <Image
                                                                src="/assets/images/icons/best-customer-service-white.svg"
                                                                width={46}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={`${styles.tabContentBottom}`}>
                                                        <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                                                    </div>
                                                </div>
                                            )
                                        },
                                        {
                                            name: 'Details',
                                            content: (
                                                <div className={`${styles.tabContent}`}>
                                                    <div className={`${styles.tabContentTop}`}>
                                                        <div className={`${styles.tabDescription}`}>
                                                            {getService?.longDescription}
                                                        </div>
                                                        <div className={`${styles.tabCertificates}`}>
                                                            <Image
                                                                src="/assets/images/icons/premium-quality-white.svg"
                                                                width={56}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                            <Image
                                                                src="/assets/images/icons/best-products-white.svg"
                                                                width={50}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                            <Image
                                                                src="/assets/images/icons/best-customer-service-white.svg"
                                                                width={46}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={`${styles.tabContentBottom}`}>
                                                        <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                                                    </div>
                                                </div>
                                            )
                                        },
                                        {
                                            name: 'Reviews',
                                            content: (
                                                <div className={`${styles.tabContent}`}>
                                                    <div className={`${styles.tabContentTop}`}>
                                                        <div className={`${styles.tabDescription}`}>
                                                            {getService?.longDescription}
                                                        </div>
                                                        <div className={`${styles.tabCertificates}`}>
                                                            <Image
                                                                src="/assets/images/icons/premium-quality-white.svg"
                                                                width={56}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                            <Image
                                                                src="/assets/images/icons/best-products-white.svg"
                                                                width={50}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                            <Image
                                                                src="/assets/images/icons/best-customer-service-white.svg"
                                                                width={46}
                                                                height={50}
                                                                alt="Trust & Safety"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={`${styles.tabContentBottom}`}>
                                                        <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    ]}
                                />
                            </div>
                        </div>
                        <div className={`${styles.modalAdditionalServices}`}>
                            <h2>Additional Services</h2>
                            <div className={`${styles.modalAdditionalServicesSlider}`}>
                                <MySlider settings={serviceSettings}>
                                    {
                                        getService?.relatedServices?.map(service => (
                                            <div className={`${styles.modalAdditionalService}`}>
                                                {
                                                    service?.icon && <Image
                                                        src={service.icon}
                                                        width={60}
                                                        height={60}
                                                        alt="Info"
                                                    />
                                                }
                                                <h4>{service?.name}</h4>
                                                <p>{service?.description}</p>
                                                <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                                            </div>
                                        ))
                                    }
                                </MySlider>
                            </div>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
}

export default CatalogPage;
