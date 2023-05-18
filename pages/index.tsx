import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuestionsSection from "@/components/QuestionsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuestionsSection />
      </main>
      <Footer />
    </>
  );
}
