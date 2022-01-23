import React from 'react';
import './Category.scss';

const Category = ({ data }) => (
    <div className="category pokemon__info">
        <h3 className="category__headline pokemon__details-headline">Categoría:</h3>
        <span className="category__info">{data}</span>
    </div>
)

export default Category;