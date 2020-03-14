import { createActions } from 'redux-actions';

export const {
    fetchRouteRequest,
    fetchRouteSuccess,
    fetchRouteFailure,
    } = createActions(
    'FETCH_ROUTE_REQUEST',
    'FETCH_ROUTE_SUCCESS',
    'FETCH_ROUTE_FAILURE');