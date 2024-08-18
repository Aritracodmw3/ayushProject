import React from 'react';
import '../styles/footerBanner.css';

interface FooterBannerProps{
    messages: string[];
}

const FooterBanner: React.FC<FooterBannerProps> = ({ messages }) => {
  return (
    <div className="footer-banner">
      { messages && messages.map((message_item) => {
        return (
            <div className='footer-banner-message'>{message_item}</div>
        )
      })}
    </div>
  );
};

export default FooterBanner;
