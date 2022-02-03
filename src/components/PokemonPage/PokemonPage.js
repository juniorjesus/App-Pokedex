import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainHeadline from '../MainHeadline';
import Stats from './Stats';
import Evolution from './Evolution';
import DetailMain from './Detail-main';
import DetailTypes from './Detail-types';
import Spinner from '../Spinner';
import NonExistentPage from '../404';
import getPokemonPage from '../../redux/pokemonPage/pokemonPageActions';
import useNavigationSm from '../customHooks/useNavigationSm';
import { cleanSearch } from '../../redux/pokemonList/pokemonListActions';
import useDocumentTitle from '../customHooks/useDocumentTitle';
import './PokemonPage.scss';

const PokemonPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { pokemonPage, pokemonPageLoading, pokemonPageError } = useSelector(state => state.pokemonPage);
    
    useNavigationSm();
    useDocumentTitle(
        pokemonPageError ? '404 - Page does not exists' : `Pokemon - ${id[0].toUpperCase()}${id.slice(1)}`
    );
    useEffect(() => dispatch(cleanSearch()), [dispatch]); 
    useEffect(() => dispatch(getPokemonPage(id)), [dispatch, id]);    

    if (pokemonPageError) {
        return <NonExistentPage />
    }

    if (pokemonPageLoading) {
        return <Spinner />
    }

    return (
        <section className="pokemon animate__animated animate__fadeIn animate__faster">
            <MainHeadline headline={pokemonPage.name} />
            <div className="pokemon__image">
                <img className="img" src={pokemonPage.image} alt={pokemonPage.name} />
            </div>
            <div className="pokemon__details pokemon__details--main">
                <DetailMain data={pokemonPage} />
            </div>
            <div className="pokemon__details pokemon__details--type">
                <DetailTypes data={pokemonPage} />
            </div>
            <div className="pokemon__details pokemon__details--stats">
                <Stats data={pokemonPage.stats} />
            </div>
            <div className="pokemon__details pokemon__details--evolution">
                <Evolution data={pokemonPage.evolution} />
            </div>
            <Link to={{ pathname: '/' }} className="pokemon__go-home link">Descubre más Pokemones</Link>
        </section>
    )
}

export default PokemonPage;