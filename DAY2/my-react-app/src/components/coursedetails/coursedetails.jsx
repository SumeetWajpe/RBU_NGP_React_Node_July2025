import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../rating/rating";

function CourseDetails() {
  const [thePost, setThePost] = useState({});
  useEffect(function () {
    axios
      .get(`http://localhost:3500/courses/${id}`)
      .then(res => setThePost(res.data))
      .catch(err => console.log(err));
  }, []);
  const { id } = useParams(); // should be same as given in App.jsx while defining the Route
  return (
    <div className="row my-1">
      <div className="col-md-9">
        <img src={thePost.imageUrl} alt={thePost.title} width="100%" />
      </div>
      <div className="col-md-3">
        <h2>{thePost.title}</h2>
        <Rating noofstars={thePost.rating} />
        <p>₹.{thePost.price}</p>
        <p>{thePost.description}</p>
      </div>
    </div>
  );
}

export default CourseDetails;
