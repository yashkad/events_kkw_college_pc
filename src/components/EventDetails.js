import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import eventsService from "../service/events.service";
import { useLocation } from "react-router-dom";


const EventDetails = () => {
  const location = useLocation();
  const { eventId } = useParams();
  const [data, setData] = useState([]);

  const getEvent = async (id) => {
    // setLoading(true);
    try {
      const res = await eventsService.getEvent(id);
      // setLoading(false);
      console.log("resp : ", res.data());
      setData(res.data());
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    // getEvent(eventId);
    setData(location.state.item)
  }, []);

  return (
    <div className="main">
      <section className="hero  has-background-success-light">
        <div className="hero-body has-text-left">
          <div className="is-flex is-flex-direction-row  is-align-item-center">
            <div
              className="card-image"
              style={{ width: "15rem", height: "10rem" }}
            >
              <figure className="image">
                <img
                  // src="https://bulma.io/images/placeholders/1280x960.png"
                  src={
                    data.url
                      ? data.url
                      : "https://bulma.io/images/placeholders/1280x960.png"
                  }
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="m-5">
              <p className="title">{data.name ? data.name : "hello"}</p>
              <p className="subtitle">{data.topic}</p>
              <h1  className="">Email : {data.email}</h1>
              <h1  className="">Total Students Enrolled : {data.totalStud}</h1>
              <h1  className="">Department : {data.department}</h1>
              <h1  className="">Date : {data.date}</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
