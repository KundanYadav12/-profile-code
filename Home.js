import React from 'react';
import '../styles/Home.css';
import dish22 from '../image/dish22.mp4';
import cvPdf from '../image/Kundan Yadav CV.pdf';
import circle1 from '../image/circle2.png';
import myphoto from '../image/myphoto.png';

const Home = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Kundan_Developer_CV.pdf';
    link.click();
  };

  return (
    <div className="home">
      <video autoPlay loop muted className="background-video">
        <source src={dish22} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="profile-container">
          <img src={myphoto} alt="Profile" className="myphoto" />
          <img src={circle1} alt="Circle" className="circle1" />
        </div>
        <h2 className="title">Kundan Developer</h2>
        <h3 className="subtitle">The KING of Creating Dynamic and Interactive Web Experiences</h3>
        <button className="download-btn" onClick={downloadCV}>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Home;


 
 
