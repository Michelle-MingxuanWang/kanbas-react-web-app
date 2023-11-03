import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
      <div className="row">
  <div className="col-9" >
    <input className = "form-control"
      value={module.name}
      onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
    }
    />
    <br></br>
    <textarea className = "form-control"
      value={module.description}
      onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
    />
  </div>
  <div className="col-3">
    <button className="btn btn-success float-end" style={{ padding: "5px 10px" }}
    onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
      Add
    </button>
    <button className="btn btn-primary float-end" style={{ padding: "5px 10px" }}
    onClick={() => dispatch(updateModule(module))}>
      Update
    </button>
  </div>
</div>

      </li>
      

      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">

             <button type="button" className="btn btn-secondary dropdown-toggle" style={{ fontSize: '20px'}}>{module.name}</button>
             
             <button 
            className="btn btn-success float-end" style = {{padding: "5px 10px"}}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

            <button
              className="btn btn-danger float-end" style = {{padding: "5px 10px"}}
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                  <button type="button" className="btn btn-light dropdown-toggle">{lesson.name}</button>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;