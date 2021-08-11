import React, { Component } from 'react';


class Cards extends Component {


    constructor(props) {
        super(props);
        this.state = {
            actualRoute: '',
            splittedActualRoute: []

        }
    }


    componentDidMount() {
        this.actualRoute = this.router.actualRoute.incluides('?') ? this.router.actualRoute.substring(0, this.router.actualRoute.indexOf('?')) : this.router.actualRoute;
        this.splittedActualRoute = this.actualRoute.splittedActualRoute('/');
    }


    render() {
        return (
            <div className="route-inidicator-container">
                {this.splittedActualRoute.map((path) => {
                    return (
                        <span className="route-inidicator-name">
                            if(path){
                                '/ ' + ('nameProduct' + path)}
                        </span>
                    );

                })}
            </div>
        );
    }
}

export default Cards;