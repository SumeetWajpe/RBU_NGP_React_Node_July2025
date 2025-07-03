import React, { Component } from "react";

export default class Course extends Component {
  render() {
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
            <p className="card-text">₹.{this.props.coursedetails.price}</p>
            <p className="card-text">
              Rating : {this.props.coursedetails.rating}
            </p>

            <button class="btn btn-primary">
              {this.props.coursedetails.likes}{" "}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
