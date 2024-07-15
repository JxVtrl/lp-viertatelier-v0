import MouseBlobity from "@/components/mouseblobity-component/MouseBlobity.component";
import SmoothScrolling from "@/components/SmoothScrolling-component/SmoothScrolling.component";
import { AppProvider } from "@/context/AppContext";
import { About, Collection, Footer, Hero } from "@/sections";

export default function Home() {
  return (
    <SmoothScrolling>
      <AppProvider>
        <Hero />
        <About />
        <Collection />
        <Footer />
        <MouseBlobity />
      </AppProvider>
    </SmoothScrolling>
  );
}
