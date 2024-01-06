"use client"

import { useState } from 'react';
import Image from 'next/image';
import Tabs from '@/components/Tabs';
import Tooltip from '@/components/Tooltip';
import Input from '@/components/Form/Input';
import TextArea from '@/components/Form/TextArea';
import Select from '@/components/Form/Select';
import RadioButton from '@/components/Form/RadioButton';
import FileUpload from '@/components/Form/FileUpload';
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

/* Request Free Consultation Block */
const ReqFreeConsult = () => {
    const [insurance, setInsurance] = useState("Yes");

    const handleChangeRadioBtn = (event) => {
        setInsurance(event.target.value);
    };

    const isChecked = (value) => insurance === value;

    return (
        <Tabs
            className={styles.rfcTabs}
            type="horizontal"
            data={[
                {
                    name: 'Body Work',
                    content: (
                        <form method="POST" className={styles.form}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Neque urna cursus blandit faucibus nisi pharetra praesent.
                                Fringilla diam vestibulum neque at tristique in at faucibus. Diam lacus egestas vitae ullamcorper donec aliquet.
                                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                            </p>
                            <div className={styles.formStep}>
                                <h4>Step 1</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your contact details</h5>
                                    <Tooltip
                                        text="Lorem ipsum dolor sit amet consectetur.
                                        Neque urna cursus blandit faucibus nisi pharetra praesent.
                                        Fringilla diam vestibulum neque at tristique in at faucibus.
                                        Diam lacus egestas vitae ullamcorper donec aliquet.
                                        Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus."
                                    >
                                        <Image
                                            src="/assets/images/icons/info.svg"
                                            width={19}
                                            height={19}
                                            alt="Info"
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Input className={styles.input} label="Name" type="text"/>
                                    <Input className={styles.input} label="Phone number" type="tel"/>
                                    <Input className={styles.input} label="Email" type="email"/>
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 2</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Your vehicle information</h5>
                                    <Tooltip
                                        text="Lorem ipsum dolor sit amet consectetur.
                                        Neque urna cursus blandit faucibus nisi pharetra praesent.
                                        Fringilla diam vestibulum neque at tristique in at faucibus.
                                        Diam lacus egestas vitae ullamcorper donec aliquet.
                                        Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus."
                                    >
                                        <Image
                                            src="/assets/images/icons/info.svg"
                                            width={19}
                                            height={19}
                                            alt="Info"
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <Select
                                        className={styles.select}
                                        placeHolder='Please select...'
                                        label="Vehicle make"
                                        options={[
                                            {
                                                label: "Tesla",
                                                value: "tesla",
                                            },
                                            {
                                                label: "BMW",
                                                value: "bmw",
                                            },
                                            {
                                                label: "Mercedes",
                                                value: "mercedes",
                                            },
                                        ]}
                                    />
                                    <Select
                                        className={styles.select}
                                        placeHolder='Please select...'
                                        label="Vehicle year"
                                        options={[
                                            {
                                                label: "2023",
                                                value: "2023",
                                            },
                                            {
                                                label: "2022",
                                                value: "2022",
                                            },
                                            {
                                                label: "2021",
                                                value: "2021",
                                            },
                                        ]}
                                        onChange={(e) => handleChangeSelect(e)}
                                    />
                                    <Input className={styles.input} label="VIN" type="text"/>
                                </div>
                            </div>
                            <div className={styles.formStep}>
                                <h4>Step 3</h4>
                                <div className={styles.fieldGroupName}>
                                    <h5>Going through insurance?</h5>
                                    <Tooltip
                                        text="Lorem ipsum dolor sit amet consectetur.
                                        Neque urna cursus blandit faucibus nisi pharetra praesent.
                                        Fringilla diam vestibulum neque at tristique in at faucibus.
                                        Diam lacus egestas vitae ullamcorper donec aliquet.
                                        Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus."
                                    >
                                        <Image
                                            src="/assets/images/icons/info.svg"
                                            width={19}
                                            height={19}
                                            alt="Info"
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <div className={styles.radioButtonsGroup}>
                                        <RadioButton
                                            id="Yes"
                                            name="Yes"
                                            value="Yes"
                                            text="Yes"
                                            onChange={handleChangeRadioBtn}
                                            checked={isChecked("Yes")}
                                        />
                                        <RadioButton
                                            id="No"
                                            name="No"
                                            value="No"
                                            text="No"
                                            onChange={handleChangeRadioBtn}
                                            checked={isChecked("No")}
                                        />
                                        <RadioButton
                                            id="Not sure"
                                            name="Not sure"
                                            value="Not sure"
                                            text="Not sure"
                                            onChange={handleChangeRadioBtn}
                                            checked={isChecked("Not sure")}
                                        />
                                    </div>
                                    <Select
                                        className={styles.select}
                                        placeHolder='Please select...'
                                        label="Select your service"
                                        options={[
                                            {
                                                label: "2023",
                                                value: "2023",
                                            },
                                            {
                                                label: "2022",
                                                value: "2022",
                                            },
                                            {
                                                label: "2021",
                                                value: "2021",
                                            },
                                        ]}
                                        onChange={(e) => handleChangeSelect(e)}
                                        isSearchable
                                        isMulti
                                    />
                                    <FileUpload className={styles.fileUpload} label="Add a pictures"/>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <TextArea placeholder="You can write your comment" />
                                </div>
                            </div>
                            <button className={`${global.btn} ${global.btn__secondary}`}>Next</button>
                        </form>
                    ),
                    styles: `${styles.tabBody} ${styles.tabContent1}`
                },
                {
                    name: 'Mechanical',
                    content: (
                        <>

                        </>
                    ),
                    styles: `${styles.tabBody} ${styles.tabContent2}`
                },
                {
                    name: 'Protection',
                    content: (
                        <>

                        </>
                    ),
                    styles: `${styles.tabBody} ${styles.tabContent3}`
                },
                {
                    name: 'Aesthetics',
                    content: (
                        <>

                        </>
                    ),
                    styles: `${styles.tabBody} ${styles.tabContent4}`
                }
            ]}
        />
    );
}

export default ReqFreeConsult;