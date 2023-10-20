import 'bootstrap/dist/css/bootstrap.min.css';


function Button() {
    return (
      <div>
        <div>
          <div className="row justify-content-end pt-3">
            <div className="col-auto pe-2" data-bs-toggle="collapse" data-bs-target="#weekOne, #weekTwo, #weekThree">
              <button type="button" className="btn btn-light">Collapse All</button>
            </div>
            <div className="col-auto pe-2">
              <button type="button" className="btn btn-light">View program</button>
            </div>
            <div className="col-auto pe-2 dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Publish All
              </button>
            </div>
            <div className="col-auto pe-0">
              <button type="button" className="btn btn-danger"><i className="fa-solid fa-plus me-1"></i>+ Module</button>
            </div>
            <div className="col-auto pe-2">
              <button type="button" className="btn btn-light border border-secondary-subtle"><i className="fa-solid fa-ellipsis-vertical">...</i></button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }

    export default Button;
  