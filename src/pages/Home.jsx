import React from "react";
import TopHeader from "../components/TopHeader";
import HeroSection from "../components/HeroSection";
import MainNav from "../components/MainNavbar";
import Services from "../components/Services";
import Reveiw from "../components/Reveiw";
import Footer from "../components/Footer";
import SecondFooter from "../components/SecondFooter";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <MainNav />
      <HeroSection />
      <Services />
      <Reveiw />
      <Footer />
      <SecondFooter />
    </div>
  );
};

export default Home;
