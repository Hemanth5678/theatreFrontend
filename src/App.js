import './App.css';
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Link, Route, BrowserRouter as Router, Routes, Switch, BrowserRouter } from 'react-router-dom';
import store from "./redux/store";

import Home from "./components/home/home";

import Movie from "./components/movie/movie";
import Movies from "./components/movie/movies";
import Bookings from "./components/booking/bookings";


import Login from "./components/auth/login";
import Register from "./components/auth/register";

import PageNotFound from "./components/global/page-not-found";


function App() {
  return (
      <Provider store={store}>
      <div className="App">
  
        <main className= "App-body">
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:title" element={<Movie />} />

            <Route path="/bookings" element={<Bookings />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/error" element={<PageNotFound />} />
            <Route path="" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/greeting" element={<Movies movieType="show" />} /> */} 
            {/* passing props in Route path */}
            <Route element={<PageNotFound />} />
        </Routes>
        </BrowserRouter>

        </main>
  
    </div>
      </Provider>
  
      
    );
}

export default App;
