export default class PokemonService {
    apiBase = 'https://pokeapi.co/api/v2/';

    getResource = async (url) => {
        const result = await fetch(`${this.apiBase}${url}`);

        if (!result.ok) {
            throw new Error(`Could not fetch ${this.apiBase}${url}`);
        }

        return await result.json();
    }

    getMorePokemons = async (limit, offset) => {
        const { results } = await this.getResource(`pokemon/?limit=${limit}&offset=${offset}`);

        const dataResponse = await Promise.allSettled(results.map(({ url }) => fetch(url)));
        const dataSuccess = dataResponse.filter(resp => resp.status === 'fulfilled' && resp.value.ok).map(item => item.value);
        const dataArray = await Promise.all(dataSuccess.map(data => data.json()));


        return dataArray.map(pokemon => {
            return {
                name: this._isDataAvailable(pokemon.name),
                image: this._isDataAvailable(pokemon.sprites?.other?.['official-artwork']?.['front_default']),
                id: this._isDataAvailable(pokemon.id)
            }
        })
    }

    getAllPokemons = async () => {
        const { results } = await this.getResource('pokemon/?limit=898');

        return results.map((pokemon, index) => {
            return {
                name: this._isDataAvailable(pokemon.name),
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
            }
        })
    }

    getCurrentPokemon = async (pokemonName) => {
        const { abilities, height, weight, name, id, species, sprites, stats, types } = await this.getResource(`pokemon/${pokemonName}`);

        const pokemonAbilities = await this.getPokemonAbilities(abilities);
        const category = await this.getPokemonCategory(species);
        const habitat = await this.getPokemonHabitat(species);
        const weaknesses = await this.getPokemonWeaknesses(types);
        const strengths = await this.getPokemonStrengths(types);
        const gender = await this.getPokemonGender(pokemonName);
        const evolution = await this.getPokemonEvolution(species);
        const description = await this.getPokemonDescription(species);
        const image = this.getPokemonImage(sprites);
        const pokemonTypes = this.getPokemonTypes(types);
        const pokemonStats = this.getPokemonStats(stats);

        return {
            name,
            image,
            description,
            gender,
            height: height / 10,
            weight: weight / 10,
            abilities: pokemonAbilities,
            id,
            types: pokemonTypes,
            category,
            habitat,
            weaknesses,
            strengths,
            stats: pokemonStats,
            evolution
        }
    }

    getPokemonDescription = async ({ url }) => {
        const pokemonDescriptionResponse = await fetch(url);
        const pokemonDescriptionResult = await pokemonDescriptionResponse.json();
        const description = pokemonDescriptionResult['flavor_text_entries'].find(item => item?.language?.name === 'en')?.['flavor_text'];

        if (description) {
            return description.replace(/(\n|\f|\t|\v)/g, ' ').replace('POKéMON', 'pokemon');
        }

        return this._isDataAvailable(description);
    }

    getPokemonEvolution = async ({ url }) => {
        const speciesResponse = await fetch(url);
        const speciesResult = await speciesResponse.json();
        const pokemonEvolutionResponse = await fetch(speciesResult['evolution_chain']?.url);
        const pokemonEvolutionResult = await pokemonEvolutionResponse.json();
        const evolutionChain = [];

        const getChain = (obj) => {
            let currentObj = obj;

            const recursive = (obj) => {
                for (let key in obj) {
                    if (key === 'evolves_to') {
                        evolutionChain.push(obj.species.name);
                        currentObj = obj[key][0];
                        recursive(currentObj);
                    }
                }
            }
            recursive(currentObj);

        }
        getChain(pokemonEvolutionResult?.chain);

        const getImages = async (data) => {
            const evolutionMatchedArrays = await Promise.all(data.map(item => this.getResource(`pokemon/${item}`)));

            return evolutionMatchedArrays.map(pokemon => {
                return {
                    name: this._isDataAvailable(pokemon.name),
                    image: this._isDataAvailable(pokemon.sprites?.other?.['official-artwork']?.['front_default']),
                    id: this._isDataAvailable(pokemon.id)
                }
            })
        }

        return await getImages(evolutionChain);
    }

