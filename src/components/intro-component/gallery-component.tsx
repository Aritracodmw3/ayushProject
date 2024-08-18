import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import '../styles/hero-section.css';
interface GalleryComponentProps {
    mainTitle: string; 
    iamges?: any[];
    descriptions?: any[];
}


const GalleryComponent: React.FC<GalleryComponentProps> = ({mainTitle, iamges, descriptions}) => {
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
                        {iamges?.map((image_item,index) => {
                            return (                                
                            <div className="center-image-container">                                
                                {descriptions && descriptions[index] && 
                                    <div className='title-subtitle-container'>                                    
                                    <div className='subtitle'>{descriptions[index] || ""}</div>
                                </div>
                                }
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