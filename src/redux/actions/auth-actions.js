import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCEEDED,
    CLEAR_LOGIN_DETAILS,
} from "../types/auth-types";

import Cookies from "universal-cookie";

const cookies = new Cookies();

const URL = "http://localhost:9005/api/auth";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const authenticateUser = (values) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    api.post(
        `${URL}/login`,
        {
            email: values.email,
            password: values.password,
        },
        { delay: 2000 }
    )
        .then((response) =>{
            if (response.data.status === 200) {
                dispatch({
                    type: LOGIN_SUCCEEDED,
                    payload: response.data.body,
                });

                if (values.keepLogged) {
                    cookies.set("iua_cin", "true");
                    cookies.set("at_cin", `${response.data.body.token}`);
                    cookies.set(
                        "aun_cin",
                        `${response.data.body.user.username}`
                    );
                    cookies.set("aui_cin", `${response.data.body.user.id}`);
                } else {
                    cookies.set("iua_cin", "true", {
                        maxAge: "14400",
                    });
                    cookies.set("at_cin", `${response.data.body.token}`, {
                        maxAge: "14400",
                    });

                    cookies.set(
                        "aun_cin",
                        `${response.data.body.user.username}`,
                        {
                            maxAge: "14400",
                        }
                    );
                    cookies.set("aui_cin", `${response.data.body.user.id}`, {
                        maxAge: "14400",
                    });
                }
            } else {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: response.data.message,
                });
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};

export function clearLoginDetails() {
    return {
        type: CLEAR_LOGIN_DETAILS,
        payload: null,
    };
}
