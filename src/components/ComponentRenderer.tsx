import React from 'react';
import HeroBlock from './HeroBlock';
import TwoColumnBlock from './TwoColumnBlock';
import ImageGridBlock from './ImageGridBlock';
import { Component, HeroComponent, TwoColumnComponent, ImageGridComponent } from '@/types';

interface ComponentRendererProps {
  components: Component[];
  className?: string;
}

const ComponentRenderer: React.FC<ComponentRendererProps> = ({ 
  components, 
  className = '' 
}) => {
  if (!components || components.length === 0) {
    return (
      <div className={`component-renderer empty ${className}`}>
        <div className="empty-state">
          <h3>No components configured</h3>
          <p>Add some components to your layout to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`component-renderer ${className}`}>
      {components.map((component) => {
        if (!('type' in component) || !('id' in component)) {
          return null;
        }
        switch (component.type) {
          case 'HeroBlock':
            return <HeroBlock key={component.id} component={component as HeroComponent} />;
          case 'TwoColumnRow':
            return <TwoColumnBlock key={component.id} component={component as TwoColumnComponent} />;
          case 'ImageGrid':
            return <ImageGridBlock key={component.id} component={component as ImageGridComponent} />;
          default:
            console.warn(`Unknown component type: ${(component as { type?: string }).type}`);
            return (
              <div key={(component as { id?: string }).id || Math.random()} className="unknown-component">
                <p>Unknown component type: {(component as { type?: string }).type}</p>
              </div>
            );
        }
      })}
    </div>
  );
};

export default ComponentRenderer; 