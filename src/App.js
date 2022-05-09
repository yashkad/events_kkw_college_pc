import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ImageUpload from "./components/ImageUpload";
import { storage } from "./firebase/firebase";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import FirebaseForm from "./components/FirebaseForm";
import { createContext, useEffect, useState } from "react";
import InviteForm from "./components/InviteForm";
import EventDetails from "./components/EventDetails";
import CardRow from "./components/CardRow";
import UnderConstruction from "./components/UnderConstruction";
import FirstPage from "./components/FirstPage/FirstPage";
import ExpertTalkEntry from "./components/ExpertTalk/ExpertTalkEntry";

export const EventContext = createContext();

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [currentPage,setCurrentPage] = useState(null)

  const data = {
    imgUrl: imgUrl,
    setImgUrl: (e) => {
      setImgUrl(e);
      console.log("Url is now ", e);
    },
  };

  return (
    <EventContext.Provider value={data}>
      <div className="App main">
        <Navbar currentPage={currentPage} />
        <Routes>
          <Route path="/" exact element={<FirstPage setCurrentPage={setCurrentPage}/>} />
          <Route path="about" element={<FirebaseForm />} />
          <Route path="invite" element={<InviteForm />} />
          <Route path="/eventPage" element={<CardRow />} />
          <Route path="/eventDetails/:eventId" element={<EventDetails />} />
          <Route path="/404" element={<UnderConstruction />} />
          <Route path="/expertTalkEntry" element={<ExpertTalkEntry />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </EventContext.Provider>

    // <div className="App main">
    //   <div className="mx-5 my-5 ">
    //     <ImageUpload />
    //   </div>
    // </div>

    // <div className="">
    //   <section className="hero is-small is-primary">
    //     <div className="hero-body">
    //       <p className="title">Event listing project</p>
    //       <p className="subtitle">Mca Department</p>
    //     </div>
    //   </section>

    //   <div className="columns p-5 ">
    //     <div className=" column is-2 container is-fluid has-background-primary-light">
    //       First column
    //     </div>
    //     <div className=" column  has-background-grey-lighter container is-fluid is-flex-direction-row ">
    //       {[1, 2, 3].map((i) => {
    //         return <Card />;
    //       })}
    //       {/* <section className="hero is-success is-fullheight">
    //         <div className="hero-body">
    //           <div className="container">
    //             <h1 className="title">Fullheight title</h1>
    //             <h2 className="subtitle">Fullheight subtitle</h2>
    //           </div>
    //         </div>
    //       </section> */}
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default App;
