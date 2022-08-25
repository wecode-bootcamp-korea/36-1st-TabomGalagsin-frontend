import React from 'react';
import './CategoryImage.scss';

function CategoryImage({ className, url, text }) {
  return (
    <div className="categoryImage">
      <img className={className} src={url} alt={className} />
      <p>{text}</p>
    </div>
  );
}

export default CategoryImage;
