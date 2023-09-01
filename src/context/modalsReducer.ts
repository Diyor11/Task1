export const actionTypes = {
    OPEN_STUDETN_FORM: 'OPEN_STUDETN_FORM',
    CLOSE_STUDETN_FORM: 'CLOSE_STUDETN_FORM',
    TOGGLE_STUDETN_FORM: 'TOGGLE_STUDETN_FORM',
    OPEN_TASKS: 'OPEN_TASKS',
    CLOSE_TASKS: 'CLOSE_TASKS',
    TOGGLE_TASKS: 'TOGGLE_TASKS',
}


export type StateType = {
  studentForm: boolean,
  taskList: boolean
}

export type Action = {
    type: string
}

export const initialState = {
  studentForm: false,
  taskList: false
};

export type ReducerType = (state: StateType, action: Action)  => StateType

export function contextReducer(state: StateType, action: Action) {
  switch (action.type) {
    case actionTypes.OPEN_STUDETN_FORM:
      return {
        ...state,
        studentForm: true,
      };
    case actionTypes.CLOSE_STUDETN_FORM:
      return {
        ...state,
        studentForm: false,
      };
    case actionTypes.TOGGLE_STUDETN_FORM:
      return {
        ...state,
        studentForm: !state.studentForm,
      };
    case actionTypes.OPEN_TASKS:
      return {
        ...state,
        taskList: true,
      };
    case actionTypes.CLOSE_TASKS:
      return {
        ...state,
        taskList: false,
      };
    case actionTypes.TOGGLE_TASKS:
      return {
        ...state,
        taskList: !state.taskList,
      };

    default: {
      return state;
    }
  }
}