import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import HomePage from "../pages/Home/HomePage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const StrategyPage = lazy(() => import("../pages/About/Strategy/StrategyPage"));
const MissionPage = lazy(() => import("../pages/About/Mission/MissionPage"));
const HistoryPage = lazy(() => import("../pages/About/History/HistoryPage"));
const StaffPage = lazy(() => import("../pages/About/Staff/StaffPage"));

const sliderImages = [img1, img2];

export default function AppRouter() {
  return (
    <div>
      <Header />
      <Slider sliderImages={sliderImages} />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/mission">
          <Suspense fallback={<></>}>
            <MissionPage />
          </Suspense>
        </Route>
        <Route path="/strategy">
          <Suspense fallback={<></>}>
            <StrategyPage />
          </Suspense>
        </Route>
        <Route path="/history">
          <Suspense fallback={<></>}>
            <HistoryPage />
          </Suspense>
        </Route>
        <Route path="/staff">
          <Suspense fallback={<></>}>
            <StaffPage />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
