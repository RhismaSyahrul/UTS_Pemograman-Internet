import React from 'react'
import './component.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Me from '../assets/Me.png'
import CV from '../assets/2207225_Rhisma Syahrul Putra_CV2.pdf'

function Home () {

    useEffect(() => {
        const initAOS = async () => {
          await import('aos');
          AOS.init({
            duration: 1000,
            offset: 50,
            easing: 'ease-in-out',
          });
        };
    
        initAOS();
      }, [])
    
      const handleAboutClick = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <main className="main" id='home'>
            <img className='image-home' src={Me} alt="Rhisma Syahrul Putra" />

            <div className="konten" data-aos="fade-right">
                <div className="text">
                    <h3>HI I'AM</h3>
                    <h1>RHISMA</h1>
                    <h2>SYAHRUL PUTRA</h2>
                    <p>WELCOME TO MY PORTFOLIO</p>
                </div>
                <div className="button" data-aos="fade-up">
                    <a onClick={handleAboutClick}>About Me</a>
                    <a href={CV}>Download my CV</a>
                </div>
            </div>
        </main>
    );
}

export default Home;