

import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/Achievements.css';
import Hackathone from '../image/Hackathone.jpg';
import Hackathone_award from '../image/Hackathone_award.jpg';
import synapse from '../image/synapses.jpg';
import synapseprice from '../image/Synapsesprice.jpg';

const Achievements = () => {
  useEffect(() => {
    gsap.fromTo('.achievement', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.5 });
  }, []);

  return (
    <div className="achievements">
      <div className="achievement">
        <div className="achievement-text left">
          <h2>Hackathon Winner</h2>
          <p>DCB Bank</p>
          <p> TurnOnSell.com allows any student to sell their books within their college. In the market, some stores buy and sell used books but take a certain margin and impose conditions, such as requiring a store stamp on the books. Not all stores provide the stamp system, leaving students with no option but to sell their books to scrap dealers who buy books on a per kg basis, which doesn’t reflect the true value of the books.
             Many students also want to buy books at half price.TurnOnSell.com offers the best solution to these issues.</p>
          <button className="download-btn"><a href="https://turnonsell.com/">Visit Project</a></button>
        </div>
        <div className="achievement-image right">
          <img src={Hackathone} alt="Hackathon" />
          <img src={Hackathone_award} alt="Hackathon Award" />
        </div>
      </div>

      <div className="achievement reverse">
        <div className="achievement-text right">
          <h2>Synapse Prize</h2>
          <p>Rs. 1500</p>
          <p>This website is awarded by money price from thakur college. Any one who want to sell their used cloth they can register then we  send
             the buyers over their location. This was live project till February. we was earned Rs.2650 through this project .</p>
             <button className="download-btn"><a href="https://dealup-670da.web.app/">Visit Project</a></button>
        </div>
        <div className="achievement-image left">
          <img src={synapse} alt="Synapse Prize" />
          <img src={synapseprice} alt="Synapse Prize" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
