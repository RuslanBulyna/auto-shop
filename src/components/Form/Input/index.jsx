'use client'

import styles from './styles.module.css';

/* Input Field */
const Input = (props) => {
    const { className, label, type, value, placeholder, icon } = props;

    return (
        <div className={`${styles.inputGroup} ${className}`}>
            { label ? <label className={styles.label}>{label}</label> : '' }
            <div className={styles.inputWrapper}>
                <input className={styles.input} type={type} value={value} placeholder={placeholder}/>
                {icon}
            </div>
        </div>
    );
}

export default Input;