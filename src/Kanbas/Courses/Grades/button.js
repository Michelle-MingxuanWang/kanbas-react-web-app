import 'bootstrap/dist/css/bootstrap.min.css';


function Button() {
    return (
      <div>
        <div>
        <a href="#" className="text-danger text-decoration-none">Grade book</a>
          <div className="row float-end">
            <div className="col-auto">
              <button type="button" className="btn btn-secondary">Import</button>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-secondary">Export</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }

    export default Button;
  