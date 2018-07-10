import React from 'react';
import ReactDOM from 'react-dom';
import About from '../about.jsx';
import Contact from '../contact.jsx';

export default class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.onchange = this.onchange.bind(this)
  }

  onchange(link){
    /*
     *Make sure to import the Component to be rendered
     *Add case by adding the parameter name to the case
     *render the component into main div.
     */
    switch (link) {
      case 'about':
        ReactDOM.render(<About/>, main);
        break;
      case 'contact':
        ReactDOM.render(<Contact/>, main);
        break;
      default:

    }
  }
  render() {

    return (
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        {/*---Change Navbar title here -----*/}
        <a className="navbar-brand text-white" href="/"><h3>Starter-Template</h3></a>
        {/*---Change or Delete Possible Text here -----*/}
        <span className="navbar-text text-white text-faded">
          Possible Text Here
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
          {/*--- *Add more links here, if adding a component, use the onClick functions
                 *Change onchange() parameter to link name
                 *Add case to onchange switch function-----*/}
            <li className="nav-item">
              <a className="nav-link" onClick={()=>this.onchange('about')} href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>this.onchange('contact')} href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}
