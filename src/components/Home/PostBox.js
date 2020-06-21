import React from "react";
import { Link } from "react-router-dom";

const PostBox = ({}) => {
  return (
    <div className="post mt-3">
      <div className="bg-white rounded py-2 px-4">
        <div className="meta-data font-weight-bold text-lg">
          Anonymous
          <span className="float-right pr-3"> 10min Ago</span>
        </div>
        <div className="post-centent mt-2">
          Good market for iPhone and its apps, the rising number of IT companies
          offering iPhone apps development services and lack of thoroughly
          talented developers are the main reasons resulting in increasing
          demand for the fluent iOS developers across the globe. Highest
          salaries one can expect in the IT sector and world of opportunities
          available in this sector makes iPhone development one of the most
          desired or chosen professions of the present times.
          <br />
          <Link to="/post/30" target="_blank">
            View full post
          </Link>
        </div>
        <div className="action border-top mt-2">
          <div className="row">
            <div className="py-2 px-0 col-6 hover">
              <div className="text-center text-success border-right pointer">
                Upvote (20)
              </div>
            </div>
            <div className="py-2 px-0 col-6 hover">
              <div className="text-center text-danger pointer">
                <Link to="/post/30" target="_blank">
                  Comment (30)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
