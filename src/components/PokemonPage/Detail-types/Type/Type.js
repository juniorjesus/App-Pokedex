import React from 'react';
import useNoData from '../../../customHooks/useNoData';
import TypeItem from '../TypeItem';

const Type = ({ data = [] }) => (
    <div>
        <h3 className="pokemon__type-headline">Tipo</h3>
        <ul className="pokemon__type-list">
            {useNoData(data, <TypeItem data={data} />)}
        </ul>
    </div>
)

export default Type;