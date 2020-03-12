import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const ShibeScroller = props => {

  const [shibes, setShibes] = useState([]);

  
  const getShibes = e => {
    axios.get("http://localhost:8000/shibes")
    .then(res => setShibes( [...shibes, ...res.data]) )
    .catch(err => console.log(err));
  }
  
  useEffect( () => {
    getShibes();
  }, []);

  const handleScroll = e => {
    const bottom = e.target.scrollHeight - e.target.scrollTop <  e.target.clientHeight + 10;
    if (bottom) {
      getShibes();
    }
  }

  return (
    <>
    <div className="row" onScroll={ handleScroll } style={{height:'500px', overflow: 'auto'}}>
      <div className="col-sm-6">
        {
          shibes.map( (url, i) =>
            <img src={url} alt="dog image" key={i} width="100%" />
          )
        }
      </div>
    </div>
    {/* <button className="btn btn-dark" onClick={ getShibes }>Load more shibes</button> */}
    </>
  )
}


function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Shiba Infinite</h1>
      </div>
      <ShibeScroller />
    </div>
  );
}

export default App;
