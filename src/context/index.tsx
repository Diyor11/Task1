import React, { useReducer, createContext, ReactNode, useContext } from 'react';
import { initialState, contextReducer, ReducerType, StateType, actionTypes } from './modalsReducer';
// import contextActions from './actions';
// import contextSelectors from './selectors';

type ContextValue = [StateType, React.Dispatch<any>];

type CrudContextProps = {
    children: ReactNode;
};

const ModalContext = createContext<ContextValue | null>(null);

function ModalContextProvider({ children }: CrudContextProps): JSX.Element {
  const [state, dispatch]: ContextValue = useReducer<ReducerType>(contextReducer, initialState);

  return(
    <ModalContext.Provider value={[state, dispatch]}>{children}</ModalContext.Provider>
  )
}

function useModalContext() {
  const context: ContextValue | null = useContext(ModalContext);
  if (context === null) {
    throw new Error('modal context must be used within a CrudContextProvider');
  }
  const [state, dispatch] = context;

  const actions = {
    openForm: () => dispatch({type: actionTypes.OPEN_STUDETN_FORM}), 
    closeForm: () => dispatch({type: actionTypes.CLOSE_STUDETN_FORM}), 
    toggleForm: () => dispatch({type: actionTypes.TOGGLE_STUDETN_FORM}), 
    openTasks: () => dispatch({type: actionTypes.OPEN_TASKS}), 
    closeTasks: () => dispatch({type: actionTypes.CLOSE_TASKS}), 
    toggleTasks: () => dispatch({type: actionTypes.TOGGLE_TASKS}), 
  }

  return { state, actions };
}

export { ModalContextProvider, useModalContext };