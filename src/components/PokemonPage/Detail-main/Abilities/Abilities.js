import React from 'react';
import useNoData from '../../../customHooks/useNoData';
import './Abilities.scss';

const View = ({ data }) => (
    data.map((item, index) => (
        <li className="abilities__item" key={index}>{item.name}</li>
    ))
)

const Abilities = ({ data = [] }) => (
    <div className="abilities pokemon__info">
        <h3 className="abilities__headline pokemon__details-headline">Habilidades</h3>
        <ul className="abilities__list">
            {useNoData(data, <View data={data}/>)}
        </ul>
    </div>
)

export default Abilities;