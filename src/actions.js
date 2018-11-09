import {TYPES} from "./action-types";
import axios from "axios";


export const selectArticle = (article) => {
    return {
        type: TYPES.SELECT_ARTICLE,
        article

    }
};

export const loadCountries = (dispatch, id) => {
    dispatch({
        type: TYPES.LOAD_COUNTRIES_STARTED
    });
    axios.get('https://apifootball.com/api/?action=get_events&from=2018-11-01&to=2018-11-09&league_id='+id+'&APIkey=5956c890d985b1cc22e8729723c531ae15a39925004d2f42dfa636d6ef4ea9e8')
        .then((response) => {
            dispatch({
                type: TYPES.LOAD_COUNTRIES,
                data: Object.values(response.data)
            })
        })
        .catch((e) => {
            dispatch({
                type: TYPES.LOAD_COUNTRIES_FAILED
            });
        });
};

export const loadGame= (dispatch, id) => {
    dispatch({
        type: TYPES.LOAD_GAME_STARTED
    });
    axios.get('https://apifootball.com/api/?action=get_events&match_id=' + id + '&APIkey=5956c890d985b1cc22e8729723c531ae15a39925004d2f42dfa636d6ef4ea9e8')
        .then((response) => {
            dispatch({
                type: TYPES.LOAD_GAME,
                data: Object.values(response.data)
            })
        })
        .catch((e) => {
            dispatch({
                type: TYPES.LOAD_GAME_FAILED
            });
        });
};

export const loadLeagues = (dispatch) => {
    dispatch({
        type: TYPES.LOAD_LEAGUES_STARTED
    });
    axios.get('https://apifootball.com/api/?action=get_leagues&APIkey=5956c890d985b1cc22e8729723c531ae15a39925004d2f42dfa636d6ef4ea9e8')
        .then((response) => {
            dispatch({
                type: TYPES.LOAD_LEAGUES,
                data: Object.values(response.data)
            })
        })
        .catch((e) => {
            dispatch({
                type: TYPES.LOAD_LEAGUES_FAILED
            });
        });
};