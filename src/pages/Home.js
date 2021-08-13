import React from 'react';
import '../styles/Home.scss';
import Search from '../components/Search';




const Home = props => {
  return (
    <div className="home">
        <Search />
        {props.children}
    </div>
  );
};

export default Home;




