import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <button type="button" className="btn btn-secondary dropdown-toggle" style={{ fontSize: '20px'}}>{module.name}</button>
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