import React, { Component } from 'react';
import '../styles/Search.scss';
import logo from '../assets/images/Logo_ML.png';
import iconSearch from '../assets/images/ic_SearchG.png';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <div className="search">
                <div className="search__content">
                    <div className="search__content--logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="search__content--searhbar">
                        <input className="search__content--searhbar-input" placeholder="Nunca dejes de buscar" />
                        <button  className="search__content--searhbar-icon">
                        <img src={iconSearch} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;