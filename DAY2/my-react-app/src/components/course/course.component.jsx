import React, { Component } from "react";

export default class Course extends Component {
  render() {
    return (
      <div>
        <img src={this.props.coursedetails.imageUrl} alt="" width="200px" />
        <h1>{this.props.coursedetails.title}</h1>
        <p>{this.props.coursedetails.price}</p>
        <p>{this.props.coursedetails.rating}</p>
        <button>{this.props.coursedetails.likes}</button>
      </div>
    );
  }
}
