import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './404.scss';

const NonExistentPage = () => {
    const backButton = useRef(null);
    const { goBack } = useHistory();

    useEffect(() => backButton.current.focus(), []);

    return (
        <div className="non-existent-page">
            <div className="non-existent-page__text">
                <h1>404</h1>
                <p>Página no encontrada</p>
                <button className="non-existent-page__back" ref={backButton} onClick={goBack}>Volver!</button>
            </div>
        </div>
    )
}

export default NonExistentPage;