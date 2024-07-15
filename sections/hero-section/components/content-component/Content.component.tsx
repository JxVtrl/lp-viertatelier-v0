import { CTA } from "@/components";
import { useApp } from "@/context/AppContext";
import React from "react";
import styles from './Content.module.scss'

const Content: React.FC = () => {
  const {
    device: { isDesktop },
  } = useApp();

  return (
    <div className="flex flex-col gap-y-[20vh] lg:gap-y-[60px] text-center text-[#fff] w-full h-full justify-center">
      <div className="flex flex-col gap-y-[12px] lg:gap-y-[0]">
        <h1
          className={styles.title}
        >
          Atelier Sob Medida
        </h1>

        <p className={styles.text}>
          Uma experiência única e personalizada{!isDesktop ? <br /> : " "}
          criada exclusivamente para você.
        </p>
      </div>

      <CTA text="Descubra" mxAuto onClick={() => null} />
    </div>
  );
};

export default Content;
