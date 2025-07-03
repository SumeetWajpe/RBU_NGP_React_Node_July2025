import React, { Component } from "react";

export default class Course extends Component {
  state = { currLikes: this.props.coursedetails.likes };
  incrementLikes() {
    console.log("U clicked !");
    // this.props.coursedetails.likes++; // props are readonly
    // console.log(this.props.coursedetails.likes++);
    // this.state.currLikes++; // state are immutable
    this.setState({ currLikes: this.state.currLikes + 1 });
  }

  render() {
    console.log("Within Render -  Course");
    let ratings = [];
    for (let index = 0; index < this.props.coursedetails.rating; index++) {
      ratings.push(
        <i
          className="fa-solid fa-star"
          key={index}
          style={{ color: "orange" }}
        ></i>,
      );
    }
    return (
      <div className="col-md-3 my-1">
        <div className="card">
          <img
            src={this.props.coursedetails.imageUrl}
            className="card-img-top"
            alt={this.props.coursedetails.title}
            height="175px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.coursedetails.title}</h5>
            <p className="card-text">
              {/* Rating : {this.props.coursedetails.rating} */}

              {ratings}
            </p>
            <p className="card-text">₹.{this.props.coursedetails.price}</p>

            <button
              className="btn btn-primary"
              onClick={() => this.incrementLikes()}
            >
              {/* {this.props.coursedetails.likes} */}
              {this.state.currLikes}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
