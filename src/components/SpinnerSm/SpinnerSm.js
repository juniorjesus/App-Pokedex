import React from 'react';
import './SpinnerSm.scss';

const SpinnerSm = ({ show }) => {
    let className = "loadingio-spinner-spinner-6uc1nwdc91a";

    if (show) {
        className += ' loading'
    }

    return (
        <div className={className}><div className="ldio-qff3vccm6lj">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
    )
}

export default SpinnerSm;