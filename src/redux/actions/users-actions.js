import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCEEDED,
    REGISTRATION_ERROR,
    CLEAR_REGISTRATION_DETAILS,
} from "../types/user-types";

const URL = "http://localhost:9005/api/user";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const userRegistration = (user) => (dispatch) => {
    dispatch({ type: REGISTRATION_REQUEST });

    api.post(`${URL}`, user, {
        delay: 2000,
    })
        .then((response) => {
            if (response.data.status === 200) {
                dispatch({
                    type: REGISTRATION_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: REGISTRATION_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch((error, response) => {
            console.log(error);
        });
};

export function clearRegistrationDetails() {
    return {
        type: CLEAR_REGISTRATION_DETAILS,
        payload: null,
    };
}
