import React from "react";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import FunctionSection from "../components/Home/FunctionSection";
import QuestionSection from "../components/Home/QuestionSection";
import PlanSection from "../components/Home/PlanSection";
import CreateAccountSection from "../components/Home/CreateAccountSection";
import Footer from "../components/Home/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FunctionSection />
      <QuestionSection />
      <PlanSection />
      <CreateAccountSection />
      <Footer />
    </div>
  );
};

export default Home;
