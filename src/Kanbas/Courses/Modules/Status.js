import React from "react";

function Status() {
  return (
    <div className="d-none d-lg-block">
      <div>
        <div>
          <h6>Course Status</h6>

          <div className="d-flex justify-content-between align-items-center ">
            <button type="button" className="btn btn-light text-black w-50 me-1">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-ban fa-sm me-1"></i>Unpublish
              </div>
            </button>
            <button type="button" className="btn btn-success w-50">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-circle-check text-white fa-sm me-1"></i>Published
              </div>
            </button>
          </div>

          <div className="pt-3">
            <div className="d-flex justify-content-between list-group ">
              <div className="pt-1">
                <a href="#" className="list-group-item list-group-item-action btn bg-light ">
                  <small>Import Existing Content</small>
                </a>
              </div>
              <div className="pt-1">
                <a href="#" className="list-group-item list-group-item-action btn bg-light">
                  <small>Import From Commons</small>
                </a>
              </div>
              <div className="pt-1">
                <a href="#" className="list-group-item list-group-item-action btn bg-light">
                  <small>Choose Home Page</small>
                </a>
              </div>
              <div className="pt-1">
                <a href="#" className="list-group-item list-group-item-action btn bg-light">
                  <small>View Course Stream</small>
                </a>
              </div>
              <div className="pt-1">
                <a href="#" className="list-group-item list-group-item-action btn bg-light">
                  <small>New Announcement</small>
                </a>
              </div>
              <div className="pt-1">
                <a href="#" className="list-group-item list-group-item-action btn bg-light">
                  <small>New Analytics</small>
                </a>
              </div>
              <div className="pt-1">
                <a href="#" className="list-group-item list-group-item-action btn bg-light">
                  <small>View Course Notifications</small>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="col-lg-12">
          <div className="my-3 d-flex justify-content-between align-items-center">
            <small>Coming Up</small>
            <a href="#" className="text-danger text-decoration-none">
              <i className="fa-regular fa-calendar-days"></i>
              <small>View Calendar</small>
            </a>
          </div>
          <hr />
          <div className="row align-items-center">
            <div className="col-auto mb-5">
              <i className="fa-regular fa-calendar-days text-danger"></i>
            </div>
            <div className="col pb-2">
              <a href="#" className="text-danger text-decoration-none">Lecture</a>
              <div><small>CS4550.12631.202410 Sep 11 at 11:45am</small></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-auto mb-5">
              <i className="fa-regular fa-calendar-days text-danger"></i>
            </div>
            <div className="col pb-2">
              <a href="#" className="text-danger text-decoration-none">Lecture</a>
              <div><small>CS4550.12631.202410 Sep 11 at 6pm</small></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-auto mb-5">
              <i className="fa-regular fa-calendar-days text-danger"></i>
            </div>
            <div className="col pb-2">
              <a href="#" className="text-danger text-decoration-none">Lecture</a>
              <div><small>CS4550.12631.202410 Sep 11 at 7pm</small></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Status;
