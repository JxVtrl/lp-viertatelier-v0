import { CTA } from "@/components";
import TitleDescriptionBtn from "@/components/titledescriptionbtn-component/TitleDescriptionBtn.component";
import { useApp } from "@/context/AppContext";
import { collections_data } from "@/data/collections-data";
import Image from "next/image";
import React from "react";

import localFont from "next/font/local";

const canelaFont = localFont({
  src: "../../styles/fonts/canela/CanelaText-LightItalic-Trial.otf",
});

const Collection: React.FC = () => {
  const {
    device: { isDesktop },
  } = useApp();
  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  const content = {
    mobile: (
      <>
        {/* ATELIER VIERT */}
        <div className="h-fit flex flex-col gap-[48px] pt-[10vh] pb-[7vh]">
          <div className="grid grid-cols-2 gap-[16px] px-[24px]">
            <div
              className="relative"
              style={{
                aspectRatio: 0.668,
              }}
            >
              <Image
                src={collections_data.atelier_viert.images[0].src}
                alt={collections_data.atelier_viert.images[0].alt}
                layout="fill"
              />
            </div>
            <div
              className="relative"
              style={{
                aspectRatio: 0.668,
              }}
            >
              <Image
                layout="fill"
                src={collections_data.atelier_viert.images[1].src}
                alt={collections_data.atelier_viert.images[1].alt}
              />
            </div>
          </div>
          <div
            className="
            flex
            flex-col
            gap-[5vh]
            items-center
          "
          >
            <div className="flex flex-col items-center">
              <div className="w-[40%]">
                {collections_data.atelier_viert.title}
              </div>
              <p
                className="
                text-black
                text-center
                mt-[32px]
                max-w-[80%]
            "
              >
                {collections_data.atelier_viert.description}
              </p>
            </div>
            <CTA
              text={collections_data.atelier_viert.cta.text}
              onClick={() => {
                navigateTo(collections_data.atelier_viert.cta.link);
              }}
              variant="secondary"
            />
          </div>
        </div>

        {/* NOIVAS VIERT */}
        <div className="bg-[#EFEFE9] pb-[7vh] flex flex-col gap-[5vh]">
          <div
            className="relative flex flex-col h-full w-full items-center justify-center"
            style={{
              aspectRatio: 1.2,
            }}
          >
            <Image
              style={{
                position: "absolute",
              }}
              layout="fill"
              src={collections_data.noivas_viert.images[0].src}
              alt={collections_data.noivas_viert.images[0].alt}
            />

            <div className="w-[40%] z-10">
              {collections_data.noivas_viert.title}
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center">
            <p className="text-black text-center max-w-[80%]">
              {collections_data.noivas_viert.description}
            </p>
            <CTA
              text={collections_data.noivas_viert.cta.text}
              onClick={() => {
                navigateTo(collections_data.noivas_viert.cta.link);
              }}
              variant="secondary"
            />
          </div>
        </div>

        {/* FESTAS VIERT */}
        <div
          className="
         grid 
          grid-cols-2
          grid-rows-2
          gap-[16px]
          mb-[5vh]
          mt-[120px]
          px-[24px]
        "
        >
          <div
            className="
            w-full
            flex
            flex-col
            gap-[24px]
          
          "
            style={{
              aspectRatio: 0.775,
            }}
          >
            <div
              className="
            w-[75%]

            
            "
            >
              {collections_data.festas_viert.title}
            </div>
            <p className="text-[14px] text-black">
              {collections_data.festas_viert.description}
            </p>

            <CTA
              text={collections_data.festas_viert.cta.text}
              variant="secondary"
              className="w-[100%]"
              onClick={() => {
                navigateTo(collections_data.festas_viert.cta.link);
              }}
            />
          </div>
          <div
            className="relative"
            style={{
              aspectRatio: 0.775,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              layout="fill"
              src={collections_data.festas_viert.images[0].src}
              alt={collections_data.festas_viert.images[0].alt}
            />
          </div>
          <div
            className="relative"
            style={{
              aspectRatio: 0.775,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              layout="fill"
              src={collections_data.festas_viert.images[1].src}
              alt={collections_data.festas_viert.images[1].alt}
            />
          </div>
          <div
            className="relative"
            style={{
              aspectRatio: 0.775,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              layout="fill"
              src={collections_data.festas_viert.images[2].src}
              alt={collections_data.festas_viert.images[2].alt}
            />
          </div>
        </div>

        {/* TAYLOR CALL */}
        <div
          className="
          flex
          flex-col
          items-center
          justify-center
        "
        >
          <p
            className="
            text-black
            text-center
            max-w-[80%]
            mx-auto
            mb-[5vh]
          "
          >
            {collections_data.taylor.description}
          </p>
          <CTA
            text={collections_data.taylor.cta.text}
            onClick={() => {
              navigateTo(collections_data.taylor.cta.link);
            }}
            variant="secondary"
          />
          {/* LAST PHOTO BEFORE FOOTER */}
          <div className="relative h-[360px] mt-[130px] w-screen">
            <Image
              layout="fill"
              className="absolute h-full object-cover bg-center"
              src={collections_data.festas_viert.images[2].src}
              alt={collections_data.festas_viert.images[2].alt}
            />
          </div>
        </div>
      </>
    ),
    desktop: (
      <>
        {/* ATELIER VIERT */}
        <div className="h-full flex gap-[50px] pt-[200px] px-[350px] text-black">
          <div className="">
            <div className="relative flex-col h-[580px] gap-[70px]">
              <Image
                layout="fill"
                className="object-center bg-cover w-[657px] h-full"
                src={collections_data.atelier_viert.images[0].src}
                alt={collections_data.atelier_viert.images[0].alt}
              />
            </div>
            <CTA
              text={collections_data.atelier_viert.cta.text}
              className="mt-[70px]"
              variant="secondary"
              onClick={() => {
                navigateTo(collections_data.atelier_viert.cta.link);
              }}
            />
          </div>
          <div className="max-w-[500px] flex flex-col">
            <div>
              <h1
                className={`${canelaFont.className} text-[90px] w-full text-nowrap`}
              >
                {collections_data.atelier_viert.title}
              </h1>
              <p>{collections_data.atelier_viert.description}</p>
            </div>

            <div className="relative w-[320px] flex-col h-[450px]">
              <Image
                className="object-center mt-[40px] bg-cover"
                layout="fill"
                src={collections_data.atelier_viert.images[1].src}
                alt={collections_data.atelier_viert.images[1].alt}
              />
            </div>
          </div>
        </div>

        {/* NOIVAS VIERT */}
        <div className="flex bg-[#EFEFE9] mt-[200px]">
          <div className="flex-1 relative">
            <Image
              layout="fill"
              className="object-center bg-cover absolute"
              src={collections_data.noivas_viert.images[0].src}
              alt={collections_data.noivas_viert.images[0].alt}
            />
          </div>
          <div className="flex-1 py-[120px] pl-[55px] text-black">
            <TitleDescriptionBtn
              title={collections_data.noivas_viert.title}
              description={collections_data.noivas_viert.description}
              navigationLink={collections_data.noivas_viert.cta.link}
              btnText={collections_data.noivas_viert.cta.text}
            />
          </div>
        </div>
        {/* FESTAS VIERT */}

        <div className="h-[100vh] text-black px-[230px] py-[120px]">
          <div className="">
            <div>
              <TitleDescriptionBtn
                title={collections_data.festas_viert.title}
                description={collections_data.festas_viert.description}
                navigationLink={collections_data.festas_viert.cta.link}
                btnText={collections_data.festas_viert.cta.text}
              />
            </div>

            <div className="flex relative gap-[37px] mt-[114px] h-[320px]">
              <div className="bg-orange-800 w-[424px] p-2 relative">
                <Image
                  layout="fill"
                  className="object-center relative w-full h-full bg-cover"
                  src={collections_data.festas_viert.images[0].src}
                  alt={collections_data.festas_viert.images[0].alt}
                />
              </div>
              <div className="bg-orange-800 w-[424px] p-2 relative">
                <Image
                  layout="fill"
                  className="object-center w-full h-full z-10 bg-cover"
                  src={collections_data.festas_viert.images[1].src}
                  alt={collections_data.festas_viert.images[1].alt}
                />
              </div>
              <div className="absolute -top-[150%] right-0">
                <div className="relative w-[424px] h-[653px] ">
                  <Image
                    layout="fill"
                    className="object-center w-full h-full bg-cover "
                    src={collections_data.festas_viert.images[2].src}
                    alt={collections_data.festas_viert.images[2].alt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TAYLOR CALL */}
        <div className="text-black mt-[320px]  flex flex-col gap-[82px] items-center justify-center">
          <p className="text-[30px]">{collections_data.taylor.description}</p>

          <CTA
            variant="secondary"
            className="mb-[130px]"
            text={collections_data.taylor.cta.text}
            onClick={() => {
              navigateTo(collections_data.taylor.cta.link);
            }}
          />
        </div>
        {/* LAST PHOTO BEFORE FOOTER */}
        <div className="relative h-[360px]  w-screen">
          <Image
            layout="fill"
            className="absolute h-full object-cover bg-center"
            src={collections_data.festas_viert.images[2].src}
            alt={collections_data.festas_viert.images[2].alt}
          />
        </div>
      </>
    ),
  };

  return (
    <section className="bg-white">
      {isDesktop ? content.desktop : content.mobile}
    </section>
  );
};

export default Collection;
