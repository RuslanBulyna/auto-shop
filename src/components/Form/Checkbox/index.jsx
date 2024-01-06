'use client'

import styles from './styles.module.css';

/* Checkbox Field */
const Checkbox = (props) => {
    const { className, id, text, name, onChange, checked, value } = props;

    return (
        <label htmlFor={id} className={`${styles.checkboxLabel} ${className}`}>
            <input
                className={styles.checkboxInput}
                type="checkbox"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={styles.checkboxText}>{text}</span>
        </label>
    );
}

export default Checkbox;

/*
* <Checkbox
        id="subscribeNews"
        label="Subscribe to newsletter?"
        checked={true}
      />
* */