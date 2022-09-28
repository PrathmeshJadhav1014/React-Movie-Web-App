import React, { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    const [name, setName] = useState();

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo1OSwidyI6MTI1MCwiZnMiOjQ3LCJmZ2MiOiIjRkZGMjE1IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TW92aWUgQXBw/madrigal.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
              
                
            </div>
            <div className="headerRight">
            <input type="text" placeholder="Enter movie name" onChange={(e) => setName(e.target.value)} />
                <Link to={`/search/${name}`} style={{textDecoration: "none"}}><button >Search</button></Link>
            </div>
        </div>
    )
}

export default Header