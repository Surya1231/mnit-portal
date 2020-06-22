export const formatPostDate = (date) => {
  const currentDate = new Date();
  const time = currentDate.getTime() - date.getTime();
  if (time < 12 * 60 * 60000) {
    if (time < 60 * 60000) return Math.round(time / 60000) + " mins ago";
    return Math.round(time / (60 * 60000)) + " hours ago";
  }
  console.log(currentDate, date, time);
  return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
};
