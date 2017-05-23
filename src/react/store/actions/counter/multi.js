
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const addAction = () => ({type: ADD});
export const removeAction = id => ({type: REMOVE, id});
