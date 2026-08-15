import Experience from "@/app/components/Experience";
import Hero from "@/app/components/Hero";
import SelectedWork from "@/app/components/SelectedWork";
import SiteHeader from "@/app/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
      </main>
    </>
  );
}
