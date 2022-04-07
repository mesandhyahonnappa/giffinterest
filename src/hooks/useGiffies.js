import { useReducer, useCallback } from "react";

const asyncReducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, error: null };
    }
    case "LOAD": {
      return { data: action.data, error: null };
    }
    case "APPEND": {
      const curSetData = state.data.slice();
      const newData = [...curSetData, ...action.data];
      return { data: newData, error: null };
    }
    case "RESET": {
      return { data: [], error: null };
    }
    case "REJECTED": {
      return { data: [], error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useAsync = (initialState) => {
  const [state, dispatch] = useReducer(asyncReducer, {
    data: [],
    error: null,
    ...initialState,
  });

  const { data, error } = state;

  const run = useCallback((promise, actionType = "LOAD") => {
    dispatch({ type: "LOADING" });
    promise.then(
      (data) => {
        dispatch({ type: actionType, data });
      },
      (error) => {
        dispatch({ type: "REJECTED", error });
      }
    );
  }, []);

  return {
    error,
    data,
    run,
  };
};
