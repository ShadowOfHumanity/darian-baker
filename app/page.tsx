import ContactFooter from "@/app/components/ContactFooter";
import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import SelectedWork from "@/app/components/SelectedWork";
import SiteHeader from "@/app/components/SiteHeader";
import TechnicalPractice from "@/app/components/TechnicalPractice";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Experience />
        <TechnicalPractice />
        <ContactFooter />
      </main>
    </>
  );
}
