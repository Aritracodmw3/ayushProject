import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import '../styles/hero-section.css';
interface IntroComponentProps {
    mainTitle: string; 
    subTitle: string; 
    description?: string[] | JSX.Element[];
    postImage: any[];
    list_items?: string[] | JSX.Element[];
}


const IntroComponent: React.FC<IntroComponentProps> = ({mainTitle, subTitle, description, postImage, list_items}) => {
    return(
        <Container> 
        <Row className="hero-content">  
            <div className='intro-container'>

                <div className="center-image-container">
                    {postImage?.map((image_item) => {
                        return (<img src={image_item} alt="Center" className="center-image" />)
                    })}
                    
                </div>
                
                <div className='title-description-container'>
                    <div className='title-subtitle-container'>
                        <div className='title'>{mainTitle}</div>
                        <div className='subtitle'>{subTitle}</div>
                    </div>
                    
                    <div className='divider'></div> 

                    {
                        description && description.length && description.map((text_item) => {
                            return (
                                <div className='description'>
                                    {text_item}
                                </div>
                            )
                        })
                    }
                    {
                        list_items && list_items.length && list_items?.map((listItem) =>{
                            return (
                                <div className='list-items'>
                                    {listItem}
                                </div>
                            )
                        })
                    }
            
                </div>    

            </div>
        </Row>

    </Container>
    )
}

export default IntroComponent;