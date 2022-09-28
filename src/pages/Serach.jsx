import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Search.css"
function Serach() {
    const {name}= useParams()
    const [movie, setMovie] = useState([]);
  
    useEffect(()=>{
      axios
      .get(`https://www.omdbapi.com/?s=${name}&apikey=50722152`)
      .then((res) => {
        const data = res.data.Search;
        console.log(data);
        setMovie(data);
      })
    },[])
  
    // console.log(props.movie)
    return (
      <>
        <div className="main">
         
          <div className="Container">
            {movie.map((movie, index) => {
              return (
                <div className="card">
                 <Link to={`/movie/${movie.imdbID}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={movie.Poster} />
                <div className="cards__overlay">
                    <div className="card__title">{movie.Title}</div>
                    <div className="card__runtime">
                        {movie.Year}
                        <span className="card__rating">{movie.Type}<i className="fas fa-star" /></span>
                    </div>
                </div>
            </div>
        </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}

export default Serach