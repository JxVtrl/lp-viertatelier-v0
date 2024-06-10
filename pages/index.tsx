import { AppProvider } from "@/context/AppContext";
import {
  About,
  Collection,
  Footer,
  Hero,
} from "@/sections";

export default function Home() {
  return (
    <AppProvider>
      <Hero />
      <About />
      <Collection />
      <Footer/>
    </AppProvider>
  );
}
