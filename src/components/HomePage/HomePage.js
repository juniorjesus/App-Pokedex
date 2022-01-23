import React from 'react';
import MainHeadline from '../MainHeadline';
import SearchList from './SearchList';
import Search from './Search';
import PokemonCards from './PokemonCards';
import './HomePage.scss';
import useNavigationSm from '../customHooks/useNavigationSm';
import useDocumentTitle from '../customHooks/useDocumentTitle';

const HomePage = () => {
    useDocumentTitle(`Pokemon`);
    useNavigationSm();

    return (
        <section className="home">
            <MainHeadline home />
            <div className="home__aside">
                <Search />
                <div className="home__search-result">
                    <SearchList />
                </div>
            </div>
            <div className="home__cards">
                <PokemonCards />
            </div>
        </section>
    )
}

export default HomePage;