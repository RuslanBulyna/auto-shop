'use client'

import styles from './styles.module.css';

/* TextArea Field */
const TextArea = (props) => {
    const { className, label, value, placeholder } = props;

    return (
      <div className={`${styles.inputGroup} ${className}`}>
          { label ? <label className={styles.label}>{label}</label> : '' }
          <textarea className={styles.textarea} value={value} placeholder={placeholder}/>
      </div>

    );
}

export default TextArea;