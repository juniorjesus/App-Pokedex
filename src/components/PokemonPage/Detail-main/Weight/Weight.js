import React from 'react';
import './Weight.scss';

const Weight = ({ data }) => (
    <div className="weight pokemon__info">
        <h3 className="weight__headline pokemon__details-headline">Peso</h3>
        <span className="weight__info">{data} kg</span>
    </div>
)

export default Weight;