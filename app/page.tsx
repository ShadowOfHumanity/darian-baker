import ContactFooter from "@/app/components/ContactFooter";
import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import SelectedWork from "@/app/components/SelectedWork";
import SiteHeader from "@/app/components/SiteHeader";
import TechnicalPractice from "@/app/components/TechnicalPractice";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <TechnicalPractice />
      </main>
      <ContactFooter />
    </>
  );
}
