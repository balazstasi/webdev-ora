export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESUlT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: ADD,
    value,
  };
};

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    value,
  };
};

const saveResult = (result) => {
  return {
    type: STORE_RESULT,
    result: result,
  };
};

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (resultId) => {
  return {
    type: DELETE_RESUlT,
    resultId: resultId,
  };
};