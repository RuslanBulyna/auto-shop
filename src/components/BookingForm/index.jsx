"use client"

import { useState } from 'react';
import Image from 'next/image';
import Tooltip from '@/components/Tooltip';
import Input from '@/components/Form/Input';
import TextArea from '@/components/Form/TextArea';
import RadioButton from '@/components/Form/RadioButton';
import Checkbox from '@/components/Form/Checkbox';
import StepByStep from '@/components/StepByStep';
import global from '@/styles/global.module.css';
import styles from './styles.module.css';

const FormStep1 = () => {
    const [isDropOffAddress, setIsDropOffAddress] = useState(true);

    const handleChangeIsDropOffAddress = (event) => {
        setIsDropOffAddress(!(event.target.value === "true"));
    };

    return (
      <div className={`${styles.stepForm} ${styles.step1}`}>
          <div className={styles.fieldGroupName}>
              <p>Enter your address</p>
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
              <Input type="text"/>
          </div>
          <div className={`${styles.fieldGroup} ${styles.dropOffAddress}`}>
              <Checkbox
                  id="drop-off-address"
                  name="drop-off-address"
                  value={isDropOffAddress}
                  text="If drop off address is different then pick up"
                  onChange={handleChangeIsDropOffAddress}
                  checked={isDropOffAddress}
              />
          </div>
          <div className={styles.fieldGroupName}>
              <p>Enter your address</p>
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
              <Input type="text"/>
              <TextArea placeholder="You can write your comment" />
          </div>
          <div className={styles.buttonGroup}>
              <button className={`${global.btn} ${global.btn__secondary}`} type="button">Next step</button>
          </div>
      </div>
    );
}

const FormStep2 = () => {
    const [flexible, setFlexible] = useState("Yes");

    const handleChangeRadioBtn = (event) => {
        setFlexible(event.target.value);
    };

    const isChecked = (value) => flexible === value;

    return (
        <div className={`${styles.stepForm} ${styles.step2}`}>
            <div className={styles.fieldGroupName}>
                <p>Desired pick up data and time</p>
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
            <div className={styles.fieldsRow}>
                <Input
                    label="Date"
                    type="date"
                    icon={<Image
                        src="/assets/images/icons/calendar.svg"
                        width={27}
                        height={27}
                        alt="Info"
                    />}
                />
                <Input
                    label="Time"
                    type="time"
                    icon={<Image
                        src="/assets/images/icons/clock.svg"
                        width={27}
                        height={27}
                        alt="Info"
                    />}
                />
            </div>
            <div className={styles.fieldsRow}>
                <div className={styles.fieldsColumn}>
                    <p>Are you flexible on time?</p>
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
                    </div>
                </div>
            </div>
            <div className={`${styles.fieldsRow} ${styles.estimatedTime}`}>
                <div className={styles.fieldGroupName}>
                    <p>Estimated time of completion</p>
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
                <Input type="text"/>
            </div>
            <div className={styles.fieldsRow}>
                <div className={styles.fieldGroupName}>
                    <p>Desired drop off time</p>
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
            </div>
            <div className={styles.fieldsRow}>
                <Input
                    label="Date"
                    type="date"
                    icon={<Image
                        src="/assets/images/icons/calendar.svg"
                        width={27}
                        height={27}
                        alt="Info"
                    />}
                />
                <Input
                    label="Time"
                    type="time"
                    icon={<Image
                        src="/assets/images/icons/clock.svg"
                        width={27}
                        height={27}
                        alt="Info"
                    />}
                />
            </div>
            <div className={styles.fieldsRow}>
                <div className={styles.fieldGroup}>
                    <TextArea placeholder="You can write your comment" />
                </div>
            </div>
            <div className={styles.buttonGroup}>
                <button className={`${global.btn} ${global.btn__secondary}`} type="button">Next step</button>
            </div>
        </div>
    );
}

const FormStep3 = () => {
    return (
        <div className={`${styles.stepForm} ${styles.step3}`}>
            <div className={styles.fieldGroupName}>
                <p>Your contact details</p>
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
            <div className={styles.fieldsRow}>
                <Input className={styles.input} label="First name" type="text"/>
                <Input className={styles.input} label="Last name" type="text"/>
            </div>
            <div className={styles.fieldsRow}>
                <Input className={styles.input} label="Phone number" type="phone"/>
            </div>
            <div className={styles.fieldsRow}>
                <Input label="Email" type="email"/>
            </div>
            <div className={styles.buttonGroup}>
                <button className={`${global.btn} ${global.btn__secondary}`} type="button">Save</button>
            </div>
        </div>
    );
}

