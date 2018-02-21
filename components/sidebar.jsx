import React from 'react';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header bg-primary text-white">
            Side-Widget
          </div>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </div>
        </div>
      <br/>
      <div className="card">
        <div className="card-header bg-primary text-white">
          Latest
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href="#">Link</a></li>
            <li className="list-group-item"><a href="#">Link</a></li>
            <li className="list-group-item"><a href="#">Link</a></li>
            <li className="list-group-item"><a href="#">Link</a></li>
            <li className="list-group-item"><a href="#">Link</a></li>
          </ul>
        </div>
      </div>
        <br/>
        <div className="card">
          <div className="card-header bg-primary text-white">
            Side-Widget
          </div>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </div>
        </div>
      </div>
    );
  }
}
