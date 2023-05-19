import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import QuestionsSection from "@/components/QuestionSection/QuestionsSection";

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
