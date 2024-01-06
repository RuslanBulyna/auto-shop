'use client'
import React, { useEffect, useRef, useState } from "react";
import styles from './styles.module.css';

// Icon component
const Icon = ({ isOpen }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none"  className={isOpen ? 'translate' : ''}>
            <path d="M0.963478 0.640165L9.62554 9.30222V1.8776L10.6226 1.81396V11.0064H1.43017L1.49381 10.0093H8.91843L0.256371 1.34727L0.963478 0.640165Z" fill="#18191E"/>
        </svg>
    );
};

// Custom Select Field
const Select = (props) => {
    const { className, placeHolder, label, options, onChange, align } = props;
    const [showMenu, setShowMenu] = useState(false); // Controls the visibility of the dropdown menu
    const [selectedValue, setSelectedValue] = useState(null); // Stores the selected value(s)
    const inputRef = useRef(); // Reference to the custom select input element

    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeHolder;
        }
        return selectedValue.label;
    };

    const removeOption = (option) => {
        return selectedValue.filter((o) => o.value !== option.value);
    };

    const onTagRemove = (e, option) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const onItemClick = (option) => {
        let newValue = option;
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === option.value;
    };

    const getOptions = () => {
        return options;
    };

    return (
        <div className={`${styles.selectGroup} ${className}`}>
            { label ? <label className={styles.label}>{label}</label> : '' }
            <div className={styles.dropdownContainer}>
                <div ref={inputRef} onClick={handleInputClick} className={`${styles.dropdownInput} ${showMenu ? 'opened' : ''}`}>
                    <div className={`${styles.dropdownSelectedValue} ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
                    <div className={styles.dropdownTools}>
                        <div className={styles.dropdownTool}>
                            <Icon isOpen={showMenu} />
                        </div>
                    </div>
                </div>

                {
                    showMenu && (
                        <div className={`${styles.dropdownMenu} alignment--${align || 'auto'}`}>
                            {
                                getOptions().map((option) => (
                                    <div onClick={() => onItemClick(option)} key={option.value} className={`${styles.dropdownItem} ${isSelected(option) && "selected"}`} >
                                        {option.label}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Select;