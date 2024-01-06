"use client"

import React, { useState } from 'react';
import styles from './styles.module.css';

// Icon component
const Icon = ({ isOpen, isDisabled }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none"  className={isOpen ? 'translate' : ''}>
            <path d="M0.963478 0.640165L9.62554 9.30222V1.8776L10.6226 1.81396V11.0064H1.43017L1.49381 10.0093H8.91843L0.256371 1.34727L0.963478 0.640165Z" fill={isDisabled ? '#787B8A' : '#FFF'}/>
        </svg>
    );
};

/* Step by step component */
const StepByStep = (props) => {
    const { className, stepNum, title, content, active, disabled } = props;
    const [ isActive, setIsActive ] = useState(active ? active : false);
    const [ isDisabled, setIsDisabled ] = useState(disabled ? disabled : false);

    return (
        <div className={`${styles.stepItem} ${className}`}>
            <div className={`${styles.stepHeader} ${(isDisabled && isActive) ? "active" : ""} ${isDisabled ? "disabled" : ""}`} onClick={() => !isDisabled ? setIsActive(!isActive) : 0}>
                <div>
                    <div className={styles.stepNum}>{stepNum}</div>
                    <div className={styles.name}>{title}</div>
                </div>
                <div className={styles.openBtn}>
                    <Icon isOpen={isActive} isDisabled={isDisabled} />
                </div>
            </div>
            {isActive && <div className={styles.stepContent}>{content}</div>}
        </div>
    );
};

export default StepByStep;