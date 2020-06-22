import React from "react";

const CfContest = ({ data, contest }) => {
  return (
    <>
      <h5 className="text-center mb-4 text-primary">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://codeforces.com/contest/${contest.id}`}
        >
          {`#${contest.id} ${contest.name}`}
        </a>
      </h5>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Points</th>
            <th scope="col">Rank</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            let rank = item.rank;
            let point = item.points;
            let user_name = item.party.members[0].handle;
            let link = "https://codeforces.com/profile/" + user_name;
            return (
              <tr key={index}>
                <td>
                  <b>{index + 1}</b>
                </td>
                <td>
                  <a rel="noopener noreferrer" target="_blank" href={link}>
                    {" "}
                    {user_name}
                  </a>
                </td>
                <td>{point}</td>
                <td>{rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CfContest;
