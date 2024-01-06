'use client'

import styles from './styles.module.css';

/* Tooltip Component */
const Tooltip = (props) => {
    const { text, children } = props;

    return (
        <div className={`tooltip_wrapper ${styles.tooltip}`}>
            {children}
            <span className={styles.tooltipText}>{text}</span>
        </div>
    );
}

export default Tooltip;