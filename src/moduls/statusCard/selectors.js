import { createSelector } from 'reselect';

export const getStatusCardStatus = createSelector(state => state.statusCard.status, status => status);