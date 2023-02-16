import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    TICKET_BOOKING_REQUEST,
    TICKET_BOOKING_SUCCEEDED,
    TICKET_BOOKING_ERROR,
    CLEAR_TICKET_BOOKING,
    TICKET_CANCEL_REQUEST,
    TICKET_CANCEL_SUCCEEDED,
    TICKET_CANCEL_ERROR,
    TICKETS_LIST_USER_REQUEST,
    TICKETS_LIST_USER_ERROR,
    TICKETS_LIST_USER_SUCCEEDED,
    CLEAR_TICKETS_LIST_USER,

} from "../types/tickets-types";

const URL = "http://localhost:9005/api/ticket";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const ticketsListUser = (authenticatedUserId) => (dispatch) => {
    dispatch({ type: TICKETS_LIST_USER_REQUEST });

    api.get(`${URL}/auth-id/${authenticatedUserId}`, {
        delay: 500,
    })
        .then((response) =>{
            if (response.data.status === 200) {
                dispatch({
                    type: TICKETS_LIST_USER_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: TICKETS_LIST_USER_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch((error) =>{
            console.log(error);
        });
};

export function clearTicketsListUser() {
    return {
        type: CLEAR_TICKETS_LIST_USER,
        payload: null,
    };
}

export const ticketBooking = (ticket, movieId, authenticatedUserId) => (
    dispatch
) => {
    dispatch({ type: TICKET_BOOKING_REQUEST });

    api.post(`${URL}/${movieId}/${authenticatedUserId}`, ticket, {
        delay: 500,
    })
        .then((response) => {
            if (response.data.status === 200) {
                dispatch({
                    type: TICKET_BOOKING_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: TICKET_BOOKING_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch((error, response) => {
            console.log(error);
        });
};

export function clearTicketBooking() {
    return {
        type: CLEAR_TICKET_BOOKING,
        payload: null,
    };
}

export const cancelBookedTicket = (ticketId) => (dispatch) => {
    dispatch({ type: TICKET_CANCEL_REQUEST });

    api.post(`${URL}/${ticketId}`, {
        delay: 500,
    })
        .then((response) =>{
            if (response.data.status === 200) {
                dispatch({
                    type: TICKET_CANCEL_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: TICKET_CANCEL_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch((error) =>{
            console.log(error);
        });
};
