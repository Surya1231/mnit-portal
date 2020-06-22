export const getUserName = (email) => {
  return email.split("@")[0];
};

export const verifyEmail = (email) => {
  return email.endsWith("@mnit.ac.in");
};
