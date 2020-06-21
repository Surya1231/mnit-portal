import React from "react";

const Overall = ({ data }) => {
  return (
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col"> Cur-Rating </th>
          <th scope="col">Max-Rating</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          let link = "https://codeforces.com/profile/" + item.handle;
          let cur_rating = item.rating ? item.rating : "Not Rated";
          let max_rating = item.maxRating ? item.maxRating : "Not Rated";
          let full_name = item.firstName
            ? item.firstName + " " + item.lastName
            : item.handle;
          return (
            <tr key={index}>
              <td>
                <b>{index + 1}</b>
              </td>
              <td>{full_name}</td>
              <td>
                <a rel="noopener noreferrer" target="_blank" href={link}>
                  {" "}
                  {item.handle}
                </a>
              </td>
              <td>{cur_rating}</td>
              <td>{max_rating}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Overall;
