import ApplicationSection from "./components/ApplicationSection";
import ConsultationsTypes from "./components/ConsultationsTypes";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkinCareClub from "./components/SkinCareClub";
import TheorticalPracticalSection from "./components/TheorticalPracticalSection";
import WhyChooseGen from "./components/WhyChooseGen";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ConsultationsTypes />
      <TheorticalPracticalSection />
      {/* <SkinCareClub /> */}
      <ApplicationSection />
      <WhyChooseGen />
      <GetInTouch />
      <Footer />
    </>
  );
}
