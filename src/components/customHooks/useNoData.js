import React from 'react';

const Nodata = () => (
    <li>No data</li>
)

const useNoData = (data, Component) => {
    return data.length === 0 ? <Nodata/> : Component;
}

export default useNoData;