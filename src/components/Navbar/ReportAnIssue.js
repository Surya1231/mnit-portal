import React from "react";

const ReportAnIssue = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-success text-white"
        data-toggle="modal"
        data-target="#reportIssue"
        style={{ height: "42px", overflowY: "hidden" }}
      >
        Report An Issue
      </button>
      <div
        className="modal fade text-dark"
        id="reportIssue"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="reportIssueTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {" "}
                Report An Issue{" "}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label> Subject </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Subject"
                  />
                </div>
                <div className="form-group mt-2">
                  <label>Description </label>
                  <textarea
                    className="d-block w-100"
                    style={{ height: "150px" }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportAnIssue;