/* Booking Portal Form Block */
const BookingForm = () => {
    const [privacyPolicy, setPrivacyPolicy] = useState(true);

    const handleChangePrivacyPolicy = (event) => {
        setPrivacyPolicy(!(event.target.value === "true"));
    };

    return (
        <div className={styles.bookingForm}>
            <div className={styles.stepsFormWrapper}>
                <StepByStep
                    stepNum="1 Step"
                    title="Select location"
                    content={<FormStep1/>}
                    active={true}
                />
                <StepByStep
                    stepNum="2 Step"
                    title="Pick date and time"
                    content={<FormStep2/>}
                    disabled={false}
                />
                <StepByStep
                    stepNum="3 Step"
                    title="Basic info and request"
                    content={<FormStep3/>}
                    disabled={false}
                />
            </div>
            <div className={styles.summaryBlock}>
                <form action="/" method="POST">
                    <div className={styles.totalContainer}>
                        <div className={styles.estPrice}>
                            <span className={styles.label}>Estimated price</span>
                            <span className={styles.sum}>$617.82</span>
                        </div>
                        <ul className={styles.priceDetails}>
                            <li>
                                <span className={styles.name}>Shop price</span>
                                <span className={styles.value}>$638</span>
                            </li>
                            <li>
                                <span className={styles.name}>Dealer price</span>
                                <span className={styles.value}>$679</span>
                            </li>
                            <li>
                                <span className={styles.name}>Dealer price</span>
                                <span className={styles.value}>9%</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.summaryBody}>
                        <div className={styles.promocodeContainer}>
                            <div className={styles.promocode}>
                                <span>Promo code</span>
                                <div className={styles.inputGroup}>
                                    <Input className={styles.input} type="text" />
                                    <Image
                                        src="/assets/images/icons/trash.svg"
                                        width={25}
                                        height={25}
                                        alt="Delete"
                                    />
                                </div>
                            </div>
                            <p className={styles.infoText}>
                                Lorem ipsum dolor sit amet consectetur.
                                Neque urna cursus blandit faucibus nisi pharetra praesent.
                                Fringilla diam vestibulum neque at tristique in at faucibus.
                                Diam lacus egestas vitae ullamcorper donec aliquet.
                                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                            </p>
                        </div>
                        <div className={styles.summary}>
                            <span className={styles.subHeader}>
                                <h5>Summary</h5>
                            </span>
                            <ul>
                                <li>
                                    <span className={`${styles.thirdWidth} ${styles.name}`}>Vehicle make</span>
                                    <span className={`${styles.fullWidth} ${styles.value}`}>Tesla</span>
                                </li>
                                <li>
                                    <span className={`${styles.thirdWidth} ${styles.name}`}>Vehicle year</span>
                                    <span className={`${styles.fullWidth} ${styles.value}`}>2022</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.services}>
                            <span className={styles.subHeader}>
                                <h5>Services</h5>
                                <hr/>
                            </span>
                            <ol>
                                <li>
                                    <div>
                                        <span className={`${styles.fullWidth} ${styles.name}`}>Service #1</span>
                                        <span className={`${styles.autoWidth} ${styles.value}`}>
                                        <div className={styles.buttonGroup}>
                                            <button type="button">
                                                <Image
                                                    src="/assets/images/icons/edit.svg"
                                                    width={25}
                                                    height={25}
                                                    alt="Edit"
                                                />
                                            </button>
                                            <button type="button">
                                                <Image
                                                    src="/assets/images/icons/trash.svg"
                                                    width={25}
                                                    height={25}
                                                    alt="Delete"
                                                />
                                            </button>
                                        </div>
                                    </span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className={`${styles.fullWidth} ${styles.name}`}>Service #2</span>
                                        <span className={`${styles.autoWidth} ${styles.value}`}>
                                        <div className={styles.buttonGroup}>
                                            <button type="button">
                                                <Image
                                                    src="/assets/images/icons/edit.svg"
                                                    width={25}
                                                    height={25}
                                                    alt="Edit"
                                                />
                                            </button>
                                            <button type="button">
                                                <Image
                                                    src="/assets/images/icons/trash.svg"
                                                    width={25}
                                                    height={25}
                                                    alt="Delete"
                                                />
                                            </button>
                                        </div>
                                    </span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div className={styles.additionally}>
                            <span className={styles.subHeader}>
                                <h5>Additionally</h5>
                                <hr/>
                            </span>
                            <ul>
                                <li>
                                    <span className={`${styles.thirdWidth} ${styles.name}`}>Full address</span>
                                    <span className={`${styles.fullWidth} ${styles.value}`}>Lorem ipsum dolor sit amet consectetur</span>
                                </li>
                                <li>
                                    <span className={`${styles.thirdWidth} ${styles.name}`}>Data</span>
                                    <span className={`${styles.fullWidth} ${styles.value}`}>September 23</span>
                                </li>
                                <li>
                                    <span className={`${styles.thirdWidth} ${styles.name}`}>Time</span>
                                    <span className={`${styles.fullWidth} ${styles.value}`}>8:00 to 10:00</span>
                                </li>
                                <li>
                                    <span className={`${styles.autoWidth} ${styles.name}`}>Delivery of the car to the address</span>
                                    <span className={`${styles.autoWidth} ${styles.value}`}>
                                        <Image
                                            src="/assets/images/icons/trash.svg"
                                            width={25}
                                            height={25}
                                            alt="Delete"
                                        />
                                    </span>
                                </li>
                            </ul>
                            <p className={styles.infoText}>
                                Lorem ipsum dolor sit amet consectetur.
                                Neque urna cursus blandit faucibus nisi pharetra praesent.
                                Fringilla diam vestibulum neque at tristique in at faucibus.
                                Diam lacus egestas vitae ullamcorper donec aliquet.
                                Rhoncus massa nunc ullamcorper et faucibus sit eu lacus cursus.
                            </p>
                        </div>
                        <div className={styles.privacyPolicyWrapper}>
                            <Checkbox
                                id="privacy-policy"
                                name="privacy-policy"
                                value={privacyPolicy}
                                text="I agree with terms and conditions"
                                onChange={handleChangePrivacyPolicy}
                                checked={privacyPolicy}
                            />
                        </div>
                        <button className={`${global.btn} ${global.btn__secondary}`} disabled={true}>Confirm request</button>
                    </div>
                    <div className={styles.background}></div>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;