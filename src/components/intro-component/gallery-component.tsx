import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import '../styles/hero-section.css';
interface GalleryComponentProps {
    mainTitle: string; 
    description?: any[];

}


const GalleryComponent: React.FC<GalleryComponentProps> = ({mainTitle, description}) => {
    return(
        <Container> 
        <Row className="hero-content">  
            <div className='intro-container'>

               
                
                <div className='title-description-container'>
                    <div className='title-subtitle-container'>
                        <div className='title'>{mainTitle}</div>
                      
                    </div>
                    
                    <div className='divider'></div> 

                    <div className='description-flex'>
                        {description?.map((image_item) => {
                            return (
                                
                            <div className="center-image-container">
                                <img src={image_item} alt="Center" className="center-image" />
                            </div>
                        
                            )
                        })}
                    </div>
            
                </div>    

            </div>
        </Row>

    </Container>
    )
}

export default GalleryComponent;