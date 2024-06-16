import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";  //link to navigate thruh different page
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";//to connect to the backend
import { toast } from "react-toastify";
import { Context } from "../main"; // used for isAuthenticated

const Navbar = () => {
    const [show, setShow] = useState(false);//here is the show value
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    //handlelogout 
    const handleLogout = async () => {
        await axios
            .get("https://hospital-management-backend-rv8x.onrender.com/api/v1/user/patient/logout", {
                withCredentials: true,
            })
            .then((res) => {
                //if success the response is sent
                toast.success(res.data.message);
                setIsAuthenticated(false);
                //set authenticated to false
            })
            // otherwise error message 
            .catch((err) => {
                toast.error(err.response.data.message);
            });

    };

    const navigateTo = useNavigate();
    //import all the properties of useNavigate

    //when the login button is clicked 
    const goToLogin = () => {
        navigateTo("/login");
    };

    return (
        <>
            <nav className={"container"}>
                <div className="logo">
                    <img src="/logo.png" alt="logo" className="logo-img" />
                </div>
                {/* if show value is true otherwise */}
                <div className={show ? "navLinks showmenu" : "navLinks"}>
                    <div className="links">
                        <Link to={"/"} onClick={() => setShow(!show)}>
                            Home
                        </Link>
                        <Link to={"/appointment"} onClick={() => setShow(!show)}>
                            Appointment
                        </Link>
                        <Link to={"/about"} onClick={() => setShow(!show)}>
                            About Us
                        </Link>
                    </div>

                    {/* isAuthenticated is coming from the main.jsx  */}
                    {isAuthenticated ? (
                        <button className="logoutBtn btn" onClick={handleLogout}>
                            LOGOUT
                        </button> 
                        // creating the button  with the handlelogout function
                        //otherwise
                    ) : (
                        <button className="loginBtn btn" onClick={goToLogin}>
                            LOGIN
                        </button>
                    )}
                </div>
                <div className="hamburger" onClick={() => setShow(!show)}>
                    <GiHamburgerMenu />
                </div>
            </nav>
        </>
    );
};

export default Navbar;