    getPokemonStats = data => {
        return data.map(item => ({ [item.stat.name]: item['base_stat'] }));
    }

    getPokemonStrengths = async (data) => {
        const pokemonStrengthsResponse = await Promise.all(data.map(item => fetch(item.type?.url)));
        const pokemonStrengthsResult = await Promise.all(pokemonStrengthsResponse.map(item => item.json()));
        const strengths = new Set();

        pokemonStrengthsResult.forEach(item => item['damage_relations']?.['double_damage_to'].forEach(item => strengths.add(item.name)));

        return [...strengths];
    }

    getPokemonWeaknesses = async (data) => {
        const pokemonWeaknessesResponse = await Promise.all(data.map(item => fetch(item.type?.url)));
        const pokemonWeaknessesResult = await Promise.all(pokemonWeaknessesResponse.map(item => item.json()));
        const weaknesses = new Set();

        pokemonWeaknessesResult.forEach(item => item['damage_relations']?.['double_damage_from'].forEach(item => weaknesses.add(item.name)));

        return [...weaknesses];
    }

    getPokemonCategory = async ({ url }) => {
        const pokemonCategoryResponse = await fetch(url);
        const pokemonCategoryResult = await pokemonCategoryResponse.json();
        const category = pokemonCategoryResult.genera.find(item => item.language?.name === 'en')?.genus;

        return this._isDataAvailable(category.replace('Pokémon', ''));
    }

    getPokemonHabitat = async ({ url }) => {
        const pokemonHabitatResponse = await fetch(url);
        const pokemonHabitatResult = await pokemonHabitatResponse.json();
        const { habitat } = pokemonHabitatResult;

        return this._isDataAvailable(habitat?.name);
    }

    getPokemonAbilities = async (data) => {
        const abilitiesToShow = data.filter(item => !item['is_hidden']);
        const pokemonAbilitiesResponse = await Promise.all(abilitiesToShow.map(item => fetch(item.ability?.url)));
        const pokemonAbilitiesResult = await Promise.all(pokemonAbilitiesResponse.map(data => data.json()));

        const transformAbilityName = name => {
            const transformedName = name.split('').map(item => item === '-' ? ' ' : item).join('');

            return `${transformedName[0].toUpperCase()}${transformedName.slice(1)}`;
        }

        const abilities = pokemonAbilitiesResult.map(item => {
            const text = item?.['flavor_text_entries']?.find(item => item.language.name === 'en' && item?.['version_group']?.['name'] === 'sun-moon')?.['flavor_text'];

            return {
                name: this._isDataAvailable(transformAbilityName(item.name)),
                description: this._isDataAvailable(text)
            }
        })

        return abilities;
    }

    getPokemonImage = data => {
        return this._isDataAvailable(data.other?.['official-artwork']?.['front_default']);
    }

    getPokemonGender = async (data) => {
        const genderUrls = [
            'https://pokeapi.co/api/v2/gender/1',
            'https://pokeapi.co/api/v2/gender/2',
            'https://pokeapi.co/api/v2/gender/3'
        ];

        const pokemonGenderResponse = await Promise.all(genderUrls.map(url => fetch(url)));
        const pokemonGenderResult = await Promise.all(pokemonGenderResponse.map(data => data.json()));

        const gender = pokemonGenderResult.filter(genderData => {
            return genderData['pokemon_species_details']?.find(genderItem => genderItem['pokemon_species']?.['name'] === data);
        })

        return gender.map(({ name }) => name);
    }

    getPokemonTypes = data => {
        return data.map(({ type: { name } }) => name);
    }

    getFilteredTypes = async (type) => {
        const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const { pokemon } = await typeResponse.json();

        return pokemon.map(({ pokemon: { name } }) => ({ name }));
    }

    _isDataAvailable = data => {
        return data ? data : 'No data'
    }
}