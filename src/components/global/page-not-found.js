import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

import PageNotFoundImg from "../../resources/icons/loader-03.gif";

import { FaCaretRight } from "react-icons/fa";

import Typography from "@mui/material/Typography";

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Page Not Found";
    });
    return (
        <section className="not-found-route">
            <Header />
            <div className="not-found-wrapper content-fit">
                <div className="heading-wrapper display-flex flex-row">
                    <FaCaretRight className="heading-icon" />
                    <Typography   className="heading-title"  variant="h4"  component="div" >
                        Page Not Found
                    </Typography>
                </div>

                <div className="not-found-container display-flex">
                    <img  src={PageNotFoundImg}   className="not-found-img"  alt="page-not-found"  />

                    <div className="not-found-text display-flex">
                        <Typography  className="heading-title"  variant="h4"   component="div"  >
                            Look like you're lost!
                        </Typography>

                        <Typography  className="heading-title"  variant="h7"  component="div"  gutterBottom  >
                            The page you are looking for is not available.
                        </Typography>
                    </div>

                    <button className="btn-1" onClick={() => navigate("/")}>
                        Back Home
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default PageNotFound;
