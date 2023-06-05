const initialState = {
  book: [],
  firstname: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  showPassword: false,
  logEmail: "",
  logPassword: "",
  value: "",
  searchBookValue: [],
  singleBook: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FIRST_NAME":
      return {
        ...state,
        firstname: action.payload,
      };
    case "GET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };
    case "GET_PHONE":
      return {
        ...state,
        phone: action.payload,
      };
    case "GET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "GET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SHOW_PASSWORD":
      return {
        ...state,
        showPassword: action.payload,
      };
    case "GET_LOG_EMAIL":
      return {
        ...state,
        logEmail: action.payload,
      };
    case "GET_LOG_PASSWORD":
      return {
        ...state,
        logPassword: action.payload,
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        logEmail: "",
        logPassword: "",
      };
    case "GET_DATES":
      return {
        ...state,
        book: action.payload,
      };
    case "GET_VALUE":
      return {
        ...state,
        value: action.payload,
      };
    case "GET_VALUE_SEARCH":
      return {
        ...state,
        searchBookValue: [action.payload],
      };
    case "GET_SINGLE_BOOK":
      return {
        ...state,
        singleBook: action.payload,
      };
    default:
      return state;
  }
};
