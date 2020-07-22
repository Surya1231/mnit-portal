export const formatPostDate = (ownDate) => {
  let date;
  if (ownDate.seconds) date = new Date(ownDate.seconds * 1000);
  else date = ownDate;
  const currentDate = new Date();
  const time = currentDate.getTime() - date.getTime();
  if (time < 12 * 60 * 60000) {
    if (time < 60 * 60000) return Math.round(time / 60000) + " mins ago";
    return Math.round(time / (60 * 60000)) + " hours ago";
  }
  const month = date.toLocaleString("default", { month: "short" });
  return date.getDate() + " " + month + " " + date.getFullYear();
};
