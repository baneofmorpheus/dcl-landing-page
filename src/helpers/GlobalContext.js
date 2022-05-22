import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer.js';

const initialState = {
  menuOpen: false,
};
export const GlobalContext = createContext(initialState);

export const ContextWrapper = (props) => {
  const [store, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider value={[store, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
