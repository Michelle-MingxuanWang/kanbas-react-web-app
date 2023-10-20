import ModuleList from "../Modules/ModuleList";
import Button from "../Modules/button";
import Status from "../Modules/Status";

function Home() {
  return (
    <div className="row" style={{ marginTop: '80px' }}>
      <div className="col-9">
      <h2>Home</h2>
        <Button />
        <ModuleList />
      </div>
      <div className="col-3" style={{ marginTop: '60px' }}>
        <Status />
      </div>
    </div>
    
  );
}
export default Home;