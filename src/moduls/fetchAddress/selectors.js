import { createSelector } from 'reselect';

export const getStatusCardStatus = createSelector(state => state.statusCard.status, status => status);
export const getAddressIsFetching = createSelector(state => state.fetchAddress.isFetching, isFetching => isFetching);
export const getAddressIsFetched = createSelector(state => state.fetchAddress.isFetched, isFetched => isFetched);
export const getAddressAddresses = createSelector(state => state.fetchAddress.addresses, addresses => addresses);
export const getAddressError = createSelector(state => state.fetchAddress.error, error => error);