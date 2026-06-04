import React, { useEffect, useRef, useState } from 'react';
import './Features.css';

// Import your images here
import phoneImg from '../assets/phone.jpg';
import driverImg from '../assets/driver.jpg';
import mapImg from '../assets/map.jpg';
import foodImg from '../assets/food.jpg';

const Features = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="about" ref={sectionRef}>
      <div className="features-grid">
        
        {/* LEFT COLLAGE */}
        <div className={`features-images ${isVisible ? 'animate-in' : ''}`}>
          
          {/* COLUMN 1 */}
          <div className="feat-col feat-col-left">
            <div className="feat-img-container img-phone slide-from-left">
              <img src={phoneImg} alt="Mobile App" />
            </div>
            <div className="feat-img-container img-map slide-from-bottom">
              <img src={mapImg} alt="Location Map" />
            </div>
          </div>
          
          {/* COLUMN 2 */}
          <div className="feat-col feat-col-right">
            <div className="feat-img-container img-driver slide-from-right">
              <img src={driverImg} alt="Delivery Driver" />
            </div>
            <div className="feat-img-container img-food slide-from-bottom-right">
              <img src={foodImg} alt="Delicious Food" />
            </div>
          </div>

        </div>
        
        {/* RIGHT CONTENT */}
        <div className={`features-content ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="features-title">
            Modern Hyperlocal<br />
            User Experience
          </h2>
          <p className="features-description">
            Easy ordering with live tracking<br />
            and food visuals Clean minimal<br />
            design for a seamless experience
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
