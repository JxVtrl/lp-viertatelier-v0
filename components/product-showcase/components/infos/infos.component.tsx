import { CTA } from "@/components/cta-component";
import { Product } from "@/interfaces/contetfulData";
import React from "react";
import { Inter } from "next/font/google";
import styles from "./infos.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { markdownOptions } from "@/utils/markdownOptions";
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
  console.log(description);

  function formatTableString(description: string) {
    const lines = description.trim().split("\n");
    const tableStartIndex = lines.findIndex(
      (line) =>
        line.includes("Tamanho") &&
        line.includes("Busto") &&
        line.includes("Cintura") &&
        line.includes("Quadril")
    );

    if (tableStartIndex === -1) {
      return description.replace(/\n/g, "<br>");
    }

    const tableLines = lines.slice(tableStartIndex);
    const formattedLines = tableLines.map((line) => {
      const cells = line
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell);
      return `<tr>${cells.map((cell) => `<td>${cell}</td>`).join("")}</tr>`;
    });

    const beforeTable = lines.slice(0, tableStartIndex).join("<br>");
    const formattedTable = `<table><tbody>${formattedLines.join(
      ""
    )}</tbody></table>`;

    return `${beforeTable}<div style="margin-top: 1em; margin-bottom: 1em;">${formattedTable}</div>`;
  }

  // Verifica se a descrição contém a tabela e a formata
  const formattedDescription = formatTableString(description);

  return (
    <div
      className="lg:pt-[19.54vh] lg:pl-[5.99vw] px-[9.01vw] pt-[5vh] lg:px-[unset] lg:pt-[unset]
    "
    >
      <div className="mb-[3.75vh] lg:mb-[8.7vh]">
        <h3 className={`${inter.className} ${styles.name}`}>{name}</h3>
        <p className={`${inter.className} ${styles.price}`}>R$ {price}</p>

        <p className={`text-[14px] ${inter.className} ${styles.colors}`}>
          {colors.map((color) => (
            <span key={color} className="capitalize">
              {color}
            </span>
          ))}
        </p>

        <div className={styles.sizes}>
          {sizes.map((size, index) => {
            return <div key={index}>{size}</div>;
          })}
        </div>
      </div>

      <div>
        <CTA variant="secondary" text="ENTRE EM CONTATO" />
        <div
          className={`${inter.className} ${styles.description}`}
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
      </div>
    </div>
  );
};

export default Infos;
