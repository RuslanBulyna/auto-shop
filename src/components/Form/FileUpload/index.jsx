'use client'

import { useState } from 'react';
import styles from './styles.module.css';

/* FileUpload Field */
const FileUpload = (props) => {
    const { className, label, value, placeholder } = props;
    const [ fileName, setFileName ] = useState('');

    const handleInputChange = (e) => {
        setFileName(e.target.value.replace(/.*(\/|\\)/, ''));
    }

    return (
      <div className={`${styles.inputGroup} ${className}`}>
          { label ? <label className={styles.label}>{label}</label> : '' }
          <div className={styles.fileUploadWrapper} data-text={fileName}>
              <input onChange={(e) => {handleInputChange(e)}} className={styles.input} type="file" value={value} placeholder={placeholder}/>
          </div>
      </div>

    );
}

export default FileUpload;