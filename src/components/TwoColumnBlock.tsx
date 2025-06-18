import React from 'react';
import Image from 'next/image';
import { TwoColumnComponent } from '@/types';
import './TwoColumnBlock.css';

interface TwoColumnBlockProps {
  component: TwoColumnComponent;
}

const TwoColumnBlock: React.FC<TwoColumnBlockProps> = ({ component }) => {
  return (
    <section className="two-column-block">
      <div className="container">
        <div className="two-column-content">
          <div className="left-column fade-in">
            <h2 className="column-title">
              {component.leftHeading}
            </h2>
            <p className="column-subtitle">
              {component.leftSubtitle}
            </p>
            <div className="column-cta">
              <a href={component.leftCtaLink} className="btn btn-primary">
                {component.leftCtaText}
              </a>
            </div>
          </div>
          
          <div className="right-column slide-in-up">
            {component.rightImage ? (
              <div className="image-container">
                <Image
                  src={component.rightImage.fields.file.url}
                  alt={component.rightImage.fields.title}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="column-image"
                  priority
                />
              </div>
            ) : (
              <div className="placeholder-image">
                <span>Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnBlock; 