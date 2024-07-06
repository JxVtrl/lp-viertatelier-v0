"use client";

import { useEffect } from "react";
import useBlobity from "blobity/lib/react/useBlobity";
//import useMediaQuery from "@/hooks/useMediaQuery";
import AOS from "aos";

export const blobityConfig = {
   licenseKey: "opensource",
   focusableElementsOffsetX: 5,
   focusableElementsOffsetY: 5,
   dotColor: "#fff",
   color: "#fff",
   invert: true,
   focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
   font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
   fontSize: 16,
   fontWeight: 500,
   opacity: 1,
    fontColor: "#fff",
   border: "1px solid #0e1016",
   zIndex: 100,
   size: 20,
   // radius: 20,
   magnetic: true, // default is true
};

export default function MouseBlobity() {
   const blobityInstance = useBlobity(blobityConfig);
   //const { matches } = useMediaQuery("(max-width: 880px)");

   useEffect(() => {
      AOS.init();
      if (blobityInstance.current) {
         // eslint-disable-next-line
         // @ts-ignore for debugging purposes or playing around
         window.blobity = blobityInstance.current;
      }
   }, [blobityInstance]);

   useEffect(() => {
      window.scrollTo({
         top: 0,
         left: 0,
      });
   }, []);

   return <div />;
}