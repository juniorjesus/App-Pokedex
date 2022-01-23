import React from 'react';
import './Description.scss';

const Description = ({ data }) => (
    <p className="description pokemon__description">{data}</p>
)

export default Description;