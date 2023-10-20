import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


function Button() {
    return (
      <div className="assignment_container">
        <div>
          <div className="row justify-content-end pt-3">
            <div className="col-auto pe-0" data-bs-toggle="group" data-bs-target="#weekOne, #weekTwo, #weekThree">
              <button type="button" className="btn btn-light">+ Group</button>
            </div>
            <div className="col-auto pe-0">
              <button type="button" className="btn btn-danger">+ Assignment</button>
            </div>
            <div className="col-auto pe-2">
              <button type="button" className="btn btn-light border border-secondary-subtle"><i className="fa-solid fa-ellipsis-vertical"></i>...</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }

    export default Button;
  