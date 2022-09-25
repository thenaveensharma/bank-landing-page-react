import React from "react";
import style from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full h-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}><Navbar/></div>
      </div>
      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}><Hero/></div>
      </div>
      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
        <Stats/> 
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>{/*done */}
          </div>
      </div>
    </div>
  );
};

export default App;
