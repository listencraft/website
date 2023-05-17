import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuestionsSections from "@/components/QuestionsSections";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
      </div>
      <main>
        <FeaturesSection />
        <QuestionsSections />
      </main>
      <Footer />
    </>
  );
}
