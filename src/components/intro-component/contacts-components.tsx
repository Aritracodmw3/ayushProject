
import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import '../styles/hero-section.css';
interface ContactComponentProps {
    mainTitle: string; 
    postImage: any[];
    list_items?: string[] | JSX.Element[];
    finalNOte: string;
}


const ContactComponent: React.FC<ContactComponentProps> = ({mainTitle, postImage, list_items, finalNOte}) => {
    return(
        <Container> 
        <Row className="hero-content">  
            <div className='intro-container'>

                <div className="center-image-container">                 
                    <img src={postImage[0]} alt="Center" className="center-image" />
                </div>
                
                <div className='title-description-container'>
                    <div className='title-subtitle-container'>
                        <div className='title'>{mainTitle}</div>
                    </div>
                    
                    <div className='divider'></div> 

                    {
                        list_items && list_items.length && list_items?.map((listItem) =>{
                            return (
                                <div className='list-items'>
                                    {listItem}
                                </div>
                            )
                        })
                    }
                    <div className='description'>{finalNOte}</div>


                </div>    

            </div>
        </Row>

    </Container>
    )
}

export default ContactComponent;