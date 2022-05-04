import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  console.log("Item ", item);
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/about");
    navigate(`/eventDetails/${item.id}`, { replace: false,state:{item:item} });
  };
  return (
    <div className="card" onClick={() => handleClick()} style={{
      cursor:"pointer",
    }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={
              item.url
                ? item.url
                : "https://bulma.io/images/placeholders/1280x960.png"
            }
            alt="Placeholder image"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          {/* <div className="media-left"> */}
          {/* <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              /> */}
          {/* </figure> */}
          {/* </div> */}
          <div className="media-content">
            <p className="title is-4" style={{
              // marginBottom:"5px"
            }}>{item.name}</p>
            <p className="subtitle is-6">{item.email}</p>
          </div>
        </div>

        <div className="">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
            iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
            <a href="#">#responsive</a> */}
          {item.topic}
          <br />
          {/* <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
          <div style={{
            display: "flex",
            justifyContent:"space-between",
            marginTop:"10px"
          }}>

            <time dateTime={item.date}>{item.date}</time>
            <p style={{
              background: "#c5e5fa",
              padding:"1px 10px",
              borderRadius:"40px"
              
            }}> {item.department}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
