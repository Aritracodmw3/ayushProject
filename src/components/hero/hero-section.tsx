import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import '../styles/hero-section.css';
import '../styles/buttons.css';
import backgroundImg from "../../assets/images/background.jpg";
import ayushImg from "../../assets/images/ayush.jpg";
import researchImg from "../../assets/images/research1.jpg";
import instaImage from "../../assets/images/instagram.jpg";
import ayushBio from "../../assets/images/thanksu.jpg";
import ayushIntro from "../../assets/images/ayushIntro2.jpg";
import logo from "../../assets/images/logo_transparent.png";
import img1 from "../../assets/images/IMG1.jpg";
import img2 from "../../assets/images/IMG2.jpg";
import img3 from "../../assets/images/IMG3.jpg";
import img4 from "../../assets/images/IMG4.jpg";
import img5 from "../../assets/images/IMG5.jpg";
import img6 from "../../assets/images/IMG6.jpg";
import img7 from "../../assets/images/IMG7.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { text1, text2, text3 } from './texts';
import { text4, text5, text6, text7, text8, text9, text10 } from './texts';
import { text11, text12, text13, text14, text15 } from './texts';
import { text16, text17 } from './texts';
import { text18, text19, text20, text21, text22, text23, text24, text25 } from './texts';
import { mediaLinks } from './media-links';
import IntroComponent from '../intro-component/intro-component';
import ContactComponent from '../intro-component/contacts-components';
import GalleryComponent from '../intro-component/gallery-component';
import FooterBanner from '../intro-component/footer-banner';

const HeroSection: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('welcome');
    const [animationClass, setAnimationClass] = useState<string>('fade-in');

    const introTexts = [text1, text2, text3];
    const ResearchTexts = [text4, text5, text6, text7, text8, text9, text10];
    const workExperienceTexts = [text11, text12, text13, text14, text15];
    const galleryImages = [img1, img2, img3, img4, img5, img6, img7];
    const galleryTexts = [text21, text22, text23, text18, text19, text20];

    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return <IntroComponent description={introTexts} mainTitle={"AYUSH BANNERJEE"} postImage={[ayushIntro]} subTitle={"PHd Candidate, NIT Raipur"} />;
            case 'home2':
                return <IntroComponent description={ResearchTexts} mainTitle={"MY RESEARCHES"} postImage={[researchImg]} subTitle={"So much to know.... So much to learn...."} />;
            case 'home3':
                return <IntroComponent mainTitle={"MY JOURNEY"} postImage={[ayushImg]} subTitle={"PHd Candidate, NIT Raipur"} list_items={workExperienceTexts} />;
            case 'home4':
                return <ContactComponent mainTitle={"FIND ME HERE"} postImage={[instaImage, ayushBio]} list_items={mediaLinks} finalNOte={text24}/>;
            case 'home5':
                return <GalleryComponent mainTitle={"GALLERY"} iamges={galleryImages} descriptions={galleryTexts} />;
            default:
                return null;
        }
    };

    useEffect(() => {
        // Trigger fade-out animation before switching content
        setAnimationClass('fade-out');

        // After fade-out completes, update the section and trigger fade-in
        const timeoutId = setTimeout(() => {
            setAnimationClass('fade-in');
        }, 200); // Match this to the duration of your fade-out animation

        return () => clearTimeout(timeoutId); // Clean up timeout on unmount
    }, [activeSection]);

    const handlePrev = () => {
        switch (activeSection) {
            case 'home': setActiveSection('welcome'); break;
            case 'home2': setActiveSection('home'); break;
            case 'home3': setActiveSection('home2'); break;
            case 'home4': setActiveSection('home5'); break;
            case 'home5': setActiveSection('home3'); break;
            case 'welcome': setActiveSection('home4'); break;
            default: setActiveSection('home');
        }
    };

    const handleNext = () => {
        switch (activeSection) {
            case 'welcome': setActiveSection('home'); break;
            case 'home': setActiveSection('home2'); break;
            case 'home2': setActiveSection('home3'); break;
            case 'home3': setActiveSection('home5'); break;
            case 'home5': setActiveSection('home4'); break;
            default: setActiveSection('welcome');
        }
    };

    // Swipeable handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev(),
    });

    return (
        <div className="hero-container" {...swipeHandlers}>
            <img src={backgroundImg} alt="Background" className="hero-background" />
            <div className="overlay">
                <div className='navbar-container'>
                    <div className="button-group">
                        <Button
                            variant="primary"
                            onClick={() => setActiveSection('welcome')}
                            className={`custom-buttons buttons-left ${activeSection === "welcome" ? "active_home"  : ""}`}
                        >
                            Home
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => setActiveSection('home')}
                            className={`custom-buttons buttons-center ${activeSection === "home" ? "active_home"  : ""}`}
                        >
                            About
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => setActiveSection('home2')}
                            className={`custom-buttons buttons-center ${activeSection === "home2" ? "active_home"  : ""}`}
                        >
                            Research
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => setActiveSection('home3')}
                            className={`custom-buttons buttons-center ${activeSection === "home3" ? "active_home"  : ""}`}
                        >
                            Works
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => setActiveSection('home5')}
                            className={`custom-buttons buttons-center ${activeSection === "home5" ? "active_home"  : ""}`}
                        >
                            Gallery
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => setActiveSection('home4')}
                            className={`custom-buttons buttons-right ${activeSection === "home4" ? "active_home"  : ""}`}
                        >
                            Contact
                        </Button>
                    </div>
                </div>
                <Row className={`hero-content-main ${animationClass}`}>
                    <div className='empty-container'>
                        {activeSection === "welcome" &&
                            <div className='quote-logo-container'>
                                <div className='logo-image-container'>
                                    <img src={logo} className='logo-image'/>
                                </div>
                                <div className='quote-of-day'>
                                    <div>{text16}</div>
                                    <div>{text17}</div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="content-section mt-3">
                        {renderContent()}
                    </div>
                </Row>
            </div>
            <FooterBanner messages={[text25]}/>
        </div>
    );
};

export default HeroSection;
