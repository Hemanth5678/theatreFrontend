import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../global/header";
import Footer from "../global/footer";
import ImageSlider from "./image-slider";

import { FaCaretRight } from "react-icons/fa";

import Typography from "@mui/material/Typography";
import ContentLoader from "react-content-loader";

const Home = () => {
    const navigate = useNavigate();

    const [loadTimeOut] = useState(2000);
    const [showLoader, setShowLoader] = useState(false);
    const [loaderFadeOut, setLoaderFadeOut] = useState(false);

    useEffect(() => {
        document.title = "HomePage";

        document.addEventListener("DOMContentLoaded", function() {
            setShowLoader(true);
        });

        window.addEventListener("load", function() {
            setShowLoader(true);
            wait(loadTimeOut).then(() => {
                setShowLoader(false);
                setLoaderFadeOut(true);
            });
        });

        if (!showLoader) {
            document.getElementById("home-scroll").scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: 'center'
            });
        }
    });

    const wait = (delay = 0) =>
        new Promise((resolve) => setTimeout(resolve, delay));

    return (
        <>
            {showLoader ? (
                 <div className="content-loader">
                    <ContentLoader   speed={2}  foregroundColor={"#999999"} />
                    <ContentLoader   speed={2}  foregroundColor={"#999999"} />
                    <ContentLoader   speed={2}  foregroundColor={"#999999"} />
                    <ContentLoader   speed={2} foregroundColor={"#999999"}  />
                </div>
            ) : (
                <section className="home-route">
                    <Header />
                    <div className="home-wrapper content-fit">
                        <div  className="heading-wrapper display-flex flex-row"   id="home-scroll" >
                            <FaCaretRight className="heading-icon" />
                            <Typography   className="heading-title"   variant="h4"   component="div"  >
                                Watch the trending Movies in IMAX near you
                            </Typography>
                        </div>
                        <ImageSlider />

                        <button  className="btn-1"  onClick={() =>  navigate("/movies", {
                                    state: {
                                        elementScroll: "movies-scroll",
                                    },
                                })
                            }
                            type="submit"
                        >
                            Book Now
                        </button>    

                        <div className="heading-wrapper display-flex flex-row">
                            <FaCaretRight className="heading-icon" />
                            <Typography  className="heading-title"  variant="h4"  component="div"  >
                                Book By Halls
                            </Typography>
                        </div>
                        <div className="halls-wrapper display-flex flex-row">
                            <img  className="hall-img"  src="https://egy.voxcinemas.com/assets/images/experience/panel-imx-300x150.jpg"   alt="hall-img"  
                                onClick={() =>  navigate("/movies", {
                                        state: {
                                            elementScroll: "movies-scroll",
                                        },
                                    })
                                }
                            />
                            <img  className="hall-img"  src="https://egy.voxcinemas.com/assets/images/experience/panel-mx-300x150.jpg" alt="hall-img"
                                onClick={() =>  navigate("/movies", {
                                        state: {
                                            elementScroll: "movies-scroll",
                                        },
                                    })
                                }
                            />
                            <img  className="hall-img"  src="https://egy.voxcinemas.com/assets/images/experience/panel-gd-300x150.jpg"  alt="hall-img"
                                onClick={() =>  navigate("/movies", {
                                        state: {
                                            elementScroll: "movies-scroll",
                                        },
                                    })
                                }
                            />
                            <img  className="hall-img"   src="https://egy.voxcinemas.com/assets/images/experience/panel-fx-300x150.jpg"  alt="hall-img"
                                onClick={() =>  navigate("/movies", {
                                        state: {
                                            elementScroll: "movies-scroll",
                                        },
                                    })
                                }
                            />
                            <img  className="hall-img"  src="https://egy.voxcinemas.com/assets/images/experience/panel-kd-300x150.jpg"  alt="hall-img"
                                onClick={() =>  navigate("/movies", {
                                        state: {
                                            elementScroll: "movies-scroll",
                                        },
                                    })
                                }
                            />
                        </div>
                    </div>
                    <Footer />
                </section>
            )}
        </>
    );
};

export default Home;
