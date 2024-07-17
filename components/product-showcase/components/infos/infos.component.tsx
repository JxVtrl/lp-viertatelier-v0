import { CTA } from "@/components/cta-component";
import { Product } from "@/interfaces/contetfulData";
import React from "react";
import { Inter } from "next/font/google";
import styles from "./infos.module.scss";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type InfosProps = {
  infos: Product;
};

const Infos: React.FC<InfosProps> = ({
  infos: { colors, description, name, price, sizes },
}) => {
  return (
    <div
      className="lg:pt-[19.54vh] lg:pl-[5.99vw] px-[9.01vw] pt-[5vh] lg:px-[unset] lg:pt-[unset]
    "
    >
      <div className="mb-[3.75vh] lg:mb-[8.7vh]">
        <h3 className={`${inter.className} ${styles.name}`}>{name}</h3>
        <p className={`${inter.className} ${styles.price}`}>R$ {price}</p>
        <span className={`${inter.className} ${styles.colors}`}>
          <small>{colors?.length + 1} cores</small>
        </span>

        <div className={styles.sizes}>
          {sizes.map((size, index) => {
            return <div key={index}>{size}</div>;
          })}
        </div>
      </div>

      <div>
        <CTA variant="secondary" text="ENTRE EM CONTATO" />
        <p className={`${inter.className} ${styles.description}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Infos;
