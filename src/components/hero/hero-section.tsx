import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/hero-section.css';
import '../styles/buttons.css';
import backgroundImg from "../../assets/images/background.jpg";
import ayushImg from "../../assets/images/ayush.jpg";
import researchImg from "../../assets/images/research1.jpg"
import instaImage from "../../assets/images/instagram.jpg";
import ayushBio from "../../assets/images/ayushbio.jpg";
import ayushIntro from "../../assets/images/ayushIntro2.jpg";
import journey2 from "../../assets/images/journey2_copy.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { text1, text2, text3,  } from './texts';
import {    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10} from './texts';
import {     text11,
    text12,
    text13,
    text14,text15} from './texts';   
import IntroComponent from '../intro-component/intro-component';

const HeroSection: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const introTexts = [text1, text2, text3];
    const ResearchTexts = [ text4, text5, text6,  text7, text8, text9, text10];
    const workExperienceTexts = [ text11, text12, text13, text14, text15];

    const mediaLinks = [
                        <div className='custom-link'>
                            <a href="https://www.linkedin.com/in/ayush-banerjeedatascientist?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                <i className="bi bi-linkedin">Ayush Bannerjee</i>                            
                            </a>
                        </div>,
                        <div className='custom-link'>
                            <a href="https://www.instagram.com/ayushbanerjee18?utm_source=qr&igsh=d2d1MDVrYTQzYWNo" target="_blank">
                                <i className="bi bi-instagram">ayushbanerjee18</i>
                            </a>
                        </div>,
                        <div className='custom-link'>
                            <a href="https://x.com/ayushbhai1807?t=_sLykQW4fM0bdhtawrJ4nQ&s=08" target="_blank">                           
                                <i className="bi bi-twitter">ayushbhai1807</i>                            
                            </a>
                        </div>,
                        <div className='custom-link'>
                            <a href="https://www.facebook.com/ayush.banerjee.378?mibextid=ZbWKwL" target="_blank">                           
                                <i className="bi bi-facebook">ayush.banerjee.378</i>                            
                            </a>
                        </div>,
                        <div className='custom-link'>    
                                                                            
                                <i className="bi bi-envelope">ayushbanerjee18@outlook.com</i> 
                            
                        </div>,
                        <div className='custom-link'>                                                      
                                <i className="bi bi-phone">95662 15595</i> 
                        </div>,
                        <div className='custom-link'>                                                      
                                <i className="bi bi-whatsapp">95662 15595</i> 
                        </div>,
    ] 
    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return <IntroComponent description={introTexts} mainTitle={"AYUSH BANNERJEE"} postImage={[ayushIntro]} subTitle={"PHd Candidate, NIT Raipur"} />;
            case 'home2':
                return <IntroComponent description={ResearchTexts} mainTitle={"MY RESEARCHES"} postImage={[researchImg]} subTitle={""} />;
            case 'home3':
                return <IntroComponent  mainTitle={"MY JOURNEY"} postImage={[ayushImg]} subTitle={"PHd Candidate, NIT Raipur"} list_items={workExperienceTexts}/>;
            case 'home4':
                return (
                    <IntroComponent  mainTitle={"FIND ME HERE"} postImage={[ayushBio,instaImage]} subTitle={"....."} description={mediaLinks}/> 
                )
            default:
                return null;
        }
    };

    return (
        <div className="hero-container">
            <img src={backgroundImg} alt="Background" className="hero-background" />
            <div className="overlay">
                <Row className='hero-content-main'>
                    <div className="button-group">
                        <Button variant="primary" onClick={() => setActiveSection('home')} className='custom-buttons buttons-left'>Home</Button>
                        <Button variant="primary" onClick={() => setActiveSection('home2')} className='custom-buttons buttons-center'>Research</Button>
                        <Button variant="primary" onClick={() => setActiveSection('home3')} className='custom-buttons buttons-center'>Works</Button>
                        <Button variant="primary" onClick={() => setActiveSection('home4')} className='custom-buttons buttons-right'>Contact</Button>
                    </div>
                    <div className='empty-container'></div>
                    <div className="content-section mt-3">
                        {renderContent()}
                    </div>
                </Row>
            </div>
           
        </div>
    );
};

export default HeroSection;
