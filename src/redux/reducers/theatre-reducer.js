import {
    USERS_LIST_REQUEST,USERS_LIST_SUCCEEDED, USERS_LIST_ERROR, REGISTRATION_REQUEST, REGISTRATION_SUCCEEDED,REGISTRATION_ERROR, CLEAR_REGISTRATION_DETAILS,
} from "../types/user-types.js";
import {
    LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCEEDED,CLEAR_LOGIN_DETAILS,
} from "../types/auth-types.js";
import {
    MOVIE_DETAILS_REQUEST,MOVIE_DETAILS_SUCCEEDED,MOVIE_DETAILS_ERROR,NOW_PLAYING_MOVIES_REQUEST,NOW_PLAYING_MOVIES_SUCCEEDED,NOW_PLAYING_MOVIES_LIST_ERROR,MOVIES_LIST_REQUEST,MOVIES_LIST_SUCCEEDED,MOVIES_LIST_ERROR,CLEAR_MOVIE_DETAILS,
} from "../types/movies-types.js";
import {
    SHOWS_LIST_REQUEST,SHOWS_LIST_SUCCEEDED,SHOWS_LIST_ERROR,CLEAR_SHOWS_LIST,
} from "../types/shows-types.js";
import {
    TICKETS_LIST_USER_REQUEST,TICKETS_LIST_USER_SUCCEEDED,TICKETS_LIST_USER_ERROR,CLEAR_TICKETS_LIST_USER,TICKET_BOOKING_REQUEST,TICKET_BOOKING_SUCCEEDED,TICKET_BOOKING_ERROR,CLEAR_TICKET_BOOKING,TICKET_CANCEL_REQUEST,TICKET_CANCEL_SUCCEEDED,TICKET_CANCEL_ERROR,
} from "../types/tickets-types.js";




export function auth_reducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loginRequest: true };
        case LOGIN_SUCCEEDED:
            return {
                ...state,
                authenticatedUser: action.payload.user,
                authenticationToken: action.payload.token,
                isUserAuthenticated: true,
                loginRequest: false,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loginError: action.payload,
                isUserAuthenticated: false,
                loginErrorOccurred: true,
                loginRequest: false,
            };
        case CLEAR_LOGIN_DETAILS:
            return {
                ...state,
                loginError: action.payload,
                isUserAuthenticated: null,
                loginErrorOccurred: null,
                loginRequest: null,
            };

        default:
            return state;
    }
}

export function movies_reducer(state = {}, action) {
    switch (action.type) {
        case MOVIES_LIST_REQUEST:
            return { ...state, moviesRequest: true };
        case MOVIES_LIST_SUCCEEDED:
            return {
                ...state,
                moviesList: action.payload,
                moviesRequest: false,
            };
        case MOVIES_LIST_ERROR:
            return {
                ...state,
                moviesError: action.payload,
                moviesRequest: false,
            };

        case NOW_PLAYING_MOVIES_REQUEST:
            return { ...state, nowPlayingMoviesRequest: true };
        case NOW_PLAYING_MOVIES_SUCCEEDED:
            return {
                ...state,
                nowPlayingMoviesList: action.payload,
                nowPlayingMoviesRequest: false,
            };
        case NOW_PLAYING_MOVIES_LIST_ERROR:
            return {
                ...state,
                nowPlayingMoviesError: action.payload,
                nowPlayingMoviesRequest: false,
            };

        case MOVIE_DETAILS_REQUEST:
            return { ...state, movieRequest: true };
        case MOVIE_DETAILS_SUCCEEDED:
            return {
                ...state,
                movieDetails: action.payload,
                movieRequest: false,
            };
        case MOVIE_DETAILS_ERROR:
            return {
                ...state,
                movieError: action.payload,
                movieRequest: false,
            };
        case CLEAR_MOVIE_DETAILS:
            return { ...state, movieDetails: action.payload };
        default:
            return state;
    }
}

export function shows_reducer(state = {}, action) {
    switch (action.type) {
        case SHOWS_LIST_REQUEST:
            return { ...state, showsListRequest: true };
        case SHOWS_LIST_SUCCEEDED:
            return {
                ...state,
                showsList: action.payload,
                showsListRequest: false,
            };
        case SHOWS_LIST_ERROR:
            return {
                ...state,
                showsListError: action.payload,
                showsListRequest: false,
            };
        case CLEAR_SHOWS_LIST:
            return { ...state, showsList: action.payload };
        default:
            return state;
    }
}

export function tickets_reducer(state = {}, action) {
    switch (action.type) {
        case TICKETS_LIST_USER_REQUEST:
            return { ...state, ticketsListUserRequest: true };
        case TICKETS_LIST_USER_SUCCEEDED:
            return {
                ...state,
                ticketsListUser: action.payload,
                ticketsListUserRequest: false,
            };
        case TICKETS_LIST_USER_ERROR:
            return {
                ...state,
                ticketsListUserError: action.payload,
                ticketsListUserRequest: false,
            };
        case CLEAR_TICKETS_LIST_USER:
            return {
                ...state,
                ticketsListUser: action.payload,
            };

        case TICKET_BOOKING_REQUEST:
            return { ...state, ticketBookingRequest: true };
        case TICKET_BOOKING_SUCCEEDED:
            return {
                ...state,
                ticketBooked: action.payload,
                ticketBookingRequest: false,
                ticketBookingSucceeded: true,
                ticketBookingErrorOccurred: false,
            };
        case TICKET_BOOKING_ERROR:
            return {
                ...state,
                ticketBookingError: action.payload,
                ticketBookingRequest: false,
                ticketBookingSucceeded: false,
                ticketBookingErrorOccurred: true,
            };

        case CLEAR_TICKET_BOOKING:
            return {
                ...state,
                ticketBooked: action.payload,
                ticketBookingSucceeded: action.payload,
                ticketBookingRequest: action.payload,
                ticketBookingError: action.payload,
                ticketBookingErrorOccurred: action.payload,
            };

        case TICKET_CANCEL_REQUEST:
            return { ...state, ticketCancelRequest: true };
        case TICKET_CANCEL_SUCCEEDED:
            return {
                ...state,
                ticketCancel: action.payload,
                ticketCancelRequest: false,
            };
        case TICKET_CANCEL_ERROR:
            return {
                ...state,
                ticketCancelError: action.payload,
                ticketCancelRequest: false,
            };
        default:
            return state;
    }
}

export function users_reducer(state = {}, action) {
    switch (action.type) {
        case USERS_LIST_REQUEST:
            return { ...state, usersListRequest: true };
        case USERS_LIST_SUCCEEDED:
            return {
                ...state,
                usersList: action.payload,
                usersListRequest: false,
            };
        case USERS_LIST_ERROR:
            return {
                ...state,
                usersListError: action.payload,
                usersListRequest: false,
            };

        case REGISTRATION_REQUEST:
            return { ...state, registrationRequest: true };
        case REGISTRATION_SUCCEEDED:
            return {
                ...state,
                registeredUser: action.payload,
                registrationSucceeded: true,
                registrationRequest: false,
            };
        case REGISTRATION_ERROR:
            return {
                ...state,
                registrationError: action.payload,
                registrationErrorOccurred: true,
                registrationRequest: false,
                registrationSucceeded: false,
            };
        case CLEAR_REGISTRATION_DETAILS:
            return {
                ...state,
                registeredUser: action.payload,
                registrationError: action.payload,
                registrationRequest: action.payload,
                registrationSucceeded: action.payload,
                registrationErrorOccurred: action.payload,
            };
        default:
            return state;
    }
}

