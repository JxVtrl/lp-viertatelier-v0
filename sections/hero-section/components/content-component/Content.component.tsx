import { CTA } from '@/components'
import { useApp } from '@/context/AppContext'
import React from 'react'

const Content: React.FC = () => {
  const {
    device: { isDesktop }
  } = useApp()

  return (
    <div className='flex flex-col gap-y-[20vh] lg:gap-y-[60px] text-center text-[#fff] w-full h-full justify-center'>
      <div className='flex flex-col gap-y-[12px] lg:gap-y-[0]'>
        <h1 className={`font-thin text-nowrap`}
        style={{
          fontSize: isDesktop ? "clamp(75px, 5vw, 90px)" : "42px",
        }}>Atelier Sob Medida</h1>

        <p className='text-[18px] md:text-[22px]'>
          Uma experiência única e personalizada{!isDesktop ? <br /> : ' '}
          criada exclusivamente para você.
        </p>
      </div>

      <CTA text='Descubra' mxAuto onClick={() => null} />
    </div>
  )
}

export default Content
