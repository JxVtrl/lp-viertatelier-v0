import React from "react";
import localFont from "next/font/local";
import CTA from "../cta-component/CTA.component";

type TitleDescriptionBtnProps = {
  title: string | React.ReactNode;
  description: string;
  navigationLink: string;
  btnText: string;
  descrNeedsToFit: boolean;
};

const canelaFont = localFont({
  src: "../../styles/fonts/canela/CanelaText-LightItalic-Trial.otf",
});

const TitleDescriptionBtn: React.FC<TitleDescriptionBtnProps> = ({
  title,
  description,
  navigationLink,
  btnText,
  descrNeedsToFit
}) => {
  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  return (
    <>
      <span
        className={`font-thin text-nowrap  ${canelaFont.className}`}
        style={{
          fontSize: "clamp(75px, 5vw, 90px)",
        }}
      >
        {title}
      </span>
      <p className={`mt-[40px] text-[18px] md:text-[22px] ${descrNeedsToFit && 'max-w-[80%]'}`}>{description}</p>
      <CTA
        variant="secondary"
        className="mt-[80px]"
        text={btnText}
        onClick={() => {
          navigateTo(navigationLink);
        }}
      />
    </>
  );
};

export default TitleDescriptionBtn;
