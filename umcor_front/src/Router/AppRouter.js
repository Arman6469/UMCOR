import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import HomePage from "../pages/Home/HomePage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const StrategyPage = lazy(() => import("../pages/About/Strategy/StrategyPage"));

const sliderImages = [img1, img2];

export default function AppRouter() {
  return (
    <div>
      <Header />
      <Slider sliderImages={sliderImages} />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/strategy">
            <Suspense fallback={<></>}>
                <StrategyPage />
            </Suspense>
            </Route>
        <Route />
      </Switch>
      <Footer />
    </div>
  );
}
