'use client'

import { useState } from 'react';
import styles from './styles.module.css';

/* TabList Item */
const Tab = ({ name, index, activeTabId, onClick }) => {

    /* Item Click Event Handler */
    const clicked = () => {
        onClick(index);
    }

    return (
        <li
            onClick={clicked}
            className={`${styles.tabsList_item} ${(activeTabId === index ? styles.activeTab : '')}`}
        >
            <span>{name}</span>
        </li>
    )
}

/* Vertical Tabs Block */
const VerticalTabs = ({ data }) => {
    const [ activeTabId, setActiveTabId ] = useState(0);

    /* Tab Click Event Handler */
    const tabClick = (id) => {
        setActiveTabId(id);
    }

    return (
      <div className={styles.tabs}>
          <div className={styles.tabsListWrapper}>
              <ul className={styles.tabsList}>
                  {
                      data && data.map((item, index) => {
                          return (
                              <Tab
                                  name={item.name}
                                  key={`${name.toLowerCase()}-${index}`}
                                  index={index}
                                  activeTabId={activeTabId}
                                  onClick={tabClick}
                              />
                          )
                      })
                  }
              </ul>
          </div>
          <div className={styles.tabsContent}>
              {
                  data && data.map((item, index) => {
                      return (
                          <div
                              key={index}
                              className={`${item.styles} ${(activeTabId === index ? styles.activeTabContent : '')}`}
                          >
                              {item.content}
                          </div>
                      );
                  })
              }
          </div>
      </div>
    );
}

export default VerticalTabs;