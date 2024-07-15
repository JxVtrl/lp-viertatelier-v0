import React from "react";
import { navigation_data } from "@/data/navigation-data";
import styles from './Navigation.module.scss'

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {navigation_data.map((navigation) => (
          <a href={navigation.url} key={navigation.id}>
            <li>{navigation.title}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
