import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { nowPlayingMovies } from "../../redux/actions/movies-actions";

import Header from "../global/header";
import Footer from "../global/footer";

import Typography from "@mui/material/Typography";

import { FaCaretRight } from "react-icons/fa";

const LoaderImgURL =
    "https://i.pinimg.com/originals/94/20/5e/94205e1ed8ea69428c3fd9b81d22ac4b.gif";

const Movies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const location = useLocation();
    const locationState = location.state;

    const [moviesDispatched, setMoviesDispatched] = useState(false);

    const nowPlayingMoviesList = useSelector(
        (state) => state.movies.nowPlayingMoviesList
    );

    useEffect(() => {
        document.title = "Movies | Hemanth Cinema";

        if (locationState !== null)
            document
                .getElementById(locationState.elementScroll)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
    }, [locationState]);

    useEffect(() => {
        if (!moviesDispatched) {
            dispatch(nowPlayingMovies());
            setMoviesDispatched(true);
        }
    }, [dispatch, moviesDispatched]);

    return (
        <section className="movies-route">
            <Header />
            <div className="movies-wrapper content-fit">
                <div
                    className="heading-wrapper display-flex flex-row"
                    id="movies-scroll"
                >
                    <FaCaretRight className="heading-icon" />
                    <Typography  className="heading-title"  variant="h4"  component="div"   >
                        Now Playing
                    </Typography>
                </div>
                <div className="movies-cards display-flex flex-row">
                    {nowPlayingMoviesList ? (
                        nowPlayingMoviesList.map((movie) => (
                            <div  key={movie.id}   className="movie-card"
                                onClick={() =>  navigate(
                                        `/movies/` +
                                            movie.title
                                                .replace(/\s+/g, "-")
                                                .toLowerCase(),
                                        { state: { movie: movie } }
                                    )
                                }
                            >
                                <img  className="movie-card-img"  src={movie.imgURL}  alt="movie-img"  />

                                <Typography  className="movie-name"  variant="h6"  component="div" >
                                    {movie.title}
                                </Typography>

                                <div className="movie-card-info">
                                    <div className="rate-wrapper display-flex flex-row">

                                        <Typography  className="rate-number"  variant="subtitle1"  component="div"  >
                                            {movie.rate}/10
                                        </Typography>

                                        <img  className="imdb-img"  src="https://akwam.in/style/assets/images/imdb.png"  alt="imdb"  />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            {[...Array(3)].map((e, i) => (
                                <div   className="movie-card"   key={i}  onClick={() => navigate(`/movies/...`)}   >

                                    <img   className="movie-card-img"   src={LoaderImgURL}  alt="movie-img"  />

                                    <Typography  className="movie-name"  variant="h6"   component="div"   >
                                        ...
                                    </Typography>

                                    <div className="movie-card-info">
                                        <div className="rate-wrapper display-flex flex-row">
                                            
                                            <Typography  className="rate-number"   variant="subtitle1"   component="div"   >
                                                ~/10
                                            </Typography>
                                            
                                            <img   className="imdb-img"   src="https://akwam.in/style/assets/images/imdb.png"  alt="imdb"   />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Movies;
