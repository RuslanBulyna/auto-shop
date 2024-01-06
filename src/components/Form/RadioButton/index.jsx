'use client'

import styles from './styles.module.css';

/* RadioButton Field */
const RadioButton = (props) => {
    const { className, id, text, name, onChange, checked, value } = props;

    return (
        <label htmlFor={id} className={`${styles.radioButtonLabel} ${className}`}>
            <input
                className={styles.radioButtonInput}
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={styles.radioButtonCustom}>{text}</span>
        </label>
    );
}

export default RadioButton;