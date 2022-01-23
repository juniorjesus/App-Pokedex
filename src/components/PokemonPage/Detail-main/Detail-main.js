import React from 'react';
import Description from './Description';
import Weight from './Weight';
import Height from './Height';
import Gender from './Gender';
import Abilities from './Abilities';
import Category from './Category';
import Habitat from './Habitat';

const DetailMain = ({ data: { description, weight, height, gender, abilities, category, habitat } }) => (
    <>
        <Description data={description} />
        <Weight data={weight} />
        <Height data={height} />
        <Gender data={gender} />
        <Abilities data={abilities} />
        <Category data={category} />
        <Habitat data={habitat} />
    </>
)

export default DetailMain;