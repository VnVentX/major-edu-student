export const getJwt = () => {
  return localStorage.getItem("token");
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const getID = () => {
  return localStorage.getItem("id");
};

export const getGradeID = () => {
  return localStorage.getItem("gradeID");
};

export const getUser = () => {
  return localStorage.getItem("user");
};
