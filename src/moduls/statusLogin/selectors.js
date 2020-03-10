import { createSelector } from 'reselect';

export const getStatusLoginStatus = createSelector(state => state.statusLogin.status, status => status);