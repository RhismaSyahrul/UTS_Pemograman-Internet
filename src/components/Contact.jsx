import React, { useEffect } from 'react';
import './component.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaGithub, FaYoutube, FaTelegram, FaLinkedin } from 'react-icons/fa';
import Garnish from '../assets/garnish.png';
import Outline from '../assets/CONTACT ME outline.png';

function Contact() {
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

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className='hiasan' data-aos="fade-right">
          <img src={Garnish} alt="kotak" className='kotak' />
          <img src={Outline} alt="outline" className='outline' />
        </div>
        <div className="konten">
          <h2>CONTACT ME</h2>
          <div className="main">
            <div className="form" data-aos="fade-up">
              <form>
                <label>
                  Nama:
                  <input type="text" name="name" disabled />
                </label>
                <br />
                <label>
                  Email:
                  <input type="email" name="email" disabled />
                </label>
                <br />
                <label>
                  Messages:
                  <textarea name="message" disabled />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="getInTouch" data-aos="fade-left">
              <h3>Get In Touch: </h3>
              <div className="sosmed">
                <a href="https://www.instagram.com/choiyoungdok" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={35} />
                </a>
                <a href="https://github.com/RhismaSyahrul" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={35} />
                </a>
                <a href="https://www.youtube.com/@BabalionGrup" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={35} />
                </a>
                <a href="https://t.me/Choiyoungdok" target="_blank" rel="noopener noreferrer">
                  <FaTelegram size={35} />
                </a>
                <a href="https://www.linkedin.com/in/rhisma-syahrul-putra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
