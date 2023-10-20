import ModuleList from "./ModuleList";
import Button from "./button";

function Modules() {
  return (
    <div className="row" style={{ marginTop: '80px' }}>
      <div className="col-11">
        <Button />
        <ModuleList />
      </div>
    </div>
    
  );
}
export default Modules;