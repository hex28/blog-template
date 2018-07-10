import React from 'react';
import Navigation from '../partials/navigation.jsx'

export default class Header extends React.Component {

  render() {
    return (
    <div className="bg-dark">
    {/* Imported Navigation from jsx*/}
      <Navigation/>
      <div className="jumbotron d-flex align-items-center bg-primary">
        <div className="container text-center">
          <header>
            <a href="http://www.andy-huynh.com" target="_blank">
            {/*--- Can change with your own Image here ----*/}
            <svg width="20%" height="20%" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50%" cy="50%" r="20%" className="circle" /></svg>
              </a>
            <h1>- Starter Template -</h1>
          </header>
        </div>
      </div>
    </div>
    );
  }
}
