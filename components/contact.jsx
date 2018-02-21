import React from 'react';

export default class Contact extends React.Component {

  render() {
    return (
    <div class="jumbotron d-flex align-items-center">
      <div className="container text-center">
        <h1><i className="icon-envelope sm-icons"></i></h1>

        <form>
          <div class="form-group">
            <input type="text" class="form" id="exampleInputPassword1" placeholder="Name"/>
          </div><br/>
          <div class="form-group">
            <input type="email" class="form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div><br/>
          <div class="form-group">
            <textarea type="password" class="form" id="exampleInputPassword1" placeholder="message"></textarea>
          </div>
          <button type="submit" class="btn btn-dark btn-lg">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}
