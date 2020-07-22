import React from "react";
import AboutPage from "../../../components/AboutPage/AboutPage";
import img1 from '../../../assets/1.jpg'

export default function StrategyPage() {
  return (
    <div>
      <AboutPage title={"Մեր Ռազմավարությունը"} img={img1}>
        <p className="font-medium font-bl">
          «ԱՄՔՈՐ» կազմակերպությունը Հայաստանում գոծունեություն է ծավալում 1994
          թվականից: Այս տարիների ընթացքում օգնության և զարգացման ծրագրեր են
          իրականցվել ողջ Հայաստանում: «ԱՄՔՈՐ»-ի առաքելությունն է նպաստել
          աղքատության վերացմանը և սոցիալ-տնտեսական զարգացմանը Հայաստանում՝
        </p>
      </AboutPage>
    </div>
  );
}
