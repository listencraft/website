import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import QuestionsSection from "@/components/QuestionSection/QuestionsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Listencraft</title>
        <meta
          name="description"
          content="Listencraft is the app to teach people how to listen"
        />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <QuestionsSection />
      </main>
      <Footer />
    </>
  );
}
