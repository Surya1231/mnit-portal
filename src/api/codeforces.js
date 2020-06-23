import Axios from "axios";
import {
  cf_first_year,
  cf_second_year,
  cf_third_year,
} from "../data/static/codeforcesData";

function generateString(userList) {
  return userList.join(";");
}

function getUserNameString(user) {
  switch (user) {
    case "1":
      return generateString(cf_first_year);
    case "2":
      return generateString(cf_second_year);
    case "3":
      return generateString(cf_third_year);
    default:
      return (
        generateString(cf_first_year) + ";" + generateString(cf_second_year)
      );
  }
}

export async function getCfLeaderboard(values) {
  const users = getUserNameString(values.year);
  let url = `https://codeforces.com/api/user.info?handles=${users}`;
  if (values.contest !== "overall") {
    const contestId =
      values.contest === "custom" ? values.customId : values.contest;
    url = `https://codeforces.com/api/contest.standings?contestId=${contestId}&handles=${users}`;
  }

  return new Promise((resolve, reject) => {
    Axios.get(url)
      .then((res) => {
        if (res.data.status === "OK") {
          const result = res.data.result;
          if (values.contest === "overall")
            result.sort((obj1, obj2) => {
              let t1 = obj1.maxRating ? obj1.maxRating : 0;
              let t2 = obj2.maxRating ? obj2.maxRating : 0;
              return t2 - t1;
            });
          resolve(result);
        }
        reject(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function getCfRecentContest() {
  const url = "https://codeforces.com/api/contest.list?gym=false";
  return new Promise((resolve, reject) => {
    Axios.get(url)
      .then((res) => {
        if (res.data.status === "OK") {
          let result = [];
          for (let i = 0; i < res.data.result.length; i++) {
            if (res.data.result[i].phase === "FINISHED")
              result.push(res.data.result[i]);
            if (result.length === 10) break;
          }
          resolve(result);
        }
        reject(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
