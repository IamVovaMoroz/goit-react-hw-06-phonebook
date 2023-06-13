// import { filterSlice } from "./filtersSlice";


// // 
// export const getFilter = state => filterSlice.selectors.getFilter(state.filter);

export const getFilter = state => state.filter;
// console.log('getFilter', getFilter)
export const getContacts = state => state.contacts;
// console.log('getContacts', getContacts)