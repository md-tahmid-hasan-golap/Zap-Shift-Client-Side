import React from "react";
import Banner from "./Banner";
import Works from "./Works";
import Service from "./Service";
import Brands from "./Brands";
import ExtraSection from "./ExtraSection";
import Question from "./Question";
import Reviews from "./Reviews";

const riviewsPromised = fetch("/reviews.json").then((res) => res.json());
// console.log(riviewsPromised);
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Service></Service>
      <Brands></Brands>
      <ExtraSection></ExtraSection>
      <Reviews riviewsPromised={riviewsPromised}></Reviews>
      <Question></Question>
    </div>
  );
};

export default Home;
