import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { nowPlayingMovies } from "../../redux/actions/movies-actions";

import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";

const LoaderImgURL =
    "https://i.pinimg.com/originals/94/20/5e/94205e1ed8ea69428c3fd9b81d22ac4b.gif";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [moviesDispatched, setMoviesDispatched] = useState(false);

    const nowPlayingMoviesList = useSelector(
        (state) => state.movies.nowPlayingMoviesList
    );

    useEffect(() => {
        if (!moviesDispatched) {
            dispatch(nowPlayingMovies());
            setMoviesDispatched(true);
        }
    }, [dispatch, moviesDispatched]);

    var settings = {
        dots: true,
        arrows: true,
        draggable: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            {nowPlayingMoviesList ? (
                <Slider className="slick-slider" {...settings}>
                    {nowPlayingMoviesList.map((movie) => (
                        <img  key={movie.id}  className="slider-img"  src={movie.imgURL}  alt="slider-img"  onClick={() =>  navigate(
                                    `/movies/` +
                                        movie.title
                                            .replace(/\s+/g, "-")
                                            .toLowerCase(),
                                    { state: { movie: movie } }
                                )
                            }
                        /> 
                    ))}
                </Slider>
            ) : (
                <Slider className="slick-slider" {...settings}>
                    {[...Array(6)].map((e, i) => (
                        <div className="content-loader">
                        <ContentLoader  speed={2}  foregroundColor={"#999999"} />
                    </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default Home;
