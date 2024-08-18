import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/navigation-buttons.css';

type NavigationButtonsProps = {
    onPrev: () => void;
    onNext: () => void;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrev, onNext }) => {
    return (
        <div className='navigation-buttons-sides-container'>
            <Button className="navigation-button prev-button" onClick={onPrev}>
                &lt;
            </Button>
            <Button className="navigation-button next-button" onClick={onNext}>
                &gt;
            </Button>
        </div>
    );
};

export default NavigationButtons;
