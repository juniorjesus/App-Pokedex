import React from 'react';
import { useLocation } from 'react-router-dom';
import Weaknesses from './Weaknesses';
import Strengths from './Strengths';
import Type from './Type';
import FilteredTypes from './FilteredTypes';

const DetailTypes = ({ data: { types, weaknesses, strengths } }) => {
    const { search } = useLocation();
    const type = new URLSearchParams(search).get('type');

    if (type) {
        return <FilteredTypes type={type}/>
    }

    return (
        <>
            <Type data={types} />
            <Weaknesses data={weaknesses} />
            <Strengths data={strengths} />
        </>
    )
}

export default DetailTypes;