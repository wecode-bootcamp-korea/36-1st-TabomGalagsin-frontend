import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToUrl } from '../../../../utils';
import './CategoryImage.scss';

function CategoryImage({ className, url, text, categoryId }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => goToUrl(navigate, `/categories/1/type/${categoryId}`)}
      className="categoryImage"
    >
      <img className={className} src={url} alt={className} />
      <p>{text}</p>
    </div>
  );
}

export default CategoryImage;
