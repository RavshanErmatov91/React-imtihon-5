export const GET_FIRST_NAME = (value) => {
  return {
    type: "GET_FIRST_NAME",
    payload: value,
  };
};
export const GET_LAST_NAME = (value) => {
  return {
    type: "GET_LAST_NAME",
    payload: value,
  };
};
export const GET_PHONE = (number) => {
  return {
    type: "GET_PHONE",
    payload: number,
  };
};

export const GET_EMAIL = (data) => {
  return {
    type: "GET_EMAIL",
    payload: data,
  };
};

export const GET_PASSWORD = (number) => {
  return {
    type: "GET_PASSWORD",
    payload: number,
  };
};

export const SHOW_PASSWORD = (number) => {
  return {
    type: "SHOW_PASSWORD",
    payload: number,
  };
};

export const GET_LOG_EMAIL = (number) => {
  return {
    type: "GET_LOG_EMAIL",
    payload: number,
  };
};

export const GET_LOG_PASSWORD = (number) => {
  return {
    type: "GET_LOG_PASSWORD",
    payload: number,
  };
};

export const CLEAR_INPUT = () => {
  return {
    type: "CLEAR_INPUT",
  };
};

export const GET_DATES = (data) => {
  return {
    type: "GET_DATES",
    payload: data,
  };
};

export const GET_VALUE = (value) => {
  return {
    type: "GET_VALUE",
    payload: value,
  };
};

export const GET_VALUE_SEARCH = (value) => {
  return {
    type: "GET_VALUE_SEARCH",
    payload: value,
  };
};

export const GET_SINGLE_BOOK = (value) => {
  return {
    type: "GET_SINGLE_BOOK",
    payload: value,
  };
};
