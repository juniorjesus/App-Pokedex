import React from 'react';
import './Habitat.scss';

const Habitat = ({ data }) => (
    <div className="habitat pokemon__info">
        <h3 className="habitat__headline pokemon__details-headline">Hábitat</h3>
        <span className="habitat__info">{data}</span>
    </div>
)

export default Habitat;