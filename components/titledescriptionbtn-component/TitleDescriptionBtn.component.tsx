import React from "react";
import localFont from "next/font/local";
import CTA from "../cta-component/CTA.component";

type TitleDescriptionBtnProps = {
  title: string | React.ReactNode;
  description: string;
  navigationLink: string;
  btnText: string;
};

const canelaFont = localFont({
  src: "../../styles/fonts/canela/CanelaText-LightItalic-Trial.otf",
});

const TitleDescriptionBtn: React.FC<TitleDescriptionBtnProps> = ({
  title,
  description,
  navigationLink,
  btnText,
}) => {
  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  return (
    <>
      <span className={`text-[90px]  font-thin  ${canelaFont.className}`}>
        {/* {collections_data.noivas_viert.title} */}
        {title}
      </span>
      <p className="mt-[40px] max-w-[500px]">
        {/* {collections_data.noivas_viert.description} */}
        {description}
      </p>
      <CTA
        variant="secondary"
        className="mt-[130px]"
        // text={collections_data.noivas_viert.cta.text}
        text={btnText}
        onClick={() => {
          //   navigateTo(collections_data.noivas_viert.cta.link);
          navigateTo(navigationLink);
        }}
      />
    </>
  );
};

export default TitleDescriptionBtn;
