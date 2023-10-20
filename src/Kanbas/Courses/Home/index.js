import ModuleList from "../Modules/ModuleList";
import Button from "../Modules/button";
import Status from "../Modules/Status";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <Button />
        <ModuleList />
      </div>
      <div className="col-3"> {/* Adjust the column width as needed */}
        <Status />
      </div>
    </div>
    
  );
}
export default Home;