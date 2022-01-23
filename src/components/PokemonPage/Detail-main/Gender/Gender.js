import React from 'react';
import useNoData from '../../../customHooks/useNoData';
import './Gender.scss';

const female = '♀';
const male = '♂';
const genderless = 'unknown';

const View = ({ data }) => (
    data.map((item, index) => (
        <li className="gender__item" key={index}>
            {
                item === 'male' ? male :
                item === 'female' ? female :
                genderless
            }
        </li>
    ))
)

const Gender = ({ data = [] }) => {
    return (
        <div className="gender pokemon__info">
            <h3 className="gender__headline pokemon__details-headline">Género</h3>
            <ul className="gender__list">
                {useNoData(data, <View data={data}/>)}
            </ul>
        </div>
    )
}

export default Gender;