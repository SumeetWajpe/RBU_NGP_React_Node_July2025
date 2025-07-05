import React, { Component, useEffect, useState } from "react";
import Course from "../course/course.component";
import axios from "axios";

var ListOfCourses = () => {
  const [courses, setCourses] = useState([]);

  const deleteCourse = id => {
    const newCourses = courses.filter(c => c.id !== id);
    setCourses(newCourses);
  };

  useEffect(function () {
    axios
      .get("http://localhost:3000/courses")
      .then(res => setCourses(res.data));
  }, []);
  return (
    <div className="row">
      {courses.map(course => (
        <Course
          coursedetails={course}
          key={course.id}
          deletecourse={id => deleteCourse(id)}
        />
      ))}
    </div>
  );
};

// export default class ListOfCourses extends Component {

//   render() {
//     return (
//       <div className="row">
//         {this.courses.map(course => (
//           <Course coursedetails={course} key={course.id} />
//         ))}
//       </div>
//     );
//   }
// }
export default ListOfCourses;
