import { createSelector } from 'reselect';

export const getCurrentUser = createSelector(state => state.currentUser, currentUser => currentUser);