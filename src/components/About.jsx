import React from 'react'
import './component.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Garnish from '../assets/garnish.png'
import Outline from '../assets/ABOUT ME outline.png'
import AboutMe from '../assets/me on about.png'

function About () {
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
    return(
        <div className="about" id='about'>
            <div className="about-container">
            <div className='hiasan' data-aos="fade-right">
               <img src={Garnish} alt="kotak" className='kotak' id='about' /> 
               <img src={Outline} alt="outline" className='outline' /> 
            </div>
            <div className="konten">
                <h2>ABOUT ME</h2>
                <div className="main">
                    <div className="introduce" data-aos="fade-up">
                        <div className="image-about">
                            <img src={AboutMe} alt="Rhisma Syahrul Putra" />
                        </div>
                        <div className="deskription" data-aos="fade-up">
                            <p>Hello, my name is Rhisma Syahrul Putra, with Student ID 2207225. I was born and raised in Bandung, Indonesia. Currently, I am pursuing my education at the University of Education Indonesia with a major in Computer Science Education.</p>
                            <p>I have a deep interest in the world of web design and web development. This drives me to continuously learn and enhance my skills in this field. I believe that web technology is a powerful medium for creating engaging and functional digital experiences.</p>
                        </div>
                    </div>
                    <div className='skill-box' data-aos="fade-left">
                        <h3>MY SKILL</h3>
                        <div className="skills">
                            <p>HTML & CSS</p>
                            <div className="con-skill">
                                <div className="kosong">
                                    <div className="skill html">90%</div>
                                </div>
                            </div>
                            <p>Javascript</p>
                            <div className="con-skill">
                                <div className="kosong">
                                    <div className="skill js">70%</div>
                                </div>
                            </div>
                            <p>Bootstrap</p>
                            <div className="con-skill">
                                <div className="kosong">
                                    <div className="skill bootstrap">90%</div>
                                </div>
                            </div>
                            <p>SASS</p>
                            <div className="con-skill">
                                <div className="kosong">
                                    <div className="skill sass">80%</div>
                                </div>
                            </div>
                            <p>Ract JS</p>
                            <div className="con-skill">
                                <div className="kosong">
                                    <div className="skill react">70%</div>
                                </div>
                            </div>
                            <p>Design Skill</p>
                            <div className="con-skill">
                                <div className="kosong">
                                    <div className="skill desain">90%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;