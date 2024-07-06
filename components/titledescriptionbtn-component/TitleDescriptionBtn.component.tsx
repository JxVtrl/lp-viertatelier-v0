import React from "react"
import localFont from "next/font/local"
import CTA from "../cta-component/CTA.component"

type TitleDescriptionBtnProps = {
  title: string | React.ReactNode
  description: string
  navigationLink: string
  btnText: string
  descrNeedsToFit: boolean
}

const canelaFont = localFont({
  src: "../../styles/fonts/canela/CanelaText-LightItalic-Trial.otf",
})

const TitleDescriptionBtn: React.FC<TitleDescriptionBtnProps> = ({
  title,
  description,
  navigationLink,
  btnText,
  descrNeedsToFit,
}) => {
  const navigateTo = (link: string) => {
    window.location.href = link
  }

  return (
    <div className='flex flex-col justify-between h-full gap-[7vh]'>
      <div>
        <span
          className={`font-thin text-nowrap  ${canelaFont.className}
        text-[32px] md:text-[42px] lg:text-[54px]
`}
        >
          {title}
        </span>
        <p
          className={`mt-[3.70%] text-[14px] md:text-[18px] lg:text-[22px] ${
            descrNeedsToFit && "max-w-[80%]"
          }`}
        >
          {description}
        </p>
      </div>

      <CTA
        variant="secondary"
        text={btnText}
        onClick={() => {
          navigateTo(navigationLink)
        }}
      />
    </div>
  )
}

export default TitleDescriptionBtn
