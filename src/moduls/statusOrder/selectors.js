import { createSelector } from 'reselect';

export const getStatusOrderStatus = createSelector(state => state.statusOrder.status, status => status);