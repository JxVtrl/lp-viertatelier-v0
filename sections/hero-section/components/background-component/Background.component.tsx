import { useApp } from "@/context/AppContext"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { background_data } from "@/data/background-data"
import gsap from "gsap"
import BGImage from "@/components/bgimage-component/BGImage.component"
import { getNextCollection } from "@/utils/getNextCollection"
import Image from "next/image"

const Background: React.FC = () => {
  const {
    device: { isDesktop },
    activeBackground: {
      collection, // Variável para definir a coleção que está sendo exibida
      index: itemIndex, // Variável para definir o índice do item dentro da coleção
    },
    setActiveBackground,
  } = useApp()

  const imageContainerRef = useRef<HTMLDivElement>(null)

  const fadeAnimation = useCallback(() => {
    if (imageContainerRef.current) {
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.inOut" }
      )
    }
  }, [])

  useEffect(() => {
    if (imageContainerRef.current) {
      fadeAnimation()
    }
  }, [fadeAnimation])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground({
        collection: isDesktop
          ? getNextCollection(collection)
          : itemIndex === 1
          ? getNextCollection(collection)
          : collection,
        index: isDesktop || itemIndex === 1 ? 0 : 1,
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [collection])

  return (
    <div className="absolute inset-0 w-full h-[100vh] z-[-1]">
      <div
        ref={imageContainerRef}
        className="relative w-full h-full grid grid-cols-1 md:grid-cols-2"
      >
        <div
          className={`relative w-full h-full transition-opacity duration-1000`}
        >
          <Image
            src={background_data[collection][itemIndex].src}
            alt={background_data[collection][itemIndex].alt}
            layout="fill"
            style={{ objectFit: "cover" }}
            loading="eager"
          />
        </div>

        {isDesktop && (
          <div
            className={`relative w-full h-full transition-opacity duration-1000`}
          >
            <Image
              src={background_data[collection][1].src}
              alt={background_data[collection][1].alt}
              layout="fill"
              style={{ objectFit: "cover" }}
              loading="eager"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Background
