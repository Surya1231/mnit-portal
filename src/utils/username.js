export const getUserName = (email) => {
  return email.split("@")[0];
};

export const verifyEmail = (email) => {
  return email.indexOf("@mnit.ac.in") !== -1;
};
