export const getUserName = (email) => {
  return email.split("@")[0];
};

export const verifyEmail = (email) => {
  return email.endsWith("@mnit.ac.in");
};

export const generateOtp = () => {
  return 1000 + Math.round(Math.random() * 8000);
};
