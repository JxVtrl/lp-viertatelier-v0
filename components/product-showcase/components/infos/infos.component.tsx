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
  console.log({ colors, description, name, price, sizes });
  return (
    <div>
      <div>
        <h3 className={`${inter.className} ${styles.name}`}>{name}</h3>
        <h4 className={`${inter.className} ${styles.price}`}>R$ {price}</h4>
        <span className={`${inter.className} ${styles.colors}`}>
          <small>{colors?.length + 1} cores</small>
        </span>

        <div>{sizes}</div>
      </div>

      <div>
        <CTA variant="primary" text="ENTRE EM CONTATO" />
        <p className={`${inter.className} ${styles.description}`}>{description}</p>
      </div>
    </div>
  );
};

export default Infos;
