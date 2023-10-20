import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays"
import ForLoops from "./ForLoops"
import MapFunction from "./MapFunction"
import JsonStringify from "./JsonStringify"
import FindFunction from "./FindFunction"
import FindIndex from "./FindIndex"
import FilterFunction from "./FilterFunction"

function WorkingWithFunctions() {
    let loggedIn = true;
    return(
       <div>
          <h2>Logged In</h2>
          { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
          <ArrayIndexAndLength/>
          <AddingAndRemovingDataToFromArrays/>
          <ForLoops/>
          <MapFunction/>
          <JsonStringify/>
          <FindFunction/>
          <FindIndex/>
          <FilterFunction/>
       </div>
    );
  }
  export default WorkingWithFunctions