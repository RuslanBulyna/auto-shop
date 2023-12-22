'use client'

import { useState } from 'react';
import styles from './styles.module.css';

const Tab = ({ name, index, activeTabId, onClick }) => {
    const clicked = () => {
        onClick(index);
    }

    return (
        <li
            onClick={clicked}
            className={`${styles.tabsList_item} ${(activeTabId === index ? styles.activeTab : '')}`}
        >
            {name}
        </li>
    )
}

/* Vertical Tabs Block */
const VerticalTabs = (props) => {
    const { data } = props;
    const [ activeTabId, setActiveTabId ] = useState(0);

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