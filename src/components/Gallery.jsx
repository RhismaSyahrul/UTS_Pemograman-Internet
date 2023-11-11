import React from 'react'
import './component.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Garnish from '../assets/garnish.png'
import Outline from '../assets/MY PROJECT outline.png'
import coding from '../assets/coding card.png'
import UX from '../assets/UX card.png'
import desain from '../assets/desain card.png'
import photo from '../assets/Photo card.png'


function Gallery() {
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
      }, []);
    return(
        <div className="gallery" id='gallery'>
            <div className="gallery-container" data-aos="fade-right">
            <div className="hiasan" >
                <img src={Garnish} alt="kotak" className='kotak' />
                <img src={Outline} alt="outline" className='outline' />
            </div>
            <div className="konten">
                <h2>MY PROJECT</h2>
                <div className="main">
                    <div className="text">
                        <div className="desc">
                            <h3>Welcome To My Project Gallery</h3>
                            <p> Welcome to our Project Section! Here, you will discover a showcase of projects that I have worked on. Each project has been categorized and presented in card format within various categories. When you click on a project card, you will be directed straight to our GitHub, Instagram, and YouTube pages to view our project outcomes.</p>
                            <p>You can also utilize the button below to connect directly to our GitHub account.</p>
                        </div>
                        <div className='btn'data-aos="fade-up">
                        <a href="https://www.instagram.com/choiyoungdok" target="_blank" rel="noopener noreferrer"> SEE MORE</a>
                        </div>
                    </div>
                    <div className="card" data-aos="fade-left">
                        <img src={coding} alt="coding" className="kartu coding" />
                        <img src={UX} alt="ux" className="kartu ux" />
                        <img src={desain} alt="desain" className="kartu desain" />
                        <img src={photo} alt="photo" className="kartu photo" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Gallery