import { createSelector } from 'reselect';

export const getUserIsFetching = createSelector(state => state.fetchUser.isFetching, isFetching => isFetching);
export const getUserIsFetched = createSelector(state => state.fetchUser.isFetched, isFetched => isFetched);
export const getUserStatus = createSelector(state => state.fetchUser.status, status => status);
export const getUserError = createSelector(state => state.fetchUser.error, error => error);