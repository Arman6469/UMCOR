import React from "react";
import AboutPage from "../../../components/AboutPage/AboutPage";
import img2 from "../../../assets/2.jpg";

export default function MissionPage() {
  return (
    <div>
      <AboutPage title={"Մեր Առաքելությունը"} img={img2}>
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
