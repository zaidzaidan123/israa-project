import ApplicationSection from "./components/ApplicationSection";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import SkinCareClub from "./components/SkinCareClub";
import TheorticalPracticalSection from "./components/TheorticalPracticalSection";
import WhyChooseGen from "./components/WhyChooseGen";

export default function Home() {
  return (
    <>
    <TheorticalPracticalSection/>
    <SkinCareClub/>
    <ApplicationSection/>
    <WhyChooseGen/>
    <GetInTouch/>
    <Footer/>
    </>
  );
}
