// const loginUrl = "http://13.48.147.57/user/login";

export const api = {
  loginAuth: (params) => {
    return fetch("http://13.48.147.57/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  },

  registerAuth: (params) => {
    return fetch("http://13.48.147.57/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  },
  getBook: () => {
    return fetch("http://13.48.147.57/book/book", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  },

  searchBook: (value) => {
    return fetch(`http://13.48.147.57/book/search/${value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  },

  singleBook: (value) => {
    return fetch(`http://13.48.147.57/book/genreId/${value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  },
  getAuthers: () => {
    return fetch(`http://13.48.147.57/author/books/id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
  },
};
