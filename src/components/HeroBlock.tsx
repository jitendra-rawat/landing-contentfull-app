import React from 'react';
import Image from 'next/image';
import { HeroComponent } from '@/types';
import './HeroBlock.css';

interface HeroBlockProps {
  component: HeroComponent;
}

const HeroBlock: React.FC<HeroBlockProps> = ({ component }) => {
  return (
    <section className="hero-block">
      {component.backgroundImage && (
        <div className="hero-background">
          <Image
            src={component.backgroundImage.fields.file.url}
            alt={component.backgroundImage.fields.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
      )}
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            {component.heading}
          </h1>
          <p className="hero-subtitle slide-in-up">
            {component.subtitle}
          </p>
          <div className="hero-cta slide-in-up">
            <a href={component.ctaLink} className="btn btn-primary btn-lg">
              {component.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock; 