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
        { opacity: 1 },
        { opacity: 0, duration: 1, ease: "power1.inOut" }
      )
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
  }, [collection, itemIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDesktop) {
        // check if index is 1
        if (itemIndex === 1) {
          setActiveBackground({
            collection: getNextCollection(collection),
            index: 0,
          })
        } else {
          setActiveBackground({
            collection,
            index: 1,
          })
        }
      } else {
        setActiveBackground({
          collection: getNextCollection(collection),
          index: 0,
        })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [collection, itemIndex, setActiveBackground, isDesktop])

  return (
    <div className="absolute inset-0 w-full h-[100vh] z-[-1]">
      <div
        ref={imageContainerRef}
        className="relative w-full h-full grid grid-cols-1 md:grid-cols-2"
      >
        <div className={`relative w-full h-full`}>
          <Image
            key={`${collection}-${itemIndex}`}
            src={background_data[collection][itemIndex].src}
            alt={background_data[collection][itemIndex].alt}
            layout="fill"
            style={{ objectFit: "cover" }}
            loading="eager"
          />
        </div>

        {isDesktop && (
          <div className={`relative w-full h-full`}>
            <Image
              key={`${collection}-${
                (itemIndex + 1) % background_data[collection].length
              }`}
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
