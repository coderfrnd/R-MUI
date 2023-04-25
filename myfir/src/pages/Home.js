import React from 'react'
import Lay from '../component/Layout/Lay'
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpeg'
import '../styles/Home.css'

 function Home() {
  return (

    <Lay>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="container">
          <h1>Food Website</h1>
          <p>Best Food in UP</p>
          <Link to='/menu'>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Lay>


  );
}
export default Home;
