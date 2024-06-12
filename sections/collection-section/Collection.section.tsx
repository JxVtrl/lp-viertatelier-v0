import { CTA } from "@/components";
import { useApp } from "@/context/AppContext";
import { collections_data } from "@/data/collections-data";
import Image from "next/image";
import React from "react";

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
          pb-[7vh]
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
        </div>
      </>
    ),
    desktop: (
      <>
        {/* ATELIER VIERT */}
        <div>
          <div>
            <div>
              <Image
                layout="fill"
                src={collections_data.atelier_viert.images[0].src}
                alt={collections_data.atelier_viert.images[0].alt}
              />
            </div>
            <CTA
              text={collections_data.atelier_viert.cta.text}
              onClick={() => {
                navigateTo(collections_data.atelier_viert.cta.link);
              }}
            />
          </div>
          <div>
            <div>
              <h1>{collections_data.atelier_viert.title}</h1>
              <p>{collections_data.atelier_viert.description}</p>
            </div>

            <div>
              <Image
                layout="fill"
                src={collections_data.atelier_viert.images[1].src}
                alt={collections_data.atelier_viert.images[1].alt}
              />
            </div>
          </div>
        </div>

        {/* NOIVAS VIERT */}
        <div>
          <div>
            <Image
              layout="fill"
              src={collections_data.noivas_viert.images[0].src}
              alt={collections_data.noivas_viert.images[0].alt}
            />
          </div>
          <div>
            <h1>{collections_data.noivas_viert.title}</h1>
            <p>{collections_data.noivas_viert.description}</p>
            <CTA
              text={collections_data.noivas_viert.cta.text}
              onClick={() => {
                navigateTo(collections_data.noivas_viert.cta.link);
              }}
            />
          </div>
        </div>

        {/* FESTAS VIERT */}
        <div>
          <div>
            <div>
              <h1>{collections_data.festas_viert.title}</h1>
              <p>{collections_data.festas_viert.description}</p>
              <CTA
                text={collections_data.festas_viert.cta.text}
                onClick={() => {
                  navigateTo(collections_data.festas_viert.cta.link);
                }}
              />
            </div>

            <div>
              <Image
                layout="fill"
                src={collections_data.festas_viert.images[0].src}
                alt={collections_data.festas_viert.images[0].alt}
              />
              <Image
                layout="fill"
                src={collections_data.festas_viert.images[1].src}
                alt={collections_data.festas_viert.images[1].alt}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                layout="fill"
                src={collections_data.festas_viert.images[2].src}
                alt={collections_data.festas_viert.images[2].alt}
              />
            </div>
          </div>
        </div>

        {/* TAYLOR CALL */}
        <div>
          <p>{collections_data.taylor.description}</p>

          <CTA
            text={collections_data.taylor.cta.text}
            onClick={() => {
              navigateTo(collections_data.taylor.cta.link);
            }}
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
