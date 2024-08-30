import React, { useRef } from "react";
import { navigation_data } from "@/data/navigation-data";
import styles from "./Navigation.module.scss";
import gsap from "gsap";

const Navigation: React.FC = () => {
  const submenuRef = useRef<HTMLUListElement | null>(null);
  const listItemRef = useRef<HTMLLIElement | null>(null);

  const handleMouseEnter = () => {
    if (submenuRef.current) {
      gsap.to(submenuRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.3, // Ajuste para uma animação mais rápida
        ease: "power3.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (
      submenuRef.current &&
      listItemRef.current &&
      !submenuRef.current.matches(":hover") &&
      !listItemRef.current.matches(":hover")
    ) {
      gsap.to(submenuRef.current, {
        autoAlpha: 0,
        y: -10,
        duration: 0.3, // Ajuste para uma animação mais rápida
        ease: "power3.inOut",
      });
    }
  };

  return (
    <nav>
      <ul className={styles.list}>
        {navigation_data.map((navigation) => (
          <li
            key={navigation.id}
            ref={navigation.submenu ? listItemRef : null}
            className={styles.listItem}
            onMouseEnter={navigation.submenu ? handleMouseEnter : undefined}
            onMouseLeave={navigation.submenu ? handleMouseLeave : undefined}
          >
            <a className="uppercase text-white" href={navigation.url}>
              {navigation.title}
            </a>
            {navigation.submenu && (
              <ul
                ref={submenuRef}
                className={styles.submenu}
                style={{ opacity: 0, transform: "translateY(-10px)" }}
              >
                {navigation.submenu.map((subItem) => (
                  <li key={subItem.id}>
                    <a href={subItem.url}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
