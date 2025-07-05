import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/rating";
import axios from "axios";

const Course = props => {
  return (
    <div className="col-md-3 my-1">
      <div className="card">
        <Link to={`/coursedetails/${props.coursedetails.id}`}>
          <img
            src={props.coursedetails.imageUrl}
            className="card-img-top"
            alt={props.coursedetails.title}
            height="175px"
          />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{props.coursedetails.title}</h5>
          <p className="card-text">
            <Rating noofstars={props.coursedetails.rating} />
          </p>
          <p className="card-text">₹.{props.coursedetails.price}</p>

          <button className="btn btn-primary">
            {props.coursedetails.likes}
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button
            className="btn btn-danger mx-1"
            onClick={async () => {
              const deleteMsg = await axios.delete(
                `http://localhost:3000/courses/delete/${props.coursedetails.id}`,
              );
              if (deleteMsg.status) {
                // update the UI. -> call state change logic of ListOfCourses
              }
            }}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;

// export default class Course extends Component {
//   state = { currLikes: this.props.coursedetails.likes };
//   incrementLikes() {
//     console.log("U clicked !");
//     // this.props.coursedetails.likes++; // props are readonly
//     // console.log(this.props.coursedetails.likes++);
//     // this.state.currLikes++; // state are immutable
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }

//   render() {
//     // console.log("Within Render -  Course");

//     return (
//       <div className="col-md-3 my-1">
//         <div className="card">
//           <Link to={`/coursedetails/${this.props.coursedetails.id}`}>
//             <img
//               src={this.props.coursedetails.imageUrl}
//               className="card-img-top"
//               alt={this.props.coursedetails.title}
//               height="175px"
//             />
//           </Link>

//           <div className="card-body">
//             <h5 className="card-title">{this.props.coursedetails.title}</h5>
//             <p className="card-text">
//               <Rating noofstars={this.props.coursedetails.rating} />
//             </p>
//             <p className="card-text">₹.{this.props.coursedetails.price}</p>

//             <button
//               className="btn btn-primary"
//               onClick={() => this.incrementLikes()}
//             >
//               {/* {this.props.coursedetails.likes} */}
//               {this.state.currLikes}
//               <i className="fa-solid fa-thumbs-up"></i>
//             </button>
//             <button
//               className="btn btn-danger mx-1"
//               onClick={async () => {
//                 const deleteMsg = await axios.delete(
//                   `http://localhost:3000/courses/delete/${this.props.coursedetails.id}`,
//                 );
//                 if (deleteMsg.status) {
//                   // update the UI. -> call state change logic of ListOfCourses
//                   this.props.coursedetails.deleteCourse(
//                     this.props.coursedetails.id,
//                   );
//                 }
//               }}
//             >
//               <i class="fa-solid fa-trash"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
