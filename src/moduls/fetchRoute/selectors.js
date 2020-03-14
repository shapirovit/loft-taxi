import { createSelector } from 'reselect';

export const getStatusOrderStatus = createSelector(state => state.statusOrder.status, status => status);
export const getRouteIsFetching = createSelector(state => state.fetchRoute.isFetching, isFetching => isFetching);
export const getRouteIsFetched = createSelector(state => state.fetchRoute.isFetched, isFetched => isFetched);
export const getRouteRoutees = createSelector(state => state.fetchRoute.Route, Route => Route);
export const getRouteError = createSelector(state => state.fetchRoute.error, error => error);