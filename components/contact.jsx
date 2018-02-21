import React from 'react';

export default class Contact extends React.Component {

  render() {
    return (
    <div className="jumbotron d-flex align-items-center">
      <div className="container text-center">
        <h1><i className="icon-envelope sm-icons"></i></h1>

        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"/>
          </div><br/>
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div><br/>
          <div className="form-group">
            <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="message"></textarea>
          </div>
          <button type="submit" className="btn btn-dark btn-lg">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}
