import React from 'react';
import useDocumentTitle from '../customHooks/useDocumentTitle';
import useNavigationSm from '../customHooks/useNavigationSm';
import './AdditionalPage.scss'

const AdditionalPage = () => {
    useNavigationSm();
    useDocumentTitle('Additional Page');

    return (
        <div className='pokemon'>
            <section>
            <h1>Adiciona tus pokemones Favoritos!</h1>
        </section>

        </div>
        
    )
}

export default AdditionalPage;
