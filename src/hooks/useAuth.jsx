export const setAuth = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    localStorage.clear();
    return false;
  } else {
    return true;
  }
};
