import React from 'react';
import Image from 'next/image';
import { ImageGridComponent } from '@/types';
import './ImageGridBlock.css';

interface ImageGridBlockProps {
  component: ImageGridComponent;
}

const ImageGridBlock: React.FC<ImageGridBlockProps> = ({ component }) => {
  return (
    <section className="image-grid-block">
      <div className="container">
        {component.title && (
          <div className="grid-header text-center fade-in">
            <h2 className="grid-title">
              {component.title}
            </h2>
          </div>
        )}
        
        <div className="image-grid slide-in-up">
          {component.images && component.images.length > 0 ? (
            component.images.slice(0, 4).map((image, index) => (
              <div key={index} className="grid-item">
                <div className="image-wrapper">
                  <Image
                    src={image.fields.file.url}
                    alt={image.fields.title}
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="grid-image"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            ))
          ) : (
            Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="grid-item">
                <div className="image-wrapper placeholder">
                  <span>Image {index + 1}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageGridBlock; 