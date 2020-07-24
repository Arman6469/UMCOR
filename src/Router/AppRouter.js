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
const PartnersPage = lazy(() => import("../pages/About/Partners/PartnersPage"));
const ProjectsPage = lazy(() => import("../pages/Projects/ProjectsPage"));
const ProjectPage = lazy(() =>
  import("../pages/Projects/ProjectPage/ProjectPage")
);
const NewsPage = lazy(() => import("../pages/News/NewsPage"));
const NewsSinglePage = lazy(() => import("../pages/News/NewsSinglePage"));
const DonationPage = lazy(() => import("../pages/Donation/DonationPage"));

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
        <Route path="/partners">
          <Suspense fallback={<></>}>
            <PartnersPage />
          </Suspense>
        </Route>
        <Route path="/projects" exact>
          <Suspense fallback={<></>}>
            <ProjectsPage />
          </Suspense>
        </Route>
        <Route path="/projects/:id">
          <Suspense fallback={<></>}>
            <ProjectPage />
          </Suspense>
        </Route>
        <Route path="/news" exact>
          <Suspense fallback={<></>}>
            <NewsPage />
          </Suspense>
        </Route>
        <Route path="/news/:id">
          <Suspense fallback={<></>}>
            <NewsSinglePage />
          </Suspense>
        </Route>
        <Route path="/donation">
          <Suspense fallback={<></>}>
            <DonationPage />
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
