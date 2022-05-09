import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import loginService from "../service/login.service";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Dropdown from "./miniComponents/Dropdown";
import Dropdown1 from "./miniComponents/Dropdown1";

import { formsList, reportList } from '../Data/data';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = ({currentPage}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const closeModal = () => {
    setShowLogin(false);
  };

  const inviteFormLink = "https://forms.gle/wqZnvsMM4AMzJt196"

  const handleLogin = async (email, pass) => {
    const data = await loginService.signin();
    const obj = data.docs.map((item) => ({ ...item.data(), id: item.id }));
    console.log(obj[0]);

    if (email == obj[0].email && pass == obj[0].password) {
      // alert("Login successfull");
      setIsLogin(true);
      closeModal();
      toast('🦄 Login Successfull', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      // alert("login fail");
      setIsLogin(false);
    }
    // console.log("List : ", list);
  };

  const onLogout = () => {
    toast.warn(' Logout Successfull', {
      position: "bottom-center",
      autoClose: 1005,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    setIsLogin(false);
    navigate('/')
  }
  const navigate = useNavigate();

  return (
    <div>
      <ToastContainer />
      <nav
        className="navbar box"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item" href="https://bulma.io">
            {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            /> */}
            <h1 className="title" onClick={() => navigate("/")}>
              {currentPage || "KKW Events"}
            </h1>
          </div>

          {/* <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink to="/" replace className="navbar-item">
              Home
            </NavLink>


            {isLogin && (
              <>
              <NavLink to="/expertTalkEntry" className="navbar-item">
                  Event form TEST
                </NavLink>
                <NavLink to="/about" className="navbar-item">
                  Expert Talk Entry
                </NavLink>
                <NavLink to="#" className="navbar-item" style={{
                  padding: "0px",
                  paddingLeft: ".75rem"
                }}>
                  <Dropdown1 title="Essential Documents" data={formsList} />
                </NavLink>
                <NavLink to="#" className="navbar-item" style={{
                  padding: "0px",
                  paddingLeft: ".75rem"
                }}>

                  <Dropdown1 data={reportList} title="Get Report"/>
                </NavLink>

                {/* <NavLink to="/invite" className="navbar-item">
                  Invite
                </NavLink> */}
                {/* <a className="navbar-item " href={inviteFormLink} target="_blank">
                  {"Invite"}
                </a> */}

              </>
            )}





            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-Navlink">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
          </div>
          {/* <div className="navbar-center">
            <div className="navbar-item">
              <h1 className="title">KKW Events</h1>
            </div>
          </div> */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <p
                  onClick={() => {
                    isLogin ? onLogout() : setShowLogin(!showLogin);
                  }}
                  className="button is-light"
                >
                  {!isLogin ? "Login" : "Logout"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showLogin && (
        <div className={`${showLogin ? "is-active" : ""} modal`}>
          <div className="modal-background" onClick={closeModal}></div>

          <div className="modal-content ">
            <Login
              onLogin={handleLogin}
              isLogin={isLogin}
              handleLogout={() => setIsLogin(false)}
            />
          </div>

          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={closeModal}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
