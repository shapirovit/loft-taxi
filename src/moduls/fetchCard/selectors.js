import { createSelector } from 'reselect';

export const getStatusCardStatus = createSelector(state => state.statusCard.status, status => status);
export const getToken = createSelector(state => state.statusLogin.token, token => token);
export const getCardIsFetching = createSelector(state => state.fetchCard.isFetching, isFetching => isFetching);
export const getFetchCardError = createSelector(state => state.fetchCard.error, error => error);