import React, { useEffect, useState } from "react";
import { getAllMovies } from "../api";
import "./Movieslist.css";
const Movieslist = () => {
  const [movies, setMovies] = useState();
  const fetchdata = async () => {
    const data = await getAllMovies(1);
    setMovies(data);
    console.log("data", data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="Movieslist">
     <div className="h1"><h1>ALL MOVIES</h1></div> 
      {movies?.map((item) => {
        return (
          <>
            <div className="Movieslist-item">
              <div className="Movieslist-img">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                  alt=""
                />
                
              </div>
              <div className="Movieslist-text">
                
                <h1> Name-{item?.original_title && item.title}</h1>
                {/* <h1>{item?.original_name && item.original_name}</h1> */}
             
                <h1>Popularity-{item.popularity}%</h1>
                <h3><span>Overview-</span>{item.overview}</h3>
                <h1> Relese Date-{item.release_date}</h1>
              </div>
             
            </div>
         
          </>
        );
      })}
    </div>
  );
};

export default Movieslist;
