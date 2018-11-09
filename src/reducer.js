import {TYPES} from "./action-types";

const initState = {
    countries: [],
    leagues: [],
    game: [],
    article: 63
};

export const reducer =(prevState = initState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.SELECT_ARTICLE:
            return {...newState, article: action.article};

        case TYPES.LOAD_COUNTRIES:
            return {
                ...newState,
                countries: action.data,
                countriesIsLoading: false,
                countriesLoadFailed: false
            };

        case TYPES.LOAD_COUNTRIES_STARTED:
            return {...newState,
                countriesIsLoading: true,
                countriesLoadFailed: false
            };

        case TYPES.LOAD_COUNTRIES_FAILED:
            return {
                ...newState,
                countriesLoadFailed: true,
                countriesIsLoading: false
            };

        case TYPES.LOAD_LEAGUES:
            return {
                ...newState,
                leagues: action.data,
                leaguesIsLoading: false,
                leaguesLoadFailed: false
            };

        case TYPES.LOAD_LEAGUES_STARTED:
            return {...newState,
                leaguesIsLoading: true,
                leaguesLoadFailed: false
            };

        case TYPES.LOAD_LEAGUES_FAILED:
            return {
                ...newState,
                leaguesLoadFailed: true,
                leaguesIsLoading: false
            };

        case TYPES.LOAD_GAME:
            return {
                ...newState,
                game: action.data,
                gameIsLoading: false,
                gameLoadFailed: false
            };

        case TYPES.LOAD_GAME_STARTED:
            return {...newState,
                gameIsLoading: true,
                gameLoadFailed: false
            };

        case TYPES.LOAD_GAME_FAILED:
            return {
                ...newState,
                gameLoadFailed: true,
                gameIsLoading: false
            };
    }

    return newState
};