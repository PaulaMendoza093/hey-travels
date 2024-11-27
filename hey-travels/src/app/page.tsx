import React from "react";
import Featured from "./featured/page";
import Banner from "./banner/page";
import Breaker from "./breaker/page";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Banner/>
      <Featured/>
      <Breaker/>
      <Footer/>
    </>
  );
}
