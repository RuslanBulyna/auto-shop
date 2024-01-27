"use client"

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
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
    adaptiveHeight: false,
    infinite: true,
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
    const [ isModalAvailable, setIsModalAvailable ] = useState(false);
    const [ isFormError, setIsFormError ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ serviceId, setServiceId ] = useState(1);

    const { categories, loading } = useGetCategoriesWithServices(0);
    const { getService, getServiceLoading } = useGetServiceById(serviceId);

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
            setIsFormError(false);
            console.log("Modal is available", isModalAvailable)
        } else {
            setIsModalAvailable(false);
            setIsFormError(true);
            console.log("Modal is not available")
        }
    }

    const getServiceById = (id) => {
        setServiceId(id);
    }

    const showServiceModal = (e) => {
        const serviceId = e.target.getAttribute('data-service-id');
        checkAutoForm();
        if(isModalAvailable && serviceId) {
            getServiceById(serviceId);
            setIsOpen(true);
        } else {
            scrollToForm(e);
        }
    }

    const onSubmit = (e) => {
        checkAutoForm();
    }

    // console.log("SERVICE", getService, serviceId);
    // console.log("TEST123", isModalAvailable && isOpen, isModalAvailable, isOpen)
    return (
        <>
            <main className={global.main}>
                <section id="auto-filter" className={`${global.section} ${styles.heroBlock}`}>
                    <h1>SELECT A SERVICE FOR YOUR CAR</h1>
                    <div>
                        <form action={onSubmit}>
                            <div className={`${styles.formContent}`}>
                                <div className={`${styles.formContentTop}`}>
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
                                    <button type="submit" className={`${global.btn} ${global.btn__primary}`}>Select</button>
                                </div>
                                {
                                    isFormError && (
                                        <p className={`${styles.formError}`}>
                                            Please enter your car make/model/year to receive most accurate pricing
                                        </p>
                                    )
                                }
                                <div className={styles.formBg}></div>
                            </div>
                        </form>
                        <div className={styles.bgElement1}></div>
                        <div className={styles.bgElement2}></div>
                    </div>
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
                {   getServiceLoading ? (
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
                                        getService?.relatedServices?.map(service => {
                                            return (
                                                <div className={`${styles.modalAdditionalService}`}>
                                                    {
                                                        service?.relatedService?.icon && <Image
                                                            src={service?.relatedService?.icon}
                                                            width={60}
                                                            height={60}
                                                            alt="Info"
                                                        />
                                                    }
                                                    <h4>{service?.relatedService?.name}</h4>
                                                    <p>{service?.relatedService?.description}</p>
                                                    <button className={`${global.btn} ${global.btn__secondary}`}>Add to cart</button>
                                                </div>
                                            )
                                        })
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
