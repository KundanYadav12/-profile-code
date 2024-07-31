
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Technology.css';
import react from '../image/reactjs.png';
import nodejs from '../image/node js.png';
import mongodb from '../image/mongodb.png';
import expressjs from '../image/expressjs.png';
import firebase from '../image/firebase.png';
import Mysql from '../image/Mysql.png';
import HCJ from '../image/HCJ.png';
import dish22 from '../image/dish22.mp4';
import Turnonsell from '../image/Turnonsell.png';
import kundankitchen from '../image/Kundankitchens.png';
import junakapdewala from '../image/junakapdewala.png';
import pets from '../image/pets.png';
import dog1 from '../image/dog1.png';


const technologies = [
  { img: firebase, alt: 'Firebase', name: 'Firebase' },
  { img: expressjs, alt: 'Express.js', name: 'Express.js' },
  { img: react, alt: 'React.js', name: 'React.js' },
  { img: nodejs, alt: 'Node.js', name: 'Node.js' },
  { img: mongodb, alt: 'MongoDB', name: 'MongoDB' },
  { img: HCJ, alt: 'HTML, CSS, JavaScript', name: 'HTML, CSS, JS' },
  { img: Mysql, alt: 'MySQL', name: 'MySQL' }
];

const Technology = () => {
  const techListRef = useRef(null);

  useEffect(() => {
    const techItems = techListRef.current.children;
    const totalWidth = Array.from(techItems).reduce((acc, item) => acc + item.clientWidth + 10, 0); // Adjust margin
    const duration = (totalWidth / 100) * 2; // Adjust the duration for speed control

    gsap.to(techItems, {
      x: `-=${totalWidth}`,
      ease: 'linear',
      duration: duration,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });

    gsap.set(techItems, { xPercent: -50 });
    gsap.timeline().fromTo(techItems, 
      { xPercent: 50 }, 
      { xPercent: -50, duration: duration, ease: 'linear', repeat: -1, modifiers: { xPercent: gsap.utils.wrap(-50, 50) } 
    });
  }, []);

  return (
    <div className="technology">
      <video autoPlay loop muted className="background-video">
        <source src={dish22} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Technologies</h2>
      <div className="tech-list" ref={techListRef}>
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <div className="card">
              <img src={tech.img} alt={tech.alt} />
              <span>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="card-container">
        <Card
          image={Turnonsell}
          title="TurnOnSell"
          buttonText="Visit Site"
          link="https://turnonsell.com"
        />
        <Card
          image={junakapdewala}
          title="Junakapdewala"
          buttonText="Visit site"
          link="	 https://dealup-670da.web.app/"
        />
        <Card
          image={kundankitchen}
          title="Kundan Kitchen's"
          buttonText="Visit site"
          link="https://kundankitchens.netlify.app/"
        />
        <Card
          image={dog1}
          title="Pet's Care"
          buttonText="Visit site"
          link="https://kundan-happypets.netlify.app/"
        />
      </div>
    </div>
  );
};

const Card = ({ image, title, buttonText, link }) => {
  return (
    <div className="card-static">
      <img src={image} alt={title} className="card-static-image" />
      <h3 className="card-static-title">{title}</h3>
      <button className="card-static-button" onClick={() => window.open(link, "_blank")}>
        {buttonText}
      </button>
    </div>
  );
};

export default Technology;



