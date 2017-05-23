
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const incAction = id => ({type: INCREMENT, id: id});
export const decAction = id => ({type: DECREMENT, id: id});
export const resetAction = id => ({type: RESET, id: id});

