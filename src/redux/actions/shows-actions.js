import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    SHOWS_LIST_REQUEST,
    SHOWS_LIST_SUCCEEDED,
    SHOWS_LIST_ERROR,
    CLEAR_SHOWS_LIST,
} from "../types/shows-types";

const URL = "http://localhost:9005/api/show";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const showsList = (movieId) => (dispatch) => {
    dispatch({ type: SHOWS_LIST_REQUEST });

    api.get(`${URL}/movie-id/${movieId}`, {
        delay: 0,
    })
        .then((response) =>{
            if (response.data.status === 200) {
                dispatch({
                    type: SHOWS_LIST_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: SHOWS_LIST_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch((error) =>{
            console.log(error);
        });
};

export function clearShowsList() {
    return {
        type: CLEAR_SHOWS_LIST,
        payload: null,
    };
}
