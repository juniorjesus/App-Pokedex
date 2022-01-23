import React from 'react';
import './Height.scss';

const Height = ({ data }) => (
    <div className="height pokemon__info">
        <h3 className="height__headline pokemon__details-headline">Altura:</h3>
        <span className="height__info">{data} m</span>
    </div>
)

export default Height;